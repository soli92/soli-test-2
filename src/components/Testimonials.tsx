const testimonials = [
  {
    name: "Sofia M.",
    role: "Designer, Milano",
    avatar: "👩‍💼",
    text: "Zenith ha cambiato il mio rapporto con lo stress. In 3 settimane dormivo già molto meglio. Non riesco più a immaginare la mia routine mattutina senza.",
    stars: 5,
  },
  {
    name: "Marco R.",
    role: "Sviluppatore, Roma",
    avatar: "👨‍💻",
    text: "Ero scettico sulla meditazione, ma le sessioni guidate di Zenith sono incredibilmente pratiche. 10 minuti al giorno e la differenza si sente davvero.",
    stars: 5,
  },
  {
    name: "Giulia T.",
    role: "Insegnante, Firenze",
    avatar: "👩‍🏫",
    text: "I suoni per dormire sono meravigliosi. Per la prima volta dopo anni riesco ad addormentarmi senza ansia. Un'app che consiglio a tutti i miei colleghi.",
    stars: 5,
  },
  {
    name: "Luca B.",
    role: "Atleta, Torino",
    avatar: "🧑‍🦱",
    text: "Uso Zenith per la preparazione mentale prima delle gare. Le tecniche di respirazione mi hanno aiutato a gestire la pressione in modo incredibile.",
    stars: 5,
  },
  {
    name: "Alessia C.",
    role: "Medico, Bologna",
    avatar: "👩‍⚕️",
    text: "Come medico so quanto sia importante la salute mentale. Zenith è uno strumento serio, basato su evidenze scientifiche, che consiglio ai miei pazienti.",
    stars: 5,
  },
  {
    name: "Davide F.",
    role: "Imprenditore, Napoli",
    avatar: "👨‍💼",
    text: "Con Zenith ho imparato a staccare davvero dal lavoro. La funzione di tracciamento mi motiva a essere costante. È il mio investimento migliore del 2024.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonianze" className="bg-[#120d22] py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">
            Testimonianze
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Cosa dicono i nostri utenti
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-lg">
            Oltre 500.000 persone hanno già trasformato la loro vita con Zenith.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.stars)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>

              {/* Text */}
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-700 to-indigo-700 flex items-center justify-center text-xl">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-white/40 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
