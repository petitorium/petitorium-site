# Petitorium Site

This repository contains the source code for the Petitorium website and documentation.

## Local Development

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the development server:**

   ```bash
   npm start
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## Project Structure

- `docs/`: Markdown files for documentation.
- `static/`: Static assets (images, `install.sh`, etc.).
- `src/`: Custom React components and pages.
- `docusaurus.config.ts`: Main configuration file.

## Installation Script

The installation script is hosted at `/static/install.sh` and is accessible via:
`curl -fsSL https://petitorium.dev/install.sh | bash`
