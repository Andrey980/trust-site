import Footer from '../components/Footer';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';
import WhatsappButton from '../components/WhatsappButton';
import Image from 'next/image';

export default function ParceiroPage() {
  return (
    <main className="pt-[72px]">
      <Header />
      
      {/* Fundo para o banner - ajustado */}
      <div className="w-full bg-white py-16">
        {/* Container com margin para o banner */}
        <div className="container mx-auto px-4">
          {/* Banner com imagem de fundo */}
          <section className="relative bg-transparent text-white overflow-hidden rounded-lg shadow-lg">
            {/* Sobreposição de imagem com opacidade */}
            <div className="absolute inset-0">
              <Image 
                src="/img/parceria-2.png" 
                alt="Fundo do banner" 
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#1082a6] opacity-70"></div>
            </div>
            
            {/* Elemento laranja decorativo no canto superior esquerdo */}
            <div className="absolute top-0 left-0 w-24 h-24 md:w-32 md:h-32 bg-[#ff6b35] rounded-br-full z-10"></div>
            
            {/* Decoração com círculos */}
            <div className="absolute bottom-6 left-6 flex space-x-3 z-10">
              <div className="w-4 h-4 bg-white opacity-70 rounded-full"></div>
              <div className="w-4 h-4 bg-white opacity-70 rounded-full"></div>
              <div className="w-4 h-4 bg-white opacity-70 rounded-full"></div>
              <div className="w-4 h-4 bg-white opacity-70 rounded-full"></div>
              <div className="w-4 h-4 bg-white opacity-70 rounded-full"></div>
            </div>
            
            {/* Elemento decorativo no canto superior direito */}
            <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-[#1c3d5a] opacity-80 rounded-bl-full z-10"></div>
            
            <div className="container mx-auto px-4 py-24 relative z-20">
              <h1 className="text-4xl md:text-5xl font-bold text-center text-white">
                Seja Nosso Parceiro
              </h1>
            </div>
          </section>
        </div>
      </div>
      
      {/* Conteúdo principal - Introdução */}
      <section className="py-1 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-8">
             A Trust oferece suporte exclusivo para profissionais e empresas do 
             mercado imobiliario. Conte com nossa estrutura, soluções avançadas 
             e suporte completo para potencializar seus resultados!
            </p>
          </div>
        </div>
      </section>

      {/* Submenu de navegação - cores corrigidas */}
      <section className="py-8 bg-gray-100 shadow-lg relative overflow-hidden">
        {/* Efeitos decorativos de fundo - versão profissional */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradiente sutil de profundidade */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-150 opacity-30"></div>
          
          {/* Linhas geométricas profissionais */}
          <svg className="absolute top-0 left-0 w-full h-full opacity-5" viewBox="0 0 1200 100">
            <defs>
              <pattern id="professionalGrid" patternUnits="userSpaceOnUse" width="40" height="40">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1082a6" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#professionalGrid)"/>
          </svg>
          
          {/* Elementos geométricos minimalistas */}
          <div className="absolute top-3 left-8 w-1 h-8 bg-[#1082a6] opacity-20"></div>
          <div className="absolute top-3 right-8 w-1 h-8 bg-[#1082a6] opacity-20"></div>
          <div className="absolute bottom-3 left-1/4 w-12 h-1 bg-[#1082a6] opacity-15"></div>
          <div className="absolute bottom-3 right-1/4 w-12 h-1 bg-[#1082a6] opacity-15"></div>
          
          {/* Hexágonos sutis para representar proteção/segurança */}
          <svg className="absolute top-2 right-20 w-6 h-6 opacity-10" viewBox="0 0 24 24">
            <path d="M6.5 2L17.5 2L23 12L17.5 22L6.5 22L1 12Z" fill="none" stroke="#1082a6" strokeWidth="1"/>
          </svg>
          <svg className="absolute bottom-2 left-16 w-5 h-5 opacity-15" viewBox="0 0 24 24">
            <path d="M6.5 2L17.5 2L23 12L17.5 22L6.5 22L1 12Z" fill="none" stroke="#1082a6" strokeWidth="1"/>
          </svg>
          
          {/* Bordas sutis para dar estrutura */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#1082a6] to-transparent opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#1082a6] to-transparent opacity-20"></div>
          
          {/* Elementos de canto discretos */}
          <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-[#1082a6] opacity-25"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-[#1082a6] opacity-25"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-[#1082a6] opacity-25"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-[#1082a6] opacity-25"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#administrador" className="px-6 py-3 bg-[#1082a6] hover:bg-[#0a6b8a] text-white rounded-md transition-colors font-medium">
              Administrador
            </a>
            <a href="#corretor" className="px-6 py-3 bg-[#1082a6] hover:bg-[#0a6b8a] text-white rounded-md transition-colors font-medium">
              Corretor Autônomo
            </a>
            <a href="#imobiliaria" className="px-6 py-3 bg-[#1082a6] hover:bg-[#0a6b8a] text-white rounded-md transition-colors font-medium">
              Imobiliária
            </a>
          </div>
        </div>
      </section>

      {/* Seção Administrador */}
      <section id="administrador" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Para Administradores</h2>
                <p className="text-gray-700 mb-6 text-justify">
                 Sabemos que sua principal missão é otimizar a gestão de propriedades, 
                 garantindo tranquilidade aos proprietários e satisfação aos inquilinos. 
                 Nesse cenário, gostaríamos de apresentar uma proposta de parceria que não 
                 só complementa seus serviços, mas também agrega valor significativo ao seu 
                 negócio e, consequentemente, aos seus clientes: a colaboração com uma corretora de seguros especializada em locações e serviços imobiliarios.
                </p>
                <p className="text-gray-700 mb-6 text-justify font-bold">Conte Com:</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#1082a6] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Gestão completa de carteiras de seguros</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#1082a6] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Sistema exclusivo para administração</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#1082a6] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Suporte especializado para sinistro</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#1082a6] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Comissionamento diferenciado</span>
                  </li>
                </ul>
                <button className="px-6 py-3 bg-[#1082a6] cursor-pointer hover:bg-[#0a6b8a] text-white font-medium rounded-md transition-colors">
                  Quero ser parceiro
                </button>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <div className="flex justify-center items-center bg-gradient-to-br from-[#1082a6] to-[#0a6b8a] rounded-lg p-12 shadow-xl">
                  <svg className="w-32 h-32 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {/* <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-1.5 5h3c.8 0 1.5.7 1.5 1.5V10h-6V8.5c0-.8.7-1.5 1.5-1.5zM7 10h10v2c0 .6-.4 1-1 1H8c-.6 0-1-.4-1-1v-2z"/> */}
                    <path d="M12 2
                      c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2
                      zm-1.5 5h3
                      c.8 0 1.5.7 1.5 1.5V13
                      h-6V8.5
                      c0-.8.7-1.5 1.5-1.5z 
                      "/>
                    <rect x="3" y="14" width="18" height="2" rx="1"/>
                    <rect x="5" y="17" width="14" height="2" rx="1"/>
                    <rect x="7" y="20" width="10" height="2" rx="1"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Corretor Autônomo */}
      <section id="corretor" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row-reverse items-center gap-10">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Para Corretores Autônomos</h2>
                <p className="text-gray-700 mb-6 text-justify">
                  Maximize suas vendas e reduza burocracias. Como corretor
                   autônomo parceiro da Trust, você tem acesso a dezenas de 
                   seguradoras, produtos exclusivos e toda a estrutura operacional
                    para focar no que realmente importa: fechar mais negocios!
                </p>    
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#1082a6] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Suporte operacional completo</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#1082a6] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Treinamentos e capacitações constantes</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#1082a6] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Ferramentas de cotação multisseguradoras</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#1082a6] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Comissionamento diferenciado</span>
                  </li>
                </ul>
                <button className="px-6 py-3 bg-[#1082a6] cursor-pointer hover:bg-[#0a6b8a] text-white font-medium rounded-md transition-colors">
                  Entre em contato
                </button>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <div className="flex justify-center items-center bg-gradient-to-br from-[#1082a6] to-[#0a6b8a] rounded-lg p-12 shadow-xl">
                  <svg className="w-32 h-32 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Imobiliária */}
      <section id="imobiliaria" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Para Imobiliárias</h2>
                <p className="text-gray-700 mb-6 text-justify">
                  Transforme sua imobiliária em um centro completo de soluções. Além de vender e 
                  administrar imóveis, ofereça seguros residenciais, garantias locatícias e outros 
                  produtos relacionados, aumentando seu faturamento e fidelizando clientes.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#1082a6] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Soluções completas de seguros para o mercado imobiliário</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#1082a6] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Garantias locatícias e seguros fiança</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#1082a6] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Seguros empresariais, residenciais e condominiais</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#1082a6] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Comissionamento diferenciado</span>
                  </li>
                </ul>
                <button className="px-6 py-3 bg-[#1082a6] cursor-pointer hover:bg-[#0a6b8a] text-white font-medium rounded-md transition-colors">
                  Saiba mais
                </button>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <div className="flex justify-center items-center bg-gradient-to-br from-[#1082a6] to-[#0a6b8a] rounded-lg p-12 shadow-xl">
                  <svg className="w-32 h-32 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3L2 12H5V20H19V12H22L12 3ZM7 18V10H17V18H15V14H9V18H7ZM11 18V16H13V18H11Z"/>
                    <path d="M19 21H5C4.4 21 4 21.4 4 22S4.4 23 5 23H19C19.6 23 20 22.6 20 22S19.6 21 19 21Z"/>
                    <circle cx="16" cy="6" r="2"/>
                    <path d="M14 8C14 7.4 14.4 7 15 7H17C17.6 7 18 7.4 18 8V9H14V8Z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Seção CTA - cores corrigidas */}
      <section className="py-16 bg-gray-100 relative overflow-hidden">
        {/* Efeitos decorativos de fundo */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Elementos decorativos adicionais */}
          <div className="absolute top-16 left-16 w-4 h-4 bg-[#1082a6] opacity-30 rounded-full"></div>
          <div className="absolute top-32 left-48 w-3 h-3 bg-[#1082a6] opacity-25 rounded-full"></div>
          <div className="absolute bottom-20 right-32 w-5 h-5 bg-[#1082a6] opacity-20 rounded-full"></div>
          <div className="absolute bottom-40 right-56 w-3 h-3 bg-[#1082a6] opacity-30 rounded-full"></div>
          <div className="absolute top-1/3 right-16 w-4 h-4 bg-[#1082a6] opacity-25 rounded-full"></div>
          <div className="absolute top-2/3 left-24 w-2 h-2 bg-[#1082a6] opacity-35 rounded-full"></div>
          <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-[#1082a6] opacity-20 rounded-full"></div>
          
          {/* Elementos geométricos adicionais */}
          <div className="absolute top-20 right-1/4 w-6 h-6 border-2 border-[#1082a6] opacity-20 rotate-45"></div>
          <div className="absolute bottom-24 left-1/4 w-8 h-8 border border-[#1082a6] opacity-15 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Pronto para potencializar seus resultados?
            </h2>
            <p className="text-xl text-gray-800 mb-8">
              Junte-se a centenas de parceiros que já estão expandindo seus negócios com a Trust.
            </p>
            <button className="px-6 py-3 bg-[#1082a6] cursor-pointer hover:bg-[#0a6b8a] text-white font-medium rounded-md transition-colors">
              Quero ser parceiro
            </button>
          </div>
        </div>
      </section>
      
      <WhatsappButton />
      <ScrollToTop />
      <Footer />
    </main>
  );
}