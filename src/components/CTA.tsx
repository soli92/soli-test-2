export default function CTA() {
  return (
    <section id="download" className="bg-[#0f0a1e] py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Glow background */}
        <div className="relative">
          <div className="absolute inset-0 bg-purple-700/20 rounded-3xl blur-3xl" />
          <div className="relative bg-gradient-to-br from-purple-900/50 to-indigo-900/50 border border-purple-700/40 rounded-3xl p-12 md:p-16">
            <div className="text-6xl mb-6">🧘</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Il momento giusto{" "}
              <span className="text-gradient">è adesso</span>
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
              Unisciti a 500.000 persone che hanno già scelto di investire nella
              propria salute mentale. 7 giorni di prova gratuita, nessuna carta
              di credito richiesta.
            </p>

            {/* App store buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href="#"
                className="flex items-center gap-3 bg-white text-gray-900 font-semibold px-6 py-3.5 rounded-xl hover:bg-gray-100 transition-all duration-200 hover:scale-105 w-full sm:w-auto"
              >
                <span className="text-2xl">🍎</span>
                <div className="text-left">
                  <div className="text-xs text-gray-500">Scarica su</div>
                  <div className="font-bold">App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 bg-white text-gray-900 font-semibold px-6 py-3.5 rounded-xl hover:bg-gray-100 transition-all duration-200 hover:scale-105 w-full sm:w-auto"
              >
                <span className="text-2xl">▶</span>
                <div className="text-left">
                  <div className="text-xs text-gray-500">Disponibile su</div>
                  <div className="font-bold">Google Play</div>
                </div>
              </a>
            </div>

            <p className="text-white/30 text-sm">
              Gratis per 7 giorni · Nessun impegno · Cancella quando vuoi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
