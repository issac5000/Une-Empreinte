// Catalogue des fiches produit (données extraites des pages HTML d'origine).
// Sert à générer les pages produit via <ProductPersonalizer>.

export type ProductConfig = {
  slug: string;
  kind: "couple" | "naissance";
  cartId: string;
  cartName: string;
  price: number;
  priceLabel: string;
  title: string;
  tagline: string;
  image: string; // chemin public (avec / initial)
  imageAlt: string;
  themeOptions: string[];
  hasHeure?: boolean;
  placeholders?: Record<string, string>;
  backHref: string;
  backLabel: string;
  formId: string;
};

export const products: Record<string, ProductConfig> = {
  "produit-flamme": {
    slug: "produit-flamme",
    kind: "couple",
    cartId: "couple-flamme",
    cartName: "La Flamme",
    price: 59.9,
    priceLabel: "59,90€",
    title: "La Flamme",
    tagline: "La passion, l'énergie et le feu du couple.",
    image: "/WhatsApp Image 2025-09-11 at 13.14.29.jpeg",
    imageAlt: "La Flamme — visuel du modèle",
    themeOptions: ["Rouge", "Nude", "Noir", "Blanc"],
    backHref: "/couple",
    backLabel: "Retour à Couple",
    formId: "form-flamme",
  },
  "produit-intemporel": {
    slug: "produit-intemporel",
    kind: "couple",
    cartId: "couple-intemporel",
    cartName: "L'intemporel",
    price: 59.9,
    priceLabel: "59,90€",
    title: "L'intemporel",
    tagline: "Un amour qui dure au-delà du temps.",
    image: "/WhatsApp Image 2025-09-11 at 13.10.11.jpeg",
    imageAlt: "L'intemporel — visuel du modèle",
    themeOptions: ["Nude", "Noir", "Rouge", "Blanc"],
    placeholders: { p1: "Ex: Emma", p2: "Ex: Liam", msg: "Ex: Pour toujours à tes côtés" },
    backHref: "/couple",
    backLabel: "Retour à Couple",
    formId: "form-intemporel",
  },
  "produit-promesse": {
    slug: "produit-promesse",
    kind: "couple",
    cartId: "couple-promesse",
    cartName: "La promesse",
    price: 59.9,
    priceLabel: "59,90€",
    title: "La promesse",
    tagline: "Pureté d'engagement et de sincérité.",
    image: "/WhatsApp Image 2025-09-11 at 13.11.25.jpeg",
    imageAlt: "La promesse — visuel du modèle",
    themeOptions: ["Blanc", "Nude", "Noir", "Rouge"],
    backHref: "/couple",
    backLabel: "Retour à Couple",
    formId: "form-promesse",
  },
  "produit-naissance-modele-1": {
    slug: "produit-naissance-modele-1",
    kind: "naissance",
    cartId: "naissance-modele-1",
    cartName: "Naissance — Modèle 1",
    price: 49.9,
    priceLabel: "49,90€",
    title: "Naissance — Modèle 1",
    tagline: "Personnalisez un souvenir de naissance unique.",
    image: "/WhatsApp Image 2025-09-11 at 13.10.11.jpeg",
    imageAlt: "Naissance — Modèle 1 visuel",
    themeOptions: ["Nude", "Rose poudré", "Bleu doux", "Sable"],
    hasHeure: true,
    backHref: "/naissance",
    backLabel: "Retour à Naissance",
    formId: "form-n1",
  },
  "produit-naissance-modele-2": {
    slug: "produit-naissance-modele-2",
    kind: "naissance",
    cartId: "naissance-modele-2",
    cartName: "Naissance — Modèle 2",
    price: 49.9,
    priceLabel: "49,90€",
    title: "Naissance — Modèle 2",
    tagline: "Personnalisez un souvenir de naissance unique.",
    image: "/WhatsApp Image 2025-09-11 at 13.11.25.jpeg",
    imageAlt: "Naissance — Modèle 2 visuel",
    themeOptions: ["Rose poudré", "Bleu doux", "Nude", "Sable"],
    hasHeure: true,
    backHref: "/naissance",
    backLabel: "Retour à Naissance",
    formId: "form-n2",
  },
  "produit-naissance-modele-3": {
    slug: "produit-naissance-modele-3",
    kind: "naissance",
    cartId: "naissance-modele-3",
    cartName: "Naissance — Modèle 3",
    price: 49.9,
    priceLabel: "49,90€",
    title: "Naissance — Modèle 3",
    tagline: "Personnalisez un souvenir de naissance unique.",
    image: "/WhatsApp Image 2025-09-11 at 13.14.29.jpeg",
    imageAlt: "Naissance — Modèle 3 visuel",
    themeOptions: ["Bleu doux", "Rose poudré", "Nude", "Sable"],
    hasHeure: true,
    backHref: "/naissance",
    backLabel: "Retour à Naissance",
    formId: "form-n3",
  },
  "produit-naissance-bienvenue": {
    slug: "produit-naissance-bienvenue",
    kind: "naissance",
    cartId: "naissance-bienvenue",
    cartName: "Bienvenue au monde",
    price: 49.9,
    priceLabel: "49,90€",
    title: "Bienvenue au monde",
    tagline: "Annoncez l'arrivée avec douceur et élégance.",
    image: "/WhatsApp Image 2025-09-02 at 12.16.22.jpeg",
    imageAlt: "Bienvenue au monde — visuel du modèle naissance",
    themeOptions: ["Rose poudré", "Bleu doux", "Nude", "Sable"],
    hasHeure: true,
    backHref: "/naissance",
    backLabel: "Retour à Naissance",
    formId: "form-bienvenue",
  },
  "produit-naissance-douceur": {
    slug: "produit-naissance-douceur",
    kind: "naissance",
    cartId: "naissance-douceur",
    cartName: "Douceur de naissance",
    price: 49.9,
    priceLabel: "49,90€",
    title: "Douceur de naissance",
    tagline: "Capturez la magie des premières heures.",
    image: "/WhatsApp Image 2025-09-02 at 12.18.23.jpeg",
    imageAlt: "Douceur de naissance — visuel du modèle naissance",
    themeOptions: ["Bleu doux", "Rose poudré", "Nude", "Sable"],
    hasHeure: true,
    backHref: "/naissance",
    backLabel: "Retour à Naissance",
    formId: "form-douceur",
  },
  "produit-naissance-miracle": {
    slug: "produit-naissance-miracle",
    kind: "naissance",
    cartId: "naissance-miracle",
    cartName: "Petit Miracle",
    price: 49.9,
    priceLabel: "49,90€",
    title: "Petit Miracle",
    tagline: "Un souvenir tendre des premiers instants.",
    image: "/WhatsApp Image 2025-09-02 at 12.01.51.jpeg",
    imageAlt: "Petit Miracle — visuel du modèle naissance",
    themeOptions: ["Nude", "Rose poudré", "Bleu doux", "Sable"],
    hasHeure: true,
    placeholders: { prenom: "Ex: Mila", msg: "Ex: Bienvenue parmi nous" },
    backHref: "/naissance",
    backLabel: "Retour à Naissance",
    formId: "form-miracle",
  },
};

export const productSlugs = Object.keys(products);
