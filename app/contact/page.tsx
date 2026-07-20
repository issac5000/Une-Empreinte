"use client";

import { useRef, useState } from "react";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    formRef.current?.reset();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main>
      {/* Logo banner full-width */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-6 md:py-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logook.jpeg" alt="Une Empreinte — Logo" className="mx-auto h-24 sm:h-32 md:h-40 lg:h-48 w-auto object-contain" />
        </div>
      </section>

      {/* Minimal luxe contact block */}
      <section className="py-6 md:py-10 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-8">
            <h1 className="title-font text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Nous <span className="text-pink-500">contacter</span></h1>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Un projet, une question, un suivi de commande — nous vous répondons avec soin sous 24h ouvrées.</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6 items-stretch">
            {/* Coordinates */}
            <aside className="md:col-span-2 rounded-2xl shadow-md p-6 card-nude-gloss h-full flex flex-col">
              <h2 className="font-semibold text-gray-800 mb-4">Coordonnées</h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <i className="fas fa-user text-pink-500 mt-1"></i>
                  <span>Suzanna Poghossian</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-envelope text-pink-500 mt-1"></i>
                  <a href="mailto:contact@douceurcadree.com" className="hover:text-pink-500">contact@douceurcadree.com</a>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-phone text-pink-500 mt-1"></i>
                  <a href="tel:+33698141123" className="hover:text-pink-500">(+33)698141123</a>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-map-marker-alt text-pink-500 mt-1"></i>
                  <span>13, Avenue Claude Debussy 72100, Le Mans</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-clock text-pink-500 mt-1"></i>
                  <span>Lundi–Vendredi · 9h–18h</span>
                </li>
              </ul>
            </aside>

            {/* Form */}
            <section className="md:col-span-3 rounded-2xl shadow-lg p-6 md:p-8 card-nude-gloss h-full flex flex-col">
              <h2 className="title-font text-xl md:text-2xl font-bold text-gray-900 mb-2">Écrire un message</h2>
              <p className="text-sm text-gray-600 mb-6">Nous vous répondrons au plus vite.</p>
              <form ref={formRef} id="contact-form" className="space-y-6" noValidate onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                    <input id="name" name="name" type="text" className="form-input w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-pink-500 focus:ring-1 focus:ring-pink-500" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input id="email" name="email" type="email" className="form-input w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-pink-500 focus:ring-1 focus:ring-pink-500" required />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                    <select id="topic" name="topic" className="form-input w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-pink-500 focus:ring-1 focus:ring-pink-500">
                      <option>Question sur un produit</option>
                      <option>Personnalisation sur mesure</option>
                      <option>Suivi de commande</option>
                      <option>Autre</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone (optionnel)</label>
                    <input id="phone" name="phone" type="tel" className="form-input w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-pink-500 focus:ring-1 focus:ring-pink-500" placeholder="+32 ..." />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" name="message" rows={5} className="form-input w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-pink-500 focus:ring-1 focus:ring-pink-500" required></textarea>
                </div>
                <div className="flex items-start">
                  <input id="consent" type="checkbox" className="mt-1 mr-3" required />
                  <label htmlFor="consent" className="text-sm text-gray-700">J&apos;accepte d&apos;être recontacté(e) par email ou téléphone.</label>
                </div>
                <button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition">Envoyer</button>
                <p id="contact-success" className={`${sent ? "" : "hidden "}text-green-700 bg-green-50 border border-green-200 rounded-lg p-3`}>Merci, votre message a bien été envoyé.</p>
              </form>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
