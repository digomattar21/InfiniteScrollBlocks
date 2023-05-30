import React from 'react';
import Button from '../Button';

function Header() {
  return (
    <header className="hidden md:block text-center w-100">
      <div className="bg-blocks-dark w-100 h-16 flex justify-center items-center text-white">
        <p className="pr-4">
          Não limite sua criatividade, junte-se a familia Blocks por apenas
          {'\u00A0'}
          <strong>BRL 19,99</strong>
        </p>
        <Button primary={true} height="80"></Button>
      </div>
    </header>
  );
}

export default Header;
