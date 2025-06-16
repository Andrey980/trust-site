'use client';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'TITULO DE CAPITALIZAÇÃO',
    icon: '/img/services/moedas.svg',
    description: 'Garantia para locação de imóveis',
    href: '/titulo-capitalizacao',
    bgColor: 'bg-[#1082a6]',
  },
  {
    title: 'SEGURO FIANÇA',
    icon: '/img/services/fianca.svg',
    description: 'Garantia para locação de imóveis',
    href: '/seguro-fianca',
    bgColor: 'bg-[#0c6a87]',
  },
  {
    title: 'SEGURO INCÊNDIO',
    icon: '/img/services/flame-depth.svg',
    description: 'Proteção completa para seu patrimônio',
    href: '/seguro-incendio',
    bgColor: 'bg-[#085269]',
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
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={40}
                      height={40}
                      className="text-white"
                    />
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
