// =============================================
// TRANS-X — KIGALI ROUTES DATA
// Source: RURA 2024, City of Kigali, KT Press
// 7 Corridors · 18 Operators · 40+ Routes
// =============================================

const KIGALI_CORRIDORS = [
  {
    id: 'A',
    name: 'Corridor A — Gasabo / Kicukiro East',
    color: '#00e87a',
    districts: ['Gasabo', 'Kicukiro'],
    operators: ['KBS', 'Nyabugogo Cooperative', 'RITCO', 'Volcano Express'],
    buses: 98,
    avgLoad: 72,
    status: 'ok',
    routes: [
      { num: 'A1', name: 'Remera → Downtown', stops: ['Remera Bus Park', 'Kacyiru', 'CBD'], type: 'trunk' },
      { num: 'A2', name: 'Kabuga → Nyabugogo', stops: ['Kabuga', 'Remera', 'Nyabugogo Terminal'], type: 'trunk' },
      { num: 'A3', name: 'Rubirizi → Downtown', stops: ['Rubirizi', 'Kicukiro', 'CBD'], type: 'trunk' },
      { num: 'A4', name: 'Remera → Nyabugogo via Kacyiru', stops: ['Remera', 'Kacyiru', 'Nyabugogo'], type: 'trunk' },
      { num: 'A5', name: 'Nyanza → Remera', stops: ['Nyanza', 'Kicukiro', 'Remera'], type: 'inter-zonal' },
      { num: 'A6', name: 'Remera → Special Economic Zone (Masoro)', stops: ['Remera', 'Kacyiru', 'SEZ Masoro'], type: 'new', isNew: true },
      { num: 'A7', name: 'Remera → Busanza via Mu Itunda', stops: ['Remera', 'Mu Itunda', 'Busanza'], type: 'new', isNew: true },
      { num: 'A8', name: 'CBD → Downtown', stops: ['Kigali CBD', 'Downtown'], type: 'new', isNew: true },
    ]
  },
  {
    id: 'B',
    name: 'Corridor B — Downtown / Nyabugogo–Kicukiro',
    color: '#1e9bff',
    districts: ['Nyarugenge', 'Kicukiro'],
    operators: ['KBS', 'RITCO', 'Four G Transport', 'Nsengiyumva Jean Paul', 'Remera Cooperative'],
    buses: 85,
    avgLoad: 68,
    status: 'ok',
    routes: [
      { num: 'B1', name: 'Downtown → Kicukiro Centre', stops: ['Downtown', 'Kacyiru', 'Kicukiro Centre'], type: 'trunk' },
      { num: 'B2', name: 'Nyabugogo → Kicukiro', stops: ['Nyabugogo Terminal', 'Downtown', 'Kicukiro'], type: 'trunk' },
      { num: 'B3', name: 'Kabuga → Downtown', stops: ['Kabuga', 'Remera', 'Downtown'], type: 'trunk' },
      { num: 'B4', name: 'Gahanga → Nyabugogo', stops: ['Gahanga', 'Nyanza', 'Nyabugogo'], type: 'new', isNew: true },
      { num: 'B5', name: 'Masaka → SEZ', stops: ['Masaka', 'Kicukiro', 'SEZ'], type: 'new', isNew: true },
    ]
  },
  {
    id: 'C',
    name: 'Corridor C — Nyarugenge South',
    color: '#ff8c3a',
    districts: ['Nyarugenge'],
    operators: ['RFTC/Jali Transport', 'Remera Cooperative', 'KBS'],
    buses: 62,
    avgLoad: 75,
    status: 'busy',
    routes: [
      { num: 'C1', name: 'Nyamirambo → Downtown', stops: ['Nyamirambo (Irya Nyuma)', 'Muhima', 'Downtown'], type: 'trunk' },
      { num: 'C2', name: 'Nyamirambo → Kimisagara → Nyabugogo', stops: ['Nyamirambo', 'Kimisagara', 'Nyabugogo'], type: 'trunk' },
      { num: 'C3', name: 'Nyabugogo → Bishenyi', stops: ['Nyabugogo', 'Muhima', 'Bishenyi'], type: 'inter-zonal' },
      { num: 'C4', name: 'Nyamirambo → Mageragere', stops: ['Nyamirambo', 'Mageragere'], type: 'inter-zonal' },
      { num: 'C5', name: 'Karama Norvège → Nyabugogo', stops: ['Karama', 'Muhima', 'Nyabugogo'], type: 'intra-zonal' },
    ]
  },
  {
    id: 'D',
    name: 'Corridor D — Nyarugenge West/Central',
    color: '#ffd32a',
    districts: ['Nyarugenge'],
    operators: ['Volcano Express', 'RITCO', 'Murinda Raphael', 'Jali Transport'],
    buses: 55,
    avgLoad: 61,
    status: 'ok',
    routes: [
      { num: 'D1', name: 'Nyabugogo → Downtown', stops: ['Nyabugogo Terminal', 'Muhima', 'Downtown'], type: 'trunk' },
      { num: 'D2', name: 'Nyabugogo → Gihara', stops: ['Nyabugogo', 'Kinyinya Rd', 'Gihara'], type: 'intra-zonal' },
      { num: 'D3', name: 'Nyabugogo → Kanyinya', stops: ['Nyabugogo', 'Kanyinya'], type: 'intra-zonal' },
      { num: 'D4', name: 'Nyabugogo → Karuruma → Jali', stops: ['Nyabugogo', 'Karuruma', 'Jali'], type: 'new', isNew: true },
      { num: 'D5', name: 'Nyabyondo → Nyabugogo', stops: ['Nyabyondo', 'Muhima', 'Nyabugogo'], type: 'intra-zonal' },
      { num: 'D6', name: 'Nyabugogo → Bweramvura', stops: ['Nyabugogo', 'Bweramvura'], type: 'intra-zonal' },
      { num: 'D7', name: 'Nyabugogo → Kanogo → Cyumbati', stops: ['Nyabugogo', 'Kanogo', 'Cyumbati'], type: 'intra-zonal' },
    ]
  },
  {
    id: 'E',
    name: 'Corridor E — Gasabo North (Kinyinya/Kimironko)',
    color: '#c44dff',
    districts: ['Gasabo'],
    operators: ['Volcano Express', 'Ebenezer', 'Royal Express', 'Centre Centre Cooperative', 'Jali Transport'],
    buses: 78,
    avgLoad: 82,
    status: 'busy',
    routes: [
      { num: 'E1', name: 'Kinyinya → Downtown via Nyarutarama', stops: ['Kinyinya', 'Nyarutarama', 'Downtown'], type: 'trunk' },
      { num: 'E2', name: 'Kimironko → Downtown', stops: ['Kimironko', 'Remera', 'Downtown'], type: 'trunk' },
      { num: 'E3', name: 'Kacyiru → Downtown', stops: ['Kacyiru', 'Muhima', 'Downtown'], type: 'trunk' },
      { num: 'E4', name: 'Kinyinya → Kimironko', stops: ['Kinyinya', 'Kimironko'], type: 'intra-zonal' },
      { num: 'E5', name: 'Musave → Kimironko via Azam', stops: ['Musave', 'Azam Factory', 'Kimironko'], type: 'inter-zonal' },
      { num: 'E6', name: 'Batsinda → Kimironko', stops: ['Batsinda', 'Kinyinya', 'Kimironko'], type: 'inter-zonal' },
      { num: 'E7', name: 'Masaka → Kimironko', stops: ['Masaka', 'Kicukiro', 'Kimironko'], type: 'inter-zonal' },
      { num: 'E8', name: 'Masizi → Kimironko', stops: ['Masizi', 'Kimironko'], type: 'intra-zonal' },
      { num: 'E9', name: 'Kimironko → Bumbogo', stops: ['Kimironko', 'Bumbogo'], type: 'new', isNew: true },
      { num: 'E10', name: 'Gasanze → Birembo → Kinyinya', stops: ['Gasanze', 'Birembo', 'Kinyinya'], type: 'new', isNew: true },
    ]
  },
  {
    id: 'F',
    name: 'Corridor F — Gasabo (Batsinda/Kimironko/Zindiro)',
    color: '#00c4ff',
    districts: ['Gasabo'],
    operators: ['Shalom Transportation Ltd', 'Jali Transport Ltd', 'City Centre Cooperative', 'Mberimfura Donatien', 'Iwacu Batty Ltd'],
    buses: 68,
    avgLoad: 65,
    status: 'ok',
    routes: [
      { num: 'F1', name: 'Batsinda → Downtown', stops: ['Batsinda', 'Kacyiru', 'Downtown'], type: 'trunk' },
      { num: 'F2', name: 'Kimironko → Nyabugogo', stops: ['Kimironko', 'Kacyiru', 'Nyabugogo'], type: 'trunk' },
      { num: 'F3', name: 'Musave → Kimironko via Zindiro', stops: ['Musave', 'Zindiro', 'Kimironko'], type: 'inter-zonal' },
      { num: 'F4', name: 'Nyabugogo → Gakinjiro via Fawe & Batsinda', stops: ['Nyabugogo', 'Fawe', 'Batsinda', 'Gakinjiro'], type: 'inter-zonal' },
      { num: 'F5', name: 'Batsinda → Nyabugogo', stops: ['Batsinda', 'Kacyiru', 'Nyabugogo'], type: 'trunk' },
      { num: 'F6', name: 'Kinyinya → Nyabugogo via Utexrwa', stops: ['Kinyinya', 'Utexrwa', 'Nyabugogo'], type: 'inter-zonal' },
      { num: 'F7', name: 'Kinyinya → Downtown via Utexrwa', stops: ['Kinyinya', 'Utexrwa', 'Downtown'], type: 'inter-zonal' },
      { num: 'F8', name: 'Gasanze → Batsinda → Nyabugogo', stops: ['Gasanze', 'Batsinda', 'Nyabugogo'], type: 'new', isNew: true },
      { num: 'F9', name: 'Nyacyonga → Rutunga', stops: ['Nyacyonga', 'Rutunga'], type: 'new', isNew: true },
    ]
  },
  {
    id: 'G',
    name: 'Corridor G — Nyarugenge (Largest)',
    color: '#ff4757',
    districts: ['Nyarugenge'],
    operators: ['RITCO Ltd', 'KBS', 'Volcano Express', 'Jali Transport', 'Remera Cooperative', 'Murinda Raphael'],
    buses: 92,
    avgLoad: 79,
    status: 'warn',
    routes: [
      { num: 'G1', name: 'Nyamirambo (Irya Nyuma) → Downtown', stops: ['Nyamirambo', 'Muhima', 'Downtown'], type: 'trunk' },
      { num: 'G2', name: 'Nyacyonga → Nyabugogo', stops: ['Nyacyonga', 'Kacyiru', 'Nyabugogo'], type: 'trunk' },
      { num: 'G3', name: 'Nyabugogo → Giticyinyoni', stops: ['Nyabugogo', 'Giticyinyoni'], type: 'intra-zonal' },
      { num: 'G4', name: 'Karama Rya Nyuma', stops: ['Karama', 'Nyabugogo'], type: 'intra-zonal' },
      { num: 'G5', name: 'Nyabugogo → Kanogo → Cyumbati', stops: ['Nyabugogo', 'Kanogo', 'Cyumbati'], type: 'intra-zonal' },
      { num: 'G6', name: 'Nyacyonga → Masoro (SEZ)', stops: ['Nyacyonga', 'SEZ Masoro'], type: 'new', isNew: true },
      { num: 'G7', name: 'Nyabugogo → Shyorongi (24km)', stops: ['Nyabugogo', 'Kimironko', 'Shyorongi'], type: 'new', isNew: true },
      { num: 'G8', name: 'Bumbogo → Kimironko', stops: ['Bumbogo', 'Kinyinya', 'Kimironko'], type: 'new', isNew: true },
    ]
  }
];

// Render corridors
function renderCorridors() {
  const container = document.getElementById('corridorsContainer');
  if (!container) return;

  container.innerHTML = KIGALI_CORRIDORS.map(c => `
    <div class="corridor-section">
      <div class="corridor-header" onclick="toggleCorridor('${c.id}')">
        <div class="corr-letter" style="background:${c.color}22;color:${c.color}">${c.id}</div>
        <div class="corr-info">
          <div class="corr-title">${c.name}</div>
          <div class="corr-ops">Operators: ${c.operators.join(' · ')}</div>
        </div>
        <div class="corr-stats">
          <div class="corr-stat"><strong>${c.buses}</strong>buses</div>
          <div class="corr-stat"><strong>${c.routes.length}</strong>routes</div>
          <div class="corr-stat"><strong>${c.avgLoad}%</strong>avg load</div>
        </div>
        <div class="corr-toggle" id="toggle-${c.id}">▼</div>
      </div>
      <div class="corridor-routes" id="routes-${c.id}">
        <div class="route-chips">
          ${c.routes.map(r => `
            <div class="route-chip ${r.isNew ? 'new' : ''}">
              <span class="route-num" style="background:${c.color};color:${c.color === '#ffd32a' ? '#000' : '#000'}">${r.num}</span>
              ${r.name}
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

function toggleCorridor(id) {
  const el = document.getElementById(`routes-${id}`);
  const tog = document.getElementById(`toggle-${id}`);
  el.classList.toggle('open');
  tog.classList.toggle('open');
}

// Render corridor list in dashboard
function renderCorridorList() {
  const el = document.getElementById('corridorList');
  if (!el) return;
  el.innerHTML = KIGALI_CORRIDORS.map(c => `
    <div class="corridor-item">
      <div class="corridor-badge" style="background:${c.color}22;color:${c.color}">${c.id}</div>
      <div class="corridor-name">${c.name.replace('Corridor '+c.id+' — ','')}</div>
      <div class="corridor-meta">${c.buses} buses · ${c.avgLoad}% load</div>
      <div class="status-dot ${c.status}"></div>
    </div>
  `).join('');
}

// Render route bars
function renderRouteBars() {
  const el = document.getElementById('routeBars');
  if (!el) return;
  const top = [
    { name: 'Nyabugogo → Downtown', pct: 94, color: '#ff4757' },
    { name: 'Kimironko → Downtown', pct: 88, color: '#ff8c3a' },
    { name: 'Remera → CBD', pct: 81, color: '#ffd32a' },
    { name: 'Kacyiru → Downtown', pct: 76, color: '#00e87a' },
    { name: 'Kabuga → Nyabugogo', pct: 70, color: '#00e87a' },
    { name: 'Kinyinya → Downtown', pct: 65, color: '#1e9bff' },
    { name: 'Nyamirambo → Downtown', pct: 61, color: '#1e9bff' },
  ];
  el.innerHTML = top.map(r => `
    <div class="route-bar-item">
      <div class="route-bar-name">${r.name}</div>
      <div class="route-bar-track">
        <div class="route-bar-fill" style="width:0%;background:${r.color}" data-pct="${r.pct}"></div>
      </div>
      <div class="route-bar-pct">${r.pct}%</div>
    </div>
  `).join('');

  setTimeout(() => {
    el.querySelectorAll('.route-bar-fill').forEach(b => {
      b.style.width = b.dataset.pct + '%';
    });
  }, 300);
}
