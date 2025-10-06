const UE_HEADER_TEMPLATE = `
<header class="bg-white header-shadow sticky top-0 z-50" data-site-header>
  <div class="container mx-auto px-4 py-3 flex justify-between items-center">
    <div class="flex items-center gap-3 sm:gap-4">
      <button id="mobile-menu-button" type="button" class="lg:hidden text-gray-700 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300" aria-label="Ouvrir le menu">
        <i class="fas fa-bars text-2xl"></i>
      </button>
      <div class="logo min-w-0">
        <a href="index.html#accueil" data-nav="accueil" class="group flex items-center gap-2 sm:gap-3 min-w-0 transition-all duration-300">
          <img src="image/logoheider.png" alt="Logo Une Empreinte" class="h-10 sm:h-12 w-auto shadow-sm"/>
          <span class="font-playfair text-lg sm:text-xl font-bold text-gray-800 group-hover:text-pink-600 transition-colors duration-300 truncate max-w-[55vw] md:max-w-[60vw] lg:max-w-none">Une <span class="text-pink-500 group-hover:text-gray-800">Empreinte</span></span>
        </a>
      </div>
    </div>
    <nav class="hidden lg:flex space-x-8">
      <a href="index.html#accueil" data-nav="accueil" class="text-gray-700 hover:text-pink-500 transition nav-link">Accueil</a>
      <div class="relative group" data-nav-item="personnalisation" data-dropdown-personnalisation tabindex="0">
        <a href="personnalisation.html#personnalisation" data-nav="personnalisation" class="inline-flex items-center gap-2 text-gray-700 hover:text-pink-500 transition nav-link" aria-haspopup="true" aria-expanded="false">
          <span>Personnalisation</span>
          <i class="fas fa-chevron-down text-xs opacity-70 transition-transform duration-200 group-hover:rotate-180"></i>
        </a>
        <div class="absolute left-0 top-full mt-2 w-[18rem] md:w-[22rem] lg:w-[24rem] pointer-events-none opacity-0 translate-y-2 scale-95 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:scale-100 group-focus-within:pointer-events-auto" data-dropdown-panel>
          <div class="dropdown-card relative bg-white/90 backdrop-blur-md shadow-2xl ring-1 ring-black/5 rounded-2xl p-2 pointer-events-auto">
            <ul class="py-1">
              <li class="menu-couple" data-nav-item="couple">
                <a href="couple.html" data-nav="couple" class="group/item flex items-center justify-between gap-3 px-3 py-2 rounded-xl text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition">
                  <span class="flex items-center gap-3 min-w-0">
                    <span class="menu-icon"><i class="fas fa-heart"></i></span>
                    <span class="truncate">Couple</span>
                  </span>
                  <i class="fas fa-chevron-right text-xs opacity-0 group-hover/item:opacity-100 transition-opacity"></i>
                </a>
              </li>
              <li class="menu-mariage" data-nav-item="mariage">
                <a href="mariage.html" data-nav="mariage" class="group/item flex items-center justify-between gap-3 px-3 py-2 rounded-xl text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition">
                  <span class="flex items-center gap-3 min-w-0">
                    <span class="menu-icon"><i class="fas fa-ring"></i></span>
                    <span class="truncate">Mariage</span>
                  </span>
                  <i class="fas fa-chevron-right text-xs opacity-0 group-hover/item:opacity-100 transition-opacity"></i>
                </a>
              </li>
              <li class="menu-naissance" data-nav-item="naissance">
                <a href="naissance.html" data-nav="naissance" class="group/item flex items-center justify-between gap-3 px-3 py-2 rounded-xl text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition">
                  <span class="flex items-center gap-3 min-w-0">
                    <span class="menu-icon"><i class="fas fa-baby"></i></span>
                    <span class="truncate">Naissance</span>
                  </span>
                  <i class="fas fa-chevron-right text-xs opacity-0 group-hover/item:opacity-100 transition-opacity"></i>
                </a>
              </li>
              <li class="menu-famille" data-nav-item="famille">
                <a href="famille.html" data-nav="famille" class="group/item flex items-center justify-between gap-3 px-3 py-2 rounded-xl text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition">
                  <span class="flex items-center gap-3 min-w-0">
                    <span class="menu-icon"><i class="fas fa-people-group"></i></span>
                    <span class="truncate">Famille</span>
                  </span>
                  <i class="fas fa-chevron-right text-xs opacity-0 group-hover/item:opacity-100 transition-opacity"></i>
                </a>
              </li>
              <li class="menu-souvenirs-eternels" data-nav-item="souvenirs">
                <a href="souvenirs-eternels.html" data-nav="souvenirs" class="group/item flex items-center justify-between gap-3 px-3 py-2 rounded-xl text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition">
                  <span class="flex items-center gap-3 min-w-0">
                    <span class="menu-icon"><i class="fas fa-infinity"></i></span>
                    <span class="truncate">Souvenirs éternels</span>
                  </span>
                  <i class="fas fa-chevron-right text-xs opacity-0 group-hover/item:opacity-100 transition-opacity"></i>
                </a>
              </li>
              <li class="menu-occasions-speciales" data-nav-item="occasions">
                <a href="occasions-speciales.html" data-nav="occasions" class="group/item flex items-center justify-between gap-3 px-3 py-2 rounded-xl text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition">
                  <span class="flex items-center gap-3 min-w-0">
                    <span class="menu-icon"><i class="fas fa-gift"></i></span>
                    <span class="truncate">Occasions spéciales</span>
                  </span>
                  <i class="fas fa-chevron-right text-xs opacity-0 group-hover/item:opacity-100 transition-opacity"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <a href="index.html#avis" data-nav="avis" class="text-gray-700 hover:text-pink-500 transition nav-link">Avis</a>
      <a href="contact.html" data-nav="contact" class="text-gray-700 hover:text-pink-500 transition nav-link">Contact</a>
    </nav>
    <div class="flex items-center space-x-4">
      <a href="panier.html" data-nav="panier" class="text-gray-700 hover:text-pink-500 cart-icon inline-flex items-center">
        <i class="fas fa-bag-shopping text-xl"></i>
        <span class="ml-1 hidden lg:inline">Panier</span>
        <span class="cart-count">0</span>
      </a>
      <a href="compte.html" data-nav="compte" class="hidden lg:flex items-center text-gray-700 hover:text-pink-500">
        <i class="fas fa-user text-xl"></i>
        <span class="ml-1 hidden lg:inline">Compte</span>
      </a>
    </div>
  </div>
</header>
<div id="mobile-menu" class="mobile-menu fixed inset-y-0 left-0 bg-white shadow-lg z-50 p-4 overflow-y-auto" data-site-mobile-menu>
  <div class="mnav-header flex items-center justify-between mb-3">
    <div class="flex items-center gap-2">
      <img src="image/logoheider.png" alt="Logo Une Empreinte" class="w-8 h-8 rounded-md"/>
      <span class="mnav-title title-font text-lg">Une <span class="text-pink-500">Empreinte</span></span>
    </div>
    <button id="close-mobile-menu" class="text-gray-500" aria-label="Fermer le menu">
      <i class="fas fa-times text-xl"></i>
    </button>
  </div>
  <nav aria-label="Navigation mobile">
    <ul class="mnav">
      <li data-nav-item="accueil">
        <a href="index.html#accueil" data-nav="accueil" class="mnav-item">
          <span class="mnav-left">
            <span class="mnav-icon"><i class="fas fa-house"></i></span>
            <span class="mnav-text">Accueil</span>
          </span>
          <i class="fas fa-chevron-right mnav-chevron"></i>
        </a>
      </li>
      <li data-nav-item="personnalisation">
        <a href="personnalisation.html#personnalisation" data-nav="personnalisation" class="mnav-item submenu-toggle" aria-expanded="false" aria-controls="submenu-personnalisation">
          <span class="mnav-left">
            <span class="mnav-icon"><i class="fas fa-wand-magic-sparkles"></i></span>
            <span class="mnav-text">Personnalisation</span>
          </span>
          <i class="fas fa-chevron-right mnav-chevron transition-transform"></i>
        </a>
        <ul id="submenu-personnalisation" class="mnav-submenu hidden">
          <li class="menu-couple" data-nav-item="couple">
            <a href="couple.html" data-nav="couple" class="mnav-subitem">
              <span class="mnav-subleft">
                <span class="mnav-subicon"><i class="fas fa-heart"></i></span>
                <span class="truncate">Couple</span>
              </span>
              <i class="fas fa-chevron-right mnav-subchev"></i>
            </a>
          </li>
          <li class="menu-mariage" data-nav-item="mariage">
            <a href="mariage.html" data-nav="mariage" class="mnav-subitem">
              <span class="mnav-subleft">
                <span class="mnav-subicon"><i class="fas fa-ring"></i></span>
                <span class="truncate">Mariage</span>
              </span>
              <i class="fas fa-chevron-right mnav-subchev"></i>
            </a>
          </li>
          <li class="menu-naissance" data-nav-item="naissance">
            <a href="naissance.html" data-nav="naissance" class="mnav-subitem">
              <span class="mnav-subleft">
                <span class="mnav-subicon"><i class="fas fa-baby"></i></span>
                <span class="truncate">Naissance</span>
              </span>
              <i class="fas fa-chevron-right mnav-subchev"></i>
            </a>
          </li>
          <li class="menu-famille" data-nav-item="famille">
            <a href="famille.html" data-nav="famille" class="mnav-subitem">
              <span class="mnav-subleft">
                <span class="mnav-subicon"><i class="fas fa-people-group"></i></span>
                <span class="truncate">Famille</span>
              </span>
              <i class="fas fa-chevron-right mnav-subchev"></i>
            </a>
          </li>
          <li class="menu-souvenirs-eternels" data-nav-item="souvenirs">
            <a href="souvenirs-eternels.html" data-nav="souvenirs" class="mnav-subitem">
              <span class="mnav-subleft">
                <span class="mnav-subicon"><i class="fas fa-infinity"></i></span>
                <span class="truncate">Souvenirs éternels</span>
              </span>
              <i class="fas fa-chevron-right mnav-subchev"></i>
            </a>
          </li>
          <li class="menu-occasions-speciales" data-nav-item="occasions">
            <a href="occasions-speciales.html" data-nav="occasions" class="mnav-subitem">
              <span class="mnav-subleft">
                <span class="mnav-subicon"><i class="fas fa-gift"></i></span>
                <span class="truncate">Occasions spéciales</span>
              </span>
              <i class="fas fa-chevron-right mnav-subchev"></i>
            </a>
          </li>
        </ul>
      </li>
      <li data-nav-item="avis">
        <a href="index.html#avis" data-nav="avis" class="mnav-item">
          <span class="mnav-left">
            <span class="mnav-icon"><i class="fas fa-star"></i></span>
            <span class="mnav-text">Avis</span>
          </span>
          <i class="fas fa-chevron-right mnav-chevron"></i>
        </a>
      </li>
      <li data-nav-item="contact">
        <a href="contact.html" data-nav="contact" class="mnav-item">
          <span class="mnav-left">
            <span class="mnav-icon"><i class="fas fa-envelope"></i></span>
            <span class="mnav-text">Contact</span>
          </span>
          <i class="fas fa-chevron-right mnav-chevron"></i>
        </a>
      </li>
    </ul>
    <div class="mnav-divider"></div>
    <a href="personnalisation.html#personnalisation" class="mnav-cta" aria-label="Personnaliser un cadre">Personnaliser un cadre</a>
  </nav>
  <div class="mt-6 text-sm text-gray-500">
    <div class="flex items-center justify-between">
      <a href="panier.html" data-nav="panier" class="hover:text-pink-500">
        <i class="fas fa-bag-shopping mr-2"></i>Panier <span class="cart-count ml-1">0</span>
      </a>
      <a href="compte.html" data-nav="compte" class="hover:text-pink-500">
        <i class="fas fa-user mr-2"></i>Compte
      </a>
    </div>
  </div>
</div>
<div id="mobile-backdrop" class="fixed inset-0 bg-black/40 hidden z-40" aria-hidden="true" data-site-mobile-backdrop></div>
`;

const UE_NAVIGATION_MAP = {
  "": ["accueil"],
  "index.html": ["accueil"],
  "contact.html": ["contact"],
  "personnalisation.html": ["personnalisation"],
  "couple.html": ["couple"],
  "mariage.html": ["mariage"],
  "naissance.html": ["naissance"],
  "famille.html": ["famille"],
  "souvenirs-eternels.html": ["souvenirs"],
  "occasions-speciales.html": ["occasions"],
  "produit-intemporel.html": ["couple"],
  "produit-flamme.html": ["couple"],
  "produit-promesse.html": ["couple"],
  "produit-naissance-bienvenue.html": ["naissance"],
  "produit-naissance-douceur.html": ["naissance"],
  "produit-naissance-miracle.html": ["naissance"],
  "produit-naissance-modele-1.html": ["naissance"],
  "produit-naissance-modele-2.html": ["naissance"],
  "produit-naissance-modele-3.html": ["naissance"],
  "panier.html": ["panier"],
  "compte.html": ["compte"]
};

const UE_PERSONNALISATION_KEYS = new Set([
  "personnalisation",
  "couple",
  "mariage",
  "naissance",
  "famille",
  "souvenirs",
  "occasions"
]);

const ueEnsureGlobalHeader = () => {
  if (!document.body) return;

  const hasHeader = document.querySelector("[data-site-header]");
  const hasMenu = document.getElementById("mobile-menu");
  const hasBackdrop = document.getElementById("mobile-backdrop");
  if (hasHeader && hasMenu && hasBackdrop) return;

  const oldHeader = document.querySelector("header.header-shadow");
  if (oldHeader) oldHeader.remove();
  const oldMenu = document.getElementById("mobile-menu");
  if (oldMenu) oldMenu.remove();
  const oldBackdrop = document.getElementById("mobile-backdrop");
  if (oldBackdrop) oldBackdrop.remove();

  const wrapper = document.createElement("div");
  wrapper.innerHTML = UE_HEADER_TEMPLATE.trim();
  const nodes = Array.from(wrapper.children);
  const firstChild = document.body.firstChild;
  nodes.forEach((node) => {
    document.body.insertBefore(node, firstChild);
  });
};

const ueForcePersonnalisationDropdownOpen = () => {
  const desktopDropdown = document.querySelector("[data-dropdown-personnalisation]");
  if (!desktopDropdown) return;

  desktopDropdown.setAttribute("data-dropdown-open", "true");

  const trigger = desktopDropdown.querySelector('a[data-nav="personnalisation"]');
  if (trigger) {
    trigger.setAttribute("aria-expanded", "true");
  }
};

const ueOpenMobilePersonnalisationMenu = () => {
  const mobileToggle = document.querySelector('#mobile-menu .submenu-toggle[data-nav="personnalisation"]') ||
    document.querySelector('#mobile-menu .submenu-toggle');
  if (!mobileToggle) return;

  mobileToggle.setAttribute("aria-expanded", "true");
  const submenuId = mobileToggle.getAttribute("aria-controls");
  const submenu = submenuId ? document.getElementById(submenuId) : mobileToggle.nextElementSibling;
  if (submenu) {
    submenu.classList.remove("hidden");
    submenu.classList.add("block");
  }
  const chevron = mobileToggle.querySelector(".mnav-chevron");
  if (chevron) {
    chevron.classList.add("rotate-90");
  }
};

const ueApplyNavigationState = () => {
  const path = (window.location.pathname || "").split("/").filter(Boolean).pop() || "";
  const file = path.toLowerCase();
  const baseKeys = UE_NAVIGATION_MAP[file] || UE_NAVIGATION_MAP[""] || [];
  const pageKeys = new Set(baseKeys);
  const hash = (window.location.hash || "").toLowerCase();
  const keys = new Set(baseKeys);
  document.querySelectorAll("[data-nav].nav-active").forEach((el) => {
    el.classList.remove("nav-active");
    if (el.getAttribute("aria-current") === "page") {
      el.removeAttribute("aria-current");
    }
  });
  document.querySelectorAll("[data-nav-item].nav-item-active").forEach((el) => {
    el.classList.remove("nav-item-active");
  });
  if (hash === "#avis") {
    keys.add("avis");
  }
  if (hash === "#personnalisation") {
    keys.add("personnalisation");
  }
  if (hash === "#panier") {
    keys.add("panier");
  }

  const markActive = (key, options = {}) => {
    const { setAria = false } = options;
    document.querySelectorAll(`[data-nav="${key}"]`).forEach((el) => {
      el.classList.add("nav-active");
      if (setAria) {
        el.setAttribute("aria-current", "page");
      }
      const parentItem = el.closest("[data-nav-item]");
      if (parentItem) {
        parentItem.classList.add("nav-item-active");
      }
    });
  };

  keys.forEach((key) => {
    const setAria = pageKeys.has(key);
    markActive(key, { setAria });
  });

  const needsPersonnalisation = Array.from(keys).some((key) => UE_PERSONNALISATION_KEYS.has(key));
  if (needsPersonnalisation) {
    const setAria = pageKeys.has("personnalisation");
    markActive("personnalisation", { setAria });
  }

  ueForcePersonnalisationDropdownOpen();
  ueOpenMobilePersonnalisationMenu();
};

const uePrepareHeader = () => {
  ueEnsureGlobalHeader();
  ueApplyNavigationState();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", uePrepareHeader, { once: true });
} else {
  uePrepareHeader();
}

window.addEventListener("hashchange", ueApplyNavigationState);

document.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.getElementById("mobile-menu");
  const primaryToggle = document.getElementById("mobile-menu-button");
  const extraToggles = Array.from(document.querySelectorAll("[data-mobile-menu-button]"))
    .filter((btn) => btn !== primaryToggle);
  const openButtons = [primaryToggle, ...extraToggles].filter(Boolean);
  const closeButtons = Array.from(document.querySelectorAll("#close-mobile-menu, [data-close-mobile-menu]"));
  let mobileBackdrop = document.getElementById("mobile-backdrop");
  const originalOverflow = document.body ? document.body.style.overflow : "";
  let lastFocused = null;
  let isOpen = false;

  if (!mobileMenu) {
    if (mobileBackdrop && mobileBackdrop.parentElement && mobileBackdrop.parentElement !== document.body) {
      document.body.appendChild(mobileBackdrop);
    }
    if (mobileBackdrop) mobileBackdrop.classList.add("hidden");
    return;
  }

  if (!mobileMenu.hasAttribute("tabindex")) {
    mobileMenu.setAttribute("tabindex", "-1");
  }
  mobileMenu.setAttribute("aria-hidden", "true");
  mobileMenu.classList.remove("open");

  if (mobileBackdrop) {
    if (mobileBackdrop.parentElement !== document.body) {
      document.body.appendChild(mobileBackdrop);
    }
    mobileBackdrop.classList.add("hidden");
  } else {
    mobileBackdrop = document.createElement("div");
    mobileBackdrop.id = "mobile-backdrop";
    mobileBackdrop.setAttribute("aria-hidden", "true");
    mobileBackdrop.className = "fixed inset-0 bg-black/40 hidden z-40";
    document.body.appendChild(mobileBackdrop);
  }

  const applyClosedStyles = () => {
    try {
      mobileMenu.style.transform = "translateX(100%)";
      mobileMenu.style.visibility = "hidden";
      mobileMenu.style.opacity = "0";
      mobileMenu.style.pointerEvents = "none";
    } catch {
      /* ignore inline style errors */
    }
  };

  const applyOpenStyles = () => {
    try {
      mobileMenu.style.transform = "translateX(0)";
      mobileMenu.style.visibility = "visible";
      mobileMenu.style.opacity = "1";
      mobileMenu.style.pointerEvents = "auto";
    } catch {
      /* ignore inline style errors */
    }
  };

  applyClosedStyles();

  const setExpanded = (value) => {
    openButtons.forEach((btn) => {
      btn.setAttribute("aria-controls", "mobile-menu");
      btn.setAttribute("aria-expanded", value ? "true" : "false");
    });
  };

  setExpanded(false);

  const focusFirstItem = () => {
    const focusTarget =
      document.getElementById("close-mobile-menu") ||
      mobileMenu.querySelector("[data-focus-default]") ||
      mobileMenu.querySelector("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])");

    if (focusTarget instanceof HTMLElement) {
      focusTarget.focus({ preventScroll: true });
    }
  };

  const openMenu = () => {
    if (isOpen) return;
    isOpen = true;
    lastFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    mobileMenu.classList.add("open");
    mobileMenu.setAttribute("aria-hidden", "false");
    applyOpenStyles();
    document.body.style.overflow = "hidden";
    mobileBackdrop.classList.remove("hidden");
    setExpanded(true);
    focusFirstItem();
  };

  const closeMenu = () => {
    if (!isOpen) return;
    isOpen = false;
    mobileMenu.classList.remove("open");
    mobileMenu.setAttribute("aria-hidden", "true");
    applyClosedStyles();
    document.body.style.overflow = originalOverflow || "";
    mobileBackdrop.classList.add("hidden");
    setExpanded(false);
    if (lastFocused && document.contains(lastFocused)) {
      try {
        lastFocused.focus({ preventScroll: true });
      } catch {
        lastFocused.focus();
      }
    }
  };

  openButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      openMenu();
    });
  });

  closeButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      closeMenu();
    });
  });

  mobileBackdrop.addEventListener("click", closeMenu);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    if (link.classList.contains("submenu-toggle")) return;
    link.addEventListener("click", closeMenu);
  });

  const desktopQuery = window.matchMedia("(min-width: 1024px)");
  const handleDesktopChange = (event) => {
    if (event.matches) closeMenu();
  };
  if (desktopQuery.addEventListener) {
    desktopQuery.addEventListener("change", handleDesktopChange);
  } else if (desktopQuery.addListener) {
    desktopQuery.addListener(handleDesktopChange);
  }

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    if (target.closest("#mobile-menu-button") || target.closest("[data-mobile-menu-button]")) {
      event.preventDefault();
      openMenu();
      return;
    }

    if (target.closest("#close-mobile-menu") || target.closest("[data-close-mobile-menu]")) {
      event.preventDefault();
      closeMenu();
      return;
    }

    // Toggle sous-menu mobile
    const toggle = target.closest("#mobile-menu .submenu-toggle");
    if (toggle) {
      const submenuId = toggle.getAttribute("aria-controls");
      const submenu = submenuId ? document.getElementById(submenuId) : toggle.nextElementSibling;
      if (!submenu) return;
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      if (!expanded) {
        // première tape: ouvrir sans naviguer
        event.preventDefault();
      }
      toggle.setAttribute("aria-expanded", expanded ? "false" : "true");
      submenu.classList.toggle("hidden", expanded);
      submenu.classList.toggle("block", !expanded);
      const chev = toggle.querySelector(".mnav-chevron");
      if (chev) chev.classList.toggle("rotate-90", !expanded);
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
