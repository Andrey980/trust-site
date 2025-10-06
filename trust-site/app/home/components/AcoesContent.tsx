'use client';
// import { useState, useEffect } from 'react';

const quickActions = [
  {
    id: 1,
    label: "Cotação",
    href: "https://wa.me/5511933372957?text=Ol%C3%A1%21%20Eu%20gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o.",
    icon: (
      <svg className="w-8 h-8 text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  },
  {
    id: 2,
    label: "Consulta Apólice",
    href: "https://wa.me/5511933372957?text=Ol%C3%A1%21%20Eu%20gostaria%20de%20consultar%20minha%20ap%C3%B3lice.",
    icon: (
      <svg className="w-8 h-8 text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    id: 3,
    label: "2ª Via Boleto",
    href: "https://wa.me/5511933372957?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20a%202%C2%AA%20via%20dos%20meus%20boletos",
    icon: (
      <svg className="w-8 h-8 text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 4,
    label: "Sinistro",
    href: "#",
    icon: (
      <svg className="w-8 h-8 text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    )
  },
  {
    id: 5,
    label: "Resgate",
    href: "#",
    icon: (
      <svg className="w-8 h-8 text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    id: 6,
    label: "Minha Renovação",
    href: "#",
    icon: (
      <svg className="w-8 h-8 text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  }
];

export default function QuickActions() {
  return (
    <section 
      className="w-full bg-gray-50 py-16 px-4 relative"
      style={{
        backgroundImage: 'url(/img/textura.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay para melhorar legibilidade */}
      <div className="absolute inset-0 bg-white/80"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-light text-[#50A3C5] mb-12 text-center">
          Como Podemos Te Ajudar?
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {quickActions.map((action) => (
            <a
              key={action.id}
              href={action.href}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="mb-3 p-3 bg-gradient-to-br from-[#1082a6] to-[#0a6b8a] rounded-full">
                {action.icon}
              </div>
              <span className="text-[#1082a6] font-medium text-sm md:text-base text-center group-hover:text-[#50A3C5] transition-colors">
                {action.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
