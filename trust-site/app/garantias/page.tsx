'use client';
import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import WhatsappButton from '../components/WhatsappButton';
// import ServiceInfo from './components/ServiceInfo';

interface ServiceType {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  icon: string;
  // Adicionando os campos para o ServiceInfo
  // Dados do passo a passo para contratação (opcional)
}

export default function GarantiasPage() {
  const [activeTab, setActiveTab] = useState<string>('seguro-fianca');
  const [activeStepTab, setActiveStepTab] = useState<string>('step-1');
  
  const services: ServiceType[] = [
    {
      id: 'seguro-fianca',
      title: 'Seguro Fiança',
      description: 'Alternativa ao fiador tradicional para locação de imóveis',
      longDescription: 'Seguro Fiança é uma solução que permite a locação de um imóvel residencial sem a necessidade de um fiador ou depósito caução. Definitivamente, é a mais sólida garantia locatícia do mercado. Um produto completo que cobre todas as eventualidades de uma locação: inadimplência do aluguel, condomínio, IPTU, água, luz e gás, além de danos ao imóvel e pintura.',
      features: [
        'Análise simplificada e rápida',
        'Disponível para imóveis residenciais e comerciais',
        'Parcelamento do valor do seguro',
        'Proporciona maior segurança jurídica ao locador',
        'Processo 100% online'
      ],
      benefits: [
        'Não compromete seu limite de crédito',
        'Não imobiliza seu capital como na caução',
        'Facilita a aprovação do cadastro e a assinatura do contrato de aluguel',
        'Ideal para quem precisa alugar com urgência',
        'Em caso de sinistro, a seguradora paga ao proprietário e depois negocia diretamente com o inquilino inadimplente'
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
      icon: '/file.svg',
      // Dados para o ServiceInfo
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
  const activeService = services.find(service => service.id === activeTab);
  const showSteps = activeService?.title === "Seguro Fiança";
  const showStepsCap = activeService?.title === "Título de Capitalização";

  return (
    <main className="pt-[72px]">
      <Header />
      
      {/* Intro Section - Design diferenciado */}
      
      {/* Tabs Navigation */}
      <section className="mt-10 bg-white border-b">
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
          <div key={service.id}>
            <section className="py-16 bg-gray-100">
              <div className="container mx-auto px-4">
                <div className="max-w mx-auto">
                  {showSteps && (
                    <>
                      <div className="flex flex-col md:flex-row gap-8 mb-10">
                           <div className="md:w-2/5 border-r border-gray-400">
                              <h1 className="text-gray-700 w-120 text-5xl leading-normal mb-6 text-left font-bold">O que é seguro fiança e por que escolher essa garantia?</h1>
                            </div>

                            <p className="text-gray-600 text-lg mb-10 text-justify leading-loose">
                              O <b>seguro fiança locatícia</b> é uma das melhores alternativas ao fiador tradicional ou ao depósito caução. Em vez de depender de terceiros, o inquilino contrata uma <b>seguradora</b>, que garante ao proprietário o pagamento do <b>aluguel e encargos mensais</b> — como condomínio, IPTU, água, luz e gás — em caso de inadimplência.
                              <br />
                              <br />

                              Essa modalidade de garantia locatícia é a <b>única no mercado que assegura ao proprietário o recebimento integral do aluguel durante todo o período do contrato de locação</b>, oferecendo mais segurança e tranquilidade para ambas as partes.
                            </p>
                      </div>
                      
                      <p className="text-gray-600 text-lg mb-6 text-justify">
                        Se você está procurando uma forma <b>segura e prática de alugar um imóvel sem fiador</b>, o seguro fiança pode ser a solução ideal.
                      </p>

                      <h1 className="text-gray-700 w-full text-4xl leading-normal text-left mb-7 font-bold">O que o seguro pode cobrir?</h1>
                      
                      <p className='text-gray-700 w-full text-lg mb-6 text-left'>
                        Além do aluguel, o seguro pode incluir:
                      </p>

                      <ul className="text-left text-lg w-full text-gray-700 list-disc mb-10 ml-6">
                        <li>Condomínio</li>
                        <li>IPTU</li>
                        <li>Água, luz e gás</li>
                        <li>Danos ao imóvel</li>
                        <li>Pintura interna</li>
                        <li>Pintura externa</li>
                        <li>Multa por quebra de contrato</li>
                      </ul>
                    </>
                  )}


                  {showStepsCap && ( 
                    <>                       
                    <div className="flex flex-col md:flex-row gap-8 mb-10">
                         <div className="md:w-2/5 border-r border-gray-400">
                           <h1 className="text-gray-700 w-120 text-5xl leading-normal mb-6 text-left font-bold">O que é o título de capitalização para locação?</h1>
                         </div>
                         <div className="md:w-3/5">
                           <p className="text-gray-600 text-lg mb-5 text-justify">
                             O título de capitalização para aluguel é uma alternativa ao <b>depósito caução</b>. 
                             Nele, o inquilino compra um título no valor combinado com a imobiliária 
                             (geralmente entre 6 a 12 vezes o valor do aluguel) e esse valor fica <b>vinculado 
                             como garantia ao contrato de locação.</b>
                           </p>
                           
                           <p className="text-gray-600 text-lg mb-5 text-justify">
                             Durante a vigência do contrato, o dinheiro fica administrado com a seguradora. Caso o inquilino não cumpra com suas obrigações — como pagamento de aluguel, encargos ou reparos 
                             no imóvel —, o proprietário pode usar esse valor para cobrir os prejuízos.
                           </p>
                           
                           <p className="text-gray-600 text-lg mb-5 text-justify">
                             Se tudo correr bem, o inquilino pode <b>resgatar o valor 
                             corrigido no final do contrato.</b>
                           </p>
                         </div>
                       </div>
                       
                       <p className="text-gray-600 text-lg mb-10 text-justify">
                         Se você está buscando uma forma segura e simples de <b>alugar um imóvel sem fiador</b>, 
                         o <b>título de capitalização para locação</b> pode ser a solução ideal. 
                         Essa modalidade de <b>garantia locatícia</b> vem ganhando destaque no mercado 
                         por unir praticidade, segurança e a vantagem de poder <b>resgatar o valor 
                         aplicado ao final do contrato.</b>
                       </p>
                    </>
                  )}                  
                  {!showStepsCap ? (
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
                  ) : (
                    <div>  
                      <div className='flex items-center justify-center mt-13 mb-13'>
                        <svg className="w-8 h-8 text-[#1082a6] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <h1 className="text-gray-700 w-full text-4xl leading-normal  text-left font-bold">Vantagens</h1>
                      </div>
                                          {/* Layout estilo da imagem para Título de Capitalização */}                        
                      <div className="grid md:grid-cols-3 gap-15 mb-10">
                        {/* Sem análise de crédito */}
                        <div className="flex flex-col items-center text-center">
                          <div className="bg-blue-100 p-3 rounded-full mb-4 inline-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-semibold text-[#ff6b35] mb-3">Sem análise de crédito</h3>
                          <p className="text-gray-600">Dispensa consulta a SPC e Serasa</p>
                        </div>

                        {/* Valor resgatável */}
                        <div className="flex flex-col items-center text-center">
                          <div className="bg-orange-100 p-3 rounded-full mb-4 inline-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-semibold text-[#ff6b35] mb-3">Valor resgatável</h3>
                          <p className="text-gray-600">Se não houver pendências, o inquilino recebe o valor de volta com correção</p>
                        </div>

                        {/* Valor livre de negociação */}
                        <div className="flex flex-col items-center text-center">
                          <div className="bg-green-100 p-3 rounded-full mb-4 inline-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14c-1.343 0-2.608.338-3.714.938" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-semibold text-[#ff6b35] mb-3">Valor livre de negociação</h3>
                          <p className="text-gray-600">O valor é ajustado conforme solicitado pelo proprietário e aceito pelo locatário</p>
                        </div>

                        {/* Facilidade e agilidade */}
                        <div className="flex flex-col items-center text-center">
                          <div className="bg-blue-500 p-3 rounded-full mb-4 inline-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-semibold text-[#ff6b35] mb-3">Facilidade e agilidade</h3>
                          <p className="text-gray-600">Contratação simples e rápida</p>
                        </div>

                        {/* Pagamento facilitado - NOVO */}
                        <div className="flex flex-col items-center text-center">
                          <div className="bg-yellow-100 p-3 rounded-full mb-4 inline-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-semibold text-[#ff6b35] mb-3">Pagamento facilitado</h3>
                          <p className="text-gray-600">Boleto, cartão de crédito em até 18x e PIX</p>
                        </div>

                        {/* Garantia Real */}
                        <div className="flex flex-col items-center text-center">
                          <div className="bg-blue-300 p-3 rounded-full mb-4 inline-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-semibold text-[#ff6b35] mb-3">Mais segurança para o locador</h3>
                          <p className="text-gray-600">O valor já fica garantido desde o início do contrato</p>
                        </div>

                        {/* Assistência 24 horas - NOVO */}
                        <div className="flex flex-col items-center text-center">
                          <div className="bg-red-100 p-3 rounded-full mb-4 inline-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-semibold text-[#ff6b35] mb-3">Assistência 24 horas</h3>
                          <p className="text-gray-600">Serviços de assistência residencial para o inquilino</p>
                        </div>

                        {/* Sorteios mensais */}
                        <div className="flex flex-col items-center text-center">
                          <div className="bg-blue-800 p-3 rounded-full mb-4 inline-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-semibold text-[#ff6b35] mb-3">Sorteios mensais</h3>
                          <p className="text-gray-600">Com o título o inquilino concorre a sorteios mensais pela loteria federal</p>
                        </div>

                        {/* Sem comprovação de renda */}
                        <div className="flex flex-col items-center text-center">
                          <div className="bg-purple-100 p-3 rounded-full mb-4 inline-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              <line x1="9" y1="10" x2="15" y2="10" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} transform="rotate(45,12,10)" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-semibold text-[#ff6b35] mb-3">Sem comprovação de renda</h3>
                          <p className="text-gray-600">Não é necessário apresentar holerites ou declaração de imposto de renda</p>
                        </div>
                      </div>

                      <h1 className="text-gray-700 w-full text-4xl mt-8 mb-15 leading-normal text-left font-bold">📌 Indicado Para</h1>

                      <div className="flex flex-col md:flex-row gap-8">
                        {/* Coluna da Esquerda - 3 itens */}
                        <div className="md:w-1/2">
                          <ul className="space-y-6">
                            {/* Item 1 */}
                            <li className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                              <div className="flex items-start">
                                <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1 flex-shrink-0">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-800 mb-2">Inquilinos com urgência para alugar</h4>
                                  <p className="text-gray-600">Processo rápido e simplificado para quem precisa fechar contrato com agilidade</p>
                                </div>
                              </div>
                            </li>

                            {/* Item 2 */}
                            <li className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                              <div className="flex items-start">
                                <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1 flex-shrink-0">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-800 mb-2">Para locações comerciais e residenciais</h4>
                                  <p className="text-gray-600">Solução versátil que atende diferentes tipos de imóveis e necessidades</p>
                                </div>
                              </div>
                            </li>

                            {/* Item 3 */}
                            <li className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                              <div className="flex items-start">
                                <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1 flex-shrink-0">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-800 mb-2">Quem tem nome negativado</h4>
                                  <p className="text-gray-600">Alternativa para pessoas com restrições no nome que não conseguiriam aprovação em outras garantias</p>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        
                        {/* Coluna da Direita - 2 itens */}
                        <div className="md:w-1/2">
                          <ul className="space-y-6">
                            {/* Item 4 */}
                            <li className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                              <div className="flex items-start">
                                <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1 flex-shrink-0">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-800 mb-2">Pessoas que não querem comprometer fiadores</h4>
                                  <p className="text-gray-600">Solução independente que não exige envolver terceiros na transação</p>
                                </div>
                              </div>
                            </li>

                            {/* Item 5 */}
                            <li className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                              <div className="flex items-start">
                                <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1 flex-shrink-0">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-800 mb-2">Quem busca possibilidade de reembolso</h4>
                                  <p className="text-gray-600">Para inquilinos que valorizam o retorno do valor investido ao final do contrato</p>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}{showSteps && (
                        <div className="mt-16">
                          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Passo a Passo para Contratação</h3>
                            {/* Sistema de Abas */}
                          <div className="mb-8">                            
                            <div className="flex flex-col md:flex-row justify-center w-full">
                              {['01 - Cadastro e Custo', '02 - Análise','03 - Aprovação', '04 - Apólice'].map((step, index) => {
                                const stepId = `step-${index + 1}`;
                                return (
                                  <button
                                    key={stepId}
                                    className={`py-4 px-6 cursor-pointer text-center flex-1 md:w-1/3 ${
                                      activeStepTab === stepId
                                        ? 'bg-white border-t border-l border-r border-b-0 border-gray-200 text-gray-800 font-medium rounded-t-lg'
                                        : 'bg-gray-100 text-gray-600 border border-gray-200 hover:bg-gray-50'
                                    } transition-colors duration-300`}
                                    onClick={() => setActiveStepTab(stepId)}
                                  >
                                    {step}
                                  </button>
                                );
                              })}
                            </div>
                              {/* Conteúdo das Abas */}
                            <div className="mt-8 bg-white p-8 rounded-lg shadow-md border">
                              {activeStepTab === 'step-1' && (
                                <div className="space-y-8">
                                  <div className="flex flex-col items-center mb-6">
                                    <div className="w-12 h-12 mb-4 flex items-center justify-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                                        <rect x="4" y="3" width="16" height="18" rx="2" />
                                        <circle cx="12" cy="10" r="2" />
                                        <path d="M8 14h8" />
                                      </svg>
                                    </div>
                                    <p className="text-left w-full text-gray-700 mb-6">
                                      Primeiro, a gente precisa saber:
                                    </p>
                                    <ul className='text-left w-full text-gray-700 list-disc mb-6 ml-25'>
                                      <li>Qual o valor do aluguel e encargos da locação (condomínio e IPTU)</li>
                                      <li>Qual o prazo da locação?</li>
                                      <li>O imóvel é residencial ou comercial?</li>
                                      <li>Dados pessoais (nome, CPF, endereço, contato...) para a ficha cadastral.</li>
                                    </ul>
                                    <p className="text-left w-full text-gray-700 mb-6">
                                      Estas informações são de suma importância para que a seguradora possa precificar o seguro.
                                      <br />
                                      <br />
                                      O <b>valor do prêmio do seguro</b> (geralmente entre <b>1 a 2 vezes o valor do aluguel</b> por ano, podendo ser parcelado).
                                    </p>
                                  </div>
                                </div>
                              )}
                              
                              {activeStepTab === 'step-2' && (
                                <div className="space-y-8">
                                   <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 mb-4 flex items-center justify-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                        <line x1="16" y1="2" x2="16" y2="6"></line>
                                        <line x1="8" y1="2" x2="8" y2="6"></line>
                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                        <path d="M8 14h.01"></path>
                                        <path d="M12 14h.01"></path>
                                        <path d="M16 14h.01"></path>
                                        <path d="M8 18h.01"></path>
                                        <path d="M12 18h.01"></path>
                                        <path d="M16 18h.01"></path>
                                      </svg>
                                    </div>
                                    <p className="text-left w-full text-gray-700 mb-6">
                                      Após o cálculo, as seguradoras solicitam alguns documentos para aceitação do risco.

                                      <br />
                                      <br />

                                      Documentos como:
                                    </p>
                                    <ul className='text-left w-full text-gray-700 list-disc mb-6 ml-25'>
                                      <li>RG/CPF</li>
                                      <li>Comprovante de residência</li>
                                      <li>Comprovante de renda (holerites, Imposto de renda, Balanços e demonstrativos financeiros)</li>
                                    </ul>
                                    <p className="text-left w-full text-gray-700 mb-6">
                                      ⏱️ Esse processo leva de <b>1 a 3 dias úteis</b>, dependendo da seguradora.
                                    </p>
                                  </div>
                                </div>
                              )}
                              
                              {activeStepTab === 'step-3' && (
                                <div className="space-y-8">          
                                 <div className="flex flex-col items-center mb-6">
                                    <div className="w-12 h-12 mb-4 flex items-center justify-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                        <polyline points="14 2 14 8 20 8"></polyline>
                                        <line x1="16" y1="13" x2="8" y2="13"></line>
                                        <line x1="16" y1="17" x2="8" y2="17"></line>
                                        <polyline points="10 9 9 9 8 9"></polyline>
                                      </svg>
                                    </div>
                                   <p className="text-left w-full text-gray-700 mb-6">
                                      Se aprovado, a seguradora apresenta as condições e a importância segurada com base nos valores da locação.
                                      <br />
                                      <br />
                                      Após a proposta ser validada, alinhamos o pagamento com o inquilino ou com a imobiliária/administradora para que a apólice seja emitida.
                                    </p>
                                  </div>
                                </div>
                              )}

                              {activeStepTab === 'step-4' && (
                                <div className="space-y-8">          
                                  <div className="flex flex-col items-center mb-6">
                                    <div className="w-12 h-12 mb-4 flex items-center justify-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                      </svg>
                                    </div>
                                    <p className="text-left w-full text-gray-700">
                                      Com o pagamento alinhado, nossa equipe valida as informações da proposta do seguro fiança com o contrato de locação. 
                                      <br />
                                      <br />
                                      A seguradora <b>emite a apólice</b> de seguro fiança e envia ao locador e à imobiliária.
                                      <br />
                                      <br />
                                      📄 Essa apólice serve como garantia do contrato de locação.
                                      <br />
                                      <br />
                                      ✔️ Com a apólice em mãos, você e o proprietário podem assinar o contrato tranquilamente. O <b>seguro já está ativo</b>. 
                                    </p>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                            <div className="mt-12">
                            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Serviços</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                              {/* Assistência 24 horas */}
                              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                                <div className="flex items-center mb-4">
                                  <span className="text-yellow-400 mr-2">★</span>
                                  <h4 className="text-xl font-semibold text-gray-800">Assistência 24 horas</h4>
                                </div>
                                <p className="text-gray-600">
                                  Suporte disponível a qualquer momento para emergências relacionadas ao imóvel, garantindo tranquilidade e resolução rápida de problemas.
                                </p>
                              </div>
                              
                              {/* Pagamento do aluguel com cartão de crédito */}
                              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                                <div className="flex items-center mb-4">
                                  <span className="text-yellow-400 mr-2">★</span>
                                  <h4 className="text-xl font-semibold text-gray-800">Pagamento do aluguel com cartão de crédito</h4>
                                </div>
                                <p className="text-gray-600">
                                  Flexibilidade para o inquilino realizar o pagamento do aluguel utilizando cartão de crédito, facilitando a gestão financeira mensal.
                                </p>
                              </div>
                              
                              {/* Assistência jurídica para o proprietário */}
                              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                                <div className="flex items-center mb-4">
                                  <span className="text-yellow-400 mr-2">★</span>
                                  <h4 className="text-xl font-semibold text-gray-800">Assistência jurídica para o proprietário</h4>
                                </div>
                                <p className="text-gray-600">
                                  Consultoria e orientação legal especializada para proprietários, proporcionando segurança nas questões legais relacionadas ao contrato de locação.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                  
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

            {/* ServiceInfo Section - Nova seção adicionada usando o componente */}
          </div>
        )
      )}

      {/* CTA Section */}
      {showSteps && (          <section className="py-16 bg-[#1082a6] relative overflow-hidden">
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
              <div className="md:flex md:items-center md:justify-between">
                <div className="md:w-7/12 mb-8 md:mb-0">
                  <h2 className="text-3xl font-bold text-white mb-6">Substitua o papel do fiador com o Seguro Fiança, fácil e com benefícios</h2>
                  <p className="text-white text-lg mb-8">
                    Para obter um orçamento, preencha os dados nos links abaixo de acordo com o tipo da sua locação.
                  </p>
                    <div className="flex flex-wrap gap-4 mb-8">
                    <a href="#" className="bg-white text-[#1082a6] py-3 px-8 rounded-full font-semibold shadow-md transition-all duration-300 hover:bg-gray-100">
                      PF COMERCIAL
                    </a>
                    <a href="#" className="bg-white text-[#1082a6] py-3 px-8 rounded-full font-semibold shadow-md transition-all duration-300 hover:bg-gray-100">
                      PJ COMERCIAL
                    </a>
                  </div>
                </div>
                  <div className="md:w-4/12 text-white">
                  <div className="mb-6">
                    <p className="text-white font-medium mb-4">Se preferir, fale com um de nossos consultores:</p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1082a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                          </svg>
                        </div>
                        <span>11 93337-2957</span>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1082a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 2L11 13"></path>
                            <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
                          </svg>
                        </div>
                        <span>trust@email.com.br</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
      
      )}

      {showStepsCap && (          <section className="py-16 bg-[#1082a6] relative overflow-hidden">
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
              <div className="md:flex md:items-center md:justify-between">
                <div className="md:w-7/12 mb-8 md:mb-0">
                  <h2 className="text-3xl font-bold text-white mb-6">Fácil, rápido e sem burocracia</h2>
                  <p className="text-white text-lg mb-8">
                    Para contratar a garantia de aluguel e gerar o título de capitalização, preencha um dos formulários abaixo e nos envie por email ou WhatsApp.
                  </p>
                    <div className="flex flex-wrap gap-4 mb-8">
                    <a href="#" className="bg-white text-[#1082a6] py-3 px-8 uppercase rounded-full font-semibold shadow-md transition-all duration-300 hover:bg-gray-100">
                      Pessoa Física
                    </a>
                    <a href="#" className="bg-white text-[#1082a6] py-3 px-8 uppercase rounded-full font-semibold shadow-md transition-all duration-300 hover:bg-gray-100">
                      Pessoa Jurídica
                    </a>
                  </div>
                </div>
                  <div className="md:w-4/12 text-white">
                  <div className="mb-6">
                    <p className="text-white font-medium mb-4">Se preferir, fale com um de nossos consultores:</p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1082a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                          </svg>
                        </div>
                        <span>11 93337-2957</span>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1082a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 2L11 13"></path>
                            <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
                          </svg>
                        </div>
                        <span>trust@email.com.br</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
      
      )}
      
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