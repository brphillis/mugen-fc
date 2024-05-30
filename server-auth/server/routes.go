package server

import (
	"net/http"

	"server-auth/auth"

	"github.com/gorilla/mux"
	"github.com/markbates/goth/gothic"
)

func (s *Server) RegisterRoutes() http.Handler {
	r := mux.NewRouter()

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
