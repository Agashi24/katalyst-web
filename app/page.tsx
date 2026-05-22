import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WeWorkWith from "@/components/WeWorkWith";
import ProcessSection from "@/components/ProcessSection";
import Capabilities from "@/components/Capabilities";
import LeadershipTeam from "@/components/LeadershipTeam";
import KatalystAcademy from "@/components/KatalystAcademy";
import Pricing from "@/components/Pricing";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import BackToTop from "@/components/BackToTop";

// Komponen Baru
import ParticleBackground from "@/components/ParticleBackground";
import CursorGlow from "@/components/CursorGlow";
import Marquee from "@/components/Marquee";

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
      <WeWorkWith />
      <ProcessSection />
      <Capabilities />
      <LeadershipTeam />
      <KatalystAcademy />
      <Pricing />
      <CallToAction />
      <Footer />
      <WhatsAppWidget />
      <BackToTop />
    </main>
  );
}
