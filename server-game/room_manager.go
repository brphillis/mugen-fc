package main

import (
	"encoding/json"
	"log"
	"net/http"
	"sync"

	"github.com/google/uuid"
	"github.com/gorilla/mux"
)

type roomManager struct {
	rooms map[string]*room
	lock  sync.RWMutex
}

type RoomDetails struct {
	Name           string         `json:"name"`
	Id             string         `json:"id"`
	PlayerOneState characterState `json:"playerOneState"`
	PlayerTwoState characterState `json:"playerTwoState"`
	GameState      gameState      `json:"gameState"`
}

type RoomOverviewDetails struct {
	Name    string    `json:"name"`
	Id      string    `json:"id"`
	Players []*string `json:"players"`
}

func newRoomManager() *roomManager {
	return &roomManager{
		rooms: make(map[string]*room),
	}
}

func (rm *roomManager) createRoom(w http.ResponseWriter, r *http.Request) {
	var data RoomCreateData

	if err := json.NewDecoder(r.Body).Decode(&data); err != nil {
		http.Error(w, "Invalid request payload", http.StatusBadRequest)
		return
	}

	rm.lock.Lock()
	defer rm.lock.Unlock()

	roomID := uuid.New().String()
	room := newRoom(roomID, rm, data)

	if room == nil {
		http.Error(w, "Failed to create room", http.StatusInternalServerError)
		return
	}

	rm.rooms[roomID] = room

	go room.run()

	w.Write([]byte(roomID))
}

func (rm *roomManager) getRoom(roomID string) (*room, bool) {
	rm.lock.RLock()
	defer rm.lock.RUnlock()

	r, exists := rm.rooms[roomID]

	return r, exists
}

func (rm *roomManager) getRooms(w http.ResponseWriter, r *http.Request) {
	onlyAvailable := r.URL.Query().Get("onlyAvailable")

	rm.lock.RLock()
	defer rm.lock.RUnlock()

	rooms := make([]RoomOverviewDetails, 0, len(rm.rooms))
	for id, room := range rm.rooms {

		var playerOneUserName, playerTwoUserName *string

		if room.PlayerOneState.User != "" {
			playerOneUserName = &room.PlayerOneState.User
		}
		if room.PlayerTwoState.User != "" {
			playerTwoUserName = &room.PlayerTwoState.User
		}
		if onlyAvailable == "true" && room.PlayerOneState.User != "" && room.PlayerTwoState.User != "" {
			return
		}

		roomDetails := RoomOverviewDetails{
			Name:    room.Name,
			Id:      id,
			Players: []*string{playerOneUserName, playerTwoUserName},
		}
		rooms = append(rooms, roomDetails)
	}

	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(rooms); err != nil {
		http.Error(w, "Failed to encode response", http.StatusInternalServerError)
	}
}

func (rm *roomManager) updatePlayerCharacter(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	roomID := vars["id"]
	player := vars["player"]

	room, exists := rm.getRoom(roomID)
	if !exists {
		http.Error(w, "Room not found", http.StatusNotFound)
		return
	}

	var data struct {
		Name string `json:"name"`
	}

	if err := json.NewDecoder(r.Body).Decode(&data); err != nil {
		http.Error(w, "Invalid request payload", http.StatusBadRequest)
		return
	}

	room.structLock.Lock()
	defer room.structLock.Unlock()

	if player == "playerOne" {
		room.PlayerOneState.Name = data.Name
	} else if player == "playerTwo" {
		room.PlayerTwoState.Name = data.Name
	} else {
		http.Error(w, "Invalid player specified", http.StatusBadRequest)
		return
	}

	w.WriteHeader(http.StatusOK)
}

func (rm *roomManager) joinRoom(w http.ResponseWriter, r *http.Request) {

	authenticatedUser, err := authenticateClient(r.Header)
	if err != nil {
		log.Printf("Authentication failed: %v", err)
		return
	}

	var data RoomJoinData
	if err := json.NewDecoder(r.Body).Decode(&data); err != nil {
		http.Error(w, "Invalid request payload", http.StatusBadRequest)
		return
	}

	room, exists := rm.getRoom(data.Id)
	if !exists {
		http.Error(w, "Room not found", http.StatusNotFound)
		return
	}

	if room.PlayerOneState.User != authenticatedUser && room.PlayerTwoState.User != authenticatedUser {
		room.structLock.Lock()
		defer room.structLock.Unlock()

		if room.PlayerOneState.User == "" {
			room.PlayerOneState.User = authenticatedUser
		} else if room.PlayerTwoState.User == "" {
			room.PlayerTwoState.User = authenticatedUser
		}

		roomDetails := RoomDetails{
			Name:           room.Name,
			Id:             room.Id,
			PlayerOneState: room.PlayerOneState,
			PlayerTwoState: room.PlayerTwoState,
			GameState:      room.gameState,
		}

		for client := range room.clients {
			room.sendGameState(client)
		}

		w.Header().Set("Content-Type", "application/json")
		if err := json.NewEncoder(w).Encode(roomDetails); err != nil {
			http.Error(w, "Failed to encode response", http.StatusInternalServerError)
		}
	} else if room.PlayerOneState.User == authenticatedUser || room.PlayerTwoState.User == authenticatedUser {
		room.structLock.RLock()
		defer room.structLock.RUnlock()

		roomDetails := RoomDetails{
			Name:           room.Name,
			Id:             room.Id,
			PlayerOneState: room.PlayerOneState,
			PlayerTwoState: room.PlayerTwoState,
			GameState:      room.gameState,
		}

		for client := range room.clients {
			room.sendGameState(client)
		}

		w.Header().Set("Content-Type", "application/json")
		if err := json.NewEncoder(w).Encode(roomDetails); err != nil {
			http.Error(w, "Failed to encode response", http.StatusInternalServerError)
		}
	} else {
		w.WriteHeader(http.StatusConflict)
	}

}

func (rm *roomManager) getRoomDetails(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	roomId := vars["id"]

	room, exists := rm.getRoom(roomId)
	if !exists {
		http.Error(w, "Room not found", http.StatusNotFound)
		return
	}

	room.structLock.RLock()
	defer room.structLock.RUnlock()

	details := RoomDetails{
		Name:           room.Name,
		Id:             roomId,
		PlayerOneState: room.PlayerOneState,
		PlayerTwoState: room.PlayerTwoState,
		GameState:      room.gameState,
	}

	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(details); err != nil {
		http.Error(w, "Failed to encode response", http.StatusInternalServerError)
	}
}

func (rm *roomManager) serveWs(w http.ResponseWriter, r *http.Request) {
	id := mux.Vars(r)["id"]
	room, exists := rm.rooms[id]
	if !exists {
		http.Error(w, "Room not found", http.StatusNotFound)
		return
	}
	room.ServeHTTP(w, r)
}
