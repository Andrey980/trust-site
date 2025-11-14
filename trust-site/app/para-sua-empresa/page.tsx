'use client';
import { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import WhatsappButton from '../components/WhatsappButton';

// Importando os componentes específicos da página
import HeroBanner from './components/HeroBanner';
import SubMenuNavigation from './components/SubMenuNavigation';
import ServiceInfo from './components/ServiceInfo';
import BenefitsSection from './components/BenefitsSection';
import FaqSection from './components/FaqSection';
import CtaSection from './components/CtaSection';
import ScrollToTop from '../components/ScrollToTop';

// Interface para os detalhes do serviço
interface ServiceDetail {
  title: string;
  description: string;
  features: string[];
  coverages: string[];
  imageUrl: string;
  ctaLink: string;
}

// Interface para o objeto serviceDetails
interface ServiceDetails {
  [key: string]: ServiceDetail;
}

export default function ParaSuaEmpresaPage() {
  // Estado para controlar qual serviço está ativo
  const [activeService, setActiveService] = useState('seguro-empresarial');
  
  // Hook para detectar hash na URL e ativar o serviço correspondente
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && hash !== activeService) {
      setActiveService(hash);
      // Scroll suave para a seção após um pequeno delay
      setTimeout(() => {
        const element = document.getElementById('service-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
    // Definindo os submenus para empresa conforme especificado
  const menuItems = [
    { id: 'celular', label: 'Celular' },
    { id: 'consorcio', label: 'Consorcio' },
    { id: 'deo', label: 'D&O' },
    { id: 'portateis', label: 'Equipamentos Portateis' },
    { id: 'frota', label: 'Frota' },
    { id: 'plano-saude', label: 'Plano de Saúde' },
    { id: 'responsabilidade-civil', label: 'Responsabilidade Civil' },
    { id: 'seguro-empresarial', label: 'Seguro Empresarial' },
    { id: 'seguro-garantia', label: 'Seguro Garantia' },
    { id: 'vida-empresarial', label: 'Vida Empresarial' }
  ];
    // Dados detalhados para cada serviço
  const serviceDetails: ServiceDetails = {
    'celular': {
      title: 'Seguro Celular Corporativo',
      description: 'Proteção para os aparelhos celulares da sua empresa contra quebra acidental, roubo e furto qualificado. Mantenha seus colaboradores conectados com tranquilidade.',
      features: [
        'Cobertura para frotas de celulares',
        'Processo simplificado de sinistro',
        'Reposição rápida de aparelhos',
        'Proteção para celulares de alto valor',
        'Gestão centralizada da apólice'
      ],
      coverages: [
        'Quebra acidental',
        'Roubo e furto qualificado',
        'Danos por líquidos',
        'Oxidação',
        'Acessórios originais',
        'Perda total'
      ],
      imageUrl: '/img/celular.png',
      ctaLink: 'https://trust.aggilizador.com.br/several'
    },
    'consorcio': {
      title: 'Consórcio Empresarial',
      description: 'Planejamento financeiro inteligente para aquisição de bens e serviços para sua empresa, com parcelas que cabem no orçamento e sem juros. Uma alternativa econômica ao financiamento tradicional.',
      features: [
        'Sem juros, apenas taxa administrativa',
        'Possibilidade de lance para contemplação antecipada',
        'Diversos grupos disponíveis para empresas',
        'Flexibilidade na escolha do bem após contemplação'
      ],
      coverages: [
        'Frotas de veículos',
        'Imóveis comerciais',
        'Reformas e ampliações',
      ],
      imageUrl: '/img/consorcio.png',
      ctaLink: 'https://wa.me/5511933372957?text=Ol%C3%A1%21%20Gostaria%20de%20cotar%20um%20cons%C3%B3rcio.%20Pode%20me%20ajudar%3F'
    },
    'deo': {
      title: 'Seguro D&O (Directors & Officers)',
      description: 'Proteção para executivos e diretores contra processos decorrentes de suas decisões de gestão. Essencial para a tranquilidade dos tomadores de decisão da sua empresa.',
      features: [
        'Cobertura para decisões administrativas',
        'Defesa jurídica especializada',
        'Extensão para conselheiros e gerentes',
        'Opções de retroatividade',
        'Coberturas para diferentes portes de empresas'
      ],
      coverages: [
        'Defesa jurídica',
        'Indenizações a terceiros',
        'Custos de investigações',
        'Bloqueio de bens',
        'Danos à imagem',
        'Processos trabalhistas contra gestores'
      ],
      imageUrl: '/img/rc-profissional.png',
      ctaLink: '/atendimento'
    },
    'portateis': {
      title: 'Equipamentos Portáteis Empresariais',
      description: 'Proteção para os equipamentos portáteis da sua empresa como notebooks, tablets, projetores e outros dispositivos essenciais para o trabalho de sua equipe.',
      features: [
        'Proteção nacional e internacional',
        'Reposição por equipamentos novos',
        'Gestão simplificada de múltiplos equipamentos',
        'Opções para toda a estrutura tecnológica'
      ],
      coverages: [
        'Roubo e furto qualificado',
        'Quebra acidental',
        'Danos elétricos',
        'Danos por líquidos',
        'Perda total'
      ],
      imageUrl: '/img/equipamentos.png',
      ctaLink: 'https://trust.aggilizador.com.br/several'
    },
    'frota': {
      title: 'Seguro de Frota',
      description: 'Solução completa para proteger todos os veículos da sua empresa, garantindo economia em escala e gestão simplificada. Mantemos sua frota segura e seus negócios em movimento.',
      features: [
        'Gestão centralizada de apólices',
        'Custo otimizado pelo volume de veículos',
        'Assistência 24h em todo território nacional',
        'Processos simplificados de sinistros',
        'Plataforma para gerenciamento da frota'
      ],
      coverages: [
        'Colisão, incêndio, roubo e furto',
        'Responsabilidade civil contra terceiros',
        'Danos materiais e corporais',
        'Proteção para motoristas',
        'Cobertura para vidros e acessórios',
        'Assistência para veículos de carga'
      ],
      imageUrl: '/img/hero-car.png',
      ctaLink: 'https://trust.aggilizador.com.br/auto'
    },
    'plano-saude': {
      title: 'Plano de Saúde Empresarial',
      description: 'Ofereça aos seus colaboradores acesso à saúde de qualidade com planos empresariais que cabem no orçamento da sua empresa. Um benefício essencial para atrair e reter talentos.',
      features: [
        'Opções personalizadas por porte da empresa',
        'Ampla rede de atendimento nacional',
        'Planos modulares conforme necessidade',
        'Gestão eficiente de benefícios',
        'Medicina preventiva e ocupacional'
      ],
      coverages: [
        'Consultas médicas em diversas especialidades',
        'Exames diagnósticos e laboratoriais',
        'Internações hospitalares',
        'Procedimentos cirúrgicos',
        'Atendimento de urgência e emergência',
        'Serviços de telemedicina'
      ],
      imageUrl: '/img/plano-de-saude.png',
      ctaLink: '/atendimento'
    },
    'responsabilidade-civil': {
      title: 'Seguro de Responsabilidade Civil',
      description: 'Proteja seu negócio contra reclamações de terceiros por danos causados em suas operações. Cobertura essencial para qualquer empresa que busca segurança jurídica e financeira.',
      features: [
        'Proteção para diferentes tipos de operações',
        'Coberturas específicas por setor de atividade',
        'Defesa jurídica especializada',
        'Cobertura para danos materiais e corporais',
        'Opções para profissionais liberais e empresas'
      ],
      coverages: [
        'Operações comerciais e industriais',
        'Danos a terceiros em estabelecimentos',
      ],
      imageUrl: '/img/rc-profissional.png',
      ctaLink: '/atendimento'
    },
    'seguro-empresarial': {
      title: 'Seguro Empresarial',
      description: 'Proteção completa para seu estabelecimento comercial ou industrial, incluindo coberturas para incêndio, roubo, danos elétricos e muito mais. Garanta a continuidade do seu negócio mesmo diante de imprevistos.',
      features: [
        'Análise personalizada de risco para seu negócio',
        'Coberturas flexíveis conforme o setor de atuação',
        'Assistência 24h para emergências empresariais',
        'Opções para pequenas, médias e grandes empresas',
        'Proteção específica para equipamentos e maquinário'
      ],
      coverages: [
        'Incêndio, raio e explosão',
        'Danos elétricos',
        'Roubo e furto qualificado',
        'Vendaval e danos na estrutura',
        'Lucros cessantes',
        'Responsabilidade civil operações'
      ],
      imageUrl: '/img/residencial.png',
      ctaLink: '/atendimento'
    },
    'seguro-garantia': {
      title: 'Seguro Garantia',
      description: 'Garanta o cumprimento de obrigações contratuais entre empresas ou com órgãos públicos. Essencial para participação em licitações e contratos relevantes.',
      features: [
        'Modalidades para licitação e contratos',
        'Cobertura para diferentes obrigações',
        'Alternativa ao depósito caução',
        'Facilita acesso a contratos importantes',
        'Análise personalizada para cada contrato'
      ],
      coverages: [
        'Garantia de proposta (bid bond)',
        'Garantia de execução (performance bond)',
        'Garantia de adiantamento (advance payment)',
        'Garantia judicial',
        'Garantia de retenção de pagamentos',
        'Garantia aduaneira'
      ],
      imageUrl: '/img/condominio.png',
      ctaLink: '/atendimento'
    },
    'vida-empresarial': {
      title: 'Vida Empresarial',
      description: 'Ofereça proteção e tranquilidade aos seus colaboradores e suas famílias com um seguro de vida corporativo. Um benefício de alto valor agregado e custo acessível para empresas.',
      features: [
        'Taxas reduzidas por contratação coletiva',
        'Opções modulares de coberturas',
        'Processos simplificados de adesão',
        'Gestão facilitada da apólice',
        'Possibilidade de coberturas diferenciadas por cargo'
      ],
      coverages: [
        'Morte natural ou acidental',
        'Invalidez permanente total ou parcial',
        'Doenças graves',
        'Assistência funeral familiar',
        'Despesas médicas hospitalares',
        'Diárias por incapacidade temporária'
      ],
      imageUrl: '/img/vida.png',
      ctaLink: 'https://trust.aggilizador.com.br/life'
    }
  };

  // Dados para os benefícios
  const benefits = [
    {
      icon: '/file.svg',
      title: 'Consultoria Especializada',
      description: 'Equipe exclusiva para empresas, que entende as necessidades específicas do seu negócio e setor de atuação.'
    },
    {
      icon: '/file.svg',
      title: 'Negociação Corporativa',
      description: 'Poder de negociação junto às seguradoras para obter condições diferenciadas e exclusivas para sua empresa.'
    },
    {
      icon: '/file.svg',
      title: 'Gestão Centralizada',
      description: 'Sistema único para gerenciar todas as suas apólices, sinistros e renovações, simplificando processos.'
    },
    {
      icon: '/file.svg',
      title: 'Análise de Riscos',
      description: 'Mapeamento detalhado dos riscos específicos do seu negócio para desenvolver a estratégia de proteção ideal.'
    },
    {
      icon: '/file.svg',
      title: 'Assistência em Sinistros',
      description: 'Acompanhamento personalizado em caso de sinistros, agilizando o processo de regulação e pagamento.'
    },
    {
      icon: '/file.svg',
      title: 'Treinamentos Corporativos',
      description: 'Capacitação para sua equipe sobre benefícios, coberturas e procedimentos em caso de sinistros.'
    },
  ];

  // Dados para o FAQ
  const faqs = [
    {
      question: 'Qual o tamanho mínimo da empresa para contratar seguros empresariais?',
      answer: 'Não existe um tamanho mínimo. Temos soluções desde MEIs e pequenos negócios até grandes corporações. O importante é adequar as coberturas às necessidades específicas e ao porte da sua empresa.'
    },
    {
      question: 'Como funciona a contratação de seguro para frota de veículos?',
      answer: 'O processo é simplificado. Você fornece os dados dos veículos (modelo, ano, placa), e nossa equipe elabora uma proposta personalizada com opções de coberturas. A gestão é centralizada, com uma única apólice para todos os veículos, facilitando renovações e sinistros.'
    },
    {
      question: 'Quais são as vantagens de oferecer plano de saúde empresarial?',
      answer: 'Além de ser um importante benefício para atrair e reter talentos, o plano de saúde empresarial oferece custos menores que os planos individuais, benefícios fiscais para a empresa, redução do absenteísmo e aumento da produtividade dos colaboradores.'
    },
    {
      question: 'É possível personalizar as coberturas do seguro empresarial?',
      answer: 'Sim. Todos os nossos seguros empresariais são customizáveis. Após uma análise detalhada do seu negócio, recomendamos as coberturas essenciais e as opcionais que melhor se adequam ao seu perfil de risco e orçamento.'
    },
    {
      question: 'Como funciona o processo em caso de sinistro empresarial?',
      answer: 'Nossa equipe oferece suporte completo. Em caso de sinistro, basta entrar em contato com seu gerente dedicado que orientará sobre a documentação necessária e acompanhará todo o processo junto à seguradora, desde a abertura até a liquidação do sinistro.'
    }
  ];
  return (
    <main className="pt-[72px]">
      <Header />
      <HeroBanner 
        title="Proteção Completa para o Sucesso do Seu Negócio"
        subtitle="Soluções corporativas personalizadas que protegem seu patrimônio, colaboradores e operações"
        backgroundImage="/img/hero-car.png"
      />
      <SubMenuNavigation 
        menuItems={menuItems}
        activeItem={activeService}
        onItemChange={setActiveService}
      />
      
      {/* Seção de detalhes do serviço selecionado */}
      <div id="service-section">
        {activeService && serviceDetails[activeService] && (
          <ServiceInfo
          serviceId={activeService}
          title={serviceDetails[activeService].title}
          description={serviceDetails[activeService].description}
          features={serviceDetails[activeService].features}
          coverages={serviceDetails[activeService].coverages}
          imageUrl={serviceDetails[activeService].imageUrl}
          ctaLink={serviceDetails[activeService].ctaLink}
        />
        )}
      </div>
      
      <BenefitsSection benefits={benefits} />
      <CtaSection 
        title="Quer fortalecer a segurança do seu negócio?" 
        subtitle="Fale com nossos consultores empresariais e descubra soluções personalizadas para sua empresa"
        buttonText="Solicitar Cotação"
      />
      <FaqSection faqs={faqs} />
      <WhatsappButton />
      <ScrollToTop />
      <Footer />
    </main>
  );
}