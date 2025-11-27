"use client";

import Image from "next/image";

interface StaticDeal {
  id: number;
  title: string;
  caption: string;
  price: string;
  image: string;
}

const STATIC_DEALS: StaticDeal[] = [
  {
    id: 1,
    title: "Island Hopping Escape",
    caption: "Harbour cruise & hidden lagoons",
    price: "From 399 EUR / person",
    image: "/deals/deal3.jpg",
  },
  {
    id: 2,
    title: "Sunset Cruise & Dinner",
    caption: "Coastal boat ride & local seafood",
    price: "From 189 EUR / couple",
    image: "/deals/deal7.jpg",
  },
  {
    id: 3,
    title: "Weekend Old Town Getaway",
    caption: "Boutique stay, walking tour & cafés",
    price: "From 229 EUR / person",
    image: "/deals/deal10.jpg",
  },
];

export default function FeaturedDeals() {
  return (
    <section className="bg-[#EEF7FF] py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Limited‑time offers
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Seasonal deals
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-slate-600 sm:text-sm">
            A few examples of current deals we&apos;re running with our local
            partners. Use them as inspiration for your custom itinerary.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {STATIC_DEALS.map((deal) => (
            <article
              key={deal.id}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative h-40 w-full">
                <Image
                  src={deal.image}
                  alt={deal.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-4">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                    {deal.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-600 sm:text-sm">
                    {deal.caption}
                  </p>
                </div>
                <p className="mt-auto text-xs font-semibold text-emerald-700 sm:text-sm">
                  {deal.price}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


