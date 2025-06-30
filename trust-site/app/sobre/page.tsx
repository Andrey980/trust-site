import Footer from '../components/Footer';
import Header from '../components/Header';
import WhatsappButton from '../components/WhatsappButton';

export default function SobrePage() {
  return (
    <main className="pt-[72px]">
      <Header />

      {/* Nossa História */}
      <section className="py-30 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Nossa História</h2>
                <p className="text-gray-700 mb-4 text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-gray-700 mb-4 text-justify">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="text-gray-700 text-justify">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="bg-gradient-to-br from-[#1082a6] to-[#0a6b8a] rounded-lg p-8 text-white">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">15+</div>
                    <div className="text-lg">Anos de experiência</div>
                  </div>
                  <div className="grid grid-cols-2 gap-6 mt-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-1">50k+</div>
                      <div className="text-sm">Clientes atendidos</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-1">200+</div>
                      <div className="text-sm">Parceiros</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-1">98%</div>
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
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Missão, Visão e Valores</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Missão */}
              <div className="text-center">
                <div className="bg-[#1082a6] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Missão</h3>
                <p className="text-gray-700 text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
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
                <h3 className="text-xl font-bold text-gray-800 mb-4">Visão</h3>
                <p className="text-gray-700 text-justify">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
                </p>
              </div>

              {/* Valores */}
              <div className="text-center">
                <div className="bg-[#1082a6] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Valores</h3>
                <p className="text-gray-700 text-justify">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Diferenciais */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nossos Diferenciais</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <div className="bg-[#1082a6] w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Agilidade</h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
                </p>
              </div>

              <div className="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <div className="bg-[#ff6b35] w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Segurança</h3>
                <p className="text-gray-600 text-sm">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                </p>
              </div>

              <div className="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <div className="bg-[#1082a6] w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Equipe Especializada</h3>
                <p className="text-gray-600 text-sm">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                </p>
              </div>

              <div className="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <div className="bg-[#ff6b35] w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Disponibilidade</h3>
                <p className="text-gray-600 text-sm">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
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
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
                </p>
              </div>

              <div className="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <div className="bg-[#ff6b35] w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Inovação</h3>
                <p className="text-gray-600 text-sm">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhatsappButton />
      <Footer />
    </main>
  );
};

