/* eslint-disable @next/next/no-img-element */
"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function LeadershipTeam() {
  useScrollReveal();
  const team = [
    {
      name: "Bryan Hitipeuw, S.Ak",
      role: "Director Lead Consultant",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Brenda Fiona, S.E",
      role: "Senior Tax Consultant",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Archimedes Daely, S.Sl",
      role: "Business Development",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Fiorela Sofian, S.HI",
      role: "Digital Marketing",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
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
              // Tambahkan class 'glow-card' di sini untuk efek hover border glow
              className={`animate-on-scroll stagger-${i + 1} text-center group glow-card rounded-2xl p-6 bg-white/[0.03]`}
            >
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden bg-blue-900/20 border-2 border-transparent group-hover:border-blue-500/50 transition-all duration-300 shadow-lg group-hover:shadow-blue-500/10">
                <img
                  src={member.img}
                  alt={member.name}
                  // Tambahkan class 'img-zoom' di sini untuk efek zoom gambar
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
