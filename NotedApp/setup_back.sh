#!/bin/bash

echo "Setting up Backend..."
cd ./backend/noted
docker-compose up -d
npm install

echo "Starting Backend..."
npm run start:dev &
