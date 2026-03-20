const plans = [
  {
    name: "Free",
    price: "€0",
    period: "per sempre",
    description: "Perfetto per iniziare il tuo percorso",
    features: [
      "10 meditazioni gratuite",
      "3 suoni ambientali",
      "Tracciamento base",
      "Promemoria giornaliero",
    ],
    missing: ["Meditazioni illimitate", "Storie per dormire", "IA personalizzata"],
    cta: "Inizia gratis",
    highlight: false,
  },
  {
    name: "Premium",
    price: "€9.99",
    period: "al mese",
    description: "Il piano più amato dalla nostra community",
    features: [
      "300+ meditazioni guidate",
      "50+ suoni e paesaggi sonori",
      "Storie per dormire",
      "Statistiche avanzate",
      "IA personalizzata",
      "Download offline",
      "Supporto prioritario",
    ],
    missing: [],
    cta: "Prova 7 giorni gratis",
    highlight: true,
  },
  {
    name: "Family",
    price: "€14.99",
    period: "al mese",
    description: "Tutto Premium per tutta la famiglia",
    features: [
      "Tutto di Premium",
      "Fino a 6 account",
      "Profili bambini dedicati",
      "Condivisione progressi",
    ],
    missing: [],
    cta: "Inizia la prova",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="piani" className="bg-[#0f0a1e] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">
            Piani
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Investi nel tuo benessere
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-lg">
            Inizia gratis. Aggiorna quando vuoi. Cancella in qualsiasi momento.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                plan.highlight
                  ? "bg-gradient-to-b from-purple-900/60 to-indigo-900/60 border-2 border-purple-500/60 shadow-2xl shadow-purple-900/40"
                  : "bg-glass hover:bg-white/10"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                  ⭐ Più popolare
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-white font-bold text-xl mb-1">{plan.name}</h3>
                <p className="text-white/40 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-white/40 text-sm">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-white/70 text-sm">
                    <span className="text-green-400 flex-shrink-0">✓</span>
                    {f}
                  </li>
                ))}
                {plan.missing.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-white/25 text-sm line-through">
                    <span className="text-white/20 flex-shrink-0">✗</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#download"
                className={`text-center font-semibold py-3 px-6 rounded-full transition-all duration-200 hover:scale-105 ${
                  plan.highlight
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white"
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
