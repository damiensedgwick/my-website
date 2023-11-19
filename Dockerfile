# Use the official Alpine image as the base image
FROM alpine:latest

# Set the working directory inside the container
WORKDIR /app

# Copy pre-built binary into the container
COPY build/my-website-linux /app/my-website

# Copy templates into the container
COPY templates /app/templates

# Copy static into the container
COPY static /app/static

# Expose port 8080 to run the application
EXPOSE 8080

# Command to run the application
CMD ["./my-website"]