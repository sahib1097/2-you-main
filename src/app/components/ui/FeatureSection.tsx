import React from "react";
import { Shield, Ghost, MessageSquare, Lock, Users, FileText, Instagram, Text } from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    id: 1,
    title: "Fort Knox-Level Security",
    subtitle: "End-to-End Encryption (E2EE)",
    description: "Every message, call, and reel is shielded with military-grade encryption. Backed by SOC-2 and ISO 27001 certifications, we treat your privacy like it's ours.",
    bulletPoints: ["Certified secure", "Zero third-party access", "Self-destructing options"],
    icon: Shield,
    emojis: ["✅", "✅", "✅"]
  },
  {
    id: 2,
    title: "Ghost Mode",
    subtitle: "Messages That Vanish Like Smoke",
    description: "Activate Ghost Mode to:",
    bulletPoints: ["Translucent chats (watch messages fade as they near deletion)", "Set timers (disappear in 10 seconds, 1 hour, or 1 week)", "Ephemeral media (photos/videos auto-delete after viewing)"],
    icon: Ghost,
    emojis: ["👻", "⏳", "📸"],
    additionalText: "Perfect for concert plans, surprises, or ahem spicy memes."
  },
  {
    id: 3,
    title: "Anonymous Mode",
    subtitle: "Chat Without a Trace",
    description: "No name. No sign-up. No baggage:",
    bulletPoints: ["12-digit username (your only identity)", "Zero logs (we don't track IPs, devices, or timestamps)", "No restrictions (send files, join groups, or post reels – all incognito)"],
    icon: MessageSquare,
    emojis: ["🔢", "🌫️", "🚫"],
    additionalText: "Like a digital witness protection program, but fun."
  },
  {
    id: 4,
    title: "Face-ID Gate",
    subtitle: "Biometric Vault for Your Chats",
    description: "Lock specific chats or your entire app behind FaceID:",
    bulletPoints: ["Instant lockdown after failed attempts", "Custom cooldowns (5 min, 1 hour, or 24 hours)", "Spoof-proof (blocks photos, masks, and deepfakes)"],
    icon: Lock,
    emojis: ["📱", "⏲️", "👁️"],
    additionalText: "Because even your nosy roommate shouldn't see your DMs."
  },
  {
    id: 5,
    title: "Groups That Actually Make Sense",
    subtitle: "Organized Group Chats",
    description: "Labels aren't just tags – they're superpowers. Automatically sort your:",
    bulletPoints: ["Fantasy Football League: Track scores, trash-talk, and polls in one place.", "Book Club: Schedule meetings, share highlights, and vote on next reads.", "Work Team: Split topics into #marketing, #dev, or #watercooler – no chaos, just clarity."],
    icon: Users,
    emojis: ["🏈", "📚", "💼"]
  },
  {
    id: 6,
    title: "Your Secrets Stay Secret",
    subtitle: "Failsafe Password",
    description: "Type your password to activate Panic Mode:",
    bulletPoints: ["Deleted/archived messages turn blank", "Starred chats vanish from view"],
    icon: FileText,
    emojis: ["🔒", "🔒"],
    additionalText: "Like a digital invisibility cloak for your privacy."
  },
  {
    id: 7,
    title: "Six Lives, One Account",
    subtitle: "6 Separate Profiles, Zero Hassle",
    description: "No extra numbers. No juggling apps. Switch between:",
    bulletPoints: ["Business | Dating | Gaming | Friends | Pet Parent | [Your Vibe]"],
    icon: Users,
    emojis: ["👔"],
    additionalText: "Each profile lives in its own bubble – names, settings, and chats never mix."
  },
  {
    id: 8,
    title: "Your Social Universe, Unified",
    subtitle: "All Your Socials in One Feed",
    description: "Link Instagram, TikTok, Snapchat, or Pinterest – or create 2You-exclusive reels. Share once, dazzle everywhere.",
    bulletPoints: ["Post vertical videos", "Curate stories", "Cross-app updates"],
    icon: Instagram,
    emojis: ["🎥", "📸", "🔗"]
  },
  {
    id: 9,
    title: "Chat Your Way",
    subtitle: "Text, Emojis & Backgrounds",
    description: "Your chats, your rules:",
    bulletPoints: ["Custom fonts (Comic Sans haters, begone)", "Themes & gradients (moody midnight or neon chaos)", "AI emoji mashups (create your 🥑🦄 \"Guacorn\" monstrosity)"],
    icon: Text,
    emojis: ["🎨", "🌈", "🤖"]
  }
];

const FeatureSection = () => {
  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-[#682221]">
          Exclusive Features
        </h2>
        <div className="space-y-28 md:space-y-40">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
