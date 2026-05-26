/* eslint-disable @next/next/no-img-element */
"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function LeadershipTeam() {
  useScrollReveal();
  const team = [
    {
      name: "Bryan Hitipeuw, S.Ak",
      role: "Director Lead Consultant",
      // Ubah path ke folder public Anda
      img: "/images/team/bryan.jpg", 
    },
    {
      name: "Brenda Fiona, S.E",
      role: "Senior Tax Consultant",
      img: "/images/team/brenda.jpg",
    },
    {
      name: "Archimedes Daely, S.Sl",
      role: "Business Development",
      img: "/images/team/archimedes.jpg",
    },
    {
      name: "Fiorela Sofian, S.HI",
      role: "Digital Marketing",
      img: "/images/team/fiorela.jpg",
    },
  ];

  return (
    <section id="team" className="py-20 md:py-28 relative bg-[#080818]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="animate-on-scroll text-xs font-semibold text-blue-400 uppercase tracking-widest">
            Tim Ahli Kami
          </span>
          <h2 className="animate-on-scroll text-3xl md:text-5xl font-bold mt-3 tracking-tight">
            Leadership <span className="text-blue-500">Team</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div
              key={i}
              className={`animate-on-scroll stagger-${i + 1} text-center group glow-card rounded-2xl p-6 bg-white/[0.03]`}
            >
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden bg-blue-900/20 border-2 border-transparent group-hover:border-blue-500/50 transition-all duration-300 shadow-lg group-hover:shadow-blue-500/10">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover img-zoom"
                />
              </div>
              <h3 className="text-lg font-semibold text-white">
                {member.name}
              </h3>
              <p className="text-sm text-blue-400 mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}