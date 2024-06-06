package main

import (
	"fmt"
	"log"
	"os"

	"server-bucket/server"

	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Println("No .env file found, using system environment variables")
	} else {
		log.Println(".env file loaded successfully")
	}

	baseURL := returnBaseUrl()

	// Initialize and start the server
	srv := server.NewServer(baseURL)
	srvErr := srv.ListenAndServe()
	if srvErr != nil {
		panic(fmt.Sprintf("cannot start server: %s", srvErr))
	}
}

func returnBaseUrl() string {
	currentEnv := os.Getenv("APP_ENV")

	host := os.Getenv("HOST")
	if host == "" || currentEnv == "local" {
		host = "0.0.0.0"
	}

	port := os.Getenv("PORT")
	if port == "" {
		port = "4000"
	}

	baseURL := fmt.Sprintf("%s:%s", host, port)

	return baseURL
}
