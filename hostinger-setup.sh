#!/bin/bash

# Hostinger Server Setup Script for Next.js
# Run this script on your Hostinger VPS/Cloud server

echo "🚀 Setting up Fluxorae.com on Hostinger..."

# Update system
echo "📦 Updating system packages..."
sudo apt-get update
sudo apt-get upgrade -y

# Install Node.js 18
echo "📦 Installing Node.js 18..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify Node.js installation
echo "✅ Node.js version:"
node --version
npm --version

# Install PM2 globally
echo "📦 Installing PM2..."
sudo npm install -g pm2

# Install Nginx (if not already installed)
echo "📦 Installing Nginx..."
sudo apt-get install -y nginx

# Create project directory (adjust path as needed)
PROJECT_DIR="/home/$(whoami)/fluxorae"
echo "📁 Creating project directory: $PROJECT_DIR"
mkdir -p $PROJECT_DIR

# Instructions
echo ""
echo "✅ Setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Upload your project files to: $PROJECT_DIR"
echo "2. Run: cd $PROJECT_DIR && npm install"
echo "3. Run: npm run build"
echo "4. Create .env file with your environment variables"
echo "5. Run: pm2 start npm --name 'fluxorae-website' -- start"
echo "6. Configure Nginx (see HOSTINGER_DEPLOYMENT.md)"
echo "7. Setup SSL with certbot"
echo ""
echo "📚 Full instructions: See HOSTINGER_DEPLOYMENT.md"
