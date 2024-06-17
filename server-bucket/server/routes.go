package server

import (
	"github.com/gorilla/mux"

	"context"
	"encoding/base64"
	"encoding/json"
	"io/ioutil"
	"net/http"

	"cloud.google.com/go/storage"
)

type RoundPlayerFiles struct {
	PlayerOneFileName string `json:"playerOneFileName"`
	PlayerOneBase64   string `json:"playerOneBase64"`
	PlayerTwoFileName string `json:"playerTwoFileName"`
	PlayerTwoBase64   string `json:"playerTwoBase64"`
}

func (s *Server) RegisterRoutes() http.Handler {
	r := mux.NewRouter()

	r.HandleFunc("/api/characters", GetGameCharacters).Methods("GET")

	return r

}

func GetGameCharacters(w http.ResponseWriter, r *http.Request) {

	// extract the character name from the query parameters
	playerOneCharacterName := r.URL.Query().Get("playerOne")
	if playerOneCharacterName == "" {
		http.Error(w, "P1 character name is required", http.StatusBadRequest)
		return
	}

	playerTwoCharacterName := r.URL.Query().Get("playerTwo")
	if playerTwoCharacterName == "" {
		http.Error(w, "P2 character name is required", http.StatusBadRequest)
		return
	}

	ctx := context.Background()
	client, err := storage.NewClient(ctx)
	if err != nil {
		http.Error(w, "failed to create client", http.StatusInternalServerError)
		return
	}
	defer client.Close()

	bucketName := "mugen-fc"

	// helper function to get character file content
	getCharacterFileContent := func(characterName string) (string, string, error) {
		prefix := "characters/" + characterName + ".zip"
		bucket := client.Bucket(bucketName)
		obj := bucket.Object(prefix)

		// check if the object exists
		attrs, err := obj.Attrs(ctx)
		if err != nil {
			if err == storage.ErrObjectNotExist {
				return "", "", http.ErrMissingFile
			}
			return "", "", err
		}

		// open the object for reading
		reader, err := obj.NewReader(ctx)
		if err != nil {
			return "", "", err
		}
		defer reader.Close()

		// read the file content
		fileContent, err := ioutil.ReadAll(reader)
		if err != nil {
			return "", "", err
		}

		// encode the file content to base64
		encodedContent := base64.StdEncoding.EncodeToString(fileContent)

		return attrs.Name, encodedContent, nil
	}

	// Get player one character file content
	playerOneFileName, playerOneBase64, err := getCharacterFileContent(playerOneCharacterName)
	if err != nil {
		if err == http.ErrMissingFile {
			http.Error(w, "player one character not found", http.StatusNotFound)
		} else {
			http.Error(w, "failed to get player one character file content", http.StatusInternalServerError)
		}
		return
	}

	// Get player two character file content
	playerTwoFileName, playerTwoBase64, err := getCharacterFileContent(playerTwoCharacterName)
	if err != nil {
		if err == http.ErrMissingFile {
			http.Error(w, "player two character not found", http.StatusNotFound)
		} else {
			http.Error(w, "failed to get player two character file content", http.StatusInternalServerError)
		}
		return
	}

	file := RoundPlayerFiles{
		PlayerOneFileName: playerOneFileName,
		PlayerOneBase64:   playerOneBase64,
		PlayerTwoFileName: playerTwoFileName,
		PlayerTwoBase64:   playerTwoBase64,
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(file)
}
