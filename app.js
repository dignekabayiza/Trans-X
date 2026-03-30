// =============================================
// TRANS-X — MAIN APP CONTROLLER
// =============================================

function showSection(id) {
  // Hide all
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.bnav').forEach(b => b.classList.remove('active'));

  // Show target
  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  const btn = document.getElementById(`bnav-${id}`);
  if (btn) btn.classList.add('active');

  // Nav links
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.style.color = a.getAttribute('href') === `#${id}` ? 'var(--accent)' : '';
  });
}

// Counter animation
function animateCounters() {
  document.querySelectorAll('.stat-num[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target);
    let current = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = Math.round(current).toLocaleString();
      if (current >= target) clearInterval(timer);
    }, 20);
  });
}

// Live KPI updates
function startLiveUpdates() {
  setInterval(() => {
    const base = parseInt(document.getElementById('busCount')?.textContent?.replace(/,/g,'') || '487');
    const delta = Math.floor(Math.random() * 6) - 2;
    if (document.getElementById('busCount')) {
      document.getElementById('busCount').textContent = (base + delta).toLocaleString();
    }

    const pbase = parseInt(document.getElementById('passengerCount')?.textContent?.replace(/,/g,'') || '24310');
    const pdelta = Math.floor(Math.random() * 100) + 20;
    if (document.getElementById('passengerCount')) {
      document.getElementById('passengerCount').textContent = (pbase + pdelta).toLocaleString();
    }

    const wait = (8 + (Math.random() * 2 - 1)).toFixed(1);
    if (document.getElementById('waitTime')) {
      document.getElementById('waitTime').textContent = `${wait} min`;
    }
  }, 3000);
}

// Nav scroll effect
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if (nav) {
    nav.style.background = window.scrollY > 60
      ? 'rgba(8,12,16,0.98)'
      : 'rgba(8,12,16,0.92)';
  }
});

// Init
document.addEventListener('DOMContentLoaded', () => {
  // Initialize all modules
  renderCorridors();
  renderCorridorList();
  renderRouteBars();
  renderDemandChart();
  renderAlerts();
  renderOperators();
  initMap();

  // Animate counters
  setTimeout(animateCounters, 400);

  // Start live data
  startLiveUpdates();

  // Show dashboard by default (it's already active in HTML)
  document.getElementById('bnav-dashboard').classList.add('active');
});
