package main

import (
	"html/template"
	"io"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

type Template struct {
	tmpl *template.Template
}

func newTemplate() *Template {
	return &Template{
		tmpl: template.Must(template.ParseGlob("template/*.html")),
	}
}

func (t *Template) Render(w io.Writer, name string, data interface{}) error {
	return t.tmpl.ExecuteTemplate(w, name, data)
}

func main() {
	e := echo.New()

	e.Static("/static", "static")

	e.Use(middleware.Recover())

	e.Use(middleware.Secure())

	e.Use(middleware.LoggerWithConfig(middleware.LoggerConfig{
		Format: "method=${method}, uri=${uri}, status=${status}\n",
	}))

	e.Renderer = newTemplate()

	e.GET("/", handleHome())

	e.Logger.Fatal(e.Start(":8080"))
}

func handleHome() echo.HandlerFunc {
	return func(c echo.Context) error {
		return c.Render(200, "index", nil)
	}
}
