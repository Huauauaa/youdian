# youdian

Astro project configured for GitHub Pages.

## Project Structure

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
├── astro.config.mjs
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Any static assets, like images, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## GitHub Pages

This project is configured for the repository Pages URL:

```text
https://huauauaa.github.io/youdian/
```

Deployments run from `.github/workflows/deploy.yml` whenever changes are
pushed to `main`.
