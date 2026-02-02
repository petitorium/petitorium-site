#!/bin/bash
# Petitorium Installation Script
# https://petitorium.dev

set -e

# Configuration
OWNER="petitorium"
REPO="petitorium"
BINARY_NAME="petitorium"
VERSION="v0.1.1"

# Detect OS
OS_TYPE=$(uname -s)
case "$OS_TYPE" in
    Linux*)     OS='Linux';;
    Darwin*)    OS='Darwin';;
    *)          echo "Unsupported OS: $OS_TYPE"; exit 1;;
esac

# Detect Architecture
ARCH_TYPE=$(uname -m)
case "$ARCH_TYPE" in
    x86_64*)    ARCH='x86_64';;
    arm64*|aarch64*) ARCH='arm64';;
    *)          echo "Unsupported Architecture: $ARCH_TYPE"; exit 1;;
esac

# Construct download URL
EXTENSION="tar.gz"
FILENAME="${BINARY_NAME}_${OS}_${ARCH}.${EXTENSION}"
URL="https://github.com/${OWNER}/${REPO}/releases/download/${VERSION}/${FILENAME}"
echo "Downloading ${BINARY_NAME} ${VERSION} for ${OS}/${ARCH}..."

# Create temporary directory
TMP_DIR=$(mktemp -d)
cd "$TMP_DIR"

curl -L -o "$FILENAME" "$URL"

# Extract
tar -xzf "$FILENAME"

# Install
echo "Installing to /usr/local/bin (may require sudo)..."
sudo mv "$BINARY_NAME" /usr/local/bin/
sudo chmod +x /usr/local/bin/"$BINARY_NAME"

# Cleanup
cd - > /dev/null
rm -rf "$TMP_DIR"
echo "Successfully installed ${BINARY_NAME}!"
petitorium --version

