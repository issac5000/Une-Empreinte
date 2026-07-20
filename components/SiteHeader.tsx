// Header partagé (nav desktop + dropdown Personnalisation + panier latéral inerte).
// L'interactivité (menu mobile, compteur panier) est gérée globalement par <SiteScripts>.

export default function SiteHeader() {
  return (
    <header className="bg-white header-shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            id="mobile-menu-button"
            type="button"
            className="lg:hidden text-gray-700 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
            aria-label="Ouvrir le menu"
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
          <div className="logo min-w-0">
            <a href="/" className="group flex items-center gap-2 sm:gap-3 min-w-0 transition-all duration-300">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/image/logoheider.png" alt="Logo Une Empreinte" className="h-10 sm:h-12 w-auto shadow-sm" />
              <span className="font-playfair text-lg sm:text-xl font-bold text-gray-800 group-hover:text-pink-600 transition-colors duration-300 truncate max-w-[55vw] md:max-w-[60vw] lg:max-w-none">
                Une <span className="text-pink-500 group-hover:text-gray-800">Empreinte</span>
              </span>
            </a>
          </div>
        </div>

        <nav className="hidden lg:flex space-x-8">
          <a href="/#accueil" className="text-gray-700 hover:text-pink-500 transition">Accueil</a>

          <div className="relative group" tabIndex={0}>
            <a
              href="/personnalisation#personnalisation"
              className="inline-flex items-center gap-2 text-gray-700 hover:text-pink-500 transition"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span>Personnalisation</span>
              <i className="fas fa-chevron-down text-xs opacity-70 transition-transform duration-200 group-hover:rotate-180"></i>
            </a>
            {/* Dropdown menu */}
            <div className="absolute left-0 top-full mt-2 w-[18rem] md:w-[22rem] lg:w-[24rem] pointer-events-none opacity-0 translate-y-2 scale-95 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:scale-100 group-focus-within:pointer-events-auto">
              <div className="dropdown-card relative bg-white/90 backdrop-blur-md shadow-2xl ring-1 ring-black/5 rounded-2xl p-2 pointer-events-auto">
                <ul className="py-1">
                  <li className="menu-couple">
                    <a href="/couple" className="group/item flex items-center justify-between gap-3 px-3 py-2 rounded-xl text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition">
                      <span className="flex items-center gap-3 min-w-0"><span className="menu-icon"><i className="fas fa-heart"></i></span><span className="truncate">Couple</span></span>
                      <i className="fas fa-chevron-right text-xs opacity-0 group-hover/item:opacity-100 transition-opacity"></i>
                    </a>
                  </li>
                  <li className="menu-mariage">
                    <a href="/mariage" className="group/item flex items-center justify-between gap-3 px-3 py-2 rounded-xl text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition">
                      <span className="flex items-center gap-3 min-w-0"><span className="menu-icon"><i className="fas fa-ring"></i></span><span className="truncate">Mariage</span></span>
                      <i className="fas fa-chevron-right text-xs opacity-0 group-hover/item:opacity-100 transition-opacity"></i>
                    </a>
                  </li>
                  <li className="menu-naissance">
                    <a href="/naissance" className="group/item flex items-center justify-between gap-3 px-3 py-2 rounded-xl text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition">
                      <span className="flex items-center gap-3 min-w-0"><span className="menu-icon"><i className="fas fa-baby"></i></span><span className="truncate">Naissance</span></span>
                      <i className="fas fa-chevron-right text-xs opacity-0 group-hover/item:opacity-100 transition-opacity"></i>
                    </a>
                  </li>
                  <li className="menu-famille">
                    <a href="/famille" className="group/item flex items-center justify-between gap-3 px-3 py-2 rounded-xl text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition">
                      <span className="flex items-center gap-3 min-w-0"><span className="menu-icon"><i className="fas fa-people-group"></i></span><span className="truncate">Famille</span></span>
                      <i className="fas fa-chevron-right text-xs opacity-0 group-hover/item:opacity-100 transition-opacity"></i>
                    </a>
                  </li>
                  <li className="menu-souvenirs-eternels">
                    <a href="/souvenirs-eternels" className="group/item flex items-center justify-between gap-3 px-3 py-2 rounded-xl text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition">
                      <span className="flex items-center gap-3 min-w-0"><span className="menu-icon"><i className="fas fa-infinity"></i></span><span className="truncate">Souvenirs éternels</span></span>
                      <i className="fas fa-chevron-right text-xs opacity-0 group-hover/item:opacity-100 transition-opacity"></i>
                    </a>
                  </li>
                  <li className="menu-occasions-speciales">
                    <a href="/occasions-speciales" className="group/item flex items-center justify-between gap-3 px-3 py-2 rounded-xl text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition">
                      <span className="flex items-center gap-3 min-w-0"><span className="menu-icon"><i className="fas fa-gift"></i></span><span className="truncate">Occasions spéciales</span></span>
                      <i className="fas fa-chevron-right text-xs opacity-0 group-hover/item:opacity-100 transition-opacity"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <a href="/#avis" className="text-gray-700 hover:text-pink-500 transition">Avis</a>
          <a href="/contact" className="text-gray-700 hover:text-pink-500 transition">Contact</a>
        </nav>

        <div className="flex items-center space-x-4">
          <a href="/panier" className="text-gray-700 hover:text-pink-500 cart-icon">
            <i className="fas fa-bag-shopping text-xl"></i>
            <span className="ml-1 hidden lg:inline">Panier</span>
            <span className="cart-count">0</span>
          </a>
          <a href="/compte" className="hidden lg:flex items-center text-gray-700 hover:text-pink-500">
            <i className="fas fa-user text-xl"></i>
            <span className="ml-1 hidden lg:inline">Compte</span>
          </a>
        </div>
      </div>

      {/* Cart Sidebar (inerte, hors-écran — repris à l'identique de la maquette) */}
      <div id="cart-sidebar" className="fixed inset-y-0 right-0 w-80 bg-white shadow-lg z-50 p-4 transform translate-x-full transition-transform duration-300">
        <div className="flex justify-between items-center mb-6">
          <h3 className="title-font text-xl font-bold">Votre Panier</h3>
          <button id="close-cart" className="text-gray-500">
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>

        <div id="cart-items" className="space-y-4 mb-6">
          <div className="empty-cart-message text-center py-8">
            <i className="fas fa-shopping-basket text-4xl text-gray-300 mb-3"></i>
            <p className="text-gray-500">Votre panier est vide</p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4 mt-auto">
          <div className="flex justify-between mb-4">
            <span className="font-semibold">Total</span>
            <span className="font-bold text-pink-500" id="cart-total">0,00 €</span>
          </div>
          <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 mb-3">
            Commander
          </button>
          <button id="continue-shopping" className="w-full border-2 border-pink-500 text-pink-500 hover:bg-pink-50 font-semibold py-2 px-6 rounded-lg transition duration-300">
            Continuer les achats
          </button>
        </div>
      </div>
    </header>
  );
}
