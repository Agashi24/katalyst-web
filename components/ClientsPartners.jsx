"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { UserCheck, Sprout, Building2, Gem } from "lucide-react";

export default function ClientsPartners() {
  useScrollReveal();
  return (
    <section className="py-20 md:py-28 relative bg-[#080818]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Target Klien */}
        <div className="text-center mb-16">
          <span className="animate-on-scroll text-xs font-semibold text-blue-400 uppercase tracking-widest">
            Target Klien
          </span>
          <h2 className="animate-on-scroll text-3xl md:text-5xl font-bold mt-3 tracking-tight">
            We Work <span className="text-blue-500">With</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <div className="animate-on-scroll stagger-1 tilt-card bg-white/[0.03] border border-white/[0.06] hover:border-blue-500/30 rounded-2xl p-7 transition-all duration-300 hover:bg-white/[0.05]">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-5">
              <UserCheck className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Business Owners</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Seeking clarity in financial performance and decision-making.
            </p>
          </div>
          <div className="animate-on-scroll stagger-2 tilt-card bg-white/[0.03] border border-white/[0.06] hover:border-blue-500/30 rounded-2xl p-7 transition-all duration-300 hover:bg-white/[0.05]">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-5">
              <Sprout className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Growing Enterprises</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              UMKM & Startups transitioning to structured systems.
            </p>
          </div>
          <div className="animate-on-scroll stagger-3 tilt-card bg-white/[0.03] border border-white/[0.06] hover:border-blue-500/30 rounded-2xl p-7 transition-all duration-300 hover:bg-white/[0.05]">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-5">
              <Building2 className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Established Enterprises
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Requiring strategic tax planning, compliance, and risk management.
            </p>
          </div>
          <div className="animate-on-scroll stagger-4 tilt-card bg-white/[0.03] border border-white/[0.06] hover:border-blue-500/30 rounded-2xl p-7 transition-all duration-300 hover:bg-white/[0.05]">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-5">
              <Gem className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              High-Income Individuals
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Managing complex financial and tax structures efficiently.
            </p>
          </div>
        </div>

        {/* Logo Partner / Trusted By */}
        <div className="animate-on-scroll border-t border-white/5 pt-16">
          <h3 className="text-center text-sm font-semibold text-neutral-500 uppercase tracking-widest mb-10">
            Dipercaya oleh Perusahaan Terkemuka
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {/* Ganti src dengan path logo Anda di folder public/images/partners/ */}
            <div className="text-neutral-600 font-bold text-lg tracking-widest opacity-40 hover:opacity-80 transition">
              PT MAJU
            </div>
            <div className="text-neutral-600 font-bold text-lg tracking-widest opacity-40 hover:opacity-80 transition">
              TECHCO
            </div>
            <div className="text-neutral-600 font-bold text-lg tracking-widest opacity-40 hover:opacity-80 transition">
              GLOBAL INDO
            </div>
            <div className="text-neutral-600 font-bold text-lg tracking-widest opacity-40 hover:opacity-80 transition">
              SURYA GROUP
            </div>
            <div className="text-neutral-600 font-bold text-lg tracking-widest opacity-40 hover:opacity-80 transition">
              NUSANTARA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
