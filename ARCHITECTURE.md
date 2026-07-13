# Architecture

This repository contains Cooper Kerr's static portfolio site. It is deployed as a GitHub Pages site from the `Main` branch and uses the HTML5 UP "Dimension" theme as its visual and interaction base.

## Site Overview

- Site type: static HTML, CSS, and JavaScript
- Hosting: GitHub Pages
- Theme base: HTML5 UP "Dimension"
- Runtime dependencies: browser-native JavaScript plus the bundled jQuery and HTML5 UP helper scripts
- Build step: none

The site is designed to run directly from static files. No package manager, framework build, server rendering, or CMS is required.

## Content Model

Portfolio content lives in JSON files under `data/`. These files are the single source of truth for displayed content:

- `data/profile.json`: name, bio, contact links, education, GPA, scholarships, and coursework
- `data/skills.json`: categorized skills
- `data/experience.json`: work and research experience entries
- `data/projects.json`: project entries, links, images, tech stacks, relevance tags, and statuses

To update portfolio content, edit these JSON files rather than editing `index.html`.

## Rendering Flow

`index.html` provides the static shell:

- page metadata
- theme stylesheet links
- header and navigation placeholders
- an empty `#main` container
- footer placeholder
- script includes

`assets/js/portfolio-data.js` normalizes the raw JSON into the browser-facing content model. It keeps the JSON files as the source of truth while giving renderers stable defaults for profile fields, skills, experience, project media/caption pairs, statuses, labels, and links.

`assets/js/content.js` fetches the JSON files from `data/`, passes them through `window.PortfolioData.normalize(raw)`, and renders the live page content into the shell. It creates the About, Experience, Skills, and Projects panels dynamically.

`assets/js/panel-lifecycle.js` owns the deep panel behavior: article discovery, close controls, hash-based routing, panel open/close transitions, escape-key closing, body click closing, scroll restoration, and initial hash loading.

`assets/js/main.js` is the HTML5 UP bootstrap adapter. It removes preload state, configures breakpoints and legacy flex handling, applies nav midpoint classes, waits for `window.portfolioReady`, and initializes the panel lifecycle.

Because content is loaded asynchronously, `main.js` waits for `window.portfolioReady` before binding panel behavior to the rendered articles. This prevents hash navigation from running before the JSON-backed content exists in the DOM.

## Updating Content

For routine content updates:

1. Edit the relevant JSON file in `data/`.
2. Keep JSON valid; trailing commas are not allowed.
3. Serve the site locally with a static server, for example:

   ```sh
   python3 -m http.server 8765
   ```

4. Open `http://127.0.0.1:8765/` and verify the updated section.

Use `index.html` only for page shell, metadata, stylesheet/script includes, or navigation structure changes. Use `assets/js/content.js` only when the rendering structure needs to change. Use `assets/js/portfolio-data.js` when JSON shape normalization or safe defaults need to change.

## CSS Modules

Runtime CSS is loaded directly by the browser in this order:

- `assets/css/html5up-dimension.css`: committed HTML5 UP Dimension baseline
- `assets/css/theme-adapter.css`: JavaScript lifecycle and HTML5 UP behavior selectors such as `is-preload`, `is-article-visible`, `is-switching`, `use-middle`, `.close`, `article.active`, `#bg`, and `#main`
- `assets/css/portfolio.css`: portfolio visual system, typography, hero layout, project cards, skills, experience, and responsive overrides

`assets/css/main.css` is retained as a legacy stylesheet artifact but is not the runtime source of truth. Do not add new runtime CSS there.

## Project Images And Links

Project image paths are listed in `data/projects.json` and should point to files in `images/` unless an external hosted image is intentionally used.

Project links are also stored in `data/projects.json`. Only public URLs should be included.

## SEO Files

The repository includes:

- `robots.txt`
- `sitemap.xml`
- metadata and Open Graph tags in `index.html`

Update these when the public URL, site description, or primary preview image changes. Then run:

```sh
python3 scripts/check_static_metadata.py
```

The script checks canonical URL, `og:url`, sitemap URL, robots sitemap, title/`og:title`, profile identity, absolute `og:image`, local image existence, and the sitemap root-only policy.

## Deployment

Deployment is handled by GitHub Pages.

To deploy:

1. Commit changes locally.
2. Push to `Main`.
3. GitHub Pages serves the updated site from `origin/Main` automatically.

No build command is required.
