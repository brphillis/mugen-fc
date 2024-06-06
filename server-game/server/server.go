package server

import (
	"context"
	"log"
	"net"
	"net/http"
	"os"
	"os/signal"
	"time"
)

type Server struct {
	addr   string
	server *http.Server
}

func NewServer(addr string) *Server {
	return &Server{
		addr: addr,
		server: &http.Server{
			Addr:    addr,
			Handler: corsMiddleware(RegisterRoutes()),
		},
	}
}

func (s *Server) Run() {
	// Channel to listen for termination signals
	stop := make(chan os.Signal, 1)
	signal.Notify(stop, os.Interrupt)

	// Run the server in a goroutine
	go func() {
		log.Println("Starting web server on", s.addr)
		if err := s.server.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			log.Fatalf("ListenAndServe: %v", err)
		}
	}()

	// Check if the server is up by attempting to connect to it
	go func() {
		for {
			time.Sleep(1 * time.Second)
			_, err := net.Dial("tcp", s.addr)
			if err == nil {
				log.Println("Running on:", s.addr)
				return
			}
		}
	}()

	// Block until a signal is received
	<-stop

	// Create a context with a timeout to allow for graceful shutdown
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	// Shutdown the server
	log.Println("Shutting down the server...")
	if err := s.server.Shutdown(ctx); err != nil {
		log.Fatalf("Server Shutdown Failed:%+v", err)
	}
	log.Println("Server exited properly")
}
