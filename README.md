# Ram Martinez

Personal website, hosted on GitHub Pages. Plain HTML, CSS, and a small script that redirects links to the previous site's pages.

Run locally:

```sh
python -m http.server 4173
```

Open `http://localhost:4173`. There is no build step or dependency installation.

## Design and content

- Introduce Ram in his own name. Keep faith, family, ministry, and work in their stated order.
- Describe each project by what it does and who uses it. Avoid adding claims about results without evidence.
- Use actual work as imagery. The two WebP screenshots were captured from the public project sites on November 11, 2026; they are static previews, not embedded live sites.
- Keep private projects unlinked and development projects labeled.
- Keep the First Things First logo and favicon.
- Use ordinary links, visible focus states, and readable text. Content and navigation must work without JavaScript.
- Keep all content available on one page. The script supports the old `#/home`, `#/get-to-know-me`, `#/work`, `#/ministry`, `#/skills`, and `#/contact` links.

Update the HTML to add projects. Keep screenshots in `assets/`, including their width, height, and descriptive alternative text in the markup.
