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
      { href: '/seguro-auto', label: 'Seguro Auto' },
      { href: '/seguro-residencial', label: 'Seguro Residencial' },
      { href: '/seguro-vida', label: 'Seguro de Vida' },
      { href: '/previdencia-privada', label: 'Previdência Privada' },
    ]
  },
  { 
    href: '/para-sua-empresa', 
    label: 'Para Sua Empresa',
    submenu: [
      { href: '/seguro-empresarial', label: 'Seguro Empresarial' },
      { href: '/responsabilidade-civil', label: 'Responsabilidade Civil' },
      { href: '/frota', label: 'Frota' },
      { href: '/vida-empresarial', label: 'Vida Empresarial' },
    ]
  },
  { 
    href: '/sinistro', 
    label: 'Sinistro',
    submenu: [
      { href: '/condominio', label: 'Condomínio' },
      { href: '/garantia-locaticia', label: 'Garantia Locatícia' },
      { href: '/danos-fisicos', label: 'Danos Físicos' },
    ]
  },
  { 
    href: '/seja-parceiro', 
    label: 'Seja Parceiro',
    submenu: [
      { href: '/condominio', label: 'Condomínio' },
      { href: '/garantia-locaticia', label: 'Garantia Locatícia' },
      { href: '/danos-fisicos', label: 'Danos Físicos' },
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
  const [isHovered, setIsHovered] = useState(false);
  const isAtendimento = item.label === 'Atendimento';

  return (
    <div
      className="relative h-full flex align-center justify-center group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={item.href}        className={`relative ${
          isAtendimento            ? 'px-3 py-1 rounded-md bg-[#eee] text-[#1082a6] hover:bg-[#b3dffd] hover:text-[#1082a6] transition font-normal'
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
      
      {item.submenu && isHovered && (
        <div className="absolute left-0 top-9 pt-2 z-50 bg-[#1082a6]">
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
      )}
    </div>
  );
};

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-2 w-full bg-[#1082a6] shadow-md">
      {/* Main header with logo and navigation */}
      <div className="w-full">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="py-4">
              <Image
                src="/img/header.png"
                alt="Trust Seguros"
                width={200}
                height={40}
                priority
                className="h-auto"
              />
            </Link>

            {/* Main navigation */}
            <nav className="flex-1 ml-12">
              <div className="flex justify-end gap-10 text-[15px] text-white font-normal tracking-wide">
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
    </header>
  );
};

export default Header;