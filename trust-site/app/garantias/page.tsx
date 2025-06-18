'use client';
import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import WhatsappButton from '../components/WhatsappButton';

interface ServiceType {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  icon: string;
}

export default function GarantiasPage() {
  const [activeTab, setActiveTab] = useState<string>('seguro-fianca');
  
  const services: ServiceType[] = [
    {
      id: 'seguro-fianca',
      title: 'Seguro Fiança',
      description: 'Alternativa ao fiador tradicional para locação de imóveis',
      longDescription: 'O Seguro Fiança Locatícia é uma alternativa moderna e segura ao fiador tradicional ou à caução em dinheiro para locação de imóveis residenciais ou comerciais. Ele garante ao proprietário o recebimento dos valores devidos pelo inquilino em caso de inadimplência, enquanto oferece ao locatário uma forma simples e desburocratizada de conseguir um imóvel para alugar.',
      features: [
        'Análise de crédito simplificada e rápida',
        'Sem necessidade de apresentar fiador',
        'Cobertura para aluguel e encargos',
        'Disponível para imóveis residenciais e comerciais',
        'Parcelamento do valor do seguro',
        'Renovação facilitada do contrato'
      ],
      benefits: [
        'Processo de aprovação simplificado',
        'Não compromete seu limite de crédito',
        'Cobertura ampla para diversos tipos de imóveis',
        'Tranquilidade para inquilinos e proprietários',
        'Não imobiliza seu capital como na caução'
      ],
      icon: '/file.svg'
    },
    {
      id: 'titulo-capitalizacao',
      title: 'Título de Capitalização',
      description: 'Poupe dinheiro com possibilidade de sorteios e prêmios',
      longDescription: 'O Título de Capitalização é um produto financeiro que combina economia programada com a possibilidade de participação em sorteios periódicos. Parte do valor investido é destinada à formação de um capital que será devolvido ao fim do plano, enquanto outra parte financia os sorteios que podem proporcionar prêmios em dinheiro ao longo da vigência do título.',
      features: [
        'Planos personalizados com diferentes prazos',
        'Pagamentos mensais ou únicos',
        'Participação em sorteios periódicos',
        'Resgate total ao final do plano',
        'Possibilidade de resgate parcial antecipado',
        'Uso como garantia locatícia'
      ],
      benefits: [
        'Disciplina financeira com pagamentos programados',
        'Chance de ganhar prêmios enquanto economiza',
        'Alternativa para garantia em contratos de aluguel',
        'Diferentes modalidades para diversos objetivos',
        'Segurança para seu planejamento financeiro'
      ],
      icon: '/file.svg'
    }
  ];

  // FAQs sobre garantias
  const faqs = [
    {
      question: 'Como funciona o Seguro Fiança Locatícia?',
      answer: 'O Seguro Fiança Locatícia substitui a figura do fiador tradicional. O inquilino paga um prêmio à seguradora que, em contrapartida, garante ao proprietário o pagamento de aluguéis e encargos em caso de inadimplência. O processo envolve análise de crédito do locatário, e após aprovação, a apólice é emitida cobrindo todo o período do contrato de locação.'
    },
    {
      question: 'Quais são as vantagens do Seguro Fiança em comparação com o fiador tradicional?',
      answer: 'As principais vantagens incluem: processo mais ágil de aprovação, sem necessidade de envolver terceiros como fiadores, coberturas mais amplas que incluem danos ao imóvel e encargos, e a possibilidade de locação para quem não possui fiador. Além disso, não compromete o limite de crédito do inquilino e proporciona mais segurança ao proprietário.'
    },
    {
      question: 'Os Títulos de Capitalização podem ser usados como garantia de aluguel?',
      answer: 'Sim, existem modalidades específicas de Títulos de Capitalização que podem ser utilizadas como garantia locatícia. Nestes casos, o valor do título fica como caução durante o período do contrato de locação e pode ser resgatado ao final, desde que não haja pendências. Durante a vigência, o titular ainda participa normalmente dos sorteios.'
    },
    {
      question: 'Posso resgatar meu Título de Capitalização antes do prazo final?',
      answer: 'Sim, é possível fazer o resgate antecipado na maioria dos planos, mas geralmente há penalidades contratuais e você pode receber menos do que o valor total pago. Os percentuais de resgate variam conforme o tempo de permanência e as condições específicas do título contratado. Consulte as condições gerais do seu plano para detalhes.'
    },
    {
      question: 'O que acontece se o inquilino não pagar o aluguel no Seguro Fiança?',
      answer: 'Caso o inquilino deixe de pagar o aluguel, o proprietário aciona a seguradora, que realiza o pagamento dos valores conforme as coberturas contratadas. Posteriormente, a seguradora buscará o ressarcimento junto ao inquilino através de processos de cobrança. O inquilino inadimplente pode ter seu nome incluído em serviços de proteção ao crédito.'
    }
  ];

  return (
    <main className="pt-[72px]">
      <Header />
      
      {/* Intro Section - Design diferenciado */}
      
      {/* Tabs Navigation */}
      <section className="mt-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex">
            {services.map((service) => (
              <button
                key={service.id}
                className={`py-6 px-8 font-medium cursor-pointer text-lg transition-all duration-300 ${
                  activeTab === service.id
                    ? 'border-b-4 border-[#1082a6] text-[#1082a6]'
                    : 'text-gray-600 hover:text-[#1082a6]'
                }`}
                onClick={() => setActiveTab(service.id)}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      {services.map((service) => 
        service.id === activeTab && (
          <section key={service.id} className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">{service.title}</h2>
                <p className="text-gray-600 text-lg mb-10 text-center">{service.longDescription}</p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Features */}
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <svg className="w-6 h-6 text-[#1082a6] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Características
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-[#1082a6] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Benefits */}
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <svg className="w-6 h-6 text-[#1082a6] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                      Benefícios
                    </h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-[#1082a6] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-10 text-center">
                  <button className="bg-[#1082a6] cursor-pointer hover:bg-[#0a6d8a] text-white py-3 px-8 rounded-lg font-semibold shadow-md transition-all duration-300 inline-flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                    </svg>
                    Falar com um Consultor
                  </button>
                </div>
              </div>
            </div>
          </section>
        )
      )}

        {/* CTA Section */}
      <section className="py-16 bg-[#1082a6] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <rect width="100%" height="100%" fill="none"/>
                <circle cx="20" cy="20" r="2" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pattern)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Precisa de Ajuda para Escolher?</h2>
            <p className="text-white/80 text-lg mb-8">
              Nossa equipe está pronta para esclarecer suas dúvidas e ajudar você a encontrar a solução de garantia ideal para suas necessidades.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="border-2 cursor-pointer border-white text-white hover:bg-white/10 py-3 px-8 rounded-lg font-semibold shadow-md transition-all duration-300">
                Solicitar Cotação
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Perguntas Frequentes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Respostas para as dúvidas mais comuns sobre nossas soluções de garantias.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-6 bg-white rounded-lg shadow-md overflow-hidden">
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                    <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                    <div>
                      <svg className="w-5 h-5 text-[#1082a6] transform transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <WhatsappButton />
      <Footer />
    </main>
  );
}