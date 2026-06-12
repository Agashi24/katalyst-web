/* eslint-disable @next/next/no-img-element */
"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const teamsData = [
  {
    teamName: "Leadership Team",
    members: [
      {
        name: "Bryan Hitipeuw",
        role: "Director Lead Consultant",
        img: "/images/team/bryan.jpg",
      },
      {
        name: "Brenda Fiona",
        role: "Senior Tax Consultant",
        img: "/images/team/brenda.jpg",
      },
    ],
  },
  {
    teamName: "Business & Development Team", // Saya ganti nama ini agar tidak duplikat Leadership
    members: [
      {
        name: "Archimedes Daely",
        role: "Business Development",
        img: "/images/team/archimedes.jpg",
      },
      {
        name: "Fiorela Sofian",
        role: "Digital Marketing",
        img: "/images/team/fiorela.jpg",
      },
    ],
  },
  {
    teamName: "Specialist Team",
    members: [
      {
        name: "Septiana Setya",
        role: "Senior Auditor",
        img: "/images/team/septiana.png",
      },
      {
        name: "Marsel Hidayat",
        role: "Tax Consultant",
        img: "/images/team/marsel.png",
      },
      {
        name: "Ime Pratiwi Simanjuntak",
        role: "Finance Accounting",
        img: "/images/team/ime.png",
      },
    ],
  },
  {
    teamName: "Specialist Team",
    members: [
      {
        name: "Rina Lian Sinaga",
        role: "Tax Audit",
        img: "/images/team/rina.png",
      },
      {
        name: "Gin Sutisna",
        role: "General Accounting",
        img: "/images/team/gin.png",
      },
      {
        name: "Jessica Vianto",
        role: "Accounting Operation",
        img: "/images/team/jessica.png",
      },
    ],
  },
];

export default function LeadershipTeam() {
  useScrollReveal();

  // Fungsi untuk menyesuaikan lebar kotak biru berdasarkan jumlah anggota
  const getContainerWidth = (memberCount) => {
    if (memberCount <= 2) return "max-w-3xl"; // Lebih kecil jika 2 orang
    if (memberCount === 3) return "max-w-4xl"; // Sedang jika 3 orang
    return "max-w-6xl"; // Lebar jika 4 orang atau lebih
  };

  return (
    <section id="team" className="py-20 md:py-28 relative bg-[#080818]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header Utama Section */}
        <div className="text-center mb-16">
          <span className="animate-on-scroll text-xs font-semibold text-blue-400 uppercase tracking-widest">
            Tim Ahli Kami
          </span>
          <h2 className="animate-on-scroll text-3xl md:text-5xl font-bold mt-3 tracking-tight">
            Leadership & <span className="text-blue-500">Specialist</span>
          </h2>
        </div>

        {/* Looping Blok Tim */}
        <div className="space-y-16">
          {teamsData.map((team, teamIdx) => (
            <div
              key={teamIdx}
              className={`animate-on-scroll stagger-${teamIdx + 1} relative bg-blue-900/5 border border-blue-500/10 rounded-3xl p-6 md:p-10 overflow-hidden mx-auto ${getContainerWidth(team.members.length)}`}
            >
              {/* Aksen Glow di pojok kanan atas */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

              {/* Header Blok Tim */}
              <div className="relative z-10 mb-10 pb-6 border-b border-white/5 text-center">
                <p className="text-xs text-blue-400 uppercase tracking-widest font-medium mb-2">
                  PT Katalyst Partner Consulting
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {team.teamName}
                </h3>
              </div>

              {/* Grid Anggota Tim - Diubah ke Flex agar otomatis ke tengah */}
              <div className="relative z-10 flex flex-wrap justify-center gap-8">
                {team.members.map((member, i) => (
                  <div
                    key={i}
                    className="text-center group glow-card rounded-2xl p-6 bg-white/[0.02] w-56" // Lebar card dikunci agar rapi
                  >
                    <div className="relative w-40 h-40 mx-auto mb-6 rounded-2xl overflow-hidden bg-blue-900/20 border-2 border-transparent group-hover:border-blue-500/50 transition-all duration-300 shadow-lg group-hover:shadow-blue-500/10">
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
          ))}
        </div>
      </div>
    </section>
  );
}
