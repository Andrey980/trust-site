'use client';

interface CtaSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

const CtaSection: React.FC<CtaSectionProps> = ({ title, subtitle, buttonText }) => {
  return (
    <div className="bg-[#1082a6] py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{title}</h2>
        <p className="text-white/90 font-light max-w-2xl mx-auto mb-8">{subtitle}</p>
        <button className="bg-white text-[#1082a6] cursor-pointer px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-300">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default CtaSection;