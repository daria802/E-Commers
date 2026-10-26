# E-Commers — Voltaik ⚡

> **Next-Generation Energy Storage & Clean Power E-Commerce Experience**

Voltaik is a modern, high-performance mobile-first e-commerce web application designed for residential, prosumer, and commercial battery storage solutions. Built with a striking **neo-brutalist editorial aesthetic**, tactile micro-interactions, and an interactive energy calculation engine.

---

## ✨ Features

- **⚡ Interactive Energy Calculator**: Real-time battery capacity sizing and yearly utility cost savings estimator based on monthly consumption (kWh) and required backup duration.
- **📦 Neo-Brutalist Product Catalog**: Visual spec cards featuring offset shadow layers, capacity tiers, power output metrics, and warranty terms.
  - *Home Battery 5kWh* — Residential backup system
  - *PowerGrid 10kWh* — Prosumer solar pairing
  - *Commercial 50kWh* — Enterprise-grade independent grid
- **💬 Layered Testimonial Deck**: Dynamic stacked card deck with interactive depth scaling and smooth transitions on click.
- **🧭 Floating Smart Navigation**:
  - Vertical desktop floating dock for rapid jumping between catalog, calculator, and cart.
  - Mobile bottom action pill with pulsating status indicators and quick-book triggers.
- **📑 Modal Consultation & Slide-in Cart**:
  - Lead-generation consultation booking modal with form validation.
  - Smooth slide-out cart drawer with animated backdrop blur.
- **🎨 Editorial Neo-Brutalist Design System**:
  - Custom palette: Cream (`#FDFBF7`), Dark Cream (`#F2EFE8`), Hyper Orange (`#FF5500`), Cobalt Blue (`#2C3FE6`), and Deep Ink (`#111111`).
  - Dual typography: Sans-serif **Space Grotesk** paired with editorial serif **Playfair Display**.
  - Crisp brutal borders and tactile hard drop shadows (`box-shadow: 4px 4px 0px 0px #111111`).

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Runtime & UI** | [React 19](https://react.dev/) & [TypeScript 5.7](https://www.typescriptlang.org/) |
| **Bundler & Dev Server** | [Vite 8](https://vitejs.dev/) |
| **Styling Engine** | [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`) |
| **Typography** | [Google Fonts](https://fonts.google.com/) (*Space Grotesk* + *Playfair Display*) |
| **Code Formatter** | [oxfmt](https://github.com/oxc-project/oxc) |

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v20+ recommended) and either `pnpm` or `npm` installed.

### Installation

Clone the repository and install dependencies:

```bash
# Using npm
npm install

# Or using pnpm
pnpm install
```

### Development Server

Start the local Vite development server:

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) (or the port displayed in your terminal) to view the application.

### Production Build

Create an optimized production bundle:

```bash
npm run build
# or
pnpm build
```

Preview the production build locally:

```bash
npm run preview
# or
pnpm preview
```

### Code Formatting

Format files using `oxfmt`:

```bash
npm run format
# or
pnpm format
```

---

## 📁 Project Structure

```text
├── index.html          # Vite HTML entry point & font links
├── package.json        # Dependencies and build scripts
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite config with React & Tailwind CSS v4 plugins
├── src/
│   ├── main.tsx        # React application entry point
│   ├── App.tsx         # Main application component, layout, state & modals
│   ├── index.css       # Global design tokens, theme variables & utilities
│   └── vite-env.d.ts   # Vite client environment types
└── README.md           # Project documentation
```

---

## 🎨 Design System & CSS Tokens

Voltaik uses custom Tailwind CSS v4 theme variables defined in [`src/index.css`](src/index.css):

```css
@theme {
  --font-sans: "Space Grotesk", sans-serif;
  --font-serif: "Playfair Display", serif;
  
  --color-cream: #FDFBF7;
  --color-cream-dark: #F2EFE8;
  --color-orange: #FF5500;
  --color-blue: #2C3FE6;
  --color-ink: #111111;

  --shadow-brutal: 4px 4px 0px 0px rgba(17, 17, 17, 1);
  --shadow-brutal-hover: 6px 6px 0px 0px rgba(17, 17, 17, 1);
}
```

---

## 📄 License

Private repository. All rights reserved.
