"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, PlayCircle } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import MagneticButton from "@/components/MagneticButton";
import AnimatedStat from "@/components/CountUp";

export default function Hero() {
  useScrollReveal();
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Glow & Particle BG */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none animate-float-glow"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-on-scroll inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
          <span className="text-xs font-medium text-blue-400 tracking-wide uppercase">
            Business & Tax Consultant
          </span>
        </div>
        <h1 className="animate-on-scroll text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 min-h-[80px] md:min-h-[110px]">
          <TypeAnimation
            sequence={[
              "One System.",
              2000,
              "One Partner.",
              2000,
              "One Solution.",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-600"
          />
        </h1>
        <p className="animate-on-scroll text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          PT Katalyst Partner Consulting membantu individu dan perusahaan
          mengelola kewajiban pajak secara efisien, legal, dan optimal.
        </p>
        <div className="animate-on-scroll flex flex-col sm:flex-row items-center justify-center gap-4">
          <MagneticButton>
            <a
              href="#harga"
              className="animate-bounce-cta inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-full transition-all shadow-lg shadow-blue-600/30"
            >
              Pilih Paket Konsultasi <ArrowRight className="w-4 h-4" />
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="#about"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium px-8 py-4 rounded-full transition hover:scale-105"
            >
              <PlayCircle className="w-4 h-4" /> Pelajari Lebih Lanjut
            </a>
          </MagneticButton>
        </div>

        {/* Stats with Counter */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <div className="animate-on-scroll stagger-1 text-center">
            <div className="text-2xl md:text-3xl font-bold text-blue-400">
              <AnimatedStat value={500} suffix="+" />
            </div>
            <div className="text-xs text-neutral-500 mt-1 uppercase tracking-wider">
              Klien Aktif
            </div>
          </div>
          <div className="animate-on-scroll stagger-2 text-center">
            <div className="text-2xl md:text-3xl font-bold text-blue-400">
              <AnimatedStat value={12} suffix="+" />
            </div>
            <div className="text-xs text-neutral-500 mt-1 uppercase tracking-wider">
              Tahun Pengalaman
            </div>
          </div>
          <div className="animate-on-scroll stagger-3 text-center">
            <div className="text-2xl md:text-3xl font-bold text-blue-400">
              <AnimatedStat value={98} suffix="%" />
            </div>
            <div className="text-xs text-neutral-500 mt-1 uppercase tracking-wider">
              Kepuasan Klien
            </div>
          </div>
          <div className="animate-on-scroll stagger-4 text-center">
            <div className="text-2xl md:text-3xl font-bold text-blue-400">
              <AnimatedStat value={50} suffix="+" />
            </div>
            <div className="text-xs text-neutral-500 mt-1 uppercase tracking-wider">
              Konsultan Ahli
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
