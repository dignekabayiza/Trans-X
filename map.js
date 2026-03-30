// =============================================
// TRANS-X — LIVE MAP (Kigali Schematic)
// =============================================

const MAP_NODES = [
  { id: 'nyabugogo', label: 'Nyabugogo', x: 25, y: 48, hub: true },
  { id: 'downtown', label: 'Downtown', x: 38, y: 55, hub: true },
  { id: 'remera', label: 'Remera', x: 62, y: 45, hub: true },
  { id: 'kimironko', label: 'Kimironko', x: 70, y: 30, hub: false },
  { id: 'kacyiru', label: 'Kacyiru', x: 52, y: 40, hub: false },
  { id: 'kicukiro', label: 'Kicukiro', x: 58, y: 68, hub: false },
  { id: 'nyamirambo', label: 'Nyamirambo', x: 25, y: 72, hub: false },
  { id: 'kinyinya', label: 'Kinyinya', x: 76, y: 22, hub: false },
  { id: 'kabuga', label: 'Kabuga', x: 85, y: 42, hub: false },
  { id: 'batsinda', label: 'Batsinda', x: 58, y: 20, hub: false },
];

const MAP_LINES = [
  ['nyabugogo', 'downtown'],
  ['downtown', 'remera'],
  ['remera', 'kacyiru'],
  ['kacyiru', 'downtown'],
  ['remera', 'kimironko'],
  ['kimironko', 'kinyinya'],
  ['downtown', 'kicukiro'],
  ['downtown', 'nyamirambo'],
  ['kabuga', 'remera'],
  ['batsinda', 'kimironko'],
  ['nyabugogo', 'nyamirambo'],
];

let mapBuses = [];

function initMap() {
  const mapEl = document.getElementById('liveMap');
  if (!mapEl) return;

  // Lines
  MAP_LINES.forEach(([a, b]) => {
    const nA = MAP_NODES.find(n => n.id === a);
    const nB = MAP_NODES.find(n => n.id === b);
    const line = document.createElement('div');
    line.className = 'map-line';
    const dx = (nB.x - nA.x) / 100 * mapEl.clientWidth;
    const dy = (nB.y - nA.y) / 100 * mapEl.clientHeight;
    const len = Math.sqrt(dx*dx + dy*dy);
    const angle = Math.atan2(dy, dx) * 180 / Math.PI;
    line.style.cssText = `left:${nA.x}%;top:${nA.y}%;width:${len}px;transform:rotate(${angle}deg)`;
    mapEl.appendChild(line);
  });

  // Nodes
  MAP_NODES.forEach(node => {
    const el = document.createElement('div');
    el.className = `map-node ${node.hub ? 'hub' : ''}`;
    el.style.cssText = `left:${node.x}%;top:${node.y}%`;
    el.title = node.label;
    mapEl.appendChild(el);

    // Label
    const lbl = document.createElement('div');
    lbl.style.cssText = `position:absolute;left:${node.x}%;top:${node.y + 3}%;transform:translateX(-50%);font-size:0.6rem;color:var(--text2);white-space:nowrap;pointer-events:none`;
    lbl.textContent = node.label;
    mapEl.appendChild(lbl);
  });

  // Animated buses
  for (let i = 0; i < 8; i++) {
    spawnBus(mapEl);
  }
}

function spawnBus(mapEl) {
  const line = MAP_LINES[Math.floor(Math.random() * MAP_LINES.length)];
  const [aId, bId] = line;
  const nA = MAP_NODES.find(n => n.id === aId);
  const nB = MAP_NODES.find(n => n.id === bId);

  const bus = document.createElement('div');
  bus.className = 'map-bus';
  const t = Math.random();
  bus.style.cssText = `left:${nA.x + (nB.x-nA.x)*t}%;top:${nA.y + (nB.y-nA.y)*t}%`;
  mapEl.appendChild(bus);

  animateBus(bus, nA, nB, mapEl);
}

function animateBus(bus, nA, nB, mapEl) {
  let progress = 0;
  const speed = 0.002 + Math.random() * 0.003;
  let dir = 1;

  function step() {
    progress += speed * dir;
    if (progress >= 1) { progress = 1; dir = -1; }
    if (progress <= 0) { progress = 0; dir = 1; }
    bus.style.left = `${nA.x + (nB.x-nA.x)*progress}%`;
    bus.style.top = `${nA.y + (nB.y-nA.y)*progress}%`;
    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
