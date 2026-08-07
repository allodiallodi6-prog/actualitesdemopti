/* ===================================================================
   ACTUALITÉS DE MOPTI — logique du site (démo front-end)
=================================================================== */

/* ---------- Illustrations SVG réutilisables (par catégorie) ---------- */
const ILLUS = {
  politique: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#0E5C7A"/><rect y="200" width="400" height="100" fill="#0A3F54"/><rect x="40" y="120" width="14" height="80" fill="#E8C79A"/><rect x="70" y="100" width="14" height="100" fill="#E8C79A"/><rect x="100" y="80" width="14" height="120" fill="#E8C79A"/><rect x="280" y="90" width="14" height="110" fill="#E8C79A"/><rect x="320" y="110" width="14" height="90" fill="#E8C79A"/><circle cx="200" cy="150" r="46" fill="#C97B3D" opacity=".85"/><rect x="182" y="140" width="36" height="46" fill="#0A3F54"/></svg>`,
  societe: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#17753F"/><circle cx="120" cy="150" r="34" fill="#E8C79A"/><circle cx="200" cy="150" r="34" fill="#C97B3D"/><circle cx="280" cy="150" r="34" fill="#0E5C7A"/><rect y="210" width="400" height="90" fill="#0E4025"/></svg>`,
  economie: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#C97B3D"/><rect x="60" y="180" width="40" height="90" fill="#8C531F"/><rect x="120" y="140" width="40" height="130" fill="#8C531F"/><rect x="180" y="100" width="40" height="170" fill="#8C531F"/><rect x="240" y="150" width="40" height="120" fill="#8C531F"/><rect x="300" y="120" width="40" height="150" fill="#8C531F"/></svg>`,
  securite: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#453163"/><path d="M200 60 L280 90 V170 C280 220 240 250 200 260 C160 250 120 220 120 170 V90 Z" fill="#6C4A9C"/></svg>`,
  culture: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#C9782E"/><rect x="150" y="60" width="100" height="180" rx="50" fill="#8C531F"/><rect x="120" y="220" width="160" height="20" rx="6" fill="#8C531F"/></svg>`,
  sport: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#0E5C7A"/><circle cx="200" cy="150" r="55" fill="#FBFAF6"/><path d="M200 95 L200 205 M150 150 L250 150" stroke="#0E5C7A" stroke-width="4"/></svg>`,
  sante: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#2E9E8E"/><rect x="180" y="110" width="40" height="120" fill="#fff"/><rect x="140" y="150" width="120" height="40" fill="#fff"/></svg>`,
  education: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#3468A8"/><path d="M100 130 L200 90 L300 130 L200 170 Z" fill="#E8C79A"/><rect x="190" y="170" width="20" height="60" fill="#E8C79A"/></svg>`,
  environnement: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#4FAE72"/><circle cx="130" cy="160" r="50" fill="#17753F"/><circle cx="230" cy="130" r="65" fill="#17753F"/><circle cx="310" cy="170" r="40" fill="#17753F"/><rect y="230" width="400" height="70" fill="#0E5C7A"/></svg>`,
  histoire: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#7A5A3A"/><rect x="60" y="120" width="280" height="110" fill="#5C4028"/><rect x="90" y="60" width="30" height="70" fill="#5C4028"/><rect x="150" y="40" width="30" height="90" fill="#5C4028"/><rect x="220" y="40" width="30" height="90" fill="#5C4028"/><rect x="280" y="60" width="30" height="70" fill="#5C4028"/></svg>`,
  avis: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#B23A48"/><rect x="110" y="80" width="180" height="140" rx="6" fill="#fff"/><rect x="130" y="105" width="140" height="10" fill="#B23A48"/><rect x="130" y="130" width="140" height="10" fill="#E8C79A"/><rect x="130" y="155" width="90" height="10" fill="#E8C79A"/><circle cx="290" cy="90" r="18" fill="#C97B3D"/></svg>`,
  actualites: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#0A3F54"/><rect x="40" y="60" width="320" height="14" fill="#E8C79A"/><rect x="40" y="90" width="220" height="10" fill="#3E94B5"/><rect x="40" y="130" width="320" height="120" fill="#0E5C7A"/></svg>`
};
function illus(cat){ return ILLUS[cat] || ILLUS.actualites; }
window.illus = illus;

/* ---------- Affiche une vraie photo (img/{cat}.jpg) si elle existe,
   sinon revient automatiquement sur l'illustration dessinée. ---------- */
function mediaHTML(cat, alt, variant, explicitSrc){
  const file = explicitSrc ? explicitSrc : (variant ? `img/${cat}-${variant}.jpg` : `img/${cat}.jpg`);
  const safeAlt = (alt || cat).replace(/"/g, '&quot;');
  return `<img src="${file}" alt="${safeAlt}" loading="lazy"
    onerror="this.onerror=null; this.outerHTML = illus('${cat}');" />`;
}
window.mediaHTML = mediaHTML;

/* ---------- Illustration héro : silhouette Mopti (mosquée, fleuve, pinasses) ---------- */
const HERO_ILLUS = `
<svg viewBox="0 0 900 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#D98A4A"/>
      <stop offset="55%" stop-color="#B4693F"/>
      <stop offset="100%" stop-color="#3E94B5"/>
    </linearGradient>
    <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0E5C7A"/>
      <stop offset="100%" stop-color="#0A3F54"/>
    </linearGradient>
  </defs>
  <rect width="900" height="600" fill="url(#sky)"/>
  <circle cx="700" cy="140" r="70" fill="#F1D6A8" opacity=".9"/>
  <!-- ville / mosquée en banco -->
  <g fill="#5C4028">
    <rect x="120" y="330" width="60" height="150"/>
    <rect x="190" y="300" width="50" height="180"/>
    <rect x="250" y="260" width="90" height="220"/>
    <rect x="270" y="180" width="14" height="90"/>
    <rect x="310" y="180" width="14" height="90"/>
    <rect x="350" y="310" width="60" height="170"/>
    <rect x="420" y="290" width="50" height="190"/>
    <rect x="480" y="340" width="70" height="140"/>
    <rect x="560" y="300" width="46" height="180"/>
    <rect x="615" y="330" width="60" height="150"/>
  </g>
  <g fill="#4A3220">
    <rect x="120" y="330" width="60" height="10"/>
    <rect x="250" y="260" width="90" height="10"/>
    <rect x="350" y="310" width="60" height="10"/>
    <rect x="480" y="340" width="70" height="10"/>
  </g>
  <!-- fleuve -->
  <path d="M0 480 C 150 450, 300 510, 450 480 C 600 450, 750 510, 900 480 L900 600 L0 600 Z" fill="url(#water)"/>
  <path d="M0 500 C 150 475, 300 525, 450 500 C 600 475, 750 525, 900 500" stroke="#3E94B5" stroke-width="3" fill="none" opacity=".5"/>
  <!-- pinasses -->
  <g fill="#2A1B10">
    <path d="M120 520 L200 520 L185 540 L135 540 Z"/>
    <rect x="150" y="500" width="4" height="24"/>
    <path d="M700 540 L790 540 L773 562 L717 562 Z"/>
    <rect x="735" y="516" width="4" height="26"/>
  </g>
</svg>`;

/* ---------- Données factices ---------- */
const CATS = [
  {slug:'politique', label:'Politique'},
  {slug:'societe', label:'Société'},
  {slug:'economie', label:'Économie'},
  {slug:'securite', label:'Sécurité'},
  {slug:'culture', label:'Culture'},
  {slug:'sport', label:'Sport'},
  {slug:'sante', label:'Santé'},
  {slug:'education', label:'Éducation'},
  {slug:'environnement', label:'Environnement'},
  {slug:'histoire', label:'Histoire de Mopti'},
  {slug:'avis', label:'Avis et communiqués'},
];

const AUTEURS = ['Aïssata Cissé','Boubacar Traoré','Fatoumata Diallo','Amadou Guindo','Hawa Maïga'];

const TITRES = {
  politique: ["Conseil régional de Mopti : les priorités du nouveau mandat","Décentralisation : ce que prévoit la nouvelle feuille de route","Rencontre entre autorités locales et chefs de quartier à Mopti"],
  societe: ["Retour progressif des déplacés dans plusieurs villages du cercle","Mopti, ville carrefour : le quotidien d'un marché portuaire","Solidarité communautaire : le rôle des associations de quartier"],
  economie: ["La pêche sur le Bani retrouve des couleurs cette saison","Marché de Mopti : la hausse des prix inquiète les commerçants","Artisanat local : le tissage traditionnel séduit à l'export"],
  securite: ["Renforcement du dispositif de sécurité dans la région","Point de situation sécuritaire dans le cercle de Mopti","Patrouilles conjointes autour du port de Mopti"],
  culture: ["Festival culturel de Mopti : la programmation dévoilée","La musique peule à l'honneur lors d'une soirée à Sévaré","Artisans potiers de Kansaye : un savoir-faire séculaire"],
  sport: ["L'équipe de Mopti se prépare pour le championnat régional","Tournoi de football inter-quartiers : coup d'envoi ce week-end","Jeunes talents : l'athlétisme en plein essor à Sévaré"],
  sante: ["Campagne de vaccination dans les écoles de la région","Le centre de santé de référence renforce ses équipements","Sensibilisation contre le paludisme avant la saison des pluies"],
  education: ["Rentrée scolaire : état des lieux dans le cercle de Mopti","Nouvelle bibliothèque communautaire à Sévaré","Examens de fin d'année : les chiffres de la région"],
  environnement: ["Niveau du fleuve Bani : les pêcheurs restent vigilants","Reboisement : une initiative citoyenne prend de l'ampleur","Gestion des déchets : le défi des grandes agglomérations"],
  histoire: ["La Grande Mosquée de Mopti, joyau de l'architecture en banco","Mopti, la 'Venise du Mali' : origines d'un surnom","Sur les traces des empires du Macina"],
  avis: ["Communiqué de la mairie : coupure d'eau programmée ce week-end","Avis de recrutement : la préfecture recherche des agents","Appel à candidatures pour le prochain festival culturel"]
};

function genArticles(){
  let id = 1;
  const arr = [];
  CATS.forEach(c=>{
    (TITRES[c.slug] || []).forEach((t,i)=>{
      arr.push({
        id: id++,
        titre: t,
        soustitre: "Reportage et analyse sur un sujet qui concerne directement les habitants de la région de Mopti.",
        cat: c.slug,
        catLabel: c.label,
        auteur: AUTEURS[id % AUTEURS.length],
        date: `202${(id%3)+3}-0${(id%8)+1}-1${id%9}`,
        lecture: 3 + (id % 6),
        vues: 400 + id * 137 % 5000,
        extrait: "Un aperçu des faits, du contexte et des réactions recueillies sur le terrain par notre rédaction à Mopti."
      });
    });
  });
  return arr;
}
const CAT_LABELS = Object.fromEntries(CATS.map(c=>[c.slug, c.label]));
CAT_LABELS.actualites = 'Actualités';

let DEMO_ARTICLES = genArticles();
let REAL_ARTICLES = [];
let ARTICLES = DEMO_ARTICLES.slice();
let UNE = ARTICLES[0];
let DERNIERES = ARTICLES.slice(1, 7);
let PLUS_LUS = [...ARTICLES].sort((a,b)=>b.vues-a.vues).slice(0,5);

/* ---------- Rendu markdown simplifié (pour les articles publiés via le CMS) ---------- */
function mdish(text){
  if(!text) return '';
  const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  return text.split(/\n\s*\n/).map(block=>{
    block = block.trim();
    if(!block) return '';
    if(block.startsWith('## ')) return `<h2>${esc(block.slice(3))}</h2>`;
    if(block.startsWith('> ')) return `<blockquote>${esc(block.slice(2))}</blockquote>`;
    let html = esc(block).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\*(.+?)\*/g, '<em>$1</em>');
    return `<p>${html.replace(/\n/g,'<br>')}</p>`;
  }).join('');
}

/* ---------- Charge les articles publiés depuis /content/articles.json (via l'espace rédaction /admin) ---------- */
async function loadRealArticles(){
  try{
    const res = await fetch('content/articles.json', {cache:'no-store'});
    if(!res.ok) return [];
    const data = await res.json();
    const list = Array.isArray(data.articles) ? data.articles : [];
    return list.map((a, i)=>({
      id: 9000 + i,
      titre: a.titre || 'Sans titre',
      soustitre: a.soustitre || '',
      cat: a.cat || 'actualites',
      catLabel: CAT_LABELS[a.cat] || 'Actualités',
      auteur: a.auteur || 'Rédaction',
      date: a.date || '',
      lecture: a.lecture || 4,
      vues: 1000 + i * 250,
      extrait: a.extrait || (a.corps ? a.corps.slice(0,140).replace(/\n/g,' ') + '…' : ''),
      corps: a.corps || '',
      image: a.image || null
    })).reverse(); // les plus récents en premier
  }catch(e){
    console.warn('Aucun article publié pour le moment (ou content/articles.json introuvable).', e);
    return [];
  }
}

function refreshDerivedLists(){
  UNE = ARTICLES[0];
  DERNIERES = ARTICLES.slice(1, 7);
  PLUS_LUS = [...ARTICLES].sort((a,b)=>b.vues-a.vues).slice(0,5);
}

/* ---------- Rendu ---------- */
function cardHTML(a){
  return `
  <a href="article.html?id=${a.id}" class="card reveal">
    <div class="card-thumb">${mediaHTML(a.cat, a.titre, null, a.image)}</div>
    <div class="card-body">
      <span class="tag tag-${a.cat}">${a.catLabel}</span>
      <h3>${a.titre}</h3>
      <p class="card-excerpt">${a.extrait}</p>
      <div class="card-meta">
        <span>${a.auteur}</span><span>·</span><span>${a.lecture} min</span>
      </div>
    </div>
  </a>`;
}

function miniHTML(a){
  return `
  <a href="article.html?id=${a.id}" class="mini-article">
    <div class="mini-thumb">${mediaHTML(a.cat, a.titre, null, a.image)}</div>
    <div>
      <span class="eyebrow">${a.catLabel}</span>
      <h4>${a.titre}</h4>
    </div>
  </a>`;
}

function renderHome(){
  const une = document.getElementById('une-slot');
  if(une){
    une.innerHTML = `
      <div class="illus"><img src="img/hero.jpg" alt="Vue de Mopti" loading="lazy" style="width:100%;height:100%;object-fit:cover;" onerror="this.onerror=null; this.outerHTML = HERO_ILLUS;" /></div>
      <div class="scrim"></div>
      <div class="hero-feature-content">
        <span class="tag tag-${UNE.cat}">${UNE.catLabel}</span>
        <h1>${UNE.titre}</h1>
        <div class="hero-meta">
          <span>${UNE.auteur}</span><span>·</span><span>${UNE.lecture} min de lecture</span><span>·</span><span>${UNE.date}</span>
        </div>
      </div>`;
    une.onclick = ()=> location.href = `article.html?id=${UNE.id}`;
    une.style.cursor='pointer';
  }
  const side = document.getElementById('hero-side-slot');
  if(side) side.innerHTML = DERNIERES.slice(0,4).map(miniHTML).join('');

  const dern = document.getElementById('dernieres-slot');
  if(dern) dern.innerHTML = DERNIERES.map(cardHTML).join('');

  const plusLus = document.getElementById('pluslus-slot');
  if(plusLus) plusLus.innerHTML = PLUS_LUS.map((a,i)=>`
    <a href="article.html?id=${a.id}" class="liste-item">
      <span class="rang">${String(i+1).padStart(2,'0')}</span>
      <div>
        <span class="eyebrow">${a.catLabel}</span>
        <h4>${a.titre}</h4>
      </div>
    </a>`).join('');

  const carousel = document.getElementById('carousel-slot');
  if(carousel) carousel.innerHTML = ARTICLES.slice(0,8).map(a=>`
    <div class="carousel-slide">${cardHTML(a)}</div>`).join('');

  const videos = document.getElementById('videos-slot');
  if(videos) videos.innerHTML = ARTICLES.slice(0,3).map(a=>`
    <div class="video-card">
      ${mediaHTML(a.cat, a.titre, null, a.image)}
      <div class="play-btn"><span>▶</span></div>
      <div class="video-title">${a.titre}</div>
    </div>`).join('');

  renderCatTabs();
}

function renderCatTabs(){
  const tabs = document.getElementById('cat-tabs');
  const grid = document.getElementById('cat-grid');
  if(!tabs || !grid) return;
  tabs.innerHTML = CATS.map((c,i)=>`<button class="tab-btn ${i===0?'active':''}" data-cat="${c.slug}">${c.label}</button>`).join('');
  function show(slug){
    const items = ARTICLES.filter(a=>a.cat===slug).slice(0,6);
    grid.innerHTML = items.map(cardHTML).join('');
  }
  show(CATS[0].slug);
  tabs.querySelectorAll('.tab-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      tabs.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      show(btn.dataset.cat);
    });
  });
}

/* ---------- Recherche ---------- */
function setupSearch(){
  const input = document.getElementById('search-input');
  const resultsBox = document.getElementById('search-results');
  if(!input) return;
  input.addEventListener('input', ()=>{
    const q = input.value.trim().toLowerCase();
    if(!resultsBox) return;
    if(q.length < 2){ resultsBox.style.display='none'; return; }
    const res = ARTICLES.filter(a=>a.titre.toLowerCase().includes(q)).slice(0,6);
    resultsBox.style.display = 'block';
    resultsBox.innerHTML = res.length ? res.map(a=>`
      <a href="article.html?id=${a.id}" style="display:block;padding:10px 14px;border-bottom:1px solid var(--ligne-c);font-size:13.5px;">
        <strong>${a.titre}</strong><br><span style="font-family:var(--font-mono);font-size:11px;color:var(--texte-att)">${a.catLabel}</span>
      </a>`).join('') : `<div style="padding:14px;font-size:13px;color:var(--texte-att)">Aucun résultat pour « ${q} »</div>`;
  });
  document.addEventListener('click', (e)=>{
    if(resultsBox && !resultsBox.contains(e.target) && e.target !== input) resultsBox.style.display='none';
  });
}

/* ---------- Thème clair/sombre ---------- */
function setupTheme(){
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');
  const saved = localStorage.getItem('mopti-theme');
  if(saved === 'dark') root.classList.add('dark');
  function icon(){ return root.classList.contains('dark') ? '☀️' : '🌙'; }
  if(btn) btn.textContent = icon();
  window.addEventListener('message', (event)=>{
    if(event.origin !== 'https://giscus.app') return;
    if(event.data.giscus && event.data.giscus.discussion !== undefined){
      syncGiscusTheme();
    }
  });
  if(btn) btn.addEventListener('click', ()=>{
    root.classList.toggle('dark');
    localStorage.setItem('mopti-theme', root.classList.contains('dark') ? 'dark' : 'light');
    btn.textContent = icon();
    syncGiscusTheme();
  });
}

/* ---------- Synchronise le thème des commentaires Giscus avec le site ---------- */
function syncGiscusTheme(){
  const iframe = document.querySelector('iframe.giscus-frame');
  if(!iframe) return;
  const theme = document.documentElement.classList.contains('dark') ? 'dark_dimmed' : 'light';
  iframe.contentWindow.postMessage({ giscus: { setConfig: { theme } } }, 'https://giscus.app');
}

/* ---------- Menu mobile ---------- */
function setupMobileMenu(){
  const btn = document.getElementById('mobile-menu-btn');
  const nav = document.getElementById('navlinks');
  if(btn && nav) btn.addEventListener('click', ()=> nav.classList.toggle('open'));
}

/* ---------- Retour en haut ---------- */
function setupBackToTop(){
  const btn = document.getElementById('backtotop');
  if(!btn) return;
  window.addEventListener('scroll', ()=>{
    btn.classList.toggle('show', window.scrollY > 600);
  });
  btn.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));
}

/* ---------- Carrousel ---------- */
function setupCarousel(){
  const track = document.getElementById('carousel-slot');
  const prev = document.getElementById('carousel-prev');
  const next = document.getElementById('carousel-next');
  if(!track) return;
  const scrollAmt = 360;
  if(prev) prev.addEventListener('click', ()=> track.scrollBy({left:-scrollAmt, behavior:'smooth'}));
  if(next) next.addEventListener('click', ()=> track.scrollBy({left:scrollAmt, behavior:'smooth'}));
}

/* ---------- Newsletter (démo) ---------- */
function setupNewsletter(){
  const form = document.getElementById('newsletter-form');
  if(!form) return;
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const btn = form.querySelector('button');
    const original = btn.textContent;
    btn.textContent = 'Merci pour votre inscription ✓';
    setTimeout(()=> btn.textContent = original, 2500);
    form.reset();
  });
}

/* ---------- Reveal on scroll ---------- */
function setupReveal(){
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{ if(en.isIntersecting) en.target.classList.add('in'); });
  }, {threshold: .12});
  els.forEach(el=>obs.observe(el));
}

/* ---------- Page Article ---------- */
function renderArticlePage(){
  const slot = document.getElementById('article-root');
  if(!slot) return;
  const params = new URLSearchParams(location.search);
  const id = parseInt(params.get('id')) || ARTICLES[0].id;
  const a = ARTICLES.find(x=>x.id===id) || ARTICLES[0];

  document.title = a.titre + ' — Actualités de Mopti';

  document.getElementById('art-tag').outerHTML = `<span id="art-tag" class="tag tag-${a.cat}">${a.catLabel}</span>`;
  document.getElementById('art-titre').textContent = a.titre;
  document.getElementById('art-soustitre').textContent = a.soustitre;
  document.getElementById('art-auteur').textContent = a.auteur;
  document.getElementById('art-avatar').textContent = a.auteur.split(' ').map(s=>s[0]).join('');
  document.getElementById('art-date').textContent = a.date;
  document.getElementById('art-lecture').textContent = a.lecture + ' min de lecture';
  document.getElementById('art-cover').innerHTML = mediaHTML(a.cat, a.titre, null, a.image);

  const corpsEl = document.getElementById('art-corps');
  if(corpsEl && a.corps){ corpsEl.innerHTML = mdish(a.corps); }

  const gal = document.getElementById('art-gallery');
  if(gal) gal.innerHTML = [1,2,3].map(v=>`<div>${mediaHTML(a.cat, a.titre, v===1?null:v)}</div>`).join('');

  const related = document.getElementById('related-slot');
  if(related){
    const rel = ARTICLES.filter(x=>x.cat===a.cat && x.id!==a.id).slice(0,3);
    related.innerHTML = rel.map(cardHTML).join('');
  }
}

/* ---------- Météo de Mopti (Open-Meteo, gratuit, sans clé) ---------- */
const MOPTI_LAT = 14.4843, MOPTI_LON = -4.1996;
const WEATHER_CODES = {
  0:'☀️ Ciel dégagé', 1:'🌤️ Peu nuageux', 2:'⛅ Partiellement nuageux', 3:'☁️ Couvert',
  45:'🌫️ Brumeux', 48:'🌫️ Brouillard givrant',
  51:'🌦️ Bruine légère', 53:'🌦️ Bruine', 55:'🌧️ Bruine dense',
  61:'🌧️ Pluie légère', 63:'🌧️ Pluie', 65:'🌧️ Forte pluie',
  80:'🌦️ Averses', 81:'🌧️ Averses fortes', 82:'⛈️ Averses violentes',
  95:'⛈️ Orage', 96:'⛈️ Orage grêle', 99:'⛈️ Orage violent'
};
async function loadWeather(){
  const el = document.getElementById('weather-badge');
  if(!el) return;
  try{
    const cached = sessionStorage.getItem('mopti-weather');
    if(cached){ el.innerHTML = cached; return; }
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${MOPTI_LAT}&longitude=${MOPTI_LON}&current_weather=true&timezone=auto`;
    const res = await fetch(url);
    if(!res.ok) throw new Error('meteo indisponible');
    const data = await res.json();
    const cw = data.current_weather;
    const desc = WEATHER_CODES[cw.weathercode] || '🌍';
    const html = `${desc} · ${Math.round(cw.temperature)}°C à Mopti`;
    el.innerHTML = html;
    sessionStorage.setItem('mopti-weather', html);
  }catch(e){ /* on garde le texte par défaut si la météo est indisponible */ }
}

/* ---------- Heures de prière à Mopti (Aladhan, gratuit, sans clé) ---------- */
async function loadPrayerTimes(){
  const el = document.getElementById('prayer-times-slot');
  if(!el) return;
  try{
    const cached = sessionStorage.getItem('mopti-prayers');
    let timings;
    if(cached){
      timings = JSON.parse(cached);
    } else {
      const url = `https://api.aladhan.com/v1/timings?latitude=${MOPTI_LAT}&longitude=${MOPTI_LON}&method=2`;
      const res = await fetch(url);
      if(!res.ok) throw new Error('horaires indisponibles');
      const data = await res.json();
      timings = data.data.timings;
      sessionStorage.setItem('mopti-prayers', JSON.stringify(timings));
    }
    const rows = [
      ['Fajr', 'Fajr (aube)'], ['Dhuhr', 'Dhuhr (midi)'], ['Asr', 'Asr (après-midi)'],
      ['Maghrib', 'Maghrib (coucher)'], ['Isha', 'Isha (nuit)']
    ];
    el.innerHTML = rows.map(([key,label])=>`
      <div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid var(--ligne-c); font-size:13.5px;">
        <span>${label}</span><span style="font-family:var(--font-mono); font-weight:700; color:var(--accent);">${timings[key]}</span>
      </div>`).join('');
  }catch(e){
    el.innerHTML = `<div style="font-size:12.5px; color:var(--texte-att);">Horaires indisponibles pour le moment.</div>`;
  }
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', async ()=>{
  setupTheme();
  setupMobileMenu();
  setupBackToTop();
  setupSearch();
  setupNewsletter();
  loadWeather();
  loadPrayerTimes();

  REAL_ARTICLES = await loadRealArticles();
  ARTICLES = REAL_ARTICLES.concat(DEMO_ARTICLES);
  refreshDerivedLists();
  document.dispatchEvent(new CustomEvent('mopti:articles-ready'));

  renderHome();
  setupCarousel();
  renderArticlePage();
  setupReveal();
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();
});
