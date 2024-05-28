package main

import (
	"context"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"

	"cloud.google.com/go/storage"
)

type RoundPlayerFiles struct {
	PlayerOneFileName string `json:"playerOneFileName"`
	PlayerOneBase64   string `json:"playerOneBase64"`
	PlayerTwoFileName string `json:"playerTwoFileName"`
	PlayerTwoBase64   string `json:"playerTwoBase64"`
}

func getGameCharacters(w http.ResponseWriter, r *http.Request) {
	// Extract the character name from the query parameters
	playerOneCharacterName := r.URL.Query().Get("playerOne")
	if playerOneCharacterName == "" {
		http.Error(w, "P1 Character name is required", http.StatusBadRequest)
		return
	}

	playerTwoCharacterName := r.URL.Query().Get("playerTwo")
	if playerTwoCharacterName == "" {
		http.Error(w, "P2 Character name is required", http.StatusBadRequest)
		return
	}

	ctx := context.Background()
	client, err := storage.NewClient(ctx)
	if err != nil {
		http.Error(w, "Failed to create client", http.StatusInternalServerError)
		return
	}
	defer client.Close()

	bucketName := "mugen-fc"

	// Helper function to get character file content
	getCharacterFileContent := func(characterName string) (string, string, error) {
		prefix := "characters/" + characterName + ".zip"
		bucket := client.Bucket(bucketName)
		obj := bucket.Object(prefix)

		// Check if the object exists
		attrs, err := obj.Attrs(ctx)
		if err != nil {
			if err == storage.ErrObjectNotExist {
				return "", "", http.ErrMissingFile
			}
			return "", "", err
		}

		// Open the object for reading
		reader, err := obj.NewReader(ctx)
		if err != nil {
			return "", "", err
		}
		defer reader.Close()

		// Read the file content
		fileContent, err := ioutil.ReadAll(reader)
		if err != nil {
			return "", "", err
		}

		// Encode the file content to base64
		encodedContent := base64.StdEncoding.EncodeToString(fileContent)

		return attrs.Name, encodedContent, nil
	}

	// Get Player One character file content
	playerOneFileName, playerOneBase64, err := getCharacterFileContent(playerOneCharacterName)
	if err != nil {
		if err == http.ErrMissingFile {
			http.Error(w, "Player One character not found", http.StatusNotFound)
		} else {
			http.Error(w, "Failed to get Player One character file content", http.StatusInternalServerError)
		}
		return
	}

	// Get Player Two character file content
	playerTwoFileName, playerTwoBase64, err := getCharacterFileContent(playerTwoCharacterName)
	if err != nil {
		if err == http.ErrMissingFile {
			http.Error(w, "Player Two character not found", http.StatusNotFound)
		} else {
			http.Error(w, "Failed to get Player Two character file content", http.StatusInternalServerError)
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

func main() {
	http.HandleFunc("/api/characters", getGameCharacters)
	port := os.Getenv("PORT")

	if port == "" {
		port = "4000"
	}

	log.Printf("Server started on port %s", port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%s", port), nil))
}
