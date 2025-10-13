import React, { useState, useEffect, useRef } from 'react';
import { Linkedin, Github, Mail, Instagram, MessageCircle, Download } from 'lucide-react';
import { Button } from './ui/button';
import { portfolioData } from '../mock';

const Home = () => {
  const { personal } = portfolioData;

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', url: personal.social.linkedin, color: 'hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/30' },
    { icon: Github, label: 'GitHub', url: personal.social.github, color: 'hover:text-gray-800 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800' },
    { icon: Mail, label: 'Email', url: `mailto:${personal.email}`, color: 'hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30' },
    { icon: Instagram, label: 'Instagram', url: personal.social.instagram, color: 'hover:text-pink-600 hover:bg-pink-50 dark:hover:bg-pink-950/30' },
    { icon: MessageCircle, label: 'WhatsApp', url: personal.social.whatsapp, color: 'hover:text-green-600 hover:bg-green-50 dark:hover:bg-green-950/30' }
  ];

  const handleResumeDownload = () => {
    const resumeUrl = 'https://drive.google.com/file/d/12R0rj7TxAyR6w_rCy7R9ltDgzitS2bJ_/view?usp=drive_link';
    window.open(resumeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-blue-50/50 via-white to-teal-50/50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* On mobile, show image first by using order classes */}
          <div className="flex justify-center animate-float order-1 md:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <img
                src="https://res.cloudinary.com/kits/image/upload/v1760206045/Generated_Image_September_01_2025_-_12_35AM_l7zky2.jpg"
                alt={personal.name}
                className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-8 border-white dark:border-gray-800 shadow-2xl"
              />
            </div>
          </div>
          <div className="space-y-6 animate-fade-in order-2 md:order-1 md:ml-12 lg:ml-20 xl:ml-32">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">{personal.name}</span>
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground/80">
                I'm a <span className="text-blue-600">{personal.title}</span>
              </h2>
            </div>

            {/* Typewriter animated word: only the last word changes */}
            <p className="text-base md:text-lg text-foreground/70 max-w-xl">
              Crafting elegant solutions to complex problems with clean code and creative{' '}
              <Typewriter
                words={["thinking", "developing", "deploying"]}
                color="#8006d6"
                className="inline-block"
              />
              .
            </p>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className={`rounded-full transition-all duration-300 h-12 w-12 ${link.color}`}
                  onClick={() => window.open(link.url, '_blank')}
                  title={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </Button>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white w-full md:w-auto"
              onClick={handleResumeDownload}
            >
              <Download className="h-5 w-5 mr-2" />
              View Resume
            </Button>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

/*
  Typewriter component
  - words: array of words to cycle
  - color: text color for the animated word
  - typingSpeed / pauseDurations are tuned for a pleasant effect
  - no cursor, left-to-right typing
  - fixed width based on the longest word (prevents layout shift)
*/
function Typewriter({ words = [], color = '#312963', className = '' }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [display, setDisplay] = useState('');
  const [isDeleting] = useState(false); // we don't delete, we replace after pause
  const mounted = useRef(true);

  // Determine fixed width in ch units from longest word to prevent layout shift
  const longest = words.reduce((a, b) => (a.length > b.length ? a : b), '');
  const fixedWidthStyle = { minWidth: `${longest.length}ch` };

  useEffect(() => {
    mounted.current = true;
    const typingSpeed = 80; // ms per character
    const pauseAfterTyping = 900; // pause when a word finishes
    const pauseBetweenWords = 250; // small pause before next word starts

    let charIndex = 0;
    let timeoutId;

    function typeCurrentWord() {
      const current = words[wordIndex];
      if (!mounted.current) return;

      if (charIndex <= current.length) {
        setDisplay(current.slice(0, charIndex));
        charIndex += 1;
        timeoutId = setTimeout(typeCurrentWord, typingSpeed);
      } else {
        // completed typing this word; pause then move to next
        timeoutId = setTimeout(() => {
          // advance index and start next word after brief pause
          setWordIndex((i) => (i + 1) % words.length);
        }, pauseAfterTyping);
      }
    }

    // Start typing after small pause to make loop readable
    timeoutId = setTimeout(() => {
      charIndex = 0;
      typeCurrentWord();
    }, pauseBetweenWords);

    return () => {
      mounted.current = false;
      clearTimeout(timeoutId);
    };
  }, [wordIndex, words]);

  return (
    <span
      className={className}
      style={{ color, ...fixedWidthStyle }}
      aria-hidden={false}
    >
      {display}
    </span>
  );
}

export default Home;