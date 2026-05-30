import React from 'react';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

const SkillsPage = () => {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <div className="flex-grow">
        <Skills />
      </div>
      <Footer />
    </div>
  );
};

export default SkillsPage;
