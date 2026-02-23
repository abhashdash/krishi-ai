#!/bin/bash

# KrishiAI Project Setup Script
# This script helps verify the project structure is correct

echo "═══════════════════════════════════════════════════════════"
echo "   KrishiAI Project Structure Verification"
echo "═══════════════════════════════════════════════════════════"
echo ""

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Counters
total_checks=0
passed_checks=0

# Function to check if directory exists
check_directory() {
    local dir=$1
    local name=$2
    ((total_checks++))

    if [ -d "$dir" ]; then
        echo -e "${GREEN}✓${NC} $name exists"
        ((passed_checks++))
    else
        echo -e "${RED}✗${NC} $name missing"
    fi
}

# Function to check if file exists
check_file() {
    local file=$1
    local name=$2
    ((total_checks++))

    if [ -f "$file" ]; then
        echo -e "${GREEN}✓${NC} $name exists"
        ((passed_checks++))
    else
        echo -e "${RED}✗${NC} $name missing"
    fi
}

echo "Checking directory structure..."
echo ""

# Check main directories
echo "Main Directories:"
check_directory "public" "public/"
check_directory "src" "src/"
check_directory "src/pages" "src/pages/"
check_directory "src/styles" "src/styles/"
check_directory "src/js" "src/js/"
check_directory "docs" "docs/"
check_directory "tests" "tests/"
check_directory ".github" ".github/"
check_directory ".github/workflows" ".github/workflows/"

echo ""
echo "Page Directories (13 pages):"
check_directory "src/pages/home" "home/"
check_directory "src/pages/about" "about/"
check_directory "src/pages/admin" "admin/"
check_directory "src/pages/advisory" "advisory/"
check_directory "src/pages/contact" "contact/"
check_directory "src/pages/feedback" "feedback/"
check_directory "src/pages/knowledge-library" "knowledge-library/"
check_directory "src/pages/login" "login/"
check_directory "src/pages/marketplace" "marketplace/"
check_directory "src/pages/notifications" "notifications/"
check_directory "src/pages/profile" "profile/"
check_directory "src/pages/query" "query/"
check_directory "src/pages/register" "register/"

echo ""
echo "Configuration Files:"
check_file "package.json" "package.json"
check_file ".gitignore" ".gitignore"
check_file ".eslintrc.json" ".eslintrc.json"
check_file ".prettierrc" ".prettierrc"
check_file ".editorconfig" ".editorconfig"
check_file "LICENSE" "LICENSE"

echo ""
echo "Documentation Files:"
check_file "README.md" "README.md"
check_file "CONTRIBUTING.md" "CONTRIBUTING.md"
check_file "CHANGELOG.md" "CHANGELOG.md"
check_file "QUICKSTART.md" "QUICKSTART.md"
check_file "docs/DEVELOPMENT.md" "docs/DEVELOPMENT.md"
check_file "docs/STRUCTURE.md" "docs/STRUCTURE.md"

echo ""
echo "Page Files (samples from each category):"
check_file "src/pages/home/HOME.html" "HOME.html"
check_file "src/pages/home/HOME.css" "HOME.css"
check_file "src/pages/home/HOME.js" "HOME.js"
check_file "src/pages/login/LOGIN.html" "LOGIN.html"
check_file "src/js/weather.js" "weather.js"

echo ""
echo "═══════════════════════════════════════════════════════════"
echo "Results: $passed_checks / $total_checks checks passed"
echo "═══════════════════════════════════════════════════════════"

if [ $passed_checks -eq $total_checks ]; then
    echo -e "${GREEN}✓ Project structure is correct!${NC}"
    echo ""
    echo "Next steps:"
    echo "1. Update path references in all HTML files"
    echo "2. Test the application with Live Server"
    echo "3. Run: npm install"
    echo "4. Run: npm run lint"
    exit 0
else
    echo -e "${RED}✗ Some files or directories are missing!${NC}"
    echo "Missing: $((total_checks - passed_checks)) items"
    exit 1
fi
