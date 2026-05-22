/* eslint-disable @next/next/no-img-element */
"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Landmark, ShieldCheck, Rocket, HeartHandshake } from "lucide-react";

export default function About() {
  useScrollReveal();
  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Modern Building"
                className="w-full h-[400px] object-cover img-zoom transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/20 rounded-full blur-xl pointer-events-none"></div>
          </div>
          <div>
            <span className="animate-on-scroll text-xs font-semibold text-blue-400 uppercase tracking-widest">
              About Us
            </span>
            <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold mt-3 tracking-tight leading-tight">
              About <span className="text-blue-500">Katalyst Partner</span>{" "}
              Consulting
            </h2>
            <p className="animate-on-scroll text-neutral-400 mt-6 leading-relaxed text-lg">
              A business financial consulting firm dedicated to helping growing
              businesses build a solid financial foundation, stay tax-efficient,
              and expand with peace of mind.
            </p>
            <div className="animate-on-scroll mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                  <Landmark className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">
                    Financial Foundation
                  </h4>
                  <p className="text-xs text-neutral-500 mt-1">
                    Build solid structure
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Tax Efficiency</h4>
                  <p className="text-xs text-neutral-500 mt-1">
                    Stay compliant & optimal
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                  <Rocket className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Expand Safely</h4>
                  <p className="text-xs text-neutral-500 mt-1">
                    Scale with peace of mind
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Trusted Partner</h4>
                  <p className="text-xs text-neutral-500 mt-1">
                    We grow together
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
