'use client';
import Image from 'next/image';

const seguradoras = [
  // Primeira linha
  {
    nome: "Porto Seguro",
    logo: "/img/seguradoras/porto.png"
  },
  {
    nome: "Tokio Marine",
    logo: "/img/seguradoras/tokio.png"
  },
  {
    nome: "Azul Seguros",
    logo: "/img/seguradoras/azul.png"
  },
  {
    nome: "Icatu",
    logo: "/img/seguradoras/icatu.png"
  },
  // Segunda linha
  {
    nome: "Mapfre",
    logo: "/img/seguradoras/mapfre.png"
  },
  {
    nome: "SulAmérica",
    logo: "/img/seguradoras/sulamerica.png"
  },
  {
    nome: "Bradesco Seguros",
    logo: "/img/seguradoras/bradesco.png"
  },
  {
    nome: "MSIG",
    logo: "/img/seguradoras/msig.png"
  },

  // Terceira linha
  {
    nome: "HDI Seguros",
    logo: "/img/seguradoras/hdi.png"
  },
  {
    nome: "Zurich",
    logo: "/img/seguradoras/zurich.png"
  }
];

export default function SeguradorasContent() {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-light text-center text-[#000] mb-16">
          Trabalhamos com as principais seguradoras
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-1 justify-items-center place-items-center mx-auto max-w-4xl">
          {seguradoras.map((seguradora) => (
            <div 
              key={seguradora.nome} 
              className="flex w-full items-center justify-center p-4 hover:opacity-80 transition-opacity"
            >
              <div className="relative w-full h-24">
                <Image
                  src={seguradora.logo}
                  alt={`Logo ${seguradora.nome}`}
                  fill
                  style={{ objectFit: "contain" }}
                  className="transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
