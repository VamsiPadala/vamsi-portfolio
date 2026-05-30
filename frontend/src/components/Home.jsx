import React, { useState, useEffect } from 'react';
import { Linkedin, Github, Mail, Instagram, MessageCircle, Download, ExternalLink } from 'lucide-react';
import { portfolioData } from '../mock';
import { motion } from 'framer-motion';

const Home = () => {
  const { personal } = portfolioData;

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', url: personal.social.linkedin },
    { icon: Github, label: 'GitHub', url: personal.social.github },
    { icon: Mail, label: 'Email', url: `mailto:${personal.email}` },
    { icon: Instagram, label: 'Instagram', url: personal.social.instagram },
    { icon: MessageCircle, label: 'WhatsApp', url: personal.social.whatsapp },
  ];

  const handleResumeDownload = () => {
    window.open('https://drive.google.com/file/d/12R0rj7TxAyR6w_rCy7R9ltDgzitS2bJ_/view?usp=drive_link', '_blank', 'noopener,noreferrer');
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Dynamic Background Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] mix-blend-screen" />
        <div className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[150px] mix-blend-screen" />
        <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[60%] rounded-full bg-purple-600/15 blur-[150px] mix-blend-screen" />
        
        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" 
          style={{ 
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)',
            backgroundSize: '40px 40px' 
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20 pb-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 max-w-2xl text-center lg:text-left"
          >
            {/* Intro Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6"
            >
              <span className="text-sm font-medium text-foreground/80">Hello, I'm Vamsi</span>
              <span className="animate-[wave_2.5s_infinite] inline-block origin-[70%_70%]">👋</span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
              I Design & Build <br className="hidden lg:block" />
              <span className="text-gradient">Digital Experiences</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground font-light mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              A passionate Full Stack Developer & UI/UX Designer crafting beautiful, functional, and user-centered digital products.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 mb-12">
              <button
                onClick={scrollToAbout}
                className="group flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-medium py-3.5 px-8 rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:-translate-y-1"
              >
                View My Work
                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
              
              <button
                onClick={handleResumeDownload}
                className="group flex items-center justify-center gap-2 bg-transparent border border-border hover:bg-white/5 text-foreground font-medium py-3.5 px-8 rounded-lg transition-all duration-300 hover:-translate-y-1"
              >
                Download CV
                <Download className="h-4 w-4 transition-transform group-hover:translate-y-1" />
              </button>
            </div>

            {/* Social Links */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Let's connect</span>
              <div className="hidden sm:block w-8 h-[1px] bg-border" />
              <div className="flex items-center gap-3">
                {socialLinks.map((link, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open(link.url, '_blank')}
                    title={link.label}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-surface border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors shadow-sm"
                  >
                    <link.icon className="h-4 w-4" />
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Image / 3D Composition */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 relative w-full max-w-lg mt-8 lg:mt-0"
          >
            {/* Outer Orbit Rings */}
            <div className="absolute inset-0 border border-primary/20 rounded-full scale-110 opacity-50 animate-[spin_60s_linear_infinite]" />
            <div className="absolute inset-0 border border-blue-500/20 rounded-full scale-125 opacity-30 animate-[spin_40s_linear_infinite_reverse]" />

            {/* Floating Badge 1 - Top Left */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 md:-top-2 md:-left-8 z-20 glass-panel px-4 py-2.5 rounded-xl flex items-center gap-3 shadow-xl"
            >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
              <span className="text-xs md:text-sm font-medium whitespace-nowrap text-foreground/90">Available for<br/>freelance work</span>
            </motion.div>

            {/* Floating Badge 2 - Bottom Right */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -right-4 md:-bottom-2 md:-right-8 z-20 glass-panel p-4 rounded-xl flex items-center gap-4 shadow-xl"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30">
                <span className="text-lg font-bold text-primary">3+</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-foreground">Years</span>
                <span className="text-xs text-muted-foreground">Experience</span>
              </div>
            </motion.div>

            {/* Main Image Container */}
            <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden p-1 bg-gradient-to-tr from-primary via-blue-500 to-purple-600 shadow-[0_0_50px_rgba(168,85,247,0.3)]">
              <div className="w-full h-full bg-surface rounded-full overflow-hidden relative">
                {/* Subtle Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent z-10 pointer-events-none" />
                
                <img
                  src="https://res.cloudinary.com/kits/image/upload/v1780117947/image_mine_bftbsj.jpg"
                  alt="Vamsi Portrait"
                  className="w-full h-full object-cover object-top relative z-0 transform hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
            
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1 h-1.5 rounded-full bg-primary"
          />
        </div>
        <span className="text-muted-foreground text-[10px] uppercase tracking-widest font-semibold">Scroll Down</span>
      </motion.div>
    </section>
  );
};

export default Home;