import React from 'react';

function TitleContainer() {
  return (
    <section className="px-4 md:px-20 lg:px-40 w-100 h-24 flex justify-start items-center">
      <div>
        <div className="text-3xl tracking-wider font-bold md:text-3xl">
          Catálogo
        </div>
        <div className="w-1/4 h-1 rounded-md bg-gradient-to-r from-blocks-dark-purple to-blocks-purple"></div>
      </div>
    </section>
  );
}

export default TitleContainer;
