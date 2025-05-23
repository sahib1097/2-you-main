// src/pages/privacy-policy.tsx
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../app.css';

const Privacy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Prevent copy/drag
  const preventAction = (e: React.ClipboardEvent | React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div
      className="bg-[#fdf2e3] min-h-screen"
      onCopy={preventAction}
      onContextMenu={preventAction}
    >
      <Header />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Frame */}
          <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-gray-200 shadow-xl p-10 select-none">
            {/* Title */}
            <h1 className="text-4xl font-bold mb-4 text-black text-center">
                Privacy Policy
            </h1>

            {/* Dates */}
            <div className="text-sm text-neutral-500 mb-8 text-left">
              Effective Date: May 1, 2025<br />
              Last Updated: May 23, 2025
            </div>

            {/* Content */}
            <div className="prose prose-lg text-gray-800">
              <p>
              2You’s Services use end-to-end encryption to protect global messaging and calls. Content remains private between participants.
              </p>
              <br></br>

              {/* <h2><strong>Terms of Service:</strong></h2>
              <p>
                <strong>Subprime Platforms Inc. (“2You”, “we”, “us”, or “our”)</strong>, a company headquartered at <strong>140 S Atlantic Ave, Ormond Beach, Florida 32176</strong>, employs cutting‑edge security and end‑to‑end encryption to deliver private messaging, calling, and related services globally under the <strong>2You</strong> trademark. By installing or using our apps, services, or website (collectively, “Services”), you agree to these Terms of Service (“Terms”).
              </p> */}
                <br></br>
              <h3><strong>Information You Provide</strong></h3>
              <ul>
                <li><strong>Account Data.</strong> Registration requires a phone number. Optional encrypted details (profile name, photo) enhance your account.</li>
                <li><strong>Messages.</strong> Content is undecryptable by 2You. Offline messages are queued securely. History stays on your devices.</li>
                <li><strong>Technical Data.</strong> Servers store minimal encrypted tokens/keys for service operation.</li>
                <li><strong>Contacts.</strong> Optional contact discovery hashes phone numbers to identify other users privately.</li>
                <li><strong>Support.</strong>Data shared with support is retained solely for resolving issues.</li>
                <li><strong>Data Management.</strong> Adjust privacy settings (e.g., Registration Lock PIN) via app Settings.</li>
              </ul>
                <br></br>
              <h3><strong>Information Sharing</strong></h3>
              <ul>
                <li><strong>Third Parties.</strong>Providers (e.g., verification services) follow their own policies. Third-party integrations (e.g., Spotify) are governed by their terms.</li>
                <li><strong>Legal Compliance.</strong> Data may be shared to:</li>
                    <li>- Meet legal obligations.</li>
                    <li>- Enforce Terms.</li>
                    <li>- Prevent fraud or security issues.</li>
                    <li>- Protect rights, property, or public safety.</li>
              </ul>
               <br></br>

              <h2><strong>Terms</strong></h2>
              <p>Our Terms of Service govern this Privacy Policy.</p>
              <br></br>

              <h2><strong>Parent Company</strong></h2>
              <p>2You is a product, trademark, and operating company of Subprime Platforms Inc., located at 140 S Atlantic Ave, Ormond Beach, Florida 32176.</p>
            
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
