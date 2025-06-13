'use client';
import { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    title: 'Seu carro e você protegidos!',
    subtitle: 'Seguro Automóvel',
    bgImage: '/img/hero-car.png',
    buttonText: 'INICIAR COTAÇÃO'
  },
  {
    id: 2,
    title: 'Sua família protegida em todos os momentos',
    subtitle: 'Seguro Residencial',
    bgImage: '/img/hero-home.jpg',
    buttonText: 'FAZER COTAÇÃO'
  }
];

const HeroContent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-[450px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
            ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Imagem de fundo com posicionamento correto */}          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${slide.bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: '50% 35%',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed',
            }}
          />
          
          {/* Overlay escuro em gradiente para melhor legibilidade */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/80" />
          
          {/* Conteúdo do slide */}
          <div className="relative h-full">
            <div className="container mx-auto px-4 h-full flex items-center justify-center">
              <div className="text-white text-center max-w-3xl">
                <h1 className="text-2xl md:text-3xl font-bold mb-3 text-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-6 text-shadow">
                  {slide.subtitle}
                </p>
                <button className="bg-[#1082a6] hover:bg-[#1082c9] cursor-pointer text-white px-6 py-2 rounded font-semibold transition-colors text-base uppercase tracking-wide">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navegação do carousel */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 
              ${index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Botões de navegação lateral */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 text-2xl opacity-75 hover:opacity-100"
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 text-2xl opacity-75 hover:opacity-100"
        aria-label="Next slide"
      >
        ›
      </button>
    </div>
  );
};

export default HeroContent;