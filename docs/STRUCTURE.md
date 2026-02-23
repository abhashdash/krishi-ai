# Project Structure Guide

## Directory Tree

```
KrishiAI/
├── .github/
│   ├── workflows/
│   │   └── ci-cd.yml                 # GitHub Actions CI/CD configuration
│   └── issue_template.md              # Issue template
│   └── pull_request_template.md       # PR template
│
├── docs/
│   ├── DEVELOPMENT.md                 # Development guide
│   ├── API.md                         # API documentation
│   ├── ARCHITECTURE.md                # Architecture documentation
│   └── FAQ.md                         # Frequently asked questions
│
├── public/                            # Static files (served directly)
│   ├── index.html                     # Entry point
│   └── assets/
│       ├── images/                    # Image assets
│       │   ├── logo.png
│       │   ├── hero-image.jpg
│       │   └── ...
│       └── fonts/                     # Custom fonts
│
├── src/
│   ├── pages/                         # Page components
│   │   ├── home/
│   │   │   ├── HOME.html              # Home page structure
│   │   │   ├── HOME.css               # Home page styles
│   │   │   └── HOME.js                # Home page logic
│   │   │
│   │   ├── about/
│   │   │   ├── ABOUT.html
│   │   │   ├── ABOUT.css
│   │   │   └── ABOUT.js
│   │   │
│   │   ├── admin/
│   │   │   ├── ADMIN.html
│   │   │   ├── ADMIN.css
│   │   │   └── ADMIN.js
│   │   │
│   │   ├── advisory/
│   │   │   ├── ADVISORY.html
│   │   │   ├── ADVISORY.css
│   │   │   └── ADVISORY.js
│   │   │
│   │   ├── contact/
│   │   │   ├── CONTACT.html
│   │   │   ├── CONTACT.css
│   │   │   └── CONTACT.js
│   │   │
│   │   ├── feedback/
│   │   │   ├── FEEDBACK.html
│   │   │   ├── FEEDBACK.css
│   │   │   └── FEEDBACK.js
│   │   │
│   │   ├── knowledge-library/
│   │   │   ├── KNOW-LIB.html
│   │   │   ├── KNOW-LIB.css
│   │   │   └── KNOW-LIB.js
│   │   │
│   │   ├── login/
│   │   │   ├── LOGIN.html
│   │   │   ├── LOGIN.css
│   │   │   └── LOGIN.js
│   │   │
│   │   ├── marketplace/
│   │   │   ├── MARKETPLACE.html
│   │   │   ├── MARKETPLACE.css
│   │   │   └── MARKETPLACE.js
│   │   │
│   │   ├── notifications/
│   │   │   ├── NOTIFICATION.html
│   │   │   ├── NOTIFICATION.css
│   │   │   └── NOTIFICATION.js
│   │   │
│   │   ├── profile/
│   │   │   ├── PROFILE.html
│   │   │   ├── PROFILE.css
│   │   │   └── PROFILE.js
│   │   │
│   │   ├── query/
│   │   │   ├── QUERY.html
│   │   │   ├── QUERY.css
│   │   │   └── QUERY.js
│   │   │
│   │   └── register/
│   │       ├── REGISTER.html
│   │       ├── REGISTER.css
│   │       └── REGISTER.js
│   │
│   ├── styles/                       # Global stylesheets
│   │   ├── main.css                  # Main global stylesheet
│   │   ├── variables.css             # CSS variables and theming
│   │   ├── utilities.css             # Utility classes
│   │   └── responsive.css            # Responsive design rules
│   │
│   └── js/                           # Shared JavaScript utilities
│       ├── weather.js                # Weather API integration
│       ├── utils.js                  # Utility functions
│       ├── auth.js                   # Authentication helpers
│       ├── api-client.js             # API communication
│       ├── i18n.js                   # Internationalization
│       └── translations.json         # Translation strings
│
├── tests/                            # Test files
│   ├── unit/                         # Unit tests
│   │   ├── utils.test.js
│   │   └── auth.test.js
│   │
│   ├── integration/                  # Integration tests
│   │   └── pages.test.js
│   │
│   └── e2e/                          # End-to-end tests
│       └── user-flow.test.js
│
├── .editorconfig                     # Editor configuration
├── .eslintrc.json                    # ESLint configuration
├── .gitignore                        # Git ignore rules
├── .prettierrc                       # Prettier configuration
├── CHANGELOG.md                      # Version history
├── CONTRIBUTING.md                   # Contribution guidelines
├── LICENSE                           # MIT License
├── package.json                      # Project metadata and dependencies
├── package-lock.json                 # Locked dependency versions
└── README.md                         # Project documentation

```

## File Organization by Category

### HTML Pages
All HTML pages are organized in `src/pages/[page-name]/` directories:
- Each page is self-contained with its own CSS and JS
- Navigation between pages uses relative paths
- Common elements are duplicated for maintainability

### Stylesheets
- **Global styles**: `src/styles/main.css`
- **Page-specific styles**: `src/pages/[page-name]/[PAGE-NAME].css`
- **Variables & theme**: `src/styles/variables.css`

### JavaScript
- **Page logic**: `src/pages/[page-name]/[PAGE-NAME].js`
- **Shared utilities**: `src/js/utils.js`
- **API calls**: `src/js/api-client.js`
- **Weather module**: `src/js/weather.js`

### Assets
- **Images**: `public/assets/images/`
- **Fonts**: `public/assets/fonts/`
- **Icons**: Via Font Awesome CDN

### Configuration Files
- `.eslintrc.json` - Code linting rules
- `.prettierrc` - Code formatting rules
- `.editorconfig` - Editor standards
- `package.json` - Dependencies and scripts

### Documentation
- `README.md` - Project overview and setup
- `CONTRIBUTING.md` - Contribution guidelines
- `CHANGELOG.md` - Version history
- `docs/DEVELOPMENT.md` - Development guide
- `LICENSE` - MIT License

### GitHub Workflows
- `.github/workflows/ci-cd.yml` - Continuous integration/deployment

## Key Directories Explained

### `/public` - Static Site Root
- Contains files served directly to users
- `index.html` is the entry point
- Assets stored freely without restrictions

### `/src` - Source Code
- **pages/** - All page components (HTML + CSS + JS)
- **styles/** - Shared and global stylesheets
- **js/** - Utility modules and helpers

### `/docs` - External Documentation
- Development guides
- API documentation
- Architecture decisions

### `/tests` - Test Suites
- Unit tests for functions
- Integration tests for features
- E2E tests for user workflows

### `/.github` - GitHub Configuration
- CI/CD workflows
- Issue and PR templates
- GitHub-specific settings

## Naming Conventions

### Folders
- Use kebab-case: `knowledge-library`, `admin-panel`
- Descriptive names that indicate purpose

### HTML Files
- UPPERCASE: `HOME.html`, `LOGIN.html`
- Match folder structure in new paths

### CSS Files
- UPPERCASE: `HOME.css`, `LOGIN.css`
- One CSS file per page in its folder

### JavaScript Files
- UPPERCASE: `HOME.js`, `LOGIN.js`
- One JS file per page in its folder

### Classes
- kebab-case: `hero-section`, `nav-menu`
- BEM methodology: `component__element--modifier`

### IDs
- camelCase: `loginBtn`, `headerNav`
- Used sparingly

### Variables
- camelCase: `userName`, `isLoggedIn`

## Path References

### Within Pages
Use relative paths based on page location:
```html
<!-- From /src/pages/home/HOME.html -->
<link rel="stylesheet" href="./HOME.css">
<script src="./HOME.js"></script>

<!-- To navigate to another page -->
<a href="../login/LOGIN.html">Login</a>

<!-- To access global CSS -->
<link rel="stylesheet" href="../../styles/main.css">
```

### Image Paths
```html
<!-- From any page to images -->
<img src="../../assets/images/logo.png" alt="Logo">
```

## Future Improvements

- Consolidate CSS into `src/styles/main.css`
- Extract common components into shared modules
- Implement proper module system (e.g., ES6 modules)
- Set up automated builds for production
- Create component library for reusable UI elements

---

Last Updated: February 2025
