package server

import (
	"fmt"
	"net/http"
	"time"
)

type Server struct {
	addr string
}

// NewServer creates a new instance of the HTTP server with configured routes and settings.
func NewServer(addr string) *http.Server {
	fmt.Println("Running on:", addr)

	// Initialize the server struct
	newServer := &Server{
		addr: addr,
	}

	// Declare server configuration
	server := &http.Server{
		Addr:         newServer.addr,
		Handler:      corsMiddleware(newServer.RegisterRoutes()),
		IdleTimeout:  time.Minute,
		ReadTimeout:  10 * time.Second,
		WriteTimeout: 30 * time.Second,
	}

	return server
}
