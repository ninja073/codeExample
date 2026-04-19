# Custom Task Dashboard

A multi-task interactive dashboard built with **React**, **TypeScript**, and **Vite**. Each task demonstrates a distinct front-end pattern or UI concept, making it a practical code-example playground.

🚀 **Live Demo**: [https://cuustom-task-dashboard.web.app](https://cuustom-task-dashboard.web.app)

---

## Features

| Task | Description |
|---|---|
| **Introduction** | Welcome screen and overview of the dashboard |
| **Counter Task** | Simple counter demonstrating React state management |
| **Todo List** | Basic task management with CRUD operations |
| **Carousel Task** | Image/content carousel UI component |
| **Compound Component** | File Upload built using the Compound Component pattern with React Context |
| **Infinite Scroll** | Infinite scrolling list with dynamic data loading |

---

## Tech Stack

- **React 18** — UI library with Suspense & lazy loading
- **TypeScript** — Type-safe development
- **Vite** — Lightning-fast dev server and bundler
- **React Router DOM** — Client-side routing per task
- **Lucide React** — Icon library
- **Firebase Hosting** — Production deployment

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm or yarn

### Installation

```bash
git clone <repo-url>
cd codeExample
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## Project Structure

```
src/
├── components/       # Shared layout and UI components
├── tasks/
│   ├── intro/        # Introduction screen
│   ├── counter/      # Counter task
│   ├── todo/         # Todo list task
│   ├── carousel/     # Carousel task
│   ├── CompoundComponentArch/  # Compound component pattern task
│   ├── infiniteScroll/         # Infinite scroll task
│   └── index.ts      # Task registry
├── App.tsx           # Root component with routing
├── main.tsx          # Application entry point
└── index.css         # Global styles
```

---

## Deployment

The app is deployed on **Firebase Hosting**:

🌐 **[https://cuustom-task-dashboard.web.app](https://cuustom-task-dashboard.web.app)**

To deploy updates:

```bash
npm run build
firebase deploy --only hosting
```

---

## ESLint Configuration

For production applications, enable type-aware lint rules by updating `eslint.config.js`:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.recommendedTypeChecked,
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```
