package server

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"strconv"
	"time"

	_ "github.com/joho/godotenv/autoload"
)

type Server struct {
	port int
}

// NewServer creates a new instance of the HTTP server with configured routes and settings.
func NewServer() *http.Server {
	// Get the port from environment variables, default to 8080 if not set
	portStr := os.Getenv("PORT")
	if portStr == "" {
		portStr = "5000"
	}

	port, err := strconv.Atoi(portStr)
	if err != nil {
		log.Fatalf("Invalid port number: %v", err)
	}

	fmt.Println("Running on port:", portStr)

	// Initialize the server struct
	newServer := &Server{
		port: port,
	}

	// Declare server configuration
	server := &http.Server{
		Addr:         fmt.Sprintf(":%d", newServer.port),
		Handler:      corsMiddleware(newServer.RegisterRoutes()),
		IdleTimeout:  time.Minute,
		ReadTimeout:  10 * time.Second,
		WriteTimeout: 30 * time.Second,
	}

	return server
}
