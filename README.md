# AIMER Research Club

The official website of **Applied Intelligence & Machine Autonomy for Emerging Researchers**, a joint initiative of **Canadian University Dubai and Etisalat UAE**.

**Beyond Intelligence. Towards Autonomy.**

A lightweight, responsive single page built with semantic HTML, CSS, and vanilla JavaScript. No build step, package installation, framework, analytics, or backend is required.

## Preview locally

From the repository directory, run:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open **http://127.0.0.1:8000/**. Press `Ctrl+C` in the terminal to stop the server. The page can also be opened directly as `index.html`, although a local server best matches hosting behavior.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page content, metadata, institutional links, registration links, and accessible document structure. |
| `styles.css` | Responsive layouts, grid-paper background, typography, colors, buttons, focus states, and reduced-motion support. |
| `script.js` | Progressive mobile navigation, keyboard and focus behavior, and the current copyright year. |
| `assets/` | Local institutional marks, favicon, and licensed fonts. Sources and replacement instructions are in `assets/README.md`. |
| `.nojekyll` | Makes the repository an explicit plain static site for GitHub Pages. |

## Editing content

- Edit club information and leadership directly in `index.html`. Activities are intentionally labeled **planned**; do not present them as completed events until confirmed.
- All **Join AIMER** registration buttons use the same respondent-facing Google Form and open in a new tab. Search for `docs.google.com/forms` when changing the form; update all three instances together.
- **Registration verification, 19 November 2026:** the updated university-supplied respondent URL opened the “AIMER Research Club” form with HTTP 200. All three buttons use this URL.
- Navigation’s **Join** link opens the membership section; the red **Join AIMER** button opens registration.
- Set the palette and page width in the `:root` variables near the beginning of `styles.css`.
- Update the title and description metadata if the club’s official messaging changes. A canonical URL and absolute social-preview image can be added once the final public URL is confirmed; no deployment address is assumed.
- The institution names and academic–industry joint initiative are explicit in the hero, About section, and footer. No past projects, publications, attendance figures, or undocumented affiliations are claimed.

## Accessibility and behavior

The site includes a skip link, labeled navigation, logical headings, visible keyboard focus, image alternatives, reduced-motion support, and descriptive notices for links that open new tabs. On narrow screens, the menu button exposes its expanded state; Escape closes the menu and returns focus to the button. Selecting a section closes the menu and focuses the destination. Navigation and all content remain available if JavaScript is disabled.

The only JavaScript enhancements are the menu and year. Research areas and activities are static content rather than interactive controls. Relative asset URLs work on both a custom domain and a GitHub Pages project subpath. Fonts and logos are served locally, with system-font fallbacks.

## GitHub Pages deployment — when approved

No commit, push, or deployment is performed as part of creating this version.

After approval:

1. Commit and push the reviewed site files to the intended GitHub repository and branch.
2. Open **Settings → Pages** for that repository.
3. Select **Deploy from a branch**, choose the branch containing the site, and select **`/ (root)`**.
4. Save and wait for GitHub Pages to provide the live URL.
5. Check the live URL, internal navigation, and registration links on desktop and mobile.

Keep `index.html` at the repository root. Do not change local asset URLs to paths starting with `/`; those would point outside a GitHub Pages project’s subdirectory.

## Verification

Checked in headless Chromium on 18 November 2026:

- Responsive overflow and header layout at 320, 375, 390, 700, 768, 960, 961, 1024, 1280, 1440, and 1920 CSS pixels.
- Menu activation by keyboard, Escape, focus at section destinations, and menu state after viewport changes.
- Every internal anchor, all three registration `href` values and new-tab attributes, 12 research areas, and six planned activities.
- Automated axe-core checks at 390px and 1440px with no violations in the selected WCAG 2 A/AA, WCAG 2.1 AA, and best-practice rules. Automated checks do not replace a full manual accessibility audit.
- Visible navigation with JavaScript disabled, reduced-motion behavior, and anchor clearance below the sticky header.
- All local images and fonts load, with no browser script errors or failed local resource requests.
- Relative assets resolve under a simulated `/aimer-research-club/` project subpath.
- Visual review of desktop and mobile screenshots against the reference, and JavaScript syntax validation with `node --check script.js`.

No registration data was submitted during verification.

## Design reference and branding

The supplied [CUDHacks website](https://cudhacks.github.io/hackathon/) was inspected in source and in a browser. This site carries forward its off-white graph-paper background, Archivo display type, IBM Plex Mono labels, black and red headings, and square bordered buttons. The layout and content are designed for a research community.

Existing institutional SVG assets are included without modifying their artwork; provenance, font licenses, and instructions for replacing marks are documented in [assets/README.md](assets/README.md). Institution destinations were verified against their official homepages: [Canadian University Dubai](https://www.cud.ac.ae/) and [Etisalat UAE](https://www.etisalat.ae/en/).
