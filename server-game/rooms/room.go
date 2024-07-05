package rooms

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"sync"
	"time"

	"github.com/gorilla/websocket"
)

type message struct {
	Action         string         `json:"action"`
	Username       string         `json:"username,omitempty"`
	PlayerOneState characterState `json:"playerOneState,omitempty"`
	PlayerTwoState characterState `json:"playerTwoState,omitempty"`
	GameState      gameState      `json:"gameState,omitempty"`
}

type room struct {
	Id               string `json:"id,omitempty"`
	roomManager      *roomManager
	clients          map[*Client]*Client
	join             chan *Client
	leave            chan *Client
	forward          chan []byte
	stopRound        chan struct{}
	stopRoom         chan struct{}
	PlayerOneState   characterState `json:"playerOneState,omitempty"`
	PlayerTwoState   characterState `json:"playerTwoState,omitempty"`
	Name             string         `json:"name,omitempty"`
	gameState        gameState
	structLock       sync.RWMutex
	lastClientLeftAt time.Time
}

type gameState struct {
	Round     int   `json:"round,omitempty"`
	Time      int   `json:"time,omitempty"`
	Winners   []int `json:"winners,omitempty"`
	Initiated bool  `json:"initiated,omitempty"`
	GameOver  bool  `json:"gameOver,omitempty"`
}

type characterState struct {
	X            float64 `json:"x,omitempty"`
	Y            float64 `json:"y,omitempty"`
	Vy           float64 `json:"vy,omitempty"`
	Vx           float64 `json:"vx,omitempty"`
	ActionNumber int     `json:"actionNumber,omitempty"`
	StateNumber  int     `json:"stateNumber,omitempty"`
	Damage       int     `json:"damage,omitempty"`
	Life         int     `json:"life,omitempty"`
	User         string  `json:"user,omitempty"`
	Name         string  `json:"name,omitempty"`
	Ready        bool    `json:"ready,omitempty"`
	InGame       bool    `json:"inGame,omitempty"`
}

type RoomCreateData struct {
	Name string `json:"name"`
	User string `json:"user"`
}

type RoomJoinData struct {
	Id   string `json:"id"`
	User string `json:"user"`
}

func newRoom(roomID string, rm *roomManager, roomCreateData RoomCreateData) *room {
	r := &room{
		Id:          roomID,
		Name:        roomCreateData.Name,
		clients:     make(map[*Client]*Client),
		join:        make(chan *Client),
		leave:       make(chan *Client),
		forward:     make(chan []byte),
		roomManager: rm,
		stopRoom:    make(chan struct{}),
	}

	r.PlayerOneState.Life = 500
	r.PlayerOneState.Ready = false
	r.PlayerOneState.InGame = false

	r.PlayerTwoState.Life = 500
	r.PlayerTwoState.Ready = false
	r.PlayerTwoState.InGame = false

	r.gameState.Round = 0
	r.gameState.Time = 120

	go r.startBroadcast()
	// go r.checkEmptyRoom()

	return r
}

func (r *room) run() {
	for {
		select {
		case <-r.stopRoom:
			fmt.Println("room has been stopped")
			return
		case client := <-r.join:

			r.clients[client] = client

			for client := range r.clients {
				r.sendGameState(client)
			}

			if len(r.clients) >= 1 {
				r.lastClientLeftAt = time.Time{}
			}

		case client := <-r.leave:

			r.removeClient(client)

			if !r.PlayerOneState.Ready || !r.PlayerTwoState.Ready && !r.gameState.Initiated {
				time.AfterFunc(6*time.Second, func() {
					r.handlePlayerLeaveRoom(client)
				})
			}

			if len(r.clients) == 0 {
				r.lastClientLeftAt = time.Now()
			}

		case msg := <-r.forward:
			for client := range r.clients {
				client.send <- msg
			}
		}
	}
}

func (r *room) removeClient(client *Client) {
	// Locking the room's state to prevent race conditions if using goroutines
	r.structLock.Lock()
	defer r.structLock.Unlock()

	// Check if the client exists before attempting to remove
	if _, exists := r.clients[client]; exists {
		delete(r.clients, client)
		close(client.send)
	} else {
		fmt.Println("Client not found in the room: ", client)
	}
}

const (
	socketBufferSize  = 1024
	messageBufferSize = 256
)

var upgrader = &websocket.Upgrader{
	ReadBufferSize:  socketBufferSize,
	WriteBufferSize: socketBufferSize,
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

func (r *room) ServeHTTP(w http.ResponseWriter, req *http.Request) {
	socket, err := upgrader.Upgrade(w, req, nil)
	if err != nil {
		log.Fatal("servehttp ftl error: ", err)
		return
	}

	authenticatedUser, err := authenticateClient(req.Header)
	if err != nil {
		log.Printf("authentication failed: %v", err)
		return
	}

	client := &Client{
		userName: authenticatedUser,
		socket:   socket,
		send:     make(chan []byte, messageBufferSize),
		room:     r,
		headers:  req.Header,
	}
	r.join <- client
	defer func() {
		r.leave <- client
		socket.Close()
	}()

	go client.write()
	client.read(r)
}

func (r *room) sendGameState(client *Client) {
	msg, err := json.Marshal(message{
		Action:         "game_state",
		PlayerOneState: r.PlayerOneState,
		PlayerTwoState: r.PlayerTwoState,
		GameState:      r.gameState,
	})
	if err != nil {
		log.Println("error marshaling initial game state: ", err)
		return
	}
	client.send <- msg
}

func (r *room) startBroadcast() {
	ticker := time.NewTicker(10 * time.Millisecond)
	defer ticker.Stop()

	for {
		select {
		case <-r.stopRoom:
			fmt.Println("broadcast has been stopped")
			return

		case <-ticker.C:

			if r.gameState.Initiated && r.PlayerTwoState.Life <= 0 && r.PlayerOneState.Life > 0 {
				r.declareWinner(1)
			} else if r.gameState.Initiated && r.PlayerOneState.Life <= 0 && r.PlayerTwoState.Life > 0 {
				r.declareWinner(2)
			} else if r.gameState.Initiated && r.PlayerOneState.Life > 0 && r.PlayerTwoState.Life > 0 {
				msg, err := json.Marshal(message{
					Action:         "game_state",
					PlayerOneState: r.PlayerOneState,
					PlayerTwoState: r.PlayerTwoState,
					GameState:      r.gameState,
				})

				if err != nil {
					log.Println("error marshaling game state: ", err)
					return
				}

				for client := range r.clients {
					client.send <- msg
				}
			}

		}
	}
}

func (r *room) initiateRound() {
	r.stopRound = make(chan struct{})

	r.gameState.Round = r.gameState.Round + 1
	r.gameState.Initiated = true
	r.gameState.Time = 120
	r.PlayerOneState.Life = 500
	r.PlayerTwoState.Life = 500

	go r.startRoundTimer()

	r.initiateClientRound()
}

func (r *room) startRoundTimer() {
	for {
		ticker := time.NewTicker(1 * time.Second)
		select {
		case <-r.stopRound:
			ticker.Stop()
			return
		case <-ticker.C:
			if !r.gameState.Initiated {
				close(r.stopRound)
				ticker.Stop()
				return
			}

			r.structLock.Lock()

			if r.gameState.Time <= 0 && r.PlayerOneState.Life > 0 && r.PlayerTwoState.Life > 0 {
				// Draw
				ticker.Stop()
				r.declareWinner(3)
			} else {
				r.gameState.Time--
			}

			r.structLock.Unlock()
		}
	}
}

func (r *room) initiateClientRound() {

	msg, err := json.Marshal(message{
		Action:         "round_start",
		PlayerOneState: r.PlayerOneState,
		PlayerTwoState: r.PlayerTwoState,
		GameState:      r.gameState,
	})

	if err != nil {
		log.Println("error marshaling start round: ", err)
		return
	}

	for client := range r.clients {
		client.send <- msg
	}
}

func (r *room) finalizeRound() {

	r.PlayerOneState.Ready = false
	r.PlayerTwoState.Ready = false

	var dynamicAction = "game_state"

	// end game if max round finished
	if r.gameState.Round == 3 {
		r.gameState.GameOver = true
	}

	if r.gameState.GameOver {
		dynamicAction = "game_over"
	}

	msg, err := json.Marshal(message{
		Action:         dynamicAction,
		PlayerOneState: r.PlayerOneState,
		PlayerTwoState: r.PlayerTwoState,
		GameState:      r.gameState,
	})

	if err != nil {
		log.Println("error marshaling game state: ", err)
		return
	}

	for client := range r.clients {
		client.send <- msg
	}
}

func (r *room) declareWinner(winnerPlayerNumber int) {
	close(r.stopRound)

	r.gameState.Initiated = false
	r.gameState.Winners = append(r.gameState.Winners, winnerPlayerNumber)

	msg, err := json.Marshal(message{
		Action:         "round_end",
		PlayerOneState: r.PlayerOneState,
		PlayerTwoState: r.PlayerTwoState,
		GameState:      r.gameState,
	})

	if err != nil {
		log.Println("error marshaling game state: ", err)
		return
	}

	for client := range r.clients {
		client.send <- msg
	}

	time.AfterFunc(5*time.Second, func() {
		r.finalizeRound()
	})
}

func (r *room) handlePlayerLeaveRoom(client *Client) {

	authenticatedUser, err := authenticateClient(client.headers)
	if err != nil {
		log.Println("authentication failed: ", err)
		return
	}

	userStillInRoom := false

	for c := range r.clients {
		if c.userName == authenticatedUser {
			userStillInRoom = true
			break
		}
	}

	if !userStillInRoom {

		if r.PlayerOneState.User == authenticatedUser {

			r.PlayerOneState.User = ""
			r.PlayerOneState.Ready = false

			for client := range r.clients {
				r.sendGameState(client)
			}
		}

		if r.PlayerTwoState.User == authenticatedUser {

			r.PlayerTwoState.User = ""
			r.PlayerTwoState.Ready = false

			for client := range r.clients {
				r.sendGameState(client)
			}
		}

	}
}

// func (r *room) checkEmptyRoom() {
// 	for {
// 		time.Sleep(10 * time.Second)
// 		// if room is empty for 60 seconds, we destroy the room
// 		if !r.lastClientLeftAt.IsZero() && len(r.clients) == 0 && time.Since(r.lastClientLeftAt) > 240*time.Second {
// 			r.destroyRoom()
// 			return
// 		}
// 	}
// }

// func (r *room) destroyRoom() {
// 	r.roomManager.lock.Lock()
// 	defer r.roomManager.lock.Unlock()

// 	if r.stopRoom != nil {
// 		close(r.stopRoom)
// 		r.stopRoom = nil // Set the channel to nil after closing
// 	}
// 	if r.join != nil {
// 		close(r.join)
// 		r.join = nil // Set the channel to nil after closing
// 	}
// 	if r.leave != nil {
// 		close(r.leave)
// 		r.leave = nil // Set the channel to nil after closing
// 	}
// 	if r.forward != nil {
// 		close(r.forward)
// 		r.forward = nil // Set the channel to nil after closing
// 	}
// 	if r.stopRound != nil {
// 		close(r.stopRound)
// 		r.stopRound = nil // Set the channel to nil after closing
// 	}

// 	delete(r.roomManager.rooms, r.Id)
// 	log.Printf("room instance has been destroyed due to inactivity, room name: ", r.Name)
// }
