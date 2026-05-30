import React from 'react';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <div className="flex-grow">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
