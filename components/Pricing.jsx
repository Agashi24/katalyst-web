"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";

export default function Pricing() {
  useScrollReveal();
  return (
    <section
      id="harga"
      className="py-20 md:py-28 relative overflow-hidden bg-[#080818]"
    >
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none animate-float-glow"></div>
      <div
        className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none animate-float-glow"
        style={{ animationDelay: "4s" }}
      ></div>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="animate-on-scroll text-xs font-semibold text-blue-400 uppercase tracking-widest">
            Paket & Harga
          </span>
          <h2 className="animate-on-scroll text-3xl md:text-5xl font-bold mt-3 tracking-tight">
            Pilih Paket <span className="text-blue-500">Anda</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
          {/* Starter */}
          <div className="animate-on-scroll stagger-1 tilt-card relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 flex flex-col">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-neutral-300">
                Starter
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                Untuk UMKM & startup
              </p>
            </div>
            <div className="mb-6">
              <span className="text-xs text-neutral-400">Rp</span>
              <span className="text-4xl font-bold ml-1">3.5 jt</span>
              <span className="text-sm text-neutral-400">/bulan</span>
            </div>
            <div className="space-y-3 flex-1 mb-8">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-neutral-300">Pelaporan SPT Bulanan</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-neutral-300">Konsultasi 2x/bulan</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <XCircle className="w-4 h-4 text-neutral-700 shrink-0" />
                <span className="text-neutral-600">Tax Planning</span>
              </div>
            </div>
            <button className="w-full py-3.5 rounded-full font-medium text-sm transition bg-white/5 hover:bg-white/10 border border-white/10 text-white hover:scale-105">
              Pilih Starter
            </button>
          </div>

          {/* Business */}
          <div className="animate-on-scroll stagger-2 tilt-card relative rounded-2xl p-8 flex flex-col bg-gradient-to-b from-blue-600/20 to-blue-900/10 border-2 border-blue-500/50 shadow-2xl shadow-blue-500/20 md:scale-110 z-10 shimmer-effect">
            <span className="absolute top-0 left-0 right-0 bg-blue-600 text-white text-[11px] font-bold px-4 py-1.5 text-center uppercase tracking-widest">
              Paling Populer 🔥
            </span>
            <div className="mb-6 mt-4">
              <h3 className="text-xl font-semibold text-white">Business</h3>
              <p className="text-xs text-blue-200 mt-1">
                Untuk perusahaan berkembang
              </p>
            </div>
            <div className="mb-6">
              <span className="text-xs text-blue-300">Rp</span>
              <span className="text-4xl font-bold ml-1 text-white">8.5 jt</span>
              <span className="text-sm text-blue-300">/bulan</span>
            </div>
            <div className="space-y-3 flex-1 mb-8">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-blue-300 shrink-0" />
                <span className="text-white">Semua fitur Starter</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-blue-300 shrink-0" />
                <span className="text-white">Tax Planning Strategis</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-blue-300 shrink-0" />
                <span className="text-white">Konsultasi Unlimited</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-blue-300 shrink-0" />
                <span className="text-white">Dedicated Account Manager</span>
              </div>
            </div>
            <button className="w-full py-4 rounded-full font-semibold text-sm transition bg-blue-600 hover:bg-blue-700 text-white animate-breath-glow hover:scale-105 flex items-center justify-center gap-2">
              Pilih Business <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Enterprise */}
          <div className="animate-on-scroll stagger-3 tilt-card relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 flex flex-col">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-neutral-300">
                Enterprise
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                Solusi lengkap skala besar
              </p>
            </div>
            <div className="mb-6">
              <span className="text-xs text-neutral-400">Rp</span>
              <span className="text-4xl font-bold ml-1">17 jt</span>
              <span className="text-sm text-neutral-400">/bulan</span>
            </div>
            <div className="space-y-3 flex-1 mb-8">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-neutral-300">Semua fitur Business</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-neutral-300">Transfer Pricing</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-neutral-300">Priority Support 24/7</span>
              </div>
            </div>
            <button className="w-full py-3.5 rounded-full font-medium text-sm transition bg-white/5 hover:bg-white/10 border border-white/10 text-white hover:scale-105">
              Pilih Enterprise
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
