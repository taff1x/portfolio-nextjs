#!/bin/bash

# Make the script executable with `chmod +x update_app.sh` and then execute with `./update_app.sh`.

# Define the name of your Next.js application.
APP_NAME="softaff website"

# Stop the running application using PM2.
pm2 stop "$APP_NAME"

# Remove the old process for the application.
pm2 delete "$APP_NAME"

# Discard any changes in the Git working directory and reset to the latest commit.
git reset --hard

# Pull the latest changes from the Git repository.
git pull

# Rebuild the Next.js application with the latest changes.
npm run build

# Start the application again using PM2.
pm2 start npm --name "$APP_NAME" -- run start

# Save the list of running PM2 processes for future reference and automatic restart.
pm2 save

# Generate a startup script to allow PM2 to restart your application automatically on system boot.
# pm2 startup
sudo env PATH=$PATH:/home/ubuntu/n/bin /home/ubuntu/n/lib/node_modules/pm2/bin/pm2 startup systemd -u ubuntu --hp /home/ubuntu
