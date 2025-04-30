
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <HelpCircle className="w-8 h-8 text-red-500" />
          <h2 className="text-4xl md:text-6xl font-bold text-left">
            Need some answers<span className="text-red-500">?</span>
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border-none bg-zinc-900/50 rounded-lg px-6">
              <AccordionTrigger className="text-center text-lg hover:text-red-500 transition-colors">
                How does 2You's end-to-end encryption work?
              </AccordionTrigger>
              <AccordionContent className="text-white/90">
                Every message, call, and file is encrypted on your device and can only be decrypted by the intended recipient. Not even 2You can access your data.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-none bg-zinc-900/50 rounded-lg px-6">
              <AccordionTrigger className="text-center text-lg hover:text-red-500 transition-colors">
                What happens when I enable the Failsafe Password?
              </AccordionTrigger>
              <AccordionContent className="text-white/90">
                Deleted or archived messages appear blank to anyone without the password. You can also select specific conversations to hide entirely.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-none bg-zinc-900/50 rounded-lg px-6">
              <AccordionTrigger className="text-center text-lg hover:text-red-500 transition-colors">
                What does Safe Mode protect?
              </AccordionTrigger>
              <AccordionContent className="text-white/90">
                It enforces FaceID authentication, blanks marked/archived/deleted chats, and disables screenshots for maximum privacy.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-none bg-zinc-900/50 rounded-lg px-6">
              <AccordionTrigger className="text-center text-lg hover:text-red-500 transition-colors">
                How does Anonymous Browsing keep me untraceable?
              </AccordionTrigger>
              <AccordionContent className="text-white/90">
                You're assigned a random 12-digit token (e.g., 2You#X5K9-P3L2), auto-connected to a VPN, and messages vanish after 30 seconds—permanently. There is no need to sign-up or provide even basic details such as your name.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-none bg-zinc-900/50 rounded-lg px-6">
              <AccordionTrigger className="text-center text-lg hover:text-red-500 transition-colors">
                Can I customize how long photos/videos last?
              </AccordionTrigger>
              <AccordionContent className="text-white/90">
                Yes. Set timers from 1 second to 24 hours. Media isn't saved locally or to the cloud—it's erased completely after viewing.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border-none bg-zinc-900/50 rounded-lg px-6">
              <AccordionTrigger className="text-center text-lg hover:text-red-500 transition-colors">
                How do the 6 separate accounts work?
              </AccordionTrigger>
              <AccordionContent className="text-white/90">
                Personal, Business, and other profiles operate independently. No links, no shared data—just isolated, secure spaces.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border-none bg-zinc-900/50 rounded-lg px-6">
              <AccordionTrigger className="text-center text-lg hover:text-red-500 transition-colors">
                Why use token names instead of usernames?
              </AccordionTrigger>
              <AccordionContent className="text-white/90">
                Your 12-digit token (e.g., 2You#B8R4-M1N6) can't be tied to your identity, email, or phone number. No sign-up = no trail.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border-none bg-zinc-900/50 rounded-lg px-6">
              <AccordionTrigger className="text-center text-lg hover:text-red-500 transition-colors">
                Can I enable a VPN for specific conversations?
              </AccordionTrigger>
              <AccordionContent className="text-white/90">
                Yes. Toggle VPN protection per chat to encrypt traffic and mask your IP address.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="border-none bg-zinc-900/50 rounded-lg px-6">
              <AccordionTrigger className="text-center text-lg hover:text-red-500 transition-colors">
                Are my cloud backups encrypted?
              </AccordionTrigger>
              <AccordionContent className="text-white/90">
                Absolutely. Backups to iCloud/Google Drive use 2You's end-to-end encryption—only you hold the keys.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="border-none bg-zinc-900/50 rounded-lg px-6">
              <AccordionTrigger className="text-center text-lg hover:text-red-500 transition-colors">
                Can I hide my "Last Seen" or online status?
              </AccordionTrigger>
              <AccordionContent className="text-white/90">
                Yes. Toggle visibility for your activity status anytime—go fully incognito.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

