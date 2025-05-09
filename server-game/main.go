package main

import (
	"fmt"
	"log"
	"os"

	"server-game/server"

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

	server := server.NewServer(baseURL)
	server.Run()
}

func returnBaseUrl() string {
	appEnv := os.Getenv("APP_ENV")

	host := os.Getenv("HOST")
	if host == "" || appEnv == "local" || appEnv == "localcontainer" {
		host = "0.0.0.0"
	}

	port := os.Getenv("PORT")
	if port == "" {
		port = "8000"
	}

	baseURL := fmt.Sprintf("%s:%s", host, port)

	return baseURL
}
