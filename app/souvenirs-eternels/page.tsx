export default function SouvenirsEternelsPage() {
  return (
    <main className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 relative">
          <div className="absolute inset-x-0 -top-2 mx-auto w-3/4 h-20 bg-pink-100 opacity-40 rounded-full blur-2xl -z-10"></div>
          <h1 className="title-font text-3xl md:text-5xl font-extrabold text-gray-800">Collection <span className="text-pink-500">Souvenirs éternels</span></h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Cadres symboliques pour les souvenirs qui traversent le temps.</p>
        </div>
        <div className="text-center">
          <a href="/personnalisation#personnalisation" className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg transition">Personnaliser un cadre</a>
        </div>
      </div>
    </main>
  );
}
