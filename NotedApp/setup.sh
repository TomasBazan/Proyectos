#!/bin/bash

# Frontend setup
echo "Setting up Frontend..."
cd frontend/noted
npm install

# Backend setup
echo "Setting up Backend..."
cd ../../backend/noted
docker-compose up -d
npm install
cd ../../frontend/noted
# Start Frontend in a new terminal window
echo "Starting Frontend..."
konsole --hold -e npm run dev &
cd ../../backend/noted/
# Start Backend in a new terminal window
echo "Starting Backend..."
konsole --hold -e npm run start:dev &

# Additional setup steps if needed
echo "Setup complete!"
