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
            Terms of Service
            </h1>

            {/* Dates */}
            <div className="text-sm text-neutral-500 mb-8 text-left">
              Effective Date: May 19, 2025<br />
              Last Updated: May 19, 2025
            </div>

            {/* Content */}
            <div className="prose prose-lg text-gray-800">
              <p>
                2You is engineered to never collect or retain sensitive data. Messages, calls, and interactions on 2You are secured by end-to-end encryption, ensuring they remain private and inaccessible to us or third parties. Review our Terms of Service and Privacy Policy below.
              </p>
              <br></br>

              {/* <h2><strong>Terms of Service:</strong></h2>
              <p>
                <strong>Subprime Platforms Inc. (“2You”, “we”, “us”, or “our”)</strong>, a company headquartered at <strong>140 S Atlantic Ave, Ormond Beach, Florida 32176</strong>, employs cutting‑edge security and end‑to‑end encryption to deliver private messaging, calling, and related services globally under the <strong>2You</strong> trademark. By installing or using our apps, services, or website (collectively, “Services”), you agree to these Terms of Service (“Terms”).
              </p> */}
                <br></br>
              <h3><strong>About Our Services</strong></h3>
              <ul>
                <li><strong>Minimum Age.</strong> You must be at least 13 years old to use our Services. Your country may require a higher minimum age for unsupervised use.</li>
                <li><strong>Account Registration.</strong> To create an account, you must provide a valid phone number. You consent to receive verification codes via text or call to activate your account.</li>
                <li><strong>Privacy Commitment.</strong> 2You never sells, rents, or monetizes your personal data or content.</li>
                <li>By using our Services, you consent to the data practices outlined in this policy, including end‑to‑end encrypted data transfer and minimal metadata processing.</li>
                <li><strong>Software Updates.</strong> You agree to install updates to maintain functionality and security.</li>
                <li><strong>Fees and Taxes.</strong> You are responsible for any carrier fees, data costs, or taxes related to your device usage.</li>
              </ul>
                <br></br>
              <h3><strong>Using 2YOU</strong></h3>
              <ul>
                <li><strong>Compliance.</strong> Use our Services in accordance with these Terms and policies. Banned accounts may not be recreated without permission.</li>
                <li><strong>Legal Use.</strong> Use our Services only for lawful purposes. Prohibited activities include:</li>
                    <li>- Violating rights (e.g., privacy, intellectual property).</li>
                    <li>- Sending unauthorized bulk/automated messages.</li>
                <li><strong>Protecting 2YOU</strong> Do not:</li>
                    <li>- Access or modify our Services unlawfully.</li>
                    <li>- Disrupt service integrity or performance.</li>
                    <li>- Create accounts via automated means.</li>
                    <li>- Exploit user data without authorization.</li>
                    <li>- Resell or charge for our Services.</li>
                <li><strong>Account Security. </strong>2You cannot access your messages. Secure your device and account. If your phone is lost, follow steps on our Support site to re-register; old devices will cease receiving messages.</li>
                <li><strong>Emergency Services</strong> 2You does not connect to emergency services. Ensure alternative access to police, fire, or medical aid.</li>
                <li><strong>Third-Party Services.</strong> Third-party integrations (e.g., Giphy, YouTube) are governed by their own terms and policies.</li>
              </ul>
               <br></br>

              <h3><strong>Your Rights and Licenses</strong></h3>
              <ul>
                <li><strong>Your Rights.</strong> You own information shared through our Services. You must own or have rights to the phone number used for registration.</li>
                <li><strong>2You’s Rights.</strong> Subprime Platforms Inc. retains all intellectual property rights (copyrights, trademarks, patents, etc.) associated with 2You. Unauthorized use of our assets is prohibited. Report infringement to abuse@2you.chat.</li>
                <li><strong>License.</strong>2You grants you a limited, non-exclusive, revocable license to use our Services per these Terms.</li>
              </ul>
              <br></br>

              <h3><strong>Disclaimers and Limitations:</strong></h3>
              <ul>
                <li><strong>Disclaimers.</strong> SERVICES ARE PROVIDED “AS IS” WITHOUT WARRANTIES OF MERCHANTABILITY, FITNESS, OR NON-INFRINGEMENT. 2YOU DOES NOT GUARANTEE ERROR-FREE, UNINTERRUPTED, OR SECURE FUNCTIONALITY. WE ARE NOT RESPONSIBLE FOR USER ACTIONS OR CONTENT. YOU RELEASE 2YOU PARTIES (AFFILIATES, DIRECTORS, EMPLOYEES, ETC.) FROM CLAIMS ARISING FROM SERVICE USE OR THIRD-PARTY INTERACTIONS.</li>
                <li><strong>Liability Limit.</strong> 2YOU PARTIES ARE NOT LIABLE FOR INDIRECT, CONSEQUENTIAL, OR PUNITIVE DAMAGES. AGGREGATE LIABILITY CAPS AT $100. SOME JURISDICTIONS MAY NOT PERMIT LIMITATIONS; LIABILITY WILL BE LIMITED TO THE EXTENT LEGALLY ALLOWED.</li>
                <li><strong>Service Availability.</strong>Services may be interrupted for maintenance, outages, or upgrades. Features or device support may be discontinued.</li>
              </ul>
              <br></br>

              <h3><strong>Resolving Disputes and Termination</strong></h3>
              <ul>
                <li><strong>Disclaimers.</strong> SERVICES ARE PROVIDED “AS IS” WITHOUT WARRANTIES OF MERCHANTABILITY, FITNESS, OR NON-INFRINGEMENT. 2YOU DOES NOT GUARANTEE ERROR-FREE, UNINTERRUPTED, OR SECURE FUNCTIONALITY. WE ARE NOT RESPONSIBLE FOR USER ACTIONS OR CONTENT. YOU RELEASE 2YOU PARTIES (AFFILIATES, DIRECTORS, EMPLOYEES, ETC.) FROM CLAIMS ARISING FROM SERVICE USE OR THIRD-PARTY INTERACTIONS.</li>
                <li><strong>Liability Limit.</strong> 2YOU PARTIES ARE NOT LIABLE FOR INDIRECT, CONSEQUENTIAL, OR PUNITIVE DAMAGES. AGGREGATE LIABILITY CAPS AT $100. SOME JURISDICTIONS MAY NOT PERMIT LIMITATIONS; LIABILITY WILL BE LIMITED TO THE EXTENT LEGALLY ALLOWED.</li>
                <li><strong>Service Availability.</strong>Services may be interrupted for maintenance, outages, or upgrades. Features or device support may be discontinued.</li>
              </ul>
              <br></br>

              <h2><strong>General</strong></h2>
              <p>2You is a product, trademark, and operating company of <strong>Subprime Platforms Inc.</strong>, located at <strong>140 S Atlantic Ave, Ormond Beach, Florida 32176.</strong> 
              We may update these Terms. The policy was created on May 1, 2025; the Last Updated date reflects current changes. Continued use confirms acceptance. Comply with export/trade laws. 
              These Terms form the entire agreement. Contact privacy@2you.chat with questions.</p>
            
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
