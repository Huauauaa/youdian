# youdian

Astro project configured for GitHub Pages. The interactive UI is standardized on
React components styled with TailwindCSS.

## Project Structure

```text
/
├── public/
├── src/
│   ├── components/
│   │   └── ReactStoryPage.jsx
│   ├── pages/
│   │   ├── index.astro
│   │   ├── react.astro
│   │   └── articles/
│   └── styles/
│       └── global.css
├── astro.config.mjs
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Any static assets, like images, can be placed in the `public/` directory.

React components live in `src/components/` and use TailwindCSS utility classes
from `src/styles/global.css`.

## Commands

Install [pnpm](https://pnpm.io/installation) if you do not have it yet. All commands are run from the root of the project, from a terminal:

| Command                     | Action                                           |
| :-------------------------- | :----------------------------------------------- |
| `pnpm install`              | Installs dependencies (runs `astro sync` via `postinstall`) |
| `pnpm dev`                  | Starts local dev server at `localhost:4321`      |
| `pnpm build`                | Build your production site to `./dist/`          |
| `pnpm preview`              | Preview your build locally, before deploying     |
| `pnpm exec astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm exec astro --help`    | Get help using the Astro CLI                     |

## GitHub Pages

This project is configured for the repository Pages URL:

```text
https://huauauaa.github.io/youdian/
```

Deployments run from `.github/workflows/deploy.yml` whenever changes are
pushed to `main` (CI installs with `pnpm` and `pnpm-lock.yaml`).
