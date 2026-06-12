import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://katalyst-web.vercel.app"; // Ganti jika sudah pakai domain custom

  return {
    rules: [
      {
        userAgent: "*", // Berlaku untuk semua mesin pencari (Google, Bing, dll)
        allow: "/", // Izinkan meng-crawl seluruh halaman publik
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`, // Arahkan ke file sitemap yang tadi dibuat
  };
}
