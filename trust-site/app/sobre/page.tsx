import Footer from '../components/Footer';
import Header from '../components/Header';
import WhatsappButton from '../components/WhatsappButton';
import ScrollToTop from '../components/ScrollToTop';
import Image from 'next/image';

export default function SobrePage() {
  return (
    <main className="pt-[72px] bg-white">
      <Header />

      {/* Banner Hero */}
      <div className="w-full bg-white pt-20">
        {/* Container com margin para o banner */}
        <div className="container mx-auto px-4">
          {/* Banner com imagem de fundo */}
          <section className="relative bg-transparent text-white overflow-hidden rounded-lg shadow-lg">
            {/* Sobreposição de imagem com opacidade */}
            <div className="absolute inset-0">
              <Image 
                src="/img/sobre.png" 
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
                Sobre a Trust
              </h1>
            </div>
          </section>
        </div>
      </div>

      {/* Nossa História */}
      <section className="py-30 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-3/5">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Nossa História: Confiança que move o Futuro</h2>
              <p className="text-gray-700 mb-4 text-justify">
                Em 2012, em meio ao dinamismo do mercado imobiliário, nasceu a Trust Seguros. Começamos modestos, dentro de uma imobiliária, com um propósito claro: simplificar as garantias locatícias e oferecer o suporte que corretores e clientes precisavam para realizar seus negócios com segurança e tranquilidade.
              </p>
              <p className="text-gray-700 mb-4 text-justify">
                Desde o início, nosso compromisso foi com a eficiência e a transparência. Acreditamos que o processo de contratar um seguro ou uma garantia não precisa ser complexo, mas sim uma ferramenta para impulsionar seus projetos e proteger o que é mais valioso para você.
              </p>
              <p className="text-gray-700 text-justify">
                Essa dedicação nos trouxe frutos significativos. Há mais de dois anos, com orgulho, fazemos parte do renomado grupo Porto Elite, uma parceria que validou nossa expertise e nos impulsionou a novos patamares. O reconhecimento veio de forma concreta: no último trimestre, conquistamos o primeiro lugar entre as corretoras do grupo, um testemunho da nossa paixão por servir e da confiança que nossos clientes depositam em nós.
              </p>
            </div>
            <div className="md:w-2/5">
              <div className="bg-gradient-to-br from-[#1082a6] to-[#0a6b8a] rounded-lg p-10 text-white">
                <div className="text-center mb-10">
                  <div className="text-4xl font-bold mb-3">13+</div>
                  <div className="text-lg">Anos de experiência</div>
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-2">5k+</div>
                    <div className="text-sm">Clientes atendidos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-2">200+</div>
                    <div className="text-sm">Parceiros</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">100%</div>
                    <div className="text-sm">Satisfação</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">24/7</div>
                    <div className="text-sm">Suporte</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nossos Valores</h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Missão */}
              <div className="text-center">
                <div className="bg-[#1082a6] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Confiança e Transparência</h3>
                <p className="text-gray-700 text-justify">
                  Acreditamos que a base de qualquer relação duradoura é a confiança. Por isso, operamos com total transparência em todas as nossas ações, processos e comunicações, garantindo clareza e honestidade para nossos clientes, parceiros e colaboradores.
                </p>
              </div>

              {/* Visão */}
              <div className="text-center">
                <div className="bg-[#ff6b35] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Excelência e Inovação</h3>
                <p className="text-gray-700 text-justify">
                  Buscamos constantemente a excelência em tudo o que fazemos, desde o atendimento ao cliente até o desenvolvimento de soluções. Estamos sempre atentos às inovações do mercado para oferecer as melhores e mais eficazes garantias e seguros.
                </p>
              </div>

              {/* Valores */}
              <div className="text-center">
                <div className="bg-[#1082a6] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 616 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Parceria e Suporte</h3>
                <p className="text-gray-700 text-justify">
                  Vemos nossos clientes como parceiros, não apenas como compradores de serviços. Nosso compromisso é oferecer um suporte dedicado e proativo, acompanhando-os em cada etapa, para que possam focar no crescimento dos seus negócios e na segurança dos seus bens.
                </p>
              </div>
            </div>
        </div>
      </section>

      {/* Nossos Diferenciais */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nossos Diferenciais</h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <div className="bg-[#1082a6] w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Segurança</h3>
                <p className="text-gray-600 text-sm">
                  Parcerias com as principais seguradoras do mercado, garantindo solidez e confiabilidade em todas as nossas soluções.
                </p>
              </div>

              <div className="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <div className="bg-[#ff6b35] w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Equipe Especializada</h3>
                <p className="text-gray-600 text-sm">
                  Profissionais altamente qualificados e experientes, prontos para oferecer as melhores soluções personalizadas para suas necessidades.
                </p>
              </div>

              <div className="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <div className="bg-[#1082a6] w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Transparência</h3>
                <p className="text-gray-600 text-sm">
                  Comunicação clara e objetiva em todos os processos, sem letras miúdas ou surpresas desagradáveis.
                </p>
              </div>
            </div>
        </div>
      </section>

      {/* Equipe e Liderança */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nossa Equipe</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Profissionais especializados e experientes comprometidos com a excelência no atendimento
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-[#1082a6] to-[#0a6b8a] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">CEO</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Liderança Executiva</h3>
              <p className="text-gray-600 mb-4">
                Direção estratégica com mais de 20 anos de experiência no mercado de seguros
              </p>
              <div className="text-sm text-gray-500">
                <p>• Visão estratégica do negócio</p>
                <p>• Relacionamento com seguradoras</p>
                <p>• Desenvolvimento de parcerias</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-[#ff6b35] to-[#e55529] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">TECH</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Equipe Técnica</h3>
              <p className="text-gray-600 mb-4">
                Especialistas em análise de riscos e produtos de seguros especializados
              </p>
              <div className="text-sm text-gray-500">
                <p>• Análise técnica especializada</p>
                <p>• Desenvolvimento de produtos</p>
                <p>• Suporte técnico avançado</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-[#1082a6] to-[#0a6b8a] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">SAC</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Atendimento</h3>
              <p className="text-gray-600 mb-4">
                Equipe dedicada ao atendimento personalizado e suporte ao cliente
              </p>
              <div className="text-sm text-gray-500">
                <p>• Atendimento personalizado</p>
                <p>• Suporte pós-venda</p>
                <p>• Gestão de sinistros</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Certificações e Credenciais */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Certificações e Credenciais</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Reconhecimentos que atestam nossa competência e compromisso com a excelência
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1082a6] to-[#0a6b8a] rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">SUSEP</h3>
              <p className="text-sm text-gray-600">
                Registrada e regulamentada pela Superintendência de Seguros Privados
              </p>
            </div>

            <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#ff6b35] to-[#e55529] rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 11H7v9a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-1V5a4 4 0 0 0-8 0v2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">ISO 27001</h3>
              <p className="text-sm text-gray-600">
                Certificação em segurança da informação para proteção de dados
              </p>
            </div>

            <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1082a6] to-[#0a6b8a] rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">CNseg</h3>
              <p className="text-sm text-gray-600">
                Membro da Confederação Nacional das Seguradoras
              </p>
            </div>

            <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#ff6b35] to-[#e55529] rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">FENACOR</h3>
              <p className="text-sm text-gray-600">
                Federação Nacional dos Corretores de Seguros
              </p>
            </div>
          </div>
        </div>
      </section> */}


      {/* Depoimentos e Testemunhos */}
      <section className="py-16 bg-gradient-to-r from-[#1082a6] to-[#0a6b8a] relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">O que Dizem Nossos Clientes</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Depoimentos reais de quem confia na Trust para proteger o que mais importa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/95 p-8 rounded-lg relative backdrop-blur-sm">
              <div className="absolute top-4 left-4 text-[#1082a6] text-4xl">&ldquo;</div>
              <div className="mt-8">
                <p className="text-gray-600 mb-6 italic">
                  &ldquo;Excelente atendimento e agilidade na resolução do meu sinistro. A Trust superou todas as minhas expectativas.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1082a6] to-[#0a6b8a] rounded-full flex items-center justify-center text-white font-bold mr-4">
                    M
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Maria Silva</h4>
                    <p className="text-sm text-gray-600">Cliente Seguro Auto</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/95 p-8 rounded-lg relative backdrop-blur-sm">
              <div className="absolute top-4 left-4 text-[#ff6b35] text-4xl">&ldquo;</div>
              <div className="mt-8">
                <p className="text-gray-600 mb-6 italic">
                  &ldquo;Profissionais extremamente qualificados. Encontraram a melhor solução para minha empresa com ótimo custo-benefício.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#ff6b35] to-[#e55529] rounded-full flex items-center justify-center text-white font-bold mr-4">
                    J
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">João Santos</h4>
                    <p className="text-sm text-gray-600">Empresário</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/95 p-8 rounded-lg relative backdrop-blur-sm">
              <div className="absolute top-4 left-4 text-[#1082a6] text-4xl">&ldquo;</div>
              <div className="mt-8">
                <p className="text-gray-600 mb-6 italic">
                  &ldquo;Há anos sou cliente da Trust. Confiança e transparência são os diferenciais que mais valorizo.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1082a6] to-[#0a6b8a] rounded-full flex items-center justify-center text-white font-bold mr-4">
                    A
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Ana Costa</h4>
                    <p className="text-sm text-gray-600">Cliente Vida e Previdência</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Elementos decorativos */}
        <div className="absolute top-10 left-10 w-32 h-32 border border-white opacity-10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-white opacity-10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white opacity-5 rounded-full"></div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50/30 to-white relative overflow-hidden">
        {/* Padrão geométrico de fundo */}
        <div className="absolute inset-0">
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Faça Parte da Família Trust
            </h2>
            <p className="text-xl mb-8 text-gray-600">
              Descubra como podemos proteger você, sua família e seu patrimônio com as melhores soluções em seguros
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#1082a6] hover:bg-[#0a6b8a] text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                Solicitar Cotação
              </button>
              <button className="border-2 border-[#1082a6] text-[#1082a6] hover:bg-[#1082a6] hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                Falar com Consultor
              </button>
            </div>
          </div>
        </div>
        
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
      </section>

      <Footer />
      <WhatsappButton />
      <ScrollToTop />
    </main>
  );
}

