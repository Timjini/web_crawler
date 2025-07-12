APP_ENTRY := cmd/api/main.go
APP_NAME := tmp/back-end

.PHONY: prepare
prepare:
	mkdir -p tmp/main

.PHONY: run
run: prepare
	@echo "Running the application..."
	@echo "Using entry point: $(APP_ENTRY)"
	go run $(APP_ENTRY)

.PHONY: build
build:
	mkdir -p tmp
	go build -o $(APP_NAME) $(APP_ENTRY)

.PHONY: clean
clean:
	rm -rf tmp/back-end

.PHONY: test
test:
	go test ./... -v

.PHONY: air
air:
	air