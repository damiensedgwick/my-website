.PHONY: all clean build run

BINARY_NAME=my-website

all: clean build run

clean:
	@echo "Cleaning up..."
	@go clean
	@rm dist/$(BINARY_NAME)

build:
	@echo "Building..."
	@go build -o dist/$(BINARY_NAME) main.go

run:
	@echo "Running..."
	@./dist/$(BINARY_NAME)
