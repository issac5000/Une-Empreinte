// Footer partagé (repris du footer complet de la page d'accueil).

export default function SiteFooter() {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div className="sm:col-span-2 md:col-span-1 text-center md:text-left">
            <div className="logo flex items-center justify-center md:justify-start mb-4">
              <div className="logo-icon bg-pink-500 w-10 h-10 rounded-full flex items-center justify-center text-white mr-2">
                <i className="fas fa-child"></i>
              </div>
              <span className="title-font text-xl font-bold text-white">Une Empreinte</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md mx-auto md:mx-0">
              Créateur de cadres personnalisés pour immortaliser les plus beaux moments de vie.
            </p>
            <div className="flex justify-center md:justify-start space-x-3">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-gray-700/40 hover:bg-gray-700 flex items-center justify-center transition">
                <i className="fab fa-facebook-f text-gray-200"></i>
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-gray-700/40 hover:bg-gray-700 flex items-center justify-center transition">
                <i className="fab fa-instagram text-gray-200"></i>
              </a>
              <a href="#" aria-label="Pinterest" className="w-10 h-10 rounded-full bg-gray-700/40 hover:bg-gray-700 flex items-center justify-center transition">
                <i className="fab fa-pinterest-p text-gray-200"></i>
              </a>
            </div>
          </div>

          {/* Useful links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Liens utiles</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/#accueil" className="hover:text-white transition">Accueil</a></li>
              <li><a href="/#produits" className="hover:text-white transition">Nos cadres</a></li>
              <li><a href="/personnalisation#personnalisation" className="hover:text-white transition">Personnalisation</a></li>
              <li><a href="/#avis" className="hover:text-white transition">Avis clients</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Infos légales */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Informations</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition">CGV</a></li>
              <li><a href="#" className="hover:text-white transition">Mentions légales</a></li>
              <li><a href="#" className="hover:text-white transition">Politique de confidentialité</a></li>
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start justify-center md:justify-start">
                <i className="fas fa-user mt-1 mr-2 shrink-0"></i>
                <span>Suzanna Poghossian</span>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <i className="fas fa-map-marker-alt mt-1 mr-2 shrink-0"></i>
                <span className="max-w-xs">13, Avenue Claude Debussy 72100, Le Mans</span>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <i className="fas fa-envelope mt-1 mr-2 shrink-0"></i>
                <span>contact@douceurcadree.com</span>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <i className="fas fa-phone-alt mt-1 mr-2 shrink-0"></i>
                <span>(+33)698141123</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© 2023 Une Empreinte. Tous droits réservés.</p>
          <p className="mt-1">Site créé avec passion pour les souvenirs inoubliables.</p>
        </div>
      </div>
    </footer>
  );
}
