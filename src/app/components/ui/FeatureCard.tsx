import type { LucideIcon } from "lucide-react";

type FeatureProps = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  bulletPoints: string[];
  icon: LucideIcon;
  additionalText?: string;
  emojis?: string[];
};

type FeatureCardProps = {
  feature: FeatureProps;
  isReversed: boolean;
};

const FeatureCard = ({ feature, isReversed }: FeatureCardProps) => {
  return (
    <div
      className={`flex flex-col ${
        isReversed ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-8 md:gap-16`}
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
          {feature.bulletPoints.map((point, index) => (
            <li 
              key={index} 
              className="flex items-start gap-2 transform hover:translate-x-2 transition-transform duration-300"
            >
              <span className="text-brandRed mt-1">
                {feature.emojis && feature.emojis[index] 
                  ? feature.emojis[index] 
                  : "✅"}
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

      {/* Image Side - Left empty for client's images */}
      <div className="w-full md:w-1/2 h-[300px] rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105">
        <div className={`w-full h-full ${isReversed ? "feature-card-gradient" : "feature-card-gradient-alt"} flex items-center justify-center`}>
          <p className="text-lg font-medium text-gray-500">Your image goes here</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
