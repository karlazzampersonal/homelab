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


### Website link

https://homelab-coral.vercel.app/

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

