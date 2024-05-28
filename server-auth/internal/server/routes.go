package server

import (
	"encoding/json"
	"log"
	"net/http"

	"server-auth/internal/auth"

	"github.com/gorilla/mux"
	"github.com/markbates/goth/gothic"
)

func (s *Server) RegisterRoutes() http.Handler {
	r := mux.NewRouter()

	r.HandleFunc("/health", s.healthHandler)

	r.HandleFunc("/auth", auth.GetAuthenticatedUserSession)
	r.HandleFunc("/auth/{provider}", auth.StartAuthFunction)
	r.HandleFunc("/auth/callback/{provider}", auth.GetAuthCallbackFunction)

	r.HandleFunc("/logout/{provider}", func(res http.ResponseWriter, req *http.Request) {
		gothic.Logout(res, req)
		res.Header().Set("Location", "/")
		res.WriteHeader(http.StatusTemporaryRedirect)
	}).Methods("GET")

	return r
}

func (s *Server) healthHandler(w http.ResponseWriter, r *http.Request) {
	jsonResp, err := json.Marshal(s.db.Health())

	if err != nil {
		log.Fatalf("error handling JSON marshal. Err: %v", err)
	}

	_, _ = w.Write(jsonResp)
}
