/* ===========================
   TRANS-X — Main Stylesheet
   Dark industrial + neon green
=========================== */

:root {
  --bg: #030f09;
  --bg2: #071a10;
  --surface: #0d2418;
  --surface2: #122d1d;
  --accent: #00E5A0;
  --accent2: #00ff99;
  --accent-dim: rgba(0, 229, 160, 0.15);
  --text: #e8f5ee;
  --text-muted: #7aad8e;
  --danger: #ff4d6a;
  --warning: #ffd166;
  --border: rgba(0, 229, 160, 0.2);
  --font-display: 'Syne', sans-serif;
  --font-mono: 'Space Mono', monospace;
  --radius: 12px;
  --radius-lg: 20px;
  --shadow: 0 8px 32px rgba(0,0,0,0.5);
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-mono);
  font-size: 15px;
  line-height: 1.6;
  overflow-x: hidden;
}

/* ---- LOADER ---- */
.loader {
  position: fixed; inset: 0;
  background: var(--bg);
  display: flex; align-items: center; justify-content: center;
  z-index: 9999;
  transition: opacity 0.6s ease, visibility 0.6s ease;
}
.loader.hide { opacity: 0; visibility: hidden; }
.loader-inner {
  display: flex; flex-direction: column; align-items: center; gap: 16px;
  animation: pulse 1.2s ease infinite;
}
.loader-inner svg rect.bus-body { animation: busRock 0.8s ease infinite alternate; }
.loader-text {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 800;
  letter-spacing: 6px;
  color: var(--accent);
}
@keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.6; } }
@keyframes busRock { from { transform: translateX(-2px); } to { transform: translateX(2px); } }

/* ---- NAV ---- */
.nav {
  position: fixed; top: 0; left: 0; right: 0;
  z-index: 100;
  display: flex; align-items: center; gap: 32px;
  padding: 16px 48px;
  background: rgba(3, 15, 9, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
  transition: background 0.3s;
}
.nav-logo {
  display: flex; align-items: center; gap: 10px;
  font-family: var(--font-display); font-weight: 800; font-size: 18px;
  color: var(--accent); letter-spacing: 2px; text-decoration: none;
  margin-right: auto;
}
.nav-links {
  list-style: none; display: flex; gap: 28px;
}
.nav-links a {
  color: var(--text-muted); text-decoration: none;
  font-size: 13px; letter-spacing: 1px;
  transition: color 0.2s;
}
.nav-links a:hover { color: var(--accent); }
.nav-cta {
  background: var(--accent); color: var(--bg);
  border: none; border-radius: 8px;
  padding: 10px 22px;
  font-family: var(--font-display); font-weight: 700; font-size: 13px;
  cursor: pointer; transition: background 0.2s, transform 0.1s;
}
.nav-cta:hover { background: var(--accent2); transform: translateY(-1px); }
.nav-burger {
  display: none; background: none; border: none;
  color: var(--text); font-size: 22px; cursor: pointer;
}

.mobile-menu {
  display: none; position: fixed; top: 70px; left: 0; right: 0;
  background: var(--surface); z-index: 99;
  padding: 16px 24px; flex-direction: column; gap: 12px;
  border-bottom: 1px solid var(--border);
}
.mobile-menu.open { display: flex; }
.mobile-menu a {
  color: var(--text-muted); text-decoration: none;
  font-size: 16px; padding: 8px 0;
  border-bottom: 1px solid var(--border);
}

/* ---- HERO ---- */
.hero {
  min-height: 100vh;
  display: grid; grid-template-columns: 1fr 1fr;
  align-items: center; gap: 40px;
  padding: 120px 48px 80px;
  position: relative; overflow: hidden;
}
.hero-bg { position: absolute; inset: 0; z-index: 0; }
.grid-overlay {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(var(--border) 1px, transparent 1px),
    linear-gradient(90deg, var(--border) 1px, transparent 1px);
  background-size: 60px 60px;
  opacity: 0.5;
}
.moving-line {
  position: absolute; height: 2px;
  background: linear-gradient(90deg, transparent, var(--accent), transparent);
  animation: scanLine 4s linear infinite;
}
.l1 { width: 40%; top: 30%; animation-delay: 0s; }
.l2 { width: 60%; top: 55%; animation-delay: 1.5s; }
.l3 { width: 30%; top: 75%; animation-delay: 3s; }
@keyframes scanLine { from { left: -60%; } to { left: 120%; } }

.hero-content { position: relative; z-index: 1; }
.hero-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--accent-dim); border: 1px solid var(--border);
  color: var(--accent); padding: 6px 16px; border-radius: 40px;
  font-size: 12px; letter-spacing: 1px; margin-bottom: 24px;
  animation: fadeUp 0.8s ease 0.3s both;
}
.hero-title {
  font-family: var(--font-display); font-size: clamp(52px, 7vw, 88px);
  font-weight: 800; line-height: 1.0; margin-bottom: 20px;
  animation: fadeUp 0.8s ease 0.5s both;
}
.hero-title .accent { color: var(--accent); }
.hero-sub {
  color: var(--text-muted); max-width: 480px; font-size: 15px;
  margin-bottom: 36px;
  animation: fadeUp 0.8s ease 0.7s both;
}
.hero-actions {
  display: flex; gap: 16px; margin-bottom: 48px;
  animation: fadeUp 0.8s ease 0.9s both;
}
.hero-stats {
  display: flex; gap: 40px;
  animation: fadeUp 0.8s ease 1.1s both;
}
.stat { display: flex; flex-direction: column; }
.stat span {
  font-family: var(--font-display); font-size: 32px; font-weight: 800;
  color: var(--accent);
}
.stat label { font-size: 11px; color: var(--text-muted); letter-spacing: 1px; }

.hero-map-preview {
  position: relative; z-index: 1;
  animation: fadeIn 1.2s ease 0.8s both;
}
.map-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  height: 420px; overflow: hidden;
  position: relative;
}

/* ---- BUTTONS ---- */
.btn-primary {
  background: var(--accent); color: var(--bg);
  border: none; border-radius: 10px;
  padding: 14px 28px;
  font-family: var(--font-display); font-weight: 700; font-size: 14px;
  cursor: pointer; transition: all 0.2s;
  letter-spacing: 0.5px;
}
.btn-primary:hover { background: var(--accent2); transform: translateY(-2px); box-shadow: 0 6px 24px rgba(0,229,160,0.3); }
.btn-primary.full { width: 100%; }
.btn-ghost {
  background: transparent; color: var(--accent);
  border: 1px solid var(--border); border-radius: 10px;
  padding: 14px 28px;
  font-family: var(--font-display); font-weight: 700; font-size: 14px;
  cursor: pointer; transition: all 0.2s;
}
.btn-ghost:hover { background: var(--accent-dim); }

/* ---- SECTIONS ---- */
.section { padding: 100px 0; }
.alt-bg { background: var(--bg2); }
.container { max-width: 1200px; margin: 0 auto; padding: 0 48px; }
.section-header { text-align: center; margin-bottom: 56px; }
.section-header h2 {
  font-family: var(--font-display); font-size: clamp(32px, 5vw, 52px);
  font-weight: 800; margin: 12px 0 8px;
}
.section-header p { color: var(--text-muted); max-width: 480px; margin: 0 auto; }
.tag {
  display: inline-block; background: var(--accent-dim);
  color: var(--accent); padding: 4px 14px; border-radius: 40px;
  font-size: 11px; letter-spacing: 1.5px;
  border: 1px solid var(--border);
}

/* ---- TRACKER ---- */
.tracker-grid {
  display: grid; grid-template-columns: 1fr 360px; gap: 24px;
}
.map-panel {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg); overflow: hidden;
  position: relative;
}
#mapCanvas { width: 100%; height: auto; display: block; }
.map-legend {
  position: absolute; bottom: 16px; left: 16px;
  display: flex; gap: 16px;
  background: rgba(3,15,9,0.8); border: 1px solid var(--border);
  padding: 8px 14px; border-radius: 8px;
}
.map-legend span { display: flex; align-items: center; gap: 6px; font-size: 12px; }
.dot { width: 8px; height: 8px; border-radius: 50%; display: inline-block; }
.dot.green { background: var(--accent); }
.dot.yellow { background: var(--warning); }
.dot.red { background: var(--danger); }

.bus-list {
  display: flex; flex-direction: column; gap: 12px;
  max-height: 460px; overflow-y: auto; padding-right: 4px;
}
.bus-list::-webkit-scrollbar { width: 4px; }
.bus-list::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }

.bus-card {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 16px;
  cursor: pointer; transition: all 0.2s;
  position: relative; overflow: hidden;
}
.bus-card:hover { border-color: var(--accent); background: var(--surface2); }
.bus-card.active { border-color: var(--accent); }
.bus-card::before {
  content: ''; position: absolute; left: 0; top: 0; bottom: 0;
  width: 3px; border-radius: 2px;
}
.bus-card.status-moving::before { background: var(--accent); }
.bus-card.status-stopping::before { background: var(--warning); }
.bus-card.status-delayed::before { background: var(--danger); }
.bus-card-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px; }
.bus-id { font-family: var(--font-display); font-weight: 700; font-size: 15px; }
.bus-status-badge {
  font-size: 10px; padding: 2px 8px; border-radius: 4px; letter-spacing: 1px;
}
.status-moving .bus-status-badge { background: rgba(0,229,160,0.15); color: var(--accent); }
.status-stopping .bus-status-badge { background: rgba(255,209,102,0.15); color: var(--warning); }
.status-delayed .bus-status-badge { background: rgba(255,77,106,0.15); color: var(--danger); }
.bus-route { color: var(--text-muted); font-size: 12px; }
.bus-info { display: flex; gap: 16px; margin-top: 8px; font-size: 12px; color: var(--text-muted); }
.bus-eta { color: var(--accent); font-weight: 700; }

/* ---- TICKET ---- */
.ticket-form-wrap {
  display: grid; grid-template-columns: 1fr 1fr; gap: 32px; align-items: start;
}
.ticket-form {
  background: var(--surface);
  border: 1px solid var(--border); border-radius: var(--radius-lg);
  padding: 32px; display: flex; flex-direction: column; gap: 20px;
}
.form-row { display: flex; gap: 16px; align-items: flex-end; }
.form-group { flex: 1; display: flex; flex-direction: column; gap: 8px; }
.form-group label { font-size: 11px; color: var(--text-muted); letter-spacing: 1px; }
.form-group select, .form-group input {
  background: var(--bg); border: 1px solid var(--border);
  border-radius: 8px; color: var(--text); padding: 12px 14px;
  font-family: var(--font-mono); font-size: 14px;
  outline: none; transition: border 0.2s;
  -webkit-appearance: none;
}
.form-group select:focus, .form-group input:focus { border-color: var(--accent); }
.swap-btn {
  background: var(--accent-dim); color: var(--accent);
  border: 1px solid var(--border); border-radius: 8px;
  width: 40px; height: 48px; display: flex; align-items: center; justify-content: center;
  cursor: pointer; font-size: 18px; flex-shrink: 0;
  transition: background 0.2s;
}
.swap-btn:hover { background: rgba(0,229,160,0.25); }
.counter {
  display: flex; align-items: center; gap: 0;
  border: 1px solid var(--border); border-radius: 8px; overflow: hidden;
}
.counter button {
  background: var(--bg); border: none; color: var(--accent);
  width: 40px; height: 48px; font-size: 20px; cursor: pointer;
  transition: background 0.2s;
}
.counter button:hover { background: var(--surface2); }
.counter span {
  flex: 1; text-align: center; font-size: 16px; font-weight: 700;
}
.fare-display {
  background: var(--accent-dim); border: 1px solid var(--border);
  border-radius: 10px; padding: 16px 20px;
  display: flex; justify-content: space-between; align-items: center;
}
.fare-display strong {
  font-family: var(--font-display); font-size: 22px; font-weight: 800; color: var(--accent);
}

/* Ticket stub */
.ticket-preview { position: sticky; top: 90px; }
.ticket-stub {
  background: var(--surface);
  border: 1px solid var(--border); border-radius: var(--radius-lg);
  padding: 28px; overflow: hidden;
  position: relative;
}
.ticket-stub::after {
  content: ''; position: absolute;
  top: 50%; left: -12px; right: -12px;
  height: 1px;
  border-top: 2px dashed var(--border);
}
.ticket-top {
  display: flex; align-items: center; gap: 10px;
  font-family: var(--font-display); font-weight: 800;
  color: var(--accent); letter-spacing: 2px; font-size: 16px;
  margin-bottom: 20px;
}
.ticket-route {
  font-family: var(--font-display); font-size: 20px; font-weight: 700;
  margin-bottom: 20px; min-height: 28px;
}
.ticket-details {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;
  margin-bottom: 32px;
}
.ticket-details div { display: flex; flex-direction: column; gap: 4px; }
.ticket-details label { font-size: 10px; color: var(--text-muted); letter-spacing: 1px; }
.ticket-details span { font-weight: 700; }
.ticket-barcode {
  display: flex; align-items: flex-end; gap: 3px;
  height: 40px; margin-top: 32px; margin-bottom: 16px;
}
.barcode-line {
  flex: 1; background: var(--accent); border-radius: 1px;
  opacity: 0.7;
}
.ticket-qr {
  display: flex; justify-content: center; margin-top: 16px;
}
.qr-placeholder {
  width: 80px; height: 80px;
  background: var(--bg);
  border: 2px dashed var(--border);
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  font-size: 10px; color: var(--text-muted); letter-spacing: 2px;
}

/* ---- PREDICT ---- */
.predict-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 32px;
}
.predict-card {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius-lg); padding: 32px;
}
.predict-form {
  display: flex; flex-direction: column; gap: 16px; margin-bottom: 24px;
}
.predict-form label { font-size: 11px; color: var(--text-muted); letter-spacing: 1px; }
.predict-form select, .predict-form input {
  background: var(--bg); border: 1px solid var(--border);
  border-radius: 8px; color: var(--text);
  padding: 12px 14px; font-family: var(--font-mono); font-size: 14px;
  outline: none;
}
.predict-result {
  background: var(--bg); border: 1px solid var(--border);
  border-radius: 10px; padding: 20px;
  min-height: 80px;
}
.predict-result .arrival-time {
  font-family: var(--font-display); font-size: 40px; font-weight: 800; color: var(--accent);
}
.predict-result .arrival-label { font-size: 12px; color: var(--text-muted); }
.predict-result .confidence {
  margin-top: 8px; font-size: 13px; color: var(--warning);
}
.predict-chart-wrap {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius-lg); padding: 32px;
}
.predict-chart-wrap h3 {
  font-family: var(--font-display); font-weight: 700; font-size: 18px;
  margin-bottom: 20px;
}
#loadChart { width: 100% !important; }

/* ---- ROUTES ---- */
.routes-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px;
}
.route-card {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius-lg); padding: 24px;
  transition: all 0.2s; cursor: pointer;
}
.route-card:hover { border-color: var(--accent); transform: translateY(-3px); box-shadow: 0 12px 32px rgba(0,0,0,0.4); }
.route-number {
  font-family: var(--font-display); font-size: 28px; font-weight: 800;
  color: var(--accent); margin-bottom: 8px;
}
.route-name { font-weight: 700; margin-bottom: 4px; }
.route-stops { font-size: 12px; color: var(--text-muted); margin-bottom: 16px; }
.route-meta {
  display: flex; gap: 16px; font-size: 12px; color: var(--text-muted);
  border-top: 1px solid var(--border); padding-top: 12px;
}
.route-meta span { display: flex; align-items: center; gap: 4px; }

/* ---- FOOTER ---- */
.footer {
  background: var(--bg); border-top: 1px solid var(--border);
  padding: 60px 48px;
}
.footer-inner {
  max-width: 1200px; margin: 0 auto; text-align: center;
  display: flex; flex-direction: column; align-items: center; gap: 16px;
}
.footer-brand {
  display: flex; align-items: center; gap: 10px;
  font-family: var(--font-display); font-weight: 800; font-size: 18px;
  color: var(--accent); letter-spacing: 2px;
}
.footer p { color: var(--text-muted); font-size: 13px; }
.footer-links { display: flex; gap: 24px; }
.footer-links a { color: var(--text-muted); text-decoration: none; font-size: 13px; }
.footer-links a:hover { color: var(--accent); }
.footer-copy { font-size: 11px; color: var(--surface2); }

/* ---- MODAL ---- */
.modal-overlay {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.7); backdrop-filter: blur(4px);
  z-index: 200; display: none;
  align-items: center; justify-content: center;
}
.modal-overlay.open { display: flex; }
.modal {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius-lg); padding: 36px;
  max-width: 480px; width: 90%; position: relative;
}
.modal h2 {
  font-family: var(--font-display); font-size: 24px; font-weight: 800;
  margin-bottom: 20px;
}
.modal-close {
  position: absolute; top: 16px; right: 16px;
  background: none; border: none; color: var(--text-muted);
  font-size: 18px; cursor: pointer;
}
.modal-body { margin-bottom: 24px; color: var(--text-muted); line-height: 1.7; }
.modal-body strong { color: var(--text); }

/* ---- TOAST ---- */
.toast {
  position: fixed; bottom: 32px; right: 32px;
  background: var(--accent); color: var(--bg);
  padding: 14px 24px; border-radius: 10px;
  font-family: var(--font-display); font-weight: 700;
  transform: translateY(80px); opacity: 0;
  transition: all 0.3s ease; z-index: 300;
}
.toast.show { transform: translateY(0); opacity: 1; }

/* ---- ANIMATIONS ---- */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity: 0; } to { opacity: 1; }
}

/* ---- RESPONSIVE ---- */
@media (max-width: 1024px) {
  .hero { grid-template-columns: 1fr; padding-top: 100px; }
  .hero-map-preview { display: none; }
  .tracker-grid { grid-template-columns: 1fr; }
  .ticket-form-wrap, .predict-grid { grid-template-columns: 1fr; }
  .ticket-preview { position: static; }
}
@media (max-width: 768px) {
  .nav { padding: 14px 24px; }
  .nav-links, .nav-cta { display: none; }
  .nav-burger { display: block; }
  .hero { padding: 90px 24px 60px; }
  .container { padding: 0 24px; }
  .hero-actions { flex-direction: column; }
  .hero-stats { gap: 24px; flex-wrap: wrap; }
  .footer { padding: 40px 24px; }
  .routes-grid { grid-template-columns: 1fr; }
}
