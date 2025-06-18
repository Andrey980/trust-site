'use client';
import Image from 'next/image';

interface HeroBannerProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ 
  title, 
  subtitle, 
  backgroundImage 
}) => {
  return (
    <div className="relative h-[400px] md:h-[500px] overflow-hidden">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative h-full container mx-auto px-4">
        <div className="flex flex-col justify-center h-full max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{title}</h1>
          <p className="text-lg md:text-xl text-white font-light">{subtitle}</p>
          
          <div className="mt-8">
            <button className="bg-[#1082a6] hover:bg-[#1082c9] cursor-pointer text-white px-6 py-3 rounded font-semibold transition-all duration-200 uppercase tracking-wide shadow-md">
              Fazer Cotação
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
