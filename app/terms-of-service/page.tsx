"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import ParticleBackground from "@/components/ParticleBackground";
import { FileText } from "lucide-react";

export default function TermsOfService() {
  useScrollReveal();

  const sections = [
    {
      title: "1. Penerimaan Ketentuan",
      content:
        'Dengan mengakses dan menggunakan website PT Katalyst Partner Consulting ("Katalyst"), Anda mengakui bahwa Anda telah membaca, memahami, dan setuju untuk terikat oleh Ketentuan Layanan ini. Jika Anda tidak menyetujui ketentuan ini, mohon untuk tidak menggunakan layanan atau website kami.',
    },
    {
      title: "2. Ruang Lingkup Layanan",
      content:
        "Katalyst menyediakan layanan konsultasi pajak, keuangan, dan strategi bisnis. Informasi yang diberikan di website ini hanya untuk tujuan informasi umum dan bukan merupakan nasihat pajak, hukum, atau keuangan formal. Klien harus berkonsultasi secara langsung dengan tim ahli kami sebelum mengambil keputusan bisnis berdasarkan informasi di website ini.",
    },
    {
      title: "3. Hak Kekayaan Intelektual",
      content:
        "Seluruh konten, desain, grafik, logo, dan materi di website ini adalah milik PT Katalyst Partner Consulting dan dilindungi oleh hukum hak kekayaan intelektual yang berlaku di Republik Indonesia. Anda dilarang memperbanyak, mendistribusikan, atau menggunakan konten ini tanpa izin tertulis dari kami.",
    },
    {
      title: "4. Batasan Tanggung Jawab",
      content:
        "Katalyst tidak bertanggung jawab atas kerugian tidak langsung, insidental, atau konsekuensial yang timbul dari penggunaan website atau layanan kami. Kami berusaha untuk menjaga informasi di website ini tetap akurat dan terkini, namun kami tidak memberikan jaminan atas kelengkapan atau keakuratannya.",
    },
    {
      title: "5. Perubahan Ketentuan",
      content:
        "Kami berhak untuk memperbarui atau mengubah Ketentuan Layanan ini kapan saja tanpa pemberitahuan sebelumnya. Penggunaan Anda yang berkelanjutan atas website atau layanan setelah perubahan tersebut merupakan penerimaan Anda atas ketentuan yang baru.",
    },
  ];

  return (
    <main className="bg-[#0a0a1a] text-white min-h-screen relative antialiased">
      <ParticleBackground />

      {/* Hero Section Halaman Legal */}
      <div className="relative z-10 pt-32 pb-16 text-center px-5">
        <div className="animate-on-scroll inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
          <FileText className="w-4 h-4 text-blue-400" />
          <span className="text-xs font-medium text-blue-400 tracking-wide uppercase">
            Legal Agreement
          </span>
        </div>
        <h1 className="animate-on-scroll text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Terms of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
            Service
          </span>
        </h1>
        <p className="animate-on-scroll text-neutral-400 text-sm">
          Terakhir diperbarui: 25 Januari 2025
        </p>
      </div>

      {/* Konten Utama dengan Efek Glassmorphism */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 pb-24">
        <div className="animate-on-scroll bg-[#080818]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl shadow-blue-900/10 relative overflow-hidden">
          {/* Aksen Glow Dinamis */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 space-y-10">
            {sections.map((section, i) => (
              <div key={i} className="animate-on-scroll">
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
                  {section.title}
                </h2>
                <p className="text-neutral-300 leading-relaxed text-sm md:text-base pl-5 border-l border-white/10">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
