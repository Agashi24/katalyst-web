"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { PhoneCall } from "lucide-react";

export default function CallToAction() {
  useScrollReveal();
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <div className="animate-on-scroll relative bg-gradient-to-br from-blue-600/10 to-indigo-800/5 border border-blue-500/20 rounded-3xl p-10 md:p-16 text-center overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none animate-float-glow"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              LET&apos;S COLLABORATE
            </h2>
            <p className="text-neutral-400 max-w-lg mx-auto mb-8">
              Jadwalkan konsultasi gratis dengan tim ahli kami hari ini.
            </p>
            <a
              href="https://wa.me/628561510888"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-full transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:scale-105"
            >
              <PhoneCall className="w-4 h-4" /> Hubungi Kami Sekarang
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
