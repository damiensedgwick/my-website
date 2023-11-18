.PHONY: all clean build run

BINARY_NAME=my-website

all: clean build run

clean:
	@echo "Cleaning up..."
	@go clean
	@rm -rf build

build:
	@echo "Building..."
	@go build -o build/$(BINARY_NAME) cmd/main.go

run: build
	@echo "Running..."
	@./build/$(BINARY_NAME)