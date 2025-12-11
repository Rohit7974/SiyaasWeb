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
import Info from './components/Info';
import ReelProducts from './components/ReelProducts';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MarqueeBar />
        <Header />
        <Hero />
        <ReelProducts />
        <Collection />
        <Products />
        <About />
        <MarqueeBarBottom />
        <Info />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
