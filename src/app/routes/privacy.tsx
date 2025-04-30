import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import PrivacyFeatures from "../components/PrivacyFeatures";
import TokenDisplay from "../components/TokenDisplay";
import SeparateAccounts from "../components/SeparateAccounts";
import NoTraces from "../components/NoTraces";
import CloudBackup from "../components/CloudBackup";
import FAQ from "../components/FAQ";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Privacy = () => {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
    <Header/>
      <HeroSection />
      <FeatureSection />
      <PrivacyFeatures />
      <TokenDisplay />
      <NoTraces />
      <SeparateAccounts />
      <CloudBackup />
      <FAQ />
      <Footer/>
    </main>
  );
};

export default Privacy;
