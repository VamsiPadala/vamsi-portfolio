import React from 'react';
import { Search, ChevronDown, Award, Layers, Box, ExternalLink, ShieldCheck, ClipboardList } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../mock';

const Certificates = () => {
  const { certificates } = portfolioData;

  // Calculate unique platforms/issuers
  const platforms = [...new Set(certificates.map(cert => cert.issuer))].length;
  // Calculate a mock number of domains for the stats card
  const domains = 4; // Hardcoded or calculated

  return (
    <section id="certificates" className="py-24 bg-background relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-40 right-20 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-40 left-20 w-[500px] h-[500px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="px-2 py-1 bg-surface border border-border rounded flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-primary" />
                <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">Achievements</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 tracking-tight">
              My <span className="text-primary">Certificates</span>
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Continuous learning and self-improvement are part of my journey. Here are some of the certifications I've earned.
            </p>
          </motion.div>

          {/* Search & Filter */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto"
          >
            <div className="relative w-full sm:w-[280px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search certificates..." 
                className="w-full bg-surface/50 border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
            <div className="relative w-full sm:w-[180px]">
              <div className="w-full bg-surface/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground flex items-center justify-between cursor-pointer hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-muted-foreground" />
                  <span>All Categories</span>
                </div>
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* 1. Stats Card Render (Always first) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel border border-border rounded-2xl p-8 flex flex-col justify-center"
          >
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center mb-3">
                  <Award className="w-4 h-4 text-primary" />
                </div>
                <div className="text-xl font-bold text-foreground mb-1">{certificates.length}</div>
                <div className="text-[10px] text-muted-foreground">Certificates</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded bg-surface border border-border flex items-center justify-center mb-3">
                  <Layers className="w-4 h-4 text-foreground" />
                </div>
                <div className="text-xl font-bold text-foreground mb-1">{platforms}</div>
                <div className="text-[10px] text-muted-foreground">Platforms</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded bg-surface border border-border flex items-center justify-center mb-3">
                  <Box className="w-4 h-4 text-foreground" />
                </div>
                <div className="text-xl font-bold text-foreground mb-1">{domains}</div>
                <div className="text-[10px] text-muted-foreground">Domains</div>
              </div>
            </div>
          </motion.div>

          {/* 2. Certificate Cards Render */}
          {certificates.map((cert, idx) => (
            <motion.div 
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx + 1) * 0.1 }}
              className="glass-panel border border-border rounded-2xl overflow-hidden group hover:border-primary/40 transition-colors duration-300 flex flex-col h-full"
            >
              {/* Image Header */}
              {cert.image && (
                <div className="p-4 pb-0">
                  <div className="w-full h-32 rounded-xl bg-surface relative overflow-hidden flex items-center justify-center border border-border">
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                  </div>
                </div>
              )}

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-1.5 mb-3">
                  <div className="w-5 h-5 rounded-full bg-surface border border-border flex items-center justify-center overflow-hidden">
                    <span className="text-[10px] font-bold text-foreground">{cert.issuer.charAt(0)}</span>
                  </div>
                  <span className="text-xs font-semibold text-foreground">{cert.issuer}</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                </div>

                <h3 className="text-sm font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors flex-grow">
                  {cert.title}
                </h3>

                <div className="flex items-center justify-between mb-6">
                  {/* Since your mock data doesn't have dates, we'll hide the date or show a static one */}
                  <span className="text-[11px] text-muted-foreground">Issued</span>
                  <span className="text-[10px] font-medium px-2 py-0.5 bg-surface-hover text-muted-foreground border border-border rounded-full">
                    Certification
                  </span>
                </div>

                {cert.link ? (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors">
                    View Credential <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                    Credential Offline
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel border border-border rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center">
              <ClipboardList className="w-5 h-5 text-foreground" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground mb-1">Want to see more?</h3>
              <p className="text-xs text-muted-foreground">View my full credentials and achievements on Credly.</p>
            </div>
          </div>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm font-semibold transition-colors whitespace-nowrap">
            View All Credentials <ExternalLink className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Certificates;