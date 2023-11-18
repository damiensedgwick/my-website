package main

import (
	"encoding/json"
	"io"
	"net/http"
	"strconv"
	"text/template"
	"time"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

type Template struct {
	templates *template.Template
}

type PageVariables struct {
	Year     string
	Articles []Article
}

type Article struct {
	Title string `json:"title"`
	URL   string `json:"url"`
}

func fetchArticles(username string, limit int) ([]Article, error) {
	url := "https://dev.to/api/articles?username=" + username + "&per_page=" + strconv.Itoa(limit)
	response, err := http.Get(url)
	if err != nil {
		return nil, err
	}
	defer response.Body.Close()

	var articles []Article
	err = json.NewDecoder(response.Body).Decode(&articles)
	if err != nil {
		return nil, err
	}

	return articles, nil
}

func (t *Template) Render(w io.Writer, name string, data interface{}, c echo.Context) error {
	currentYear := time.Now().Year()

	pageVariables := PageVariables{
		Year: strconv.Itoa(currentYear),
	}

	if articles, ok := data.([]Article); ok {
		pageVariables.Articles = articles
	}

	mergedData := map[string]interface{}{
		"PageVariables": pageVariables,
	}

	return t.templates.ExecuteTemplate(w, name, mergedData)
}

func main() {
	t := &Template{
		templates: template.Must(template.ParseGlob("templates/**/*.html")),
	}

	e := echo.New()
	e.Renderer = t
	e.Static("/static", "static")

	e.Use(middleware.LoggerWithConfig(middleware.LoggerConfig{
		Format: "method=${method}, uri=${uri}, status=${status} latency_human=${latency_human}\n",
	}))

	e.GET("/", func(c echo.Context) error {
		articles, err := fetchArticles("damiensedgwick", 5)
		if err != nil {
			return err
		}

		return c.Render(http.StatusOK, "index.html", articles)
	})

	e.Logger.Fatal(e.Start("0.0.0.0:8080"))
}
