"use client";

import Image from "next/image";
import { Star } from "lucide-react";

interface StaticHotel {
  id: number;
  name: string;
  stars: number;
  address: string;
  price: string;
  image: string;
}

const STATIC_HOTELS: StaticHotel[] = [
  {
    id: 1,
    name: "Sea Breeze Resort",
    stars: 4.5,
    address: "Sea Promenade, Coastal Town",
    price: "From 120 EUR / night",
    image: "/hotels/hotel1.jpg",
  },
  {
    id: 2,
    name: "Old Town Heritage Stay",
    stars: 4.2,
    address: "Old Town Quarter",
    price: "From 95 EUR / night",
    image: "/hotels/hotel5.jpg",
  },
  {
    id: 3,
    name: "Family Bay Villas",
    stars: 4.8,
    address: "Bayfront District",
    price: "From 180 EUR / night",
    image: "/hotels/hotel7.jpg",
  },
];

export default function PreferredStays() {
  return (
    <section className="bg-[#EEF7FF] py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-4 text-2xl font-semibold text-slate-900 sm:text-3xl">
          Preferred stays
        </h2>
        <p className="max-w-xl text-sm leading-relaxed text-slate-600">
          A few handpicked stays we love recommending to guests — from seaside
          resorts to character‑filled old‑town homes. We match you to the right
          one based on your budget and travel style.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {STATIC_HOTELS.map((hotel) => (
            <article
              key={hotel.id}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative h-44 w-full">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-4">
                <header className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                    {hotel.name}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-slate-800">
                    <span className="font-semibold">
                      {hotel.stars.toFixed(1)}
                    </span>
                    <Star className="h-4 w-4 text-yellow-400" />
                  </div>
                </header>
                <p className="text-xs text-slate-600 sm:text-sm">
                  {hotel.address}
                </p>
                <p className="mt-auto text-xs font-semibold text-emerald-700 sm:text-sm">
                  {hotel.price}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


