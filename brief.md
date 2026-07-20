# RSE UX Portfolio — Project Brief

## Purpose

This portfolio documents the UX/UI work produced by the RSE UX team at Toyota Research Institute. It exists to communicate the team's value to internal stakeholders, provide a reference for ongoing and past projects, and give TRI teams a clear path to request new UX engagements.

## Audience

- TRI engineers, researchers, and program managers exploring UX collaboration
- Stakeholders evaluating RSE UX capacity and output
- New team members onboarding to RSE UX processes

## What's Included

### Case Studies (8 projects)

Each case study documents a shipped or presented project with: hero banner, project badges (type, status, Jira link), team roster with Jira profile links, deliverable links (Figma, Confluence, Jira), demo videos, Figma embeds, and screenshot galleries.

| Project | Type | Status |
|---------|------|--------|
| Simplay | iPad | Completed |
| TRI Website Redesign | UX Research | Completed |
| Ops Chatbot | AI Tools | Completed |
| Whyzen | Research | Completed |
| LLM2CAD | Research | Completed |
| Color Perception Tool | Web App | Completed |
| Unstuck | Web App | Completed |
| SWARM Hackathon | Mobile | Completed |

### UX Framework

A seven-step interactive process reference (Research → Synthesize → Define → Ideate → Design → Test → Implement), displayed as a hover-activated panel on the homepage. Each step includes a description, activities & methods, why it matters, and deliverables — reflecting the team's actual workflow.

### TRI Design System

A bundled viewer for the Merged Design System case study, rendered as a full-page interactive HTML file with the portfolio navigation preserved.

### Project Request Form

A structured intake form that compiles requester details, project context, type of work needed, timeline, and file attachments into a pre-filled Gmail compose window — routing requests directly to the UX team inbox.

## Design Decisions

- **Dark theme** using TRI brand colors: `#EB0A1E` (red accent), `#BEFF8C` (green accent), `#1F1F1E` (background)
- **Static site** — no backend, no CMS, intentionally simple to maintain and host
- **Case-study navigation** runs linearly from Simplay to SWARM with no looping
- **Demo videos** served locally as `.mov` files with dual MIME type sources for cross-browser support
- **Favicon** converted to transparent PNG to work on dark backgrounds

## Maintenance Notes

- All case study pages share `css/case-study.css` and follow the same HTML structure
- UX framework copy and data live entirely in `js/app.js` (`fwData` array + `whyItMatters` function)
- Project filter tags are set via `data-tag` attributes on `.project-card` elements in `index.html`
- Footer across case study pages reads: `© 2026 Toyota Research Institute · Curated by Carla Bellido, User Experience Architect`
- Homepage footer reads: `© 2026 Toyota Research Institute - RSE UX`
