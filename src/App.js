import Footer from './components/Footer';
import Header from './components/Header';
import HeaderMobile from './components/HeaderMobile';
import LogoContainer from './components/LogoContainer';
import ResultsContainer from './components/ResultsContainer';
import TitleContainer from './components/TitleContainer';
import React, { useState } from 'react';

function App() {
  const [isFooterVisible, setFooterVisible] = useState(true);

  return (
    <div className="w-screen min-h-screen bg-blocks-bg">
      <Header />
      <main className="w-full flex-grow pb-24">
        <LogoContainer />
        <div className="w-full h-px bg-gray-300 shadow"></div>
        <TitleContainer />
        <div className="w-full h-px bg-gray-300 shadow"></div>
        <ResultsContainer />
      </main>
      <Footer adjust={isFooterVisible} />
      {isFooterVisible && <HeaderMobile setVisibility={setFooterVisible} />}
    </div>
  );
}

export default App;
