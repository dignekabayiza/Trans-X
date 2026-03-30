// =============================================
// TRANS-X — DIGITAL TICKETING SYSTEM
// =============================================

let qty = 1;
let selectedPay = 'MoMo';

const FARES = {
  'Nyabugogo Terminal-Downtown / CBD': 250,
  'Downtown / CBD-Nyabugogo Terminal': 250,
  'Downtown / CBD-Kabuga': 400,
  'Downtown / CBD-Kicukiro Centre': 300,
  'Downtown / CBD-Kimironko': 300,
  'Downtown / CBD-Nyamirambo': 300,
  'Nyabugogo Terminal-Kabuga': 400,
  'Nyabugogo Terminal-Kimironko': 350,
  'Nyabugogo Terminal-Kicukiro Centre': 300,
  'Remera Bus Park-Downtown / CBD': 250,
  'Remera Bus Park-Kimironko': 200,
};

function changeQty(delta) {
  qty = Math.max(1, Math.min(10, qty + delta));
  document.getElementById('qtyDisplay').textContent = qty;
  updateFare();
}

function selectPay(el, method) {
  document.querySelectorAll('.pay-opt').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  selectedPay = method;
}

function updateFare() {
  const from = document.getElementById('ticketFrom').value;
  const to = document.getElementById('ticketTo').value;
  const key = `${from}-${to}`;
  const rkey = `${to}-${from}`;
  const base = FARES[key] || FARES[rkey] || 300;
  const total = base * qty;
  document.getElementById('fareAmount').textContent = `RWF ${total.toLocaleString()}`;
}

document.addEventListener('change', function(e) {
  if (e.target.id === 'ticketFrom' || e.target.id === 'ticketTo') updateFare();
});

function purchaseTicket() {
  const from = document.getElementById('ticketFrom').value;
  const to = document.getElementById('ticketTo').value;
  const fareEl = document.getElementById('fareAmount');
  const ticketNum = 'TX-' + Date.now().toString().slice(-8);
  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-RW', { hour: '2-digit', minute: '2-digit' });
  const dateStr = now.toLocaleDateString('en-RW', { day: '2-digit', month: 'short', year: 'numeric' });

  const preview = document.getElementById('ticketPreview');
  preview.innerHTML = `
    <div class="ticket-card">
      <div class="ticket-top">
        <div class="ticket-logo">⬡ Trans<span style="color:var(--accent)">-X</span></div>
        <div class="ticket-num">
          <div style="font-family:'Syne',sans-serif;font-weight:800;color:var(--accent)">${ticketNum}</div>
          <div style="font-size:0.72rem;color:var(--text2)">${dateStr} · ${timeStr}</div>
        </div>
      </div>
      <div class="ticket-route">
        <div class="ticket-from-to">
          <div class="ticket-stop">${from}</div>
          <div class="ticket-arrow">→</div>
          <div class="ticket-stop">${to}</div>
        </div>
      </div>
      <div class="ticket-details">
        <div class="t-detail"><span>${qty}</span><small>Passenger${qty > 1 ? 's' : ''}</small></div>
        <div class="t-detail"><span>${fareEl.textContent}</span><small>Total Fare</small></div>
        <div class="t-detail"><span>${selectedPay}</span><small>Payment</small></div>
      </div>
      <div class="ticket-qr">📲</div>
      <div class="ticket-note">Valid for single journey · Tap-and-Go compatible · Ecofleet Network</div>
    </div>
  `;
}
