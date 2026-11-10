# Viel.dev

Personal portfolio of **Vicente Viel**, a full-stack developer based in Chile with 3 years of experience building web and mobile applications with TypeScript, React, Next.js and React Native.

The site presents my work, experience and stack for remote software development roles.

## What's inside

- **Selected work:** a production restaurant management platform (POS workflows and role-based permissions), [Rumi](https://github.com/VicenteViel/Rumi) (a React Native app for shared expenses), and this site.
- **Interactive sketches:** small, hand-built illustrations of each project, such as a role switcher that shows how permissions change what a waiter or a manager can do.
- **Experience and stack:** what I work on today and the tools I use.
- **Contact:** how to reach me for remote opportunities.

## Design

Minimal and content-first, built around one idea: bringing things into focus. The name resolves from a blur on load, project visuals sharpen as they scroll into view, and the background uses soft blurred color. All motion is disabled for visitors who prefer reduced motion.

- Typeface: Schibsted Grotesk
- Palette: fog, ink and lapis blue, with a dark mode that follows the system setting

## Tech stack

| Technology | Purpose |
|---|---|
| Next.js (App Router) | Framework, static rendering and metadata |
| React | UI components |
| TypeScript | Static typing |
| Tailwind CSS | CSS reset and base layer |
| CSS (custom properties, `backdrop-filter`) | Design tokens, blur and animations |

No animation or UI libraries: motion is plain CSS plus a small `IntersectionObserver` component.

## Project structure

```
src/
  app/            Layout, page and global styles
  components/     Header, reveal-on-scroll and project sketches
  data/site.ts    All content: profile, projects, experience, stack and links
```

To update the content, edit `src/data/site.ts`.

## Getting started

Requirements: Node.js 20 or later.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Production build:

```bash
npm run build
npm start
```

## Deployment

The site is fully static and can be deployed to Vercel or any host that supports Next.js.

## License

© Vicente Viel. All rights reserved.
