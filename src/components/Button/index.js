import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

function Button({ primary = true, text = 'Quero ser Premium' }) {
  return (
    <button
      className="pr-4 pl-4 h-/4 py-2 rounded text-white transition-all duration-500 ease-in-out"
      style={{
        background:
          'linear-gradient(90deg, rgba(161, 28, 243, 0.6) 0%, rgba(216, 53, 197, 0.6) 100%)',
        transition: 'all ease-in-out 0.5s',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(223, 172, 255, 0.1)';
        e.currentTarget.style.border = '1px solid #D835C5';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background =
          'linear-gradient(90deg, rgba(161, 28, 243, 0.6) 0%, rgba(216, 53, 197, 0.6) 100%)';
        e.currentTarget.style.border = 'none';
      }}
    >
      <div className="pr-4">{text}</div>
      <ArrowRightIcon className="h-5 w-5 ml-2" />
    </button>
  );
}

export default Button;
