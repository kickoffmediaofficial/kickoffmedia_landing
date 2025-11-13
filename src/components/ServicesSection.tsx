import { Card } from "./ui/card";
import {
  Share2,
  Search,
  Target,
  FileText,
  Mail,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Build your brand presence across all major social platforms with engaging content and strategic campaigns.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Dominate search rankings with our proven SEO strategies that drive organic traffic and conversions.",
  },
  {
    icon: Target,
    title: "Website Development",
    description: "Build a modern, responsive website that engages your audience and drives conversions.",
  },
  {
    icon: FileText,
    title: "Content Creation",
    description: "Captivate your audience with high-quality content that tells your story and drives engagement.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Nurture leads and retain customers with personalized email campaigns that convert.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Strategy",
    description: "Make informed decisions with comprehensive analytics and insights that fuel sustainable growth.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-gradient-to-br from-[#0A1628] via-[#0F2847] to-[#0A1628] relative overflow-hidden"
    >
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#0F6EEA] rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#4AA3FF] rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#4AA3FF] text uppercase tracking-wider">
              Our Services
            </span>
          </div>
          <h2 className="text-white mb-4 text-3xl md:text-4xl lg:text-5xl">
            What We Do
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#0F6EEA] to-[#4AA3FF] mx-auto mb-6 md:mb-8 shadow-lg shadow-[#0F6EEA]/50"></div>
          <p className="text-white/80 max-w-2xl mx-auto text-base md:text-lg px-4">
            Comprehensive digital marketing solutions tailored to your business
            goals
          </p>
        </div>

        {/* Marketing Results Highlight */}
        <div className="mb-12 md:mb-16">
          <Card className="relative bg-gradient-to-br from-[#0F6EEA]/10 to-[#4AA3FF]/5 backdrop-blur-sm border-[#4AA3FF]/30 p-6 md:p-8 hover:bg-[#0F6EEA]/15 hover:border-[#4AA3FF]/50 hover:shadow-xl hover:shadow-[#0F6EEA]/20 transition-all duration-300 group overflow-hidden hover:-translate-y-1">
            {/* Glowing effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0F6EEA]/0 to-[#4AA3FF]/0 group-hover:from-[#0F6EEA]/10 group-hover:to-[#4AA3FF]/10 transition-all duration-300"></div>

            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
                {/* Icon Section */}
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-[#0F6EEA] to-[#4AA3FF] flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#0F6EEA]/40 transition-all duration-300 relative flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0F6EEA] to-[#4AA3FF] rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <TrendingUp className="text-white relative z-10" size={28} />
                </div>

                {/* Content Section */}
                <div className="flex-1">
                  <h3 className="text-white mb-3 text-lg md:text-xl font-semibold">
                    Proven Results That Speak for Themselves
                  </h3>
                  <p className="text-white/70 text-sm md:text-base mb-4">
                    Our campaigns have generated <span className="text-[#4AA3FF] font-semibold">2,881+ conversations</span>, reached{" "}
                    <span className="text-[#4AA3FF] font-semibold">100K+ people</span>, and delivered exceptional ROI across multiple industries.
                  </p>
                  <button
                    onClick={() => (window.location.href = "/marketing")}
                    className="inline-flex items-center gap-2 text-[#4AA3FF] hover:text-white text-sm font-medium transition-colors group/btn"
                  >
                    View Full Marketing Portfolio
                    <TrendingUp className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-3 lg:gap-4 w-full lg:w-auto">
                  <div className="text-center p-3 lg:p-4 bg-[#0A1628]/30 rounded-lg border border-[#4AA3FF]/10 group-hover:border-[#4AA3FF]/30 transition-colors">
                    <div className="text-xl md:text-2xl font-bold text-white mb-1">2,881+</div>
                    <div className="text-white/60 text-xs">Conversations</div>
                  </div>
                  <div className="text-center p-3 lg:p-4 bg-[#0A1628]/30 rounded-lg border border-[#4AA3FF]/10 group-hover:border-[#4AA3FF]/30 transition-colors">
                    <div className="text-xl md:text-2xl font-bold text-white mb-1">100K+</div>
                    <div className="text-white/60 text-xs">Reach</div>
                  </div>
                  <div className="text-center p-3 lg:p-4 bg-[#0A1628]/30 rounded-lg border border-[#4AA3FF]/10 group-hover:border-[#4AA3FF]/30 transition-colors">
                    <div className="text-xl md:text-2xl font-bold text-white mb-1">8</div>
                    <div className="text-white/60 text-xs">Campaigns</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[#4AA3FF]/20 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="relative bg-gradient-to-br from-[#0F6EEA]/10 to-[#4AA3FF]/5 backdrop-blur-sm border-[#4AA3FF]/30 p-6 md:p-8 hover:bg-[#0F6EEA]/15 hover:border-[#4AA3FF]/50 hover:shadow-xl hover:shadow-[#0F6EEA]/20 transition-all duration-300 group overflow-hidden hover:-translate-y-1"
              >
                {/* Glowing effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0F6EEA]/0 to-[#4AA3FF]/0 group-hover:from-[#0F6EEA]/10 group-hover:to-[#4AA3FF]/10 transition-all duration-300"></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-[#0F6EEA] to-[#4AA3FF] flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#0F6EEA]/40 transition-all duration-300 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0F6EEA] to-[#4AA3FF] rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <Icon className="text-white relative z-10" size={28} />
                  </div>
                  <h3 className="text-white mb-3 text-lg md:text-xl">
                    {service.title}
                  </h3>
                  <p className="text-white/70 text-sm md:text-base">
                    {service.description}
                  </p>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[#4AA3FF]/20 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
