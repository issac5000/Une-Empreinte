// Panier client-side (localStorage) — port fidèle de la logique de js/main.js.
// Toutes ces fonctions s'exécutent uniquement côté navigateur (composants client).

export type CartItem = {
  id: string;
  name: string;
  price: number;
  variant: string | null;
  qty: number;
};

const STORAGE_KEY = "ue_cart_v1";

export function getCart(): CartItem[] {
  try {
    return (JSON.parse(localStorage.getItem(STORAGE_KEY) || "null") as CartItem[]) || [];
  } catch {
    return [];
  }
}

export function saveCart(cart: CartItem[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

export function formatPrice(n: number): string {
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(n);
}

export function updateCartCount(): void {
  const cart = getCart();
  const count = cart.reduce((sum, it) => sum + (it.qty || 1), 0);
  document.querySelectorAll<HTMLElement>(".cart-count").forEach((el) => {
    el.textContent = String(count);
    el.classList.remove("bump");
    // force reflow pour relancer l'animation
    void el.offsetWidth;
    el.classList.add("bump");
  });
}

export function addToCart(item: CartItem): void {
  const cart = getCart();
  const idx = cart.findIndex((it) => it.id === item.id && it.variant === item.variant);
  if (idx >= 0) {
    cart[idx].qty = (cart[idx].qty || 1) + (item.qty || 1);
  } else {
    cart.push({ ...item, qty: item.qty || 1 });
  }
  saveCart(cart);
  updateCartCount();
}
