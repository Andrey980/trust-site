'use client';
import { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import WhatsappButton from '../components/WhatsappButton';

// Importando os componentes específicos da página
import HeroBanner from './components/HeroBanner';
import SubMenuNavigation from './components/SubMenuNavigation';
import ProductsGrid from './components/ProductsGrid';
import BenefitsSection from './components/BenefitsSection';
import FaqSection from './components/FaqSection';
import CtaSection from './components/CtaSection';
import ServiceInfo from './components/ServiceInfo';

// Interface para os detalhes do serviço
interface ServiceDetail {
  title: string;
  description: string;
  features: string[];
  coverages: string[];
  imageUrl: string;
}

// Interface para o objeto serviceDetails
interface ServiceDetails {
  [key: string]: ServiceDetail;
}

export default function ParaVocePage() {
  // Estado para controlar qual serviço está ativo
  const [activeService, setActiveService] = useState('auto');
  
  // Definindo os submenus
  const menuItems = [
    { id: 'auto', label: 'Auto' },
    { id: 'bike', label: 'Bike' },
    { id: 'celular', label: 'Celular' },
    { id: 'consorcio', label: 'Consórcio' },
    { id: 'portateis', label: 'Equipamentos Portáteis' },
    { id: 'odonto', label: 'Odontológico' },
    { id: 'previdencia-privada', label: 'Previdência Privada' },
    { id: 'rc-profissional', label: 'Responsabilidade Civil Profissional' },
    { id: 'residencial', label: 'Residencial' },
    { id: 'vida', label: 'Vida' },
    { id: 'viagem', label: 'Viagem' },
  ];
  
  // Dados detalhados para cada serviço
  const serviceDetails: ServiceDetails = {
    auto: {
      title: 'Seguro Auto',
      description: 'Proteção completa para seu veículo com coberturas personalizadas que se adaptam ao seu perfil e necessidades. Tenha tranquilidade ao dirigir sabendo que está protegido contra imprevistos.',
      features: [
        'Cotações com as principais seguradoras do mercado',
        'Assistência 24 horas em todo território nacional',
        'Carro reserva por até 30 dias',
        'Atendimento personalizado em caso de sinistro',
        'Descontos exclusivos para bons condutores'
      ],
      coverages: [
        'Colisão, incêndio, roubo e furto',
        'Responsabilidade civil contra terceiros',
        'Danos materiais e corporais',
        'Assistência funeral em caso de acidentes',
        'Cobertura para vidros, lanternas e retrovisores',
        'Proteção a passageiros'
      ],
      imageUrl: '/img/hero-car.png'
    },
    bike: {
      title: 'Seguro Bike',
      description: 'Proteção para sua bicicleta contra roubo, furto e danos acidentais. Ideal para ciclistas ocasionais ou profissionais que desejam segurança para seus equipamentos.',
      features: [
        'Cobertura para bikes convencionais e elétricas',
        'Proteção dentro e fora de casa',
        'Cobertura nacional e internacional',
        'Atendimento especializado para ciclistas',
        'Opções de franquias reduzidas'
      ],
      coverages: [
        'Roubo e furto qualificado',
        'Danos acidentais',
        'Responsabilidade civil para danos a terceiros',
        'Acidentes pessoais do ciclista',
        'Despesas médicas e hospitalares',
        'Danos durante transporte'
      ],
      imageUrl: '/img/bike.png'
    },
    celular: {
      title: 'Seguro Celular',
      description: 'Proteção completa para seu smartphone contra quebra acidental, roubo e furto qualificado. Tenha tranquilidade para usar seu celular em qualquer lugar.',
      features: [
        'Processo simplificado de contratação',
        'Reposição rápida em caso de sinistro',
        'Cobertura para aparelhos novos e usados',
        'Proteção contra oxidação e líquidos',
        'Opções de cobertura por período determinado'
      ],
      coverages: [
        'Quebra acidental',
        'Roubo e furto qualificado',
        'Danos por líquido',
        'Oxidação',
        'Acessórios originais',
        'Custos de reparo'
      ],
      imageUrl: '/img/celular.png'
    },
    consorcio: {
      title: 'Consórcio',
      description: 'Planejamento financeiro inteligente para aquisição de bens e serviços com parcelas que cabem no seu bolso, sem juros. Uma alternativa econômica ao financiamento tradicional.',
      features: [
        'Parcelas ajustáveis ao seu orçamento',
        'Sem juros, apenas taxa administrativa',
        'Possibilidade de lance para contemplação antecipada',
        'Diversos grupos disponíveis',
        'Flexibilidade na escolha do bem após contemplação'
      ],
      coverages: [
        'Imóveis',
        'Veículos',
        'Serviços',
        'Eletroeletrônicos',
        'Cirurgias e procedimentos médicos',
        'Viagens e turismo'
      ],
      imageUrl: '/img/consorcio.png'
    },
    portateis: {
      title: 'Equipamentos Portáteis',
      description: 'Proteção para seus equipamentos eletrônicos portáteis como notebooks, tablets, câmeras fotográficas e filmadoras contra roubo, furto e danos acidentais.',
      features: [
        'Cobertura dentro e fora de casa',
        'Proteção nacional e internacional',
        'Processo simplificado de sinistro',
        'Reposição por equipamentos novos',
        'Opções para múltiplos dispositivos'
      ],
      coverages: [
        'Roubo e furto qualificado',
        'Quebra acidental',
        'Danos elétricos',
        'Danos por líquido',
        'Acessórios originais',
        'Perda total'
      ],
      imageUrl: '/img/equipamentos.png'
    },
    odonto: {
      title: 'Plano Odontológico',
      description: 'Cuide da saúde bucal com nossos planos odontológicos completos que oferecem cobertura para tratamentos preventivos, restauradores e estéticos com ampla rede credenciada.',
      features: [
        'Ampla rede credenciada',
        'Cobertura nacional',
        'Planos individuais e familiares',
        'Reembolso para atendimento fora da rede',
        'Carências reduzidas'
      ],
      coverages: [
        'Consultas e limpezas',
        'Restaurações',
        'Tratamento de canal',
        'Cirurgias odontológicas',
        'Próteses e implantes',
        'Ortodontia'
      ],
      imageUrl: '/img/odonto.png'
    },
    'previdencia-privada': {
      title: 'Previdência Privada',
      description: 'Planeje seu futuro financeiro com planos de previdência privada que oferecem segurança e rentabilidade. Ideal para complementar a aposentadoria ou realizar projetos de vida.',
      features: [
        'Planos personalizados conforme seu perfil',
        'Portabilidade entre instituições',
        'Benefícios fiscais (PGBL e VGBL)',
        'Diversas opções de investimento',
        'Flexibilidade para aportes e resgates'
      ],
      coverages: [
        'Renda vitalícia ou temporária',
        'Pensão para dependentes',
        'Cobertura por invalidez',
        'Acumulação programada',
        'Planejamento sucessório',
        'Proteção financeira familiar'
      ],
      imageUrl: '/img/previdencia.png'
    },
    'rc-profissional': {
      title: 'Responsabilidade Civil Profissional',
      description: 'Proteção para profissionais liberais e empresas contra reclamações de terceiros por danos causados durante a prestação de serviços. Essencial para a tranquilidade em sua atuação profissional.',
      features: [
        'Cobertura para erros e omissões',
        'Defesa jurídica especializada',
        'Indenização por danos materiais e morais',
        'Retroatividade para atos anteriores à vigência',
        'Opções setoriais específicas'
      ],
      coverages: [
        'Custos de defesa legal',
        'Indenizações a terceiros',
        'Danos morais relacionados',
        'Infração de propriedade intelectual',
        'Perda de documentos de clientes',
        'Atos de colaboradores e subcontratados'
      ],
      imageUrl: '/img/rc-profissional.png'
    },
    residencial: {
      title: 'Seguro Residencial',
      description: 'Proteção completa para sua casa ou apartamento contra incêndio, roubo, danos elétricos e muito mais. Tenha tranquilidade sabendo que seu lar está protegido contra imprevistos.',
      features: [
        'Assistência 24 horas para emergências',
        'Ampla cobertura para estrutura e conteúdo',
        'Serviços emergenciais inclusos',
        'Opções para casas e apartamentos',
        'Coberturas adicionais personalizáveis'
      ],
      coverages: [
        'Incêndio, raio e explosão',
        'Roubo e furto qualificado',
        'Danos elétricos',
        'Vendaval e granizo',
        'Responsabilidade civil familiar',
        'Quebra de vidros'
      ],
      imageUrl: '/img/hero-home.png'
    },
    vida: {
      title: 'Seguro de Vida',
      description: 'Proteção financeira para você e sua família em momentos difíceis. Garanta tranquilidade aos seus entes queridos e proteja seus projetos de vida com coberturas abrangentes.',
      features: [
        'Contratação simples e rápida',
        'Opções para todas as faixas etárias',
        'Coberturas personalizáveis',
        'Assistências exclusivas em vida',
        'Benefícios fiscais (isenção de imposto de renda)'
      ],
      coverages: [
        'Morte natural e acidental',
        'Invalidez permanente total ou parcial',
        'Doenças graves',
        'Diárias por incapacidade temporária',
        'Assistência funeral familiar',
        'Despesas médico-hospitalares'
      ],
      imageUrl: '/img/vida.png'
    },
    viagem: {
      title: 'Seguro Viagem',
      description: 'Viaje com tranquilidade sabendo que está protegido contra imprevistos médicos, perda de bagagem e outros inconvenientes que podem ocorrer durante sua viagem nacional ou internacional.',
      features: [
        'Contratação online rápida e fácil',
        'Cobertura nacional e internacional',
        'Central de atendimento 24h em português',
        'Reembolso de despesas',
        'Planos para diferentes perfis de viajantes'
      ],
      coverages: [
        'Despesas médicas e hospitalares',
        'Despesas odontológicas emergenciais',
        'Traslado médico e repatriação',
        'Extravio ou perda de bagagem',
        'Cancelamento ou interrupção de viagem',
        'Invalidez permanente por acidente em viagem'
      ],
      imageUrl: '/img/viagem.png'
    }
  };

  // Dados para os produtos
  const products = [
    {
      title: 'Seguro Auto',
      description: 'Proteção completa para seu veículo com coberturas flexíveis para colisão, roubo, furto e responsabilidade civil.',
      icon: '/file.svg',
      link: '/auto',
    },
    {
      title: 'Seguro Residencial',
      description: 'Segurança para sua casa contra incêndio, roubo, danos elétricos e responsabilidade civil, com serviços de assistência 24h.',
      icon: '/window.svg',
      link: '/residencial',
    },
    {
      title: 'Seguro de Vida',
      description: 'Proteção financeira para você e sua família em casos de imprevistos, com coberturas para morte, invalidez e doenças graves.',
      icon: '/file.svg',
      link: '/vida',
    },
    {
      title: 'Seguro Viagem',
      description: 'Tranquilidade em suas viagens com cobertura médica, odontológica, farmacêutica e assistência 24h no Brasil e exterior.',
      icon: '/globe.svg',
      link: '/viagem',
    },
    {
      title: 'Seguro Celular',
      description: 'Proteção contra quebra acidental, roubo e furto qualificado para seu smartphone, com reposição rápida.',
      icon: '/file.svg',
      link: '/celular',
    },
    {
      title: 'Previdência Privada',
      description: 'Planeje seu futuro com planos de previdência adaptados aos seus objetivos, com benefícios tributários e opções de renda.',
      icon: '/file.svg',
      link: '/previdencia-privada',
    },
  ];

  // Dados para os benefícios
  const benefits = [
    {
      icon: '/file.svg',
      title: 'Atendimento Personalizado',
      description: 'Equipe dedicada para entender suas necessidades e oferecer o melhor produto para seu perfil.'
    },
    {
      icon: '/file.svg',
      title: 'Pagamento Flexível',
      description: 'Diversas opções de pagamento para facilitar seu planejamento financeiro.'
    },
    {
      icon: '/file.svg',
      title: 'Cobertura Abrangente',
      description: 'Proteção ampla para diferentes situações, garantindo sua segurança em diversos cenários.'
    },
    {
      icon: '/file.svg',
      title: 'Suporte 24 horas',
      description: 'Assistência disponível todos os dias, a qualquer hora, para ajudar quando você mais precisar.'
    },
    {
      icon: '/file.svg',
      title: 'Processo Simplificado',
      description: 'Contratação e sinistros com processos ágeis e desburocratizados.'
    },
    {
      icon: '/file.svg',
      title: 'Seguradoras Parceiras',
      description: 'Trabalhamos com as principais seguradoras do mercado para oferecer o melhor custo-benefício.'
    },
  ];

  // Dados para o FAQ
  const faqs = [
    {
      question: 'Como funciona o processo de contratação de um seguro?',
      answer: 'O processo é simples! Basta entrar em contato conosco, informar seus dados e necessidades. Nossa equipe fará cotações com as melhores seguradoras e apresentará as opções mais adequadas para seu perfil. Após escolher, cuidamos de toda a documentação.'
    },
    {
      question: 'Quanto tempo leva para um sinistro ser pago?',
      answer: 'O tempo de pagamento varia conforme o tipo de seguro e a complexidade do sinistro. Em geral, após o envio de toda a documentação e aprovação pela seguradora, o pagamento é realizado em até 30 dias. Nossa equipe acompanha todo o processo para garantir agilidade.'
    },
    {
      question: 'É possível personalizar as coberturas do meu seguro?',
      answer: 'Sim! Trabalhamos com planos flexíveis que permitem adicionar ou remover coberturas de acordo com suas necessidades específicas. Durante a cotação, nossa equipe ajudará você a montar um plano ideal para seu perfil.'
    },
    {
      question: 'Quais documentos são necessários para contratar um seguro?',
      answer: 'A documentação básica inclui documento de identidade, CPF, comprovante de residência e, dependendo do tipo de seguro, documentos específicos como CNH (para seguro auto) ou informações do imóvel (para seguro residencial).'
    },
    {
      question: 'Como faço para acionar o seguro em caso de sinistro?',
      answer: 'Em caso de sinistro, entre em contato imediatamente com nossa central de atendimento por telefone ou WhatsApp. Um de nossos consultores irá orientá-lo sobre os procedimentos e documentos necessários para dar entrada no processo junto à seguradora.'
    }
  ];
  return (
    <main className="pt-[72px]">
      <Header />
      <HeroBanner 
        title="Proteção e Tranquilidade para Você e Sua Família"
        subtitle="Encontre o seguro ideal para seu momento de vida e mantenha-se protegido contra imprevistos"
        backgroundImage="/img/hero-car.png"
      />
      <SubMenuNavigation 
        menuItems={menuItems}
        activeItem={activeService}
        onItemChange={setActiveService}
      />
      
      {/* Seção de detalhes do serviço selecionado */}
      {activeService && serviceDetails[activeService] && (
        <ServiceInfo
          serviceId={activeService}
          title={serviceDetails[activeService].title}
          description={serviceDetails[activeService].description}
          features={serviceDetails[activeService].features}
          coverages={serviceDetails[activeService].coverages}
          imageUrl={serviceDetails[activeService].imageUrl}
        />
      )}
      
      {/* <ProductsGrid products={products} /> */}
      <BenefitsSection benefits={benefits} />
      <CtaSection 
        title="Quer saber qual seguro é ideal para você?" 
        subtitle="Fale com nossos consultores e descubra a melhor opção para suas necessidades"
        buttonText="Solicitar Cotação"
      />
      <FaqSection faqs={faqs} />
      <WhatsappButton />
      <Footer />
    </main>
  );
}