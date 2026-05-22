"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Calculator, ShieldCheck, Lightbulb } from "lucide-react";

export default function Capabilities() {
  useScrollReveal();
  return (
    <section id="capabilities" className="py-20 md:py-28 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="animate-on-scroll text-xs font-semibold text-blue-400 uppercase tracking-widest">
            Layanan Inti
          </span>
          <h2 className="animate-on-scroll text-3xl md:text-5xl font-bold mt-3 tracking-tight">
            Our <span className="text-blue-500">Capabilities</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="animate-on-scroll stagger-1 glow-card bg-white/[0.03] border border-white/[0.06] hover:border-blue-500/40 rounded-2xl p-8 transition-all duration-300 hover:bg-white/[0.05] group">
            <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition">
              <Calculator className="w-7 h-7 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Financial & Accounting
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Building financial systems, reporting, and cash flow visibility
              for better business control.
            </p>
          </div>
          <div className="animate-on-scroll stagger-2 tilt-card relative bg-white/[0.03] border border-white/[0.06] hover:border-blue-500/40 rounded-2xl p-8 transition-all duration-300 hover:bg-white/[0.05] group">
            <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition">
              <ShieldCheck className="w-7 h-7 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Tax & Compliance</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Ensuring compliance while optimizing tax efficiency and minimizing
              risk effectively.
            </p>
          </div>
          <div className="animate-on-scroll stagger-3 tilt-card relative bg-white/[0.03] border border-white/[0.06] hover:border-blue-500/40 rounded-2xl p-8 transition-all duration-300 hover:bg-white/[0.05] group">
            <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition">
              <Lightbulb className="w-7 h-7 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Business & Strategy</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Providing insights, restructuring strategies, and decision support
              to drive growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
