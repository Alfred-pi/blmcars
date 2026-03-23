#!/bin/bash
# BLM Cars — Deploy script
# Usage: ./deploy.sh

set -e

echo "🔨 Building..."
npx astro build

echo "🧹 Clearing gh-pages cache..."
rm -rf node_modules/.cache/gh-pages

echo "📤 Deploying to GitHub Pages..."
touch dist/.nojekyll
npx gh-pages -d dist --dotfiles

echo "✅ Deployed! Check: https://alfred-pi.github.io/blmcars/"
