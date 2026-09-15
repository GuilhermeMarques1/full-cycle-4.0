package main

import (
	"fmt"
	"net/http"
)

func main() {
	fmt.Println("Starting server on :8080")
	fmt.Print("Hello, world!")
	http.ListenAndServe(":8080", nil)
}
