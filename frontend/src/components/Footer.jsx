import React from 'react';
import { Heart, Linkedin, Github, Instagram } from 'lucide-react';
import { portfolioData } from '../mock';

const Footer = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, url: personal.social.linkedin, label: 'LinkedIn' },
    { icon: Github, url: personal.social.github, label: 'GitHub' },
    { icon: Instagram, url: personal.social.instagram, label: 'Instagram' }
  ];

  const whatsappNumber = '916304497226'; // +91 6304497226 (wa.me requires country code without +)

  return (
  <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          <div className="text-center">
            <p className="text-blue-400 text-lg font-medium">
              Need a Portfolio Website Like This | Contact{' '}
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-teal-300"
              >
                Vamsi Padala
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;