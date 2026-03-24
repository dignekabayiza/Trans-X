// ============================================
// Trans-X — Canvas Map Renderer
// ============================================

let busPositions = {};
let selectedBusId = null;

function initMap() {
  const canvas = document.getElementById('mapCanvas');
  if (!canvas) return;
  drawMap();
  setInterval(updateBusPositions, 1800);
}

function drawMap() {
  const canvas = document.getElementById('mapCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width;
  const H = canvas.height;

  ctx.clearRect(0, 0, W, H);

  // Background
  ctx.fillStyle = '#071a10';
  ctx.fillRect(0, 0, W, H);

  // Grid
  ctx.strokeStyle = 'rgba(0,229,160,0.06)';
  ctx.lineWidth = 1;
  for (let x = 0; x < W; x += 40) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
  }
  for (let y = 0; y < H; y += 40) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
  }

  // Draw route lines
  ROUTES.forEach(route => {
    ctx.beginPath();
    ctx.strokeStyle = route.color + '66';
    ctx.lineWidth = 2;
    ctx.setLineDash([6, 4]);
    route.coords.forEach((pt, i) => {
      if (i === 0) ctx.moveTo(pt.x, pt.y);
      else ctx.lineTo(pt.x, pt.y);
    });
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw stops
    route.coords.forEach((pt, i) => {
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 5, 0, Math.PI * 2);
      ctx.fillStyle = route.color;
      ctx.fill();
      ctx.strokeStyle = '#030f09';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Stop label
      ctx.fillStyle = route.color + 'cc';
      ctx.font = '10px Space Mono, monospace';
      ctx.fillText(route.stops[i] || '', pt.x + 8, pt.y - 6);
    });
  });

  // Draw buses
  BUSES.forEach(bus => {
    const route = getRouteById(bus.route);
    if (!route) return;
    const pos = getBusPosition(bus, route);
    drawBusMarker(ctx, pos.x, pos.y, bus, route.color);
  });
}

function getBusPosition(bus, route) {
  if (!busPositions[bus.id]) {
    const idx = Math.floor(Math.random() * (route.coords.length - 1));
    const t = Math.random();
    busPositions[bus.id] = { segIdx: idx, t, dir: 1 };
  }
  const pos = busPositions[bus.id];
  const from = route.coords[pos.segIdx];
  const to = route.coords[pos.segIdx + 1] || route.coords[pos.segIdx];
  return {
    x: from.x + (to.x - from.x) * pos.t,
    y: from.y + (to.y - from.y) * pos.t
  };
}

function updateBusPositions() {
  BUSES.forEach(bus => {
    const route = getRouteById(bus.route);
    if (!route || !busPositions[bus.id]) return;
    const pos = busPositions[bus.id];
    if (bus.status === 'delayed') {
      pos.t += 0.02;
    } else if (bus.status === 'stopping') {
      return;
    } else {
      pos.t += 0.06 + Math.random() * 0.04;
    }
    if (pos.t >= 1) {
      pos.t = 0;
      pos.segIdx = (pos.segIdx + 1) % (route.coords.length - 1);
    }
  });
  drawMap();
}

function drawBusMarker(ctx, x, y, bus, color) {
  const isSelected = bus.id === selectedBusId;
  const statusColor = bus.status === 'moving' ? '#00E5A0' :
                      bus.status === 'stopping' ? '#ffd166' : '#ff4d6a';

  // Pulse ring
  if (bus.status === 'moving') {
    ctx.beginPath();
    ctx.arc(x, y, 12, 0, Math.PI * 2);
    ctx.fillStyle = statusColor + '22';
    ctx.fill();
  }

  // Bus icon (rounded rect)
  ctx.save();
  ctx.translate(x, y);
  ctx.fillStyle = isSelected ? color : statusColor;
  roundRect(ctx, -10, -6, 20, 12, 3);
  ctx.fill();

  // Windshield
  ctx.fillStyle = '#030f09';
  ctx.fillRect(-8, -4, 5, 6);

  ctx.restore();

  // Label
  if (isSelected) {
    ctx.fillStyle = color;
    ctx.font = 'bold 10px Space Mono, monospace';
    ctx.fillText(bus.id, x - 14, y - 14);
  }
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function initHeroMap() {
  const heroMap = document.getElementById('heroMap');
  if (!heroMap) return;
  heroMap.innerHTML = `<canvas id="heroCanvas" width="560" height="420" style="width:100%;height:100%"></canvas>`;
  const canvas = document.getElementById('heroCanvas');
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#071a10';
  ctx.fillRect(0, 0, 560, 420);

  // Grid
  ctx.strokeStyle = 'rgba(0,229,160,0.06)';
  ctx.lineWidth = 1;
  for (let x = 0; x < 560; x += 40) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, 420); ctx.stroke();
  }
  for (let y = 0; y < 420; y += 40) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(560, y); ctx.stroke();
  }

  // Routes on hero
  ROUTES.forEach(route => {
    ctx.beginPath();
    ctx.strokeStyle = route.color + '88';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 4]);
    route.coords.forEach((pt, i) => {
      if (i === 0) ctx.moveTo(pt.x, pt.y);
      else ctx.lineTo(pt.x, pt.y);
    });
    ctx.stroke();
    ctx.setLineDash([]);

    route.coords.forEach(pt => {
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = route.color;
      ctx.fill();
    });
  });

  // Animate a bus dot on hero
  let heroT = 0;
  setInterval(() => {
    const r = ROUTES[0];
    const segIdx = Math.floor(heroT) % (r.coords.length - 1);
    const t = heroT - Math.floor(heroT);
    const from = r.coords[segIdx];
    const to = r.coords[segIdx + 1];
    if (!from || !to) return;
    const bx = from.x + (to.x - from.x) * t;
    const by = from.y + (to.y - from.y) * t;

    // Redraw
    ctx.fillStyle = '#071a10';
    ctx.fillRect(0, 0, 560, 420);
    // Grid
    ctx.strokeStyle = 'rgba(0,229,160,0.06)';
    for (let x = 0; x < 560; x += 40) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, 420); ctx.stroke();
    }
    for (let y = 0; y < 420; y += 40) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(560, y); ctx.stroke();
    }
    ROUTES.forEach(route => {
      ctx.beginPath(); ctx.strokeStyle = route.color + '88'; ctx.lineWidth = 2;
      ctx.setLineDash([5,4]);
      route.coords.forEach((pt, i) => {
        if (i === 0) ctx.moveTo(pt.x, pt.y); else ctx.lineTo(pt.x, pt.y);
      });
      ctx.stroke(); ctx.setLineDash([]);
      route.coords.forEach(pt => {
        ctx.beginPath(); ctx.arc(pt.x, pt.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = route.color; ctx.fill();
      });
    });

    // Bus dot
    ctx.beginPath();
    ctx.arc(bx, by, 10, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0,229,160,0.2)'; ctx.fill();
    ctx.beginPath();
    ctx.arc(bx, by, 6, 0, Math.PI * 2);
    ctx.fillStyle = '#00E5A0'; ctx.fill();

    heroT += 0.04;
    if (heroT > r.coords.length - 1) heroT = 0;
  }, 50);
}
