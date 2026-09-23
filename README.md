# SAR Doppler Tomography Research Website

Online presentation, scientific documentation, and interactive geospatial radar portal showcasing the multi-temporal Synthetic Aperture Radar (SAR) Doppler Tomography investigation across the Memphite Pyramid Corridor in Egypt.

## Overview

This repository hosts the static research portal for the [SAR Doppler Tomography Pipeline](https://github.com/remibastier/sar). It documents:
- **Research Purpose & Origin:** Independent validation of Filippo Biondi's (2022/2025) claims of massive subterranean structures beneath Giza, explaining why multi-temporal interferometry proved single-pass detections were speckle noise artifacts, and pivoting to genuine surface/near-subsurface detection.
- **Physical Principles & Methodology:** Transparent explanations of Sentinel-1 C-band limits, the "drum-skin" acoustic resonance concept, 6-epoch 48-look stacking (-96.3% noise reduction), and dual-pol CPR ratios.
- **Site Matches & Hypotheses:** What matches for known monuments (Khufu summit apex corner reflector, Khafre casing stones, Saqqara, Meidum) and why deep vertical shafts like the Osiris shaft or claimed 600m shafts are physically undetectable by satellite C-band radar.
- **Special Case Studies:** Zawyet el-Aryan inside the restricted Egyptian military exclusion zone (massive 21m T-shaped trench, 64 dB specular returns, and virgin desert resonance candidates) and the Hawara Labyrinth canal basin (+211.7% coherence surge).
- **Architectural Typology Matrix:** Contrasting smooth casing stones, stepped limestone cores, mudbrick erosion, and rock-cut trenches.
- **Interactive Multi-Region Radar Map:** Fully integrated Leaflet map loaded with dual-mode continuous dB heatmaps, 4-class discrete classifications, and top anomalies across 10 Egyptian sectors.
- **Unsupervised Anomaly Catalog:** Searchable and filterable database of 30 blind discoveries with estimated depths, frequencies, and coordinates.
- **Future Roadmap:** Transition to L-Band SAR (NISAR/ALOS-2) and sub-meter X-band tasking.

## Structure

```
D:\sar-website\
├── index.html                  # Main presentation website (dark cyber/academic aesthetic)
├── map.html                    # Dedicated fullscreen interactive Leaflet radar map
├── interactive_radar_map.html  # Standalone interactive radar map viewer
├── anomalies.html              # Searchable catalog for all 30 blind discoveries
├── css\
│   └── style.css               # Design system (vanilla CSS, responsive, glassmorphism)
├── js\
│   ├── app.js                  # Client logic, dynamic anomaly showcase, comparison table
│   └── anomalies-data.js       # Complete JSON dataset of blind and regional anomalies
└── assets\
    ├── img\                    # Diagrams, radar figures, and dashboard screenshots
    └── maps\                   # 49 georeferenced radar heatmaps & classification overlays
```

## Running Locally

Because this is a pure static site (HTML5, Vanilla CSS, Vanilla JavaScript, and Leaflet.js via CDN), you can run it with any local HTTP server:

```bash
# Python 3
python -m http.server 8000
```
Then navigate to `http://localhost:8000`.

## GitHub Pages Deployment

1. Commit and push the repository:
   ```bash
   git add .
   git commit -m "Deploy SAR research portal and interactive radar map"
   git push origin main
   ```
2. In the GitHub repository settings (`https://github.com/remibastier/sar-website/settings/pages`), select:
   - **Source:** Deploy from a branch
   - **Branch:** `main` / `root`
3. Your research site will be live instantly!
