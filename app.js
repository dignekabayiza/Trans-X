// ============================================
// Trans-X — App Bootstrap
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // Hide loader after 2s
  setTimeout(() => {
    document.getElementById('loader').classList.add('hide');
  }, 2000);

  // Animate hero stats
  setTimeout(() => {
    animateCount(document.getElementById('stat-buses'), BUSES.length);
    animateCount(document.getElementById('stat-routes'), ROUTES.length);
    animateCount(document.getElementById('stat-riders'), 24800);
  }, 2200);

  // Init components
  initHeroMap();
  initMap();
  renderBusList();
  renderRoutes();
  populateStopSelects();
  drawLoadChart();

  // Sticky nav shadow
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('nav');
    if (window.scrollY > 60) {
      nav.style.background = 'rgba(3,15,9,0.98)';
    } else {
      nav.style.background = 'rgba(3,15,9,0.85)';
    }
  });

  // Resize chart on window resize
  window.addEventListener('resize', () => {
    drawLoadChart();
  });

  // Live bus update pulse
  setInterval(() => {
    renderBusList();
  }, 5000);

  console.log('%c TRANS-X 🚌 Ready ', 'background:#00E5A0;color:#030f09;font-weight:bold;font-size:14px;padding:4px 8px;border-radius:4px');
});
