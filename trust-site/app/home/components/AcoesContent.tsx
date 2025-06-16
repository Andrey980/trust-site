'use client';
// import { useState, useEffect } from 'react';

const quickActions = [
  {
    id: 1,
    label: "Cotação",
    href: "#",
    icon: "🔍" // Placeholder para ícone
  },
  {
    id: 2,
    label: "Consulta Apólice",
    href: "#",
    icon: "📄" // Placeholder para ícone
  },
  {
    id: 3,
    label: "2ª Via Boleto",
    href: "#",
    icon: "📑" // Placeholder para ícone
  },
  {
    id: 4,
    label: "Sinistro",
    href: "#",
    icon: "🚗" // Placeholder para ícone
  },
  {
    id: 5,
    label: "Resgate",
    href: "#",
    icon: "💰" // Placeholder para ícone
  },
  {
    id: 6,
    label: "Minha Rescisão",
    href: "#",
    icon: "📋" // Placeholder para ícone
  }
];

export default function QuickActions() {
  return (
    <section className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
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
              <span className="text-3xl mb-3">{action.icon}</span>
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
