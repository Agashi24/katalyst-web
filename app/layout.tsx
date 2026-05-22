import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Katalyst Partner",
  description: "Business & Tax Consultant - One System. One Partner.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">{children}</body>
    </html>
  );
}
