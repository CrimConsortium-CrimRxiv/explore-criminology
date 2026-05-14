# Explore Criminology

A lightweight public landing page that points visitors to CrimConsortium's
family of criminology dashboards:

- **Experts** — [Faculty Explorer](https://crimconsortium.github.io/criminology-faculty-explorer/)
- **Mentors** — [Mentor Match](https://crimconsortium.github.io/mentor-match/)
- **Jobs** — [Jobs Explorer](https://crimconsortium.github.io/criminology-jobs/)

The site is fully static and hosted via GitHub Pages.

## Hosting

- **Primary URL:** https://crimconsortium.com/
- **Fallback:** https://crimconsortium.github.io/explore-criminology/

The custom domain is configured via the `CNAME` file at the repo root and
apex `A`/`AAAA` records in Cloudflare DNS pointing at GitHub Pages.

## DNS configuration (Cloudflare, zone `crimconsortium.com`)

Apex (`@` / `crimconsortium.com`):

- **A:** `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- **AAAA:** `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
- Proxy status: **DNS only** during initial cert issuance. Can be switched
  to **Proxied** afterward for Cloudflare CDN/security benefits.
- Cloudflare SSL/TLS mode should be **Full** (not Flexible) once proxied,
  since GitHub Pages serves HTTPS at the origin.

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

Content © CrimConsortium. Code released under the MIT License — see
`LICENSE` if present, or treat as MIT.
