import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader2, Check, Mail, Phone, MapPin, Clock, Navigation, Briefcase, Award, Smile, MessageCircle } from 'lucide-react';
import { toast } from '../hooks/use-toast';
import { motion } from 'framer-motion';
import { portfolioData } from '../mock';

const Contact = () => {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const successTimeoutRef = useRef(null);

  // New specific user details
  const myEmail = "padalavamsi38@gmail.com";
  const myPhone = "6304497226";
  const myAddress = "Mayuri Tech Park, RTIH 4th floor, mangalagiri location is :: Mayuri Tech Park, CH77+JH, Near, NRI Exit,Bypass Road, Electronic city, Chinnakakani, Andhra Pradesh 522503";

  const contactInfo = [
    { icon: Mail, label: 'Email', value: myEmail, href: `mailto:${myEmail}` },
    { icon: Phone, label: 'Phone', value: `+91 ${myPhone}`, href: `tel:+91${myPhone}` },
    { icon: MapPin, label: 'Location', value: 'Mayuri Tech Park, AP', href: null },
    { icon: Clock, label: 'Availability', value: 'Mon - Fri: 9AM - 6PM IST', href: null },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (successTimeoutRef.current) { clearTimeout(successTimeoutRef.current); }

    const web3FormData = {
      ...formData,
      form_subject: formData.subject || "New Message from Portfolio",
      access_key: "e6d98259-692f-49bf-bcea-a54052808dea", // Ensure this is correct
      subject: "new interest from portfolio",
      from_name: formData.name || "Portfolio Visitor",
    };

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(web3FormData),
    })
      .then(async (response) => {
        const res = await response.json();
        if (response.status === 200) {
          toast({ title: 'Message Sent!', description: "Thank you! I'll get back to you soon." });
          setFormData({ name: '', email: '', subject: '', message: '' });
          setIsSuccess(true);
          setIsSubmitting(false);
          successTimeoutRef.current = setTimeout(() => { setIsSuccess(false); }, 2500);
        } else {
          toast({ title: 'Error', description: res.message || 'Problem sending message. Please try again.' });
          setIsSubmitting(false);
        }
      })
      .catch(() => {
        toast({ title: 'Error', description: 'Problem sending message. Please try again.' });
        setIsSubmitting(false);
      });
  };

  useEffect(() => () => { if (successTimeoutRef.current) clearTimeout(successTimeoutRef.current); }, []);

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        
        {/* Header Section */}
        <div className="mb-16 max-w-2xl relative">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">GET IN TOUCH</span>
            <h2 className="text-5xl md:text-6xl font-black text-foreground leading-tight tracking-tight mb-6">
              Let's Work<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Together</span>
            </h2>
            <div className="flex items-center gap-8">
              <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                Have a project in mind or want to discuss an opportunity? Feel free to reach out. I'll get back to you as soon as possible! 👋
              </p>
              {/* Paper Plane SVG */}
              <div className="relative w-24 h-24 hidden md:block animate-bounce" style={{ animationDuration: '3s' }}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-primary drop-shadow-[0_0_15px_var(--primary)]">
                  <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.2"/>
                </svg>
                {/* Dotted trail */}
                <svg className="absolute -bottom-16 -left-16 w-32 h-32 text-primary/30" viewBox="0 0 100 100" fill="none">
                  <path d="M0,100 C40,90 60,40 100,0" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 mb-8">
          
          {/* Left Column: Contact Information */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <div className="glass-panel border border-border rounded-2xl p-8 h-full">
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-8">CONTACT INFORMATION</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-transparent hover:border-border hover:bg-surface-hover transition-all group">
                    <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <info.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex flex-col flex-grow">
                      <span className="text-xs font-bold text-foreground mb-1">{info.label}</span>
                      {info.href ? (
                        <a href={info.href} className="text-[11px] text-muted-foreground hover:text-primary transition-colors truncate">
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-[11px] text-muted-foreground">{info.value}</span>
                      )}
                    </div>
                    {info.href && (
                      <Navigation className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all -rotate-45" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form & Map */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            
            {/* Form Block */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-panel border border-border rounded-2xl p-8"
            >
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-8">SEND ME A MESSAGE</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                      <Smile className="w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                    </div>
                    <input
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full bg-surface border border-border rounded-xl pl-12 pr-4 py-3.5 text-[13px] text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:bg-surface-hover transition-all"
                    />
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                      <Mail className="w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                    </div>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      className="w-full bg-surface border border-border rounded-xl pl-12 pr-4 py-3.5 text-[13px] text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:bg-surface-hover transition-all"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <Navigation className="w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors rotate-90" />
                  </div>
                  <input
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full bg-surface border border-border rounded-xl pl-12 pr-4 py-3.5 text-[13px] text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:bg-surface-hover transition-all"
                  />
                </div>

                <div className="relative group">
                  <div className="absolute top-4 left-4 flex items-start pointer-events-none">
                    <MessageCircle className="w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={4}
                    required
                    className="w-full bg-surface border border-border rounded-xl pl-12 pr-4 py-3.5 text-[13px] text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:bg-surface-hover transition-all resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    className="w-full sm:w-auto px-8 py-3.5 bg-primary hover:bg-primary/90 text-white rounded-xl text-[13px] font-bold transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                    ) : isSuccess ? (
                      <><Check className="w-4 h-4" /> Sent!</>
                    ) : (
                      <>Send Message <Send className="w-4 h-4" /></>
                    )}
                  </button>
                  <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                    <Check className="w-4 h-4 text-emerald-500" />
                    I usually respond within <span className="text-primary font-bold">24 hours</span>
                  </div>
                </div>
              </form>
            </motion.div>

            {/* Map Block */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-panel border border-border rounded-2xl overflow-hidden flex flex-col md:flex-row"
            >
              <div className="p-8 md:w-2/5 flex flex-col justify-center bg-surface/50 border-r border-border">
                <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">FIND ME HERE</h3>
                <div className="flex items-start gap-3 mb-6">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-[12px] font-medium text-foreground leading-relaxed">
                    {myAddress}
                  </p>
                </div>
                <a href="https://maps.google.com/?q=Mayuri+Tech+Park+Chinnakakani" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[11px] font-bold text-primary hover:text-primary/80 transition-colors">
                  Open in Google Maps <Navigation className="w-3 h-3 rotate-45" />
                </a>
              </div>
              <div className="md:w-3/5 h-64 md:h-auto relative bg-[#0a0a0a] overflow-hidden">
                {/* Simulated Map Background */}
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: 'radial-gradient(circle at center, #8b5cf6 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}></div>
                {/* Roads overlay illusion */}
                <div className="absolute inset-0 border border-border/10 rounded-[40px] rotate-12 scale-150" />
                <div className="absolute inset-0 border border-border/10 rounded-[60px] -rotate-12 scale-125" />
                
                {/* Pin Location */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse w-16 h-16 -left-4 -top-4" />
                    <MapPin className="w-8 h-8 text-primary relative z-10 drop-shadow-[0_0_10px_var(--primary)]" fill="currentColor" />
                  </div>
                  <span className="mt-2 text-[11px] font-bold text-foreground bg-background/80 backdrop-blur-md px-3 py-1 rounded-full border border-border">
                    Mangalagiri, AP
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Bottom Stats Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel border border-border rounded-2xl p-6 lg:p-8 flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.15)] flex-shrink-0">
              <Send className="w-6 h-6 text-primary -ml-1 mt-1" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">Let's create something amazing together!</h3>
              <p className="text-xs text-muted-foreground">I'm excited to hear about your ideas and help bring them to life.</p>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-8 lg:gap-12 w-full lg:w-auto">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <div className="text-base font-bold text-foreground">5+</div>
                <div className="text-[10px] text-muted-foreground">Years Experience</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <div className="text-base font-bold text-foreground">20+</div>
                <div className="text-[10px] text-muted-foreground">Projects Completed</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <Smile className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <div className="text-base font-bold text-foreground">100%</div>
                <div className="text-[10px] text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;