import React from 'react';
import Button from '../Button';

function HeaderMobile({ setVisibility }) {
  return (
    <div className="fixed bottom-0 w-full md:hidden">
      <div className="bg-blocks-dark px-8 w-100 h-40 flex flex-col justify-center items-center text-center text-white">
        <div className="flex items-center">
          <p className="text-sm">Fechar </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="ml-2 w-5 h-5"
            onClick={() => setVisibility(false)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        <p className="mb-4 mt-4">
          Não limite sua criatividade, junte-se a familia Blocks por apenas
          {'\u00A0'}
          <strong>BRL 19,99</strong>
        </p>
        <Button primary={true} height="80"></Button>
      </div>
    </div>
  );
}

export default HeaderMobile;
