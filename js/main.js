document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMobileMenu = document.getElementById("close-mobile-menu");
  const mobileBackdrop = document.getElementById('mobile-backdrop');

  // Masquer le menu au chargement
  if (mobileMenu) mobileMenu.classList.remove("open");

  const openMenu = () => {
    if (!mobileMenu) return;
    mobileMenu.classList.add("open");
    // Force styles in case CSS class isn't applied
    try {
      mobileMenu.style.transform = 'translateX(0)';
      mobileMenu.style.visibility = 'visible';
      mobileMenu.style.opacity = '1';
      mobileMenu.style.pointerEvents = 'auto';
    } catch {}
    if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    if (mobileBackdrop) mobileBackdrop.classList.remove('hidden');
  };
  const closeMenu = () => {
    if (!mobileMenu) return;
    mobileMenu.classList.remove("open");
    try {
      mobileMenu.style.transform = 'translateX(100%)';
      mobileMenu.style.visibility = 'hidden';
      mobileMenu.style.opacity = '0';
      mobileMenu.style.pointerEvents = 'none';
    } catch {}
    if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    if (mobileBackdrop) mobileBackdrop.classList.add('hidden');
  };

  // Ouvrir/Fermer via boutons
  if (mobileMenuBtn) {
    mobileMenuBtn.setAttribute('aria-controls', 'mobile-menu');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    mobileMenuBtn.addEventListener("click", openMenu);
  }
  if (closeMobileMenu) closeMobileMenu.addEventListener("click", closeMenu);
  if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeMenu);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  // Fermer le menu quand on clique sur un lien du menu (sauf toggles de sous-menu)
  document.querySelectorAll('#mobile-menu a').forEach(link => {
    if (link.classList.contains('submenu-toggle')) return;
    link.addEventListener('click', closeMenu);
  });

  // Délégation d'événements (fiabilité mobile)
  document.addEventListener('click', (e) => {
    const target = e.target;
    if (!(target instanceof Element)) return;
    if (target.closest('#mobile-menu-button')) {
      e.preventDefault();
      openMenu();
    } else if (target.closest('#close-mobile-menu')) {
      e.preventDefault();
      closeMenu();
    } else {
      // Toggle sous-menu mobile
      const toggle = target.closest('#mobile-menu .submenu-toggle');
      if (toggle) {
        const submenuId = toggle.getAttribute('aria-controls');
        const submenu = submenuId ? document.getElementById(submenuId) : toggle.nextElementSibling;
        if (!submenu) return;
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        if (!expanded) {
          // première tape: ouvrir sans naviguer
          e.preventDefault();
        }
        toggle.setAttribute('aria-expanded', expanded ? 'false' : 'true');
        submenu.classList.toggle('hidden', expanded);
        submenu.classList.toggle('block', !expanded);
        const chev = toggle.querySelector('.mnav-chevron');
        if (chev) chev.classList.toggle('rotate-90', !expanded);
      }
    }
  });
});

// Smooth scroll for elements with data-scroll
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('[data-scroll]').forEach(el => {
        el.addEventListener('click', (e) => {
            const target = el.getAttribute('data-scroll');
            if (!target) return;
            const node = document.querySelector(target);
            if (node) {
                e.preventDefault();
                node.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                // fallback: update hash
                location.hash = target;
            }
        });
    });
});
// Toggle FAQ answers (robust event delegation)
document.addEventListener('click', (e) => {
  const el = e.target;
  if (!(el instanceof Element)) return;
  const toggle = el.closest('.faq-toggle');
  if (!toggle) return;
  const content = toggle.nextElementSibling;
  if (!content) return;
  const wasHidden = content.classList.contains('hidden');
  if (wasHidden) {
    content.classList.remove('hidden');
    content.classList.add('block');
    toggle.setAttribute('aria-expanded', 'true');
  } else {
    content.classList.add('hidden');
    content.classList.remove('block');
    toggle.setAttribute('aria-expanded', 'false');
  }
  const icon = toggle.querySelector('i');
  if (icon) icon.classList.toggle('rotate-180');
});

// --- Simple Cart Logic (localStorage) ---
document.addEventListener("DOMContentLoaded", () => {
  const STORAGE_KEY = 'ue_cart_v1';

  const getCart = () => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
    catch { return []; }
  };
  const saveCart = (cart) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  };
  const formatPrice = (n) => new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(n);

  const updateCartCount = () => {
    const cart = getCart();
    const count = cart.reduce((sum, it) => sum + (it.qty || 1), 0);
    document.querySelectorAll('.cart-count').forEach(el => {
      el.textContent = String(count);
      el.classList.remove('bump');
      // trigger reflow to restart animation
      void el.offsetWidth;
      el.classList.add('bump');
    });
  };

  const addToCart = (item) => {
    const cart = getCart();
    const idx = cart.findIndex(it => it.id === item.id && it.variant === item.variant);
    if (idx >= 0) {
      cart[idx].qty = (cart[idx].qty || 1) + (item.qty || 1);
    } else {
      var newItem = {};
      Object.keys(item || {}).forEach(function(k){ newItem[k] = item[k]; });
      newItem.qty = (item && item.qty) ? item.qty : 1;
      cart.push(newItem);
    }
    saveCart(cart);
    updateCartCount();
  };

  // Hook product buttons
  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-id') || (window.crypto && typeof window.crypto.randomUUID === 'function' ? window.crypto.randomUUID() : ('id_' + Math.random().toString(36).slice(2)));
      const name = btn.getAttribute('data-name') || 'Article';
      const price = parseFloat(btn.getAttribute('data-price') || '0');
      addToCart({ id, name, price, variant: null, qty: 1 });
    });
  });

  // Hook personalization form add button
  document.querySelectorAll('.add-to-cart-custom').forEach(btn => {
    btn.addEventListener('click', (e) => {
      // let the form submit if needed; here we only add to cart and prevent default
      e.preventDefault();
      const price = parseFloat(btn.getAttribute('data-price') || '0');
      const name = 'Cadre personnalisé';
      addToCart({ id: 'custom', name, price, variant: null, qty: 1 });
    });
  });

  // Render cart page if present
  const itemsContainer = document.getElementById('cart-page-items');
  const emptyState = document.getElementById('cart-empty');
  const summary = document.getElementById('cart-summary');
  const totalEl = document.getElementById('cart-page-total');

  const renderCartPage = () => {
    if (!itemsContainer) return;
    const cart = getCart();
    itemsContainer.innerHTML = '';
    if (!cart.length) {
      if (emptyState) emptyState.classList.remove('hidden');
      if (summary) summary.classList.add('hidden');
      return;
    }
    if (emptyState) emptyState.classList.add('hidden');
    if (summary) summary.classList.remove('hidden');

    let total = 0;
    cart.forEach((it, index) => {
      const line = document.createElement('div');
      line.className = 'py-4 flex items-center justify-between gap-4';
      const lineTotal = (it.price || 0) * (it.qty || 1);
      total += lineTotal;
      line.innerHTML = `
        <div class="min-w-0">
          <div class="font-medium text-gray-800 truncate">${it.name}</div>
          <div class="text-sm text-gray-500">${formatPrice(it.price || 0)} · Qté: ${it.qty || 1}</div>
        </div>
        <div class="flex items-center gap-4">
          <div class="font-semibold text-gray-800">${formatPrice(lineTotal)}</div>
          <button aria-label="Supprimer" data-index="${index}" class="remove-item text-gray-400 hover:text-red-500"><i class="fas fa-trash"></i></button>
        </div>`;
      itemsContainer.appendChild(line);
    });

    if (totalEl) totalEl.textContent = formatPrice(total);

    // Remove handlers
    itemsContainer.querySelectorAll('.remove-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-index') || '-1', 10);
        const cartNow = getCart();
        if (idx >= 0 && idx < cartNow.length) {
          cartNow.splice(idx, 1);
          saveCart(cartNow);
          updateCartCount();
          renderCartPage();
        }
      });
    });
  };

  updateCartCount();
  renderCartPage();
});

// ---- Reveal-on-scroll animations ----
document.addEventListener('DOMContentLoaded', () => {
  // Lightweight horizontal scroll controls for mobile tracks
  document.querySelectorAll('[data-scroll-btn]').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetSel = btn.getAttribute('data-target');
      const dir = parseInt(btn.getAttribute('data-dir') || '1', 10);
      const track = targetSel ? document.querySelector(targetSel) : null;
      if (!track) return;
      const delta = Math.round(track.clientWidth * 0.9) * dir;
      track.scrollBy({ left: delta, behavior: 'smooth' });
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Pointer tilt for testimonial cards (only on fine pointers)
  const isFine = matchMedia('(pointer: fine)').matches;
  if (isFine) {
    document.querySelectorAll('.tilt-card').forEach(card => {
      let raf = 0;
      const update = (x, y) => {
        const rect = card.getBoundingClientRect();
        const px = (x - rect.left) / rect.width;  // 0..1
        const py = (y - rect.top) / rect.height;  // 0..1
        const rx = (0.5 - py) * 4; // deg
        const ry = (px - 0.5) * 6; // deg
        card.style.setProperty('--rx', rx.toFixed(2) + 'deg');
        card.style.setProperty('--ry', ry.toFixed(2) + 'deg');
      };
      card.addEventListener('pointermove', (e) => {
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => update(e.clientX, e.clientY));
      });
      card.addEventListener('pointerleave', () => {
        card.style.setProperty('--rx', '0deg');
        card.style.setProperty('--ry', '0deg');
      });
    });
  }
});
  // Testimonials dots syncing
  const track = document.getElementById('avis-track');
  const dotsWrap = document.getElementById('avis-dots');
  if (track && dotsWrap) {
    const slides = Array.from(track.querySelectorAll('article'));
    const dots = Array.from(dotsWrap.querySelectorAll('.dot'));

    const setActive = (idx) => {
      dots.forEach((d, i) => d.setAttribute('aria-current', String(i === idx)));
    };

    // Scroll to slide on dot click
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        const target = slides[i];
        if (!target) return;
        const left = target.offsetLeft - track.scrollLeft;
        track.scrollBy({ left, behavior: 'smooth' });
      });
    });

    // Observe visibility of slides to update active dot
    if (typeof IntersectionObserver !== 'undefined') {
    const io = new IntersectionObserver((entries) => {
      let best = { ratio: 0, index: 0 };
      entries.forEach(e => {
        const idx = slides.indexOf(e.target);
        if (e.isIntersecting && e.intersectionRatio > best.ratio) {
          best = { ratio: e.intersectionRatio, index: idx };
        }
      });
      if (best.ratio > 0) setActive(best.index);
    }, { root: track, threshold: [0.5, 0.6, 0.7, 0.8, 0.9] });

    slides.forEach(sl => io.observe(sl));
    }
  }

  // Auto-annotate common blocks for reveal
  document.querySelectorAll('.feature-card, .product-card, section h2.title-font, section h1.title-font, .shadow-lg.rounded-3xl, .shadow-lg.rounded-xl').forEach(el => {
    el.classList.add('reveal');
  });

  // Stagger some grids (include avis and any manual .reveal-stagger like engagements)
  const grids = Array.from(document.querySelectorAll('#produits .grid, #avis .grid, .reveal-stagger'));
  grids.forEach(grid => {
    grid.classList.add('reveal-stagger');
    Array.prototype.forEach.call(grid.children, function(child, i) {
      child.style.setProperty('--stagger-index', i);
    });
  });

  if (typeof IntersectionObserver !== 'undefined') {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => obs.observe(el));
  } else {
    document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => el.classList.add('in-view'));
  }
});

// ---- Newsletter promo banner (-10% si inscription) ----
document.addEventListener('DOMContentLoaded', () => {
  const OPTIN_KEY = 'ue_news_optin_v1';
  const DISMISS_KEY = 'ue_news_dismissed_ts_v1';
  const DISMISS_COOLDOWN_MS = 7 * 24 * 60 * 60 * 1000; // 7 jours

  const isOptedIn = () => localStorage.getItem(OPTIN_KEY) === 'true';
  const wasDismissedRecently = () => {
    const ts = parseInt(localStorage.getItem(DISMISS_KEY) || '0', 10);
    return Date.now() - ts < DISMISS_COOLDOWN_MS;
  };

  if (isOptedIn() || wasDismissedRecently()) return;

  const wrap = document.createElement('div');
  wrap.id = 'newsletter-banner';
  wrap.className = 'fixed inset-x-3 bottom-3 z-50';
  wrap.innerHTML = `
    <div class="relative mx-auto max-w-3xl bg-white shadow-xl border border-pink-300 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-3">
      <div class="flex-1 text-center sm:text-left">
        <div class="font-semibold text-gray-800">-10% sur votre prochaine commande</div>
        <div class="text-sm text-gray-600">Inscrivez-vous à notre newsletter.</div>
      </div>
      <form id="newsletter-form" class="w-full sm:w-auto flex gap-2">
        <input id="newsletter-email" type="email" required placeholder="Votre email" class="flex-1 sm:w-64 px-3 py-2 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring-1 focus:ring-pink-500" />
        <button type="submit" class="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-4 py-2 rounded-lg">Je m'inscris</button>
      </form>
      <button id="newsletter-close" aria-label="Fermer" class="absolute -top-2 -right-2 bg-white border border-gray-200 rounded-full w-8 h-8 shadow-sm text-gray-500 hover:text-gray-700 flex items-center justify-center">
        <i class="fas fa-times"></i>
      </button>
    </div>`;

  setTimeout(() => {
    document.body.appendChild(wrap);
    // animate in
    wrap.style.opacity = '0';
    wrap.style.transform = 'translateY(8px)';
    requestAnimationFrame(() => {
      wrap.style.transition = 'opacity .35s ease, transform .35s ease';
      wrap.style.opacity = '1';
      wrap.style.transform = 'translateY(0)';
    });
  }, 1200);

  const dismiss = () => {
    try { localStorage.setItem(DISMISS_KEY, String(Date.now())); } catch {}
    wrap.style.opacity = '0';
    wrap.style.transform = 'translateY(8px)';
    setTimeout(() => wrap.remove(), 300);
  };

  document.addEventListener('click', (e) => {
    const target = e.target;
    if (!(target instanceof Element)) return;
    if (target.closest('#newsletter-close')) {
      e.preventDefault();
      dismiss();
    }
  });

  document.addEventListener('submit', (e) => {
    const form = e.target;
    if (!(form instanceof HTMLFormElement)) return;
    if (form.id !== 'newsletter-form') return;
    e.preventDefault();
    var emailInput = form.querySelector('#newsletter-email');
    var email = emailInput ? (emailInput.value || '').trim() : '';
    var valid = !!email && /.+@.+\..+/.test(email);
    if (!valid) {
      if (emailInput && typeof emailInput.focus === 'function') emailInput.focus();
      return;
    }
    try { localStorage.setItem(OPTIN_KEY, 'true'); } catch {}
    const container = form.parentElement;
    if (container) {
      container.innerHTML = `
        <div class="w-full text-center sm:text-left">
          <div class="font-semibold text-gray-800 mb-1">Merci pour votre inscription !</div>
          <div class="text-sm text-gray-600">Votre avantage de -10% sera appliqué à votre prochaine commande.</div>
        </div>`;
    }
    setTimeout(dismiss, 2200);
  });
});
// Arm reveal animations only when JS is active
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('reveal-on');
});
