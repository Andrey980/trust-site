'use client';
import { useState, useEffect } from 'react';

interface SlideContent {
  id: number;
  type: 'full-image' | 'content';
  bgImage: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  overlay?: boolean;
  imagePosition?: string;
  className?: string;
  contentPosition?: 'left' | 'center' | 'right';
}

const slides: SlideContent[] = [
  {
    id: 1,
    type: 'full-image',
    bgImage: '/img/hero.png',
    imagePosition: 'center',
    overlay: false,
  },
  {
    id: 2,
    type: 'content',
    bgImage: '/img/hero-home.png',
    title: 'Sua família protegida em todos os momentos',
    subtitle: 'Seguro Residencial',
    buttonText: 'FAZER COTAÇÃO',
    buttonLink: '#',
    overlay: true,
    contentPosition: 'center',
    className: 'bg-gradient-to-t from-black/80 via-black/60 to-black/80'
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

  const renderSlideContent = (slide: SlideContent) => {
    return (
      <div
        key={slide.id}
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
          ${currentSlide === slides.findIndex(s => s.id === slide.id) ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${slide.bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: slide.imagePosition || '50% 35%',
            backgroundRepeat: 'no-repeat',
          }}
        />
        
        {/* Optional Overlay */}
        {slide.overlay && (
          <div className={`absolute inset-0 ${slide.className || 'bg-black/50'}`} />
        )}
        
        {/* Conditional Content Based on Slide Type */}
        {slide.type === 'content' && (
          <div className="relative h-full">
            <div className={`container mx-auto px-4 h-full flex items-center ${
              slide.contentPosition === 'left' ? 'justify-start' :
              slide.contentPosition === 'right' ? 'justify-end' :
              'justify-center'
            }`}>
              <div className="text-white text-center w-full max-w-3xl px-4 sm:px-6 md:px-8">
                {slide.title && (
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-shadow-lg">
                    {slide.title}
                  </h1>
                )}
                {slide.subtitle && (
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8 text-shadow">
                    {slide.subtitle}
                  </p>
                )}
                {slide.buttonText && (
                  <a
                    href={slide.buttonLink || '#'}
                    className="inline-block bg-[#1082a6] hover:bg-[#1082c9] text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded text-sm sm:text-base font-semibold transition-all duration-300 uppercase tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    {slide.buttonText}
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="relative w-full h-[calc(100vh-72px)] min-h-[350px] sm:min-h-[400px] md:min-h-[450px] overflow-hidden">
      {slides.map((slide) => renderSlideContent(slide))}

      {/* Navigation Dots */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full transition-all duration-300 
              ${index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrow Navigation - Hidden on mobile */}
      <div className="hidden sm:block">
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white/75 hover:text-white p-2 text-3xl sm:text-4xl transition-colors"
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white/75 hover:text-white p-2 text-3xl sm:text-4xl transition-colors"
          aria-label="Next slide"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default HeroContent;