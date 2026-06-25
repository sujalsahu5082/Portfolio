@echo off
title Portfolio Dev Server
color 0A

echo ============================================
echo       Sujal Sahu Portfolio - Dev Server
echo ============================================
echo.

:: Change to the portfolio directory
cd /d "%~dp0"

:: Check if node_modules exists, install if not
if not exist "node_modules\" (
    echo [INFO] node_modules not found. Installing dependencies...
    echo.
    call npm install
    if errorlevel 1 (
        echo [ERROR] Failed to install dependencies. Make sure Node.js is installed.
        pause
        exit /b 1
    )
    echo.
    echo [INFO] Dependencies installed successfully!
    echo.
)

:: Start the dev server in background and open browser after a delay
echo [INFO] Starting Next.js development server...
echo [INFO] The browser will open automatically at http://localhost:3000
echo.
echo Press Ctrl+C to stop the server.
echo.

:: Open browser after 4 seconds delay (server needs time to start)
start "" cmd /c "timeout /t 4 /nobreak >nul && start http://localhost:3000"

:: Start the Next.js dev server (keeps running in this window)
npm run dev

pause
