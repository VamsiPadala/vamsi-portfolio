import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Code2, Briefcase, GraduationCap, Trophy, Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Dropped "Home" as the central logo acts as the home button. 6 links total = 3 left, 3 right.
  const navLinks = [
    { name: 'Skills', path: '/skills', icon: Code2 },
    { name: 'Experience', path: '/experience', icon: Briefcase },
    { name: 'Projects', path: '/projects', icon: Trophy },
    { name: 'Certificates', path: '/certificates', icon: GraduationCap },
    { name: 'Achievements', path: '/achievements', icon: Trophy },
    { name: 'Contact', path: '/contact', icon: Phone }
  ];

  const leftLinks = navLinks.slice(0, 3);
  const rightLinks = navLinks.slice(3, 6);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 flex justify-center transition-all duration-500 ${isScrolled ? 'pt-4' : 'pt-8'}`}>
        
        {/* Desktop Dynamic Island / Notch */}
        <div className={`hidden xl:flex items-center bg-[#111116]/90 border border-white/10 rounded-[40px] p-2 backdrop-blur-2xl transition-all duration-500 ${isScrolled ? 'shadow-[0_20px_50px_rgba(0,0,0,0.5)]' : 'shadow-2xl'}`}>
          
          {/* Left Navigation (3 links) */}
          <div className="flex items-center space-x-1 px-4">
            {leftLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `
                  px-5 py-2.5 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-300
                  ${isActive
                    ? 'bg-[#6d28d9] text-white shadow-[0_0_20px_rgba(109,40,217,0.4)]'
                    : 'text-muted-foreground hover:text-white hover:bg-white/5'}
                `}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Central Logo (The Camera / Notch Centerpiece) */}
          <NavLink to="/" className="mx-2 px-8 py-3 bg-black rounded-[30px] border border-white/5 flex items-center justify-center shadow-inner group transition-transform duration-300 hover:scale-105">
            <span className="text-sm font-bold tracking-[0.3em] text-[#8b5cf6] drop-shadow-[0_0_15px_rgba(139,92,246,0.3)] uppercase whitespace-nowrap group-hover:text-[#a78bfa] transition-colors duration-300 relative top-[1px]">
              VAMSI PADALA
            </span>
          </NavLink>

          {/* Right Navigation (3 links) */}
          <div className="flex items-center space-x-1 px-4">
            {rightLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `
                  px-5 py-2.5 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-300
                  ${isActive
                    ? 'bg-[#6d28d9] text-white shadow-[0_0_20px_rgba(109,40,217,0.4)]'
                    : 'text-muted-foreground hover:text-white hover:bg-white/5'}
                `}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

        </div>

        {/* Mobile Navbar Header */}
        <div className={`xl:hidden w-full px-6 flex justify-between items-center transition-all duration-500 ${isScrolled ? 'py-4 bg-background/90 backdrop-blur-xl border-b border-white/5 shadow-lg' : 'py-6 bg-transparent'}`}>
          <NavLink to="/" className="flex items-center group z-20">
            <span className="text-lg font-bold tracking-[0.2em] text-[#8b5cf6] uppercase whitespace-nowrap">
              VAMSI PADALA
            </span>
          </NavLink>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-muted-foreground hover:text-foreground p-2 bg-surface-hover rounded-full border border-border z-20"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-transform duration-300 xl:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-28 px-8 pb-8 overflow-y-auto">
          {/* We add Home back to the mobile menu for easier navigation */}
          <NavLink to="/" className={({ isActive }) => `flex items-center gap-4 py-4 border-b border-border/50 text-lg font-semibold tracking-wider uppercase ${isActive ? 'text-[#8b5cf6]' : 'text-muted-foreground hover:text-foreground'}`}>
            Home
          </NavLink>
          
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => `
                flex items-center gap-4 py-4 border-b border-border/50 text-lg font-semibold tracking-wider uppercase
                ${isActive ? 'text-[#8b5cf6]' : 'text-muted-foreground hover:text-foreground'}
              `}
            >
              <link.icon size={20} className={location.pathname === link.path ? 'text-[#8b5cf6]' : 'text-muted-foreground'} />
              {link.name}
            </NavLink>
          ))}

          <div className="mt-auto pt-8">
            <p className="text-muted-foreground text-xs text-center font-mono uppercase tracking-widest">© 2026 Vamsi Padala</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
