"use client";

import { useState } from "react";
import { Menu } from "lucide-react";

const HERO_IMAGE =
  "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600";

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileMenuOpen(false);
  };

  const navLinkClasses =
    "text-sm font-medium text-white/80 hover:text-white transition-colors cursor-pointer";

  return (
    <header className="relative overflow-hidden bg-slate-950 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 transform-gpu"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      <nav className="relative z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:py-5">
          <button
            className="flex items-center gap-2 text-left"
            onClick={() => scrollToSection("hero")}
          >
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide">
              TravelScape
            </span>
            <span className="hidden text-sm font-semibold text-white/80 sm:inline">
              Local Travel Agency
            </span>
          </button>

          <div className="hidden items-center gap-8 md:flex">
            <button className={navLinkClasses} onClick={() => scrollToSection("about")}>
              About
            </button>
            <button className={navLinkClasses} onClick={() => scrollToSection("packages")}>
              Packages
            </button>
            <button className={navLinkClasses} onClick={() => scrollToSection("gallery")}>
              Gallery
            </button>
            <button className={navLinkClasses} onClick={() => scrollToSection("contact")}>
              Contact
            </button>
            <button
              className="rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-900 shadow-md shadow-emerald-500/40 transition hover:translate-y-0.5 hover:bg-emerald-300"
              onClick={() => scrollToSection("contact")}
            >
              Book a Trip
            </button>
          </div>

          <button
            className="flex items-center justify-center rounded-full bg-white/10 p-2 text-white md:hidden"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <Menu size={22} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mx-4 mb-4 space-y-1 rounded-2xl bg-black/70 p-3 text-sm backdrop-blur md:hidden">
            <button
              className={`${navLinkClasses} block w-full text-left py-2`}
              onClick={() => scrollToSection("about")}
            >
              About
            </button>
            <button
              className={`${navLinkClasses} block w-full text-left py-2`}
              onClick={() => scrollToSection("packages")}
            >
              Packages
            </button>
            <button
              className={`${navLinkClasses} block w-full text-left py-2`}
              onClick={() => scrollToSection("gallery")}
            >
              Gallery
            </button>
            <button
              className={`${navLinkClasses} block w-full text-left py-2`}
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
          </div>
        )}
      </nav>

      <section
        id="hero"
        className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-10 md:flex-row md:items-center md:pb-24 md:pt-16"
      >
        <div className="max-w-xl space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium tracking-wide text-emerald-100 ring-1 ring-white/10">
            Coastal travel specialists · Tailor‑made escapes
          </p>

          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Discover your next
            <span className="block text-emerald-300">
              seaside getaway, beautifully planned.
            </span>
          </h1>

          <p className="text-sm leading-relaxed text-slate-100/80 sm:text-base">
            TravelScape is a boutique travel agency crafting stress‑free coastal
            getaways, from hidden coves and harbour cafés to sunset cruises
            curated just for you.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => scrollToSection("packages")}
              className="rounded-full bg-emerald-400 px-6 py-2.5 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/40 transition hover:translate-y-0.5 hover:bg-emerald-300"
            >
              Explore Packages
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white/90 backdrop-blur transition hover:border-white hover:bg-white/5"
            >
              Why TravelScape?
            </button>
          </div>

          <dl className="mt-4 grid grid-cols-3 gap-4 text-xs text-slate-100/80 sm:text-sm">
            <div>
              <dt className="font-semibold text-white">10+ years</dt>
              <dd>local experience</dd>
            </div>
            <div>
              <dt className="font-semibold text-white">4.9/5</dt>
              <dd>guest rating</dd>
            </div>
            <div>
              <dt className="font-semibold text-white">24/7</dt>
              <dd>on‑trip support</dd>
            </div>
          </dl>
        </div>

        <div className="hidden flex-1 md:block">
          <div className="relative h-80 w-full max-w-md translate-y-4">
            <div className="absolute inset-0 rounded-3xl bg-emerald-400/20 blur-3xl" />
            <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur">
              <div className="flex h-full flex-col justify-between p-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
                    Handpicked experiences
                  </p>
                  <p className="mt-2 text-sm text-slate-100">
                    Sunrise viewpoints, night markets, island‑hopping and
                    more — personalised for couples, families, and small
                    groups.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs text-slate-100">
                  <div className="rounded-2xl bg-white/5 p-3">
                    <p className="text-[11px] font-medium text-emerald-200">
                      Old Town Walk
                    </p>
                    <p className="mt-1 font-semibold">Café hopping & murals</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-3">
                    <p className="text-[11px] font-medium text-emerald-200">
                      Island Escape
                    </p>
                    <p className="mt-1 font-semibold">Phi Phi & hidden bays</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-3">
                    <p className="text-[11px] font-medium text-emerald-200">
                      Family Friendly
                    </p>
                    <p className="mt-1 font-semibold">Theme parks & beaches</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-3">
                    <p className="text-[11px] font-medium text-emerald-200">
                      Custom Trip
                    </p>
                    <p className="mt-1 font-semibold">Built around you</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
