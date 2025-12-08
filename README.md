# Petitorium Website

This is the official website for Petitorium, a terminal-based API testing client built in Go with plugin support.

## Structure

```
petitorium-site/
├── index.html              # Main landing page
├── assets/
│   ├── css/
│   │   └── style.css      # Main stylesheet
│   ├── js/
│   │   └── main.js        # JavaScript functionality
│   └── images/            # Image assets (screenshots, etc.)
├── src/                   # Source files for development
└── public/               # Public assets
```

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Product Showcase**: Highlights Petitorium's API testing capabilities and plugin ecosystem
- **Documentation Links**: Easy access to project documentation

## Getting Started

1. Open `index.html` in your web browser
2. Or serve the files using a local web server:
   ```bash
   # Using Python 3
   python -m http.server 8000

   # Using Node.js (if you have http-server installed)
   npx http-server
   ```

## Customization

- Edit `assets/css/style.css` to modify the styling
- Update `index.html` to change the content structure
- Modify `assets/js/main.js` to add interactive features

## Deployment

The site is static and can be deployed to any web hosting service:
- GitHub Pages
- Netlify
- Vercel
- Traditional web hosting

Simply upload the files to your web server or use a CI/CD pipeline for automatic deployment.