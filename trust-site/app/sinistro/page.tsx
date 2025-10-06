import Footer from '../components/Footer';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';
import WhatsappButton from '../components/WhatsappButton';
import Image from 'next/image';

export default function SinistroPage() {
  return (
    <main className="pt-[72px]">
      <Header />
      
      {/* Fundo para o banner */}
      <div className="w-full bg-white pt-20">
        {/* Container com margin para o banner */}
        <div className="container mx-auto px-4">
          {/* Banner com imagem de fundo */}
          <section className="relative bg-transparent text-white overflow-hidden rounded-lg shadow-lg">
            {/* Sobreposição de imagem com opacidade */}
            <div className="absolute inset-0">
              <Image 
                src="/img/hero.png" 
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
                Sinistros
              </h1>
            </div>
          </section>
        </div>
      </div>
      
      {/* Conteúdo principal */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Como Acionar seu Seguro
              </h2>
              <p className="text-lg text-gray-600">
                Estamos aqui para ajudá-lo em momentos difíceis. Siga os passos abaixo para acionar seu seguro de forma rápida e eficiente.
              </p>
            </div>

            {/* Passos para acionar */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="bg-[#1082a6] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Entre em Contato</h3>
                <p className="text-gray-600">
                  Ligue para nossa central ou entre em contato via WhatsApp
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#ff6b35] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Informe os Dados</h3>
                <p className="text-gray-600">
                  Forneça as informações do sinistro e documentação necessária
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#1082a6] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Acompanhe</h3>
                <p className="text-gray-600">
                  Receba atualizações e acompanhe o andamento do seu processo
                </p>
              </div>
            </div>

            {/* Informações de contato */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Canais de Atendimento para Sinistros
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-[#1082a6] p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Telefone</h4>
                    <p className="text-gray-600">+55 11 93337-2957</p>
                    <p className="text-sm text-gray-500">Disponível 24/7</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#25D366] p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">WhatsApp</h4>
                    <p className="text-gray-600">+55 11 93337-2957</p>
                    <p className="text-sm text-gray-500">Atendimento rápido</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Documentos necessários */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Documentos Necessários
              </h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#1082a6] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Número da apólice ou contrato</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#1082a6] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Documento de identificação (RG e CPF)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#1082a6] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Boletim de ocorrência (quando aplicável)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#1082a6] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Fotos do local e dos danos</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#1082a6] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Comprovante de propriedade (quando aplicável)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50/30 to-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Precisa de Ajuda Imediata?
            </h2>
            <p className="text-xl mb-8 text-gray-600">
              Nossa equipe está pronta para atendê-lo 24 horas por dia, 7 dias por semana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+5511933372957"
                className="bg-[#1082a6] hover:bg-[#0a6b8a] text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Ligar Agora
              </a>
              <a 
                href="https://wa.me/5511933372957"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#1082a6] text-[#1082a6] hover:bg-[#1082a6] hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        
        {/* Elementos decorativos */}
        <div className="absolute top-16 left-16 w-4 h-4 bg-[#1082a6] opacity-30 rounded-full"></div>
        <div className="absolute top-32 left-48 w-3 h-3 bg-[#1082a6] opacity-25 rounded-full"></div>
        <div className="absolute bottom-20 right-32 w-5 h-5 bg-[#1082a6] opacity-20 rounded-full"></div>
        <div className="absolute bottom-40 right-56 w-3 h-3 bg-[#1082a6] opacity-30 rounded-full"></div>
        <div className="absolute top-1/3 right-16 w-4 h-4 bg-[#1082a6] opacity-25 rounded-full"></div>
        <div className="absolute top-2/3 left-24 w-2 h-2 bg-[#1082a6] opacity-35 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-[#1082a6] opacity-20 rounded-full"></div>
        
        {/* Elementos geométricos */}
        <div className="absolute top-20 right-1/4 w-6 h-6 border-2 border-[#1082a6] opacity-20 rotate-45"></div>
        <div className="absolute bottom-24 left-1/4 w-8 h-8 border border-[#1082a6] opacity-15 rounded-full"></div>
      </section>
      
      <WhatsappButton />
      <ScrollToTop />
      <Footer />
    </main>
  );
}
