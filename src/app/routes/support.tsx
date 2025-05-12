import { Hero } from '../components/HelpCenter/Hero';
import { SupportHub } from '../components/HelpCenter/SupportHub';
import { FAQ } from '../components/HelpCenter/FAQ';
import { LiveChat } from '../components/HelpCenter/LiveChat';
import '../app.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "🆘 Support Center – Get Help with 2You.chat Anytime",
    },
    {
      name: "description",
      content: "FAQs, troubleshooting guides, and 24/7 support to resolve issues fast. Your satisfaction is our priority.",
    },
    {
      name: "keywords",
      content: "customer support, help center, chat app troubleshooting, contact support",
    },
  ];
}

const Support = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <SupportHub />
      <FAQ />
      <LiveChat />
      <Footer />
    </div>
  );
};

export default Support;
