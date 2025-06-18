'use client';
import Image from 'next/image';

interface ServiceInfoProps {
  serviceId: string;
  title: string;
  description: string;
  features: string[];
  coverages: string[];
  imageUrl?: string;
}

const ServiceInfo: React.FC<ServiceInfoProps> = ({
  serviceId,
  title,
  description,
  features,
  coverages,
  imageUrl
}) => {
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
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">O Que Está Coberto:</h3>
              <ul className="space-y-2">
                {coverages.map((coverage, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-[#1082a6] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">{coverage}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8">
              <button className="bg-[#1082a6] hover:bg-[#1082c9] cursor-pointer text-white px-6 py-3 rounded font-medium transition-all duration-300">
                Solicitar Cotação
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2">
            {imageUrl ? (
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src={imageUrl}
                  alt={title}
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover"
                />
              </div>
            ) : (
              <div className="rounded-lg overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center" style={{ minHeight: '400px' }}>
                <div className="text-gray-400 text-center p-8">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <p>{title}</p>
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
