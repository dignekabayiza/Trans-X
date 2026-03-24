// ============================================
// Trans-X — Bus Cards Component
// ============================================

function renderBusList() {
  const list = document.getElementById('busList');
  if (!list) return;

  list.innerHTML = BUSES.map(bus => {
    const route = getRouteById(bus.route);
    const statusLabel = bus.status.charAt(0).toUpperCase() + bus.status.slice(1);
    return `
      <div class="bus-card status-${bus.status}" onclick="selectBus('${bus.id}')" id="card-${bus.id}">
        <div class="bus-card-top">
          <span class="bus-id">${bus.id}</span>
          <span class="bus-status-badge">${statusLabel.toUpperCase()}</span>
        </div>
        <div class="bus-route">${route ? route.name : '—'}</div>
        <div class="bus-info">
          <span>🚌 ${bus.load}% full</span>
          <span>⚡ ${bus.speed} km/h</span>
          <span class="bus-eta">🕐 ${bus.eta}</span>
        </div>
      </div>
    `;
  }).join('');
}

function selectBus(id) {
  selectedBusId = id;
  document.querySelectorAll('.bus-card').forEach(c => c.classList.remove('active'));
  const card = document.getElementById(`card-${id}`);
  if (card) {
    card.classList.add('active');
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
  drawMap();
}

function renderRoutes() {
  const grid = document.getElementById('routesGrid');
  if (!grid) return;
  grid.innerHTML = ROUTES.map(r => `
    <div class="route-card" style="border-top: 3px solid ${r.color}">
      <div class="route-number">${r.id}</div>
      <div class="route-name">${r.name}</div>
      <div class="route-stops">${r.stops.join(' → ')}</div>
      <div class="route-meta">
        <span>🚌 ${r.active_buses} buses</span>
        <span>⏱ Every ${r.frequency}</span>
        <span>📍 ${r.distance_km} km</span>
        <span>💰 RWF ${r.fare_base}+</span>
      </div>
    </div>
  `).join('');
}
