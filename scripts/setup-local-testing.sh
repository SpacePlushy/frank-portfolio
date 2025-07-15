#!/bin/bash

# Script to set up local testing for subdomain portfolio variants

echo "CSR Portfolio Local Testing Setup"
echo "================================="
echo ""

# Check if running on macOS or Linux
if [[ "$OSTYPE" == "darwin"* ]]; then
    HOSTS_FILE="/etc/hosts"
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    HOSTS_FILE="/etc/hosts"
else
    echo "This script only supports macOS and Linux"
    exit 1
fi

# Check if entries already exist
if grep -q "palmisano.local" "$HOSTS_FILE"; then
    echo "✓ Local testing entries already exist in $HOSTS_FILE"
else
    echo "Adding local testing entries to $HOSTS_FILE..."
    echo ""
    echo "This requires sudo access to modify the hosts file."
    echo ""
    
    # Add entries
    echo "# Frank Palmisano Portfolio Local Testing" | sudo tee -a "$HOSTS_FILE" > /dev/null
    echo "127.0.0.1 palmisano.local" | sudo tee -a "$HOSTS_FILE" > /dev/null
    echo "127.0.0.1 csr.palmisano.local" | sudo tee -a "$HOSTS_FILE" > /dev/null
    echo "" | sudo tee -a "$HOSTS_FILE" > /dev/null
    
    echo "✓ Added local testing entries to $HOSTS_FILE"
fi

echo ""
echo "Setup complete! You can now test the portfolios locally:"
echo ""
echo "1. Start the development server: npm run dev"
echo "2. Visit the main portfolio: http://palmisano.local:3000"
echo "3. Visit the CSR portfolio: http://csr.palmisano.local:3000"
echo ""
echo "To remove these entries later, edit $HOSTS_FILE and remove the lines containing 'palmisano.local'"