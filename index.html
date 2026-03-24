// ============================================
// Trans-X — Ticket Booking Component
// ============================================

let passengerCount = 1;

function populateStopSelects() {
  const from = document.getElementById('fromStop');
  const to = document.getElementById('toStop');
  const predictRoute = document.getElementById('predictRoute');
  if (!from || !to) return;

  const opts = ALL_STOPS.map(s => `<option value="${s}">${s}</option>`).join('');
  from.innerHTML = `<option value="">Select stop...</option>${opts}`;
  to.innerHTML = `<option value="">Select stop...</option>${opts}`;

  // Set default date to today
  const dateEl = document.getElementById('rideDate');
  if (dateEl) {
    const today = new Date().toISOString().split('T')[0];
    dateEl.value = today;
  }

  // Populate prediction route select
  if (predictRoute) {
    predictRoute.innerHTML = ROUTES.map(r =>
      `<option value="${r.id}">${r.id} — ${r.name}</option>`
    ).join('');
  }

  // Live fare recalculation
  from.addEventListener('change', updateTicketPreview);
  to.addEventListener('change', updateTicketPreview);
}

function changeCount(delta) {
  passengerCount = Math.max(1, Math.min(10, passengerCount + delta));
  document.getElementById('passengerCount').textContent = passengerCount;
  updateTicketPreview();
}

function swapStops() {
  const from = document.getElementById('fromStop');
  const to = document.getElementById('toStop');
  const temp = from.value;
  from.value = to.value;
  to.value = temp;
  updateTicketPreview();
}

function calculateFare() {
  const from = document.getElementById('fromStop').value;
  const to = document.getElementById('toStop').value;

  if (!from || !to) {
    showToast('⚠️ Select both From and To stops');
    return;
  }
  if (from === to) {
    showToast('⚠️ Origin and destination cannot be the same');
    return;
  }

  updateTicketPreview();
  openTicketModal();
}

function getFareForRoute(from, to, pax) {
  // Find route that covers both stops
  const matchRoute = ROUTES.find(r => r.stops.includes(from) && r.stops.includes(to));
  if (!matchRoute) {
    // Cross-route, add flat transfer fee
    return (300 + 100) * pax;
  }
  const fromIdx = matchRoute.stops.indexOf(from);
  const toIdx = matchRoute.stops.indexOf(to);
  const stops = Math.abs(fromIdx - toIdx);
  const fare = matchRoute.fare_base + (stops - 1) * 50;
  return fare * pax;
}

function updateTicketPreview() {
  const from = document.getElementById('fromStop').value;
  const to = document.getElementById('toStop').value;
  const date = document.getElementById('rideDate').value;
  const fareEl = document.getElementById('fareAmount');
  const tRoute = document.getElementById('tRoute');
  const tDate = document.getElementById('tDate');
  const tPass = document.getElementById('tPass');
  const tFare = document.getElementById('tFare');

  if (from && to && from !== to) {
    const fare = getFareForRoute(from, to, passengerCount);
    fareEl.textContent = `RWF ${fare.toLocaleString()}`;
    if (tRoute) tRoute.textContent = `${from} → ${to}`;
    if (tFare) tFare.textContent = `RWF ${fare.toLocaleString()}`;
  } else {
    fareEl.textContent = 'RWF —';
    if (tRoute) tRoute.textContent = 'Select a route';
    if (tFare) tFare.textContent = '—';
  }
  if (tDate) tDate.textContent = date ? formatDate(date) : '—';
  if (tPass) tPass.textContent = passengerCount;
}
