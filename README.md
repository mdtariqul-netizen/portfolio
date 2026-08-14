# Md. Tariqul Islam — Portfolio

Personal portfolio website of **Md. Tariqul Islam**, General Manager, ICT Division at Dhaka Stock Exchange Limited — showcasing 25+ years of experience in ICT infrastructure, network architecture, data centre operations, and IT security leadership.

🔗 **Live site:** [https://portfolio-tariqulislam.vercel.app/index.html](https://portfolio-tariqulislam.vercel.app/index.html) <!-- replace with your actual Vercel URL -->
💼 **LinkedIn:** [linkedin.com/in/md-tariqul-islam-6a224637](https://www.linkedin.com/in/md-tariqul-islam-6a224637/)

---

## About

A multi-page static site built to present a polished, senior-professional profile — career history, delivered projects, credentials, and a self-assessment of working strengths — without relying on any framework or build tooling.

## Pages

| Page | Description |
|---|---|
| `index.html` | Home — introduction, About Me statement, key competencies, quick links |
| `experience.html` | Full professional experience timeline (1999–present) |
| `projects.html` | Major ICT infrastructure and migration projects delivered |
| `credentials.html` | Certifications, training, and academic background |
| `strengths.html` | Self-rated personal strengths with animated progress bars |
| `contact.html` | Contact details and links |

## Design

- **Theme:** Light blue (`#3f7fb0`) as the primary/infrastructure colour, light orange (`#e98a4e`) as the accent for live/active states — a nod to network signal (blue) and live data (orange).
- **Typography:** Fraunces (display serif), IBM Plex Mono (labels/data), Inter (body).
- **Signature element:** An animated node-link "network topology" graph in the homepage hero, reflecting the subject's actual career in network architecture.
- Fully responsive, with `prefers-reduced-motion` respected throughout.

## Tech Stack

Plain **HTML / CSS / JavaScript** — no framework, no build step. Fonts loaded from Google Fonts; everything else is self-contained.

```
portfolio_v2/
├── index.html
├── experience.html
├── projects.html
├── credentials.html
├── strengths.html
├── contact.html
└── assets/
    ├── css/style.css
    ├── js/main.js
    └── img/profile.jpg
```

## Running Locally

No installation needed — just open `index.html` in a browser, or serve the folder locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deployment

This site auto-deploys via **[Vercel](https://vercel.com)** on every push to the `main` branch. No build command or output directory is configured — Vercel serves the static files as-is.

To deploy your own copy:
1. Fork or clone this repository.
2. Import it into Vercel (Framework Preset: **Other**, no build command).
3. Deploy.

## Privacy Note

Sensitive personal identifiers (national ID, date of birth, home address, religion, marital status) and referees' personal contact details are intentionally excluded from this public-facing site.

## Author

**Md. Tariqul Islam**
General Manager, ICT Division — Dhaka Stock Exchange Limited
📍 Dhaka, Bangladesh
✉️ tariqul.islam@dse.com.bd · mdtariqul@outlook.com
