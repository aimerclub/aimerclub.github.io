# Asset sources

Institutional marks are existing downloaded assets, not recreated artwork. They remain the property of their respective institutions. Do not recolor, distort, or add treatments to the marks.

| Local file | Retrieved source | Notes |
| --- | --- | --- |
| `cud-logo.svg` | https://cudhacks.github.io/hackathon/assets/cud-logo-dark.svg | Light-background university mark used by the supplied CUDHacks reference. The official CUD homepage uses a white-letter SVG at https://www.cud.ac.ae/themes/indicud/media/logo/bigger/logo_svg.svg; the reference’s dark variant is appropriate for this light page. |
| `etisalat-logo.svg` | https://www.etisalat.ae/content/dam/etisalat/logo/etisalat-logo-ver-red-en-1912x536.svg | Unmodified red Etisalat wordmark linked by the official UAE homepage. |
| `fonts/archivo-latin-variable.woff2` | https://fonts.gstatic.com/s/archivo/v25/k3kPo8UDI-1M0wlSV9XAw6lQkqWY8Q82sLydOxKsv4Rn.woff2 | Archivo, Latin subset, variable weights 400–900. |
| `fonts/ibm-plex-mono-latin.woff2` | https://fonts.gstatic.com/s/ibmplexmono/v23/-F63fjptAgt5VM-kVkqdyU8n1i8q131nj-o.woff2 | IBM Plex Mono, Latin subset, regular weight. |
| `favicon.svg` | Created for this website | A simple letter A, not an institutional logo or proposed official club mark. |

Retrieved 18 November 2026. Archivo and IBM Plex Mono use the SIL Open Font License; the accompanying license files are in `fonts/`. Fonts are hosted locally, so page views do not contact a font service.

To replace an institutional asset with a newly supplied brand-office file, place it in this directory and update the corresponding `src`, `width`, and `height` in `index.html`. Preserve its aspect ratio. For a temporary text-only version, replace the image with the full institution name in a `<span>` inside the existing link; preserve the link and its accessible new-tab notice.
