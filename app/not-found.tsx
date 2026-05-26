import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-[#0a0a1a] text-white min-h-screen flex flex-col items-center justify-center px-6 text-center antialiased relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="relative z-10">
        <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-600 mb-4 animate-pulse">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 tracking-tight">
          Halaman Tidak Ditemukan
        </h2>
        <p className="text-neutral-400 mb-10 max-w-md mx-auto leading-relaxed">
          Sepertinya Anda tersesat dalam perhitungan. Jangan khawatir, kami bisa
          arahkan Anda kembali ke jalur yang benar.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-full transition-all shadow-lg shadow-blue-600/30 hover:scale-105"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </main>
  );
}
