"use client";
import { useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Andi Pratama",
    role: "CEO, PT Maju Bersama",
    quote:
      "Katalyst membantu kami menghemat 30% pajak secara legal. Keahlian mereka dalam tax planning benar-benar memberikan ruang napas bagi cash flow perusahaan kami.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Sarah Wijaya",
    role: "CFO, Tech Nusantara",
    quote:
      "Laporan keuangan kami jauh lebih terstruktur dan akurat sejak menggunakan jasa Katalyst. Tim mereka sangat responsif dan detail-oriented.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Budi Santoso",
    role: "Founder, Santoso Group",
    quote:
      "Executive Partner Program mereka layaknya memiliki CFO dan Tax Director in-house tanpa biaya full-time. Partner strategis terbaik yang pernah kami miliki.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Rina Hartono",
    role: "COO, Global Indo Jaya",
    quote:
      "Proses audit dan compliance yang biasanya sangat menegangkan, menjadi sangat mulus berkat pendampingan tim Katalyst. Mereka benar-benar partner yang bisa diandalkan.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Dicky Kurniawan",
    role: "Direktur, Kurniawan Enterprises",
    quote:
      "Kami sudah pindah dari konsultan sebelumnya dan perbedaan layanannya sangat jauh. Katalyst proaktif memberikan solusi, bukan hanya laporan angka.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
];

export default function Testimonials() {
  useScrollReveal();
  const [current, setCurrent] = useState(0);

  // Auto-slide setiap 5 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-20 md:py-28 relative bg-[#0a0a1a] overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="animate-on-scroll text-xs font-semibold text-blue-400 uppercase tracking-widest">
            Testimoni Klien
          </span>
          <h2 className="animate-on-scroll text-3xl md:text-5xl font-bold mt-3 tracking-tight">
            Apa Kata <span className="text-blue-500">Klien Kami</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-3xl mx-auto">
          {/* Slides - Menggunakan Grid agar tinggi container otomatis menyesuaikan */}
          <div className="grid">
            {testimonials.map((item, i) => (
              <div
                key={i}
                className={`col-start-1 row-start-1 transition-all duration-700 ease-in-out ${
                  i === current
                    ? "opacity-100 translate-y-0 scale-100 z-10"
                    : "opacity-0 translate-y-4 scale-95 pointer-events-none z-0"
                }`}
              >
                <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 md:p-10 text-center flex flex-col items-center min-h-[280px]">
                  <Quote className="w-10 h-10 text-blue-500/20 mb-6 shrink-0" />
                  <p className="text-neutral-300 text-base md:text-lg leading-relaxed flex-1 mb-8">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="flex flex-col items-center mt-auto">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-blue-500/50 mb-3"
                    />
                    <h4 className="font-semibold text-white">{item.name}</h4>
                    <p className="text-xs text-neutral-500 mt-1">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigasi Panah (Muncul di layar medium ke atas) */}
          <button
            onClick={prev}
            className="hidden md:flex absolute top-1/2 -left-16 -translate-y-1/2 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 items-center justify-center text-neutral-400 hover:text-white transition cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="hidden md:flex absolute top-1/2 -right-16 -translate-y-1/2 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 items-center justify-center text-neutral-400 hover:text-white transition cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Navigasi Titik (Dots) - Jarak aman dari card di atasnya */}
          <div className="flex justify-center items-center gap-3 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  i === current
                    ? "w-8 h-3 bg-blue-500"
                    : "w-3 h-3 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
