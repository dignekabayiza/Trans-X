# 🚌 Trans-X — Smart Public Transit System

> Real-time bus coordination, predictive ticketing, and live tracking for Kigali's public transit network.

![Trans-X Preview](https://img.shields.io/badge/status-prototype-00E5A0?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)
![HTML](https://img.shields.io/badge/stack-HTML%20%7C%20CSS%20%7C%20JS-orange?style=flat-square)

---

## ✨ Features

| Feature | Description |
|--------|-------------|
| 🗺️ **Live Map Tracker** | Animated canvas map showing all buses moving in real time |
| 🎫 **Smart Ticketing** | Route selection, fare calculation, passenger count, booking confirmation |
| 🤖 **AI Predictions** | Arrival time forecasting based on load, time-of-day, and traffic |
| 📊 **Hourly Load Chart** | Custom-built canvas chart showing passenger volume across 24h |
| 🚌 **Bus Cards** | Live status cards — Moving, Stopping, Delayed |
| 📍 **6 Routes** | Full Kigali route coverage with stops, fares, frequencies |

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/YOUR_USERNAME/trans-x.git
cd trans-x
```

### 2. Open in browser
No build step required. Just open `index.html`:
```bash
# macOS / Linux
open index.html

# Windows
start index.html

# Or use Live Server in VS Code
```

### 3. Deploy to GitHub Pages
```bash
# Push to GitHub, then enable Pages from Settings → Pages → Deploy from branch (main / root)
```

---

## 📁 Project Structure

```
trans-x/
├── index.html                  # Main entry point
├── public/
│   └── favicon.svg
├── src/
│   ├── styles/
│   │   └── main.css            # Full stylesheet (dark theme + neon green)
│   ├── data/
│   │   └── routes.js           # Routes, buses, stops data
│   ├── components/
│   │   ├── map.js              # Canvas map renderer with live animation
│   │   ├── buses.js            # Bus cards + route cards
│   │   ├── ticket.js           # Ticket booking + fare calculation
│   │   └── predict.js          # AI predictions + load chart
│   └── utils/
│       ├── helpers.js          # Shared utilities (toast, modal, QR)
│       └── app.js              # Bootstrap + initialization
└── README.md
```

---

## 🗺️ Routes Covered

| Route | Name | Frequency | Base Fare |
|-------|------|-----------|-----------|
| TX-01 | Nyabugogo – KBC | 8 min | RWF 250 |
| TX-02 | Remera – Nyabugogo | 12 min | RWF 200 |
| TX-03 | Kimironko – Kicukiro | 15 min | RWF 300 |
| TX-04 | Gisozi – Downtown | 10 min | RWF 200 |
| TX-05 | Gahanga – Nyabugogo | 20 min | RWF 350 |
| TX-06 | Kanombe – Downtown | 18 min | RWF 300 |

---

## 🧠 Prediction Model (Prototype)

The prediction engine estimates arrival time based on:
- **Base route duration** (fixed per route)
- **Hourly load factor** — rush hours increase travel time
- **Number of active buses** — more buses = shorter wait
- **Traffic multiplier** — load > 70% applies a 1.4× delay factor

> This prototype simulates the logic. Production would connect to GPS APIs and real traffic feeds.

---

## 💳 Ticketing Flow

1. Select **From** and **To** stops
2. Choose **Date** and **Passenger count**
3. Click **Calculate & Book** → fare is computed by stop distance
4. Confirm payment via **MTN Mobile Money** or **Airtel Money**
5. Receive **QR ticket** (simulated in prototype)

---

## 🛠️ Tech Stack

- **HTML5** — semantic structure
- **CSS3** — custom properties, animations, responsive grid
- **Vanilla JavaScript** — no frameworks, no build tools
- **Canvas API** — map rendering + chart drawing
- **Google Fonts** — Syne (display) + Space Mono (mono)

---

## 🔮 Roadmap

- [ ] Backend API (Node.js / Express)
- [ ] Real GPS integration (bus hardware)
- [ ] Mobile app (React Native)
- [ ] Payment gateway integration
- [ ] Admin dashboard (fleet management)
- [ ] SMS notification system
- [ ] Machine learning model (TensorFlow.js)

---

## 👤 Author

Built by **Digne** — Computer Engineering student, UX Researcher on Trans-X.

---

## 📄 License

MIT — Free to use, modify, and distribute.
