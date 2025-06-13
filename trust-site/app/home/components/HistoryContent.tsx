'use client';
import Image from 'next/image';

export default function HistoryContent() {
  return (
    <section className="w-full bg-[#50A3C5] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Lado esquerdo - Imagem */}
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/img/trust-building.jpg"
              alt="Prédio da Trust"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay com o ano */}
            <div className="absolute bottom-0 right-0 bg-black/80 px-6 py-3">
              <span className="text-white text-3xl font-bold">1975</span>
            </div>
          </div>

          {/* Lado direito - Texto */}
          <div className="text-white">
            <h2 className="text-4xl font-light mb-6">A Trust</h2>
            <p className="mb-6 text-lg">
              Fundada em 1975, a Trust Corretora de Seguros é hoje uma das mais
              tradicionais corretoras de capital nacional e responsável por mais de um terço dos
              seguros condominiais na cidade de São Paulo.
            </p>
            <p className="text-lg">
              Oferece seguros e serviços em diferentes segmentos do setor, entre eles: Vida,
              Saúde, Condomínio, Automóvel, Residencial, Fiança Locatícia, Empresarial,
              Previdência, Riscos de Engenharia, entre outros.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
