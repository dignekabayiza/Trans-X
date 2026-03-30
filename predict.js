// =============================================
// TRANS-X — AI PREDICTION ENGINE (Simulated)
// =============================================

const ROUTE_DATA = {
  'Nyabugogo Terminal-Downtown / CBD':          { base: 12, fare: 250, op: 'KBS / RITCO', busy: true },
  'Downtown / CBD-Nyabugogo Terminal':          { base: 14, fare: 250, op: 'KBS / RITCO', busy: true },
  'Remera Bus Park-Downtown / CBD':             { base: 18, fare: 250, op: 'KBS / Volcano', busy: false },
  'Remera Bus Park-Kimironko':                  { base: 10, fare: 200, op: 'Jali Transport', busy: false },
  'Kimironko-Downtown / CBD':                   { base: 22, fare: 300, op: 'Volcano / Royal Express', busy: true },
  'Kacyiru-Downtown / CBD':                     { base: 15, fare: 250, op: 'Ebenezer / RITCO', busy: false },
  'Kabuga-Nyabugogo Terminal':                  { base: 35, fare: 400, op: 'KBS / Nyabugogo Coop', busy: false },
  'Nyamirambo-Downtown / CBD':                  { base: 20, fare: 300, op: 'RFTC / KBS', busy: false },
  'Kinyinya-Downtown / CBD':                    { base: 28, fare: 350, op: 'Volcano Express', busy: false },
  'Batsinda-Kimironko':                         { base: 16, fare: 250, op: 'Shalom / Jali', busy: false },
};

const TIME_MULTIPLIERS = {
  'Now': 1.0,
  'In 30 minutes': 0.9,
  'In 1 hour': 0.85,
  'Peak hour (7–9 AM)': 1.8,
  'Peak hour (5–7 PM)': 1.9,
};

function runPrediction() {
  const from = document.getElementById('fromStop').value;
  const to = document.getElementById('toStop').value;
  const time = document.getElementById('travelTime').value;
  const result = document.getElementById('predictResult');

  if (!from || !to) {
    result.innerHTML = `<div class="predict-placeholder"><div class="predict-icon">⚠️</div><p>Please select both departure and destination stops.</p></div>`;
    return;
  }
  if (from === to) {
    result.innerHTML = `<div class="predict-placeholder"><div class="predict-icon">🤔</div><p>Departure and destination are the same. Please select different stops.</p></div>`;
    return;
  }

  const key = `${from}-${to}`;
  const rkey = `${to}-${from}`;
  const data = ROUTE_DATA[key] || ROUTE_DATA[rkey] || { base: Math.floor(Math.random()*20)+10, fare: 300, op: 'Trans-X Network', busy: false };
  const mult = TIME_MULTIPLIERS[time] || 1.0;
  const arrivalMin = Math.round(data.base * mult);
  const variance = Math.floor(Math.random() * 4) + 1;
  const capacity = Math.round(60 + (mult - 1) * 30 + Math.random() * 20);
  const capacityDisplay = Math.min(capacity, 98);
  const nextBus = Math.floor(Math.random() * 8) + 3;
  const isPeak = mult > 1.4;
  const capacityColor = capacityDisplay > 85 ? '#ff4757' : capacityDisplay > 65 ? '#ffd32a' : '#00e87a';

  const advice = isPeak
    ? `⚠️ Peak hour detected. Demand is ${Math.round((mult-1)*100)}% higher than normal on this route. Consider departing <strong>${arrivalMin > 20 ? '20 minutes earlier' : 'immediately'}</strong> or waiting until after ${time.includes('7–9') ? '9:30 AM' : '7:30 PM'} for a less crowded ride. Operator: <strong>${data.op}</strong>.`
    : `✅ Good conditions on this route right now. Next bus arrives in approximately <strong>${nextBus} minutes</strong>. Expect a comfortable ride with ~${capacityDisplay}% capacity. Operator: <strong>${data.op}</strong>.`;

  result.innerHTML = `
    <div class="predict-output">
      <div class="pred-route">🚌 ${from} → ${to}</div>
      <div class="pred-grid">
        <div class="pred-item">
          <span class="pred-val">${arrivalMin}<small style="font-size:1rem"> min</small></span>
          <div class="pred-key">Estimated Arrival</div>
        </div>
        <div class="pred-item">
          <span class="pred-val" style="color:${capacityColor}">${capacityDisplay}%</span>
          <div class="pred-key">Bus Capacity</div>
        </div>
        <div class="pred-item">
          <span class="pred-val">${nextBus}<small style="font-size:1rem"> min</small></span>
          <div class="pred-key">Next Departure</div>
        </div>
        <div class="pred-item">
          <span class="pred-val">±${variance}<small style="font-size:1rem"> min</small></span>
          <div class="pred-key">AI Variance</div>
        </div>
      </div>
      <div class="pred-advice">${advice}</div>
    </div>
  `;
}
