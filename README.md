# Damien Hensen Portfolio

My personal portfolio showcasing software engineering projects, technical write-ups, and blog posts.

The website is built with **Nuxt** and **Nuxt Content**, allowing projects and articles to be added through Markdown files without changing the application itself.

## Features

- Project showcase
- Technical project pages
- Blog system
- Tag filtering
- Featured projects
- Reading time estimation
- Table of contents
- RSS feed
- SEO optimized
- Sitemap generation
- Responsive design

## Tech Stack

- Nuxt
- Nuxt Content
- TypeScript
- Tailwind CSS

## Running locally

Clone the repository:

```bash
git clone https://github.com/damienhensen/portfolio
cd portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The website will be available at:

```
http://localhost:3000
```

## Production build

Generate a static build:

```bash
npm run generate
```

Or build normally:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Content

The portfolio is content-driven.

Projects and blog posts are stored as Markdown files, meaning new content can be added without creating new pages or routes.

### Project structure

```
content/
└── projects/
    ├── fixmycity.md
    ├── receipt-splitter.md
    └── ...
```

Each project contains metadata such as:

- Title
- Description
- Tags
- Cover image
- Screenshots
- Architecture
- Technical analysis
- Lessons learned
- Demo/source links

### Blog posts

```
content/
└── blog/
    ├── first-post.md
    ├── another-post.md
    └── ...
```

Blog posts automatically appear on the blog page and include reading time and a generated table of contents.

## Goals

The purpose of this portfolio is to demonstrate real software engineering work, including:

- Full-stack development
- System architecture
- Deployment
- Testing
- Technical decision making

Rather than simply showing screenshots, projects explain how they were designed and built.

## License

This repository is intended as my personal portfolio. Feel free to use it for inspiration, but please do not copy the content directly.