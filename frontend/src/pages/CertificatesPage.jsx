import React from 'react';
import Certificates from '../components/Certificates';
import Footer from '../components/Footer';

const CertificatesPage = () => {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <div className="flex-grow">
        <Certificates />
      </div>
      <Footer />
    </div>
  );
};

export default CertificatesPage;
