// src/components/common/FAQItem.js
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6 border-b border-gray-200 pb-6">
      <button 
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-xl font-bold text-gray-800">{question}</h3>
        <ChevronDown 
          className={`text-blue-600 transition-transform transform ${isOpen ? 'rotate-180' : ''}`} 
          size={20}
        />
      </button>
      <div className={`mt-4 ${isOpen ? 'block' : 'hidden'}`}>
        <p className="text-gray-600">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FAQItem;