'use client';
import Link from 'next/link';

const socialLinks = [
	{
		name: 'Facebook',
		href: 'https://www.facebook.com/share/1BhCFJ36zJ/',
		icon: (
			<svg
				className="w-6 h-6 fill-current"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
			</svg>
		),
	},
	{
		name: 'LinkedIn',
		href: 'https://www.linkedin.com/company/trust-insurance-broker/',
		icon: (
			<svg
				className="w-6 h-6 fill-current"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
			</svg>
		),
	},
	{
		name: 'Instagram',
		href: 'https://instagram.com/trustseguros',
		icon: (
			<svg
				className="w-6 h-6 fill-current"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.897 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.897-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
			</svg>
		),
	},
];

const footerLinks = {
	sobre: {
		title: 'SOBRE',
		links: [
			{ text: 'Para Você', href: '/para-voce' },
			{ text: 'Para sua Empresa', href: '/para-sua-empresa' },
			{ text: 'Sinistro', href: '/sinistro' },
			{ text: 'Seja Parceiro', href: '/seja-parceiro' },
			{ text: 'Sobre Nós', href: '/sobre' },
		],
	},
	relacionamento: {
		title: 'RELACIONAMENTO',
		links: [
			{ text: 'Trabalhe Conosco', href: '/trabalhe-conosco' },
			{ text: 'LGPD', href: '/lgpd' },
		],
		contato: {
			telefone: '+55 11 933372957',
			// email: 'faleconosco@trust.com.br',
		},
	},
};

export default function Footer() {
	return (
		<footer className="relative w-full bg-[#1082a6] overflow-hidden">
			{/* Elementos decorativos de fundo */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
				<div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
				<div className="absolute top-1/2 left-1/3 w-16 h-16 border border-white/20 rounded-full"></div>
				<div className="absolute bottom-10 left-1/4 w-20 h-20 border border-white/20 rounded-full"></div>
			</div>
			
			{/* Gradiente superior */}
			<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
			
			<div className="relative z-10 pt-20 pb-10 px-4 text-white">
				<div className="max-w-7xl mx-auto">
					{/* Logo/Brand area */}
					<div className="mb-12 text-center">
						<div className="inline-flex items-center space-x-3">
							<div className="w-12 h-12 bg-gradient-to-br from-[#ffe6a1] to-[#ffcc66] rounded-lg flex items-center justify-center">
								<span className="text-[#1082a6] font-bold text-xl">T</span>
							</div>
							<div>
								<h2 className="text-2xl font-bold text-white">Trust Seguros</h2>
								<p className="text-white/80 text-sm">Proteção que você pode confiar</p>
							</div>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-12 pl-16">
						{/* Seção Sobre */}
						<div className="md:col-span-1">
							<div className="relative">
								<h3 className="text-white font-semibold text-lg mb-6 relative">
									{footerLinks.sobre.title}
									<div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#ffe6a1] to-transparent"></div>
								</h3>
								<ul className="space-y-3">
									{footerLinks.sobre.links.map((link) => (
										<li key={link.href}>
											<Link
												href={link.href}
												className="group flex items-center text-white/90 hover:text-[#ffe6a1] transition-all duration-300"
											>
												<span className="w-1.5 h-1.5 bg-white/40 rounded-full mr-3 group-hover:bg-[#ffe6a1] transition-colors"></span>
												{link.text}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>

						{/* Seção Relacionamento e Redes Sociais */}
						<div className="md:col-span-2">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								{/* Relacionamento */}
								<div className="relative">
									<h3 className="text-white font-semibold text-lg mb-6 relative">
										{footerLinks.relacionamento.title}
										<div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#ffe6a1] to-transparent"></div>
									</h3>
									<ul className="space-y-3">
										{footerLinks.relacionamento.links.map((link) => (
											<li key={link.href}>
												<Link
													href={link.href}
													className="group flex items-center text-white/90 hover:text-[#ffe6a1] transition-all duration-300"
												>
													<span className="w-1.5 h-1.5 bg-white/40 rounded-full mr-3 group-hover:bg-[#ffe6a1] transition-colors"></span>
													{link.text}
												</Link>
											</li>
										))}
										<li className="pt-4">
											<div className="flex items-center text-white/90">
												<svg className="w-4 h-4 mr-3 text-[#ffe6a1]" fill="currentColor" viewBox="0 0 20 20">
													<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
												</svg>
												<span>{footerLinks.relacionamento.contato.telefone}</span>
											</div>
										</li>
									</ul>
								</div>

								{/* Redes Sociais */}
								<div className="relative">
									<h3 className="text-white font-semibold text-lg mb-6 relative">
										REDES SOCIAIS
										<div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#ffe6a1] to-transparent"></div>
									</h3>
									<div className="flex space-x-4">
										{socialLinks.map((social) => (
											<a
												key={social.name}
												href={social.href}
												target="_blank"
												rel="noopener noreferrer"
												className="group relative p-3 bg-white/10 rounded-xl hover:bg-[#ffe6a1]/20 transition-all duration-300 hover:scale-110"
												aria-label={social.name}
											>
												<div className="text-white/90 group-hover:text-[#ffe6a1] transition-colors">
													{social.icon}
												</div>
												<div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
													{social.name}
												</div>
											</a>
										))}
									</div>
									<p className="text-white/70 text-sm mt-4">
										Siga-nos para dicas e novidades sobre seguros
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Copyright */}
					<div className="mt-16 pt-8 border-t border-white/10 text-center relative">
						<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-px bg-gradient-to-r from-transparent via-[#ffe6a1] to-transparent"></div>
						<p className="text-white/80 text-sm">
							© {new Date().getFullYear()} Trust Seguros. Todos os direitos reservados.
						</p>
						<p className="text-white/60 text-xs mt-2">
							Desenvolvido com tecnologia e segurança para sua proteção
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
