# Coding Conventions

**Analysis Date:** 2026-07-11

## Naming Patterns

**Files:**
- lowercase, kebab-case for code files (e.g., `style.css`, `main.js`).
- Assets: lowercase, kebab-case or collapsed lowercase for icons (e.g. `htmllogo.png`, `axocean-favicon.webp`).

**Functions:**
- camelCase for JavaScript functions (e.g. `settingtoggle`, `playpause`, `visualmode`, `hamburgerMenu`, `hidemenubyli`, `scrollFunction`, `scrolltoTopfunction`).

**Variables:**
- camelCase or lowercase for DOM elements, lists, and tracker configuration parameters (e.g. `audio`, `loader`, `emptyArea`, `mobileTogglemenu`, `sections`, `navLi`, `mobilenavLi`, `mybutton`, `Pupils`, `pupilsArr`, `fracXValue`, `fracYValue`).

## Code Style

**Formatting:**
- CSS: Compact spacing, lowercase visual property definitions. Media queries grouped at the bottom of sheets.
- JavaScript: Inline minification style. Multiple statements combined with comma operator (e.g., `document.body.classList.toggle("stopscrolling"),document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu")`). Semicolons are required.
- HTML: Indented standard HTML5 structure with inline scripts for CDN integrations. Section dividers clearly marked with comments.

**Linting:**
- None configured.

## Import Organization

**Order:**
1. CSS links inside the `<head>` block. External CDNs (AOS stylesheets, Google Fonts API) are placed before the local `style.css` stylesheet.
2. Script tags inside the bottom of `<body>` block. Dynamic dependencies (AOS script, BuyMeACoffee script) are placed before the custom `main.js` controller.

## Error Handling

**Patterns:**
- No custom javascript error catching (e.g. `try-catch`) is used.
- HTML relies on `<noscript>` indicators for fallback when scripting is blocked.

## Logging

**Framework:**
- None. Developer credit messages logged to `console.log` with background color formatting (`console.log("%c Designed and Developed by Vinod Jangid ", "background-image: linear-gradient(90deg,#8000ff,#6bc5f8); ...")`).

## Comments

**When to Comment:**
- HTML: Structure demarcation comments (e.g. `<!-- mobile toggle menu ends -->`, `<!-- navbar tabs ends -->`).
- JavaScript: None (due to production compression/minification).

## Function Design

**Size:**
- Small utility methods. Responsibilities include DOM class swapping, event listening, and coordinate translations.

---

*Convention analysis: 2026-07-11*
*Update when patterns change*
