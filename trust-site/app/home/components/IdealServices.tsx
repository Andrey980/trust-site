'use client';
import Link from 'next/link';

const services = [
  {
    title: 'TITULO DE CAPITALIZAÇÃO',
    icon: (
      <svg className="w-10 h-10 text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    description: 'Garantia para locação de imóveis',
    href: '/garantias#titulo-capitalizacao',
    bgColor: 'bg-[#1082a6]',
    isExternal: false,
  },
  {
    title: 'SEGURO FIANÇA',
    icon: (
      <svg className="w-10 h-10 text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    description: 'Garantia para locação de imóveis',
    href: '/garantias#seguro-fianca',
    bgColor: 'bg-[#0c6a87]',
    isExternal: false,
  },
  {
    title: 'SEGURO INCÊNDIO',
    icon: (
      <svg className="w-10 h-10 text-gray-100" viewBox="0 0 92.27 122.88" fill="currentColor">
        <path d="M18.61,54.89C15.7,28.8,30.94,10.45,59.52,0C42.02,22.71,74.44,47.31,76.23,70.89 c4.19-7.15,6.57-16.69,7.04-29.45c21.43,33.62,3.66,88.57-43.5,80.67c-4.33-0.72-8.5-2.09-12.3-4.13C10.27,108.8,0,88.79,0,69.68 C0,57.5,5.21,46.63,11.95,37.99C12.85,46.45,14.77,52.76,18.61,54.89L18.61,54.89z"/>
        <path fill="rgba(16, 130, 166, 1)" d="M33.87,92.58c-4.86-12.55-4.19-32.82,9.42-39.93c0.1,23.3,23.05,26.27,18.8,51.14 c3.92-4.44,5.9-11.54,6.25-17.15c6.22,14.24,1.34,25.63-7.53,31.43c-26.97,17.64-50.19-18.12-34.75-37.72 C26.53,84.73,31.89,91.49,33.87,92.58L33.87,92.58z"/>
      </svg>
    ),
    description: 'Proteção completa para seu patrimônio',
    href: '/para-sua-empresa#seguro-empresarial',
    bgColor: 'bg-[#085269]',
    isExternal: false,
  },
];

const IdealServices = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <h2 className="text-center text-3xl font-light text-[#1082a6] mb-12 uppercase">
          principais produtos
        </h2>

        {/* Grid de serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className={`group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${service.bgColor}`}
            >
              <div className="p-8">
                {/* Ícone */}
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="text-center">
                  <h3 className="text-white text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-6">
                    {service.description}
                  </p>

                  {/* Seta indicativa */}
                  <div className="flex justify-center">
                    <div className="w-8 h-8 border-t-2 border-r-2 border-white/60 transform rotate-45 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IdealServices;
