export default function HomePage() {
  return (
    <>
      {/* Hero Section (full-bleed video with overlay text) */}
      <section id="accueil" className="relative h-[60vh] md:h-[70vh] lg:h-[80vh]">
        {/* Full video background */}
        <video
          className="absolute inset-0 w-full h-full object-cover hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/empreinte.jpeg"
        >
          <source src="/empreintevideo.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture vidéo.
        </video>

        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent"></div>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#f9e3c5]/45 via-[#f6d8b8]/30 to-transparent"></div>

        {/* Text content overlay */}
        <div className="relative z-10 h-full">
          <div className="container mx-auto h-full px-4 flex items-center justify-center">
            <div className="max-w-2xl text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)] text-center">
              <h1 className="hero-title-premium">
                <span className="hero-title-line">Immortalisez vos</span>
                <span className="hero-title-accent">premiers instants</span>
                <span className="hero-title-line">avec élégance</span>
              </h1>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#produits" className="hero-cta-premium hero-cta-secondary group">
                  <span className="hero-cta-text">Découvrir nos créations</span>
                  <span className="hero-cta-shine"></span>
                </a>
                <a href="/personnalisation#personnalisation" className="hero-cta-premium hero-cta-primary group">
                  <span className="hero-cta-text">Personnaliser un cadre</span>
                  <span className="hero-cta-shine"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Logo between hero and features */}
      <section className="pt-2 pb-0 md:pt-3 md:pb-1">
        <div className="container mx-auto px-4 text-center">
          <img src="/logook.jpeg" alt="Logo Une Empreinte" className="mx-auto h-44 sm:h-48 md:h-56 lg:h-64 w-auto object-contain" />
        </div>
      </section>

      {/* Features Section */}
      <section className="pt-2 md:pt-3 lg:pt-4 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative text-center mb-10 md:mb-12">
            {/* Bulle décorative */}
            <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 mx-auto w-3/4 h-24 bg-pink-100 opacity-40 rounded-full blur-2xl -z-10"></div>

            {/* Titre */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight leading-tight title-font">
              Pourquoi choisir <span className="text-pink-500">Une Empreinte</span> ?
            </h2>

            {/* Slogan */}
            <p className="mt-4 text-gray-500 text-base md:text-lg">
              Des créations uniques et de qualité pour immortaliser vos plus beaux souvenirs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card text-center p-6 rounded-lg bg-pink-50 hover:bg-pink-100 transition-all transform hover:-translate-y-2 hover:shadow-lg duration-300">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-paint-brush text-pink-500 text-2xl"></i>
              </div>
              <h3 className="title-font text-xl font-semibold mb-3">Personnalisation unique</h3>
              <p className="text-gray-600">
                Chaque cadre est créé sur mesure selon vos envies et vos photos pour un résultat unique.
              </p>
            </div>

            <div className="feature-card text-center p-6 rounded-lg bg-pink-50 hover:bg-pink-100 transition-all transform hover:-translate-y-2 hover:shadow-lg duration-300">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-star text-pink-500 text-2xl"></i>
              </div>
              <h3 className="title-font text-xl font-semibold mb-3">Qualité premium</h3>
              <p className="text-gray-600">
                Nous utilisons uniquement des matériaux de haute qualité pour une durabilité exceptionnelle.
              </p>
            </div>

            <div className="feature-card text-center p-6 rounded-lg bg-pink-50 hover:bg-pink-100 transition-all transform hover:-translate-y-2 hover:shadow-lg duration-300">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-truck text-pink-500 text-2xl"></i>
              </div>
              <h3 className="title-font text-xl font-semibold mb-3">Livraison rapide</h3>
              <p className="text-gray-600">
                Votre cadre personnalisé est livré en 3-5 jours ouvrés après validation de votre commande.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produits" className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="relative text-center mb-16 animate-fade-in-up">
            {/* Tache décorative adaptée au fond rose */}
            <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 mx-auto w-3/4 h-24 bg-white opacity-20 rounded-full blur-2xl -z-10"></div>

            {/* Titre */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight leading-tight title-font">
              Nos collections de <span className="text-pink-500">cadres</span>
            </h2>

            {/* Slogan */}
            <p className="mt-4 text-gray-600 text-base md:text-lg">
              Découvrez nos différentes gammes de cadres personnalisables
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 safe-gutters">
            {/* Product 1 */}
            <div className="product-card bg-white rounded-2xl overflow-hidden shadow-md">
              <div className="media relative overflow-hidden rounded-t-2xl">
                <img src="/image2.jpeg" alt="Cadre naissance" className="w-full h-full object-cover block" />
                <div className="ribbon">
                  <span>Best-seller</span>
                </div>
              </div>
              <div className="p-6 flex flex-col">
                <h3 className="title-font text-xl font-semibold mb-2">Cadre naissance</h3>
                <p className="text-gray-600 mb-4 flex-1">
                  Cadre personnalisable avec prénom, date de naissance et empreintes de bébé.
                </p>
                <div className="flex flex-wrap items-center gap-3 min-w-0">
                  <span className="text-pink-500 font-bold text-lg">49,90€</span>
                  <div className="flex flex-wrap gap-3 ml-auto w-full sm:w-auto">
                    <a href="/personnalisation#personnalisation" className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition text-center w-full sm:w-auto" aria-label="Personnaliser le cadre naissance">
                      Personnaliser
                    </a>
                    <button
                      className="border-2 border-pink-500 text-pink-600 hover:bg-pink-50 px-4 py-2 rounded-lg transition add-to-cart w-full sm:w-auto"
                      data-id="1"
                      data-name="Cadre naissance"
                      data-price="49.90"
                      aria-label="Ajouter au panier Cadre naissance"
                    >
                      Ajouter au panier
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="product-card bg-white rounded-2xl overflow-hidden shadow-md">
              <div className="media relative overflow-hidden rounded-t-2xl">
                <img src="/image1.jpeg" alt="Cadre famille" className="w-full h-full object-cover block" />
                <div className="ribbon">
                  <span>Populaire</span>
                </div>
              </div>
              <div className="p-6 flex flex-col">
                <h3 className="title-font text-xl font-semibold mb-2">Cadre couple</h3>
                <p className="text-gray-600 mb-4 flex-1">
                  Cadre photo personnalisable pour immortaliser les moments en famille.
                </p>
                <div className="flex flex-wrap items-center gap-3 min-w-0">
                  <span className="text-pink-500 font-bold text-lg">59,90€</span>
                  <div className="flex flex-wrap gap-3 ml-auto w-full sm:w-auto">
                    <a href="/personnalisation#personnalisation" className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition text-center w-full sm:w-auto" aria-label="Personnaliser le cadre couple">
                      Personnaliser
                    </a>
                    <button
                      className="border-2 border-pink-500 text-pink-600 hover:bg-pink-50 px-4 py-2 rounded-lg transition add-to-cart w-full sm:w-auto"
                      data-id="2"
                      data-name="Cadre famille"
                      data-price="59.90"
                      aria-label="Ajouter au panier Cadre couple"
                    >
                      Ajouter au panier
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="product-card bg-white rounded-2xl overflow-hidden shadow-md">
              <div className="media relative overflow-hidden rounded-t-2xl">
                <img src="/image3.jpeg" alt="Cadre empreintes" className="w-full h-full object-cover block" />
                <div className="ribbon">
                  <span>Nouveauté</span>
                </div>
              </div>
              <div className="p-6 flex flex-col">
                <h3 className="title-font text-xl font-semibold mb-2">Cadre empreintes</h3>
                <p className="text-gray-600 mb-4 flex-1">
                  Cadre avec empreintes de mains et pieds de bébé, personnalisable.
                </p>
                <div className="flex flex-wrap items-center gap-3 min-w-0">
                  <span className="text-pink-500 font-bold text-lg">69,90€</span>
                  <div className="flex flex-wrap gap-3 ml-auto w-full sm:w-auto">
                    <a href="/personnalisation#personnalisation" className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition text-center w-full sm:w-auto" aria-label="Personnaliser le cadre empreintes">
                      Personnaliser
                    </a>
                    <button
                      className="border-2 border-pink-500 text-pink-600 hover:bg-pink-50 px-4 py-2 rounded-lg transition add-to-cart w-full sm:w-auto"
                      data-id="3"
                      data-name="Cadre empreintes"
                      data-price="69.90"
                      aria-label="Ajouter au panier Cadre empreintes"
                    >
                      Ajouter au panier
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="#" className="inline-block border-2 border-pink-500 text-pink-500 hover:bg-pink-50 font-semibold py-3 px-6 rounded-lg transition duration-300">
              Voir toute la collection
            </a>
          </div>
        </div>
      </section>

      {/* Engagements Section */}
      <section id="engagements" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative text-center mb-16 animate-fade-in-up">
            <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 mx-auto w-3/4 h-20 bg-pink-100 opacity-40 rounded-full blur-2xl -z-10"></div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight leading-tight title-font">
              Nos <span className="text-pink-500">engagements</span>
            </h2>
            <p className="mt-4 text-gray-600 text-base md:text-lg">
              Des garanties claires pour une expérience sereine
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:items-stretch gap-6 reveal-stagger">
            {/* Paiement sécurisé */}
            <div className="feature-card text-center p-6 rounded-lg bg-white border border-pink-200 hover:bg-pink-50 transition-all transform hover:-translate-y-2 hover:shadow-lg duration-300">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-lock text-pink-500 text-2xl" aria-hidden="true"></i>
              </div>
              <h3 className="title-font text-xl font-semibold mb-2">Paiement sécurisé</h3>
              <p className="text-gray-600">Transactions chiffrées et protégées via nos partenaires de confiance.</p>
            </div>

            {/* Emballage cadeau inclus */}
            <div className="feature-card text-center p-6 rounded-lg bg-white border border-pink-200 hover:bg-pink-50 transition-all transform hover:-translate-y-2 hover:shadow-lg duration-300">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-gift text-pink-500 text-2xl" aria-hidden="true"></i>
              </div>
              <h3 className="title-font text-xl font-semibold mb-2">Emballage cadeau inclus</h3>
              <p className="text-gray-600">Prêt à offrir, avec une présentation élégante et soignée.</p>
            </div>

            {/* Livraison suivie */}
            <div className="feature-card text-center p-6 rounded-lg bg-white border border-pink-200 hover:bg-pink-50 transition-all transform hover:-translate-y-2 hover:shadow-lg duration-300">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-truck-fast text-pink-500 text-2xl" aria-hidden="true"></i>
              </div>
              <h3 className="title-font text-xl font-semibold mb-2">Livraison suivie</h3>
              <p className="text-gray-600">Un numéro de suivi pour suivre votre colis en temps réel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customization Section */}
      <section id="personnalisation" className="py-16 bg-pink-50 hidden">
        <div className="container mx-auto px-4">
          <div className="relative text-center mb-16 animate-fade-in-up">
            {/* Effet de tâche adaptée au fond rose */}
            <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 mx-auto w-3/4 h-20 bg-white opacity-20 rounded-full blur-2xl -z-10"></div>

            {/* Titre */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight leading-tight title-font">
              Personalisez<span className="text-pink-500"> votre cadre</span>
            </h2>

            {/* Slogan */}
            <p className="mt-4 text-gray-600 text-base md:text-lg">
              Créez un cadre unique en quelques étapes simples
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-pink-50 rounded-xl p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Preview */}
            <div className="p-0 md:p-2 rounded-xl flex flex-col items-center justify-center">
              <div id="frame-preview" className="w-full h-64 bg-gray-100 rounded-xl mb-4 flex items-center justify-center text-gray-400 border border-gray-200">
                <i className="fas fa-image text-4xl"></i>
              </div>
              <h3 className="title-font text-xl font-semibold mb-2">Votre cadre personnalisé</h3>
              <p className="text-gray-600 text-center">
                Aperçu de votre création. Les modifications apparaîtront ici.
              </p>
              <div id="preview-details" className="mt-4 w-full text-left text-sm text-gray-700 hidden">
                <p><strong>Modèle:</strong> <span id="preview-model">Naissance</span></p>
                <p><strong>Prénom:</strong> <span id="preview-name"></span></p>
                <p><strong>Date de naissance:</strong> <span id="preview-date"></span></p>
                <p><strong>Message:</strong> <span id="preview-message"></span></p>
              </div>
            </div>

            {/* Customization Form */}
            <div>
              <form id="customization-form">
                <div className="mb-6">
                  <h3 className="title-font text-xl font-semibold mb-4">1. Choisissez votre modèle</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 select-none">
                    <label className="cursor-pointer">
                      <input type="radio" name="model" value="Naissance" className="hidden custom-radio" defaultChecked />
                      <div className="model-card border-2 border-gray-200 rounded-2xl p-3 transition shadow-sm hover:shadow-md hover:-translate-y-1 bg-white">
                        <img src="/image2.jpeg" alt="Modèle naissance" className="w-full aspect-square object-cover rounded-xl" />
                        <p className="text-center mt-3 text-sm font-medium">Naissance</p>
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input type="radio" name="model" value="Famille" className="hidden custom-radio" />
                      <div className="model-card border-2 border-gray-200 rounded-2xl p-3 transition shadow-sm hover:shadow-md hover:-translate-y-1 bg-white">
                        <img src="/image1.jpeg" alt="Modèle famille" className="w-full aspect-square object-cover rounded-xl" />
                        <p className="text-center mt-3 text-sm font-medium">Famille</p>
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input type="radio" name="model" value="Empreintes" className="hidden custom-radio" />
                      <div className="model-card border-2 border-gray-200 rounded-2xl p-3 transition shadow-sm hover:shadow-md hover:-translate-y-1 bg-white">
                        <img src="/image3.jpeg" alt="Modèle empreintes" className="w-full aspect-square object-cover rounded-xl" />
                        <p className="text-center mt-3 text-sm font-medium">Empreintes</p>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="title-font text-xl font-semibold mb-4">2. Personnalisez votre cadre</h3>
                  <div className="space-y-4">
                    <div className="relative">
                      <input type="text" id="name" name="name" className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring-1 focus:ring-pink-500" placeholder=" " required />
                      <label htmlFor="name" className="floating-label">Prénom de bébé</label>
                    </div>
                    <div className="relative">
                      <input type="date" id="birthdate" name="birthdate" className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring-1 focus:ring-pink-500" placeholder=" " required />
                      <label htmlFor="birthdate" className="floating-label">Date de naissance</label>
                    </div>
                    <div className="relative">
                      <textarea id="message" name="message" className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring-1 focus:ring-pink-500" rows={2} placeholder=" "></textarea>
                      <label htmlFor="message" className="floating-label">Message personnalisé (optionnel)</label>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="title-font text-xl font-semibold mb-4">3. Ajoutez vos photos</h3>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center" id="drag-drop-area">
                    <i className="fas fa-cloud-upload-alt text-4xl text-gray-400 mb-3"></i>
                    <p className="text-gray-600 mb-2">Glissez-déposez vos photos ici</p>
                    <p className="text-sm text-gray-500 mb-4">ou</p>
                    <label className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition cursor-pointer">
                      Parcourir les fichiers
                      <input type="file" id="photo-upload" className="hidden" accept="image/*" multiple />
                    </label>
                    <div id="upload-preview" className="grid grid-cols-3 gap-2 mt-4"></div>
                  </div>
                </div>

                <button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 add-to-cart-custom" data-price="49.90">
                  Ajouter au panier - <span id="product-price">49,90€</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="avis" className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="relative text-center mb-16 animate-fade-in-up">
            {/* Tache décorative blanche pour fond rose */}
            <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 mx-auto w-3/4 h-24 bg-white opacity-20 rounded-full blur-2xl -z-10"></div>

            {/* Titre principal */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight leading-tight title-font">
              Ce que disent <span className="text-pink-500">nos clients</span>
            </h2>

            {/* Slogan */}
            <p className="mt-4 text-gray-600 text-base md:text-lg">
              Découvrez les témoignages de parents ravis par nos créations
            </p>
          </div>

          <div className="relative mt-10">
            {/* Track: stacked on mobile, grid on desktop */}
            <div id="avis-track" className="grid grid-cols-1 md:grid-cols-3 md:items-stretch gap-5 md:gap-8 overflow-visible">
              {/* Testimonial 1 */}
              <article className="group h-full">
                <div className="testimonial-modern bg-white transition-all transform group-hover:-translate-y-2 group-hover:shadow-lg duration-300 group-hover:bg-pink-50 p-7 md:p-8 reveal h-full flex flex-col">
                  <div className="quote-badge" aria-hidden="true">“</div>
                  <div className="flex items-center justify-end rating-stars text-sm" aria-hidden="true">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                  </div>
                  <blockquote className="testimonial-quote text-balance mt-3 flex-1">
                    Le cadre naissance est superbe, la personnalisation est soignée et la qualité au rendez-vous. Un souvenir précieux que l’on gardera longtemps.
                  </blockquote>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="avatar-ring"><div className="avatar-initial">ML</div></div>
                      <div className="ml-3">
                        <div className="font-semibold text-gray-800">Marie L.</div>
                        <div className="text-xs text-gray-500">Aix-en-Provence</div>
                      </div>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-white/80 border border-pink-200 text-gray-600">Avis vérifié</span>
                  </div>
                </div>
              </article>

              {/* Testimonial 2 */}
              <article className="group h-full">
                <div className="testimonial-modern bg-white transition-all transform group-hover:-translate-y-2 group-hover:shadow-lg duration-300 group-hover:bg-pink-50 p-7 md:p-8 reveal h-full flex flex-col">
                  <div className="quote-badge" aria-hidden="true">“</div>
                  <div className="flex items-center justify-end rating-stars text-sm" aria-hidden="true">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                  </div>
                  <blockquote className="testimonial-quote text-balance mt-3 flex-1">
                    Commande fluide, livraison soignée et rapide. Le rendu est élégant sans être kitsch — exactement ce que l’on cherchait pour notre salon.
                  </blockquote>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="avatar-ring"><div className="avatar-initial">TD</div></div>
                      <div className="ml-3">
                        <div className="font-semibold text-gray-800">Thomas D.</div>
                        <div className="text-xs text-gray-500">Lyon</div>
                      </div>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-white/80 border border-pink-200 text-gray-600">Avis vérifié</span>
                  </div>
                </div>
              </article>

              {/* Testimonial 3 */}
              <article className="group h-full">
                <div className="testimonial-modern bg-white transition-all transform group-hover:-translate-y-2 group-hover:shadow-lg duration-300 group-hover:bg-pink-50 p-7 md:p-8 reveal h-full flex flex-col">
                  <div className="quote-badge" aria-hidden="true">“</div>
                  <div className="flex items-center justify-end rating-stars text-sm" aria-hidden="true">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                  </div>
                  <blockquote className="testimonial-quote text-balance mt-3 flex-1">
                    Offert pour une naissance : émotion garantie. Le papier, les couleurs et la finition sont très qualitatifs. Un cadeau qui fait vraiment plaisir.
                  </blockquote>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="avatar-ring"><div className="avatar-initial">SR</div></div>
                      <div className="ml-3">
                        <div className="font-semibold text-gray-800">Sophie R.</div>
                        <div className="text-xs text-gray-500">Bordeaux</div>
                      </div>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-white/80 border border-pink-200 text-gray-600">Avis vérifié</span>
                  </div>
                </div>
              </article>
            </div>

            {/* Mobile nav arrows removed: stacked layout on mobile */}
          </div>

          {/* Dots navigation removed on mobile: stacked layout */}

          <div className="text-center mt-8 md:mt-10">
            <a href="#" className="inline-block px-6 py-2 border border-pink-500 text-pink-600 font-semibold rounded hover:bg-pink-500 hover:text-white transition">
              Lire tous les avis
            </a>
          </div>
        </div>
        {/* fin container */}
      </section>

      {/* Story Section: L’histoire de Une Empreinte (moved here before FAQ) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl relative reveal">
          {/* Tâche décorative gris clair pour fond blanc */}
          <div className="absolute inset-x-0 top-12 mx-auto w-3/4 h-20 bg-gray-100 opacity-30 rounded-full blur-2xl -z-10"></div>

          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 title-font">
              L’histoire de <span className="text-pink-500">Une Empreinte</span>
            </h2>
            <div className="w-16 h-1 bg-pink-300 mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="rounded-3xl border border-pink-200 bg-pink-50 shadow-sm p-6 sm:p-8 md:p-10 text-center">
            <p className="text-gray-700 text-lg leading-relaxed">
              Chaque naissance, chaque instant en famille est un moment unique. Nous avons créé
              <span className="font-semibold">Une Empreinte</span> pour que ces souvenirs ne s’effacent jamais. Nos cadres personnalisés
              ne sont pas seulement des objets décoratifs, ce sont des <span className="italic">témoins d’émotions</span>, des morceaux de vie
              qui traverseront les années.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-6">
              Derrière chaque création se cache une volonté simple: offrir aux familles un souvenir intemporel, pensé avec soin,
              fabriqué avec amour, et livré pour marquer les moments les plus précieux.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative text-center mb-16 animate-fade-in-up">
            {/* Effet de tâche blanche adaptée au fond rose */}
            <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 mx-auto w-3/4 h-20 bg-white opacity-20 rounded-full blur-2xl -z-10"></div>

            {/* Titre principal */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight leading-tight title-font">
              Questions <span className="text-pink-500">fréquentes</span>
            </h2>

            {/* Sous-titre */}
            <p className="mt-4 text-gray-600 text-base md:text-lg">
              Trouvez les réponses à vos questions sur nos cadres personnalisés
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* FAQ Item 1 */}
            <div className="mb-4 border-b border-gray-200 pb-4">
              <button className="faq-toggle w-full flex justify-between items-center text-left">
                <h3 className="title-font text-lg font-semibold text-gray-800">
                  Combien de temps prend la personnalisation et la livraison ?
                </h3>
                <i className="fas fa-chevron-down text-pink-500 transition-transform duration-300"></i>
              </button>
              <div className="faq-content hidden mt-3 text-gray-600">
                <p>
                  Après validation de votre commande, nous créons votre cadre personnalisé sous 24-48h. La livraison prend ensuite 2-3 jours ouvrés en France métropolitaine. Comptez donc 3-5 jours ouvrés au total entre votre commande et la réception.
                </p>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="mb-4 border-b border-gray-200 pb-4">
              <button className="faq-toggle w-full flex justify-between items-center text-left">
                <h3 className="title-font text-lg font-semibold text-gray-800">
                  Quels formats de photos puis-je utiliser ?
                </h3>
                <i className="fas fa-chevron-down text-pink-500 transition-transform duration-300"></i>
              </button>
              <div className="faq-content hidden mt-3 text-gray-600">
                <p>
                  Nous acceptons tous les formats d'image courants (JPG, PNG, etc.). Pour une qualité optimale, nous recommandons des photos en haute résolution (minimum 1200x800 pixels). Vous pouvez uploader jusqu'à 5 photos par cadre.
                </p>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="mb-4 border-b border-gray-200 pb-4">
              <button className="faq-toggle w-full flex justify-between items-center text-left">
                <h3 className="title-font text-lg font-semibold text-gray-800">
                  Puis-je modifier ma commande après validation ?
                </h3>
                <i className="fas fa-chevron-down text-pink-500 transition-transform duration-300"></i>
              </button>
              <div className="faq-content hidden mt-3 text-gray-600">
                <p>
                  Vous pouvez modifier votre commande dans les 2 heures suivant sa validation en nous contactant par email à contact@douceurcadree.com. Passé ce délai, la production étant lancée, les modifications ne sont plus possibles.
                </p>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="mb-4 border-b border-gray-200 pb-4">
              <button className="faq-toggle w-full flex justify-between items-center text-left">
                <h3 className="title-font text-lg font-semibold text-gray-800">
                  Quelles sont les options de livraison disponibles ?
                </h3>
                <i className="fas fa-chevron-down text-pink-500 transition-transform duration-300"></i>
              </button>
              <div className="faq-content hidden mt-3 text-gray-600">
                <p>
                  Nous proposons la livraison standard (gratuite) en 2-3 jours ouvrés et la livraison express (+9,90€) en 24h. Tous nos colis sont assurés et suivis. Nous livrons en France métropolitaine, Belgique, Luxembourg et Suisse.
                </p>
              </div>
            </div>

            {/* FAQ Item 5 */}
            <div className="mb-4 border-b border-gray-200 pb-4">
              <button className="faq-toggle w-full flex justify-between items-center text-left">
                <h3 className="title-font text-lg font-semibold text-gray-800">
                  Comment prendre soin de mon cadre ?
                </h3>
                <i className="fas fa-chevron-down text-pink-500 transition-transform duration-300"></i>
              </button>
              <div className="faq-content hidden mt-3 text-gray-600">
                <p>
                  Nos cadres nécessitent peu d'entretien. Un chiffon doux et sec suffit pour enlever la poussière. Évitez les produits chimiques, l'humidité excessive et la lumière directe du soleil pour préserver les couleurs sur le long terme.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="/contact" className="inline-block border-2 border-pink-500 text-pink-500 hover:bg-pink-50 font-semibold py-3 px-6 rounded-lg transition duration-300">
              Plus de questions ? Contactez-nous
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
