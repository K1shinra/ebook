import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import DownloadSection from "@/components/landing/DownloadSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section - Main landing area with tagline and CTA */}
      <HeroSection />

      {/* About Section - What is Museyo and why it exists */}
      <AboutSection />

      {/* Features Section - Key features of the app */}
      <FeaturesSection />

      {/* How It Works Section - Simple 3-step process */}
      <HowItWorksSection />

      {/* Download Section - Call to action with download links */}
      <DownloadSection />

      {/* Footer - Copyright, links, and social media */}
      <Footer />
    </div>
  );
};

export default Index;
