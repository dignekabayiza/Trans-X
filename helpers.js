// =============================================
// TRANS-X — HELPERS
// =============================================

function formatTime(min) {
  if (min < 60) return `${min} min`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return `${h}h ${m}min`;
}

function formatNumber(n) {
  return n.toLocaleString('en-RW');
}

function getTimeOfDay() {
  const h = new Date().getHours();
  if (h >= 7 && h <= 9) return 'peak-morning';
  if (h >= 17 && h <= 19) return 'peak-evening';
  if (h >= 12 && h <= 14) return 'lunch';
  return 'normal';
}

function capacityColor(pct) {
  if (pct > 85) return '#ff4757';
  if (pct > 65) return '#ffd32a';
  return '#00e87a';
}
