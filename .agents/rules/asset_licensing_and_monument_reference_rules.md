# Asset Licensing, Open Source Media & Monument Reference Rules

## 1. Mandatory Open Source & Copyright Compliance
- **Zero Copyright Infringement:** NEVER use copyrighted images, stock photos, or unverified web graphics.
- **Permitted Licenses Only:** All visual media (monument photos, excavation archives, diagrams, maps) MUST come exclusively from verified Public Domain or Creative Commons open-access repositories (e.g., Wikimedia Commons, Library of Congress, NASA, ESA Open Access, CC0, CC BY, CC BY-SA).
- **Mandatory Attribution:** Every image used in the project must include explicit attribution stating:
  - Source repository (e.g., *Wikimedia Commons*).
  - Author / Photographer credit.
  - License type (e.g., *Public Domain*, *CC BY-SA 4.0*).
- **Local Storage Requirement:** All media assets must be downloaded and hosted locally in `assets/img/` rather than hotlinked externally, preventing 403/429 hotlink blocks or broken links.

---

## 2. Mandatory Google Maps Cross-Verification Links
- **Direct Geospatial Links:** Every known archaeological monument, pyramid, quarry, or landmark listed in documentation, tables, or figure cards MUST provide a direct Google Maps hyperlink.
- **Standard URL Format:**
  ```html
  <a href="https://www.google.com/maps/search/?api=1&query=<lat>,<lon>" target="_blank" rel="noopener">Google Maps ↗</a>
  ```
- **Purpose:** Enables peer reviewers and readers to instantly cross-reference satellite radar findings with high-resolution optical satellite imagery, terrain 3D views, and verified ground-level coordinates.
