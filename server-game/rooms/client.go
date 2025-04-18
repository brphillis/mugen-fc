package rooms

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/websocket"
)

type Client struct {
	userName string
	socket   *websocket.Conn
	send     chan []byte
	room     *room
	headers  http.Header
}

type authResponse struct {
	UserName string `json:"userName"`
	Email    string `json:"email"`
}

// returns username of authenticated client, also can be used as a truthy value
func authenticateClient(headers http.Header) (string, error) {
	authURL := os.Getenv("AUTH_URL_INTERNAL")
	appEnv := os.Getenv("APP_ENV")

	if appEnv == "local" || appEnv == "localcontainer" {
		authURL = os.Getenv("AUTH_URL")
	}

	if authURL == "" {
		log.Println("could not find auth url for authenticateclient func")
	}

	req, err := http.NewRequest("GET", authURL+"/auth", nil)
	if err != nil {
		return "", err
	}

	// bridge headers
	for key, values := range headers {
		for _, value := range values {
			req.Header.Add(key, value)
		}
	}

	// send the request using an HTTP client
	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	// check if authentication is successful
	if resp.StatusCode != http.StatusOK {
		return "", fmt.Errorf("authentication failed with status: %d", resp.StatusCode)
	}

	var authResp authResponse
	err = json.NewDecoder(resp.Body).Decode(&authResp)
	if err != nil {
		return "", fmt.Errorf("failed to decode response: %v", err)
	}

	return authResp.UserName, nil
}

func (c *Client) read(r *room) {
	defer c.socket.Close()
	for {
		_, msg, err := c.socket.ReadMessage()
		if err != nil {
			return
		}

		var messageData message
		if err := json.Unmarshal(msg, &messageData); err != nil {
			log.Println("error parsing JSON:", err)
			continue
		}

		switch messageData.Action {

		case "game_state":
			r.structLock.Lock()

			// player One
			if messageData.PlayerOneState.ActionNumber != 0 {
				r.PlayerOneState.ActionNumber = messageData.PlayerOneState.ActionNumber
			} else {
				r.PlayerOneState.ActionNumber = 0
			}
			if messageData.PlayerOneState.StateNumber != 0 {
				r.PlayerOneState.StateNumber = messageData.PlayerOneState.StateNumber
			} else {
				r.PlayerOneState.StateNumber = 0
			}
			if messageData.PlayerOneState.X != 0 {
				r.PlayerOneState.X = messageData.PlayerOneState.X
			}
			if messageData.PlayerOneState.Y != 0 {
				r.PlayerOneState.Y = messageData.PlayerOneState.Y
			}
			if messageData.PlayerOneState.Name != "" {
				r.PlayerOneState.Name = messageData.PlayerOneState.Name
			}

			// player Two
			if messageData.PlayerTwoState.ActionNumber != 0 {
				r.PlayerTwoState.ActionNumber = messageData.PlayerTwoState.ActionNumber
			} else {
				r.PlayerTwoState.ActionNumber = 0
			}
			if messageData.PlayerTwoState.StateNumber != 0 {
				r.PlayerTwoState.StateNumber = messageData.PlayerTwoState.StateNumber
			} else {
				r.PlayerTwoState.StateNumber = 0
			}
			if messageData.PlayerTwoState.X != 0 {
				r.PlayerTwoState.X = messageData.PlayerTwoState.X
			}
			if messageData.PlayerTwoState.Y != 0 {
				r.PlayerTwoState.Y = messageData.PlayerTwoState.Y
			}
			if messageData.PlayerTwoState.Name != "" {
				r.PlayerTwoState.Name = messageData.PlayerTwoState.Name
			}

			r.structLock.Unlock()

		case "player_damage":

			r.structLock.Lock()

			if r.gameState.Initiated && messageData.PlayerTwoState.Damage != 0 {
				r.PlayerTwoState.Life -= messageData.PlayerTwoState.Damage
			}

			if r.gameState.Initiated && messageData.PlayerOneState.Damage != 0 {
				r.PlayerOneState.Life -= messageData.PlayerOneState.Damage
			}

			r.structLock.Unlock()

		case "player_character":

			authenticatedUser, err := authenticateClient(c.headers)
			if err != nil {
				log.Printf("authentication failed: %v", err)
				return
			}

			r.structLock.Lock()

			if messageData.PlayerOneState.Name != "" && r.PlayerOneState.User == authenticatedUser {
				r.PlayerOneState.Name = messageData.PlayerOneState.Name
			}

			if messageData.PlayerTwoState.Name != "" && r.PlayerTwoState.User == authenticatedUser {
				r.PlayerTwoState.Name = messageData.PlayerTwoState.Name
			}

			r.structLock.Unlock()

			for client := range r.clients {
				r.sendGameState(client)
			}

		case "player_inGame":

			authenticatedUser, err := authenticateClient(c.headers)
			if err != nil {
				log.Printf("authentication failed: %v", err)
				return
			}

			r.structLock.Lock()

			if messageData.PlayerOneState.InGame && r.PlayerOneState.User == authenticatedUser {
				r.PlayerOneState.InGame = messageData.PlayerOneState.InGame

				for client := range r.clients {
					r.sendGameState(client)
				}
			}

			if messageData.PlayerTwoState.InGame && r.PlayerTwoState.User == authenticatedUser {
				r.PlayerTwoState.InGame = messageData.PlayerTwoState.InGame

				for client := range r.clients {
					r.sendGameState(client)
				}
			}

			// start game when both players ready and ingame
			if r.PlayerTwoState.Ready && r.PlayerOneState.Ready && r.PlayerTwoState.InGame && r.PlayerOneState.InGame && !r.gameState.Initiated {
				r.initiateRound()
			}

			r.structLock.Unlock()

		case "player_ready":
			authenticatedUser, err := authenticateClient(c.headers)
			if err != nil {
				log.Printf("authentication failed: %v", err)
				return
			}

			r.structLock.Lock()

			if r.PlayerOneState.User == authenticatedUser {
				r.PlayerOneState.Ready = messageData.PlayerOneState.Ready

				for client := range r.clients {
					r.sendGameState(client)
				}
			}

			if r.PlayerTwoState.User == authenticatedUser {
				r.PlayerTwoState.Ready = messageData.PlayerTwoState.Ready

				for client := range r.clients {
					r.sendGameState(client)
				}
			}

			// start game when both players ready and ingame
			if r.PlayerOneState.Ready && r.PlayerTwoState.Ready && r.PlayerOneState.InGame && r.PlayerTwoState.InGame && !r.gameState.Initiated {
				r.initiateRound()
			}

			r.structLock.Unlock()

		default:
			r.forward <- msg
		}

	}
}

func (c *Client) write() {
	defer c.socket.Close()
	for msg := range c.send {
		err := c.socket.WriteMessage(websocket.TextMessage, msg)
		if err != nil {
			return
		}
	}
}
