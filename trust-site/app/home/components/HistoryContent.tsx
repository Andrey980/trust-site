'use client';
// import Image from 'next/image';

export default function HistoryContent() {
  return (
    <section className="w-full bg-[#50A3C5] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Lado esquerdo - Imagem */}
          <div className="relative w-full h-full aspect-video rounded-lg overflow-hidden shadow-xl">
            {/* <Image
              src="/img/trust-building.jpg"
              alt="Prédio da Trust"
              fill
              className="object-cover"
              priority
            /> */}
            {/* Overlay com o ano */}
            <div className="absolute bottom-0 right-0 bg-black/80 px-6 py-3">
              <span className="text-white text-xl font-bold">1975</span>
            </div>
          </div>

          {/* Lado direito - Texto */}
          <div className="text-white space-y-4">
            <div>
              <h2 className="text-xl font-medium mb-4 tracking-wider">Quem somos</h2>
              <p className="text-base leading-relaxed text-justify">
                Somos uma corretora de seguros que entende o valor da segurança em todas as etapas
                da vida e dos negócios. Atuamos com foco em garantias locatícias, seguros
                patrimoniais e soluções personalizadas tanto para empresas em expansão quanto
                para pessoas físicas que buscam proteger o que mais importa.  <span className="text-base leading-relaxed italic">
              Transformando a contratação de seguros e garantias em uma experiência simples,
              transparente e eficaz — assegurando a efetivação de negócios, a saúde empresarial
              e a proteção individual.
            </span>
              </p>
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-medium mb-4 tracking-wider">
                Nosso Propósito
              </h3>
              <p className="text-base leading-relaxed mb-4 font-medium">
                Conectar pessoas e empresas com soluções inteligentes em seguros.  <span className="text-base font-normal leading-relaxed">
                Garantimos tranquilidade, confiança e crescimento seguro por meio de uma
                atuação ética, ágil e estratégica. </span>
              </p>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
