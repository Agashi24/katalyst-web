/* eslint-disable @next/next/no-img-element */
"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { UserCheck, Sprout, Building2, Gem } from "lucide-react";

const partners = [
  { name: "PT Maju Bersama", logo: "/partners/auntieannes.png", initial: "AE" },
  { name: "Global Indo Jaya", logo: "/partners/aw.png", initial: "AW" },
  {
    name: "Surya Energi Group",
    logo: "/partners/burgerking.png",
    initial: "BK",
  },
  {
    name: "Nusantara Finance",
    logo: "/partners/krispykreme.png",
    initial: "KK",
  },
  {
    name: "Karya Digital Tech",
    logo: "/partners/papajohn.png",
    initial: "PJ",
  },
  {
    name: "Sentosa Manufacturing",
    logo: "/partners/subway.png",
    initial: "SW",
  },
  { name: "Artha Mulia Corp", logo: "/partners/wendys.png", initial: "W" },
  { name: "Bumi Persada Group", logo: "/partners/domino.png", initial: "D" },
];

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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
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
          <h3 className="text-center text-sm font-semibold text-neutral-500 uppercase tracking-widest mb-12">
            Dipercaya oleh Perusahaan Terkemuka
          </h3>

          <div className="relative group overflow-hidden">
            {/* Fade Hitam di tepi - DIPERKECIL di HP agar tidak menelan logo */}
            <div className="absolute left-0 top-0 bottom-0 w-6 md:w-24 bg-gradient-to-r from-[#080818] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-6 md:w-24 bg-gradient-to-l from-[#080818] to-transparent z-10 pointer-events-none"></div>

            {/* Container Scroll */}
            <div className="flex animate-scroll-partners gap-8">
              {/* Duplikasi 4x agar lintasan sangat panjang, loop di HP tidak akan terputus */}
              {[...partners, ...partners, ...partners, ...partners].map(
                (partner, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-3 shrink-0 w-40 md:w-52 py-2"
                  >
                    <div className="w-full h-24 md:h-28 rounded-xl bg-white/[0.03] border border-white/[0.08] p-2 flex items-center justify-center transition-all duration-300 hover:border-blue-500/40 hover:bg-white/[0.06] hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer group/card">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-full h-full object-contain md:grayscale md:opacity-50 md:group-hover/card:grayscale-0 md:group-hover/card:opacity-100 transition-all duration-300"
                      />
                    </div>

                    <span className="text-xs text-neutral-500 group-hover/card:text-neutral-300 transition-colors duration-300 text-center font-medium tracking-wide">
                      {partner.name}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
