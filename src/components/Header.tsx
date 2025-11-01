import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import logo from '../assets/Logo.png';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#0A1628]/95 backdrop-blur-lg shadow-lg shadow-[#0F6EEA]/10 border-b border-[#4AA3FF]/10' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
              <img src={logo} alt="KickOff Media" className="w-12 h-12" />
              <span className="text-white text-xl">KickOff Media</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('hero')} className="text-white/80 hover:text-[#4AA3FF] transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="text-white/80 hover:text-[#4AA3FF] transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('about')} className="text-white/80 hover:text-[#4AA3FF] transition-colors">
                About Us
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-white/80 hover:text-[#4AA3FF] transition-colors">
                Portfolio
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-white/80 hover:text-[#4AA3FF] transition-colors">
                Contact
              </button>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-[#0F6EEA] to-[#4AA3FF] hover:from-[#0E63D5] hover:to-[#3A92E5] shadow-lg shadow-[#0F6EEA]/20 transition-all"
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white z-50 relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-20 left-0 right-0 w-full bg-gradient-to-br from-[#0B1D3F] to-[#0A1628] z-40 md:hidden transform transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        } shadow-2xl border-b border-[#4AA3FF]/20`}
      >
        <div className="px-6 py-6">
          <nav className="flex flex-col space-y-2">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="text-white/90 hover:text-white hover:bg-[#4AA3FF]/10 transition-all text-left px-6 py-4 rounded-xl"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-white/90 hover:text-white hover:bg-[#4AA3FF]/10 transition-all text-left px-6 py-4 rounded-xl"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-white/90 hover:text-white hover:bg-[#4AA3FF]/10 transition-all text-left px-6 py-4 rounded-xl"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className="text-white/90 hover:text-white hover:bg-[#4AA3FF]/10 transition-all text-left px-6 py-4 rounded-xl"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-white/90 hover:text-white hover:bg-[#4AA3FF]/10 transition-all text-left px-6 py-4 rounded-xl"
            >
              Contact
            </button>
            <div className="pt-4 px-2">
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-[#0F6EEA] to-[#4AA3FF] hover:from-[#0E63D5] hover:to-[#3A92E5] shadow-lg shadow-[#0F6EEA]/20 transition-all w-full py-6"
              >
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}