package main

import (
	"fmt"
	"os"
	"server-auth/auth"
	"server-auth/server"
)

func main() {
	baseURL := returnBaseUrl()

	// Initialize authentication with the domain
	auth.NewAuth(baseURL)

	// Initialize and start the server
	srv := server.NewServer(baseURL)
	err := srv.ListenAndServe()
	if err != nil {
		panic(fmt.Sprintf("cannot start server: %s", err))
	}
}

func returnBaseUrl() string {
	// Load environment variables
	currentEnv := os.Getenv("APP_ENV")

	host := os.Getenv("HOST")
	if host == "" || currentEnv == "local" {
		host = "localhost"
	}

	port := os.Getenv("PORT")
	if port == "" {
		port = "5000"
	}

	baseURL := fmt.Sprintf("%s:%s", host, port)

	return baseURL
}
