"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ClientsPartners from "@/components/ClientsPartners"; // Nama import diubah
import ProcessSection from "@/components/ProcessSection";
import Capabilities from "@/components/Capabilities";
import LeadershipTeam from "@/components/LeadershipTeam";
import KatalystAcademy from "@/components/KatalystAcademy";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import BackToTop from "@/components/BackToTop";
import Marquee from "@/components/Marquee";

import dynamic from "next/dynamic";
const ParticleBackground = dynamic(
  () => import("@/components/ParticleBackground"),
  { ssr: false },
);
const CursorGlow = dynamic(() => import("@/components/CursorGlow"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="bg-[#0a0a1a] text-white antialiased relative">
      <CursorGlow />
      <Navbar />
      <div className="relative overflow-hidden">
        <ParticleBackground />
        <Hero />
      </div>
      <Marquee />
      <About />
      <ClientsPartners /> {/* Nama komponen diubah di sini */}
      <ProcessSection />
      <Capabilities />
      <LeadershipTeam />
      <KatalystAcademy />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CallToAction />
      <Footer />
      <WhatsAppWidget />
      <BackToTop />
    </main>
  );
}
