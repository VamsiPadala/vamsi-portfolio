import React from 'react';
import { Heart, Linkedin, Github, Instagram, Mail, ArrowUp } from 'lucide-react';
import { portfolioData } from '../mock';

const Footer = () => {
  const { personal } = portfolioData;

  const socialLinks = [
    { icon: Linkedin, url: personal.social.linkedin, label: 'LinkedIn' },
    { icon: Github, url: personal.social.github, label: 'GitHub' },
    { icon: Instagram, url: personal.social.instagram, label: 'Instagram' },
    { icon: Mail, url: `mailto:${personal.email}`, label: 'Email' },
  ];

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="bg-background border-t border-border relative">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div
              className="text-3xl font-black text-primary mb-3"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              VP
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Full Stack Developer passionate about building beautiful, scalable web applications.
              Available for exciting projects and collaborations.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-xs font-medium">Available for hire</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-foreground font-bold text-xs uppercase tracking-widest mb-6">Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-muted-foreground text-sm hover:text-primary transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-foreground font-bold text-xs uppercase tracking-widest mb-6">Get In Touch</h4>
            <p className="text-muted-foreground text-sm mb-4">{personal.email}</p>
            <div className="flex gap-3">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  className="w-9 h-9 border border-border rounded flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
                >
                  <s.icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-muted-foreground text-xs text-center">
            © {new Date().getFullYear()} Vamsi Padala. Built with{' '}
            <span className="text-primary">React</span>. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs flex items-center gap-1">
            Made with <Heart className="h-3 w-3 text-primary fill-primary" /> by Vamsi
          </p>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 border border-primary/30 text-primary hover:bg-primary hover:text-foreground rounded flex items-center justify-center transition-all duration-300"
            title="Scroll to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;