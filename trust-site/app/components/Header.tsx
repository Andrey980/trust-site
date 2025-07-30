'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface SubMenuItem {
  href: string;
  label: string;
}

interface MenuItem {
  href: string;
  label: string;
  submenu?: SubMenuItem[];
}

const menuLinks: MenuItem[] = [
  { href: '/home', label: 'Home' },
  { 
    href: '/para-voce', 
    label: 'Para Você',
    submenu: [
      { href: '/para-voce/#auto', label: 'Auto' },
      { href: '/para-voce/#bike', label: 'Bike' },
      { href: '/para-voce/#celular', label: 'Celular' },
      { href: '/consorcio', label: 'Consórcio' },
      { href: '/portateis', label: 'Equipamentos Portáteis' },
      { href: '/odonto', label: 'Odontológico' },
      { href: '/previdencia-privada', label: 'Previdência Privada' },
      { href: '/rc-profissional', label: 'Responsabilidade Civil Profissional' },
      { href: '/residencial', label: 'Residencial' },
      { href: '/vida', label: 'Vida' },
      { href: '/viagem', label: 'Viagem' },

    ]
  },
  { 
    href: '/para-sua-empresa', 
    label: 'Para Sua Empresa',
    submenu: [
    { href: '/celular', label: 'Celular' },
    { href: '/consorcio', label: 'Consorcio' },
    { href: '/D&O', label: 'D&O' },
    { href: '/portateis', label: 'Equipamentos Portateis' },
    { href: '/frota', label: 'Frota' },
    { href: '/plano-saude', label: 'Plano de Saúde' },
    { href: '/responsabilidade-civil', label: 'Responsabilidade Civil' },
    { href: '/seguro-empresarial', label: 'Seguro Empresarial' },
    { href: '/seguro-garantia', label: 'Seguro Garantia' },
    { href: '/vida-empresarial', label: 'Vida Empresarial' },
    ]
  },
  { 
    href: '/garantias', 
    label: 'Garantias',
    submenu: [
      { href: '/seguro-fiança', label: 'Seguro Fiança' },
      { href: '/titulo-capitalizacao', label: 'Titulo Capitalização' },
    ]
  },
  // { 
  //   href: '/atendimento', 
  //   label: 'Atendimento',
  //   submenu: [
  //     { href: '/abrir-sinistro', label: 'Abrir um Sinistro' },
  //     { href: '/como-funciona', label: 'Como Funciona' },
  //   ]
  // },
  { 
    href: '/seja-parceiro', 
    label: 'Seja Parceiro',
    submenu: [
      { href: '/admnistrador', label: 'Admnistrador' },
      { href: '/corretor-autonomo', label: 'Corretor Autônomo' },
      { href: '/imobiliaria', label: 'Imobiliaria' },
    ]
  },
  { href: '/sobre', label: 'Sobre Nós' },
  { href: '/atendimento', label: 'Atendimento' },
];

interface MenuItemProps {
  item: MenuItem;
  isActive: boolean;
}

const MenuItem = ({ item, isActive }: MenuItemProps) => {
  // const [isHovered, setIsHovered] = useState(false);
  const isAtendimento = item.label === 'Atendimento';

  return (
    <div
      className="relative lg:py-8 h-full flex align-center justify-center group"
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={item.href}        className={`relative ${
          isAtendimento            ? 'px-2 py-2 rounded-md bg-[#eee] text-[#1082a6] hover:bg-[#b3dffd] hover:text-[#1082a6] transition font-normal'
            : `py-2 transition-colors duration-200 ${
                isActive ? 'text-[#fff] font-normal' : 'hover:text-[#fff] font-normal'
              }`
        }`}
      >
        {item.label}
        {isActive && !isAtendimento && (
          <span
            className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[3px] w-8 rounded bg-[#b3dfeb]"
            style={{ content: '' }}
          />
        )}
      </Link>
      
      {/* {item.submenu && isHovered && (
        <div className="absolute left-0 top-26 pt-2 z-50 bg-[#1082a6]">
          <div className="bg-white shadow-lg min-w-[100px] border">
            {item.submenu.map((subItem: SubMenuItem) => (
              <Link
                key={subItem.href}
                href={subItem.href}
                className="block text-xs tracking-wide px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-[#1082a6] text-sm whitespace-nowrap transition-colors duration-200 border-b border-gray-300 font-normal last:border-b-0"
              >
                {subItem.label}
              </Link>
            ))}
          </div>
        </div>
      )} */}
    </div>
  );
};

const MobileMenuItem = ({ item, onClose }: { item: MenuItem; onClose: () => void }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200">
      <div className="flex items-center justify-between">
        <Link
          href={item.submenu ? '#' : item.href}
          onClick={(e) => {
            if (item.submenu) {
              e.preventDefault();
              setIsSubmenuOpen(!isSubmenuOpen);
            } else {
              onClose();
            }
          }}
          className="flex-1 px-4 py-3 text-gray-700"
        >
          {item.label}
        </Link>
        {item.submenu && (
          <button
            onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
            className="px-4 py-3 text-gray-400"
            aria-label="Toggle submenu"
          >
            <svg
              className={`w-4 h-4 transform transition-transform ${
                isSubmenuOpen ? 'rotate-180' : ''
              }`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        )}
      </div>
      {item.submenu && isSubmenuOpen && (
        <div className="bg-gray-50">
          {item.submenu.map((subItem) => (
            <Link
              key={subItem.href}
              href={subItem.href}
              onClick={onClose}
              className="block px-8 py-3 text-sm text-gray-600 hover:bg-gray-100"
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-2 w-full bg-[#1082a6] shadow-md">
      <div className="w-full">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-end">
            {/* Logo */}
            <Link href="/" className="py-4">
              <Image
                src="/img/header.png"
                alt="Trust Seguros"
                width={200}
                height={40}
                priority
                className="h-auto w-auto max-w-[150px] md:max-w-[200px]"
              />
            </Link>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white"
              aria-label="Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex lg:justify-end flex-1">
              <div className="flex lg: justify-end gap-10 text-[15px] text-white font-normal tracking-wide">
                {menuLinks.map((item) => (
                  <MenuItem
                    key={item.href}
                    item={item}
                    isActive={pathname === item.href}
                  />
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-white ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <nav className="border-t border-gray-200">
          {menuLinks.map((item, index) => (
            <MobileMenuItem
              key={index}
              item={item}
              onClose={() => setIsMobileMenuOpen(false)}
            />
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;