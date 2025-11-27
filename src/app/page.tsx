import Hero from "@/components/Hero";
import FeaturedDeals from "@/components/FeaturedDeals";
import PreferredStays from "@/components/PreferredStays";
import Footer from "@/components/Footer";
import { MapPin, PlaneTakeoff, Users, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#EEF7FF] text-slate-900">
      <Hero />

      <section
        id="about"
        className="bg-white py-16"
        aria-labelledby="about-heading"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:items-start">
          <div className="max-w-md space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              About TravelScape
            </p>
            <h2
              id="about-heading"
              className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl"
            >
              A coastal travel agency crafting
              <span className="block text-emerald-600">
                relaxed, meaningful seaside escapes.
              </span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              We are a small team of travel planners who believe your holiday
              should feel effortless, personal, and grounded in the real
              culture of each destination we work with.
            </p>
          </div>

          <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              {
                title: "Tailor‑made itineraries",
                body: "We design every day of your trip around your pace — from café‑hopping and cultural walks to quiet beach time.",
                icon: MapPin,
              },
              {
                title: "End‑to‑end planning",
                body: "Flights, stays, airport transfers and on‑ground activities handled in one place so you can truly switch off.",
                icon: PlaneTakeoff,
              },
              {
                title: "Trusted local partners",
                body: "We work with vetted guides, boat operators and stays we personally know and love.",
                icon: Users,
              },
              {
                title: "On‑trip support",
                body: "Need to change plans or add a last‑minute activity? Our team is a WhatsApp message away.",
                icon: MessageCircle,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="flex flex-col justify-between rounded-2xl border border-emerald-50 bg-emerald-50/60 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {item.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="packages"
        className="bg-[#EEF7FF] py-16"
        aria-labelledby="packages-heading"
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Featured packages
              </p>
              <h2
                id="packages-heading"
                className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl"
              >
                Handpicked coastal experiences
              </h2>
            </div>
            <p className="max-w-md text-xs leading-relaxed text-slate-600 sm:text-sm">
              All packages are fully customisable. Use these as a starting
              point and our planners will adapt them to your dates, group
              size and preferences.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Old Town & Local Eats",
                duration: "3 days · 2 nights",
                image: "/images/thai-hua-museum.jpg",
                highlight: "Walking tour, cafés, night markets",
                price: "From 249 EUR / person",
              },
              {
                name: "Island Hopping Escape",
                duration: "4 days · 3 nights",
                image: "/deals/deal5.jpg",
                highlight: "Harbour cruise & hidden bays",
                price: "From 399 EUR / person",
              },
              {
                name: "Family Beach Break",
                duration: "5 days · 4 nights",
                image: "/hotels/hotel3.jpg",
                highlight: "Seaside stay, kid‑friendly activities",
                price: "From 459 EUR / family of 3",
              },
            ].map((pkg) => (
              <article
                key={pkg.name}
                className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-4">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                      {pkg.name}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-emerald-700 sm:text-sm">
                      {pkg.duration}
                    </p>
                  </div>
                  <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {pkg.highlight}
                  </p>
                  <p className="mt-auto text-xs font-semibold text-slate-900 sm:text-sm">
                    {pkg.price}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FeaturedDeals />

      <div id="gallery" aria-labelledby="gallery-heading">
        <PreferredStays />
      </div>

      <section
        id="contact"
        className="bg-[#EEF7FF] pb-16 pt-12"
        aria-labelledby="contact-heading"
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Plan your trip
              </p>
              <h2
                id="contact-heading"
                className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl"
              >
                Ready to talk about dates?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Share your ideal dates, group size and what you&apos;d love to
                experience by the sea. Our planners will respond with a
                suggested outline and transparent pricing within one business
                day.
              </p>
              <dl className="mt-6 space-y-2 text-sm text-slate-700">
                <div>
                  <dt className="font-semibold">Visit us</dt>
                  <dd className="text-slate-700">
                    TravelScape, Coastal Old Town, 83000
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold">Call</dt>
                  <dd>+66 (0) 76 610 365</dd>
                </div>
                <div>
                  <dt className="font-semibold">Email</dt>
                  <dd>hello@travelscape.local</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
              <form className="space-y-4" aria-label="Trip enquiry form">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-xs font-medium text-slate-700"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                      placeholder="Alex Traveller"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-xs font-medium text-slate-700"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="dates"
                      className="text-xs font-medium text-slate-700"
                    >
                      Preferred dates
                    </label>
                    <input
                      id="dates"
                      name="dates"
                      type="text"
                      className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                      placeholder="e.g. June 10–15"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="groupSize"
                      className="text-xs font-medium text-slate-700"
                    >
                      Group size
                    </label>
                    <input
                      id="groupSize"
                      name="groupSize"
                      type="number"
                      min={1}
                      className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                      placeholder="2"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-xs font-medium text-slate-700"
                  >
                    What would you love to experience?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                    placeholder="Tell us about beaches, food, culture or adventure on your mind."
                  />
                </div>

                <button
                  type="button"
                  className="flex w-full items-center justify-center rounded-full bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-emerald-400/40 transition hover:bg-emerald-400"
                >
                  Send enquiry (demo only)
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
