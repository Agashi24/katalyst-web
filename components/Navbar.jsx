/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Navbar() {
  useScrollReveal();
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi smooth scroll untuk FAQ
  const handleScrollToFAQ = (e) => {
    e.preventDefault();
    const faqSection = document.getElementById("faq");
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Tutup menu mobile jika terbuka
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0a1a]/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 shrink-0">
          <img
            src="/favicon-96x96.png"
            alt="Katalyst Partner Logo"
            className="w-9 h-9 rounded-lg object-contain"
          />
          <span className="text-lg font-semibold tracking-tight">
            Katalyst<span className="text-blue-500">Partner</span>
          </span>
        </a>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm text-neutral-400">
          <a href="#about" className="hover:text-white transition">
            About
          </a>
          <a href="#capabilities" className="hover:text-white transition">
            Capabilities
          </a>
          <a href="#team" className="hover:text-white transition">
            Team
          </a>
          <a href="#harga" className="hover:text-white transition">
            Pricing
          </a>
          {/* Link FAQ dengan fungsi scroll kustom */}
          <a
            href="#faq"
            onClick={handleScrollToFAQ}
            className="hover:text-white transition"
          >
            FAQ
          </a>
        </div>

        <a
          href="#harga"
          className="hidden md:inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-full transition shadow-lg shadow-blue-600/20 shrink-0"
        >
          Konsultasi Gratis <ArrowRight className="w-4 h-4" />
        </a>

        {/* Tombol Hamburger Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-neutral-400 hover:text-white rounded-md focus:outline-none cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>
      </div>

      {/* Menu Dropdown Mobile */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#0e0e24] border-t border-white/5 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-t-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-4 space-y-1 text-sm">
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block text-neutral-300 hover:text-white hover:bg-white/5 py-2.5 rounded-lg transition"
          >
            About
          </a>
          <a
            href="#capabilities"
            onClick={() => setIsOpen(false)}
            className="block text-neutral-300 hover:text-white hover:bg-white/5 py-2.5 rounded-lg transition"
          >
            Capabilities
          </a>
          <a
            href="#team"
            onClick={() => setIsOpen(false)}
            className="block text-neutral-300 hover:text-white hover:bg-white/5 py-2.5 rounded-lg transition"
          >
            Team
          </a>
          <a
            href="#harga"
            onClick={() => setIsOpen(false)}
            className="block text-neutral-300 hover:text-white hover:bg-white/5 py-2.5 rounded-lg transition"
          >
            Pricing
          </a>
          {/* Link FAQ Mobile dengan fungsi scroll kustom */}
          <a
            href="#faq"
            onClick={handleScrollToFAQ}
            className="block text-neutral-300 hover:text-white hover:bg-white/5 py-2.5 rounded-lg transition"
          >
            FAQ
          </a>
          <div className="pt-2">
            <a
              href="#harga"
              onClick={() => setIsOpen(false)}
              className="block bg-blue-600 text-white text-center font-medium px-5 py-2.5 rounded-full"
            >
              Konsultasi Gratis
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
