// SAR Research Portal Application Script
document.addEventListener('DOMContentLoaded', () => {
  initAnomaliesShowcase();
  initComparisonTable();
  initCopyButtons();
});

// 1. Render Top Anomaly Discoveries on Homepage
function initAnomaliesShowcase() {
  const container = document.getElementById('anomaly-cards-container');
  if (!container || !window.SAR_DATA || !window.SAR_DATA.blindDiscoveries) return;

  const data = window.SAR_DATA.blindDiscoveries;
  let currentCategory = 'all';

  function render(filter) {
    container.innerHTML = '';
    const filtered = data.filter(item => {
      if (filter === 'all') return true;
      return item.category === filter;
    }).slice(0, 9); // Show top 9 on index

    filtered.forEach(item => {
      const card = document.createElement('div');
      card.className = 'anomaly-card';

      let catClass = 'resonant';
      let catLabel = 'Resonant Cavity';
      if (item.category === 'spike') {
        catClass = 'spike';
        catLabel = 'Bedrock / Megalith';
      } else if (item.category === 'dip') {
        catClass = 'dip';
        catLabel = 'Buried Canal / Silt';
      }

      card.innerHTML = `
        <div>
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:12px;">
            <span class="anomaly-tag ${catClass}">${catLabel}</span>
            <span style="font-family:var(--font-mono); font-size:12px; color:var(--text-dim);">#${item.rank.toString().padStart(2, '0')}</span>
          </div>
          <h4 style="font-size:16px; margin-bottom:8px; color:#ffffff;">${item.name.split(':')[1] || item.name}</h4>
          <p style="font-size:13px; color:var(--text-muted); line-height:1.5; margin-bottom:12px;">${item.location_desc}</p>
        </div>

        <div>
          <div class="anomaly-metrics">
            <div>
              <span style="color:var(--text-dim); display:block; font-size:10.5px;">EST. DEPTH</span>
              <strong style="color:var(--cyan-core);">${item.depth_m ? item.depth_m + ' m' : 'Surface (<1m)'}</strong>
            </div>
            <div>
              <span style="color:var(--text-dim); display:block; font-size:10.5px;">COHERENCE (γ)</span>
              <strong style="color:${item.coherence >= 0.5 ? 'var(--emerald-pass)' : 'var(--amber-warm)'};">${item.coherence ? item.coherence.toFixed(2) : 'N/A'}</strong>
            </div>
            <div>
              <span style="color:var(--text-dim); display:block; font-size:10.5px;">FREQUENCY</span>
              <span>${item.freq_hz ? item.freq_hz + ' Hz' : 'Static (DC)'}</span>
            </div>
            <div>
              <span style="color:var(--text-dim); display:block; font-size:10.5px;">AMPLITUDE</span>
              <span>${item.amp_db.toFixed(1)} dB</span>
            </div>
          </div>

          <div style="display:flex; justify-content:space-between; align-items:center; margin-top:8px;">
            <span style="font-family:var(--font-mono); font-size:11.5px; color:var(--text-dim);">${item.lat.toFixed(4)}°N, ${item.lon.toFixed(4)}°E</span>
            <a href="interactive_radar_map.html#sector=${encodeURIComponent(item.region)}" class="mono" style="font-size:11.5px; color:var(--blue-sky); font-weight:600;">
              Locate &rarr;
            </a>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  }

  // Filter Buttons
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter');
      render(currentCategory);
    });
  });

  render('all');
}

// 2. Populate 6-Epoch vs 3-Epoch Quantitative Table
function initComparisonTable() {
  const tbody = document.getElementById('comparison-tbody');
  if (!tbody || !window.SAR_DATA || !window.SAR_DATA.regionalComparison) return;

  const regions = window.SAR_DATA.regionalComparison.regions || [];
  tbody.innerHTML = '';

  regions.forEach(r => {
    const tr = document.createElement('tr');
    
    // Format deltas
    let cohDeltaHtml = '';
    if (r.pct_coh > 0) {
      cohDeltaHtml = `<span class="delta-tag pos">+${r.pct_coh.toFixed(1)}%</span>`;
    } else {
      cohDeltaHtml = `<span class="delta-tag neg">${r.pct_coh.toFixed(1)}%</span>`;
    }

    let voidBadge = '';
    if (r.void_3ep === 0 && r.void_6ep === 0) {
      voidBadge = `<span class="delta-tag solid">100% Solid</span>`;
    } else if (r.void_6ep === 0) {
      voidBadge = `<span class="delta-tag pos">-100% (0 px)</span>`;
    } else {
      const dropPct = ((r.void_3ep - r.void_6ep) / r.void_3ep * 100).toFixed(1);
      voidBadge = `<span class="delta-tag pos">-${dropPct}% (${r.void_6ep} px)</span>`;
    }

    tr.innerHTML = `
      <td><strong>${r.region}</strong></td>
      <td class="mono">${r.coh_3ep.toFixed(3)}</td>
      <td class="mono"><strong>${r.coh_6ep.toFixed(3)}</strong></td>
      <td>${cohDeltaHtml}</td>
      <td class="mono">${r.std_3ep.toFixed(2)} dB</td>
      <td class="mono">${r.std_6ep.toFixed(2)} dB</td>
      <td class="mono">${r.void_3ep} px</td>
      <td class="mono"><strong>${r.void_6ep} px</strong></td>
      <td>${voidBadge}</td>
    `;
    tbody.appendChild(tr);
  });
}

// 3. Coordinate Copy Helper
function initCopyButtons() {
  document.querySelectorAll('.copy-coords-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const coords = btn.getAttribute('data-coords');
      navigator.clipboard.writeText(coords).then(() => {
        const originalText = btn.innerText;
        btn.innerText = 'Copied!';
        btn.style.color = '#10b981';
        setTimeout(() => {
          btn.innerText = originalText;
          btn.style.color = '';
        }, 1500);
      });
    });
  });
}
