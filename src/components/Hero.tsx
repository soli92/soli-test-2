export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f0a1e]">
      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-700/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-700/25 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-900/15 rounded-full blur-3xl" />
      </div>

      {/* Stars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 1 + "px",
              height: Math.random() * 2 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              opacity: Math.random() * 0.6 + 0.1,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-purple-900/40 border border-purple-700/50 rounded-full px-4 py-1.5 text-purple-300 text-sm mb-8">
          <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
          Oltre 500.000 persone meditano con Zenith
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
          Trova la tua{" "}
          <span className="text-gradient">pace interiore</span>
          <br />
          ogni giorno
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          Sessioni guidate di meditazione, suoni rilassanti e strumenti di
          mindfulness per ridurre lo stress e dormire meglio — in soli 10
          minuti al giorno.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#download"
            className="glow bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-200 hover:scale-105 w-full sm:w-auto"
          >
            🧘 Inizia gratis oggi
          </a>
          <a
            href="#come-funziona"
            className="bg-glass hover:bg-white/10 text-white font-medium px-8 py-4 rounded-full text-lg transition-all duration-200 w-full sm:w-auto"
          >
            ▶ Scopri come funziona
          </a>
        </div>

        {/* Floating meditation circle */}
        <div className="relative flex items-center justify-center">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-purple-600/40 to-indigo-600/40 border border-purple-500/30 flex items-center justify-center animate-float glow">
            <div className="w-36 h-36 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-purple-700/50 to-indigo-700/50 border border-purple-400/20 flex items-center justify-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-purple-800 to-indigo-800 flex items-center justify-center text-5xl md:text-6xl">
                🧘
              </div>
            </div>
          </div>
          {/* Orbiting dots */}
          <div className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full border border-purple-500/20 animate-spin" style={{ animationDuration: "12s" }}>
            <div className="absolute -top-1.5 left-1/2 w-3 h-3 bg-purple-400 rounded-full -translate-x-1/2" />
          </div>
        </div>

        {/* Social proof numbers */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { value: "500K+", label: "Utenti attivi" },
            { value: "4.9★", label: "Rating App Store" },
            { value: "10M+", label: "Sessioni completate" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-gradient">{stat.value}</div>
              <div className="text-white/50 text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
