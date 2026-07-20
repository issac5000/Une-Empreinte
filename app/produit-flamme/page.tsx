import type { Metadata } from "next";
import ProductPersonalizer from "@/components/ProductPersonalizer";
import { products } from "@/lib/products";

const product = products["produit-flamme"];

export const metadata: Metadata = { title: `${product.title} — Une Empreinte` };

export default function Page() {
  return <ProductPersonalizer product={product} />;
}
