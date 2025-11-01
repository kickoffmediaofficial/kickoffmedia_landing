import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, ArrowLeft, Filter, Menu, X } from 'lucide-react';
import { Footer } from './Footer';
import logo from '../assets/Logo.png';
import cover1 from '../assets/ESSENTIAL-cover.png';
import cover2 from '../assets/PRINTER-cover.png';
import cover3 from '../assets/SaqlainPortfolio-cover.jpg';
import cover4 from '../assets/PitchFi-cover.jpg';
import cover5 from '../assets/swippy-cover.jpg';
import cover6 from '../assets/MystifyingBardeen-cover.jpg';
import cover7 from '../assets/shopian-cover.jpg';

const allProjects = [
 {
    title: 'ESSENTIAL HAIR SALON',
    description: 'Designed the website for a hair salon.',
    image: cover1,
    category: 'Web Development',
    url: 'https://essential.salon/',
    metrics: {duration: '6 months', platform: 'Multi-channel' }
  },
  {
    title: 'SAQLAIN PRINTERS WEBSITE',
    description: 'Saqlain Printers - Your one-stop solution for high-quality printing, design, and branding services.',
    image: cover2,
    category: 'Web Development',
    url: 'https://saqlainprinters.web.app/',
    metrics: {duration: '6 months', platform: 'Multi-channel' }
  },
  {
    title: 'Saqlain Portfolio',
    description: 'A personal portfolio showcasing Saqlains skills, projects, and expertise in modern web development and design.',
    image: cover3,
    category: 'Web Development',
    url: 'https://saqlain1020.com/',
    metrics: {duration: '6 months', platform: 'Multi-channel' }
  },
  {
    title: 'PitchFi | Smarter Pitch Decks',
    description: 'A streamlined platform to craft, share and track investor-ready pitch decks with ease.',
    image: cover4,
    category: 'Web Development',
    url: 'https://pitchfi.io/',
    metrics: {duration: '6 months', platform: 'Multi-channel' }
  },
  {
    title: 'Swippy - User Profile ',
    description: 'A user profile page showing personal information and activity in a sample web application.',
    image: cover5,
    category: 'Web Development',
    url: 'https://competent-jennings-aee101.netlify.app/profile/User1',
    metrics: {duration: '6 months', platform: 'Multi-channel' }
  },
  {
    title: 'Mystifying Bardeen App',
    description: 'A landing or demo web application showcasing features of the “Mystifying Bardeen”',
    image:  cover6,
    category: 'Web Development',
    url: 'https://mystifying-bardeen-45fd62.netlify.app/',
    metrics: {duration: '6 months', platform: 'Multi-channel' }
  },
  {
    title: 'Shopian App - Online Marketplace',
    description: 'A user-friendly e-commerce platform where you can browse products, view detailed items, and shop seamlessly from web to checkout.',
    image: cover7,
    category: 'Web Development',
    url: 'https://shopian-app.web.app/authentication',
    metrics: {duration: '6 months', platform: 'Multi-channel' }
  },
];

const categories = ['All', 'Digital Marketing', 'App Development', 'Web Development', 'Social Media', 'Branding', 'SEO'];

interface PortfolioPageProps {
  onBack: () => void;
}

export function PortfolioPage({ onBack }: PortfolioPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const filteredProjects = selectedCategory === 'All' 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory);

  const handleProjectClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    onBack();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050B14] via-[#0A1628] to-[#0F2847]">
      {/* Enhanced Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-[#0F6EEA] rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-[600px] h-[600px] bg-[#4AA3FF] rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#5BB4FF] rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Header - Navigation handled by custom buttons below */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A1628]/95 backdrop-blur-lg shadow-lg shadow-[#0F6EEA]/10 border-b border-[#4AA3FF]/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={onBack}>
              <img src={logo} alt="KickOff Media" className="w-12 h-12 object-contain" />
              <span className="text-white text-xl">KickOff Media</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={onBack} className="text-white/80 hover:text-[#4AA3FF] transition-colors">
                Home
              </button>
              <button onClick={onBack} className="text-white/80 hover:text-[#4AA3FF] transition-colors">
                Services
              </button>
              <button onClick={onBack} className="text-white/80 hover:text-[#4AA3FF] transition-colors">
                About Us
              </button>
              <button className="text-[#4AA3FF] transition-colors">
                Portfolio
              </button>
              <button onClick={onBack} className="text-white/80 hover:text-[#4AA3FF] transition-colors">
                Contact
              </button>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button
                onClick={onBack}
                className="bg-gradient-to-r from-[#0F6EEA] to-[#4AA3FF] hover:from-[#0E63D5] hover:to-[#3A92E5] shadow-lg shadow-[#0F6EEA]/20 transition-all"
              >
                Back to Home
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-gradient-to-br from-[#0B1D3F] to-[#0A1628] border-t border-[#4AA3FF]/20 shadow-lg">
              <nav className="flex flex-col space-y-1 py-4">
                <button onClick={handleNavClick} className="text-white/90 hover:text-white hover:bg-[#4AA3FF]/10 transition-all text-left px-4 py-3 rounded-lg">
                  Home
                </button>
                <button onClick={handleNavClick} className="text-white/90 hover:text-white hover:bg-[#4AA3FF]/10 transition-all text-left px-4 py-3 rounded-lg">
                  Services
                </button>
                <button onClick={handleNavClick} className="text-white/90 hover:text-white hover:bg-[#4AA3FF]/10 transition-all text-left px-4 py-3 rounded-lg">
                  About Us
                </button>
                <button className="text-[#4AA3FF] hover:bg-[#4AA3FF]/10 transition-all text-left px-4 py-3 rounded-lg">
                  Portfolio
                </button>
                <button onClick={handleNavClick} className="text-white/90 hover:text-white hover:bg-[#4AA3FF]/10 transition-all text-left px-4 py-3 rounded-lg">
                  Contact
                </button>
                <div className="px-4 pt-2">
                  <Button
                    onClick={handleNavClick}
                    className="bg-gradient-to-r from-[#0F6EEA] to-[#4AA3FF] hover:from-[#0E63D5] hover:to-[#3A92E5] shadow-lg shadow-[#0F6EEA]/20 transition-all w-full"
                  >
                    Back to Home
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Page Title Section */}
      <div className="relative z-10 pt-32 pb-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h1 className="text-white mb-3 md:mb-4 text-3xl md:text-4xl lg:text-5xl">
              Our <span className="bg-gradient-to-r from-[#0F6EEA] via-[#4AA3FF] to-[#5BB4FF] bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-[#0F6EEA] via-[#4AA3FF] to-[#5BB4FF] mx-auto mb-3 md:mb-4 shadow-lg shadow-[#0F6EEA]/50"></div>
            <p className="text-white/80 text-base md:text-lg px-4">Explore all our successful projects and campaigns</p>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="container mx-auto px-4 lg:px-8 py-6 md:py-8 relative z-10">
        <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8 flex-wrap justify-center">
          <div className="flex items-center gap-2 text-[#4AA3FF]">
            <Filter size={18} className="md:w-5 md:h-5" />
            <span className="text-xs md:text-sm uppercase tracking-wider">Filter by:</span>
          </div>
          {categories.map((category) => (
            <Badge
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`cursor-pointer px-3 md:px-5 py-2 md:py-2.5 text-xs md:text-sm transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#0F6EEA] via-[#4AA3FF] to-[#5BB4FF] text-white shadow-lg shadow-[#0F6EEA]/40 border-0'
                  : 'bg-gradient-to-br from-[#0F6EEA]/10 to-[#4AA3FF]/5 text-white/80 hover:bg-[#4AA3FF]/20 border border-[#4AA3FF]/30 hover:border-[#4AA3FF]/50'
              }`}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-16 md:pb-20">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              onClick={() => handleProjectClick(project.url)}
              className="bg-gradient-to-br from-[#0F6EEA]/10 to-[#4AA3FF]/5 backdrop-blur-sm border-[#4AA3FF]/30 overflow-hidden group hover:border-[#4AA3FF]/60 hover:shadow-2xl hover:shadow-[#0F6EEA]/20 transition-all duration-300 hover:-translate-y-2 cursor-pointer relative"
            >
              {/* Glowing effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0F6EEA]/0 to-[#4AA3FF]/0 group-hover:from-[#0F6EEA]/20 group-hover:to-[#4AA3FF]/10 transition-all duration-300 pointer-events-none"></div>
              
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/90 via-[#0A1628]/40 to-transparent"></div>
                <div className="absolute top-3 md:top-4 right-3 md:right-4">
                  <Badge className="bg-gradient-to-r from-[#0F6EEA] via-[#4AA3FF] to-[#5BB4FF] text-white border-0 shadow-lg text-xs md:text-sm px-2 md:px-3 py-1 md:py-1.5">
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4">
                  <div className="flex gap-2 flex-wrap">
                    <Badge className="bg-white/10 backdrop-blur-sm text-white border-white/20 text-xs px-2 py-1">
                      {project.metrics.duration}
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="p-5 md:p-6 relative z-10">
                <h3 className="text-white mb-2 flex items-center justify-between text-base md:text-lg">
                  <span className="pr-2">{project.title}</span>
                  <ExternalLink className="text-[#4AA3FF] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" size={18} />
                </h3>
                <p className="text-white/70 mb-3 text-sm md:text-base">{project.description}</p>
                <div className="flex items-center justify-between text-xs md:text-sm text-white/60">
                  <span className="flex items-center gap-1">
                    📍 {project.metrics.platform}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}