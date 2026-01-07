# Copilot instructions for this repository

This project is a small documentation site (MkDocs Material) with a tiny example Express API. These notes are focused and actionable: where to look, how to run things, and patterns to preserve.

## Big picture
- The application `application/server.js` is a small Express app (in-memory storage) used for experiments or demos with APIs.
- Docs site powered by MkDocs (see `mkdocs.yml`) — source in `docs/` serves as documentation for the application `application/server.js` . Site is configured to use **Material** theme and is intended to be published through GitHub Pages using a workflow.

## Key files & places to inspect
- `mkdocs.yml` — site config, theme, features, `edit_uri`, and nav structure.
- `docs/` — canonical content. Example: `docs/library/markdown-style-sampler.md` shows the project's markdown patterns.
- `requirements.txt` — Python deps for MkDocs (contains `mkdocs` and `mkdocs-material`).
- `build.bat` / `serve.bat` — convenience wrappers for `mkdocs build` / `mkdocs serve` on Windows.
- `application/server.js` — Express endpoints and tiny in-memory datastore:
  - GET `/api/items` -> returns `items`
  - POST `/api/items` -> validates JSON, pushes to `items`, returns created item
  - Listens on port 8080, uses `cryptoRandomId()` for simple IDs

## Developer workflows (how to run & validate changes)
- Local docs preview (Windows):
  1. Create a Python venv and install requirements: `python -m venv .venv && .\.venv\Scripts\activate && pip install -r requirements.txt`
  2. Start dev server: `mkdocs serve` (or run `serve.bat`).
  3. Verify pages and nav; `mkdocs build` (or `build.bat`) outputs the site to `site/`.

- Running the example API:
  - The server is a plain Node script: run `node application/server.js`.
  - Note: the code requires `express` but there is no `package.json` in the repo. Before running, install Node deps in one of two ways:
    - Project-local: add an `application/package.json` and run `npm install express` (preferred), or
    - Quick run (not recommended long-term): `npm i express` in the repository root.

## Patterns & conventions to follow when editing
- Documentation-first: add new docs under `docs/` and then add to `nav` in `mkdocs.yml` so the site navigation is predictable.
- Use sample files in `docs/library/` as canonical style examples (headings, admonitions, code blocks, mermaid diagrams).
- Keep the example server small and self-contained. It uses in-memory state intentionally (no databases). If you add persistent services, document them in `docs/` and add setup steps to the README.

## Integration points & external dependencies
- MkDocs + Material (installed via `requirements.txt`) — required to preview/build the site.
- Express (Node) — required to run `application/server.js`. No lockfile/package manifest currently present. The app is planned to be used locally. No deployment or CI is configured.
- CI/deployment: The site is automatically deployed to GitHub Pages through the pages-deploy.yml workflow  in `.github/workflows/`.

## Tips for AI edits (what an agent should and should not change)
- Do not modify `mkdocs.yml` nav entries without ensuring `docs/` pages exist and render; run `mkdocs serve` to validate.
- When adding new Node code, add a `package.json` (and optionally `package-lock.json`) to `application/` to make dependency changes explicit.
- Keep the Express app behavior stable: endpoints are tiny and used as examples — preserve endpoint contracts (paths and JSON shape) unless the change is intentional and documented.
- When updating docs, prefer small, incremental changes that can be previewed locally.
- Documentation is the primary artifact; code is secondary and should support documentation goals.
- Documentation includes server-specific guides in `docs/guides/` (`setup-guide.md`, `user-guide.md`, `api-guide.md`). The `docs/library/` folder contains information not directly related to the application or project.
- For markdown, use instructions in ai-instructions/md.txt
- For documentation, follow the Microsoft Writing Style Guide: https://learn.microsoft.com/en-us/style-guide/welcome/.

---
If anything above is unclear or you want coverage of additional files (tests, CI, or deployment), tell me which area to expand and I will update this file. 
