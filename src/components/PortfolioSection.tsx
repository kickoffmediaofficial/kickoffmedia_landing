import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';
import cover1 from '../assets/ESSENTIAL-cover.png';
import cover2 from '../assets/PRINTER-cover.png';
import cover3 from '../assets/SaqlainPortfolio-cover.jpg';
import cover4 from '../assets/PitchFi-cover.jpg';
import cover5 from '../assets/swippy-cover.jpg';
import cover6 from '../assets/shopian-cover.jpg';

const desktopProjects = [
  {
    title: 'ESSENTIAL HAIR SALON',
    description: 'Designed the website for a hair salon.',
    image: cover1,
    category: 'Web Development',
    url: 'https://essential.salon/',
  },
  {
    title: 'SAQLAIN PRINTERS WEBSITE',
    description: 'Saqlain Printers - Your one-stop solution for high-quality printing, design, and branding services.',
    image: cover2,
    category: 'Web Development',
    url: 'https://saqlainprinters.web.app/',
  },
  {
    title: 'Saqlain Portfolio',
    description: 'A personal portfolio showcasing Saqlains skills, projects, and expertise in modern web development and design.',
    image: cover3,
    category: 'Web Development',
    url: 'https://saqlain1020.com/',
  },
  {
    title: 'PitchFi | Smarter Pitch Decks',
    description: 'A streamlined platform to craft, share and track investor-ready pitch decks with ease.',
    image: cover4,
    category: 'Web Development',
    url: 'https://pitchfi.io/',
  },
  {
    title: 'Swippy - User Profile ',
    description: 'A user profile page showing personal information and activity in a sample web application.',
    image: cover5,
    category: 'Web Development',
    url: 'https://competent-jennings-aee101.netlify.app/profile/User1',
  },
  {
    title: 'Shopian App - Online Marketplace',
    description: 'A user-friendly e-commerce platform where you can browse products, view detailed items, and shop seamlessly from web to checkout.',
    image: cover6,
    category: 'Web Development',
    url: 'https://shopian-app.web.app/authentication',
  },
];

const mobileProjects = desktopProjects.slice(0, 4);

export function PortfolioSection() {
  const handleShowMore = () => {
    window.dispatchEvent(new CustomEvent('navigate', { detail: 'portfolio' }));
  };

  const handleProjectClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="portfolio" className="py-20 md:py-24 bg-gradient-to-br from-[#0F2847] via-[#1a4d7a] to-[#0F2847] relative overflow-hidden">
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/3 w-[500px] h-[500px] bg-[#0F6EEA] rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-[500px] h-[500px] bg-[#4AA3FF] rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#4AA3FF] text uppercase tracking-wider">Portfolio</span>
          </div>
          <h2 className="text-white mb-4 text-3xl md:text-4xl lg:text-5xl">Our Success Stories</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#0F6EEA] to-[#4AA3FF] mx-auto mb-8 shadow-lg shadow-[#0F6EEA]/50"></div>
          <p className="text-white/80 max-w-2xl mx-auto text-base md:text-lg">
            Discover how we've helped businesses achieve remarkable results
          </p>
        </div>

        {/* Desktop view - 6 projects in 3 columns */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {desktopProjects.map((project, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-[#0F6EEA]/10 to-[#4AA3FF]/5 backdrop-blur-sm border-[#4AA3FF]/30 overflow-hidden group hover:border-[#4AA3FF]/50 hover:shadow-2xl hover:shadow-[#0F6EEA]/20 transition-all duration-300 cursor-pointer relative hover:-translate-y-2"
            >
              {/* Glowing effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0F6EEA]/0 to-[#4AA3FF]/0 group-hover:from-[#0F6EEA]/10 group-hover:to-[#4AA3FF]/5 transition-all duration-300 pointer-events-none"></div>
              
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-[#0A1628]/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-[#0F6EEA] to-[#4AA3FF] text-white text-xs md:text-sm rounded-full shadow-lg">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-5 md:p-6 relative z-10">
                <h3 className="text-white mb-2 flex items-center justify-between">
                  <span className="text-lg md:text-xl">{project.title}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProjectClick(project.url);
                    }}
                    className="flex-shrink-0 ml-2"
                  >
                    <ExternalLink className="text-[#4AA3FF] opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                  </button>
                </h3>
                <p className="text-white/70 text-sm md:text-base">{project.description}</p>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[#4AA3FF]/20 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Card>
          ))}
        </div>

        {/* Mobile view - 4 projects in 1 column */}
        <div className="md:hidden grid grid-cols-1 gap-6 mb-12">
          {mobileProjects.map((project, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-[#0F6EEA]/10 to-[#4AA3FF]/5 backdrop-blur-sm border-[#4AA3FF]/30 overflow-hidden group hover:border-[#4AA3FF]/50 hover:shadow-2xl hover:shadow-[#0F6EEA]/20 transition-all duration-300 cursor-pointer relative hover:-translate-y-2"
            >
              {/* Glowing effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0F6EEA]/0 to-[#4AA3FF]/0 group-hover:from-[#0F6EEA]/10 group-hover:to-[#4AA3FF]/5 transition-all duration-300 pointer-events-none"></div>
              
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-[#0A1628]/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-[#0F6EEA] to-[#4AA3FF] text-white text-xs md:text-sm rounded-full shadow-lg">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-5 md:p-6 relative z-10">
                <h3 className="text-white mb-2 flex items-center justify-between">
                  <span className="text-lg md:text-xl">{project.title}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProjectClick(project.url);
                    }}
                    className="flex-shrink-0 ml-2"
                  >
                    <ExternalLink className="text-[#4AA3FF] opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                  </button>
                </h3>
                <p className="text-white/70 text-sm md:text-base">{project.description}</p>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[#4AA3FF]/20 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={handleShowMore}
            variant="outline"
            size="lg"
            className="border-2 border-[#4AA3FF]/50 text-[#4AA3FF] hover:bg-gradient-to-r hover:from-[#0F6EEA] hover:to-[#4AA3FF] hover:text-white hover:border-transparent transition-all shadow-lg hover:shadow-[#0F6EEA]/30 px-6 md:px-8 py-5 md:py-6 text-base md:text-lg"
          >
            Show More Projects
          </Button>
        </div>
      </div>
    </section>
  );
}