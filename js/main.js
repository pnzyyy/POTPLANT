/**
 * POTPLANT – Editorial Luxury
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
    image: 'images/terra-flow.svg',
    description: 'Der Terra Flow vereint zeitlose Terrakotta-Ästhetik mit modernster Bewässerungstechnik. Das handgefertigte Design bringt Wärme und Natur in jeden Raum.',
    descriptionLong: 'Der Terra Flow vereint zeitlose Terrakotta-Ästhetik mit modernster Bewässerungstechnik. Das handgefertigte Design bringt Wärme und Natur in jeden Raum. Dank des integrierten Reservoirs müssen Sie nur alle 2–4 Wochen nachfüllen.',
    specs: [
      'Reservoir: 0,8 L',
      '2–4 Wochen autonom',
      'Ø 18 cm, Höhe 32 cm',
      'Für alle Zimmerpflanzen',
    ],
  },
  {
    id: 'marble-oasis',
    name: 'Marble Oasis',
    material: 'Zement & Marmor',
    price: 189,
    image: 'images/marble-oasis.svg',
    description: 'Luxuriöses Marmorfinish in Handarbeit gefertigt. Jedes Stück ist ein Unikat — die natürlichen Äderungen machen jeden Topf unverwechselbar.',
    descriptionLong: 'Luxuriöses Marmorfinish in Handarbeit gefertigt. Jedes Stück ist ein Unikat — die natürlichen Äderungen machen jeden Topf unverwechselbar. Das stille, selbstregulierende Bewässerungssystem hält Ihre Pflanze perfekt versorgt.',
    specs: [
      'Reservoir: 1,2 L',
      '3–4 Wochen autonom',
      'Ø 22 cm, Höhe 38 cm',
      'Ideal für Monstera',
    ],
  },
  {
    id: 'nordic-mist',
    name: 'Nordic Mist',
    material: 'Steinzeug',
    price: 139,
    image: 'images/nordic-mist.svg',
    description: 'Skandinavisches Minimaldesign trifft auf smarte Bewässerung. Passt perfekt in moderne und natürliche Einrichtungskonzepte.',
    descriptionLong: 'Skandinavisches Minimaldesign trifft auf smarte Bewässerung. Der Nordic Mist passt perfekt in moderne und natürliche Einrichtungskonzepte. Die quadratische Form schafft ein harmonisches Gleichgewicht.',
    specs: [
      'Reservoir: 0,6 L',
      '2–3 Wochen autonom',
      '16×16 cm, Höhe 28 cm',
      'Perfekt für Kräuter',
    ],
  },
  {
    id: 'zen-stone',
    name: 'Zen Stone',
    material: 'Steingut',
    price: 149,
    image: 'images/zen-stone.svg',
    description: 'Die flache, breite Schale im Bonsai-Stil verleiht Ihrem Zuhause eine ruhige, meditative Atmosphäre.',
    descriptionLong: 'Die flache, breite Schale im Bonsai-Stil verleiht Ihrem Zuhause eine ruhige, meditative Atmosphäre. Das robuste Steingut reguliert die Feuchtigkeit optimal.',
    specs: [
      'Reservoir: 0,5 L',
      '2–4 Wochen autonom',
      'Ø 28 cm, Höhe 14 cm',
      'Für Bonsai & Sukkulenten',
    ],
  },
  {
    id: 'jungle-soul',
    name: 'Jungle Soul',
    material: 'Glasiertes Steinzeug',
    price: 159,
    image: 'images/jungle-soul.svg',
    description: 'Für großblättrige Tropenpflanzen entwickelt. Das großzügige Reservoir versorgt selbst Durststrecken-Liebhaber problemlos über Wochen.',
    descriptionLong: 'Für großblättrige Tropenpflanzen wie Fiddle Leaf, Bird of Paradise oder Calathea entwickelt. Das großzügige Reservoir versorgt selbst Durststrecken-Liebhaber problemlos über Wochen.',
    specs: [
      'Reservoir: 1,5 L',
      '3–4 Wochen autonom',
      'Ø 26 cm, Höhe 36 cm',
      'Für Tropenpflanzen',
    ],
  },
  {
    id: 'sahara-dream',
    name: 'Sahara Dream',
    material: 'Handbemalte Keramik',
    price: 249,
    image: 'images/sahara-dream.svg',
    description: 'Inspiriert von den Amphoren der antiken Welt — handgefertigte Keramik mit warmem Wüstencharakter. Eine lebende Skulptur.',
    descriptionLong: 'Inspiriert von den Amphoren der antiken Welt — handgefertigte Keramik mit warmem Wüstencharakter und geometrischen Mustern. Jedes Exemplar wird in kleiner Auflage gefertigt.',
    specs: [
      'Reservoir: 0,9 L',
      '4–6 Wochen autonom',
      'Ø 20 cm, Höhe 42 cm',
      'Ideal für Kakteen',
    ],
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

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function addToCart(productId, qty = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: productId, name: product.name, price: product.price, image: product.image, qty });
  }
  saveCart();
  updateCartUI();
  renderCartItems();
  showToast(`${product.name} — hinzugefügt`);
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function updateCartQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
    return;
  }
  saveCart();
  updateCartUI();
  renderCartItems();
}

function updateCartUI() {
  const count = getCartCount();
  const countEl = document.getElementById('nav-cart-count');
  if (countEl) countEl.textContent = count > 0 ? count : '';
}

function renderCartItems() {
  const itemsEl = document.getElementById('cart-items');
  const footerEl = document.getElementById('cart-footer');
  const emptyEl = document.getElementById('cart-empty');
  const totalEl = document.getElementById('cart-total');
  if (!itemsEl) return;

  const isEmpty = cart.length === 0;

  if (emptyEl) {
    emptyEl.style.display = isEmpty ? 'flex' : 'none';
  }
  if (footerEl) {
    footerEl.style.display = isEmpty ? 'none' : 'block';
  }

  if (!isEmpty && totalEl) {
    totalEl.textContent = getCartTotal().toLocaleString('de-DE') + ' €';
  }

  itemsEl.innerHTML = '';
  cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <div class="cart-item__img">
        <img src="${item.image}" alt="${item.name}" />
      </div>
      <div class="cart-item__info">
        <div class="cart-item__name">${item.name}</div>
        <div class="cart-item__price">${item.price} €</div>
        <div class="cart-item__qty">
          <button class="cart-item__qty-btn" data-id="${item.id}" data-delta="-1">−</button>
          <span class="cart-item__qty-val">${item.qty}</span>
          <button class="cart-item__qty-btn" data-id="${item.id}" data-delta="1">+</button>
        </div>
      </div>
      <button class="cart-item__remove" data-id="${item.id}" aria-label="Entfernen">Entf.</button>
    `;
    itemsEl.appendChild(div);
  });

  // Bind qty and remove buttons
  itemsEl.querySelectorAll('.cart-item__qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      updateCartQty(btn.dataset.id, parseInt(btn.dataset.delta));
    });
  });
  itemsEl.querySelectorAll('.cart-item__remove').forEach(btn => {
    btn.addEventListener('click', () => {
      removeFromCart(btn.dataset.id);
    });
  });
}

// ── Toast ────────────────────────────────────────────────────
let toastTimeout;
function showToast(message) {
  const toast = document.querySelector('.toast');
  if (!toast) return;
  toast.querySelector('.toast__message').textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 2800);
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
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        <div class="product-card__overlay">
          <span class="product-card__discover">Entdecken →</span>
        </div>
      </div>
      <div class="product-card__body">
        <div class="product-card__name">${product.name}</div>
        <div class="product-card__price">${product.price} €</div>
      </div>
    `;

    card.addEventListener('click', () => openModal(product.id));
    grid.appendChild(card);
  });
}

// ── Product Modal ─────────────────────────────────────────────
let currentModalQty = 1;
let currentModalProductId = null;

function openModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  currentModalQty = 1;
  currentModalProductId = productId;

  let overlay = document.getElementById('modal-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'modal-overlay';
    overlay.innerHTML = `
      <div class="modal" id="modal-content" role="dialog" aria-modal="true">
        <button class="modal__close" id="modal-close" aria-label="Schließen">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.2">
            <path stroke-linecap="square" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    `;
    document.body.appendChild(overlay);

    overlay.addEventListener('click', e => {
      if (e.target === overlay) closeModal();
    });
    overlay.querySelector('#modal-close').addEventListener('click', closeModal);
  }

  const specsHtml = product.specs.map(s => `<div class="modal__spec-item">${s}</div>`).join('');

  const modalContent = overlay.querySelector('#modal-content');
  // Preserve close button
  const closeBtn = modalContent.querySelector('#modal-close');

  modalContent.innerHTML = `
    <button class="modal__close" id="modal-close" aria-label="Schließen">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.2">
        <path stroke-linecap="square" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>
    <div class="modal__image-area">
      <img src="${product.image}" alt="${product.name}" />
    </div>
    <div class="modal__body">
      <div class="modal__material">${product.material}</div>
      <h2 class="modal__name">${product.name}</h2>
      <p class="modal__desc">${product.descriptionLong}</p>
      <div class="modal__specs">${specsHtml}</div>
      <div class="modal__price-row">
        <span class="modal__price">${product.price} €</span>
        <span class="modal__price-vat">inkl. MwSt.</span>
      </div>
      <div class="modal__actions">
        <div class="modal__qty">
          <button class="modal__qty-btn" id="modal-qty-minus">−</button>
          <span class="modal__qty-val" id="modal-qty-val">1</span>
          <button class="modal__qty-btn" id="modal-qty-plus">+</button>
        </div>
        <button class="modal__add-btn" id="modal-add-btn">In den Warenkorb</button>
      </div>
    </div>
  `;

  modalContent.querySelector('#modal-close').addEventListener('click', closeModal);

  modalContent.querySelector('#modal-qty-minus').addEventListener('click', () => {
    if (currentModalQty > 1) {
      currentModalQty--;
      modalContent.querySelector('#modal-qty-val').textContent = currentModalQty;
    }
  });

  modalContent.querySelector('#modal-qty-plus').addEventListener('click', () => {
    currentModalQty++;
    modalContent.querySelector('#modal-qty-val').textContent = currentModalQty;
  });

  modalContent.querySelector('#modal-add-btn').addEventListener('click', () => {
    addToCart(currentModalProductId, currentModalQty);
    closeModal();
  });

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}

// ── Navigation ────────────────────────────────────────────────
function initNavigation() {
  const nav = document.getElementById('nav');
  const hamburger = document.getElementById('nav-hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileClose = document.getElementById('mobile-menu-close');
  const cartBtn = document.getElementById('nav-cart-btn');
  const cartPanel = document.getElementById('cart-panel');
  const cartOverlay = document.getElementById('cart-overlay');
  const cartClose = document.getElementById('cart-close');

  // Scroll: add scrolled class
  function onScroll() {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu toggle
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('open');
      mobileMenu.setAttribute('aria-hidden', mobileMenu.classList.contains('open') ? 'false' : 'true');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
  }

  if (mobileClose) {
    mobileClose.addEventListener('click', closeMobileMenu);
  }

  if (mobileMenu) {
    mobileMenu.querySelectorAll('.mobile-menu__link').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });
  }

  function closeMobileMenu() {
    if (!mobileMenu || !hamburger) return;
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    hamburger.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Cart panel
  function openCart() {
    if (!cartPanel || !cartOverlay) return;
    cartPanel.classList.add('open');
    cartOverlay.classList.add('open');
    cartPanel.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    renderCartItems();
  }

  function closeCart() {
    if (!cartPanel || !cartOverlay) return;
    cartPanel.classList.remove('open');
    cartOverlay.classList.remove('open');
    cartPanel.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (cartBtn) cartBtn.addEventListener('click', openCart);
  if (cartClose) cartClose.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

  const checkoutBtn = document.getElementById('cart-checkout');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      showToast('Kasse wird vorbereitet…');
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
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ── FAQ Accordion ──────────────────────────────────────────────
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
      btn.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
    });
  });
}

// ── Newsletter ─────────────────────────────────────────────────
function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const input = form.querySelector('.newsletter-input');
    const btn = form.querySelector('.newsletter-btn');
    if (!input.value || !input.value.includes('@')) {
      input.style.outline = '1px solid rgba(244, 241, 236, 0.4)';
      setTimeout(() => input.style.outline = '', 2000);
      return;
    }
    const original = btn.textContent;
    btn.textContent = 'Angemeldet';
    input.value = '';
    setTimeout(() => { btn.textContent = original; }, 4000);
  });
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

// ── Custom Cursor ─────────────────────────────────────────────
function initCursor() {
  const cursor = document.getElementById('cursor');
  if (!cursor) return;

  // Disable on touch devices
  if (window.matchMedia('(hover: none)').matches) {
    cursor.style.display = 'none';
    return;
  }

  const ring = cursor.querySelector('.cursor__ring');
  const dot = cursor.querySelector('.cursor__dot');

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;
  let raf;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
  }, { passive: true });

  function animateCursor() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
    raf = requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Expand on interactive elements
  const interactive = 'a, button, [role="button"], .product-card, .faq-question, input';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(interactive)) {
      cursor.classList.add('cursor--expanded');
    }
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(interactive)) {
      cursor.classList.remove('cursor--expanded');
    }
  });
}

// ── Keyboard Accessibility ─────────────────────────────────────
function initKeyboard() {
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeModal();
      const cartPanel = document.getElementById('cart-panel');
      const cartOverlay = document.getElementById('cart-overlay');
      if (cartPanel && cartPanel.classList.contains('open')) {
        cartPanel.classList.remove('open');
        if (cartOverlay) cartOverlay.classList.remove('open');
        document.body.style.overflow = '';
      }
      const mobileMenu = document.getElementById('mobile-menu');
      const hamburger = document.getElementById('nav-hamburger');
      if (mobileMenu && mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
        if (hamburger) hamburger.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  });
}

// ── Init ───────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  initNavigation();
  initScrollAnimations();
  initFAQ();
  initNewsletter();
  initSmoothScroll();
  initCursor();
  initKeyboard();
  updateCartUI();

  // Initial cart empty state
  const emptyEl = document.getElementById('cart-empty');
  const footerEl = document.getElementById('cart-footer');
  if (emptyEl) emptyEl.style.display = 'flex';
  if (footerEl) footerEl.style.display = 'none';
});
