// =============================================
// TRANS-X — KIGALI OPERATORS DATA
// Source: RURA 2024 · City of Kigali
// 14 Companies + 4 Individuals = 18 Operators
// =============================================

const KIGALI_OPERATORS = [
  {
    name: 'Kigali Bus Services (KBS)',
    type: 'company',
    corridors: ['A', 'B', 'G'],
    buses: 132,
    notes: 'First to introduce large buses in Kigali. Zones 1 & trunk routes.',
  },
  {
    name: 'RFTC / Jali Transport Ltd',
    type: 'coop',
    corridors: ['B', 'C', 'D', 'E', 'F', 'G'],
    buses: 200,
    notes: 'Rwanda Federation of Transport Cooperatives. Largest operator.',
  },
  {
    name: 'Royal Express Ltd',
    type: 'company',
    corridors: ['E'],
    buses: 103,
    notes: 'Zone 2 operator. Orange & white buses. Kicukiro–Southeast.',
  },
  {
    name: 'Volcano Express Ltd',
    type: 'company',
    corridors: ['A', 'D', 'E', 'G'],
    buses: 62,
    notes: 'Urban + upcountry + international routes. Est. 2000s.',
  },
  {
    name: 'RITCO Ltd',
    type: 'company',
    corridors: ['A', 'B', 'G'],
    buses: 45,
    notes: 'Rwanda Inter-Linked Transport Company. Growing urban presence.',
  },
  {
    name: 'Shalom Transportation Ltd',
    type: 'company',
    corridors: ['F'],
    buses: 30,
    notes: 'Corridor F specialist. Batsinda–Kimironko–Zindiro routes.',
  },
  {
    name: 'Four G Transport Company',
    type: 'company',
    corridors: ['B'],
    buses: 22,
    notes: 'Corridor B Nyabugogo–Kicukiro operations.',
  },
  {
    name: 'Ebenezer Transport',
    type: 'company',
    corridors: ['E'],
    buses: 18,
    notes: 'Corridor E Gasabo North. Kinyinya–Downtown operations.',
  },
  {
    name: 'Iwacu Batty Ltd',
    type: 'company',
    corridors: ['F'],
    buses: 16,
    notes: 'Corridor F operator. Gasabo district routes.',
  },
  {
    name: 'Remera Cooperative',
    type: 'coop',
    corridors: ['B', 'G'],
    buses: 24,
    notes: 'Remera Park based cooperative. Intra and inter-zonal.',
  },
  {
    name: 'Nyabugogo Cooperative',
    type: 'coop',
    corridors: ['A'],
    buses: 28,
    notes: 'Based at Nyabugogo Terminal. Corridor A operations.',
  },
  {
    name: 'Centre Centre Cooperative',
    type: 'coop',
    corridors: ['E'],
    buses: 20,
    notes: 'Gasabo Corridor E. Kinyinya and Kimironko area.',
  },
  {
    name: 'City Centre Cooperative',
    type: 'coop',
    corridors: ['F'],
    buses: 18,
    notes: 'Corridor F. Batsinda–Downtown routes.',
  },
  {
    name: 'Mberimfura Donatien',
    type: 'individual',
    corridors: ['F'],
    buses: 8,
    notes: 'Individual licensed operator. Corridor F.',
  },
  {
    name: 'Nsengiyumva Jean Paul',
    type: 'individual',
    corridors: ['B'],
    buses: 6,
    notes: 'Individual licensed operator. Corridor B.',
  },
  {
    name: 'Murinda Raphael',
    type: 'individual',
    corridors: ['G'],
    buses: 5,
    notes: 'Individual licensed operator. Corridor G.',
  },
  {
    name: 'Jali Transport Ltd',
    type: 'company',
    corridors: ['C', 'D', 'E', 'F'],
    buses: 40,
    notes: 'Multi-corridor operator. Covers Gasabo & Nyarugenge.',
  },
  {
    name: 'Busanza Special Transport',
    type: 'company',
    corridors: ['A'],
    buses: 12,
    notes: 'Serves new Busanza–Remera route and SEZ area.',
  },
];

function renderOperators() {
  const grid = document.getElementById('operatorsGrid');
  if (!grid) return;
  grid.innerHTML = KIGALI_OPERATORS.map(op => `
    <div class="operator-card">
      <div class="op-header">
        <div class="op-name">${op.name}</div>
        <div class="op-type ${op.type}">${op.type === 'coop' ? 'Cooperative' : op.type === 'company' ? 'Company' : 'Individual'}</div>
      </div>
      <div class="op-corridors">
        Corridors: ${op.corridors.map(c => `<span>${c}</span>`).join('')}
      </div>
      <div class="op-buses">🚌 ~${op.buses} buses &nbsp;·&nbsp; ${op.notes}</div>
    </div>
  `).join('');
}
