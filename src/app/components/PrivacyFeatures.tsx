
// Replacing large feature sections by focused components, moving each to /privacy subfolder

import { useState } from "react";
import EndToEndEncryptionSection from "./privacy/EndToEndEncryptionSection";
import DisappearingMediaSection from "./privacy/DisappearingMediaSection";
import SafeModeProtectionSection from "./privacy/SafeModeProtectionSection";
import FailsafePasswordSection from "./privacy/FailsafePasswordSection";
import FaceIDGateSection from "./privacy/FaceIDGateSection";
import VPNEnabledChatsSection from "./privacy/VPNEnabledChatsSection";

export const useSafeMode = () => {
  const [safeMode, setSafeMode] = useState(false);
  return { safeMode, setSafeMode };
};

const PrivacyFeatures = () => {
  const { safeMode, setSafeMode } = useSafeMode();

  return (
    <section className="py-20 bg-black relative">
      <div className="container mx-auto px-4 space-y-32">
        <EndToEndEncryptionSection />
        <DisappearingMediaSection />
        <SafeModeProtectionSection safeMode={safeMode} setSafeMode={setSafeMode} />
        <FailsafePasswordSection />
        <FaceIDGateSection />
        <VPNEnabledChatsSection />
      </div>
    </section>
  );
};

export default PrivacyFeatures;
