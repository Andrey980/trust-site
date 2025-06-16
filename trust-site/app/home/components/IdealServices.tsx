'use client';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'PLANO DE SAÚDE',
    image: '/img/plano-de-saude.png9',
    href: '/planos-de-saude',
  },
  {
    title: 'AUTOMÓVEL',
    image: '/img/automovel.png',
    href: '/automovel',
  },
  {
    title: 'RESIDENCIAL',
    image: '/img/residencial.png',
    href: '/residencial',
  },
  {
    title: 'CONDOMÍNIO',
    image: '/img/condominio.png',
    href: '/condominio',
  },
];

const IdealServices = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <h2 className="text-center text-3xl font-light text-[#1082a6] mb-12">
          IDEAL PARA VOCÊ
        </h2>

        {/* Grid de serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link 
              key={service.title} 
              href={service.href}
              className="group relative block overflow-hidden h-[200px]"
            >
              {/* Imagem de fundo */}
              <div className="absolute inset-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay escuro */}
                <div className="absolute inset-0 bg-black/50" />
              </div>

              {/* Título e setas */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 className="text-white text-2xl font-bold mb-6 text-center">
                  {service.title}
                </h3>
                {/* Setas decorativas */}
                <div className="flex gap-2">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 border-t-2 border-r-2 border-white transform rotate-45 group-hover:translate-x-2 transition-transform"
                    />
                  ))}
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
