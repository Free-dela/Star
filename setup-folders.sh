#!/bin/bash

# Create main snapshot directories
mkdir -p snapshots/chromium

# Create test output directories
mkdir -p test-results
mkdir -p playwright-report
mkdir -p allure-results
mkdir -p allure-report

# Verify directories exist
echo "Checking directories..."
for dir in snapshots snapshots/chromium test-results playwright-report allure-results allure-report; do
    if [ -d "$dir" ]; then
        echo "✓ $dir exists"
    else
        echo "✗ Failed to create $dir"
    fi
done
