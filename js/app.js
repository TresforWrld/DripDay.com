/* ===== DripDay Webapp - Main Application ===== */

// ===== SVG ICON LIBRARY =====
const Icons = {
  bolt: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
  plus: `<svg class="svg-icon" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  shirt: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z"/></svg>`,
  home: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  search: `<svg class="svg-icon" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  user: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  settings: `<svg class="svg-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/></svg>`,
  upload: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,
  camera: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
  image: `<svg class="svg-icon" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`,
  x: `<svg class="svg-icon" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  trash: `<svg class="svg-icon" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>`,
  send: `<svg class="svg-icon" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
  sparkles: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z"/></svg>`,
  sun: `<svg class="svg-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
  cloud: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/></svg>`,
  droplet: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/></svg>`,
  heart: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>`,
  star: `<svg class="svg-icon" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  check: `<svg class="svg-icon" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>`,
  arrowRight: `<svg class="svg-icon" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  arrowLeft: `<svg class="svg-icon" viewBox="0 0 24 24"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,
  refresh: `<svg class="svg-icon" viewBox="0 0 24 24"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/></svg>`,
  mapPin: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  calendar: `<svg class="svg-icon" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  briefcase: `<svg class="svg-icon" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>`,
  music: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`,
  coffee: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`,
  award: `<svg class="svg-icon" viewBox="0 0 24 24"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`,
  eye: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  thermometer: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z"/></svg>`,
  wind: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2"/></svg>`,
  gift: `<svg class="svg-icon" viewBox="0 0 24 24"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/></svg>`,
  chevronRight: `<svg class="svg-icon" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>`,
  menu: `<svg class="svg-icon" viewBox="0 0 24 24"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
  logout: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
  edit: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
  layers: `<svg class="svg-icon" viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
  zap: `<svg class="svg-icon" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  info: `<svg class="svg-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
  checkCircle: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  xCircle: `<svg class="svg-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
  messageCircle: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>`,
};

// ===== DATA STORE =====
const Store = {
  _data: {},

  init() {
    const saved = localStorage.getItem('dripday_data');
    if (saved) {
      try { this._data = JSON.parse(saved); } catch(e) { this._data = {}; }
    }
    if (!this._data.profile) this._data.profile = null;
    if (!this._data.wardrobe) this._data.wardrobe = [];
    if (!this._data.history) this._data.history = [];
  },

  save() {
    localStorage.setItem('dripday_data', JSON.stringify(this._data));
  },

  get profile() { return this._data.profile; },
  set profile(val) { this._data.profile = val; this.save(); },

  get wardrobe() { return this._data.wardrobe; },
  set wardrobe(val) { this._data.wardrobe = val; this.save(); },

  get history() { return this._data.history; },
  set history(val) { this._data.history = val; this.save(); },

  addClothing(item) {
    this._data.wardrobe.push(item);
    this.save();
  },

  removeClothing(id) {
    this._data.wardrobe = this._data.wardrobe.filter(c => c.id !== id);
    this.save();
  },

  getClothingByCategory(cat) {
    if (cat === 'all') return this.wardrobe;
    return this.wardrobe.filter(c => c.category === cat);
  },

  isLoggedIn() {
    return this._data.profile !== null;
  },

  reset() {
    this._data = { profile: null, wardrobe: [], history: [] };
    this.save();
  }
};

// ===== CLOTHING CATEGORIES =====
const Categories = [
  { id: 'tops', label: 'Tops', icon: 'shirt' },
  { id: 'bottoms', label: 'Bottoms', icon: 'layers' },
  { id: 'shoes', label: 'Shoes', icon: 'zap' },
  { id: 'outerwear', label: 'Outerwear', icon: 'cloud' },
  { id: 'accessories', label: 'Accessories', icon: 'award' },
  { id: 'dresses', label: 'Dresses', icon: 'heart' },
];

const Occasions = [
  { id: 'casual', label: 'Casual', icon: 'coffee' },
  { id: 'work', label: 'Work / Office', icon: 'briefcase' },
  { id: 'date', label: 'Date Night', icon: 'heart' },
  { id: 'church', label: 'Church', icon: 'star' },
  { id: 'party', label: 'Party', icon: 'music' },
  { id: 'campus', label: 'Campus', icon: 'award' },
  { id: 'wedding', label: 'Wedding', icon: 'gift' },
  { id: 'interview', label: 'Interview', icon: 'briefcase' },
  { id: 'outdoor', label: 'Outdoor', icon: 'sun' },
  { id: 'gym', label: 'Gym / Workout', icon: 'zap' },
];

const ColorMap = {
  'black': '#1a1a1a',
  'white': '#f5f5f5',
  'red': '#e53e3e',
  'blue': '#3182ce',
  'navy': '#2a4365',
  'green': '#38a169',
  'yellow': '#ecc94b',
  'brown': '#8b6f47',
  'gray': '#718096',
  'pink': '#ed64a6',
  'purple': '#805ad5',
  'orange': '#dd6b20',
  'beige': '#c4a882',
  'khaki': '#b8a960',
  'olive': '#6b8e23',
  'cream': '#f5f0e1',
  'maroon': '#800020',
  'teal': '#319795',
  'coral': '#fc8181',
  'denim': '#4a6fa5',
};

// ===== AI RECOMMENDATION ENGINE =====
const AI = {
  generateRecommendation(occasion, weather, wardrobe) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const outfit = this.buildOutfit(occasion, weather, wardrobe);
        const score = this.calculateDripScore(outfit, occasion);
        const tip = this.generateTip(occasion, weather, outfit);
        resolve({ outfit, score, tip });
      }, 1500 + Math.random() * 1000);
    });
  },

  buildOutfit(occasion, weather, wardrobe) {
    const occasionNeeds = this.getOccasionNeeds(occasion);
    const weatherMods = this.getWeatherModifiers(weather);
    const outfit = {};

    // For each needed category, find the best match
    for (const need of occasionNeeds) {
      const items = wardrobe.filter(c => c.category === need.category);
      if (items.length > 0) {
        // Score each item for this occasion
        const scored = items.map(item => ({
          ...item,
          matchScore: this.scoreItemForOccasion(item, occasion, weather, need)
        })).sort((a, b) => b.matchScore - a.matchScore);

        outfit[need.category] = scored[0];
      }
    }

    return outfit;
  },

  getOccasionNeeds(occasion) {
    const needs = {
      casual: [
        { category: 'tops', importance: 1 },
        { category: 'bottoms', importance: 1 },
        { category: 'shoes', importance: 0.8 }
      ],
      work: [
        { category: 'tops', importance: 1 },
        { category: 'bottoms', importance: 1 },
        { category: 'shoes', importance: 0.9 },
        { category: 'outerwear', importance: 0.6 }
      ],
      date: [
        { category: 'tops', importance: 1 },
        { category: 'bottoms', importance: 1 },
        { category: 'shoes', importance: 1 },
        { category: 'accessories', importance: 0.7 }
      ],
      church: [
        { category: 'tops', importance: 1 },
        { category: 'bottoms', importance: 1 },
        { category: 'shoes', importance: 0.9 },
        { category: 'accessories', importance: 0.5 }
      ],
      party: [
        { category: 'tops', importance: 1 },
        { category: 'bottoms', importance: 1 },
        { category: 'shoes', importance: 1 },
        { category: 'accessories', importance: 0.8 }
      ],
      campus: [
        { category: 'tops', importance: 1 },
        { category: 'bottoms', importance: 1 },
        { category: 'shoes', importance: 0.8 },
        { category: 'outerwear', importance: 0.4 }
      ],
      wedding: [
        { category: 'tops', importance: 1 },
        { category: 'bottoms', importance: 1 },
        { category: 'shoes', importance: 1 },
        { category: 'accessories', importance: 0.9 }
      ],
      interview: [
        { category: 'tops', importance: 1 },
        { category: 'bottoms', importance: 1 },
        { category: 'shoes', importance: 1 },
        { category: 'outerwear', importance: 0.7 }
      ],
      outdoor: [
        { category: 'tops', importance: 1 },
        { category: 'bottoms', importance: 0.9 },
        { category: 'shoes', importance: 1 },
        { category: 'outerwear', importance: 0.8 }
      ],
      gym: [
        { category: 'tops', importance: 1 },
        { category: 'bottoms', importance: 1 },
        { category: 'shoes', importance: 1 }
      ],
      dresses: [
        { category: 'dresses', importance: 1 },
        { category: 'shoes', importance: 1 },
        { category: 'accessories', importance: 0.7 }
      ],
    };
    return needs[occasion] || needs.casual;
  },

  getWeatherModifiers(weather) {
    const mods = {
      hot: { preferLight: true, avoidOuterwear: true },
      warm: { preferLight: true },
      mild: {},
      cool: { preferLayers: true },
      cold: { preferLayers: true, needOuterwear: true },
      rainy: { needOuterwear: true, avoidLightShoes: true },
    };
    return mods[weather] || mods.mild;
  },

  scoreItemForOccasion(item, occasion, weather, need) {
    let score = 50 + Math.random() * 20; // base score with some variance

    // Boost by importance
    score += need.importance * 15;

    // Color/formality matching for occasion
    const formalOccasions = ['work', 'interview', 'church', 'wedding'];
    const casualOccasions = ['casual', 'campus', 'gym', 'outdoor'];
    const trendyOccasions = ['date', 'party'];

    if (item.formality) {
      if (formalOccasions.includes(occasion) && item.formality === 'formal') score += 20;
      if (formalOccasions.includes(occasion) && item.formality === 'casual') score -= 10;
      if (casualOccasions.includes(occasion) && item.formality === 'casual') score += 20;
      if (casualOccasions.includes(occasion) && item.formality === 'formal') score -= 5;
      if (trendyOccasions.includes(occasion) && item.formality === 'smart-casual') score += 15;
    }

    // Tags matching
    if (item.tags) {
      const occasionTags = {
        casual: ['casual', 'everyday', 'comfortable'],
        work: ['formal', 'professional', 'smart'],
        date: ['stylish', 'elegant', 'trendy'],
        church: ['modest', 'formal', 'respectful'],
        party: ['trendy', 'bold', 'stylish'],
        campus: ['casual', 'comfortable', 'smart-casual'],
        wedding: ['formal', 'elegant', 'celebration'],
        interview: ['formal', 'professional', 'smart'],
        outdoor: ['casual', 'durable', 'comfortable'],
        gym: ['sporty', 'comfortable', 'athletic'],
      };
      const targetTags = occasionTags[occasion] || [];
      const matchCount = item.tags.filter(t => targetTags.includes(t)).length;
      score += matchCount * 12;
    }

    // Weather considerations
    if (weather === 'hot' && item.material && ['linen', 'cotton', 'light'].includes(item.material)) score += 10;
    if (weather === 'cold' && item.material && ['wool', 'thick', 'fleece'].includes(item.material)) score += 10;
    if (weather === 'rainy' && item.category === 'shoes' && item.tags && item.tags.includes('waterproof')) score += 15;

    return score;
  },

  calculateDripScore(outfit, occasion) {
    const totalSlots = this.getOccasionNeeds(occasion).length;
    const filledSlots = Object.keys(outfit).length;
    const baseScore = Math.round((filledSlots / totalSlots) * 70);
    const bonusScore = Math.round(Math.random() * 20);
    return Math.min(99, baseScore + bonusScore);
  },

  generateTip(occasion, weather, outfit) {
    const tips = {
      casual: [
        "Keep it simple and comfortable. A clean, well-fitted casual look always works.",
        "Casual doesn't mean sloppy. Make sure everything is clean and pressed.",
        "Accessories can elevate even the most basic casual outfit."
      ],
      work: [
        "A polished professional look commands respect. Keep it clean and structured.",
        "Make sure your shoes are clean - people notice details at work.",
        "When in doubt, go more formal. It's better to be slightly overdressed than underdressed."
      ],
      date: [
        "Wear something that makes you feel confident - confidence is the best accessory.",
        "One statement piece is enough. Don't overdo it.",
        "Make sure you're comfortable. You don't want to be adjusting your outfit all night."
      ],
      church: [
        "Respect the setting with modest, well-put-together attire.",
        "Keep accessories minimal and tasteful for church.",
        "A clean, respectful look shows consideration for the occasion."
      ],
      party: [
        "This is your time to be bold! Don't be afraid to stand out.",
        "Comfort matters - you'll be moving and dancing. Choose wisely.",
        "One standout piece plus solid basics equals a winning party look."
      ],
      campus: [
        "Smart-casual is the sweet spot for campus. You want to look put-together but not try-hard.",
        "Layers are your friend on campus - weather changes throughout the day.",
        "Comfortable shoes are essential when you're walking between classes."
      ],
      wedding: [
        "Celebrate in style! This is a special occasion - dress accordingly.",
        "Never upstage the couple, but make sure you look your absolute best.",
        "Pay attention to the dress code. When in doubt, lean formal."
      ],
      interview: [
        "First impressions are everything. Go for clean, professional, and confident.",
        "Your outfit should say 'I take this seriously.' Polish every detail.",
        "A well-structured outfit projects competence and reliability."
      ],
      outdoor: [
        "Function first, but that doesn't mean you can't look good doing it.",
        "Dress in layers you can adjust as the day goes on.",
        "Sturdy, comfortable footwear is non-negotiable for outdoor activities."
      ],
      gym: [
        "Performance fabrics make all the difference. Comfort equals better workouts.",
        "Make sure everything allows full range of motion.",
        "A good gym fit can actually boost your motivation to work out."
      ],
    };

    const occasionTips = tips[occasion] || tips.casual;
    let tip = occasionTips[Math.floor(Math.random() * occasionTips.length)];

    if (weather === 'rainy') tip += " And don't forget an umbrella - the rain won't ruin your drip!";
    if (weather === 'hot') tip += " Stay cool and hydrated - your drip stays fresh when you're comfortable.";
    if (weather === 'cold') tip += " Layer up stylishly - warmth and drip can coexist!";

    return tip;
  }
};

// ===== APP CONTROLLER =====
const App = {
  currentView: 'landing',
  chatMessages: [],
  currentOccasion: null,
  currentWeather: null,
  awaitingOccasion: true,
  uploadImageData: null,

  init() {
    Store.init();
    this.bindEvents();
    this.checkAuth();
  },

  checkAuth() {
    if (Store.isLoggedIn()) {
      this.navigate('home');
    } else {
      this.navigate('landing');
    }
  },

  bindEvents() {
    // Bottom nav
    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', () => {
        const view = item.dataset.view;
        if (view) this.navigate(view);
      });
    });

    // Logo click
    const logoEl = document.querySelector('.logo');
    if (logoEl) {
      logoEl.addEventListener('click', () => {
        this.navigate(Store.isLoggedIn() ? 'home' : 'landing');
      });
    }

    // Scroll effects
    window.addEventListener('scroll', () => {
      const header = document.querySelector('.app-header');
      if (header) {
        header.classList.toggle('scrolled', window.scrollY > 20);
      }
    });
  },

  navigate(view) {
    // Hide all views
    document.querySelectorAll('.view').forEach(v => {
      v.classList.remove('active', 'entering');
    });

    // Show target view
    const target = document.getElementById(`view-${view}`);
    if (target) {
      target.classList.add('active', 'entering');
    }

    // Update nav
    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.toggle('active', item.dataset.view === view);
    });

    this.currentView = view;

    // Show/hide bottom nav (hidden on landing and onboarding)
    const bottomNav = document.querySelector('.bottom-nav');
    if (bottomNav) {
      if (view === 'landing' || view === 'onboarding') {
        bottomNav.classList.remove('visible');
      } else {
        bottomNav.classList.add('visible');
      }
    }

    // View-specific initialization
    switch(view) {
      case 'landing': this.renderLanding(); break;
      case 'home': this.renderHome(); break;
      case 'wardrobe': this.renderWardrobe(); break;
      case 'recommend': this.renderRecommend(); break;
      case 'profile': this.renderProfile(); break;
      case 'onboarding': this.renderOnboarding(); break;
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  // ===== DEMO DATA =====
  addDemoClothes() {
    const demoItems = [
      { name: 'Navy Oxford Shirt', category: 'tops', color: 'navy', formality: 'smart-casual', tags: ['formal', 'professional', 'smart'] },
      { name: 'White Tee', category: 'tops', color: 'white', formality: 'casual', tags: ['casual', 'everyday', 'comfortable'] },
      { name: 'Black Chinos', category: 'bottoms', color: 'black', formality: 'smart-casual', tags: ['versatile', 'smart-casual'] },
      { name: 'Denim Jeans', category: 'bottoms', color: 'denim', formality: 'casual', tags: ['casual', 'everyday', 'durable'] },
      { name: 'White Sneakers', category: 'shoes', color: 'white', formality: 'casual', tags: ['casual', 'comfortable'] },
      { name: 'Black Leather Shoes', category: 'shoes', color: 'black', formality: 'formal', tags: ['formal', 'professional'] },
      { name: 'Bomber Jacket', category: 'outerwear', color: 'olive', formality: 'casual', tags: ['casual', 'stylish', 'trendy'] },
      { name: 'Blazer', category: 'outerwear', color: 'navy', formality: 'formal', tags: ['formal', 'professional', 'smart'] },
      { name: 'Silver Watch', category: 'accessories', color: 'gray', formality: 'smart-casual', tags: ['elegant', 'stylish'] },
      { name: 'Linen Shirt', category: 'tops', color: 'cream', formality: 'casual', tags: ['casual', 'comfortable', 'linen'] },
      { name: 'Khaki Shorts', category: 'bottoms', color: 'khaki', formality: 'casual', tags: ['casual', 'outdoor', 'comfortable'] },
      { name: 'Running Shoes', category: 'shoes', color: 'black', formality: 'casual', tags: ['sporty', 'athletic', 'comfortable'] },
    ];

    // Create simple colored placeholder images
    const colorBgs = {
      'navy': '#2a4365', 'white': '#f5f5f5', 'black': '#1a1a1a', 'denim': '#4a6fa5',
      'olive': '#6b8e23', 'gray': '#718096', 'cream': '#f5f0e1', 'khaki': '#b8a960',
      'red': '#e53e3e', 'blue': '#3182ce', 'brown': '#8b6f47', 'beige': '#c4a882',
      'green': '#38a169', 'pink': '#ed64a6', 'purple': '#805ad5'
    };

    demoItems.forEach(item => {
      const bgColor = colorBgs[item.color] || '#333';
      const svgImage = `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="260" viewBox="0 0 200 260"><rect width="200" height="260" fill="${bgColor}"/><text x="100" y="130" text-anchor="middle" fill="white" font-family="system-ui" font-size="14" font-weight="600">${item.name}</text></svg>`)}`;

      Store.addClothing({
        id: 'demo_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
        name: item.name,
        category: item.category,
        color: item.color,
        formality: item.formality,
        tags: item.tags,
        image: svgImage,
        addedAt: new Date().toISOString(),
        isDemo: true
      });
    });

    this.showToast('Demo wardrobe loaded with 12 items!', 'success');
    if (this.currentView === 'wardrobe') this.renderWardrobe();
    if (this.currentView === 'home') this.renderHome();
  },

  // ===== LANDING VIEW =====
  renderLanding() {
    this.createParticles();
  },

  createParticles() {
    const container = document.getElementById('particles');
    if (!container || container.children.length > 0) return;

    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 6 + 's';
      particle.style.animationDuration = (4 + Math.random() * 4) + 's';
      particle.style.width = (2 + Math.random() * 4) + 'px';
      particle.style.height = particle.style.width;
      container.appendChild(particle);
    }
  },

  // ===== HOME VIEW =====
  renderHome() {
    const wardrobe = Store.wardrobe;
    const profile = Store.profile;

    if (!profile) {
      this.navigate('onboarding');
      return;
    }

    const homeContent = document.getElementById('home-content');
    const firstName = profile.name ? profile.name.split(' ')[0] : 'there';

    homeContent.innerHTML = `
      <div class="landing-hero">
        <div class="hero-badge">${Icons.sun} Good ${this.getTimeOfDay()}, ${firstName}</div>
        <h1 class="hero-title">What are you<br><span class="highlight">wearing today?</span></h1>
        <p class="hero-subtitle">Let your AI stylist pick the perfect outfit from your wardrobe. Just tell us where you're going.</p>
        <div class="hero-actions">
          <button class="btn btn-primary btn-lg" onclick="App.navigate('recommend')">
            ${Icons.sparkles} Get Recommendation
          </button>
          <button class="btn btn-secondary btn-lg" onclick="App.navigate('wardrobe')">
            ${Icons.layers} My Wardrobe
          </button>
        </div>

        <div class="hero-visual">
          <div class="phone-mockup">
            <div style="text-align:center; margin-bottom: 8px;">
              <span style="font-size:0.7rem; color:var(--gray-5);">TODAY'S DRIP</span>
            </div>
            <div class="mockup-drip-score">${wardrobe.length > 0 ? Math.min(95, 60 + wardrobe.length * 5) : '--'}</div>
            <div class="mockup-label">${wardrobe.length} items in your wardrobe</div>
            <div class="mockup-outfit">
              ${wardrobe.slice(0, 3).map(c => `
                <div class="mockup-item" style="background: url('${c.image}') center/cover no-repeat; border-color: var(--lime);"></div>
              `).join('')}
              ${wardrobe.length === 0 ? `
                <div class="mockup-item" style="display:flex; align-items:center; justify-content:center;">
                  ${Icons.plus}
                </div>
                <div class="mockup-item" style="display:flex; align-items:center; justify-content:center;">
                  ${Icons.plus}
                </div>
                <div class="mockup-item" style="display:flex; align-items:center; justify-content:center;">
                  ${Icons.plus}
                </div>
              ` : ''}
            </div>
          </div>
        </div>
      </div>

      ${wardrobe.length === 0 ? `
        <div class="empty-state" style="padding: 0 20px 100px;">
          <div style="max-width:400px; margin:0 auto;">
            ${Icons.shirt}
            <h3>Build your wardrobe first</h3>
            <p>Add your clothes so the AI can recommend outfits based on what you actually own.</p>
            <button class="btn btn-primary" onclick="App.navigate('wardrobe')">
              ${Icons.plus} Add Clothes
            </button>
          </div>
        </div>
      ` : `
        <section class="landing-features" style="padding-bottom: 100px;">
          <h2 class="section-title">Quick Actions</h2>
          <div class="features-grid">
            <div class="feature-card" onclick="App.navigate('recommend')" style="cursor:pointer;">
              <div class="feature-icon">${Icons.sparkles}</div>
              <div>
                <h3>Get Styled</h3>
                <p>Tell the AI where you're going and get a curated outfit from your wardrobe.</p>
              </div>
            </div>
            <div class="feature-card" onclick="App.navigate('wardrobe')" style="cursor:pointer;">
              <div class="feature-icon">${Icons.shirt}</div>
              <div>
                <h3>Manage Wardrobe</h3>
                <p>Add, remove, or browse your clothing items anytime.</p>
              </div>
            </div>
            <div class="feature-card" onclick="App.showHistory()" style="cursor:pointer;">
              <div class="feature-icon">${Icons.calendar}</div>
              <div>
                <h3>Style History</h3>
                <p>Look back at your past outfits and recommendations.</p>
              </div>
            </div>
            <div class="feature-card" onclick="App.navigate('profile')" style="cursor:pointer;">
              <div class="feature-icon">${Icons.user}</div>
              <div>
                <h3>Your Profile</h3>
                <p>Update your style preferences and personal details.</p>
              </div>
            </div>
          </div>
        </section>
      `}
    `;
  },

  getTimeOfDay() {
    const hour = new Date().getHours();
    if (hour < 12) return 'morning';
    if (hour < 17) return 'afternoon';
    return 'evening';
  },

  // ===== WARDROBE VIEW =====
  renderWardrobe() {
    const wardrobe = Store.wardrobe;
    const content = document.getElementById('wardrobe-content');

    content.innerHTML = `
      <div class="wardrobe-section" style="padding-top: 80px;">
        <div class="wardrobe-header">
          <div>
            <h1 class="page-title">My Wardrobe</h1>
            <p class="page-subtitle">${wardrobe.length} item${wardrobe.length !== 1 ? 's' : ''} in your collection</p>
          </div>
          <button class="btn btn-primary btn-sm" onclick="App.openUploadModal()">
            ${Icons.plus} Add Item
          </button>
        </div>

        <div class="wardrobe-tabs">
          <button class="wardrobe-tab active" data-category="all" onclick="App.filterWardrobe('all', this)">All</button>
          ${Categories.map(c => `
            <button class="wardrobe-tab" data-category="${c.id}" onclick="App.filterWardrobe('${c.id}', this)">${c.label}</button>
          `).join('')}
        </div>

        <div class="wardrobe-grid" id="wardrobe-grid">
          <div class="clothing-card add-clothing-card" onclick="App.openUploadModal()">
            ${Icons.plus}
            <span>Add Item</span>
          </div>
          ${this.renderClothingCards(wardrobe)}
        </div>

        ${wardrobe.length === 0 ? `
          <div class="empty-state">
            ${Icons.shirt}
            <h3>Your wardrobe is empty</h3>
            <p>Start adding your clothes so the AI can recommend outfits for you.</p>
            <div style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center;">
              <button class="btn btn-primary" onclick="App.openUploadModal()">
                ${Icons.upload} Add Your First Item
              </button>
              <button class="btn btn-secondary" onclick="App.addDemoClothes()">
                ${Icons.sparkles} Load Demo Wardrobe
              </button>
            </div>
          </div>
        ` : ''}
      </div>
    `;
  },

  renderClothingCards(items) {
    return items.map(item => `
      <div class="clothing-card animate-fadeInUp" data-id="${item.id}">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        <div class="clothing-card-overlay">
          <div class="category">${item.category}</div>
          <div>${item.name}</div>
        </div>
        <button class="delete-btn" onclick="event.stopPropagation(); App.deleteClothing('${item.id}')">
          ${Icons.x}
        </button>
      </div>
    `).join('');
  },

  filterWardrobe(category, btn) {
    document.querySelectorAll('.wardrobe-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');

    const items = Store.getClothingByCategory(category);
    const grid = document.getElementById('wardrobe-grid');

    grid.innerHTML = `
      <div class="clothing-card add-clothing-card" onclick="App.openUploadModal()">
        ${Icons.plus}
        <span>Add Item</span>
      </div>
      ${this.renderClothingCards(items)}
    `;
  },

  deleteClothing(id) {
    if (confirm('Remove this item from your wardrobe?')) {
      Store.removeClothing(id);
      this.renderWardrobe();
      this.showToast('Item removed from wardrobe', 'info');
    }
  },

  // ===== UPLOAD MODAL =====
  openUploadModal() {
    const modal = document.getElementById('upload-modal');
    modal.classList.add('active');
    this.uploadImageData = null;

    // Reset form
    document.getElementById('upload-preview').style.display = 'none';
    document.getElementById('upload-preview').src = '';
    document.getElementById('upload-file').value = '';
    document.getElementById('item-name').value = '';
    document.getElementById('item-category').value = 'tops';
    document.getElementById('item-color').value = 'black';
    document.getElementById('item-formality').value = 'casual';
    document.getElementById('item-tags').value = '';
  },

  closeUploadModal() {
    document.getElementById('upload-modal').classList.remove('active');
    this.uploadImageData = null;
  },

  handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
      this.uploadImageData = ev.target.result;
      const preview = document.getElementById('upload-preview');
      preview.src = ev.target.result;
      preview.style.display = 'block';
    };
    reader.readAsDataURL(file);
  },

  handleImageDrop(e) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (!file || !file.type.startsWith('image/')) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
      this.uploadImageData = ev.target.result;
      const preview = document.getElementById('upload-preview');
      preview.src = ev.target.result;
      preview.style.display = 'block';
    };
    reader.readAsDataURL(file);
  },

  saveClothingItem() {
    const name = document.getElementById('item-name').value.trim();
    const category = document.getElementById('item-category').value;
    const color = document.getElementById('item-color').value;
    const formality = document.getElementById('item-formality').value;
    const tagsStr = document.getElementById('item-tags').value.trim();

    if (!name) {
      this.showToast('Please enter a name for this item', 'error');
      return;
    }

    if (!this.uploadImageData) {
      this.showToast('Please upload an image of the item', 'error');
      return;
    }

    const tags = tagsStr ? tagsStr.split(',').map(t => t.trim().toLowerCase()).filter(t => t) : [];

    const item = {
      id: 'c_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
      name,
      category,
      color,
      formality,
      tags,
      image: this.uploadImageData,
      addedAt: new Date().toISOString()
    };

    Store.addClothing(item);
    this.closeUploadModal();
    this.renderWardrobe();
    this.showToast(`${name} added to your wardrobe!`, 'success');
  },

  // ===== RECOMMEND VIEW =====
  renderRecommend() {
    const wardrobe = Store.wardrobe;
    const content = document.getElementById('recommend-content');

    if (wardrobe.length === 0) {
      content.innerHTML = `
        <div class="recommend-section">
          <div class="empty-state">
            ${Icons.shirt}
            <h3>No clothes to recommend</h3>
            <p>Add items to your wardrobe first, then come back for outfit recommendations.</p>
            <button class="btn btn-primary" onclick="App.navigate('wardrobe')">
              ${Icons.plus} Add Clothes
            </button>
          </div>
        </div>
      `;
      return;
    }

    // Reset chat state
    this.chatMessages = [];
    this.currentOccasion = null;
    this.currentWeather = null;
    this.awaitingOccasion = true;

    content.innerHTML = `
      <div class="recommend-section">
        <div class="recommend-hero">
          <h2>Your AI Stylist</h2>
          <p>Tell me where you're headed and I'll pick the perfect outfit</p>
        </div>

        <div class="chat-container">
          <div class="chat-messages" id="chat-messages"></div>

          <div style="margin-bottom: 16px;">
            <p style="font-size: 0.8rem; color: var(--gray-5); margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.5px;">Quick select occasion</p>
            <div class="occasion-chips" id="occasion-chips">
              ${Occasions.map(o => `
                <button class="occasion-chip" data-occasion="${o.id}" onclick="App.selectOccasion('${o.id}', this)">
                  ${Icons[o.icon] || Icons.star} ${o.label}
                </button>
              `).join('')}
            </div>
          </div>

          <div class="chat-input-area">
            <textarea class="chat-input" id="chat-input" placeholder="Tell me where you're going..." rows="1"
              onkeydown="if(event.key==='Enter' && !event.shiftKey){event.preventDefault(); App.sendMessage();}"></textarea>
            <button class="chat-send" onclick="App.sendMessage()">
              ${Icons.send}
            </button>
          </div>
        </div>
      </div>
    `;

    // Add initial AI message
    this.addChatMessage('ai', "Hey! I'm your DripDay stylist. Where are you headed today? Tell me the occasion and I'll put together the perfect outfit from your wardrobe.");
  },

  selectOccasion(occasionId, btn) {
    document.querySelectorAll('.occasion-chip').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    this.currentOccasion = occasionId;

    const occasion = Occasions.find(o => o.id === occasionId);
    const input = document.getElementById('chat-input');
    if (input) input.value = `I'm going to a ${occasion.label.toLowerCase()} event`;

    this.sendMessage();
  },

  sendMessage() {
    const input = document.getElementById('chat-input');
    const text = input.value.trim();
    if (!text) return;

    input.value = '';

    // Add user message
    this.addChatMessage('user', text);

    // Parse occasion from message if not already set
    if (!this.currentOccasion) {
      this.currentOccasion = this.parseOccasion(text);
    }

    // Parse weather
    if (!this.currentWeather) {
      this.currentWeather = this.parseWeather(text);
    }

    // Show typing indicator
    this.showTyping();

    // Process after delay
    setTimeout(() => {
      this.removeTyping();

      if (this.awaitingOccasion && !this.currentOccasion) {
        this.addChatMessage('ai', "I'd love to help you pick an outfit! But first, where are you going? Are you heading to work, a date, church, a party, or somewhere else?");
        return;
      }

      if (!this.currentWeather) {
        this.addChatMessage('ai', `Nice! A ${Occasions.find(o => o.id === this.currentOccasion)?.label.toLowerCase() || 'special'} occasion. How's the weather where you are? Hot, warm, cool, cold, or rainy? This helps me pick the right fabrics and layers.`);
        this.awaitingOccasion = false;
        return;
      }

      // We have all the info - generate recommendation
      this.generateAndShowOutfit();

    }, 1000 + Math.random() * 800);
  },

  parseOccasion(text) {
    const lower = text.toLowerCase();
    const occasionKeywords = {
      casual: ['casual', 'relax', 'lounge', 'chill', 'everyday', 'errand'],
      work: ['work', 'office', 'meeting', 'corporate', 'professional', 'business'],
      date: ['date', 'romantic', 'dinner date', 'valentine'],
      church: ['church', 'service', 'mass', 'worship', 'prayer', 'sunday'],
      party: ['party', 'club', 'turn up', 'night out', 'rave', 'clubbing'],
      campus: ['campus', 'lecture', 'class', 'university', 'school', 'unza', 'study'],
      wedding: ['wedding', 'marriage', 'reception', 'bridal', 'nuptial'],
      interview: ['interview', 'job interview', 'assessment'],
      outdoor: ['outdoor', 'hiking', 'picnic', 'beach', 'safari', 'walk', 'nature'],
      gym: ['gym', 'workout', 'exercise', 'training', 'running', 'fitness', 'sports'],
    };

    for (const [occasion, keywords] of Object.entries(occasionKeywords)) {
      if (keywords.some(kw => lower.includes(kw))) return occasion;
    }

    return 'casual';
  },

  parseWeather(text) {
    const lower = text.toLowerCase();
    if (['hot', 'sunny', 'scorching', 'boiling', 'humid', 'warm', 'heat'].some(w => lower.includes(w))) return 'hot';
    if (['rain', 'rainy', 'raining', 'drizzle', 'storm', 'wet', 'downpour'].some(w => lower.includes(w))) return 'rainy';
    if (['cold', 'freezing', 'chilly', 'frost', 'winter'].some(w => lower.includes(w))) return 'cold';
    if (['cool', 'breezy', 'mild', 'moderate', 'comfortable'].some(w => lower.includes(w))) return 'cool';
    if (['warm', 'nice', 'pleasant'].some(w => lower.includes(w))) return 'warm';
    return 'mild';
  },

  addChatMessage(type, text) {
    this.chatMessages.push({ type, text });
    const container = document.getElementById('chat-messages');
    if (!container) return;

    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${type}`;
    bubble.textContent = text;
    container.appendChild(bubble);
    container.scrollTop = container.scrollHeight;
  },

  showTyping() {
    const container = document.getElementById('chat-messages');
    if (!container) return;

    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble ai';
    bubble.id = 'typing-bubble';
    bubble.innerHTML = `
      <div class="typing-indicator">
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
      </div>
    `;
    container.appendChild(bubble);
    container.scrollTop = container.scrollHeight;
  },

  removeTyping() {
    const typing = document.getElementById('typing-bubble');
    if (typing) typing.remove();
  },

  async generateAndShowOutfit() {
    this.addChatMessage('ai', `Perfect! Let me put together the best outfit from your wardrobe for this ${Occasions.find(o => o.id === this.currentOccasion)?.label.toLowerCase() || 'occasion'}...`);

    this.showTyping();

    try {
      const result = await AI.generateRecommendation(
        this.currentOccasion,
        this.currentWeather,
        Store.wardrobe
      );

      this.removeTyping();

      if (Object.keys(result.outfit).length === 0) {
        this.addChatMessage('ai', "I couldn't find suitable items in your wardrobe for this occasion. Try adding more clothes that match this type of event!");
        return;
      }

      // Show outfit result
      this.showOutfitResult(result);

      // Save to history
      Store.history = [...Store.history, {
        id: 'h_' + Date.now(),
        occasion: this.currentOccasion,
        weather: this.currentWeather,
        outfit: result.outfit,
        score: result.score,
        date: new Date().toISOString()
      }];

    } catch (err) {
      this.removeTyping();
      this.addChatMessage('ai', "Oops, something went wrong. Please try again!");
    }
  },

  showOutfitResult(result) {
    const container = document.getElementById('chat-messages');
    if (!container) return;

    const outfitItems = Object.values(result.outfit);
    const occasionLabel = Occasions.find(o => o.id === this.currentOccasion)?.label || 'Special';

    const resultHtml = `
      <div class="outfit-result">
        <div class="outfit-result-header">
          <h3>Your ${occasionLabel} Drip</h3>
          <div class="drip-score">
            ${Icons.zap} <span class="score-value">${result.score}</span>
          </div>
        </div>

        <div class="outfit-items">
          ${outfitItems.map(item => `
            <div class="outfit-item animate-fadeInUp">
              <img class="outfit-item-img" src="${item.image}" alt="${item.name}" loading="lazy">
              <div class="outfit-item-info">
                <div class="item-name">${item.name}</div>
                <div class="item-category">${item.category}</div>
                ${item.color ? `<div class="color-tag" style="margin-top: 4px;">
                  <span class="color-dot" style="background: ${ColorMap[item.color] || '#888'};"></span>
                  ${item.color}
                </div>` : ''}
              </div>
            </div>
          `).join('')}
        </div>

        <div class="outfit-tip">
          ${Icons.sparkles}
          <p><strong>Style Tip:</strong> ${result.tip}</p>
        </div>

        <div class="outfit-actions">
          <button class="btn btn-primary" onclick="App.refreshRecommendation()" style="flex:1;">
            ${Icons.refresh} Try Another
          </button>
          <button class="btn btn-ghost" onclick="App.saveOutfit()" style="flex:1;">
            ${Icons.heart} Save Look
          </button>
        </div>
      </div>
    `;

    const wrapper = document.createElement('div');
    wrapper.className = 'chat-bubble ai';
    wrapper.style.maxWidth = '100%';
    wrapper.style.padding = '16px';
    wrapper.innerHTML = resultHtml;
    container.appendChild(wrapper);
    container.scrollTop = container.scrollHeight;
  },

  refreshRecommendation() {
    this.currentOccasion = null;
    this.currentWeather = null;
    this.awaitingOccasion = true;
    this.chatMessages = [];
    this.renderRecommend();
  },

  saveOutfit() {
    this.showToast('Outfit saved to your style history!', 'success');
  },

  // ===== ONBOARDING =====
  renderOnboarding() {
    const content = document.getElementById('onboarding-content');
    let currentStep = 0;
    const steps = ['name', 'style', 'wardrobe-intro'];

    const renderStep = (step) => {
      switch(step) {
        case 0:
          content.innerHTML = `
            <div class="onboarding-page">
              <div class="onboarding-progress">
                <div class="progress-dot active"></div>
                <div class="progress-dot"></div>
                <div class="progress-dot"></div>
              </div>

              <div class="onboarding-step active">
                <div style="margin-bottom: 32px;">
                  <div style="width: 72px; height: 72px; background: var(--lime-dim); border-radius: 20px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
                    ${Icons.user}
                  </div>
                </div>

                <h1 class="onboarding-title">What's your name?</h1>
                <p class="onboarding-subtitle">Let's personalize your DripDay experience</p>

                <div class="form-group">
                  <label class="form-label">Your Name</label>
                  <input type="text" class="form-input" id="profile-name" placeholder="e.g. Tresha" autocomplete="name">
                </div>

                <div class="form-group">
                  <label class="form-label">Style Preference</label>
                  <select class="form-select" id="profile-style">
                    <option value="casual">Casual & Comfortable</option>
                    <option value="smart-casual">Smart Casual</option>
                    <option value="formal">Formal & Professional</option>
                    <option value="trendy">Trendy & Bold</option>
                    <option value="minimalist">Clean & Minimalist</option>
                    <option value="eclectic">Eclectic & Creative</option>
                  </select>
                </div>

                <div class="form-group">
                  <label class="form-label">Gender</label>
                  <select class="form-select" id="profile-gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="non-binary">Non-binary</option>
                    <option value="prefer-not">Prefer not to say</option>
                  </select>
                </div>

                <div class="onboarding-footer">
                  <button class="btn btn-primary btn-full" onclick="App.onboardingNext(1)">
                    Continue ${Icons.arrowRight}
                  </button>
                </div>
              </div>
            </div>
          `;
          break;

        case 1:
          content.innerHTML = `
            <div class="onboarding-page">
              <div class="onboarding-progress">
                <div class="progress-dot completed"></div>
                <div class="progress-dot active"></div>
                <div class="progress-dot"></div>
              </div>

              <div class="onboarding-step active">
                <div style="margin-bottom: 32px;">
                  <div style="width: 72px; height: 72px; background: var(--lime-dim); border-radius: 20px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
                    ${Icons.shirt}
                  </div>
                </div>

                <h1 class="onboarding-title">Add your wardrobe</h1>
                <p class="onboarding-subtitle">Upload the clothes you own so the AI can recommend outfits from your actual closet</p>

                <div style="margin: 24px 0;">
                  <div class="upload-zone" id="onboarding-upload-zone"
                    onclick="document.getElementById('onboarding-file').click()"
                    ondragover="event.preventDefault(); this.classList.add('drag-over')"
                    ondragleave="this.classList.remove('drag-over')"
                    ondrop="App.handleOnboardingDrop(event)">
                    ${Icons.upload}
                    <p>Tap to upload or drag & drop</p>
                    <p class="upload-hint">JPG, PNG up to 5MB</p>
                    <input type="file" id="onboarding-file" accept="image/*" style="display:none" onchange="App.handleOnboardingUpload(event)" multiple>
                  </div>

                  <div id="onboarding-previews" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-top: 12px;"></div>
                </div>

                <p style="font-size: 0.8rem; color: var(--gray-6); text-align: center; margin-bottom: 20px;">
                  You can add more clothes later. ${this.onboardingImages ? this.onboardingImages.length : 0} items added so far.
                </p>

                <div class="onboarding-footer">
                  <button class="btn btn-ghost btn-full" onclick="App.completeOnboarding()" style="margin-bottom: 8px;">
                    Skip for now
                  </button>
                  <button class="btn btn-primary btn-full" onclick="App.completeOnboarding()">
                    Start DripDay ${Icons.arrowRight}
                  </button>
                </div>
              </div>
            </div>
          `;
          break;
      }
    };

    this.onboardingImages = this.onboardingImages || [];
    renderStep(currentStep);
  },

  onboardingNext(step) {
    if (step === 1) {
      const name = document.getElementById('profile-name')?.value.trim();
      if (!name) {
        this.showToast('Please enter your name', 'error');
        return;
      }
      // Save onboarding data before transitioning steps
      this._onboardingName = name;
      this._onboardingStyle = document.getElementById('profile-style')?.value || 'casual';
      this._onboardingGender = document.getElementById('profile-gender')?.value || 'prefer-not';
    }
    this.onboardingStep = 1;
    const content = document.getElementById('onboarding-content');
    this.renderOnboardingStep1(content);
  },

  onboardingStep: 0,

  renderOnboardingStep1(content) {
    content.innerHTML = `
      <div class="onboarding-page">
        <div class="onboarding-progress">
          <div class="progress-dot completed"></div>
          <div class="progress-dot active"></div>
          <div class="progress-dot"></div>
        </div>

        <div class="onboarding-step active">
          <div style="margin-bottom: 32px;">
            <div style="width: 72px; height: 72px; background: var(--lime-dim); border-radius: 20px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
              ${Icons.shirt}
            </div>
          </div>

          <h1 class="onboarding-title">Add your wardrobe</h1>
          <p class="onboarding-subtitle">Upload the clothes you own so the AI can recommend outfits from your actual closet</p>

          <div style="margin: 24px 0;">
            <div class="upload-zone" id="onboarding-upload-zone"
              onclick="document.getElementById('onboarding-file').click()"
              ondragover="event.preventDefault(); this.classList.add('drag-over')"
              ondragleave="this.classList.remove('drag-over')"
              ondrop="App.handleOnboardingDrop(event)">
              ${Icons.upload}
              <p>Tap to upload or drag & drop</p>
              <p class="upload-hint">JPG, PNG up to 5MB</p>
              <input type="file" id="onboarding-file" accept="image/*" style="display:none" onchange="App.handleOnboardingUpload(event)" multiple>
            </div>

            <div id="onboarding-previews" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-top: 12px;"></div>
          </div>

          <p style="font-size: 0.8rem; color: var(--gray-6); text-align: center; margin-bottom: 20px;">
            You can add more clothes later. <span id="ob-count">${this.onboardingImages ? this.onboardingImages.length : 0}</span> items added so far.
          </p>

          <div class="onboarding-footer">
            <button class="btn btn-ghost btn-full" onclick="App.completeOnboarding()" style="margin-bottom: 8px;">
              Skip for now
            </button>
            <button class="btn btn-primary btn-full" onclick="App.completeOnboarding()">
              Start DripDay ${Icons.arrowRight}
            </button>
          </div>
        </div>
      </div>
    `;
  },

  handleOnboardingUpload(e) {
    const files = Array.from(e.target.files);
    this.processOnboardingFiles(files);
  },

  handleOnboardingDrop(e) {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('image/'));
    this.processOnboardingFiles(files);
  },

  processOnboardingFiles(files) {
    this.onboardingImages = this.onboardingImages || [];

    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (ev) => {
        const data = ev.target.result;
        this.onboardingImages.push(data);

        const previews = document.getElementById('onboarding-previews');
        if (previews) {
          const img = document.createElement('div');
          img.style.cssText = 'aspect-ratio:1; border-radius:8px; overflow:hidden; border:1px solid var(--gray-3);';
          img.innerHTML = `<img src="${data}" style="width:100%;height:100%;object-fit:cover;">`;
          previews.appendChild(img);
        }

        const count = document.getElementById('ob-count');
        if (count) count.textContent = this.onboardingImages.length;
      };
      reader.readAsDataURL(file);
    });
  },

  completeOnboarding() {
    // Read from saved onboarding data since the DOM may have changed steps
    const name = this._onboardingName || document.getElementById('profile-name')?.value.trim() || 'Style Lover';
    const style = this._onboardingStyle || document.getElementById('profile-style')?.value || 'casual';
    const gender = this._onboardingGender || document.getElementById('profile-gender')?.value || 'prefer-not';

    Store.profile = {
      name,
      style,
      gender,
      createdAt: new Date().toISOString()
    };

    // Add onboarding images as wardrobe items
    if (this.onboardingImages && this.onboardingImages.length > 0) {
      this.onboardingImages.forEach((img, i) => {
        Store.addClothing({
          id: 'c_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
          name: `Item ${i + 1}`,
          category: 'tops',
          color: 'black',
          formality: style,
          tags: [style],
          image: img,
          addedAt: new Date().toISOString()
        });
      });
    }

    this.onboardingImages = [];
    this.onboardingStep = 0;
    this._onboardingName = '';
    this._onboardingStyle = '';
    this._onboardingGender = '';
    this.showToast(`Welcome to DripDay, ${name}!`, 'success');
    this.navigate('home');
  },

  // ===== PROFILE VIEW =====
  renderProfile() {
    const profile = Store.profile;
    const content = document.getElementById('profile-content');

    if (!profile) {
      this.navigate('onboarding');
      return;
    }

    const initials = profile.name ? profile.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2) : 'DD';

    content.innerHTML = `
      <div class="profile-section" style="padding-top: 80px;">
        <div class="profile-header">
          <div class="profile-avatar">${initials}</div>
          <div class="profile-info">
            <h2>${profile.name}</h2>
            <p>${profile.style} style</p>
          </div>
        </div>

        <div class="card" style="margin-bottom: 16px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
            <h3 style="font-size: 1rem;">Wardrobe Stats</h3>
            ${Icons.layers}
          </div>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; text-align: center;">
            <div>
              <div style="font-size: 1.8rem; font-weight: 900; color: var(--lime);">${Store.wardrobe.length}</div>
              <div style="font-size: 0.75rem; color: var(--gray-6);">Total Items</div>
            </div>
            <div>
              <div style="font-size: 1.8rem; font-weight: 900; color: var(--lime);">${new Set(Store.wardrobe.map(c => c.category)).size}</div>
              <div style="font-size: 0.75rem; color: var(--gray-6);">Categories</div>
            </div>
            <div>
              <div style="font-size: 1.8rem; font-weight: 900; color: var(--lime);">${Store.history.length}</div>
              <div style="font-size: 0.75rem; color: var(--gray-6);">Outfits</div>
            </div>
          </div>
        </div>

        <div class="card" style="margin-bottom: 16px;">
          <h3 style="font-size: 1rem; margin-bottom: 16px;">Style Profile</h3>
          <div class="form-group">
            <label class="form-label">Name</label>
            <input type="text" class="form-input" id="edit-name" value="${profile.name}">
          </div>
          <div class="form-group">
            <label class="form-label">Style Preference</label>
            <select class="form-select" id="edit-style">
              <option value="casual" ${profile.style === 'casual' ? 'selected' : ''}>Casual & Comfortable</option>
              <option value="smart-casual" ${profile.style === 'smart-casual' ? 'selected' : ''}>Smart Casual</option>
              <option value="formal" ${profile.style === 'formal' ? 'selected' : ''}>Formal & Professional</option>
              <option value="trendy" ${profile.style === 'trendy' ? 'selected' : ''}>Trendy & Bold</option>
              <option value="minimalist" ${profile.style === 'minimalist' ? 'selected' : ''}>Clean & Minimalist</option>
              <option value="eclectic" ${profile.style === 'eclectic' ? 'selected' : ''}>Eclectic & Creative</option>
            </select>
          </div>
          <button class="btn btn-primary btn-full" onclick="App.updateProfile()">
            ${Icons.check} Save Changes
          </button>
        </div>

        <div class="card" style="margin-bottom: 16px; cursor: pointer;" onclick="App.navigate('wardrobe')">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="display: flex; align-items: center; gap: 12px;">
              ${Icons.shirt}
              <span style="font-weight: 600;">Manage Wardrobe</span>
            </div>
            ${Icons.chevronRight}
          </div>
        </div>

        <div class="card" style="margin-bottom: 16px; cursor: pointer;" onclick="App.showHistory()">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="display: flex; align-items: center; gap: 12px;">
              ${Icons.calendar}
              <span style="font-weight: 600;">Style History</span>
            </div>
            ${Icons.chevronRight}
          </div>
        </div>

        <button class="btn btn-danger btn-full" onclick="App.logout()" style="margin-top: 8px;">
          ${Icons.logout} Sign Out & Reset
        </button>

        <p style="text-align: center; color: var(--gray-5); font-size: 0.75rem; margin-top: 24px;">
          DripDay v1.0 &middot; Made for Zambia, built for Africa
        </p>
      </div>
    `;
  },

  updateProfile() {
    const name = document.getElementById('edit-name')?.value.trim();
    const style = document.getElementById('edit-style')?.value;

    if (!name) {
      this.showToast('Name cannot be empty', 'error');
      return;
    }

    Store.profile = { ...Store.profile, name, style };
    this.showToast('Profile updated!', 'success');
    this.renderProfile();
  },

  showHistory() {
    const history = Store.history;
    if (history.length === 0) {
      this.showToast('No outfit history yet. Get some recommendations first!', 'info');
      return;
    }

    // Show history in a simple way for now
    let msg = 'Your past outfits:\n\n';
    history.slice(-5).reverse().forEach((h, i) => {
      const occasion = Occasions.find(o => o.id === h.occasion)?.label || 'Special';
      const date = new Date(h.date).toLocaleDateString();
      msg += `${i + 1}. ${occasion} - Drip Score: ${h.score} (${date})\n`;
    });

    this.showToast(`You have ${history.length} saved outfit(s)`, 'info');
  },

  logout() {
    if (confirm('This will sign you out and clear all your data. Are you sure?')) {
      Store.reset();
      this.navigate('landing');
    }
  },

  // ===== TOAST NOTIFICATIONS =====
  showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const iconMap = {
      success: Icons.checkCircle,
      error: Icons.xCircle,
      info: Icons.info,
    };

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `${iconMap[type] || Icons.info} <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3000);
  }
};

// ===== INIT ON DOM READY =====
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
