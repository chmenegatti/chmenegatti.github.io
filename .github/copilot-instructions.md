# Copilot Instructions

## Build, test, and lint commands

Local development in `README.md` uses npm:

```sh
npm install
npm run dev
npm run build
npm run lint
npm run test
npm run test -- src/test/example.test.ts
```

- `npm run dev` starts Vite on port `8080`.
- Vitest is configured in `vitest.config.ts` with `jsdom`, `src/test/setup.ts`, and `src/**/*.{test,spec}.{ts,tsx}` test discovery.
- `npm run lint` is **not currently clean** on the base branch; existing errors come from `src/components/ui/command.tsx`, `src/components/ui/textarea.tsx`, and `tailwind.config.ts`. Do not assume a lint failure was introduced by your change.
- The GitHub Pages deploy workflow uses Bun in CI (`bun install --frozen-lockfile` and `bun run build`), then copies `dist/index.html` to `dist/404.html` before publishing `dist/` to `gh-pages`.

## High-level architecture

- This is a Vite + React + TypeScript single-page portfolio site. `index.html` loads `src/main.tsx`, which renders `src/App.tsx`.
- `src/App.tsx` is the active app shell. It wraps the app with React Query, shadcn toast/sonner providers, and `BrowserRouter`, then routes `/` to `src/pages/Index.tsx` and everything else to `src/pages/NotFound.tsx`.
- `src/pages/Index.tsx` assembles the homepage from section components in `src/components/`: `Navbar`, `HeroSection`, `SkillsSection`, `ExperienceSection`, `EducationSection`, `ProjectsSection`, `ContactSection`, and `Footer`.
- The homepage is a scroll-based landing page, not a multi-page app. Navigation uses anchor links like `#sobre`, `#habilidades`, and `#contato`, and smooth scrolling is enabled in `src/index.css`.
- Styling is driven by Tailwind and shadcn-ui conventions. Shared tokens live in `src/index.css` as CSS variables, while `tailwind.config.ts` extends fonts, colors, glow utilities, and shared classes such as `section-padding`.
- Deployment has two surfaces:
  - GitHub Pages builds and deploys the SPA from `dist/`, with `404.html` copied from `index.html` so direct route loads keep working.
  - `vercel.json` only handles rewrites for `/go-na-pratica*` to an external book page.

## Key conventions

- **Edit the TSX/Tailwind app, not the legacy JSX app.** The live entrypoint is `src/main.tsx` -> `src/App.tsx`. The older Chakra-based implementation in `src/main.jsx`, `src/App.jsx`, `src/sections/*`, and `src/data/resumeData.js` is still in the repo but is not used by `index.html`.
- **Most portfolio content is component-local.** Skills, jobs, education, projects, and social links are defined inline inside their section components instead of coming from a shared data file. For content updates, check multiple section components under `src/components/`.
- **Portuguese copy and anchor IDs are part of the public UI contract.** When adding or renaming sections, keep the IDs and links aligned across `Navbar.tsx`, the section component `id` attributes, and any CTA links like the Hero “Entre em contato” button.
- **Prefer the existing UI primitives and helpers.** Reuse `src/components/ui/*` components and `cn()` from `src/lib/utils.ts` before introducing one-off wrappers or duplicate class-merging helpers.
- **Keep aliases consistent.** The project uses the `@` alias for `src` in both Vite and Vitest configs, and `components.json` follows the same alias map for shadcn-generated files.
