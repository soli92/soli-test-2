const features = [
  {
    icon: "🎧",
    title: "Meditazioni Guidate",
    description:
      "Oltre 300 sessioni audio guidate da esperti certificati, per ogni livello e obiettivo — dalla riduzione dello stress al miglioramento del sonno.",
  },
  {
    icon: "🌊",
    title: "Suoni Rilassanti",
    description:
      "Pioggia, foreste, oceano e suoni binaurali. Crea il tuo ambiente sonoro perfetto per concentrarti o rilassarti.",
  },
  {
    icon: "📊",
    title: "Traccia i Progressi",
    description:
      "Dashboard personalizzata per monitorare le sessioni, l'umore e la streak giornaliera. Vedi la tua trasformazione nel tempo.",
  },
  {
    icon: "😴",
    title: "Storie per Dormire",
    description:
      "Storie narrate pensate per aiutarti ad addormentarti in modo naturale, senza farmaci e senza stress.",
  },
  {
    icon: "🌬️",
    title: "Esercizi di Respirazione",
    description:
      "Tecniche di respirazione scientificamente validate per calmare il sistema nervoso in pochi minuti.",
  },
  {
    icon: "🔔",
    title: "Promemoria Intelligenti",
    description:
      "Notifiche personalizzate nei momenti giusti della tua giornata, per non dimenticare mai la tua pratica.",
  },
];

export default function Features() {
  return (
    <section id="funzionalità" className="bg-[#0f0a1e] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">
            Funzionalità
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Tutto ciò di cui hai bisogno
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-lg">
            Zenith riunisce in un&apos;unica app tutti gli strumenti per la tua
            salute mentale quotidiana.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="bg-glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">
                {feature.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
