// Menu mobile partagé (drawer gauche + sous-menu Personnalisation) + backdrop.
// Ouverture/fermeture gérées globalement par <SiteScripts>.

export default function SiteMobileMenu() {
  return (
    <>
      <div id="mobile-menu" className="mobile-menu fixed inset-y-0 left-0 bg-white shadow-lg z-50 p-4 overflow-y-auto">
        <div className="mnav-header flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/U (1).png" alt="Logo" className="w-8 h-8 rounded-md" />
            <span className="mnav-title title-font text-lg">Une <span className="text-pink-500">Empreinte</span></span>
          </div>
          <button id="close-mobile-menu" className="text-gray-500" aria-label="Fermer le menu">
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>

        <nav aria-label="Navigation mobile">
          <ul className="mnav">
            <li>
              <a href="/#accueil" className="mnav-item">
                <span className="mnav-left"><span className="mnav-icon"><i className="fas fa-house"></i></span><span className="mnav-text">Accueil</span></span>
                <i className="fas fa-chevron-right mnav-chevron"></i>
              </a>
            </li>
            <li>
              <a href="/personnalisation#personnalisation" className="mnav-item submenu-toggle" aria-expanded="false" aria-controls="submenu-personnalisation">
                <span className="mnav-left"><span className="mnav-icon"><i className="fas fa-wand-magic-sparkles"></i></span><span className="mnav-text">Personnalisation</span></span>
                <i className="fas fa-chevron-right mnav-chevron transition-transform"></i>
              </a>
              <ul id="submenu-personnalisation" className="mnav-submenu hidden">
                <li className="menu-couple">
                  <a href="/couple" className="mnav-subitem">
                    <span className="mnav-subleft"><span className="mnav-subicon"><i className="fas fa-heart"></i></span><span className="truncate">Couple</span></span>
                    <i className="fas fa-chevron-right mnav-subchev"></i>
                  </a>
                </li>
                <li className="menu-mariage">
                  <a href="/mariage" className="mnav-subitem">
                    <span className="mnav-subleft"><span className="mnav-subicon"><i className="fas fa-ring"></i></span><span className="truncate">Mariage</span></span>
                    <i className="fas fa-chevron-right mnav-subchev"></i>
                  </a>
                </li>
                <li className="menu-naissance">
                  <a href="/naissance" className="mnav-subitem">
                    <span className="mnav-subleft"><span className="mnav-subicon"><i className="fas fa-baby"></i></span><span className="truncate">Naissance</span></span>
                    <i className="fas fa-chevron-right mnav-subchev"></i>
                  </a>
                </li>
                <li className="menu-famille">
                  <a href="/famille" className="mnav-subitem">
                    <span className="mnav-subleft"><span className="mnav-subicon"><i className="fas fa-people-group"></i></span><span className="truncate">Famille</span></span>
                    <i className="fas fa-chevron-right mnav-subchev"></i>
                  </a>
                </li>
                <li className="menu-souvenirs-eternels">
                  <a href="/souvenirs-eternels" className="mnav-subitem">
                    <span className="mnav-subleft"><span className="mnav-subicon"><i className="fas fa-infinity"></i></span><span className="truncate">Souvenirs éternels</span></span>
                    <i className="fas fa-chevron-right mnav-subchev"></i>
                  </a>
                </li>
                <li className="menu-occasions-speciales">
                  <a href="/occasions-speciales" className="mnav-subitem">
                    <span className="mnav-subleft"><span className="mnav-subicon"><i className="fas fa-gift"></i></span><span className="truncate">Occasions spéciales</span></span>
                    <i className="fas fa-chevron-right mnav-subchev"></i>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/#avis" className="mnav-item">
                <span className="mnav-left"><span className="mnav-icon"><i className="fas fa-star"></i></span><span className="mnav-text">Avis</span></span>
                <i className="fas fa-chevron-right mnav-chevron"></i>
              </a>
            </li>
            <li>
              <a href="/contact" className="mnav-item">
                <span className="mnav-left"><span className="mnav-icon"><i className="fas fa-envelope"></i></span><span className="mnav-text">Contact</span></span>
                <i className="fas fa-chevron-right mnav-chevron"></i>
              </a>
            </li>
          </ul>
          <div className="mnav-divider"></div>
          <a href="/personnalisation#personnalisation" className="mnav-cta" aria-label="Personnaliser un cadre">
            Personnaliser un cadre
          </a>
        </nav>

        <div className="mt-6 text-sm text-gray-500">
          <div className="flex items-center justify-between">
            <a href="/panier" className="hover:text-pink-500"><i className="fas fa-bag-shopping mr-2"></i>Panier <span className="cart-count ml-1">0</span></a>
            <a href="/compte" className="hover:text-pink-500"><i className="fas fa-user mr-2"></i>Compte</a>
          </div>
        </div>
      </div>
      {/* Backdrop for mobile menu */}
      <div id="mobile-backdrop" className="fixed inset-0 bg-black/40 hidden z-40" aria-hidden="true"></div>
    </>
  );
}
