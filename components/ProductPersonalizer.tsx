"use client";

import { useState } from "react";
import { addToCart } from "@/lib/cart";
import type { ProductConfig } from "@/lib/products";

const inputCls =
  "w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring-1 focus:ring-pink-500";

export default function ProductPersonalizer({ product }: { product: ProductConfig }) {
  const [values, setValues] = useState<Record<string, string>>({
    theme: product.themeOptions[0] ?? "",
  });
  const [added, setAdded] = useState(false);

  const set = (id: string, v: string) => setValues((prev) => ({ ...prev, [id]: v }));
  const get = (id: string) => values[id] ?? "";
  const ph = (id: string) => product.placeholders?.[id];

  const buildVariant = (): string => {
    const parts: string[] = [];
    if (product.kind === "couple") {
      const p1 = get("p1").trim();
      const p2 = get("p2").trim();
      const msg = get("msg").trim();
      if (p1 || p2) parts.push(`Noms: ${p1}${p1 && p2 ? " & " : ""}${p2}`);
      if (get("date")) parts.push(`Date: ${get("date")}`);
      if (get("theme")) parts.push(`Thème: ${get("theme")}`);
      if (msg) parts.push(`Message: ${msg}`);
    } else {
      const prenom = get("prenom").trim();
      const msg = get("msg").trim();
      if (prenom) parts.push(`Prénom: ${prenom}`);
      if (get("date")) parts.push(`Date: ${get("date")}`);
      if (product.hasHeure && get("heure")) parts.push(`Heure: ${get("heure")}`);
      if (get("theme")) parts.push(`Thème: ${get("theme")}`);
      if (msg) parts.push(`Message: ${msg}`);
    }
    return parts.join(" | ");
  };

  const handleAdd = () => {
    addToCart({
      id: product.cartId,
      name: product.cartName,
      price: product.price,
      variant: buildVariant(),
      qty: 1,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  const themeSelect = (
    <div>
      <label htmlFor="theme" className="block text-sm text-gray-700 mb-1">Couleur/Thème</label>
      <select
        id="theme"
        name="theme"
        className={inputCls}
        value={get("theme")}
        onChange={(e) => set("theme", e.target.value)}
      >
        {product.themeOptions.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );

  return (
    <main className="py-10 bg-white">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8 items-start">
        {/* Media */}
        <div className="reveal">
          <div className="rounded-2xl overflow-hidden shadow-md bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={product.image} alt={product.imageAlt} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Details */}
        <div className="reveal">
          <h1 className="title-font text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">{product.title}</h1>
          <p className="text-gray-600 mb-4">{product.tagline}</p>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-pink-500 font-bold text-2xl">{product.priceLabel}</span>
            <span className="text-gray-400 text-sm">TTC</span>
          </div>

          <a
            href="/personnalisation#personnalisation"
            className="inline-block mb-6 text-pink-600 hover:text-pink-500 underline"
          >
            Besoin d&apos;une personnalisation avancée ?
          </a>

          <form
            id={product.formId}
            className="bg-pink-50 rounded-xl p-5 border border-pink-100"
            autoComplete="on"
            onSubmit={(e) => e.preventDefault()}
          >
            <h2 id="personnaliser" className="title-font text-xl font-semibold mb-4">Personnaliser ce modèle</h2>

            {product.kind === "couple" ? (
              <>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="p1" className="block text-sm text-gray-700 mb-1">Prénom 1</label>
                    <input id="p1" name="p1" className={inputCls} placeholder={ph("p1")} value={get("p1")} onChange={(e) => set("p1", e.target.value)} />
                  </div>
                  <div>
                    <label htmlFor="p2" className="block text-sm text-gray-700 mb-1">Prénom 2</label>
                    <input id="p2" name="p2" className={inputCls} placeholder={ph("p2")} value={get("p2")} onChange={(e) => set("p2", e.target.value)} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label htmlFor="date" className="block text-sm text-gray-700 mb-1">Date spéciale</label>
                    <input id="date" name="date" type="date" className={inputCls} value={get("date")} onChange={(e) => set("date", e.target.value)} />
                  </div>
                  {themeSelect}
                </div>
              </>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="prenom" className="block text-sm text-gray-700 mb-1">Prénom du bébé</label>
                    <input id="prenom" name="prenom" className={inputCls} placeholder={ph("prenom")} value={get("prenom")} onChange={(e) => set("prenom", e.target.value)} />
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-sm text-gray-700 mb-1">Date de naissance</label>
                    <input id="date" name="date" type="date" className={inputCls} value={get("date")} onChange={(e) => set("date", e.target.value)} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label htmlFor="heure" className="block text-sm text-gray-700 mb-1">Heure (optionnel)</label>
                    <input id="heure" name="heure" type="time" className={inputCls} value={get("heure")} onChange={(e) => set("heure", e.target.value)} />
                  </div>
                  {themeSelect}
                </div>
              </>
            )}

            <div className="mt-4">
              <label htmlFor="msg" className="block text-sm text-gray-700 mb-1">Message (optionnel)</label>
              <textarea id="msg" name="msg" rows={2} className={inputCls} placeholder={ph("msg")} value={get("msg")} onChange={(e) => set("msg", e.target.value)} />
            </div>

            <div className="mt-5 flex gap-3">
              <button
                id="btn-add"
                type="button"
                className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-lg transition"
                onClick={handleAdd}
              >
                {added ? "Ajouté !" : "Ajouter au panier"}
              </button>
              <a href={product.backHref} className="border-2 border-pink-500 text-pink-600 hover:bg-pink-50 px-5 py-2 rounded-lg transition">
                {product.backLabel}
              </a>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
