'use client';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, icon, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 flex items-center justify-center bg-[#1082a6]/10 rounded-full mr-4">
          <Image
            src={icon}
            alt={title}
            width={24}
            height={24}
            className="object-contain"
          />
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4 text-sm">{description}</p>
      <Link 
        href={link}
        className="text-[#1082a6] hover:text-[#1082c9] font-medium text-sm inline-flex items-center"
      >
        Saiba mais
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </Link>
    </div>
  );
};

interface ProductsGridProps {
  products: ProductCardProps[];
}

const ProductsGrid: React.FC<ProductsGridProps> = ({ products }) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">Nossos Seguros</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            description={product.description}
            icon={product.icon}
            link={product.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
