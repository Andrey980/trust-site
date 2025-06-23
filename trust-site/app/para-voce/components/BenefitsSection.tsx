'use client';
import Image from 'next/image';

interface BenefitProps {
  icon: string;
  title: string;
  description: string;
}

interface BenefitsSectionProps {
  benefits: BenefitProps[];
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ benefits }) => {
  return (
    <div className="bg-gray-200 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Por Que Escolher Nossos Seguros</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos as melhores soluções em proteção e segurança para você e sua família, com atendimento personalizado e coberturas abrangentes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-[#1082a6]/10 flex items-center justify-center mb-4 mx-auto">
                <Image 
                  src={benefit.icon}
                  alt={benefit.title}
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{benefit.title}</h3>
              <p className="text-gray-600 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;