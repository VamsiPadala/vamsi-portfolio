import React from 'react';
import About from '../components/About';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <div className="flex-grow">
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
