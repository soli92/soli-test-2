# 🧘 Zenith — Landing Page

Landing page moderna per **Zenith**, un'app di meditazione e mindfulness, costruita con **Next.js 14**, **TypeScript** e **Tailwind CSS**.

## ✨ Sezioni

- **Navbar** — Navigazione sticky con effetto glassmorphism allo scroll
- **Hero** — Headline animata, cerchio di meditazione fluttuante, social proof
- **Features** — 6 funzionalità principali con card glassmorphism
- **How It Works** — 4 step del processo con connettori animati
- **Pricing** — 3 piani (Free, Premium, Family) con highlight del piano consigliato
- **Testimonials** — 6 recensioni di utenti reali
- **CTA** — Download buttons App Store e Google Play
- **Footer** — Link, social e credits

## 🚀 Avvio locale

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000)

## 🛠️ Tech Stack

- [Next.js 14](https://nextjs.org/) — App Router
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- Deploy su [Vercel](https://vercel.com/)

## 📁 Struttura

```
src/
├── app/
│   ├── globals.css      # Stili globali + utility classes
│   ├── layout.tsx       # Root layout con metadata SEO
│   └── page.tsx         # Composizione della landing page
└── components/
    ├── Navbar.tsx        # Navbar responsive con hamburger mobile
    ├── Hero.tsx          # Hero section con animazioni
    ├── Features.tsx      # Griglia funzionalità
    ├── HowItWorks.tsx    # Steps processo
    ├── Pricing.tsx       # Tabella piani
    ├── Testimonials.tsx  # Recensioni utenti
    ├── CTA.tsx           # Call to action finale
    └── Footer.tsx        # Footer completo
```

---

Fatto con 🧘 e ❤️ da [Soli](https://github.com/soli92)
