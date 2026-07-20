# TRI RSE UX Portfolio

A static HTML/CSS/JS portfolio documenting the UX work of the Research Software Engineering (RSE) UX team at Toyota Research Institute.

## Overview

This portfolio serves as an internal reference for TRI teams — showcasing completed UX projects, the team's design process, and a project request form for new engagements. It includes case studies, demo videos, Figma embeds, and a seven-step UX framework reference.

## Pages

| File | Description |
|------|-------------|
| `index.html` | Homepage — project grid, UX framework, and navigation |
| `simplay.html` | Simplay — iPad app case study |
| `tri-website.html` | TRI Website Redesign — UX research case study |
| `ops-chatbot.html` | Ops Chatbot — AI tools case study |
| `whyzen.html` | Whyzen — case study |
| `llm2cad.html` | LLM2CAD — case study |
| `color-perception.html` | Color Perception Tool — web app case study |
| `unstuck.html` | Unstuck — web app case study |
| `swarm.html` | SWARM Hackathon — mobile case study |
| `tri-design-system.html` | TRI Design System — bundled design file viewer |
| `project-request.html` | Project Request form — composes a pre-filled email to the UX team |

## Structure

```
Portfolio/
├── index.html
├── *.html                  # Case study pages
├── css/
│   ├── style.css           # Homepage styles
│   └── case-study.css      # Shared case study styles
├── js/
│   └── app.js              # UX framework data + filter/view logic
└── assets/
    ├── *.jpg / *.png       # Screenshots and images
    ├── *.mov               # Demo videos
    ├── *.svg               # Logos and icons
    └── favicon.png
```

## Running Locally

No build step required. Open any `.html` file directly in a browser, or serve with any static file server:

```bash
# Python
python3 -m http.server 8080

# Node
npx serve .
```

Then visit `http://localhost:8080`.

## Tech Stack

- Vanilla HTML, CSS, and JavaScript — no frameworks or dependencies
- Figma embeds via iframe
- Video playback via native `<video>` element (`.mov` files, H.264)
- Favicon: transparent PNG converted from source JPG

## Maintained By

Carla Bellido, User Experience Architect  
Research Software Engineering · Toyota Research Institute  
carla.bellido.ctr@tri.global
