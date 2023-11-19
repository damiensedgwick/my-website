# Use the official Alpine image as the base image
FROM alpine:latest

# Set the working directory inside the container
WORKDIR /app

# Copy the pre-built binary into the container
COPY build/my-website-linux /app/my-website

# Expose port 8080 to run the application
EXPOSE 8080

# Command to run the application
CMD ["./my-website"]