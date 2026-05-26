import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  // ✅ PINDAHKAN KE DALAM SINI agar warning di terminal hilang
  metadataBase: new URL("https://katalyst-web.vercel.app"),

  title: "Katalyst Partner | Konsultan Pajak & Bisnis Terpercaya",
  description:
    "PT Katalyst Partner Consulting membantu bisnis Anda dalam perencanaan pajak, kepatuhan, dan strategi bisnis. One System. One Partner.",
  keywords: [
    "tax",
    "konsultan pajak",
    "tax consultant",
    "jasa pajak",
    "tax consultant jakarta",
    "tax planning",
    "katalyst partner",
    "konsultan bisnis",
  ],
  icons: {
    icon: [
      // ✅ TAMBAHKAN ?v=2 DI BELAKANG .ico UNTUK MENGHANCURKAN CACHE BROWSER
      { url: "/favicon.ico?v=2", sizes: "any" },
      { url: "/favicon-96x96.png?v=2", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png?v=2",
  },
  openGraph: {
    title: "Katalyst Partner | Konsultan Pajak & Bisnis",
    description:
      "Solusi perpajakan dan strategi bisnis profesional. One System. One Partner.",
    url: "https://katalyst-web.vercel.app",
    siteName: "Katalyst Partner",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Katalyst Partner - Konsultan Pajak & Bisnis",
      },
    ],
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Katalyst Partner | Konsultan Pajak & Bisnis",
    description:
      "Solusi perpajakan dan strategi bisnis profesional. One System. One Partner.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a1a",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className="antialiased">{children}</body>
    </html>
  );
}
