"use client";

import { useState } from "react";
import Image from "next/image";

export default function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex gap-8 items-stretch">
          {/* Text Content */}
          <div className="flex-1 flex flex-col justify-between">
            <ul className="space-y-4 text-gray-700 flex-1">
              <li>
                Our coastal escapes are perfect for last‑minute getaways and
                slow, well‑planned holidays. From cliffside sunsets to quiet
                harbour cafés, every day can feel different.
              </li>
              <li>
                When you think of holidays by the sea, imagine narrow streets
                with whitewashed houses, deep‑blue water, and viewpoints that
                glow at golden hour.
              </li>
              <li>
                It&apos;s the unexpected treasures — tiny bakeries, family‑run
                taverns and hidden coves — that surprise and delight our
                travellers.
              </li>
              <li>
                The contrast between lively waterfronts and peaceful villages
                makes these destinations perfect for both first‑time visitors
                and seasoned explorers.
              </li>
              <li>
                Whether you want to relax on a quiet beach, sample local food,
                or wander through historic lanes, we help you balance must‑see
                highlights with time to simply breathe.
              </li>
              <li className="flex justify-between items-end">
                <span>
                  There is more to each coastal town than meets the eye — from
                  historical sites to contemporary art spaces, there is no
                  shortage of things to do and places to see.
                </span>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-blue-600 font-semibold hover:text-blue-700 whitespace-nowrap"
                >
                  {isExpanded ? "Show Less..." : "Read More..."}
                </button>
              </li>
              {/* Expanded Content */}
              {isExpanded && (
                <div className="mt-4">
                  <p>
                    If you&apos;re after adventure and excitement, think coastal
                    hikes, sailing between small islands and exploring old ports
                    at sunrise before the streets get busy.
                  </p>
                  <p>
                    Those who prefer staying on dry land can stroll along
                    promenades, browse independent shops, or simply watch the
                    sea change colour throughout the day.
                  </p>
                  <p>
                    Our planners help you make the most of your budget with
                    transparent pricing and carefully chosen stays, so you can
                    focus on the memories instead of the logistics.
                  </p>
                  <p>
                    Example snapshot of a coastal destination:
                    <br />
                    Nearest Airport: Local International Airport
                    <br />
                    Currency: Euro
                    <br />
                    Time: GMT+2
                    <br />
                    Driving Side: Right
                    <br />
                    Main Electricity: 230v‑50hz
                    <br />
                    Official Language: Local language &amp; English widely
                    spoken
                  </p>
                </div>
              )}
            </ul>
          </div>

          {/* Image */}
          <div className="w-2/5 flex-shrink-0 relative h-96">
            <Image
              src="/phuket-about.jpg"
              alt="Coastal destination"
              fill
              sizes="40vw"
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


