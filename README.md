# Homelab

I want to host a blog and documentation website for building my homelab. I'm using Astro and the Astro template ScrewFast. ScrewFast is an open-source template designed for quick and efficient web project setup, blending minimalism with functionality.


## Table of Contents
  * [Getting Started](#getting-started)
    + [Installation](#installation)
    + [Development Commands](#development-commands)
  * [Deployment](#deployment)
    + [Building the Site](#building-the-site)
    + [Deploying to GH Pages](#deploying-to-github-pages)
  * [Project Structure](#project-structure)
  * [Static Assets and Public Resources](#static-assets-and-public-resources)

## Getting Started

### Installation

Start by installing the project dependencies. Open your terminal, navigate to the project's root directory, and execute:

```bash
npm install
```

This command will install all the necessary dependencies defined in the `package.json` file.

### Development Commands

With dependencies installed, you can utilize the following npm scripts to manage your project's development lifecycle:

- `npm run dev`: Starts a local development server with hot reloading enabled.
- `npm run preview`: Serves your build output locally for preview before deployment.
- `npm run build`: Bundles your site into static files for production.

For detailed help with Astro CLI commands, visit [Astro's documentation](https://docs.astro.build/en/reference/cli-reference/).

## Deployment

### Building The Site

Before deployment, you need to create a production build:

```bash
npm run build
```

This creates a `dist/` directory with your built site (configurable via [outDir in Astro](https://docs.astro.build/en/reference/configuration-reference/#outdir)).

### Deploying to GitHub pages

TBD

## Project Structure

ScrewFast organizes modular components, content, and layouts to streamline development and content management.

```md

src/
├── components/           # Reusable components
│   ├── Meta.astro        # Meta component for SEO
│   ├── sections/         # Components for various sections of the website
│   ├── ThemeIcon.astro   # Component for toggling light/dark themes
│   └── ui/               # UI components categorized by functionality
├── content/              # Markdown files for blog posts, insights, products, and site configuration
│   ├── blog/
│   ├── docs/           
│   ├── insights/         
│   ├── products/         
│   └── config.ts         # Contains site-wide configuration options
├── data_files/           # Strings stored as JSON files
├── images/               # Static image assets for use across the website
├── layouts/              # Components defining layout templates
│   └── MainLayout.astro  # The main wrapping layout for all pages
├── pages/                # Astro files representing individual pages and website sections
│   ├── 404.astro         # Custom 404 page
│   ├── blog/   
│   ├── fr/               # Localized content
│   ├── contact.astro     
│   ├── index.astro       # The landing/home page
│   ├── insights/         
│   ├── products/         
│   ├── robots.txt.ts     # Dynamically generates robots.txt
│   └── services.astro
├── styles/               # CSS styles
└── utils/                # Shared utility functions and helpers

```

## Static Assets and Public Resources

Static files served directly to the browser are within the `public` directory at the root of the project.

```md

public/
└── scripts/
    └── vendor/
        ├── gsap/ # Animations powered by GSAP (GreenSock Animation Platform)
        │   └── gsap.min.js 
        ├── lenis/ # Lenis script for smooth scrolling effects
        │   └── lenis.js
        └── preline/   # Preline UI plugins
            ├── accordion/
            ├── collapse/
            ├── dropdown/
            ├── overlay/
            └── tabs/


```

The scripts in the `public/scripts/vendor` directory are essential for the interactivity and aesthetic features of the website. Do not remove these unless you plan to replace their functionality.

