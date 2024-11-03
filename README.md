# Kane Montreuil's Personal Website

My personal website built with Astro, React, and TailwindCSS. Deployed on Cloudflare Pages.

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 🛠 Technology Stack

- **Framework:** [Astro](https://astro.build)
- **UI Components:** React
- **Styling:** TailwindCSS
- **Content:** MDX
- **Deployment:** Cloudflare Pages
- **Package Manager:** pnpm

## 📁 Project Structure

```
├── src/
│   ├── components/      # React and Astro components
│   ├── content/         # MDX content (blog posts, projects)
│   ├── layouts/         # Page layouts
│   ├── pages/          # Route components
│   ├── styles/         # Global styles
│   └── assets/         # Static assets
├── public/             # Static files
└── astro.config.mjs    # Astro configuration
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command         | Action                                      |
| :-------------- | :------------------------------------------ |
| `pnpm install`  | Installs dependencies                       |
| `pnpm dev`      | Starts local dev server at `localhost:3000` |
| `pnpm build`    | Build your production site to `./dist/`     |
| `pnpm preview`  | Preview your build locally before deploying |
| `pnpm lint`     | Run ESLint                                  |
| `pnpm lint:fix` | Run ESLint with auto-fix                    |
| `pnpm format`   | Format code with Prettier                   |

## 🎯 Development Standards

### Git Commit Convention

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code changes that neither fix bugs nor add features
- `perf:` Performance improvements
- `test:` Adding or modifying tests
- `chore:` Changes to build process or auxiliary tools

### Code Style

- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- TailwindCSS for styling

### Performance Targets

- Lighthouse Score: 90+ across all metrics
- First Contentful Paint (FCP) < 1.5s
- Largest Contentful Paint (LCP) < 2.5s
- First Input Delay (FID) < 100ms
- Cumulative Layout Shift (CLS) < 0.1

## 📝 Content Management

### Blog Posts

Blog posts are written in MDX and stored in `src/content/posts/`. Each post should include:

```yaml
---
title: Post Title
description: Brief description
date: YYYY-MM-DD
tags: [tag1, tag2]
draft: boolean
---
```

### Projects

Project case studies are stored in `src/content/projects/` with the following frontmatter:

```yaml
---
title: Project Title
description: Brief description
date: YYYY-MM-DD
tags: [tag1, tag2]
links:
  live: https://example.com
  github: https://github.com/example
status: completed | ongoing
featured: boolean
---
```

## 🚀 Deployment

The site is automatically deployed to Cloudflare Pages on push to the main branch.

### Environment Variables

Required environment variables:

```bash
PUBLIC_SITE_URL=https://example.com
# Add other environment variables as needed
```

## 📄 License

MIT License - See [LICENSE.md](LICENSE.md) for details

## 👤 Author

Kane Montreuil

- Website: [montreuil.dev](https://montreuil.dev)
- GitHub: [@kanemontreuil](https://github.com/kanemontreuil)
- LinkedIn: [Kane Montreuil](https://linkedin.com/in/kanemontreuil)
