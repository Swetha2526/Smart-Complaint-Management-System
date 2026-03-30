#!/bin/bash
# Complaint Resolution Hub - Development Server Starter
# This script starts the development server on http://localhost:5173/

echo ""
echo "============================================"
echo "    Complaint Resolution Hub"
echo "    Starting Development Server..."
echo "============================================"
echo ""

# Check if node is installed
if ! command -v node &> /dev/null; then
    echo "Error: Node.js is not installed"
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

# Check if npm packages are installed
if [ ! -d "node_modules" ]; then
    echo ""
    echo "Installing dependencies (this may take a minute)..."
    echo ""
    npm install
    if [ $? -ne 0 ]; then
        echo "Error: Failed to install dependencies"
        exit 1
    fi
fi

echo ""
echo "Starting development server..."
echo "Opening browser to http://localhost:5173/"
echo ""

# Start the dev server
npm run dev
