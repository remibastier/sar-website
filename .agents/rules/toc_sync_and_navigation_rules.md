# Navigation & TOC Synchronization Rules for Research Whitepapers & Portals

## 1. Mandatory 1-to-1 TOC Synchronization
Whenever adding, renaming, renumbering, or deleting any `<section id="...">` or major sub-section (`<h3 id="...">`) in `index.html` (or any academic whitepaper page with a navigation sidebar):
- **Immediate TOC Reflection**: You MUST simultaneously add, update, or remove the corresponding `<li><a href="#[id]">...</a></li>` inside the `.sidebar-toc` unordered list.
- **Hierarchy Representation**: Major sections (`2.0`, `3.0`, `4.0`, etc.) should appear as top-level list items. Subsections (`3.1`, `3.2`, `4.1`, `4.2`, `9.1`, `10.1`, etc.) should either be nested or clearly indented under their parent section so users can jump directly to any technical section.
- **No Orphan Sections**: Never leave any `<section>` or `<h3>` without a direct navigation anchor in the left sidebar.

## 2. Interactive Map Canonical URL Standard
- **Canonical Map Endpoint**: The only valid interactive map URL is `result_map.html`.
- **Absolute Prohibition on Legacy Endpoints**: Never link to `interactive_radar_map.html`, `map.html`, or old sub-routes.
- **Deep-Linking Query Standard**: When linking from anomaly tables, anomaly catalog cards (`anomalies.html`), or research text directly to an anomaly on the map, use query parameters:
  `result_map.html?id=[ANOMALY_ID]&sector=[sector_key]&lat=[lat]&lon=[lon]`
  Ensure that `result_map.html` parses both `window.location.search` (`?key=val`) and `window.location.hash` (`#key=val`), smoothly flies the camera to the exact coordinates, and activates the anomaly marker popup.

## 3. Collapsible Sidebar UI Standard
- All paper views (`index.html`, `anomalies.html`) must preserve a fully functional, highly visible collapsible navigation sidebar (`id="main-sidebar"`).
- The collapse/expand toggle button (`id="sidebar-toggle-btn"`) must remain pinned and easily clickable at the top of the sidebar, switching between a full-width navigation drawer and an unobtrusive 48px rail.
