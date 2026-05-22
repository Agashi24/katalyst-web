"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function Hero() {
  useScrollReveal();
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none animate-float-glow"></div>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-on-scroll inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
          <span className="text-xs font-medium text-blue-400 tracking-wide uppercase">
            Business & Tax Consultant
          </span>
        </div>
        <h1 className="animate-on-scroll text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
          One System.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-600 animate-gradient-text">
            One Partner.
          </span>
        </h1>
        <p className="animate-on-scroll text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          PT Katalyst Partner Consulting membantu individu dan perusahaan
          mengelola kewajiban pajak secara efisien, legal, dan optimal.
        </p>
        <div className="animate-on-scroll flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#harga"
            className="animate-bounce-cta inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-full transition-all shadow-lg shadow-blue-600/30"
          >
            Pilih Paket Konsultasi <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium px-8 py-4 rounded-full transition hover:scale-105"
          >
            <PlayCircle className="w-4 h-4" /> Pelajari Lebih Lanjut
          </a>
        </div>
      </div>
    </section>
  );
}
