import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, FolderOpen, TrendingUp, FileText } from "lucide-react";
import Image from "next/image";
import { Projects } from "@/types/projects";

const mobileProjects = Projects.slice(0, 4);

export function PortfolioSection() {
  const handleShowMore = () => {
    window.dispatchEvent(new CustomEvent("navigate", { detail: "portfolio" }));
  };

  const handleProjectClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="portfolio"
      className="py-20 md:py-24 bg-gradient-to-br from-[#0F2847] via-[#1a4d7a] to-[#0F2847] relative overflow-hidden"
    >
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/3 w-[500px] h-[500px] bg-[#0F6EEA] rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse"></div>
        <div
          className="absolute bottom-20 right-1/3 w-[500px] h-[500px] bg-[#4AA3FF] rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#4AA3FF] text uppercase tracking-wider">Portfolio</span>
          </div>
          <h2 className="text-white mb-4 text-3xl md:text-4xl lg:text-5xl">Our Success Stories</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#0F6EEA] to-[#4AA3FF] mx-auto mb-8 shadow-lg shadow-[#0F6EEA]/50"></div>
          <p className="text-white/80 max-w-2xl mx-auto text-base md:text-lg">
            Discover how we&apos;ve helped businesses achieve remarkable results
          </p>
        </div>

        {/* Desktop view - 6 projects in 3 columns */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {Projects.map((project, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-[#0F6EEA]/10 to-[#4AA3FF]/5 backdrop-blur-sm border-[#4AA3FF]/30 overflow-hidden group hover:border-[#4AA3FF]/50 hover:shadow-2xl hover:shadow-[#0F6EEA]/20 transition-all duration-300 cursor-pointer relative hover:-translate-y-2"
            >
              {/* Glowing effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0F6EEA]/0 to-[#4AA3FF]/0 group-hover:from-[#0F6EEA]/10 group-hover:to-[#4AA3FF]/5 transition-all duration-300 pointer-events-none"></div>

              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-[#0A1628]/20 to-transparent"></div>
                <div className="absolute top-4 right-4 gap-2 flex">
                  {project.category.map((item) => (
                    <span
                      key={item}
                      className="px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-[#0F6EEA] to-[#4AA3FF] text-white text-xs md:text-sm rounded-full shadow-lg"
                    >
                      {item}
                    </span>
                  ))}
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
                    <ExternalLink
                      className="text-[#4AA3FF] opacity-0 group-hover:opacity-100 transition-opacity"
                      size={20}
                    />
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
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
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
                    <ExternalLink
                      className="text-[#4AA3FF] opacity-0 group-hover:opacity-100 transition-opacity"
                      size={20}
                    />
                  </button>
                </h3>
                <p className="text-white/70 text-sm md:text-base">{project.description}</p>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[#4AA3FF]/20 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Card>
          ))}
        </div>

        <div className="text-center flex flex-row flex-wrap gap-3 justify-center items-center">
          {/* TODO: Add back in later maybe, this opens up a modal or something like that */}
          {/* <Button
            onClick={handleShowMore}
            variant="outline"
            size="default"
            className="group relative border-2 border-[#4AA3FF]/50 text-[#4AA3FF] hover:bg-gradient-to-r hover:from-[#0F6EEA] hover:to-[#4AA3FF] hover:text-white hover:border-transparent transition-all duration-300 shadow-lg hover:shadow-[#0F6EEA]/40 hover:shadow-xl px-4 py-2.5 text-sm font-semibold hover:scale-105 overflow-hidden whitespace-nowrap"
          >
            <span className="relative z-10 flex items-center gap-2">
              <FolderOpen className="w-4 h-4 transition-transform group-hover:rotate-12" />
              Explore All Projects
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F6EEA] to-[#4AA3FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button> */}
          <Button
            onClick={() => (window.location.href = "/marketing")}
            size="default"
            className="group relative bg-gradient-to-r from-[#0F6EEA] to-[#4AA3FF] hover:from-[#0E63D5] hover:to-[#3A92E5] text-white shadow-lg shadow-[#0F6EEA]/30 hover:shadow-[#0F6EEA]/50 hover:shadow-xl transition-all duration-300 px-4 py-2.5 text-sm font-semibold hover:scale-105 whitespace-nowrap"
          >
            <span className="relative z-10 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 transition-transform group-hover:translate-y-[-2px]" />
              See Marketing Results
            </span>
          </Button>
          <Button
            onClick={() => (window.location.href = "/marketing#case-studies")}
            variant="outline"
            size="default"
            className="group relative border-2 border-[#4AA3FF]/50 text-[#4AA3FF] hover:bg-linear-to-r hover:from-[#0F6EEA]/20 hover:to-[#4AA3FF]/20 hover:border-[#4AA3FF] transition-all duration-300 shadow-lg hover:shadow-[#0F6EEA]/40 hover:shadow-xl px-4 py-2.5 text-sm font-semibold hover:scale-105 whitespace-nowrap"
          >
            <span className="relative z-10 flex items-center gap-2">
              <FileText className="w-4 h-4 transition-transform group-hover:scale-110" />
              Browse Case Studies
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
