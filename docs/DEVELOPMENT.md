# Development Guide

## Project Architecture

### Frontend Structure
```
src/
├── pages/          - Individual page components
├── styles/         - Global stylesheets
└── js/             - Utility and helper scripts
```

### Page Structure
Each page follows this pattern:
- `PageName.html` - Template structure
- `PageName.css` - Styling
- `PageName.js` - Functionality

## Getting Started with Development

### Prerequisites
- Visual Studio Code (or preferred IDE)
- Live Server extension (VS Code)
- Basic knowledge of HTML, CSS, JavaScript

### Running Locally
1. Open the project folder in VS Code
2. Install "Live Server" extension
3. Right-click on `public/index.html` → "Open with Live Server"
4. Application will open at `http://127.0.0.1:5500`

## Key Technologies

### Frontend
- **HTML5** - Semantic structure
- **CSS3** - Styling and animations
- **Vanilla JavaScript** - DOM manipulation and logic
- **Font Awesome** - Icon library

### Internationalization (i18n)
- Language support: English, Hindi, Malayalam
- Implementation: `data-translate` attributes
- Loaded via `translations.json` (to be created)

## File Structure Explanation

### `/public`
- Static files and assets
- Entry point for the application
- Images, fonts, icons stored in `/assets`

### `/src/pages`
Each page folder contains:
- `.html` - Structure and layout
- `.css` - Page-specific styles
- `.js` - Page-specific functionality

### `/src/styles`
- Global CSS `main.css` (to consolidate all styles)
- Reset/normalize styles
- Common utility classes

### `/src/js`
- `weather.js` - Weather API integration
- Other utility functions

### `/tests`
- Unit tests for functions
- Integration tests for pages

### `/docs`
- Additional documentation
- API documentation
- User guides

## Naming Conventions

### Files
- `lowercase-with-hyphens.html` for new pages
- `camelCase.js` for JavaScript files
- `kebab-case.css` for stylesheets

### CSS Classes
- `.component-name` for main elements
- `.component-name__element` for sub-elements (BEM)
- `.component-name--modifier` for variations

### JavaScript Variables
- `const` for constants
- `let` for reassignable variables
- `camelCase` for naming
- Meaningful, descriptive names

## Common Tasks

### Adding a New Page
1. Create folder in `src/pages/page-name/`
2. Create `page-name.html`, `page-name.css`, `page-name.js`
3. Add navigation link in `HOME.html`
4. Import styles in the respective page

### Adding New Features
1. Identify the feature scope
2. Add code to appropriate page folder
3. Update tests
4. Document the feature

### Styling
- Keep component styles in respective folders
- Use global styles in `src/styles/` only for truly global rules
- Follow BEM naming convention for CSS classes

### JavaScript
- Use ES6+ syntax
- Keep functions small and focused
- Add meaningful comments
- Use async/await for asynchronous operations

## Performance Tips

1. **Lazy load images** - Use `loading="lazy"` attribute
2. **Minify assets** - In production build
3. **Optimize images** - Use appropriate formats (WebP, JPEG, PNG)
4. **Cache strategies** - Implement HTTP caching headers
5. **Code splitting** - Separate critical CSS

## Debugging

### Browser DevTools
- Use Chrome/Firefox DevTools for debugging
- Set breakpoints in JavaScript
- Use Console for logging
- Check Network tab for API calls

### Common Issues
- **CSS not loading** - Check file paths, ensure relative paths are correct
- **JavaScript errors** - Check browser console for error messages
- **Page not found** - Verify file paths in navigation links

## Best Practices

1. **Accessibility**
   - Use semantic HTML
   - Add alt text to images
   - Ensure keyboard navigation
   - Use proper heading hierarchy

2. **Performance**
   - Minimize HTTP requests
   - Optimize images
   - Use efficient selectors
   - Avoid inline styles

3. **Code Quality**
   - Write clean, readable code
   - Use consistent formatting
   - Comment complex logic
   - Keep functions DRY (Don't Repeat Yourself)

4. **Security**
   - Validate user input
   - Sanitize data
   - Use HTTPS
   - Protect sensitive information

## Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [JavaScript.info](https://javascript.info/)
- [Font Awesome Icons](https://fontawesome.com/)
- [HTML Best Practices](https://www.w3.org/TR/html51/)

## Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm test -- --coverage
```

## Deployment

(To be documented after setup)

## Support

For questions or issues, please:
1. Check existing GitHub issues
2. Create a new issue with detailed information
3. Contact the development team

---

Last Updated: February 2025
