import type { Metadata } from "next";

export const metadata: Metadata = { title: "Une Empreinte — Personnalisez votre cadre" };

// Formulaire statique (inerte) ; le bouton .add-to-cart-custom est câblé par <SiteScripts>.
export default function PersonnalisationPage() {
  return (
    <section id="personnalisation" className="py-16 bg-pink-50">
      <div className="container mx-auto px-4">
        <div className="relative text-center mb-16 animate-fade-in-up">
          {/* Effet de tâche adaptée au fond rose */}
          <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 mx-auto w-3/4 h-20 bg-white opacity-20 rounded-full blur-2xl -z-10"></div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight leading-tight title-font">
            Personalisez<span className="text-pink-500"> votre cadre</span>
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg">
            Créez un cadre unique en quelques étapes simples
          </p>
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
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/image2.jpeg" alt="Modèle naissance" className="w-full aspect-square object-cover rounded-xl" />
                        <p className="text-center mt-3 text-sm font-medium">Naissance</p>
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input type="radio" name="model" value="Famille" className="hidden custom-radio" />
                      <div className="model-card border-2 border-gray-200 rounded-2xl p-3 transition shadow-sm hover:shadow-md hover:-translate-y-1 bg-white">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/image1.jpeg" alt="Modèle famille" className="w-full aspect-square object-cover rounded-xl" />
                        <p className="text-center mt-3 text-sm font-medium">Famille</p>
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input type="radio" name="model" value="Empreintes" className="hidden custom-radio" />
                      <div className="model-card border-2 border-gray-200 rounded-2xl p-3 transition shadow-sm hover:shadow-md hover:-translate-y-1 bg-white">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
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
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="add-to-cart-custom bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-lg transition" data-price="69.90">Ajouter au panier</button>
                  <a href="/#produits" className="border-2 border-pink-500 text-pink-600 hover:bg-pink-50 px-5 py-2 rounded-lg transition">Voir les produits</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
