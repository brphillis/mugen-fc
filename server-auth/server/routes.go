package server

import (
	"encoding/json"
	"net/http"

	"server-auth/auth"

	"github.com/gorilla/mux"
	"github.com/markbates/goth/gothic"
)

func (s *Server) RegisterRoutes() http.Handler {
	r := mux.NewRouter()
	r.HandleFunc("/healthcheck", HealthCheckHandler).Methods("GET")

	r.HandleFunc("/auth", auth.GetAuthenticatedUserSession)
	r.HandleFunc("/auth/{provider}", auth.StartAuthFunction)
	r.HandleFunc("/auth/callback/{provider}", auth.GetAuthCallbackFunction)

	r.HandleFunc("/logout", func(res http.ResponseWriter, req *http.Request) {
		// Call to logout the user, this might internally handle some session cleanup
		gothic.Logout(res, req)

		// Iterate over all cookies and clear them by setting their MaxAge to -1
		for _, cookie := range req.Cookies() {
			cookie.MaxAge = -1
			cookie.Path = "/" // Ensure you clear the cookie for the entire domain
			http.SetCookie(res, cookie)
		}

		// Set the response header to application/json
		res.Header().Set("Content-Type", "application/json")
		// Encode the success message into JSON and send it as response
		json.NewEncoder(res).Encode(map[string]bool{"success": true})
	}).Methods("GET")

	return r
}

func HealthCheckHandler(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK) // Return HTTP 200 OK
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{"status": "healthy"})
}
