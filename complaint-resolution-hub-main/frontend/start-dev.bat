@echo off
REM Complaint Resolution Hub - Development Server Starter
REM This script starts the development server on http://localhost:5173/

echo.
echo ============================================
echo    Complaint Resolution Hub
echo    Starting Development Server...
echo ============================================
echo.

REM Check if node is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo Error: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

REM Check if npm packages are installed
if not exist "node_modules" (
    echo.
    echo Installing dependencies (this may take a minute)...
    echo.
    call npm install
    if errorlevel 1 (
        echo Error: Failed to install dependencies
        pause
        exit /b 1
    )
)

echo.
echo Starting development server...
echo Opening browser to http://localhost:5173/
echo.

REM Start the dev server
npm run dev

pause
