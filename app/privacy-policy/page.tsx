"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import ParticleBackground from "@/components/ParticleBackground";
import { ShieldCheck } from "lucide-react";

export default function PrivacyPolicy() {
  useScrollReveal();

  const sections = [
    {
      title: "1. Pendahuluan",
      content:
        'PT Katalyst Partner Consulting ("Katalyst") menghormati privasi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, mengungkapkan, dan melindungi informasi Anda saat Anda mengunjungi website kami atau menggunakan layanan kami. Dengan menggunakan website kami, Anda menyetujui praktik yang dijelaskan dalam kebijakan ini.',
    },
    {
      title: "2. Informasi yang Kami Kumpulkan",
      content:
        "Kami dapat mengumpulkan informasi yang Anda berikan secara langsung kepada kami, seperti nama, alamat email, nomor telepon, dan nama perusahaan. Ini biasanya terjadi saat Anda mengisi formulir Lead Magnet (Download Checklist), menghubungi kami melalui WhatsApp, atau berlangganan buletin kami.",
    },
    {
      title: "3. Bagaimana Kami Menggunakan Informasi Anda",
      content:
        "Informasi yang kami kumpulkan digunakan untuk: Memberikan, mengoperasikan, dan memelihara layanan kami; Mengirimkan aset digital yang Anda minta (seperti Checklist Pajak); Meningkatkan dan mempersonalisasi pengalaman pengguna; Menganalisis bagaimana layanan kami digunakan untuk meningkatkan kualitas; serta Mengirimkan informasi pemasaran dan promosi (dengan persetujuan Anda).",
    },
    {
      title: "4. Keamanan Data",
      content:
        "Keamanan data Anda penting bagi kami. Kami menerapkan langkah-langkah keamanan teknis dan organisasi yang sesuai untuk melindungi Informasi Pribadi Anda dari akses yang tidak sah, perubahan, pengungkapan, atau penghancuran. Namun, perlu dicatat bahwa tidak ada metode transmisi melalui internet yang 100% aman.",
    },
    {
      title: "5. Hubungi Kami",
      content:
        "Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami melalui email di info@katalystpartner.com atau melalui WhatsApp di +62 822 - 2709 - 0808.",
    },
  ];

  return (
    <main className="bg-[#0a0a1a] text-white min-h-screen relative antialiased">
      <ParticleBackground />

      {/* Hero Section Halaman Legal */}
      <div className="relative z-10 pt-32 pb-16 text-center px-5">
        <div className="animate-on-scroll inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
          <ShieldCheck className="w-4 h-4 text-blue-400" />
          <span className="text-xs font-medium text-blue-400 tracking-wide uppercase">
            Legal & Security
          </span>
        </div>
        <h1 className="animate-on-scroll text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Privacy{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
            Policy
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
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

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
