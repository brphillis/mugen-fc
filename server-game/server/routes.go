package server

import (
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"

	"server-game/rooms"
)

func RegisterRoutes() *mux.Router {

	rm := rooms.NewRoomManager()

	r := mux.NewRouter()

	r.HandleFunc("/health", HealthCheckHandler).Methods("GET")

	r.HandleFunc("/rooms", rm.GetRooms).Methods("GET")

	r.HandleFunc("/createRoom", rm.CreateRoom).Methods("POST")

	r.HandleFunc("/joinRoom", rm.JoinRoom).Methods("POST")

	r.HandleFunc("/room/{id}", rm.GetRoomDetails).Methods("GET", "POST")

	r.HandleFunc("/ws/room/{id}", rm.ServeWs).Methods("GET")

	r.HandleFunc("/room/{id}/update/{player}", rm.UpdatePlayerCharacter).Methods("POST")

	return r

}

func HealthCheckHandler(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK) // Return HTTP 200 OK
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{"status": "healthy"})
}
