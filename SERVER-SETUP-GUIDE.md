# 🖥️ BWGS Tracker - Self-Hosted Server Setup Guide

## Overview

This guide will help you set up the BWGS Tracker on a dedicated Ubuntu server with a shared backend, so your entire lab can access the same data in real-time.

---

## 📋 What You'll Get

- **Shared Database**: Everyone sees the same samples
- **Real-Time Updates**: Changes sync across all users
- **Internal Network Only**: Data never leaves your lab
- **Simple Maintenance**: One server, one database file
- **Easy Backups**: Just copy one database file

---

## 🔧 Requirements

### Hardware
- **Old computer/server** with Ubuntu installed
- **Minimum specs**:
  - 2GB RAM (1GB works fine)
  - 20GB storage
  - Network connection
- Can be a 10-year-old machine - this is very lightweight!

### Software
- Ubuntu 20.04 or newer (18.04 works too)
- Network access from lab computers

---

## 🚀 Quick Setup (30 Minutes)

### Step 1: Install Node.js and Dependencies

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js (version 16+)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Verify installation
node --version  # Should show v18.x or higher
npm --version   # Should show 9.x or higher

# Install build tools (for SQLite)
sudo apt install -y build-essential python3
```

### Step 2: Create Project Directory

```bash
# Create directory
mkdir -p ~/bwgs-tracker
cd ~/bwgs-tracker

# Download files (we'll create these)
# For now, you'll need to copy:
# - server.js (backend server)
# - index-server.html (updated frontend)
# - package.json (dependencies)
```

### Step 3: Install Server Dependencies

```bash
# Inside ~/bwgs-tracker directory
npm install express cors better-sqlite3 body-parser
```

### Step 4: Start the Server

```bash
# Start server
node server.js

# You should see:
# "BWGS Tracker Server running on http://0.0.0.0:3000"
```

### Step 5: Access from Lab Computers

```bash
# Find your server's IP address
ip addr show | grep "inet "

# From any lab computer, open browser to:
# http://SERVER-IP:3000
# Example: http://192.168.1.100:3000
```

---

## 🔄 Running Server Automatically (Optional but Recommended)

### Option A: systemd Service (Recommended)

Create a service file so the server starts automatically on boot:

```bash
# Create service file
sudo nano /etc/systemd/system/bwgs-tracker.service
```

Paste this content (replace `YOUR_USERNAME` with your actual username):

```ini
[Unit]
Description=BWGS Tracker Server
After=network.target

[Service]
Type=simple
User=YOUR_USERNAME
WorkingDirectory=/home/YOUR_USERNAME/bwgs-tracker
ExecStart=/usr/bin/node /home/YOUR_USERNAME/bwgs-tracker/server.js
Restart=on-failure
RestartSec=10

[Install]
WantedBy=multi-user.target
```

Enable and start the service:

```bash
# Reload systemd
sudo systemctl daemon-reload

# Enable service (start on boot)
sudo systemctl enable bwgs-tracker

# Start service now
sudo systemctl start bwgs-tracker

# Check status
sudo systemctl status bwgs-tracker

# View logs
sudo journalctl -u bwgs-tracker -f
```

### Option B: PM2 Process Manager (Alternative)

```bash
# Install PM2
sudo npm install -g pm2

# Start server with PM2
pm2 start server.js --name bwgs-tracker

# Save PM2 configuration
pm2 save

# Set PM2 to start on boot
pm2 startup
# Follow the command it gives you (copy-paste and run)

# Useful PM2 commands:
pm2 status              # Check if running
pm2 logs bwgs-tracker   # View logs
pm2 restart bwgs-tracker # Restart server
pm2 stop bwgs-tracker   # Stop server
```

---

## 🌐 Accessing from Lab Computers

### Find Your Server IP

```bash
# On the server, run:
hostname -I
# Example output: 192.168.1.100
```

### Access the Tracker

From any lab computer browser:
```
http://192.168.1.100:3000
```

### Set Up Nice URL (Optional)

Add to your lab's DNS or hosts file:

**On Windows computers:**
```
# Edit: C:\Windows\System32\drivers\etc\hosts
# Add line:
192.168.1.100    bwgs-tracker.local

# Then access at: http://bwgs-tracker.local:3000
```

**On Linux/Mac computers:**
```bash
# Edit: /etc/hosts
sudo nano /etc/hosts

# Add line:
192.168.1.100    bwgs-tracker.local

# Then access at: http://bwgs-tracker.local:3000
```

---

## 💾 Data Backup

All data is stored in one SQLite database file:

```bash
# Database location
~/bwgs-tracker/bwgs-tracker.db

# Backup script (run daily via cron)
#!/bin/bash
DATE=$(date +%Y%m%d)
cp ~/bwgs-tracker/bwgs-tracker.db ~/bwgs-tracker/backups/bwgs-tracker-$DATE.db

# Auto-backup with cron (runs daily at 2 AM)
crontab -e
# Add line:
0 2 * * * cp ~/bwgs-tracker/bwgs-tracker.db ~/bwgs-tracker/backups/bwgs-tracker-$(date +\%Y\%m\%d).db

# Create backup directory
mkdir -p ~/bwgs-tracker/backups
```

### Restore from Backup

```bash
# Stop server
sudo systemctl stop bwgs-tracker
# or: pm2 stop bwgs-tracker

# Restore database
cp ~/bwgs-tracker/backups/bwgs-tracker-20250115.db ~/bwgs-tracker/bwgs-tracker.db

# Start server
sudo systemctl start bwgs-tracker
# or: pm2 start bwgs-tracker
```

---

## 🔒 Security (Internal Network)

Since this is internal-only:

### Firewall (Recommended)

```bash
# Install UFW firewall
sudo apt install ufw

# Allow SSH (so you can remote in)
sudo ufw allow 22

# Allow tracker port from local network only
sudo ufw allow from 192.168.1.0/24 to any port 3000

# Enable firewall
sudo ufw enable

# Check status
sudo ufw status
```

### Password Protection

The tracker already has password protection built-in:
- Default password: `bwgs2025`
- Change in `index-server.html` (look for `correctPassword` variable)

---

## 🐛 Troubleshooting

### Server Won't Start

```bash
# Check if port 3000 is already in use
sudo lsof -i :3000

# If something is using it, kill it or change port in server.js
```

### Can't Access from Other Computers

```bash
# Check server is running
sudo systemctl status bwgs-tracker
# or: pm2 status

# Check firewall
sudo ufw status

# Verify server is listening on all interfaces
sudo netstat -tuln | grep 3000
# Should show: 0.0.0.0:3000 (not 127.0.0.1:3000)

# Test from server itself
curl http://localhost:3000
# Should return HTML
```

### Database Issues

```bash
# Check database file exists
ls -lh ~/bwgs-tracker/bwgs-tracker.db

# Check permissions
sudo chown $USER:$USER ~/bwgs-tracker/bwgs-tracker.db
chmod 644 ~/bwgs-tracker/bwgs-tracker.db

# View database (if needed)
sudo apt install sqlite3
sqlite3 ~/bwgs-tracker/bwgs-tracker.db
# Type: .tables
# Type: .quit
```

---

## 📊 Monitoring

### View Real-Time Logs

```bash
# systemd service:
sudo journalctl -u bwgs-tracker -f

# PM2:
pm2 logs bwgs-tracker
```

### Check Server Status

```bash
# systemd:
sudo systemctl status bwgs-tracker

# PM2:
pm2 status
```

### Check Disk Space

```bash
# Check database size
du -h ~/bwgs-tracker/bwgs-tracker.db

# Check total disk usage
df -h
```

---

## 🔄 Updating the Application

When new features are added:

```bash
# Stop server
sudo systemctl stop bwgs-tracker
# or: pm2 stop bwgs-tracker

# Backup current files
cp index-server.html index-server.html.backup
cp server.js server.js.backup

# Update files (download new versions)
# - Replace index-server.html
# - Replace server.js (if needed)

# Restart server
sudo systemctl start bwgs-tracker
# or: pm2 restart bwgs-tracker
```

---

## 📝 Files Overview

### Files You'll Need

```
~/bwgs-tracker/
├── server.js              # Backend server (Node.js)
├── index-server.html      # Frontend (updated for server mode)
├── package.json           # Dependencies list
├── bwgs-tracker.db        # SQLite database (created automatically)
└── backups/               # Database backups (create this)
    └── bwgs-tracker-YYYYMMDD.db
```

---

## 🎯 Next Steps

1. **Install Ubuntu** on old computer
2. **Follow Quick Setup** above
3. **Set up auto-start** (systemd or PM2)
4. **Configure backups** (cron job)
5. **Test from lab computers**
6. **Train team** on accessing the tracker

---

## 💡 Tips

- **Performance**: SQLite handles 100s of samples easily, no optimization needed
- **Concurrent Users**: 10-20 simultaneous users works great
- **Mobile Access**: Works perfectly on tablets/phones on your internal network
- **Excel Integration**: Export to CSV still works, can save to shared network drive

---

## 📞 Need Help?

When you're ready to implement this:
1. Install Ubuntu on your server
2. Come back to this guide
3. Ask Claude for help with any step!

I can provide:
- The actual `server.js` code
- The updated `index-server.html` code
- The `package.json` file
- Step-by-step troubleshooting

---

## 🔄 Alternative: SharePoint (Simpler but No Multi-User)

If dedicated server is too much, you can:
1. Upload current `index.html` to SharePoint
2. Users access directly from SharePoint
3. Each user has their own data (localStorage)
4. Export/import JSON files to share data

**SharePoint is easier but:**
- ❌ No real-time sync
- ❌ Each user has separate data
- ✅ No server maintenance
- ✅ 5-minute setup

---

**Last Updated:** 2025-10-13
**Version:** 1.0
**Status:** Ready for implementation
