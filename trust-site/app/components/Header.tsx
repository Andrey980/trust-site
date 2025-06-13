'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuLinks = [
	{ href: '/', label: 'Home' },
	{ href: '/grupo-trust', label: 'Grupo Trust' },
	{ href: '/planos-de-saude', label: 'Planos de Saúde' },
	{ href: '/para-voce', label: 'Para Você' },
	{ href: '/para-seu-negocio', label: 'Para seu Negócio' },
	{ href: '/para-administradores', label: 'Para Administradores de Imóveis' },
	{ href: '/depoimentos', label: 'Depoimentos' },
];

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
								<Link
									key={item.href}
									href={item.href}
									className={`relative py-2 transition-colors duration-200 ${
										pathname === item.href
											? 'text-[#ffe6a1] font-semibold'
											: 'hover:text-[#ffe6a1]'
									}`}
									style={{ minWidth: 0 }}
								>
									{item.label}
									{pathname === item.href && (
										<span
											className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[3px] w-8 rounded bg-[#cbb278]"
											style={{ content: '' }}
										/>
									)}
								</Link>
							))}
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;