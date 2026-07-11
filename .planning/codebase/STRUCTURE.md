# Codebase Structure

**Analysis Date:** 2026-07-11

## Directory Layout

```
[project-root]/
├── .agents/              # GSD agents workflows, scripts, and configuration
├── .git/                 # Git repository directory
├── .planning/            # Project planning documents
│   └── codebase/         # Generated codebase maps
├── src/                  # Static assets directory
│   ├── ico/              # Icon files (e.g., netflix favicon)
│   ├── img/              # Image files (e.g., main profile picture)
│   ├── mp3/              # Audio files (e.g., background preloader soundtrack)
│   ├── pdf/              # Document files (e.g., resume PDF)
│   ├── png/              # Raster graphics (e.g., tech logos, avatar visuals)
│   ├── svg/              # Vector illustrations (e.g., github icon, settings vectors)
│   └── webp/             # WebP project preview images
├── index.html            # Main site markup and content
├── main.js               # Main javascript interactive script
├── README.md             # Project documentation and guide
└── style.css             # Main stylesheet document
```

## Directory Purposes

**.planning/**
- Purpose: Holds project design, planning artifacts, and codebase maps.
- Contains: GSD planning status and codebase mapping documents.
- Key files: `codebase/STACK.md`, `codebase/INTEGRATIONS.md`, `codebase/ARCHITECTURE.md`, `codebase/STRUCTURE.md`.
- Subdirectories: `codebase/`.

**src/**
- Purpose: Groups all visual and auditory resources utilized by the static page.
- Contains: Subfolders segmented by file extension type.
- Subdirectories: `ico/`, `img/`, `mp3/`, `pdf/`, `png/`, `svg/`, `webp/`.

## Key File Locations

**Entry Points:**
- `index.html` - The single HTML page loaded by the browser.

**Configuration:**
- None. (No node packages or build compile setups exist in the root).

**Core Logic:**
- `main.js` - Contains DOM logic, visual settings controllers, menus, and eye tracker event handlers.
- `style.css` - Contains visual theme variables, animations, and layouts.

**Documentation:**
- `README.md` - Setup notes, live links, and features documentation.

## Naming Conventions

**Files:**
- lowercase, kebab-case for code files: `style.css`, `main.js`.
- kebab-case/lowercase for most assets: `reactlogo.png`, `axocean-favicon.webp`.
- Mixed casing or whitespace for user-generated upload assets: `WhatsApp Image 2024-09-03 at 11.44.42 AM.jpeg`, `Vinod's Resume.pdf`.

**Directories:**
- lowercase, plural or singular formats based on type: `src`, `img`, `webp`.

## Where to Add New Code

**Adding a Project:**
- Markup: Add `<div class="project-box-wrapper">` structure inside `#projects` container in [index.html](file:///c:/Users/DELL/OneDrive/Desktop/vinay/Portfolio/index.html).
- Project Previews: Save image to `src/webp/`.
- Styling: Add any class-specific overrides to [style.css](file:///c:/Users/DELL/OneDrive/Desktop/vinay/Portfolio/style.css).

**Adding a Skill Tag:**
- Markup: Add `<li>` item under `.tech-stack-wrapper` ul element in [index.html](file:///c:/Users/DELL/OneDrive/Desktop/vinay/Portfolio/index.html).
- Skill Icon: Save png/svg file into `src/png/` or `src/svg/`.

**Modifying Interactivity:**
- Scripts: Edit or append functions in [main.js](file:///c:/Users/DELL/OneDrive/Desktop/vinay/Portfolio/main.js).

## Special Directories

**src/**
- Purpose: Resource assets.
- Committed: Yes.

---

*Structure analysis: 2026-07-11*
*Update when directory structure changes*
