'use client';
import Image from 'next/image';

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface BenefitsSectionProps {
  benefits: Benefit[];
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ benefits }) => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Benefícios Exclusivos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas de garantias com vantagens que 
            fazem a diferença para sua segurança e tranquilidade.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#1082a6]/10 flex items-center justify-center mr-4">
                  <Image 
                    src={benefit.icon} 
                    alt={benefit.title} 
                    width={24} 
                    height={24} 
                    className="w-6 h-6"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{benefit.title}</h3>
              </div>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
