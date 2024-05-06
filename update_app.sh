#!/bin/bash 

# chmod +x update_app.sh => ./update_app.sh

# Name of your Next.js application
APP_NAME="softaff website"

# Stop the application
pm2 stop "$APP_NAME"

# Remove old process
pm2 delete "$APP_NAME"

# Pull the latest changes from Git
git pull

# Rebuild the Next.js application
npm run build

# Start the application again
pm2 start npm --name "$APP_NAME" -- run start

# save the list of running PM2 processes
pm2 save

# Generate the startup script
sudo env PATH=$PATH:/home/ubuntu/n/bin /home/ubuntu/n/lib/node_modules/pm2/bin/pm2 startup systemd -u ubuntu --hp /home/ubuntu
