import Footer from '../components/Footer';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';
import WhatsappButton from '../components/WhatsappButton';
import Image from 'next/image';

export default function AtendimentoPage() {
  return (
    <main className="pt-[72px]">
      <Header />
      {/* Fundo preto para o banner */}
      <div className="w-full bg-white pt-20">
        {/* Container com margin para o banner */}
        <div className="container mx-auto px-4">
          {/* Banner com imagem de fundo */}
          <section className="relative bg-transparent text-white overflow-hidden rounded-lg shadow-lg">
          {/* Sobreposição de imagem com opacidade */}
          <div className="absolute inset-0">
            <Image 
              src="/img/atendimento.png" 
              alt="Fundo do banner" 
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[#0d7592] opacity-80"></div>
          </div>
            {/* Elemento laranja decorativo no canto superior esquerdo */}
          <div className="absolute top-0 left-0 w-24 h-24 md:w-32 md:h-32 bg-[#ff6b35] rounded-br-full z-10"></div>
          
          {/* Decoração com círculos */}
          <div className="absolute bottom-6 left-6 flex space-x-3 z-10">
            <div className="w-4 h-4 bg-[#35a0bb] opacity-90 rounded-full"></div>
            <div className="w-4 h-4 bg-[#35a0bb] opacity-90 rounded-full"></div>
            <div className="w-4 h-4 bg-[#35a0bb] opacity-90 rounded-full"></div>
            <div className="w-4 h-4 bg-[#35a0bb] opacity-90 rounded-full"></div>
            <div className="w-4 h-4 bg-[#35a0bb] opacity-90 rounded-full"></div>
          </div>
          
          {/* Elemento decorativo no canto superior direito */}
          <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-[#1c3d5a] opacity-90 rounded-bl-full z-10"></div>
            <div className="container mx-auto px-4 py-24 relative z-20">            <h1 className="text-4xl md:text-5xl font-bold text-center text-white">
              Atendimento Trust
            </h1>
          </div>
        </section>
        </div>
      </div>
      
      {/* Conteúdo principal */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-8">
              Aqui você encontrará os principais serviços e poderá solicitar a contratação, 
              alteração, cancelamento e até avisar a inadimplência dos nossos produtos. 
              Se preferir, faça uma busca rápida do que você precisa:
            </p>
            
            {/* Cards de serviços */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {/* Card 1 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">              
                <div className="bg-[#0d7592] p-4">
                  <h3 className="text-xl font-semibold text-white">Sinistros</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Comunique um sinistro, acompanhe o andamento ou tire dúvidas sobre seu processo.
                  </p>                  <a href="#" className="text-[#0d7592] font-medium hover:underline">
                    Acessar serviço →
                  </a>
                </div> 
              </div>
              
              {/* Card 2 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">                <div className="bg-[#0d7592] p-4">
                  <h3 className="text-xl font-semibold text-white">Alterações</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Solicite alterações em sua apólice ou em seus dados cadastrais.
                  </p>                  
                  <a href="#" className="text-[#0d7592] font-medium hover:underline">
                    Solicitar alteração →
                  </a>
                </div>
              </div>
              
              {/* Card 3 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">                <div className="bg-[#0d7592] p-4">
                  <h3 className="text-xl font-semibold text-white">Cancelamentos</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Solicite o cancelamento de serviços ou apólices vigentes.
                  </p>                  <a href="#" className="text-[#0d7592] font-medium hover:underline">
                    Solicitar cancelamento →
                  </a>
                </div>
              </div>
              {/* Card 4 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">                <div className="bg-[#0d7592] p-4">
                  <h3 className="text-xl font-semibold text-white">Segunda via</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Emita segunda via de boletos, apólices e outros documentos.
                  </p>                  <a href="#" className="text-[#0d7592] font-medium hover:underline">
                    Emitir documentos →
                  </a>
                </div>
              </div>
              
              {/* Card 5 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">                <div className="bg-[#0d7592] p-4">
                  <h3 className="text-xl font-semibold text-white">Assistência 24h</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Solicite assistência emergencial para residência, automóvel ou outros serviços.
                  </p>                  <a href="#" className="text-[#0d7592] font-medium hover:underline">
                    Solicitar assistência →
                  </a>
                </div>
              </div>
              
              {/* Card 6 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">                <div className="bg-[#0d7592] p-4">
                  <h3 className="text-xl font-semibold text-white">Contato</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Entre em contato com nossa equipe para outras solicitações.
                  </p>                  <a href="#" className="text-[#0d7592] font-medium hover:underline">
                    Falar conosco →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Seção de canais de atendimento */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
              Canais de Atendimento
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Telefones */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Atendimento Telefônico</h3>
                <ul className="space-y-4">                  <li className="flex items-start">
                    <div className="bg-[#e5f2f5] p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0d7592]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Central de Atendimento</h4>
                      <p className="text-gray-600 mt-1">0800 123 4567</p>
                      <p className="text-sm text-gray-500 mt-1">Segunda a sexta, das 8h às 18h</p>
                    </div>
                  </li>                  <li className="flex items-start">
                    <div className="bg-[#e5f2f5] p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0d7592]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Assistência 24h</h4>
                      <p className="text-gray-600 mt-1">0800 777 8888</p>
                      <p className="text-sm text-gray-500 mt-1">Todos os dias, 24 horas</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* Outros canais */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Canais Digitais</h3>
                <ul className="space-y-4">                  <li className="flex items-start">
                    <div className="bg-[#e5f2f5] p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0d7592]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">E-mail</h4>
                      <p className="text-gray-600 mt-1">atendimento@trustsite.com.br</p>
                      <p className="text-sm text-gray-500 mt-1">Resposta em até 48h úteis</p>
                    </div>
                  </li>                  <li className="flex items-start">
                    <div className="bg-[#e5f2f5] p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0d7592]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">WhatsApp</h4>
                      <p className="text-gray-600 mt-1">11 93337-2957</p>
                      <p className="text-sm text-gray-500 mt-1">Atendimento de 8h às 18h</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <WhatsappButton />
      <ScrollToTop />
      <Footer />
    </main>
  );
}