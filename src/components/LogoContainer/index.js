import React from 'react';

function LogoContainer() {
  return (
    <section className="w-100 h-24 flex justify-center items-center fill from-blocks-dark-purple to-blocks-purple">
      <img src="./logo_web.png" alt="Large Logo" className="hidden md:block " />
      <img
        src="./logo_mobile.png"
        alt="Small Logo"
        className="block md:hidden"
      />
    </section>
  );
}

export default LogoContainer;
