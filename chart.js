// =============================================
// TRANS-X — DEMAND FORECAST CHART
// =============================================

function renderDemandChart() {
  const el = document.getElementById('demandChart');
  if (!el) return;

  const hours = ['Now', '+1h', '+2h', '+3h', '+4h', '+5h', '+6h'];
  const values = [65, 78, 92, 88, 71, 58, 45]; // Simulated AI forecast
  const colors = values.map(v => v > 85 ? '#ff4757' : v > 70 ? '#ffd32a' : '#00e87a');
  const max = Math.max(...values);

  el.innerHTML = hours.map((h, i) => `
    <div class="bar-wrap">
      <div class="bar-val">${values[i]}%</div>
      <div class="bar" style="height:${(values[i]/max)*160}px;background:${colors[i]}"></div>
      <div class="bar-label">${h}</div>
    </div>
  `).join('');
}

function renderAlerts() {
  const el = document.getElementById('alertList');
  if (!el) return;
  const alerts = [
    { type: 'red', icon: '🔴', msg: 'Nyabugogo–Downtown: Overloaded (94%)', time: '2 min ago' },
    { type: 'orange', icon: '🟠', msg: 'Kimironko: 3 buses delayed 10+ min', time: '8 min ago' },
    { type: 'yellow', icon: '🟡', msg: 'Corridor G: Peak demand rising fast', time: '15 min ago' },
  ];
  el.innerHTML = alerts.map(a => `
    <div class="alert-item ${a.type}">
      <div class="alert-icon">${a.icon}</div>
      <div>
        <div class="alert-msg">${a.msg}</div>
        <div class="alert-time">${a.time}</div>
      </div>
    </div>
  `).join('');
}
