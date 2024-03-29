# Use the official Alpine image as the base image
FROM ubuntu:latest

# Set the working directory inside the container
WORKDIR /app

# Copy pre-built binary into the container
COPY dist/my-website /app/my-website

# Expose port 8080 to run the application
EXPOSE 8080

# Command to run the application
CMD ["./my-website"]
