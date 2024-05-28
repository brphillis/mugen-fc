package main

import (
	"github.com/gorilla/mux"
)

func RegisterRoutes() *mux.Router {

	rm := newRoomManager()

	r := mux.NewRouter()

	r.HandleFunc("/rooms", rm.getRooms).Methods("GET")

	r.HandleFunc("/createRoom", rm.createRoom).Methods("POST")

	r.HandleFunc("/joinRoom", rm.joinRoom).Methods("POST")

	r.HandleFunc("/room/{id}", rm.getRoomDetails).Methods("GET", "POST")

	r.HandleFunc("/ws/room/{id}", rm.serveWs).Methods("GET")

	r.HandleFunc("/room/{id}/update/{player}", rm.updatePlayerCharacter).Methods("POST")

	return r

}
