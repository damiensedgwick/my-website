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

func main() {
	http.Handle("/static/", http.FileServer(http.FS(static)))

	http.HandleFunc("/", handler)

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
