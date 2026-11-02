# Atomic Flow — Website

Official website and documentation for [Atomic Flow](https://github.com/atomic-flow-dev)

**Live domain (after deployment):** https://atomic-flow.dev

> Project status: pre-alpha.

## Tech stack

- [Astro](https://astro.build/) — custom website pages, static output.
- [Starlight](https://starlight.astro.build/) — documentation pages under `/docs/`.
- [Cloudflare Pages](https://developers.cloudflare.com/pages/) — optional static hosting with Git-based deploys.
- pnpm — package manager.

## Requirements

- Node.js >= 22.12.0 (use a current supported LTS release).
- pnpm 10.x (via Corepack or your preferred installation method).

## Develop locally

```bash
pnpm install
pnpm dev
```

Open the local address printed by Astro (typically http://localhost:4321).

```bash
pnpm build      # Generate static output in dist/
pnpm preview    # Preview the generated output
```

## Project layout

```text
public/                  # Favicon, Open Graph art, robots.txt
src/pages/               # Homepage, roadmap, about
src/layouts/             # Shared marketing-site layout
src/components/          # Navigation and footer
src/styles/              # Website + Starlight theme
src/content/docs/docs/   # Documentation under /docs/
astro.config.mjs          # Site and Starlight setup
```

The double `docs/docs` in the content directory is intentional: the first is Starlight's Astro content collection, the second creates the `/docs/` URL prefix.

## Content policy

- Language-independent specifications belong in [`atomic-flow`](https://github.com/atomic-flow-dev/atomic-flow).
- Implementation-specific details belong primarily in [`atomic-flow-ts`](https://github.com/atomic-flow-dev/atomic-flow-ts).
- The website can summarize and link to canonical specifications rather than duplicating them indefinitely.

## License

Apache License 2.0 — see the repository's existing `LICENSE` file.
