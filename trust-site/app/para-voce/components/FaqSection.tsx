'use client';
import { useState } from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: FaqItemProps[];
}

const FaqSection: React.FC<FaqSectionProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <div className="mx-auto px-4 py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Perguntas Frequentes</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Tire suas dúvidas sobre nossos serviços e seguros
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 last:border-b-0">
            <button
              className="w-full text-left py-4 px-0 flex cursor-pointer justify-between items-center focus:outline-none"
              onClick={() => toggleFaq(index)}
            >
              <span className="font-medium text-gray-800">{faq.question}</span>
              <span className="text-gray-500">
                {openIndex === index ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                )}
              </span>
            </button>
            {openIndex === index && (
              <div className="pb-4 text-gray-600">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
