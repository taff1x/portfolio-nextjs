#!/bin/bash

# Name of your Next.js application
APP_NAME="softaff website"

# Change to your application directory
cd /www/portfolio-nextjs

# Stop the application
pm2 stop "$APP_NAME"

# Pull the latest changes from Git
git pull

# Rebuild the Next.js application
npm run build

# Start the application again
pm2 start npm --name "$APP_NAME" -- run start