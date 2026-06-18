# 🚀 React Vite Application

A modern, highly structured React application bundled with Vite. Built with scalability, performance, and clean architecture in mind.

---

## 📂 Project Structure

```text
my-react-vite-app/
├── .env                     # Global environment variables (e.g., VITE_API_BASE_URL)
├── public/                  # Static assets available at the root URL
│   └── favicon.ico
├── src/                     # Source code directory
│   ├── assets/              # Static media assets (images, global icons, SVGs)
│   │   └── logo.svg
│   ├── components/          # Reusable UI components
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   └── Navbar.jsx
│   ├── config/              # Application-wide configurations and constants
│   │   └── apiConfig.js     
│   ├── hooks/               # Custom React hooks for shared logic
│   │   ├── usePageTitle.js
│   │   ├── useProducts.js
│   │   └── useTranslation.js
│   ├── layouts/             # Page layout wraps (e.g., Header, Sidebar, Footer grids)
│   │   └── MainLayout.jsx
│   ├── pages/               # Top-level view components (Route destinations)
│   │   ├── Categories/
│   │   │   └── Categories.jsx
│   │   ├── Products/
│   │   │   └── Products.jsx
│   │   └── Dashboard.jsx
│   ├── services/            # API interaction layers and SDK initializations
│   │   ├── apiClient.js           
│   │   ├── apiEndpoints.js           
│   │   └── apiService.js           
│   ├── utils/               # Pure helper functions and formatters
│   │   └── formatDate.js
│   ├── App.jsx              # Main application root and routing wrapper
│   ├── index.css            # Global stylesheets
│   └── main.jsx             # Application entry point
├── .eslintrc.cjs            # Linter rules configuration
├── .gitignore               # Specified files to ignore in Git tracking
├── index.html               # Main HTML entry canvas
├── package.json             # Dependencies and build script registries
├── vite.config.js           # Vite-specific compiler and plugin options
└── README.md                # Project documentation