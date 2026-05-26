/* eslint-disable @next/next/no-img-element */
"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

export default function Pricing() {
  useScrollReveal();

  const services = [
    {
      title: "Katalyst Academy",
      subtitle: "Capability development designed for real business execution.",
      price: "5",
      period: "Program",
      isPopular: false,
      scope: [
        "Finance & Accounting Training",
        "Tax Practical Workshop",
        "Business Case Consulting",
      ],
      benefits: ["Improved team capability", "Better execution consistency"],
      bestFor: "Teams needing skill upgrades",
    },
    {
      title: "Tax & Compliance Advisory",
      subtitle:
        "Ensuring compliance while optimizing tax efficiency and minimizing business risk.",
      price: "5",
      period: "Month",
      isPopular: false,
      scope: [
        "Tax Review & Health Check",
        "Corporate Tax Planning",
        "Compliance Filing (SPT)",
      ],
      benefits: ["Reduced tax risks", "Improved compliance confidence"],
      bestFor: "Companies needing sustainable compliance",
    },
    {
      title: "Business Performance Advisory",
      subtitle:
        "Turning operational complexity into measurable business performance.",
      price: "8",
      period: "Month",
      isPopular: false,
      scope: [
        "Business Process Assessment",
        "Operational Efficiency Analysis",
        "Strategic Planning",
      ],
      benefits: [
        "Improved operational efficiency",
        "Enhanced decision framework",
      ],
      bestFor: "Business owners seeking structured growth",
    },
    {
      title: "Finance Transformation Advisory",
      subtitle:
        "Helping businesses build structured, scalable, and decision-ready financial systems.",
      price: "10",
      period: "Month",
      isPopular: false,
      scope: [
        "Financial Reporting Structuring",
        "Cash Flow Monitoring System",
        "Financial System Integration",
      ],
      benefits: ["Better financial visibility", "Scalable financial structure"],
      bestFor: "Businesses shifting to data-driven management",
    },
    {
      title: "Executive Partner Program",
      subtitle: "Strategic advisory support for top management and founders.",
      price: "15",
      period: "Month",
      isPopular: true,
      scope: [
        "Continuous Consulting",
        "Strategic Discussion",
        "Business Problem Solving",
      ],
      benefits: ["Expert perspective on demand", "No additional overhead cost"],
      bestFor: "Founders needing long-term strategic support",
    },
  ];

  return (
    <section
      id="harga"
      className="py-20 md:py-28 relative overflow-hidden bg-[#080818]"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="animate-on-scroll text-xs font-semibold text-blue-400 uppercase tracking-widest">
            Services & Pricing
          </span>
          <h2 className="animate-on-scroll text-3xl md:text-5xl font-bold mt-3 tracking-tight">
            KATALYST <span className="text-blue-500">SERVICES & PRICING</span>
          </h2>
        </div>

        {/* Cards Container */}
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className={`animate-on-scroll stagger-${i + 1} relative flex flex-col rounded-2xl p-8 transition-all duration-300 group w-full sm:max-w-[380px] ${
                service.isPopular
                  ? "bg-gradient-to-b from-blue-600/20 to-indigo-900/10 border-2 border-blue-500/50 z-10 hover:border-blue-400/80 [animation:glow-pulse_3s_ease-in-out_infinite]"
                  : "bg-white/[0.03] border border-white/[0.06] hover:border-blue-500/40 hover:bg-white/[0.05]"
              }`}
            >
              {/* Efek Khusus Card Paling Populer */}
              {service.isPopular && (
                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                  {/* Efek Shimmer / Glitter */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      background:
                        "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.8) 50%, transparent 70%)",
                      backgroundSize: "200% 100%",
                      animation: "shimmer 3s infinite linear",
                    }}
                  ></div>

                  {/* Efek Partikel Mengambang */}
                  <span
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      top: "20%",
                      left: "15%",
                      animation: "float-particle 4s infinite ease-out",
                      animationDelay: "0s",
                    }}
                  ></span>
                  <span
                    className="absolute w-1.5 h-1.5 bg-blue-300 rounded-full"
                    style={{
                      top: "60%",
                      left: "85%",
                      animation: "float-particle 5s infinite ease-out",
                      animationDelay: "1s",
                    }}
                  ></span>
                  <span
                    className="absolute w-1 h-1 bg-indigo-200 rounded-full"
                    style={{
                      top: "75%",
                      left: "25%",
                      animation: "float-particle 4.5s infinite ease-out",
                      animationDelay: "2s",
                    }}
                  ></span>
                  <span
                    className="absolute w-2 h-2 bg-blue-400/50 rounded-full"
                    style={{
                      top: "40%",
                      left: "60%",
                      animation: "float-particle 6s infinite ease-out",
                      animationDelay: "0.5s",
                    }}
                  ></span>
                  <span
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      top: "10%",
                      left: "70%",
                      animation: "float-particle 5.5s infinite ease-out",
                      animationDelay: "1.5s",
                    }}
                  ></span>
                </div>
              )}

              {/* Most Popular Badge */}
              {service.isPopular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[11px] font-bold px-6 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-blue-600/40 flex items-center gap-2 whitespace-nowrap z-20">
                  <Sparkles className="w-4 h-4" /> Paling Populer 🔥
                </span>
              )}

              {/* Card Content (diberi z-10 agar di atas shimmer) */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Card Header */}
                <div className="flex flex-col items-center text-center mb-6">
                  <img
                    src="/logokatalyst.png"
                    alt="Katalyst Logo"
                    className="w-12 h-12 rounded-lg object-contain mb-4 shrink-0"
                  />
                  <h3
                    className={`text-xl font-semibold ${service.isPopular ? "text-white" : "text-neutral-200"}`}
                  >
                    {service.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-2 leading-relaxed text-center">
                    {service.subtitle}
                  </p>
                </div>

                {/* Pricing */}
                <div className="mb-6 pb-6 border-b border-white/10 flex items-baseline justify-center gap-1 text-center">
                  <span
                    className={`text-sm ${service.isPopular ? "text-blue-300" : "text-neutral-400"}`}
                  >
                    Starting from Rp
                  </span>
                  <span
                    className={`text-4xl font-bold ${service.isPopular ? "text-white" : "text-neutral-100"}`}
                  >
                    {service.price} JT
                  </span>
                  <span
                    className={`text-sm ${service.isPopular ? "text-blue-300" : "text-neutral-400"}`}
                  >
                    / {service.period}
                  </span>
                </div>

                {/* Content Lists */}
                <div className="space-y-4 flex-1 mb-8 text-sm">
                  <div>
                    <h4 className="font-semibold text-neutral-300 mb-2 uppercase tracking-wider text-xs">
                      Scope of Support
                    </h4>
                    <ul className="space-y-2">
                      {service.scope.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-neutral-400"
                        >
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-0.5 ${service.isPopular ? "text-blue-400" : "text-blue-500/50"}`}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-neutral-300 mb-2 uppercase tracking-wider text-xs">
                      Key Benefits
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-neutral-400"
                        >
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-0.5 ${service.isPopular ? "text-blue-400" : "text-blue-500/50"}`}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white/5 p-3 rounded-lg mt-4">
                    <span className="text-xs font-semibold text-blue-400">
                      Best For:{" "}
                    </span>
                    <span className="text-xs text-neutral-300">
                      {service.bestFor}
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="https://wa.me/628561510888"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 rounded-full font-medium text-sm transition-all flex items-center justify-center gap-2 mt-auto ${
                    service.isPopular
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30 hover:scale-105"
                      : "bg-white/5 hover:bg-white/10 border border-white/10 text-white hover:scale-105"
                  }`}
                >
                  Pilih Paket {service.title.split(" ")[0]}{" "}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
