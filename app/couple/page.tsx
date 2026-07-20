export default function CouplePage() {
  return (
    <main className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 relative">
          <div className="absolute inset-x-0 -top-2 mx-auto w-3/4 h-20 bg-pink-100 opacity-40 rounded-full blur-2xl -z-10"></div>
          <h1 className="title-font text-3xl md:text-5xl font-extrabold text-gray-800">Collection <span className="text-pink-500">Couple</span></h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Cadres personnalisés pour célébrer vos plus beaux moments à deux.</p>
        </div>
        <div className="text-center mb-10">
          <a href="/personnalisation#personnalisation" className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg transition">Personnaliser un cadre</a>
        </div>

        {/* Grille des modèles Couple */}
        <section aria-label="Modèles Couple" className="py-6 bg-pink-50 rounded-2xl">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 safe-gutters">
              {/* Modèle 1 */}
              <div className="product-card bg-white rounded-2xl overflow-hidden shadow-md reveal">
                <a href="/produit-intemporel" className="media relative overflow-hidden rounded-t-2xl block">
                  <img src="/WhatsApp Image 2025-09-11 at 13.10.11.jpeg" alt="L'intemporel — fiche produit" className="w-full h-full object-cover block" />
                  <div className="ribbon"><span>Nouveau</span></div>
                </a>
                <div className="p-6 flex flex-col">
                  <h3 className="title-font text-xl font-semibold mb-2"><a href="/produit-intemporel" className="hover:underline">L'intemporel</a></h3>
                  <p className="text-gray-600 mb-4 flex-1">Un amour qui dure au-delà du temps.</p>
                  <div className="flex flex-wrap items-center gap-3 min-w-0">
                    <span className="text-pink-500 font-bold text-lg">59,90€</span>
                    <div className="flex flex-wrap gap-3 ml-auto w-full sm:w-auto">
                      <a href="/produit-intemporel" className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition text-center w-full sm:w-auto" aria-label="Ouvrir la fiche produit L'intemporel">Voir la fiche</a>
                      <button className="border-2 border-pink-500 text-pink-600 hover:bg-pink-50 px-4 py-2 rounded-lg transition add-to-cart w-full sm:w-auto"
                              data-id="couple-2025-09-11-1"
                              data-name="L'intemporel"
                              data-price="59.90"
                              aria-label="Ajouter au panier L'intemporel">Ajouter au panier</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modèle 2 */}
              <div className="product-card bg-white rounded-2xl overflow-hidden shadow-md reveal">
                <a href="/produit-promesse" className="media relative overflow-hidden rounded-t-2xl block">
                  <img src="/WhatsApp Image 2025-09-11 at 13.11.25.jpeg" alt="La promesse — fiche produit" className="w-full h-full object-cover block" />
                  <div className="ribbon"><span>Nouveau</span></div>
                </a>
                <div className="p-6 flex flex-col">
                  <h3 className="title-font text-xl font-semibold mb-2"><a href="/produit-promesse" className="hover:underline">La promesse</a></h3>
                  <p className="text-gray-600 mb-4 flex-1">Pureté d'engagement et de sincérité.</p>
                  <div className="flex flex-wrap items-center gap-3 min-w-0">
                    <span className="text-pink-500 font-bold text-lg">59,90€</span>
                    <div className="flex flex-wrap gap-3 ml-auto w-full sm:w-auto">
                      <a href="/produit-promesse" className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition text-center w-full sm:w-auto" aria-label="Ouvrir la fiche produit La promesse">Voir la fiche</a>
                      <button className="border-2 border-pink-500 text-pink-600 hover:bg-pink-50 px-4 py-2 rounded-lg transition add-to-cart w-full sm:w-auto"
                              data-id="couple-2025-09-11-2"
                              data-name="La promesse"
                              data-price="59.90"
                              aria-label="Ajouter au panier La promesse">Ajouter au panier</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modèle 3 */}
              <div className="product-card bg-white rounded-2xl overflow-hidden shadow-md reveal">
                <a href="/produit-flamme" className="media relative overflow-hidden rounded-t-2xl block">
                  <img src="/WhatsApp Image 2025-09-11 at 13.14.29.jpeg" alt="La Flamme — fiche produit" className="w-full h-full object-cover block" />
                  <div className="ribbon"><span>Nouveau</span></div>
                </a>
                <div className="p-6 flex flex-col">
                  <h3 className="title-font text-xl font-semibold mb-2"><a href="/produit-flamme" className="hover:underline">La Flamme</a></h3>
                  <p className="text-gray-600 mb-4 flex-1">La passion, l'énergie et le feu du couple.</p>
                  <div className="flex flex-wrap items-center gap-3 min-w-0">
                    <span className="text-pink-500 font-bold text-lg">59,90€</span>
                    <div className="flex flex-wrap gap-3 ml-auto w-full sm:w-auto">
                      <a href="/produit-flamme" className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition text-center w-full sm:w-auto" aria-label="Ouvrir la fiche produit La Flamme">Voir la fiche</a>
                      <button className="border-2 border-pink-500 text-pink-600 hover:bg-pink-50 px-4 py-2 rounded-lg transition add-to-cart w-full sm:w-auto"
                              data-id="couple-2025-09-11-3"
                              data-name="La Flamme"
                              data-price="59.90"
                              aria-label="Ajouter au panier La Flamme">Ajouter au panier</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
