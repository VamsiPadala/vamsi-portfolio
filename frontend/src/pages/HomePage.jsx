import React from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <div className="flex-grow">
        <Home />
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
