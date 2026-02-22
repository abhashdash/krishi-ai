# Quick Start Guide

## 🚀 Getting Started with KrishiAI

### Step 1: Project Setup
Your project has been reorganized into a professional GitHub structure. All files are now organized as follows:

```
KrishiAI/
├── public/                 # Static files and entry point
├── src/pages/              # All page components (organized by page)
├── src/styles/             # Global stylesheets
├── src/js/                 # Utility modules
├── docs/                   # Documentation
├── tests/                  # Test files
└── .github/workflows/      # CI/CD configuration
```

### Step 2: Update File Paths

Since files have been moved, you need to update path references in HTML files. Use the path mapping below:

#### Path Mapping Reference

**From Home page** (`src/pages/home/HOME.html`):
```html
<!-- ✅ UPDATE THESE PATHS: -->

<!-- Stylesheets -->
<link rel="stylesheet" href="../../styles/main.css">          <!-- Global styles -->
<link rel="stylesheet" href="./HOME.css">                     <!-- Page CSS -->

<!-- Navigation Links (relative to HOME.html) -->
<a href="../query/QUERY.html">Query</a>
<a href="../knowledge-library/KNOW-LIB.html">Knowledge Library</a>
<a href="../notifications/NOTIFICATION.html">Notifications</a>
<a href="../marketplace/MARKETPLACE.html">Marketplace</a>
<a href="../admin/ADMIN.html">Dashboard</a>
<a href="../about/ABOUT.html">About</a>

<!-- Assets -->
<img src="../../assets/images/hero-image.jpg" alt="Hero">

<!-- Scripts -->
<script src="./HOME.js"></script>
```

**For any page** (use similar pattern):
```
From: src/pages/[pagename]/[PAGENAME].html

Relative Path Structure:
- Current page CSS: ./[PAGENAME].css
- Current page JS: ./[PAGENAME].js
- Global styles: ../../styles/main.css
- Shared JS utilities: ../../js/utils.js
- Images: ../../assets/images/[image.jpg]
- Other pages: ../[pagename]/[PAGENAME].html
```

### Step 3: Navigation Update Guide

**Update all navigation links in each HTML file:**

| From Page | Link To | New Path |
|-----------|---------|----------|
| ANY PAGE | Home | ../home/HOME.html |
| ANY PAGE | Query | ../query/QUERY.html |
| ANY PAGE | Knowledge | ../knowledge-library/KNOW-LIB.html |
| ANY PAGE | Notifications | ../notifications/NOTIFICATION.html |
| ANY PAGE | Marketplace | ../marketplace/MARKETPLACE.html |
| ANY PAGE | Admin | ../admin/ADMIN.html |
| ANY PAGE | About | ../about/ABOUT.html |
| ANY PAGE | Contact | ../contact/CONTACT.html |
| ANY PAGE | Feedback | ../feedback/FEEDBACK.html |
| ANY PAGE | Advisory | ../advisory/ADVISORY.html |
| ANY PAGE | Profile | ../profile/PROFILE.html |
| HOME | Login | ../login/LOGIN.html |
| HOME | Register | ../register/REGISTER.html |

### Step 4: Update CSS Import Paths

In each page's `.css` and `.js` files, if there are any imports or references to other files:

```css
/* ✅ CORRECT: Relative paths from the CSS file location */
@import "../../styles/variables.css";
```

### Step 5: Test the Application

1. Open VS Code
2. Install "Live Server" extension
3. Right-click on `public/index.html`
4. Select "Open with Live Server"
5. Application will open at `http://127.0.0.1:5500`

### Step 6: Install Dependencies (Optional)

```bash
# Navigate to project directory
cd c:\Users\abhas\OneDrive\Desktop\KrishiAI

# Install npm dependencies
npm install

# Run linter
npm run lint

# Format code
npm run format
```

## 📁 New Directory Structure Highlights

### `/public`
- Entry point: `index.html` (redirects to HOME)
- Static assets: `assets/images/`, `assets/fonts/`
- No sub-directories with content files

### `/src/pages`
- Each page has its own folder
- Each folder contains THREE files:
  - `PAGENAME.html` - Structure
  - `PAGENAME.css` - Styling
  - `PAGENAME.js` - JavaScript logic

### `/src/styles`
- Global CSS (to be consolidated)
- CSS variables and theming
- Responsive utilities

### `/src/js`
- `weather.js` - Weather API integration
- `utils.js` - Shared utility functions
- `api-client.js` - API calls
- `translations.json` - Language translations

### `/docs`
- Development guide
- Architecture documentation  
- API specifications
- Structure reference

### `/.github/workflows`
- CI/CD configuration
- Automated testing and linting

## 🔄 Next Steps

### Immediate Actions (Required)
1. **Update all HTML files** - Fix path references as shown above
2. **Test navigation** - Verify all links work
3. **Test styling** - Ensure CSS loads correctly
4. **Test responsive design** - Check on different screen sizes

### Short Term (Week 1)
- [ ] Consolidate all CSS into `src/styles/main.css`
- [ ] Create shared footer and navbar components
- [ ] Implement i18n (multi-language) system
- [ ] Set up error handling

### Medium Term (Month 1)
- [ ] Create backend API (Node.js/Express)
- [ ] Set up database (MongoDB/PostgreSQL)
- [ ] Implement authentication system
- [ ] Create admin dashboard functionality

### Long Term
- [ ] Create React/Vue component library
- [ ] Implement progressive web app (PWA)
- [ ] Set up automated deployment
- [ ] Create mobile app version

## 📝 Configuration Files Included

### Development Tools
- `.eslintrc.json` - Code quality standards
- `.prettierrc` - Code formatting rules
- `.editorconfig` - Editor standards
- `package.json` - Dependencies and scripts

### Version Control
- `.gitignore` - Files to ignore in Git
- `LICENSE` - MIT License
- `CHANGELOG.md` - Version history

### CI/CD
- `.github/workflows/ci-cd.yml` - GitHub Actions pipeline

## 🛠️ Useful npm Scripts

```bash
npm start              # Start development server
npm run lint           # Check code quality
npm run lint:fix       # Fix linting issues
npm run format         # Format code with Prettier
npm test              # Run tests
npm run test:watch    # Run tests in watch mode
```

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| `README.md` | Project overview and features |
| `CONTRIBUTING.md` | How to contribute |
| `CHANGELOG.md` | Version history |
| `LICENSE` | MIT License |
| `docs/DEVELOPMENT.md` | Development guidelines |
| `docs/STRUCTURE.md` | Complete structure guide |

## ⚠️ Important Notes

1. **Path Updates Required** - All relative paths in HTML need updating
2. **Test Thoroughly** - Check all pages load correctly
3. **CSS Priority** - Page CSS loads after global CSS (as intended)
4. **Navigation Consistency** - Update all pages with same navigation structure
5. **Asset Organization** - Keep images in `public/assets/images/`

## 🆘 Troubleshooting

### Issue: CSS not loading
- Check file paths are correct relative to HTML file location
- Ensure stylesheet link comes after Font Awesome in `<head>`

### Issue: Navigation links broken
- Verify you're using `../` to go up one directory
- Check exact folder and file names (case-sensitive on Linux/Mac)

### Issue: Images not showing
- Images should be in `public/assets/images/`
- Use path: `../../assets/images/filename.ext`

### Issue: JavaScript not running
- Check JS file path in `<script>` tag
- Verify script loads after DOM (before closing `</body>`)

## 📞 Support

For questions about the structure:
1. Check `docs/STRUCTURE.md` for detailed breakdown
2. Review `docs/DEVELOPMENT.md` for guidelines
3. See `CONTRIBUTING.md` for development workflow

---

**Ready to start?** Begin by updating the path references in your HTML files!

For detailed guidance, see [STRUCTURE.md](docs/STRUCTURE.md) and [DEVELOPMENT.md](docs/DEVELOPMENT.md).
