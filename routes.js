// ============================================
// Trans-X — Helper Utilities
// ============================================

function showToast(msg, duration = 3000) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), duration);
}

function formatDate(d) {
  if (!d) return '—';
  const dt = new Date(d);
  return dt.toLocaleDateString('en-RW', { day: 'numeric', month: 'short', year: 'numeric' });
}

function animateCount(el, target, duration = 1500, suffix = '') {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start = Math.min(start + step, target);
    el.textContent = Math.floor(start).toLocaleString() + suffix;
    if (start >= target) clearInterval(timer);
  }, 16);
}

function getRouteById(id) {
  return ROUTES.find(r => r.id === id);
}

function getBusesByRoute(routeId) {
  return BUSES.filter(b => b.route === routeId);
}

function openTicketModal() {
  document.getElementById('ticketModal').classList.add('open');
  const from = document.getElementById('fromStop').value;
  const to = document.getElementById('toStop').value;
  const pax = document.getElementById('passengerCount').textContent;
  const fare = document.getElementById('fareAmount').textContent;
  const date = document.getElementById('rideDate').value;
  const body = document.getElementById('modalBody');
  if (from && to && from !== to) {
    body.innerHTML = `
      <p><strong>Route:</strong> ${from} → ${to}</p>
      <p><strong>Date:</strong> ${formatDate(date) || 'Today'}</p>
      <p><strong>Passengers:</strong> ${pax}</p>
      <p><strong>Total Fare:</strong> ${fare}</p>
      <p style="margin-top:12px; font-size:12px; color:var(--text-muted)">Payment via MTN Mobile Money or Airtel Money. You will receive an SMS confirmation and QR ticket.</p>
    `;
  } else {
    body.innerHTML = `<p>Please select a valid <strong>From</strong> and <strong>To</strong> stop before proceeding.</p>`;
  }
}

function closeTicketModal(e) {
  if (!e || e.target === document.getElementById('ticketModal')) {
    document.getElementById('ticketModal').classList.remove('open');
  }
}

function confirmBooking() {
  const from = document.getElementById('fromStop').value;
  const to = document.getElementById('toStop').value;
  if (!from || !to || from === to) {
    showToast('⚠️ Select a valid route first');
    return;
  }
  closeTicketModal();
  showToast('✅ Booking confirmed! Check your SMS for the QR ticket.');
  document.getElementById('ticketQR').innerHTML = `
    <canvas id="qrCanvas" width="80" height="80"></canvas>
  `;
  drawQR();
}

function drawQR() {
  const canvas = document.getElementById('qrCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#0d2418';
  ctx.fillRect(0, 0, 80, 80);
  ctx.fillStyle = '#00E5A0';
  const size = 4;
  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
      if (Math.random() > 0.5) {
        ctx.fillRect(i * size, j * size, size - 1, size - 1);
      }
    }
  }
  // Corner squares
  [[0,0],[13,0],[0,13]].forEach(([x,y]) => {
    ctx.fillStyle = '#00E5A0';
    ctx.fillRect(x*size, y*size, 7*size, 7*size);
    ctx.fillStyle = '#0d2418';
    ctx.fillRect(x*size+size, y*size+size, 5*size, 5*size);
    ctx.fillStyle = '#00E5A0';
    ctx.fillRect(x*size+2*size, y*size+2*size, 3*size, 3*size);
  });
}

function toggleMobileMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}
