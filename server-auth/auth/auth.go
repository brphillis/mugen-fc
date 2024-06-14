package auth

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/goombaio/namegenerator"
	"github.com/gorilla/mux"
	"github.com/gorilla/sessions"
	"github.com/joho/godotenv"
	"github.com/markbates/goth"
	"github.com/markbates/goth/gothic"
	"github.com/markbates/goth/providers/google"
)

const (
	key    = "randomStringExample"
	MaxAge = 86400 * 3 // 3 days
)

// Make the store variable a package-level variable
var Store *sessions.CookieStore

func NewAuth(baseURL string) {
	err := godotenv.Load()
	if err != nil {
		log.Println("No .env file found, using system environment variables")
	} else {
		log.Println(".env file loaded successfully")
	}

	googleClientId := os.Getenv("GOOGLE_CLIENT_ID")
	googleClientSecret := os.Getenv("GOOGLE_CLIENT_SECRET")

	authURL := os.Getenv("AUTH_URL")
	// appEnv := os.Getenv("APP_ENV")

	// // returns localhost if not valid url, need this for local as cant use docker named network name for google auth whitelist
	// callbackURL := returnLocalHostIfNotValidUrlOrIp(authURL) + "/auth/callback/google"

	callbackURL := authURL + "/auth/callback/google"

	Store = sessions.NewCookieStore([]byte(key))
	Store.MaxAge(MaxAge)
	Store.Options.Path = "/"
	Store.Options.Domain = ".crabdance.com"
	Store.Options.HttpOnly = true
	Store.Options.Secure = false

	// if appEnv == "local" {
	// 	Store.Options.Secure = false
	// } else {
	// 	Store.Options.Secure = true
	// }

	gothic.Store = Store

	goth.UseProviders(
		google.New(googleClientId, googleClientSecret, callbackURL),
	)
}

func StartAuthFunction(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	provider := vars["provider"]

	// Set the provider for gothic
	gothic.GetProviderName = func(req *http.Request) (string, error) {
		return provider, nil
	}

	// Begin the authentication process
	gothic.BeginAuthHandler(w, r)
}

func GetAuthCallbackFunction(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	provider := vars["provider"]

	// Set the provider for gothic
	gothic.GetProviderName = func(req *http.Request) (string, error) {
		return provider, nil
	}

	r = r.WithContext(context.WithValue(r.Context(), "provider", provider))

	fmt.Println("provider is: ", provider)

	user, err := gothic.CompleteUserAuth(w, r)
	if err != nil {
		// Log the error and handle re-authentication
		fmt.Printf("auth error: %v\n", err)

		// Clear any existing session
		session, _ := Store.Get(r, "session-name")
		session.Options.MaxAge = -1 // This effectively deletes the session cookie
		session.Save(r, w)

		// Redirect to login to start the authentication process again
		gothic.BeginAuthHandler(w, r)
		return
	}

	seed := time.Now().UTC().UnixNano()
	nameGenerator := namegenerator.NewNameGenerator(seed)
	name := nameGenerator.Generate()

	user.Name = name

	// Create a new session and set user details
	session, _ := Store.Get(r, "session-name")
	session.Values["user"] = user
	err = session.Save(r, w)
	if err != nil {
		http.Error(w, "failed to save session", http.StatusInternalServerError)
		return
	}

	clientUrl := os.Getenv("CLIENT_URL")

	fmt.Println("session created successfully: ", session)

	// http.Redirect(w, r, returnLocalHostIfNotValidUrlOrIp(clientUrl), http.StatusSeeOther)
	http.Redirect(w, r, clientUrl, http.StatusSeeOther)
}

func GetAuthenticatedUserSession(w http.ResponseWriter, r *http.Request) {
	session, err := Store.Get(r, "session-name")
	if err != nil {
		fmt.Println("err: 9000 - get session error is: ", err)
		http.Error(w, "user not authenticated", http.StatusUnauthorized)
		return
	}

	userInterface, ok := session.Values["user"]
	if !ok {
		// User data not found in the session.
		fmt.Println("err: 56000 - there was no user found in session")
		http.Error(w, "no user found in session", http.StatusUnauthorized)
		return
	}

	user, ok := userInterface.(goth.User)
	if !ok {
		// User data is not of type goth.User.
		fmt.Println("err: 3022000 - user found in session is of wrong type")
		http.Error(w, "user found in session is of incorrect type", http.StatusUnauthorized)
		return
	}

	response := map[string]string{
		"userName": user.Name,
		"email":    user.Email,
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
}

// func isDockerName(host string) bool {
// 	// Check for ".com" domain
// 	if strings.Contains(host, ".com") {
// 		return false
// 	}

// 	// Regex to check for valid IP address
// 	ipRegex := regexp.MustCompile(`^(\d{1,3}\.){3}\d{1,3}$`)
// 	if ipRegex.MatchString(host) {
// 		return false
// 	}

// 	return true
// }

// func returnLocalHostIfNotValidUrlOrIp(inputURL string) string {
// 	appEnv := os.Getenv("APP_ENV")
// 	if appEnv != "local" {
// 		return inputURL
// 	}

// 	parsedURL, err := url.Parse(inputURL)
// 	if err != nil {
// 		fmt.Println("error parsing url:", err)
// 		return ""
// 	}

// 	// Check if the hostname (excluding port) is a Docker service name
// 	hostname := strings.Split(parsedURL.Host, ":")[0]
// 	if isDockerName(hostname) {
// 		// Modify the hostname to localhost, but keep the port if specified
// 		port := strings.Split(parsedURL.Host, ":")[1]
// 		if port != "" {
// 			parsedURL.Host = "localhost:" + port
// 		} else {
// 			parsedURL.Host = "localhost"
// 		}
// 	}

// 	return parsedURL.String()
// }
