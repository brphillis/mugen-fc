package server

import (
	"log"
	"net/http"
	"os"
)

// Middleware to handle CORS
func corsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		origin := r.Header.Get("Origin")

		if isValidOrigin(origin) {
			w.Header().Set("Access-Control-Allow-Origin", origin)
			w.Header().Set("Access-Control-Allow-Credentials", "true")
		} else if origin != "" && !isValidOrigin(origin) {
			// Log the origin of the disallowed CORS request
			log.Println("Disallowed CORS request from:", origin)
		}
		w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
		if r.Method == "OPTIONS" {

			w.WriteHeader(http.StatusOK)
			return
		}
		next.ServeHTTP(w, r)
	})
}

// Function to check if the request's origin is in the list of allowed origins
func isValidOrigin(origin string) bool {
	clientUrl := os.Getenv("CLIENT_URL")

	var allowedOrigins = []string{clientUrl}

	appEnv := os.Getenv("APP_ENV")

	if appEnv == "local" || appEnv == "localcontainer" {
		allowedOrigins = append(allowedOrigins, "http://localhost:3000")
	}

	for _, o := range allowedOrigins {
		if o == origin {
			return true
		}
	}
	return false
}
