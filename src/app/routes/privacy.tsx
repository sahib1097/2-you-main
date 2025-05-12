import HeroSection from "../components/privacy/HeroSection";
import FeatureSection from "../components/privacy/FeatureSection";
import PrivacyFeatures from "../components/privacy/PrivacyFeatures";
import TokenDisplay from "../components/privacy/TokenDisplay";
import SeparateAccounts from "../components/privacy/SeparateAccounts";
import NoTraces from "../components/privacy/NoTraces";
import CloudBackup from "../components/privacy/CloudBackup";
import FAQ from "../components/privacy/FAQ";
import Header from "../components/Header";
import Footer from "../components/Footer";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "🔒 Privacy at 2You – Your Data, Your Control | End-to-End Encryption",
    },
    {
      name: "description",
      content: "Your chats belong to you. 2You uses military-grade encryption and zero data storage to keep conversations truly private.",
    },
    {
      name: "keywords",
      content: "privacy-focused chat, encrypted messaging, data control, no data retention",
    },
  ];
}

const Privacy = () => {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <Header />
      <HeroSection />
      <FeatureSection />
      <PrivacyFeatures />
      <TokenDisplay />
      <NoTraces />
      <SeparateAccounts />
      <CloudBackup />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Privacy;
