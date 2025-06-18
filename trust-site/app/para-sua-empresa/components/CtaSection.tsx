'use client';

interface CtaSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

const CtaSection: React.FC<CtaSectionProps> = ({ title, subtitle, buttonText }) => {
  return (
    <div className="py-16 bg-[#1082a6]">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            {subtitle}
          </p>
          <button className="bg-white text-[#1082a6] hover:bg-gray-100 px-8 py-3 rounded font-semibold shadow-lg transition-all duration-300">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
