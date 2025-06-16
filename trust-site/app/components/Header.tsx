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
	{ href: '/', label: 'Home' },
	{ 
		href: '/grupo-trust', 
		label: 'Grupo Trust',
		submenu: [
			{ href: '/sobre-o-grupo', label: 'Sobre o Grupo' },
			{ href: '/empresas', label: 'Empresas' },
			{ href: '/fundos-de-previdencia', label: 'Fundos de Previdência' },
			{ href: '/responsabilidade-social', label: 'Responsabilidade Social' },
			{ href: '/portfolio', label: 'Portfólio' },
			{ href: '/lgpd', label: 'LGPD' },
		]
	},
	{ 
		href: '/planos-de-saude', 
		label: 'Planos de Saúde',
		submenu: [
			{ href: '/planos-individuais', label: 'Planos Individuais' },
			{ href: '/planos-familiares', label: 'Planos Familiares' },
			{ href: '/planos-empresariais', label: 'Planos Empresariais' },
			{ href: '/coberturas', label: 'Coberturas' },
		]
	},
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
		href: '/para-seu-negocio', 
		label: 'Para seu Negócio',
		submenu: [
			{ href: '/seguro-empresarial', label: 'Seguro Empresarial' },
			{ href: '/responsabilidade-civil', label: 'Responsabilidade Civil' },
			{ href: '/frota', label: 'Frota' },
			{ href: '/vida-empresarial', label: 'Vida Empresarial' },
		]
	},
	{ 
		href: '/para-administradores', 
		label: 'Para Administradores de Imóveis',
		submenu: [
			{ href: '/condominio', label: 'Condomínio' },
			{ href: '/garantia-locaticia', label: 'Garantia Locatícia' },
			{ href: '/danos-fisicos', label: 'Danos Físicos' },
		]
	},
	{ href: '/depoimentos', label: 'Depoimentos' },
];

interface MenuItemProps {
	item: MenuItem;
	isActive: boolean;
}

const MenuItem = ({ item, isActive }: MenuItemProps) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className="relative"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<Link
				href={item.href}
				className={`relative py-2 transition-colors duration-200 ${
					isActive ? 'text-[#ffe6a1] font-semibold' : 'hover:text-[#ffe6a1]'
				}`}
			>
				{item.label}
				{isActive && (
					<span
						className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[3px] w-8 rounded bg-[#cbb278]"
						style={{ content: '' }}
					/>
				)}
			</Link>
			
			{item.submenu && isHovered && (
				<div className="absolute left-0 top-full pt-2 z-50">
					<div className="bg-white rounded-md shadow-lg py-2 min-w-[200px]">
						{item.submenu.map((subItem) => (
							<Link
								key={subItem.href}
								href={subItem.href}
								className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#1082a6] text-sm whitespace-nowrap transition-colors duration-200 border-b border-gray-100 last:border-b-0"
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
		<header className="w-full bg-[#1082a6]">
			{/* Top navigation */}
			<div className="w-full border-b border-white/20">
				<div className="container mx-auto flex justify-end">
					<div className="flex items-center h-8 text-xs gap-6 text-white">
						<Link href="/fale-conosco" className="hover:text-[#ffe6a1]">
							Fale Conosco
						</Link>
					</div>
				</div>
			</div>

			{/* Logo section with borders */}
			<div className="w-full border-t border-b border-white/20">
				<div className="container mx-auto flex justify-center py-4">
					<Link href="/">
						<Image
							src="/img/header.png"
							alt="Trust Seguros"
							width={200}
							height={40}
							priority
							className="h-auto"
						/>
					</Link>
				</div>
			</div>

			{/* Main navigation in separate line */}
			<div className="w-full border-b border-white/20">
				<div className="container mx-auto">
					<nav>
						<div className="flex justify-center gap-8 text-[15px] font-serif text-white py-3">
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
		</header>
	);
};

export default Header;