#!/bin/bash

echo "Setting up Frontend..."
cd ./frontend/noted
npm install

echo "Starting Frontend..."
npm run dev
