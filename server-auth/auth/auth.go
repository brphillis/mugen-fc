package auth

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"net/url"
	"os"
	"regexp"
	"strings"
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

	if googleClientId == "" {
		log.Println("could not find google_client_id")
	}

	googleClientSecret := os.Getenv("GOOGLE_CLIENT_SECRET")

	if googleClientSecret == "" {
		log.Println("could not find google_client_secret")
	}

	appEnv := os.Getenv("APP_ENV")
	authURL := os.Getenv("AUTH_URL")

	if authURL == "" {
		log.Println("could not find auth_url")
	}

	callbackURL := correctHostForLocalDocker(authURL) + "/auth/callback/google"

	Store = sessions.NewCookieStore([]byte(key))
	Store.MaxAge(MaxAge)
	Store.Options.Path = "/"
	Store.Options.HttpOnly = true
	Store.Options.Secure = false

	if appEnv != "local" && appEnv != "localcontainer" {

		domain := os.Getenv("DOMAIN")

		if domain == "" {
			log.Println("could not find domain env variable")
		}

		Store.Options.Domain = "." + domain

	}

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

	if clientUrl == "" {
		log.Println("could not find client_url")
	}

	http.Redirect(w, r, correctHostForLocalDocker(clientUrl), http.StatusSeeOther)
}

func GetAuthenticatedUserSession(w http.ResponseWriter, r *http.Request) {
	session, err := Store.Get(r, "session-name")
	if err != nil {
		http.Error(w, "user not authenticated", http.StatusUnauthorized)
		return
	}

	userInterface, ok := session.Values["user"]
	if !ok {
		// User data not found in the session.
		http.Error(w, "no user found in session", http.StatusUnauthorized)
		return
	}

	user, ok := userInterface.(goth.User)
	if !ok {
		// User data is not of type goth.User.
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

func isNamedHost(host string) bool {
	// Check for ".com" domain
	if strings.Contains(host, ".com") {
		return false
	}

	// Regex to check for valid IP address
	ipRegex := regexp.MustCompile(`^(\d{1,3}\.){3}\d{1,3}$`)
	if ipRegex.MatchString(host) {
		return false
	}

	return true
}

func correctHostForLocalDocker(inputURL string) string {
	appEnv := os.Getenv("APP_ENV")
	if appEnv != "localcontainer" {
		return inputURL
	}

	parsedURL, err := url.Parse(inputURL)
	if err != nil {
		fmt.Println("error parsing url:", err)
		return ""
	}

	// Check if the hostname (excluding port) is a Docker service name
	hostname := strings.Split(parsedURL.Host, ":")[0]
	if isNamedHost(hostname) {
		// Modify the hostname to localhost, but keep the port if specified
		port := strings.Split(parsedURL.Host, ":")[1]
		if port != "" {
			parsedURL.Host = "localhost:" + port
		} else {
			parsedURL.Host = "localhost"
		}
	}

	return parsedURL.String()
}
