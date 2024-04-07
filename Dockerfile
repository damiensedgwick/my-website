# Use the official Ubuntu image as the base image
FROM ubuntu:latest

# Set the working directory inside the container
WORKDIR /app

# Copy pre-built binary into the container
COPY bin/my-website /app/my-website

# Copy all static files into the container
COPY static /app/static

# Copy all template files into the container
COPY template /app/template

# Expose port 8080 to run the application
EXPOSE 8080

# Command to run the application
CMD ["./my-website"]
