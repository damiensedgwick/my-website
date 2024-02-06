package main

import (
	"embed"
	"fmt"
	"html/template"
	"log"
	"net/http"
)

//go:embed static
var static embed.FS

//go:embed templates
var templates embed.FS

//go:embed robots.txt
var robotsTxt []byte

func main() {
	http.Handle("/static/", http.FileServer(http.FS(static)))

	http.HandleFunc("/", handler)
	http.HandleFunc("/robots.txt", robots)

	fmt.Println("Server is running at http://localhost:8080")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal(err)
	}
}

func handler(w http.ResponseWriter, r *http.Request) {
	t := template.Must(template.ParseFS(templates, "templates/index.html"))

	if err := t.Execute(w, nil); err != nil {
		log.Fatal(err)
	}
}

func robots(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/plain")
	w.Write(robotsTxt)
}
