# Academic Whitepaper Design System, Component Uniformity & Geospatial Mapping Rules

## 1. Visual & Component Uniformity Across the Whitepaper
All components in the research whitepaper (`index.html`) must adhere strictly to a single, unified design system:
- **Table Components**: Every data table in the whitepaper MUST use the standard wrapper and class:
  ```html
  <div class="table-wrapper">
    <table class="paper-table">
      <thead>...</thead>
      <tbody>...</tbody>
    </table>
  </div>
  ```
  Do NOT introduce alternative table classes (such as `.academic-table`, `.styled-table`) or ad-hoc inline font styling (e.g. `style="font-size: 11.5px;"`). The `.paper-table` class provides unified typography, borders, subtle zebra striping, and responsive scrolling across all devices.
- **Academic Callout Boxes**: Use standard tokenized callouts:
  - `<div class="academic-callout data-box">` for empirical findings.
  - `<div class="academic-callout note-box">` for methodological notes.
- **Figure Cards & Captions**: Every illustration or figure container must use `<div class="figure-full">` or `<div class="figure-card">` with standard bold caption styling (`<strong>Figure X.Y: ...</strong>`) and attribution metadata (`<div class="figure-credit">...</div>`).

## 2. Interactive Geospatial Mapping & Deep-Linking Rules
Every monumental structure, archaeological feature, and radar anomaly discussed in the paper must follow strict mapping protocols:

### A. Dual Map Linking Protocol for Detected & Partial Features
- For all monuments and anomalies with **`DETECTED`** or **`PARTIAL`** status, provide **BOTH**:
  1. **Radar Map Link**:
     - Format: `result_map.html?sector=<sector>&lat=<lat>&lon=<lon>` (and `id=<MONUMENT_ID>` if available).
     - Behavior: Must deep-link to the exact geographic coordinates, smoothly pan/fly to the feature, expand the left drawer, highlight the item card, and trigger the diagnostic radar information popup.
  2. **Google Maps Landmark Link**:
     - Format: `https://www.google.com/maps/search/?api=1&query=<Official+Monument+Name>`
     - **CRITICAL**: Use the **official landmark/monument name** (e.g. `query=Step+Pyramid+of+Djoser`, `query=Great+Pyramid+of+Giza`, `query=Bent+Pyramid`), **NEVER raw coordinates** (e.g. `query=29.8713,31.2164`). Raw coordinate queries bypass Google's Knowledge Place Card and show only a bare map pin, preventing readers from seeing official photography, 360° panoramas, and historical overviews.

### B. Protocol for Undetected Features
- For monuments categorized as **`NOT DETECTED`** (such as subterranean or completely denuded mudbrick cores where our radar algorithms detected no above-ground or high-contrast structural anomaly):
  - **Provide ONLY the official Google Maps link**.
  - **Do NOT provide a Radar Map link**. Linking to our radar map for undetected features causes user confusion because no radar anomaly marker exists at that location.

## 3. Typology Distribution Visualizations
- When displaying comparative detection statistics across architectural typologies, present separated, categorized charts (e.g., Solid Megalithic Stone, Stepped Accretion Cores, and Mudbrick Superstructures).
- Each category must explicitly convey its physical remote sensing mechanism (e.g., dihedral corner reflection, facet diffraction, or dielectric soil moisture attenuation) rather than presenting misleading unstratified aggregate figures.
