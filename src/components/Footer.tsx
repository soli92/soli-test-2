export default function Footer() {
  const links = {
    Prodotto: ["Funzionalità", "Come funziona", "Piani", "Changelog"],
    Azienda: ["Chi siamo", "Blog", "Carriere", "Press kit"],
    Supporto: ["Centro assistenza", "Community", "Contattaci", "Status"],
    Legale: ["Privacy Policy", "Termini di servizio", "Cookie Policy"],
  };

  return (
    <footer className="bg-[#080614] border-t border-white/5 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white text-sm font-bold">
                Z
              </div>
              <span className="text-white font-semibold text-lg">Zenith</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              La tua guida alla meditazione e al benessere mentale quotidiano.
            </p>
            <div className="flex gap-3 mt-5">
              {["𝕏", "in", "📷", "▶"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-8 h-8 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:text-white text-sm transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/40 hover:text-white/80 text-sm transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © 2024 Zenith App. Tutti i diritti riservati.
          </p>
          <p className="text-white/30 text-sm">
            Fatto con 🧘 e ❤️ in Italia
          </p>
        </div>
      </div>
    </footer>
  );
}
