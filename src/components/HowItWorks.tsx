const steps = [
  {
    number: "01",
    title: "Crea il tuo profilo",
    description:
      "Rispondi a poche domande sui tuoi obiettivi e preferenze. Zenith costruirà un programma su misura per te.",
    icon: "👤",
  },
  {
    number: "02",
    title: "Scegli la tua sessione",
    description:
      "Sfoglia centinaia di meditazioni per durata, categoria e umore. Oppure lascia che l&apos;IA scelga per te.",
    icon: "🎯",
  },
  {
    number: "03",
    title: "Medita ogni giorno",
    description:
      "Dedica anche solo 10 minuti al giorno. La costanza è tutto — e Zenith ti aiuta a mantenerla.",
    icon: "🧘",
  },
  {
    number: "04",
    title: "Trasformati nel tempo",
    description:
      "Osserva come stress, ansia e qualità del sonno migliorano settimana dopo settimana con statistiche dettagliate.",
    icon: "🌱",
  },
];

export default function HowItWorks() {
  return (
    <section id="come-funziona" className="bg-[#120d22] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">
            Come funziona
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Semplice come respirare
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-lg">
            Iniziare con Zenith richiede meno di 2 minuti. La tua trasformazione
            comincia subito.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative text-center group">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-px bg-gradient-to-r from-purple-600/50 to-transparent z-0" />
              )}

              {/* Circle */}
              <div className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-700/50 to-indigo-700/50 border border-purple-500/40 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 group-hover:border-purple-400/70">
                {step.icon}
              </div>

              <div className="text-purple-500 text-xs font-bold tracking-widest mb-2">
                {step.number}
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">
                {step.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
