# External Integrations

**Analysis Date:** 2026-07-11

## APIs & External Services

**Analytics:**
- Google Analytics (gtag.js) - Tracks visitor statistics, page views, and user interactions.
  - Integration method: Inline script block in `<head>`.
  - Config: Tracking ID `G-YMWDE0VTD3`.

**Donations/Support:**
- BuyMeACoffee Widget - Standard donation button widget.
  - SDK/Client: `https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js`
  - Config: Loaded inline via script tag with parameters: `data-id="vinay_132"`, `data-description="Support me on Buy me a coffee!"`, `data-color="#BD5FFF"`, `data-position="left"`.

**Content Delivery Networks (CDNs):**
- unpkg.com - Serves files for AOS (Animate on Scroll) library.
  - Links: `https://unpkg.com/aos@next/dist/aos.css` and `https://unpkg.com/aos@next/dist/aos.js`
- cdnjs.buymeacoffee.com - Serves the BuyMeACoffee widget script.
- fonts.googleapis.com & fonts.gstatic.com - Delivers typography assets dynamically.

## Data Storage

**Databases:**
- None (stateless frontend-only app).

**File Storage:**
- None (assets are stored locally in the git repository under the `src/` directory).

**Caching:**
- Browser-level caching of static assets.

## Authentication & Identity

**Auth Provider:**
- None.

## Monitoring & Observability

**Error Tracking:**
- None.

**Analytics:**
- Google Analytics (`G-YMWDE0VTD3`).

**Logs:**
- Browser console logs only.

## CI/CD & Deployment

**Hosting:**
- GitHub Pages - Serves the static assets directly from the repository.

**CI Pipeline:**
- GitHub Actions / GitHub Pages deployment workflow.

## Environment Configuration

**Development:**
- No environment variables required. Opened directly in browser or served with a simple local server.

**Production:**
- Hosted under `https://vinaypatil-132.github.io/Portfolio/`.

## Webhooks & Callbacks

**Incoming:**
- None.

**Outgoing:**
- None.

---

*Integration audit: 2026-07-11*
*Update when adding/removing external services*
