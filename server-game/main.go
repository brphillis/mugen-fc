package main

import (
	"fmt"
	"log"
	"os"

	"gameserver/server"

	"github.com/joho/godotenv"
)

func main() {
	baseURL := returnBaseUrl()

	err := godotenv.Load()
	if err != nil {
		log.Println("No .env file found, using system environment variables")
	} else {
		log.Println(".env file loaded successfully")
	}

	server := server.NewServer(baseURL)
	server.Run()
}

func returnBaseUrl() string {
	currentEnv := os.Getenv("APP_ENV")

	host := os.Getenv("HOST")
	if host == "" || currentEnv == "local" {
		host = "localhost"
	}

	port := os.Getenv("PORT")
	if port == "" {
		port = "8000"
	}

	baseURL := fmt.Sprintf("%s:%s", host, port)

	return baseURL
}
