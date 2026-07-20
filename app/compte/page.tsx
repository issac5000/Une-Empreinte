"use client";

import { useRef, useState } from "react";

export default function ComptePage() {
  const formRef = useRef<HTMLFormElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmRef = useRef<HTMLInputElement>(null);
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    if ((passwordRef.current?.value || "") !== (confirmRef.current?.value || "")) {
      setError(true);
      return;
    }
    const data = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;
    // Démo locale sans serveur — ne jamais stocker un vrai mot de passe en clair en production.
    try {
      localStorage.setItem(
        "ue_account_v1",
        JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          address: data.address,
          zip: data.zip,
          city: data.city,
          country: data.country,
          password: btoa(data.password || ""),
        })
      );
    } catch {}
    formRef.current?.reset();
    setSuccess(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="relative text-center mb-10">
            <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 mx-auto w-3/4 h-20 bg-pink-100 opacity-20 rounded-full blur-2xl -z-10"></div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight leading-tight title-font">
              Créer <span className="text-pink-500">mon compte</span>
            </h1>
            <p className="mt-3 text-gray-600">Renseignez vos informations personnelles pour créer votre compte.</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 md:p-8">
              <form ref={formRef} id="register-form" className="space-y-6" noValidate onSubmit={handleSubmit}>
                {/* Identité */}
                <div>
                  <h3 className="title-font text-xl font-semibold mb-4">Informations personnelles</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                      <input id="firstName" name="firstName" type="text" className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring-1 focus:ring-pink-500" required />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                      <input id="lastName" name="lastName" type="text" className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring-1 focus:ring-pink-500" required />
                    </div>
                  </div>
                </div>

                {/* Coordonnées */}
                <div>
                  <h3 className="title-font text-xl font-semibold mb-4">Coordonnées</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input id="email" name="email" type="email" className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring-1 focus:ring-pink-500" required />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone (optionnel)</label>
                      <input id="phone" name="phone" type="tel" className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring-1 focus:ring-pink-500" placeholder="+32 ..." />
                    </div>
                  </div>
                </div>

                {/* Adresse */}
                <div>
                  <h3 className="title-font text-xl font-semibold mb-4">Adresse</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Adresse</label>
                      <input id="address" name="address" type="text" className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring-1 focus:ring-pink-500" />
                    </div>
                    <div>
                      <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">Code postal</label>
                      <input id="zip" name="zip" type="text" className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring-1 focus:ring-pink-500" />
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">Ville</label>
                      <input id="city" name="city" type="text" className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring-1 focus:ring-pink-500" />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Pays</label>
                      <input id="country" name="country" type="text" className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring-1 focus:ring-pink-500" placeholder="Belgique" />
                    </div>
                  </div>
                </div>

                {/* Sécurité */}
                <div>
                  <h3 className="title-font text-xl font-semibold mb-4">Sécurité</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
                      <div className="relative">
                        <input
                          ref={passwordRef}
                          id="password"
                          name="password"
                          type={showPass ? "text" : "password"}
                          className="form-input w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
                          minLength={6}
                          required
                        />
                        <button
                          type="button"
                          id="togglePass"
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          onClick={() => setShowPass((v) => !v)}
                          aria-label={showPass ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                        >
                          <i className={showPass ? "far fa-eye-slash" : "far fa-eye"}></i>
                        </button>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="confirm" className="block text-sm font-medium text-gray-700 mb-1">Confirmer le mot de passe</label>
                      <input ref={confirmRef} id="confirm" name="confirm" type="password" className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring-1 focus:ring-pink-500" minLength={6} required />
                    </div>
                  </div>
                  <p id="passwordError" className={`${error ? "" : "hidden "}text-sm text-red-600 mt-2`}>Les mots de passe ne correspondent pas.</p>
                </div>

                {/* CGU */}
                <div className="flex items-start">
                  <input id="terms" type="checkbox" className="mt-1 mr-3" required />
                  <label htmlFor="terms" className="text-sm text-gray-700">J&apos;accepte les conditions générales d&apos;utilisation et la politique de confidentialité.</label>
                </div>

                <button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">Créer mon compte</button>

                <p id="registerSuccess" className={`${success ? "" : "hidden "}text-green-700 bg-green-50 border border-green-200 rounded-lg p-3`}>Compte créé avec succès. Vous pouvez maintenant continuer vos achats.</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
