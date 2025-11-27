"use client";

import React, { useState } from "react";
import { Send, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription for:", email);
    setEmail("");
  };

  // ⭐ Smooth scroll function (same as in Hero)
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="w-full bg-[#EEF7FF]">
      {/* Newsletter */}
      <div style={{ backgroundColor: "#4D869C" }} className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-4">
            <h3 className="text-white text-xl font-medium">Newsletter</h3>
            <form onSubmit={handleSubmit} className="w-full max-w-md">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full px-4 py-2 rounded-full pr-12 text-black"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 h-full px-4 bg-blue-500 rounded-r-full hover:bg-blue-600 transition-colors"
                >
                  <Send className="w-5 h-5 text-white" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Main Menu */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-black">MAIN MENU</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("hero")}
                    className="text-black hover:text-gray-900 font-poppins"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-black hover:text-gray-900 font-poppins"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("packages")}
                    className="text-black hover:text-gray-900 font-poppins"
                  >
                    Packages
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("gallery")}
                    className="text-black hover:text-gray-900 font-poppins"
                  >
                    Gallery
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-black">SERVICES</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-black hover:text-gray-900 font-poppins"
                  >
                    Flight Booking
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("gallery")}
                    className="text-black hover:text-gray-900 font-poppins"
                  >
                    Hotel Reservations
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("packages")}
                    className="text-black hover:text-gray-900 font-poppins"
                  >
                    Tour Packages
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-black hover:text-gray-900 font-poppins"
                  >
                    Travel Insurance
                  </button>
                </li>
              </ul>
            </div>

            {/* Latest News */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-black">LATEST NEWS</h4>
              <ul className="space-y-2">
                <li>
                  <span className="text-black font-poppins">
                    Summer coastal getaways 2025
                  </span>
                </li>
                <li>
                  <span className="text-black font-poppins">
                    New sunset cruise routes announced
                  </span>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-black">CONTACT US</h4>
              <p className="text-black font-poppins mb-4">
                <strong>TravelScape</strong>
                <br />
                21 Seaview Lane, Coastal Old Town 83000
                <br />
                Tel: +66 (0) 76 610 365-6
                <br />
                Fax: +66 (0) 76 610 367
                <br />
                Email: hello@travelscape.local
              </p>

              <div className="flex items-center gap-4">
                <Instagram className="w-5 h-5 text-black hover:text-gray-900 cursor-pointer" />
                <Facebook className="w-5 h-5 text-black hover:text-gray-900 cursor-pointer" />
                <Twitter className="w-5 h-5 text-black hover:text-gray-900 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#4D869C] py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center text-white text-sm font-poppins">
            ©2025 TravelScape. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
