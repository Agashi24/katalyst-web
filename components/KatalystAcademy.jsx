"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GraduationCap, Mic, BookOpen, MessageSquare } from "lucide-react";

export default function KatalystAcademy() {
  useScrollReveal();
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="animate-on-scroll inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 mb-4">
            <GraduationCap className="w-4 h-4 text-indigo-400" />
            <span className="text-xs font-medium text-indigo-400 tracking-wide uppercase">
              Katalyst Academy
            </span>
          </div>
          <h2 className="animate-on-scroll text-3xl md:text-5xl font-bold tracking-tight">
            Capability Development &<br />
            <span className="text-blue-500">Executive Mentoring</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="animate-on-scroll stagger-1 tilt-card relative bg-white/[0.03] border border-white/[0.06] hover:border-indigo-500/40 rounded-2xl p-8 transition-all duration-300 hover:bg-white/[0.05] group">
            <div className="w-14 h-14 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition">
              <Mic className="w-7 h-7 text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Executive Mentorship</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Focused on real business challenges through direct, personalized
              advisory sessions with our experts.
            </p>
          </div>
          <div className="animate-on-scroll stagger-2 tilt-card relative bg-white/[0.03] border border-white/[0.06] hover:border-indigo-500/40 rounded-2xl p-8 transition-all duration-300 hover:bg-white/[0.05] group">
            <div className="w-14 h-14 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition">
              <BookOpen className="w-7 h-7 text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">In-house Training</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Customized training programs designed to match your specific
              business operations and team capabilities.
            </p>
          </div>
          <div className="animate-on-scroll stagger-3 tilt-card relative bg-white/[0.03] border border-white/[0.06] hover:border-indigo-500/40 rounded-2xl p-8 transition-all duration-300 hover:bg-white/[0.05] group">
            <div className="w-14 h-14 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition">
              <MessageSquare className="w-7 h-7 text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Business Case Consulting
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              In-depth discussions and strategic solutions for critical issues
              like cash flow management and scaling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
