/* eslint-disable @next/next/no-img-element */
"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CheckCircle2 } from "lucide-react";

export default function ProcessSection() {
  useScrollReveal();

  const steps = [
    {
      num: "01",
      title: "Konsultasi Awal",
      desc: "Diskusikan kebutuhan bisnis dan masalah perpajakan Anda secara gratis bersama tim ahli kami.",
    },
    {
      num: "02",
      title: "Verifikasi & Analisis",
      desc: "Tim kami akan memverifikasi dokumen Anda dan menganalisis posisi pajak secara mendalam.",
    },
    {
      num: "03",
      title: "Eksekusi & Strategi",
      desc: "Menyusun dan menerapkan strategi perencanaan pajak yang legal dan optimal untuk bisnis Anda.",
    },
    {
      num: "04",
      title: "Monitoring & Pelaporan",
      desc: "Kami urus pelaporan SPT tepat waktu dan memantau kepatuhan pajak Anda secara berkala.",
    },
  ];

  return (
    <section className="py-20 md:py-28 relative bg-[#080818]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Kolom Kiri: Teks dengan Garis Tengah/Timeline */}
          <div>
            <span className="animate-on-scroll text-xs font-semibold text-blue-400 uppercase tracking-widest">
              Cara Kerja Kami
            </span>
            <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold mt-3 tracking-tight leading-tight mb-12">
              Langkah <span className="text-blue-500">Konsultasi</span> Anda
            </h2>

            <div className="relative">
              {/* Garis Vertikal di tengah kiri */}
              <div className="absolute left-[19px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-blue-500 via-blue-500/40 to-transparent"></div>

              <div className="space-y-10">
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className={`animate-on-scroll stagger-${i + 1} relative flex items-start gap-5`}
                  >
                    {/* Ikon Centang / Verifikasi di tengah garis */}
                    <div className="relative z-10 w-10 h-10 shrink-0 rounded-full bg-[#080818] border-2 border-blue-500 flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                      <CheckCircle2 className="w-5 h-5 text-blue-400" />
                    </div>
                    {/* Teks Deskripsi */}
                    <div>
                      <span className="text-xs font-bold text-blue-500/70 uppercase tracking-wider">
                        Step {step.num}
                      </span>
                      <h3 className="text-lg font-semibold text-white mt-1">
                        {step.title}
                      </h3>
                      <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Gambar */}
          <div className="animate-on-scroll relative mt-10 md:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Consulting Process"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080818] via-transparent to-transparent"></div>

              {/* Overlay kecil di atas gambar */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#0a0a1a]/80 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg shrink-0">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-white">
                    Terverifikasi & Terpercaya
                  </h4>
                  <p className="text-xs text-neutral-400">
                    Proses diawasi oleh konsultan bersertifikat
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
