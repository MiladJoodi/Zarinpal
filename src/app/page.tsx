import Header from "@/components/Header/header";
import HeroSection from "@/components/Home/HeroSection";
import StatsSection from "@/components/Home/StatsSection/StatsSection";
import CallToActionSection from "@/components/Home/CallToActionSection";
import Footer from "@/components/Home/Footer/Footer";

export default function Home() {

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}
