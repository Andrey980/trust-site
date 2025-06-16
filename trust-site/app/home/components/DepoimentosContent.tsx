'use client';
import { useState, useEffect } from 'react';

const depoimentos = [
  {
    id: 1,
    texto: "A melhor escolha que fiz foi contratar o seguro da Trust. Além dos preços acessíveis, o suporte é excelente! Sempre que precisei, fui atendida com rapidez e profissionalismo.",
    autor: "Carla S."
  },
  {
    id: 2,
    texto: "Atendimento excepcional e coberturas que realmente atendem às minhas necessidades. A Trust faz a diferença quando precisamos de suporte.",
    autor: "Ricardo M."
  },
  {
    id: 3,
    texto: "Estou há mais de 10 anos com a Trust e nunca tive problemas. O atendimento é sempre ágil e as cotações são muito competitivas.",
    autor: "Paulo R."
  },
  {
    id: 4,
    texto: "A Trust superou minhas expectativas. Profissionais muito preparados e um atendimento verdadeiramente humanizado.",
    autor: "Amanda L."
  },
  {
    id: 5,
    texto: "Recomendo a Trust para todos que buscam uma seguradora séria e comprometida. Resolução rápida e eficiente em todas as situações.",
    autor: "Marcelo C."
  }
];

export default function DepoimentosContent() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % depoimentos.length);
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-light text-[#50A3C5] mb-12">
          Depoimentos
        </h2>

        <div className="mb-8">
          <h3 className="text-[#50A3C5] text-xl italic mb-8">
            A Trust Corretora é confiável?
          </h3>

          <p className="text-gray-700 mb-12 max-w-3xl mx-auto">
            Com mais de 50 anos de experiência no mercado, nos dedicamos a oferecer as melhores soluções para nossos clientes. Nosso 
            compromisso é proporcionar um atendimento ágil e personalizado, sempre com foco nas necessidades de cada um. Assim, conquistamos 
            a confiança e a preferência de nossos clientes, dia após dia.
          </p>
        </div>        {/* Carousel de depoimentos */}
        <div className="relative min-h-[200px]">
          {depoimentos.map((depoimento, index) => (
            <div
              key={depoimento.id}
              className={`absolute w-full transition-opacity duration-1000 ease-in-out
                ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
              style={{ transform: index === currentSlide ? 'none' : 'translateX(100px)' }}
            >
              <div className="bg-white rounded-lg shadow-md p-8 mx-auto max-w-2xl">
                <blockquote className="italic text-gray-600 text-lg mb-4">
                  &ldquo;{depoimento.texto}&rdquo;
                </blockquote>
                <p className="text-[#50A3C5] font-semibold">
                  {depoimento.autor}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Indicadores do carousel */}
        <div className="flex justify-center gap-2 mt-8">
          {depoimentos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 
                ${index === currentSlide 
                  ? 'bg-[#50A3C5] w-4' 
                  : 'bg-gray-300 hover:bg-gray-400'}`}
              aria-label={`Ir para depoimento ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
