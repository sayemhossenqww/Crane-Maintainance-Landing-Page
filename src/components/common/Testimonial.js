// src/components/common/Testimonial.js
import React from 'react';

const Testimonial = ({ quote, name, position, company, rating = 5 }) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all h-full">
      <div className="flex items-center mb-6">
        <div className="text-yellow-400 flex">
          {[...Array(5)].map((_, i) => (
            <i key={i} className={`fas fa-star${i >= rating && i < Math.floor(rating) + 1 ? '-half-alt' : ''}`}></i>
          ))}
        </div>
      </div>
      <p className="text-gray-700 mb-6 italic">{quote}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
          <span className="text-blue-600 font-bold">{name.split(' ').map(n => n[0]).join('')}</span>
        </div>
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-gray-600 text-sm">{position}, {company}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;