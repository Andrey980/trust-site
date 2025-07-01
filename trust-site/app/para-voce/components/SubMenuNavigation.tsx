'use client';

import { title } from "process";

// import { useState, useEffect } from 'react';

interface SubMenuItem {
  id: string;
  label: string;
}

interface SubMenuNavigationProps {
  menuItems: SubMenuItem[];
  activeItem: string;
  onItemChange: (id: string) => void;
}

const SubMenuNavigation: React.FC<SubMenuNavigationProps> = ({ 
  menuItems, 
  activeItem,
  onItemChange 
}) => {
  // Função para lidar com o clique no item do menu
  const handleItemClick = (id: string) => {
    onItemChange(id);
    
    // Rolar suavemente para a seção correta
    const element = document.getElementById(id);
    if (element) {
      // Ajuste para considerar o header fixo
      const headerOffset = 120; // Altura do header + algum padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <div className="top-[72px] bg-white shadow-md z-10">
      <div className="container mx-auto px-4">
        <div className="overflow-x-auto">
          <nav className="flex space-x-1 py-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`whitespace-nowrap px-4 py-2 cursor-pointer text-sm font-medium rounded-md transition-colors duration-200 ${
                  activeItem === item.id
                    ? 'bg-[#1082a6] text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SubMenuNavigation;