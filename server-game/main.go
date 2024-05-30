package main

import (
	"log"
	"os"

	"gameserver/server"

	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Println("No .env file found, using system environment variables")
	} else {
		log.Println(".env file loaded successfully")
	}

	// Get the port from environment variables, default to 8080 if not set
	portStr := os.Getenv("PORT")
	if portStr == "" {
		portStr = "6000"
	}

	server := server.NewServer(portStr)
	server.Run()
}
