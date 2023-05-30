import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

const ProductCard = ({ src, title }) => {
  return (
    <div className=" bg-white rounded-3xl border border-gray-200 flex flex-col items-center justify-end">
      <img
        src={src}
        alt={title}
        className="w-full h-44  md:h-48 xl:h-auto object-cover"
      />
      <div className="flex items-center p-4 border w-full bg-gray-100">
        <div className="flex justify-between w-full h-full">
          <p className="text-black text-xs truncate">{title}</p>
          <div className="flex items-center justify-end">
            <div className="border border-gray-300 h-full w-0.5 bg-gray-300 justify-self-end"></div>
            <ArrowRightIcon className="h-5 w-5 ml-2 justify-self-end" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
