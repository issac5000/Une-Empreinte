"use client";

// Portage fidèle de js/main.js dans un composant client.
// Chaque navigation utilise des liens <a> (rechargement complet), donc cet effet
// se ré-exécute proprement à chaque page, comme le DOMContentLoaded d'origine.
// Le nettoyage retire tous les écouteurs/observers/DOM injectés (dev strict mode).

import { useEffect } from "react";
import { getCart, saveCart, updateCartCount, formatPrice, addToCart, type CartItem } from "@/lib/cart";

export default function SiteScripts() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];
    const on = (
      target: EventTarget,
      type: string,
      handler: EventListenerOrEventListenerObject,
      opts?: boolean | AddEventListenerOptions
    ) => {
      target.addEventListener(type, handler, opts);
      cleanups.push(() => target.removeEventListener(type, handler, opts));
    };

    /* ---------------------------------------------------------------- */
    /* 1. Menu mobile                                                    */
    /* ---------------------------------------------------------------- */
    (function mobileMenu() {
      const mobileMenu = document.getElementById("mobile-menu");
      const primaryToggle = document.getElementById("mobile-menu-button");
      const closeButtons = Array.from(document.querySelectorAll("#close-mobile-menu, [data-close-mobile-menu]"));
      const openButtons = [primaryToggle].filter(Boolean) as HTMLElement[];
      const backdrop = document.getElementById("mobile-backdrop");
      const originalOverflow = document.body ? document.body.style.overflow : "";
      let lastFocused: HTMLElement | null = null;
      let isOpen = false;

      if (!mobileMenu) {
        if (backdrop) backdrop.classList.add("hidden");
        return;
      }
      if (!mobileMenu.hasAttribute("tabindex")) mobileMenu.setAttribute("tabindex", "-1");
      mobileMenu.setAttribute("aria-hidden", "true");
      mobileMenu.classList.remove("open");
      if (backdrop) backdrop.classList.add("hidden");

      const applyClosedStyles = () => {
        mobileMenu.style.transform = "translateX(100%)";
        mobileMenu.style.visibility = "hidden";
        mobileMenu.style.opacity = "0";
        mobileMenu.style.pointerEvents = "none";
      };
      const applyOpenStyles = () => {
        mobileMenu.style.transform = "translateX(0)";
        mobileMenu.style.visibility = "visible";
        mobileMenu.style.opacity = "1";
        mobileMenu.style.pointerEvents = "auto";
      };
      applyClosedStyles();

      const setExpanded = (value: boolean) => {
        openButtons.forEach((btn) => {
          btn.setAttribute("aria-controls", "mobile-menu");
          btn.setAttribute("aria-expanded", value ? "true" : "false");
        });
      };
      setExpanded(false);

      const focusFirstItem = () => {
        const focusTarget =
          document.getElementById("close-mobile-menu") ||
          mobileMenu.querySelector("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])");
        if (focusTarget instanceof HTMLElement) focusTarget.focus({ preventScroll: true });
      };

      const openMenu = () => {
        if (isOpen) return;
        isOpen = true;
        lastFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        mobileMenu.classList.add("open");
        mobileMenu.setAttribute("aria-hidden", "false");
        applyOpenStyles();
        document.body.style.overflow = "hidden";
        if (backdrop) backdrop.classList.remove("hidden");
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
        if (backdrop) backdrop.classList.add("hidden");
        setExpanded(false);
        if (lastFocused && document.contains(lastFocused)) {
          try {
            lastFocused.focus({ preventScroll: true });
          } catch {
            lastFocused.focus();
          }
        }
      };

      openButtons.forEach((btn) => on(btn, "click", (e) => { e.preventDefault(); openMenu(); }));
      closeButtons.forEach((btn) => on(btn, "click", (e) => { e.preventDefault(); closeMenu(); }));
      if (backdrop) on(backdrop, "click", closeMenu);
      on(document, "keydown", (e) => { if ((e as KeyboardEvent).key === "Escape") closeMenu(); });

      mobileMenu.querySelectorAll("a").forEach((link) => {
        if (link.classList.contains("submenu-toggle")) return;
        on(link, "click", closeMenu);
      });

      const desktopQuery = window.matchMedia("(min-width: 1024px)");
      const handleDesktopChange = (e: MediaQueryListEvent) => { if (e.matches) closeMenu(); };
      desktopQuery.addEventListener("change", handleDesktopChange);
      cleanups.push(() => desktopQuery.removeEventListener("change", handleDesktopChange));

      on(document, "click", (event) => {
        const target = event.target;
        if (!(target instanceof Element)) return;
        if (target.closest("#mobile-menu-button")) { event.preventDefault(); openMenu(); return; }
        if (target.closest("#close-mobile-menu")) { event.preventDefault(); closeMenu(); return; }
        const toggle = target.closest("#mobile-menu .submenu-toggle");
        if (toggle) {
          const submenuId = toggle.getAttribute("aria-controls");
          const submenu = submenuId ? document.getElementById(submenuId) : (toggle.nextElementSibling as HTMLElement | null);
          if (!submenu) return;
          const expanded = toggle.getAttribute("aria-expanded") === "true";
          if (!expanded) event.preventDefault();
          toggle.setAttribute("aria-expanded", expanded ? "false" : "true");
          submenu.classList.toggle("hidden", expanded);
          submenu.classList.toggle("block", !expanded);
          const chev = toggle.querySelector(".mnav-chevron");
          if (chev) chev.classList.toggle("rotate-90", !expanded);
        }
      });
    })();

    /* ---------------------------------------------------------------- */
    /* 2. Smooth scroll pour [data-scroll]                               */
    /* ---------------------------------------------------------------- */
    document.querySelectorAll<HTMLElement>("[data-scroll]").forEach((el) => {
      on(el, "click", (e) => {
        const targetSel = el.getAttribute("data-scroll");
        if (!targetSel) return;
        const node = document.querySelector(targetSel);
        if (node) {
          e.preventDefault();
          node.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          location.hash = targetSel;
        }
      });
    });

    /* ---------------------------------------------------------------- */
    /* 3. FAQ (délégation)                                               */
    /* ---------------------------------------------------------------- */
    on(document, "click", (e) => {
      const el = e.target;
      if (!(el instanceof Element)) return;
      const toggle = el.closest(".faq-toggle");
      if (!toggle) return;
      const content = toggle.nextElementSibling;
      if (!content) return;
      const wasHidden = content.classList.contains("hidden");
      if (wasHidden) {
        content.classList.remove("hidden");
        content.classList.add("block");
        toggle.setAttribute("aria-expanded", "true");
      } else {
        content.classList.add("hidden");
        content.classList.remove("block");
        toggle.setAttribute("aria-expanded", "false");
      }
      const icon = toggle.querySelector("i");
      if (icon) icon.classList.toggle("rotate-180");
    });

    /* ---------------------------------------------------------------- */
    /* 4. Panier (localStorage)                                          */
    /* ---------------------------------------------------------------- */
    document.querySelectorAll<HTMLElement>(".add-to-cart").forEach((btn) => {
      on(btn, "click", (e) => {
        e.preventDefault();
        const id =
          btn.getAttribute("data-id") ||
          (window.crypto && typeof window.crypto.randomUUID === "function"
            ? window.crypto.randomUUID()
            : "id_" + Math.random().toString(36).slice(2));
        const name = btn.getAttribute("data-name") || "Article";
        const price = parseFloat(btn.getAttribute("data-price") || "0");
        addToCart({ id, name, price, variant: null, qty: 1 });
      });
    });

    document.querySelectorAll<HTMLElement>(".add-to-cart-custom").forEach((btn) => {
      on(btn, "click", (e) => {
        e.preventDefault();
        const price = parseFloat(btn.getAttribute("data-price") || "0");
        addToCart({ id: "custom", name: "Cadre personnalisé", price, variant: null, qty: 1 });
      });
    });

    // Rendu de la page Panier si présente
    const itemsContainer = document.getElementById("cart-page-items");
    const emptyState = document.getElementById("cart-empty");
    const summary = document.getElementById("cart-summary");
    const totalEl = document.getElementById("cart-page-total");

    const renderCartPage = () => {
      if (!itemsContainer) return;
      const cart = getCart();
      itemsContainer.innerHTML = "";
      if (!cart.length) {
        if (emptyState) emptyState.classList.remove("hidden");
        if (summary) summary.classList.add("hidden");
        return;
      }
      if (emptyState) emptyState.classList.add("hidden");
      if (summary) summary.classList.remove("hidden");

      let total = 0;
      cart.forEach((it: CartItem, index: number) => {
        const line = document.createElement("div");
        line.className = "py-4 flex items-center justify-between gap-4";
        const lineTotal = (it.price || 0) * (it.qty || 1);
        total += lineTotal;
        const variantLine = it.variant ? `<div class="text-xs text-gray-400 truncate">${it.variant}</div>` : "";
        line.innerHTML = `
          <div class="min-w-0">
            <div class="font-medium text-gray-800 truncate">${it.name}</div>
            <div class="text-sm text-gray-500">${formatPrice(it.price || 0)} · Qté: ${it.qty || 1}</div>
            ${variantLine}
          </div>
          <div class="flex items-center gap-4">
            <div class="font-semibold text-gray-800">${formatPrice(lineTotal)}</div>
            <button aria-label="Supprimer" data-index="${index}" class="remove-item text-gray-400 hover:text-red-500"><i class="fas fa-trash"></i></button>
          </div>`;
        itemsContainer.appendChild(line);
      });

      if (totalEl) totalEl.textContent = formatPrice(total);

      itemsContainer.querySelectorAll<HTMLElement>(".remove-item").forEach((btn) => {
        btn.addEventListener("click", () => {
          const idx = parseInt(btn.getAttribute("data-index") || "-1", 10);
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

    /* ---------------------------------------------------------------- */
    /* 5. Reveal-on-scroll + carrousels + tilt témoignages              */
    /* ---------------------------------------------------------------- */
    document.querySelectorAll<HTMLElement>("[data-scroll-btn]").forEach((btn) => {
      on(btn, "click", () => {
        const targetSel = btn.getAttribute("data-target");
        const dir = parseInt(btn.getAttribute("data-dir") || "1", 10);
        const track = targetSel ? document.querySelector<HTMLElement>(targetSel) : null;
        if (!track) return;
        const delta = Math.round(track.clientWidth * 0.9) * dir;
        track.scrollBy({ left: delta, behavior: "smooth" });
      });
    });

    const isFine = matchMedia("(pointer: fine)").matches;
    if (isFine) {
      document.querySelectorAll<HTMLElement>(".tilt-card").forEach((card) => {
        let raf = 0;
        const update = (x: number, y: number) => {
          const rect = card.getBoundingClientRect();
          const px = (x - rect.left) / rect.width;
          const py = (y - rect.top) / rect.height;
          const rx = (0.5 - py) * 4;
          const ry = (px - 0.5) * 6;
          card.style.setProperty("--rx", rx.toFixed(2) + "deg");
          card.style.setProperty("--ry", ry.toFixed(2) + "deg");
        };
        on(card, "pointermove", (e) => {
          const pe = e as PointerEvent;
          if (raf) cancelAnimationFrame(raf);
          raf = requestAnimationFrame(() => update(pe.clientX, pe.clientY));
        });
        on(card, "pointerleave", () => {
          card.style.setProperty("--rx", "0deg");
          card.style.setProperty("--ry", "0deg");
        });
      });
    }

    // Dots témoignages (si présents)
    const track = document.getElementById("avis-track");
    const dotsWrap = document.getElementById("avis-dots");
    if (track && dotsWrap) {
      const slides = Array.from(track.querySelectorAll("article"));
      const dots = Array.from(dotsWrap.querySelectorAll<HTMLElement>(".dot"));
      const setActive = (idx: number) => {
        dots.forEach((d, i) => d.setAttribute("aria-current", String(i === idx)));
      };
      dots.forEach((dot, i) => {
        on(dot, "click", () => {
          const target = slides[i];
          if (!target) return;
          const left = (target as HTMLElement).offsetLeft - track.scrollLeft;
          track.scrollBy({ left, behavior: "smooth" });
        });
      });
      if (typeof IntersectionObserver !== "undefined") {
        const io = new IntersectionObserver(
          (entries) => {
            let best = { ratio: 0, index: 0 };
            entries.forEach((e) => {
              const idx = slides.indexOf(e.target as HTMLElement);
              if (e.isIntersecting && e.intersectionRatio > best.ratio) {
                best = { ratio: e.intersectionRatio, index: idx };
              }
            });
            if (best.ratio > 0) setActive(best.index);
          },
          { root: track, threshold: [0.5, 0.6, 0.7, 0.8, 0.9] }
        );
        slides.forEach((sl) => io.observe(sl));
        cleanups.push(() => io.disconnect());
      }
    }

    // Auto-annotation .reveal
    document
      .querySelectorAll(".feature-card, .product-card, section h2.title-font, section h1.title-font, .shadow-lg.rounded-3xl, .shadow-lg.rounded-xl")
      .forEach((el) => el.classList.add("reveal"));

    const grids = Array.from(document.querySelectorAll("#produits .grid, #avis .grid, .reveal-stagger"));
    grids.forEach((grid) => {
      grid.classList.add("reveal-stagger");
      Array.from(grid.children).forEach((child, i) => {
        (child as HTMLElement).style.setProperty("--stagger-index", String(i));
      });
    });

    if (typeof IntersectionObserver !== "undefined") {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      document.querySelectorAll(".reveal, .reveal-stagger").forEach((el) => obs.observe(el));
      cleanups.push(() => obs.disconnect());
    } else {
      document.querySelectorAll(".reveal, .reveal-stagger").forEach((el) => el.classList.add("in-view"));
    }

    /* ---------------------------------------------------------------- */
    /* 6. Bannière newsletter (-10%)                                     */
    /* ---------------------------------------------------------------- */
    (function newsletter() {
      const OPTIN_KEY = "ue_news_optin_v1";
      const DISMISS_KEY = "ue_news_dismissed_ts_v1";
      const DISMISS_COOLDOWN_MS = 7 * 24 * 60 * 60 * 1000;
      const isOptedIn = () => localStorage.getItem(OPTIN_KEY) === "true";
      const wasDismissedRecently = () => {
        const ts = parseInt(localStorage.getItem(DISMISS_KEY) || "0", 10);
        return Date.now() - ts < DISMISS_COOLDOWN_MS;
      };
      if (isOptedIn() || wasDismissedRecently()) return;
      if (document.getElementById("newsletter-banner")) return; // évite un doublon (dev strict mode)

      const wrap = document.createElement("div");
      wrap.id = "newsletter-banner";
      wrap.className = "fixed inset-x-3 bottom-3 z-50";
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

      let removed = false;
      const timer = window.setTimeout(() => {
        document.body.appendChild(wrap);
        wrap.style.opacity = "0";
        wrap.style.transform = "translateY(8px)";
        requestAnimationFrame(() => {
          wrap.style.transition = "opacity .35s ease, transform .35s ease";
          wrap.style.opacity = "1";
          wrap.style.transform = "translateY(0)";
        });
      }, 1200);

      const dismiss = () => {
        try {
          localStorage.setItem(DISMISS_KEY, String(Date.now()));
        } catch {}
        wrap.style.opacity = "0";
        wrap.style.transform = "translateY(8px)";
        window.setTimeout(() => wrap.remove(), 300);
      };

      const clickHandler = (e: Event) => {
        const t = e.target;
        if (!(t instanceof Element)) return;
        if (t.closest("#newsletter-close")) {
          e.preventDefault();
          dismiss();
        }
      };
      const submitHandler = (e: Event) => {
        const form = e.target;
        if (!(form instanceof HTMLFormElement)) return;
        if (form.id !== "newsletter-form") return;
        e.preventDefault();
        const emailInput = form.querySelector<HTMLInputElement>("#newsletter-email");
        const email = emailInput ? (emailInput.value || "").trim() : "";
        const valid = !!email && /.+@.+\..+/.test(email);
        if (!valid) {
          emailInput?.focus();
          return;
        }
        try {
          localStorage.setItem(OPTIN_KEY, "true");
        } catch {}
        const container = form.parentElement;
        if (container) {
          container.innerHTML = `
            <div class="w-full text-center sm:text-left">
              <div class="font-semibold text-gray-800 mb-1">Merci pour votre inscription !</div>
              <div class="text-sm text-gray-600">Votre avantage de -10% sera appliqué à votre prochaine commande.</div>
            </div>`;
        }
        window.setTimeout(dismiss, 2200);
      };

      document.addEventListener("click", clickHandler);
      document.addEventListener("submit", submitHandler);
      cleanups.push(() => {
        if (removed) return;
        removed = true;
        window.clearTimeout(timer);
        document.removeEventListener("click", clickHandler);
        document.removeEventListener("submit", submitHandler);
        wrap.remove();
      });
    })();

    /* ---------------------------------------------------------------- */
    /* 7. Armer les animations reveal                                   */
    /* ---------------------------------------------------------------- */
    document.body.classList.add("reveal-on");
    cleanups.push(() => document.body.classList.remove("reveal-on"));

    return () => {
      cleanups.forEach((c) => c());
    };
  }, []);

  return null;
}
