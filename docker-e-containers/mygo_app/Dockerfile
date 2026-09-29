FROM golang:latest AS builder

LABEL maintainer="Guilherme Marques"
LABEL env="production"

WORKDIR /app
COPY . .
RUN CGO_ENABLED=0 go build -o server main.go

# Final stage
# FROM scratch
# COPY --from=builder /app/server /server
ENTRYPOINT ["./server"]
CMD ["8080"]
