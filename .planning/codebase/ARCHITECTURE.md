# Architecture

**Analysis Date:** 2026-07-11

## Pattern Overview

**Overall:** Monolithic Static Single-Page Application (SPA).

**Key Characteristics:**
- Zero server-side runtime code (entirely client-side/static hosting).
- Single-page view layout (`index.html`) using section hash anchors for navigation.
- Declarative layout & content styling coupled with DOM scripts for interface states.
- Event-driven client-side interactivity (scroll listening, theme switches, mouse trackers).

## Layers

**Markup & Layout Layer:**
- Purpose: Defines layout structure, navigation links, text contents, media embeds, and external script dependencies.
- Contains: `index.html` structure.
- Used by: User's web browser.

**Presentation & Styling Layer:**
- Purpose: Implements responsive design, color tokens, transitions, light/dark themes, settings drawer panel activations, and scroll-fade styles.
- Contains: `style.css` stylesheet.
- Depends on: DOM class activations injected by the script layer.
- Used by: `index.html` structure.

**Behavior & Interaction Layer:**
- Purpose: Controls client actions such as playing/pausing music, switching visual modes (dark/light), opening setting panels, updating selected navigation tabs based on current scroll offset, handling scroll-to-top actions, preventing right click on image nodes, and running custom cursor translations.
- Contains: `main.js` interactive logic.
- Used by: `index.html` elements.

## Data Flow

**Interactive States Flow:**

1. **Setting Drawer Activation:**
   - User triggers settings checkbox toggler.
   - `settingtoggle()` function in [main.js](file:///c:/Users/DELL/OneDrive/Desktop/vinay/Portfolio/main.js) updates styling classes on container elements: `#setting-container` (`settingactivate`), `#visualmodetogglebuttoncontainer` (`visualmodeshow`), `#soundtogglebuttoncontainer` (`soundmodeshow`).
   - CSS transitions display or slide in setting options.

2. **Sound Playback Control:**
   - User clicks the audio toggle.
   - `playpause()` checks state of `#switchforsound`.
   - Action runs `audio.play()` or `audio.pause()` referencing the `#audioPlayer` element loading `src/mp3/preloader.mp3`.

3. **Active Navigation Highlighting on Scroll:**
   - User scrolls down the page.
   - Global scroll listener tracks client vertical offset and matches offsets against page `section` containers.
   - Script applies the `.activeThistab` class to desktop navigation headers and `.activeThismobiletab` to mobile menus.

4. **Footer Eye Pupil Tracking:**
   - User moves the mouse pointer.
   - `mousemove` listener intercepts coordinates relative to window bounds.
   - Translates coordinates into normalized offset fraction values `fracXValue` and `fracYValue`.
   - Computes translate pixels and updates `.footer-pupil` CSS translate style values to simulate eyes following the cursor.

**State Management:**
- No server-side database.
- Toggled layout states (e.g. sound play, dark mode) are kept client-side inside the DOM (e.g., body class, checked states) and reset upon reload.

## Key Abstractions

- **AOS (Animate on Scroll):** Declarative `data-aos` parameters inside html elements (e.g., `data-aos="fade-down"`) trigger fade-in animations on scrolling coordinates.
- **Visual Mode:** Injects `light-mode` styling variables into the `body` class and applies class overrides to elements with the `.needtobeinvert` selector.

## Entry Points

**HTML Entry:**
- Location: [index.html](file:///c:/Users/DELL/OneDrive/Desktop/vinay/Portfolio/index.html)
- Triggers: URL page load request.
- Responsibilities: Load styling tags, scripts, layouts, and initial analytics configuration.

**Script Actions:**
- Location: [main.js](file:///c:/Users/DELL/OneDrive/Desktop/vinay/Portfolio/main.js)
- Triggers: DOM content loader, window resize, scroll, move events.
- Responsibilities: Preloader hiding, custom follow cursor initialization, event triggers setup.

## Error Handling

**Strategy:**
- Uses vanilla Javascript error handling. Since it is static, it degrades gracefully if dependencies (e.g., Google Analytics or BuyMeACoffee) fail to load from CDN.
- Uses a `<noscript>` container to notify users if JavaScript is disabled.

## Cross-Cutting Concerns

**Styling Variables:**
- Core colors and mode configurations use visual utility declarations within the stylesheet.

**Event Interceptors:**
- Global contextmenu handler blocks default cursor context actions for image tags (`IMG`), protecting visual assets from simple right-click downloads.

---

*Architecture analysis: 2026-07-11*
*Update when major patterns change*
