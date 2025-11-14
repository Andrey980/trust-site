'use client';
// import Image from 'next/image';

interface ServiceInfoProps {
  serviceId: string;
  title: string;
  description: string;
  features: string[];
  imageUrl?: string;
  ctaLink?: string;
}

const ServiceInfo: React.FC<ServiceInfoProps> = ({
  serviceId,
  title,
  description,
  features,
  // imageUrl
  ctaLink = '/atendimento'
}) => {
  const showSteps = title == "Seguro Fiança";


  return (
    <div id={serviceId} className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{title}</h2>
            <p className="text-gray-600 mb-6">{description}</p>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Principais Características:</h3>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-[#1082a6] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            

              {showSteps && (
                  <div className="mt-16">
                    <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Passo a Passo para Contratação</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      
                    </div>
                  </div>
                )}
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ServiceInfo;


