import type { Metadata } from "next";

export const metadata: Metadata = { title: "Panier — Une Empreinte" };

// Contenu rendu statiquement ; le remplissage du panier est géré par <SiteScripts>
// (lecture localStorage → #cart-page-items / #cart-empty / #cart-summary / #cart-page-total).
export default function PanierPage() {
  return (
    <main>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="relative text-center mb-10">
            <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 mx-auto w-3/4 h-20 bg-pink-100 opacity-20 rounded-full blur-2xl -z-10"></div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight leading-tight title-font">
              Votre <span className="text-pink-500">Panier</span>
            </h1>
            <p className="mt-3 text-gray-600">Retrouvez ici les articles ajoutés à votre panier.</p>
          </div>

          {/* Cart content */}
          <div id="cart-page" className="bg-white rounded-xl shadow-lg p-6">
            {/* Empty state */}
            <div id="cart-empty" className="text-center py-12 hidden">
              <i className="fas fa-shopping-basket text-5xl text-gray-300 mb-4"></i>
              <p className="text-gray-600 mb-6">Votre panier est vide pour le moment.</p>
              <a href="/#produits" className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">Découvrir nos cadres</a>
            </div>

            {/* Items list */}
            <div id="cart-page-items" className="divide-y divide-gray-200"></div>

            {/* Summary */}
            <div id="cart-summary" className="pt-6 mt-6 border-t border-gray-200 hidden">
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold text-gray-700">Total</span>
                <span id="cart-page-total" className="font-bold text-pink-600">0,00 €</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="/#produits" className="w-full sm:w-auto border-2 border-pink-500 text-pink-500 hover:bg-pink-50 font-semibold py-2 px-6 rounded-lg transition duration-300 text-center">Continuer les achats</a>
                <button className="w-full sm:w-auto bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">Passer la commande</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
