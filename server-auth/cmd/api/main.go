package main

import (
	"fmt"
	"os"
	"server-auth/internal/auth"
	"server-auth/internal/server"
)

func main() {
	baseURL := returnBaseUrl()

	// Initialize authentication with the domain
	auth.NewAuth(baseURL)

	// Initialize and start the server
	srv := server.NewServer()
	err := srv.ListenAndServe()
	if err != nil {
		panic(fmt.Sprintf("cannot start server: %s", err))
	}
}

func returnBaseUrl() string {
	// Load environment variables
	currentEnv := os.Getenv("APP_ENV")
	protocol := "https"
	if currentEnv == "local" {
		protocol = "http"
	}

	host := os.Getenv("HOST")
	if host == "" || currentEnv == "local" {
		host = "localhost"
	}

	port := os.Getenv("PORT")
	if port == "" {
		port = "5000"
	}

	baseURL := fmt.Sprintf("%s://%s:%s", protocol, host, port)

	return baseURL
}
