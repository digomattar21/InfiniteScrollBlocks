import React from 'react';

function Footer({ adjust }) {
  return (
    <footer
      className={`fixed ${
        adjust ? 'bottom-40' : 'bottom-0'
      } md:bottom-0 inset-x-0 bg-gray-200 text-center p-4 md:flex md:justify-center md:items-center`}
    >
      <div className="mb-4 mx-4 md:mb-0">
        <p className="text-sm text-blocks-text-gray">Sobre</p>
      </div>
      <div className="mb-4 mx-4 md:mb-0">
        <h1 className="text-sm text-blocks-text-gray">FAQ</h1>
      </div>
      <div className="mb-4 mx-4 md:mb-0">
        <p className="text-sm text-blocks-text-gray">Termos de uso</p>
      </div>
      <div className="mb-0 mx-4 md:mb-0">
        <p className="text-sm text-blocks-text-gray">Politica de privacidade</p>
      </div>
    </footer>
  );
}

export default Footer;
