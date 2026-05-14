# Explore Criminology

A lightweight public landing page that points visitors to the CrimRxiv
Consortium's family of criminology dashboards:

- **Experts** — [Faculty Explorer](https://crimconsortium.github.io/criminology-faculty-explorer/)
- **Mentors** — [Mentor Match](https://crimconsortium.github.io/mentor-match/)
- **Jobs** — [Jobs Explorer](https://crimconsortium.github.io/criminology-jobs/)

The site is fully static and hosted via GitHub Pages.

## Hosting

- **Current URL:** `https://crimconsortium.github.io/explore-criminology/`
- **Planned custom domain:** `https://explore.crimrxiv.com/` (configured via
  `CNAME` once DNS is pointed at GitHub Pages).

The site has no hard-coded references to the GitHub Pages URL — links,
canonical URL, and Open Graph metadata already target the future
`explore.crimrxiv.com` identity, so a custom-domain cutover is a DNS-and-CNAME
change with no markup rewrite required.

## Custom-domain cutover

When ready to move to the custom domain:

1. Add a file named `CNAME` at the repo root containing a single line:
   `explore.crimrxiv.com`
2. In Cloudflare DNS for `crimrxiv.com`, add a `CNAME` record:
   - **Name:** `explore`
   - **Target:** `crimconsortium.github.io`
   - **Proxy:** DNS only (gray cloud) for the initial certificate issuance;
     can be re-enabled to proxied after Pages confirms the cert.
3. In the repo's GitHub Pages settings, set the custom domain to
   `explore.crimrxiv.com` and enable **Enforce HTTPS** once the
   certificate is provisioned.

## Design

The page deliberately matches the design system used across the existing
dashboards (Source Serif 4 + Inter, burnt-orange `#f68212` accents on a
warm near-white or true-black surface, light/dark mode with system
preference detection and persistence).

## Structure

```
.
├── index.html   # single-page hub
├── style.css    # design tokens + layout (mirrors sibling dashboards)
├── app.js       # theme toggle (mirrors sibling dashboards)
└── README.md
```

## License

Content © CrimRxiv Consortium. Code released under the MIT License — see
`LICENSE` if present, or treat as MIT.
