"use client";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Apakah data bisnis dan pajak saya aman?",
    answer:
      "Absolut. Keamanan data adalah prioritas utama kami. Seluruh dokumen dan informasi klien dienkripsi dan disimpan dalam sistem yang aman. Kami juga menandatangani Perjanjian Kerahasiaan (NDA) sebelum memulai konsultasi.",
  },
  {
    question: "Bagaimana cara memulai konsultasi?",
    answer:
      "Sangat mudah! Anda bisa memilih paket yang sesuai dengan kebutuhan bisnis Anda di atas, lalu klik tombol 'Pilih Paket'. Anda akan langsung terhubung dengan tim kami melalui WhatsApp untuk jadwal sesi konsultasi perdana.",
  },
  {
    question: "Apakah saya bisa berhenti berlangganan di tengah jalan?",
    answer:
      "Ya, Anda bisa. Untuk paket bulanan, kami menerapkan sistem notice 30 hari sebelum periode berikutnya. Tidak ada denda pemutusan, namun kami akan menyelesaikan semua pelaporan yang sedang berjalan hingga periode berakhir.",
  },
  {
    question: "Berapa lama proses penyelesaian pelaporan pajak?",
    answer:
      "Untuk pelaporan SPT bulanan, standar penyelesaiannya adalah 3-5 hari kerja setelah dokumen lengkap diterima. Untuk layanan yang lebih kompleks seperti Tax Planning, timeline akan disesuaikan dengan kebutuhan setelah sesi konsultasi awal.",
  },
  {
    question: "Apakah saya harus datang ke kantor Katalyst?",
    answer:
      "Tidak perlu. Kami bisa melakukan seluruh proses konsultasi dan pengumpulan dokumen secara daring (via Zoom, WhatsApp, atau Email). Namun, jika Anda lebih nyaman bertemu langsung, kami dengan senang hati menjamu Anda di kantor kami di Jakarta Pusat.",
  },
];

export default function FAQ() {
  useScrollReveal();
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // scroll-mt-20 ditambahkan agar saat di-scroll, judul tidak tertutup Navbar
    <section
      id="faq"
      className="scroll-mt-20 py-20 md:py-28 relative bg-[#0a0a1a]"
    >
      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="animate-on-scroll text-xs font-semibold text-blue-400 uppercase tracking-widest">
            FAQ
          </span>
          <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold mt-3 tracking-tight">
            Pertanyaan yang{" "}
            <span className="text-blue-500">Sering Ditanyakan</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border border-white/10 rounded-xl overflow-hidden transition-colors duration-300 ${
                openIndex === i
                  ? "bg-white/[0.05] border-blue-500/30"
                  : "bg-white/[0.02]"
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none cursor-pointer"
              >
                <span className="font-medium text-sm md:text-base text-neutral-200 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-blue-400 shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden ${
                  openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-5 pb-5 text-sm text-neutral-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
