import Navbar from "@/components/Navbar";
import HeroShowreel from "@/components/HeroShowreel";
import CaseStudiesGrid from "@/components/CaseStudiesGrid";
import ProcessHowWeWork from "@/components/ProcessHowWeWork";
import FAQ from "@/components/FAQ";
import FinalCallToAction from "@/components/FinalCallToAction";
import Footer from "@/components/Footer";
import GradualBlur from "@/components/GradualBlur";
import CalendlyModal from "@/components/CalendlyModal";
import GlobalMouseGlow from "@/components/GlobalMouseGlow";

export default function Home() {
  return (
    <div className="bg-background-dark min-h-screen relative overflow-x-hidden">
      {/* Global mouse glow effect */}
      <GlobalMouseGlow />
      
      {/* Bottom blur effect */}
      <GradualBlur
        preset="page-footer"
        strength={0.5}
        height="4rem"
        style={{ bottom: '200px' }}
      />

      {/* Navbar */}
      <Navbar />

      <main className="w-full max-w-full overflow-x-hidden">
        <HeroShowreel />
        <CaseStudiesGrid />
        <ProcessHowWeWork />
        <FAQ />
        <FinalCallToAction />
      </main>

      {/* Footer */}
      <Footer />

      {/* Calendly Modal */}
      <CalendlyModal />
    </div>
  );
}
