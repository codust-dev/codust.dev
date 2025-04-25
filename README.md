# Codust.dev

![codust-dev-banner](/public/static/images/twitter-card.png)

A modern blog and course platform built with Next.js and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites
- Node.js
- npm or yarn
- Git

### Local Development Setup
1. Install Node.js from [nodejs.org](https://nodejs.org)
2. Verify installations:
   ```bash
   node -v
   npm -v
   ```
3. Install Yarn globally:
   ```bash
   npm install -g yarn
   yarn -v
   ```
4. Clone and setup the repository:
   ```bash
   git clone [repository-url]
   cd codust.dev
   yarn install
   ```
5. Set up environment:
   - For Windows:
     ```bash
     set PWD="$(pwd)"
     ```
6. Start development server:
   ```bash
   yarn dev
   ```

## 📝 Content Management

### Blog Posts
- Add blog posts in the `data/blog` folder
- Follow the frontmatter format below

### Course Modules
1. Add module data in `data/courseData.ts`
2. Create module folder in `data/explore`
3. Add module thumbnail in `public/static/images/explore/module.png`
4. Create `starter.mdx` in `data/explore`
5. Add chapter files in `data/explore/modules.mdx`

## 🛠️ Troubleshooting

### Common Issues

#### 1. Prettier Formatting Errors
```bash
yarn prettier --write .
yarn lint --fix
```

#### 2. NodeJS Path Issues
Add Node.js to your system PATH:
1. Open Start Menu → Search for "Environment Variables"
2. In System Properties, click "Environment Variables"
3. Under System Variables, find `Path` and click "Edit"
4. Add Node.js path: `C:\Program Files\nodejs`
5. Restart your terminal

### Cache Issues
Clear Yarn cache if experiencing build problems:
```bash
yarn cache clean
```

## 🎨 Customization

### Key Configuration Files
- `data/siteMetadata.js` - Site-wide settings
- `data/authors/default.md` - Author information
- `data/projectsData.js` - Project card data
- `data/headerNavLinks.js` - Navigation configuration
- `data/logo.svg` - Site logo
- `tailwind.config.js` - Tailwind CSS settings
- `css/tailwind.css` - Global styles
- `css/prism.css` - Code block styling
- `contentlayer.config.ts` - Content management configuration

### Layouts
Three post layouts available:
- `PostLayout` - Default two-column layout
- `PostSimple` - Simplified version
- `PostBanner` - Layout with banner image

## 📄 Post Format

Posts use [Contentlayer](https://www.contentlayer.dev/) with Hugo-style frontmatter.

### Required Fields
- `title`
- `date`

### Optional Fields
- `tags`
- `lastmod`
- `draft`
- `summary`
- `images`
- `authors`
- `layout`
- `canonicalUrl`

### Example Frontmatter
```yaml
---
title: 'Introducing Tailwind Nexjs Starter Blog'
date: '2021-01-12'
lastmod: '2021-01-18'
tags: ['next-js', 'tailwind', 'guide']
draft: false
summary: 'Looking for a performant, out of the box template, with all the best in web technology to support your blogging needs? Checkout the Tailwind Nextjs Starter Blog template.'
images: ['/static/images/canada/mountains.jpg', '/static/images/canada/toronto.jpg']
authors: ['default', 'sparrowhawk']
layout: PostLayout
canonicalUrl: https://tailwind-nextjs-starter-blog.vercel.app/blog/introducing-tailwind-nextjs-starter-blog
---
```

