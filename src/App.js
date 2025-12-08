import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Footer from './components/Footer';
import MarqueeBar from './components/MarqueeBar';
import MarqueeBarBottom from './components/MarqueeBarBottom';
import Collection from './components/Collection';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MarqueeBar />
        <Header />
        <Hero />
        <Collection />
        <Products />
        <About />
        <MarqueeBarBottom />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
