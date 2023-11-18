FROM golang:1.21.4-alpine3.17

COPY . /app

WORKDIR /app

RUN go build cmd/main.go

EXPOSE 8080

CMD ["/app/main"]