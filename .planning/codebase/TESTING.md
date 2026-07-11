# Testing Patterns

**Analysis Date:** 2026-07-11

## Test Framework

**Runner:**
- None. There is no automated test runner configured in this repository.

**Assertion Library:**
- None.

**Run Commands:**
- None.

## Test File Organization

- No test files exist in the repository.

## Test Structure

- No automated test structures are present.

## Mocking

- None.

## Fixtures and Factories

- None.

## Coverage

- No coverage target is enforced or measured.

## Test Types

- Manual verification is the sole testing method used for changes.

## Manual Verification Plan

To verify that the application works correctly after making changes:

### Visual layout & themes:
1. Open [index.html](file:///c:/Users/DELL/OneDrive/Desktop/vinay/Portfolio/index.html) in Chrome, Firefox, or Safari.
2. Toggle the visual theme switch (light/dark mode) via the settings drawer and confirm stylesheet variables update instantly.
3. Test hamburger menu toggling on mobile viewport sizes (e.g. Chrome DevTools Responsive view).

### Actions & Links:
1. Scroll down the page and verify that navbar items highlight dynamically matching current active sections.
2. Click the background sound play/pause switch and check that music controls (`#audioPlayer` playing `src/mp3/preloader.mp3`) behave as expected.
3. Hover over the footer and verify that eye pupil coordinates translate dynamically matching the mouse cursor location.
4. Verify click actions on external social/project redirects (e.g., mailto links, GitHub icons, Live view buttons, BuyMeACoffee widget).

---

*Testing analysis: 2026-07-11*
*Update when test patterns change*
