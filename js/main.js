/**
 * POTPLANT – Premium Designer Self-Watering Pots
 * Main JavaScript
 */

'use strict';

// ── Product Data ─────────────────────────────────────────────
const PRODUCTS = [
  {
    id: 'terra-flow',
    name: 'Terra Flow',
    material: 'Terrakotta',
    price: 119,
    badge: 'Bestseller',
    badgeClass: 'badge--bestseller',
    image: 'images/terra-flow.svg',
    description: 'Der Terra Flow vereint zeitlose Terrakotta-Ästhetik mit modernster Bewässerungstechnik. Das handgefertigte Design bringt Wärme und Natur in jeden Raum.',
    descriptionLong: 'Der Terra Flow vereint zeitlose Terrakotta-Ästhetik mit modernster Bewässerungstechnik. Das handgefertigte Design bringt Wärme und Natur in jeden Raum. Dank des integrierten Reservoirs müssen Sie nur alle 2–4 Wochen nachfüllen – Ihre Pflanze reguliert ihren Wasserverbrauch selbst.',
    specs: [
      { icon: 'drop', text: 'Reservoir: 0,8 L' },
      { icon: 'clock', text: '2–4 Wochen autonom' },
      { icon: 'ruler', text: 'Ø 18 cm, Höhe 32 cm' },
      { icon: 'plant', text: 'Für alle Zimmer&shy;pflanzen' },
    ],
    rating: 4.9,
    reviews: 214,
    color: '#C27B5A',
  },
  {
    id: 'marble-oasis',
    name: 'Marble Oasis',
    material: 'Zement & Marmor',
    price: 189,
    badge: 'Neu',
    badgeClass: 'badge--new',
    image: 'images/marble-oasis.svg',
    description: 'Luxuriöses Marmorfinish in Handarbeit gefertigt. Jedes Stück ist ein Unikat – die natürlichen Äderungen machen jeden Topf unverwechselbar.',
    descriptionLong: 'Luxuriöses Marmorfinish in Handarbeit gefertigt. Jedes Stück ist ein Unikat – die natürlichen Äderungen machen jeden Topf unverwechselbar. Das stille, selbstregulierende Bewässerungssystem hält Ihre Monstera, Dracaena oder Orchidee perfekt versorgt.',
    specs: [
      { icon: 'drop', text: 'Reservoir: 1,2 L' },
      { icon: 'clock', text: '3–4 Wochen autonom' },
      { icon: 'ruler', text: 'Ø 22 cm, Höhe 38 cm' },
      { icon: 'plant', text: 'Ideal für Monstera' },
    ],
    rating: 4.8,
    reviews: 97,
    color: '#888',
  },
  {
    id: 'nordic-mist',
    name: 'Nordic Mist',
    material: 'Steinzeug',
    price: 139,
    badge: null,
    badgeClass: null,
    image: 'images/nordic-mist.svg',
    description: 'Skandinavisches Minimaldesign trifft auf smarte Bewässerung. Der Nordic Mist passt perfekt in moderne und natürliche Einrichtungskonzepte.',
    descriptionLong: 'Skandinavisches Minimaldesign trifft auf smarte Bewässerung. Der Nordic Mist passt perfekt in moderne und natürliche Einrichtungskonzepte. Die quadratische Form mit abgerundeten Ecken schafft ein harmonisches Gleichgewicht – ideal für Lavendel, Kräuter und Succulenten.',
    specs: [
      { icon: 'drop', text: 'Reservoir: 0,6 L' },
      { icon: 'clock', text: '2–3 Wochen autonom' },
      { icon: 'ruler', text: '16×16 cm, Höhe 28 cm' },
      { icon: 'plant', text: 'Perfekt für Kräuter' },
    ],
    rating: 4.7,
    reviews: 143,
    color: '#8B9EA5',
  },
  {
    id: 'zen-stone',
    name: 'Zen Stone',
    material: 'Steingut',
    price: 149,
    badge: null,
    badgeClass: null,
    image: 'images/zen-stone.svg',
    description: 'Die flache, breite Schale im Bonsai-Stil verleiht Ihrem Zuhause eine ruhige, meditative Atmosphäre. Perfekt für Bonsai und bodendeckende Pflanzen.',
    descriptionLong: 'Die flache, breite Schale im Bonsai-Stil verleiht Ihrem Zuhause eine ruhige, meditative Atmosphäre. Das robuste Steingut reguliert die Feuchtigkeit optimal und das integrierte Wasserstandsanzeige-System zeigt auf einen Blick, wann nachgefüllt werden muss.',
    specs: [
      { icon: 'drop', text: 'Reservoir: 0,5 L' },
      { icon: 'clock', text: '2–4 Wochen autonom' },
      { icon: 'ruler', text: 'Ø 28 cm, Höhe 14 cm' },
      { icon: 'plant', text: 'Für Bonsai & Succ.' },
    ],
    rating: 4.9,
    reviews: 88,
    color: '#7D6055',
  },
  {
    id: 'jungle-soul',
    name: 'Jungle Soul',
    material: 'Glasiertes Steinzeug',
    price: 159,
    badge: 'Limitiert',
    badgeClass: 'badge--limited',
    image: 'images/jungle-soul.svg',
    description: 'Üppiges Grün in tiefem Smaragdglanz. Der Jungle Soul wurde für großblättrige Tropenpflanzen entwickelt und fügt jede Pflanze in die Szene.',
    descriptionLong: 'Üppiges Grün in tiefem Smaragdglanz. Der Jungle Soul wurde speziell für großblättrige Tropenpflanzen wie Fiddle Leaf, Bird of Paradise oder Calathea entwickelt. Das großzügige Reservoir versorgt selbst Durststrecken-Liebhaber problemlos über Wochen.',
    specs: [
      { icon: 'drop', text: 'Reservoir: 1,5 L' },
      { icon: 'clock', text: '3–4 Wochen autonom' },
      { icon: 'ruler', text: 'Ø 26 cm, Höhe 36 cm' },
      { icon: 'plant', text: 'Für Tropenpflanzen' },
    ],
    rating: 4.8,
    reviews: 62,
    color: '#2E7D32',
  },
  {
    id: 'sahara-dream',
    name: 'Sahara Dream',
    material: 'Handbemalte Keramik',
    price: 249,
    badge: 'Neu',
    badgeClass: 'badge--new',
    image: 'images/sahara-dream.svg',
    description: 'Inspiriert von den Amphoren der antiken Welt – handgefertigte Keramik mit warmem Wüstencharakter. Eine lebende Skulptur für Ihre Wohnung.',
    descriptionLong: 'Inspiriert von den Amphoren der antiken Welt – handgefertigte Keramik mit warmem Wüstencharakter und geometrischen Mustern. Jedes Exemplar wird in kleiner Auflage von deutschen Keramikmeistern gefertigt. Das selbstregulierende Bewässerungssystem ist ideal für Kakteen, Sukkulenten und mediterrane Pflanzen.',
    specs: [
      { icon: 'drop', text: 'Reservoir: 0,9 L' },
      { icon: 'clock', text: '4–6 Wochen autonom' },
      { icon: 'ruler', text: 'Ø 20 cm, Höhe 42 cm' },
      { icon: 'plant', text: 'Ideal für Kakteen' },
    ],
    rating: 5.0,
    reviews: 34,
    color: '#D4935A',
  },
];

// ── Cart State ───────────────────────────────────────────────
let cart = JSON.parse(localStorage.getItem('potplant_cart') || '[]');

function saveCart() {
  localStorage.setItem('potplant_cart', JSON.stringify(cart));
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function addToCart(productId, qty = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: productId, name: product.name, price: product.price, qty });
  }
  saveCart();
  updateCartUI();
  showToast(`${product.name} zum Warenkorb hinzugefügt`);
}

function updateCartUI() {
  const count = getCartCount();
  // Nav badge
  document.querySelectorAll('.nav__cart-badge, .floating-cart__count').forEach(el => {
    el.textContent = count;
  });
  const badge = document.querySelector('.nav__cart-badge');
  if (badge) badge.classList.toggle('show', count > 0);

  // Floating button
  const floatingCart = document.querySelector('.floating-cart');
  if (floatingCart) {
    floatingCart.classList.toggle('show', count > 0);
  }
}

// ── Toast Notification ───────────────────────────────────────
let toastTimeout;
function showToast(message) {
  const toast = document.querySelector('.toast');
  if (!toast) return;
  toast.querySelector('.toast__message').textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 3200);
}

// ── SVG Icons ────────────────────────────────────────────────
const ICONS = {
  cart: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0"/></svg>`,
  plus: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>`,
  close: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>`,
  star: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
  drop: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/></svg>`,
  clock: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path stroke-linecap="round" d="M12 6v6l4 2"/></svg>`,
  ruler: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l4-4 4 4 4-4 4 4M3 12v6h18v-6"/></svg>`,
  plant: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 22V12m0 0C12 7 7 4 3 5c0 4 3 8 9 7zm0 0c0-5 5-8 9-7-1 4-4 8-9 7"/></svg>`,
  checkCircle: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
  arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m-7-7l7 7-7 7"/></svg>`,
};

// ── DOM Builder Helpers ──────────────────────────────────────
function el(tag, attrs = {}, ...children) {
  const element = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => {
    if (k === 'class') element.className = v;
    else if (k === 'html') element.innerHTML = v;
    else if (k.startsWith('data-')) element.setAttribute(k, v);
    else element[k] = v;
  });
  children.forEach(child => {
    if (typeof child === 'string') element.appendChild(document.createTextNode(child));
    else if (child) element.appendChild(child);
  });
  return element;
}

function renderStars(rating) {
  return Array.from({ length: 5 }, (_, i) => {
    const star = document.createElement('span');
    star.style.color = i < Math.floor(rating) ? '#F6A623' : '#D4C5B0';
    star.innerHTML = ICONS.star;
    return star;
  });
}

// ── Render Products ──────────────────────────────────────────
function renderProducts() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  PRODUCTS.forEach((product, i) => {
    const card = document.createElement('div');
    card.className = `product-card reveal reveal-delay-${(i % 3) + 1}`;
    card.setAttribute('data-product-id', product.id);

    card.innerHTML = `
      <div class="product-card__image-wrap">
        <img src="${product.image}" alt="${product.name}" loading="lazy"/>
        ${product.badge ? `<span class="product-card__badge ${product.badgeClass}">${product.badge}</span>` : ''}
        <div class="product-card__quick-view">Jetzt ansehen</div>
      </div>
      <div class="product-card__body">
        <div class="product-card__material">${product.material}</div>
        <div class="product-card__name">${product.name}</div>
        <p class="product-card__desc">${product.description}</p>
        <div class="product-card__footer">
          <div class="product-card__price">${product.price} €<sub>inkl. MwSt.</sub></div>
          <button class="product-card__add" aria-label="In den Warenkorb" data-product-id="${product.id}">
            ${ICONS.plus}
          </button>
        </div>
      </div>
    `;

    // Open modal on card click
    card.addEventListener('click', (e) => {
      if (e.target.closest('.product-card__add')) {
        e.stopPropagation();
        addToCart(product.id);
        return;
      }
      openModal(product.id);
    });

    grid.appendChild(card);
  });
}

// ── Product Modal ─────────────────────────────────────────────
let currentModalQty = 1;

function openModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  currentModalQty = 1;

  const overlay = document.getElementById('modal-overlay');
  const modalContent = document.getElementById('modal-content');

  const starsHtml = Array.from({ length: 5 }, (_, i) =>
    `<span style="color:${i < Math.floor(product.rating) ? '#F6A623' : '#D4C5B0'}">${ICONS.star}</span>`
  ).join('');

  const specsHtml = product.specs.map(s =>
    `<div class="modal__spec-item">${ICONS[s.icon] || ICONS.checkCircle} <span>${s.text}</span></div>`
  ).join('');

  modalContent.innerHTML = `
    <div class="modal__image-area">
      <img src="${product.image}" alt="${product.name}" />
    </div>
    <div class="modal__body">
      <div class="modal__material">${product.material}</div>
      <h2 class="modal__name">${product.name}</h2>
      <div class="modal__stars">
        <div class="modal__stars-icons">${starsHtml}</div>
        <span class="modal__stars-count">${product.rating} (${product.reviews} Bewertungen)</span>
      </div>
      <p class="modal__desc">${product.descriptionLong}</p>
      <div class="modal__specs">${specsHtml}</div>
      <div class="modal__price-row">
        <span class="modal__price">${product.price} €</span>
        <span class="modal__price-vat">inkl. MwSt. + kostenloser Versand ab 99 €</span>
      </div>
      <div class="modal__actions">
        <div class="modal__qty">
          <button class="modal__qty-btn" id="modal-qty-minus">−</button>
          <span class="modal__qty-val" id="modal-qty-val">1</span>
          <button class="modal__qty-btn" id="modal-qty-plus">+</button>
        </div>
        <button class="btn btn--primary" id="modal-add-btn" style="flex:1">
          ${ICONS.cart} In den Warenkorb
        </button>
      </div>
    </div>
  `;

  // Qty buttons
  document.getElementById('modal-qty-minus').addEventListener('click', () => {
    if (currentModalQty > 1) {
      currentModalQty--;
      document.getElementById('modal-qty-val').textContent = currentModalQty;
    }
  });

  document.getElementById('modal-qty-plus').addEventListener('click', () => {
    currentModalQty++;
    document.getElementById('modal-qty-val').textContent = currentModalQty;
  });

  document.getElementById('modal-add-btn').addEventListener('click', () => {
    addToCart(productId, currentModalQty);
    closeModal();
  });

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

// ── Navigation ────────────────────────────────────────────────
function initNavigation() {
  const nav = document.querySelector('.nav');
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileNav = document.querySelector('.nav__mobile');

  // Scroll effect
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  // Hamburger toggle
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });

    // Close on link click
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }
}

// ── Scroll Animations ─────────────────────────────────────────
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ── Parallax ──────────────────────────────────────────────────
function initParallax() {
  const heroVisual = document.querySelector('.hero__visual');
  if (!heroVisual) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const factor = 0.25;
        if (scrollY < window.innerHeight) {
          heroVisual.style.transform = `translateY(${scrollY * factor}px)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

// ── FAQ Accordion ──────────────────────────────────────────────
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item.open').forEach(openItem => {
        openItem.classList.remove('open');
      });

      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
}

// ── Newsletter Form ────────────────────────────────────────────
function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('.newsletter-input');
    const btn = form.querySelector('button[type="submit"]');
    if (!input.value || !input.value.includes('@')) {
      input.style.borderColor = '#E57373';
      setTimeout(() => input.style.borderColor = '', 2000);
      return;
    }
    btn.textContent = '✓ Angemeldet!';
    btn.style.background = 'var(--clr-sage)';
    input.value = '';
    setTimeout(() => {
      btn.textContent = 'Anmelden';
      btn.style.background = '';
    }, 4000);
  });
}

// ── Loading Screen ─────────────────────────────────────────────
function initLoadingScreen() {
  const loader = document.getElementById('loading-screen');
  if (!loader) return;

  // Complete after animation
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 1900);
  });

  // Fallback
  setTimeout(() => {
    loader.classList.add('hidden');
  }, 2800);
}

// ── Smooth Anchor Scroll ───────────────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// ── Counter Animation ──────────────────────────────────────────
function animateCounter(el, target, suffix = '') {
  const duration = 1600;
  const start = performance.now();
  const startVal = 0;

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(startVal + (target - startVal) * eased);
    el.textContent = current + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-counter'));
        const suffix = el.getAttribute('data-suffix') || '';
        animateCounter(el, target, suffix);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

// ── Micro-interaction: Product Add to Cart animation ──────────
function initAddToCartAnimations() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.product-card__add');
    if (!btn) return;

    // Ripple
    const ripple = document.createElement('span');
    ripple.style.cssText = `
      position:absolute;
      border-radius:50%;
      background:rgba(255,255,255,0.4);
      transform:scale(0);
      animation:ripple 0.5s ease-out forwards;
      width:40px;height:40px;
      left:0;top:0;
      pointer-events:none;
    `;
    btn.style.position = 'relative';
    btn.style.overflow = 'hidden';
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });

  // Inject ripple keyframes
  const style = document.createElement('style');
  style.textContent = `@keyframes ripple { to { transform: scale(2.5); opacity: 0; } }`;
  document.head.appendChild(style);
}

// ── Gallery hover text ─────────────────────────────────────────
function initGallery() {
  // Already handled via CSS
}

// ── Init ───────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initLoadingScreen();
  renderProducts();
  initNavigation();
  initScrollAnimations();
  initParallax();
  initFAQ();
  initNewsletter();
  initSmoothScroll();
  initCounters();
  initAddToCartAnimations();
  initGallery();
  updateCartUI();

  // Modal events
  const overlay = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('modal-close');
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });
  }
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  // Keyboard close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Floating cart scroll trigger is managed by updateCartUI

  // CTA hero scroll to products
  const heroCta = document.getElementById('hero-cta');
  if (heroCta) {
    heroCta.addEventListener('click', () => {
      document.querySelector('#products').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
});
