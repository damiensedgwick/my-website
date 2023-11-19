.PHONY: all clean build run

BINARY_NAME=my-website

all: clean build run

clean:
	@echo "Cleaning up..."
	@go clean
	@rm -rf build

build:
	@echo "Building..."
	@GOARCH=amd64 GOOS=darwin go build -o build/$(BINARY_NAME)-darwin cmd/main.go
	@GOARCH=amd64 GOOS=linux go build -o build/$(BINARY_NAME)-linux cmd/main.go

run: build
	@echo "Running..."
	@./build/$(BINARY_NAME)-darwin