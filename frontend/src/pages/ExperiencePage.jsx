import React from 'react';
import Experience from '../components/Experience';
import Footer from '../components/Footer';

const ExperiencePage = () => {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <div className="flex-grow">
        <Experience />
      </div>
      <Footer />
    </div>
  );
};

export default ExperiencePage;
