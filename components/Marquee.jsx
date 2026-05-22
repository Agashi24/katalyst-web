"use client";
export default function Marquee() {
  const items = [
    "Tax Planning",
    "Financial Audit",
    "Compliance",
    "Business Strategy",
    "Transfer Pricing",
    "Risk Management",
    "Brevet A & B",
    "Tax Optimization",
  ];

  return (
    <div className="w-full overflow-hidden bg-[#060612] border-y border-white/5 py-4">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-8 shrink-0">
            <span className="text-sm text-neutral-500 font-medium uppercase tracking-widest">
              {item}
            </span>
            <span className="text-blue-600 text-xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
