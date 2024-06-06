# syntax=docker/dockerfile:1

FROM golang:1.22

# Set work directory
WORKDIR /app

# Download Go modules
COPY go.mod go.sum ./
RUN go mod download

# Copy the local package files to the container's workspace.
COPY . .

# Copy your service account key file from the project root into the container
COPY key.json /app/key.json

# Set the Google Application Credentials environment variable
ENV GOOGLE_APPLICATION_CREDENTIALS=/app/key.json

# Build the application
RUN CGO_ENABLED=0 GOOS=linux go build -o /docker-gs-ping

# Run the binary
CMD ["/docker-gs-ping"]
