import React from "react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

type FeatureProps = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  bulletPoints: string[];
  icon: LucideIcon;
  additionalText?: string;
  emojis?: string[];
  imageSrc: string; 
};

type FeatureCardProps = {
  feature: FeatureProps;
  isReversed: boolean;
};

const FeatureCard = ({ feature, isReversed }: FeatureCardProps) => {
  return (
    <motion.div
      className={`flex flex-col ${
        isReversed ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-8 md:gap-16`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}      // <— reset on leave
      transition={{ duration: 0.6 }}
    >
      {/* Content Side */}
      <div className="w-full md:w-1/2 space-y-5">
        <h3 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
          {feature.title}
        </h3>
        <p className="text-xl font-medium text-[#484848]">
          {feature.subtitle}
        </p>
        <p className="text-lg text-gray-700">{feature.description}</p>
        <ul className="space-y-2">
          {feature.bulletPoints.map((point, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 transform hover:translate-x-2 transition-transform duration-300"
            >
              <span className="text-brandRed mt-1">
                {feature.emojis?.[idx] ?? "✅"}
              </span>
              <span className="text-gray-700">{point}</span>
            </li>
          ))}
        </ul>
        {feature.additionalText && (
          <p className="text-base italic text-gray-700">
            {feature.additionalText}
          </p>
        )}
      </div>

      {/* Image Side */}
       <div className="w-full md:w-1/2 h-90 md:h-64 lg:h-90 rounded-xl transform transition-all duration-500 hover:scale-105">
         <img
           src={feature.imageSrc}
           alt={feature.title}
           className="w-full h-full object-contain"
         />
       </div>
    </motion.div>
  );
};

export default FeatureCard;
