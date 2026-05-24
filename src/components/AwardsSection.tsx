import { Award, ExternalLink, Star, TrendingUp, Users, Shield } from "lucide-react";

const metrics = [
  { icon: TrendingUp, label: "Quality Score", value: "95%+" },
  { icon: Users, label: "Businesses Evaluated", value: "10,000+" },
  { icon: Shield, label: "Top Businesses", value: "Top 1%" },
  { icon: Star, label: "Review Sources", value: "3+" },
];

export function AwardsSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#050B14] via-[#0A1628] to-[#0F2847] relative overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute top-1/4 right-10 w-[400px] h-[400px] bg-[#D4AF37] rounded-full mix-blend-screen filter blur-3xl opacity-[0.06] animate-pulse"
        ></div>
        <div
          className="absolute bottom-1/4 left-10 w-[400px] h-[400px] bg-[#0F6EEA] rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#4AA3FF] text uppercase tracking-wider">Recognition</span>
          </div>
          <h2 className="text-white mb-4 text-3xl md:text-4xl lg:text-5xl">Awards & Achievements</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#0F6EEA] to-[#4AA3FF] mx-auto mb-6 md:mb-8"></div>
          <p className="text-white/80 max-w-2xl mx-auto text-base md:text-lg px-4">
            Our work speaks for itself — and sometimes, it wins awards too
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37]/30 via-[#F5E6A3]/20 to-[#D4AF37]/30 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>

            <div className="relative bg-gradient-to-br from-[#0F2847]/80 to-[#0A1628]/90 backdrop-blur-md border border-[#D4AF37]/30 rounded-2xl p-6 md:p-10 lg:p-12 hover:border-[#D4AF37]/50 transition-all duration-500">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                {/* Award Badge */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] to-[#F5E6A3] rounded-full blur-2xl opacity-20 animate-pulse"></div>
                    <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-[#D4AF37]/10 to-[#F5E6A3]/5 border-2 border-[#D4AF37]/40 flex flex-col items-center justify-center">
                      <Award className="w-12 h-12 md:w-14 md:h-14 text-[#D4AF37] mb-2" strokeWidth={1.5} />
                      <span className="text-[#D4AF37] font-bold text-lg md:text-xl">2026</span>
                      <span className="text-[#F5E6A3]/80 text-xs tracking-widest uppercase mt-0.5">Winner</span>
                    </div>
                  </div>
                </div>

                {/* Award Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 mb-4">
                    <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></div>
                    <span className="text-[#D4AF37] text-xs md:text-sm font-medium tracking-wide uppercase">
                      Quality Business Awards USA
                    </span>
                  </div>

                  <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
                    Best Hair Salon in Kirkland, WA
                  </h3>

                  <p className="text-white/80 text-base md:text-lg leading-relaxed mb-2">
                    <span className="text-white font-semibold">Essential Hair Salon</span> — a website designed and developed by KickOff Media — was recognized as the <span className="text-[#D4AF37]">#1 Best Rated</span> Hair Salon in Kirkland, Washington, achieving a quality score of 95%+ and placing in the top 1% of American businesses.
                  </p>
                  <p className="text-white/60 text-sm md:text-base mb-6">
                    This award reflects the powerful digital presence we built, combining stunning design with performance-driven strategy to help our client stand out.
                  </p>

                  <a
                    href="https://www.qualitybusinessawards.com/2026/the-best-Hair-Salon-in-Kirkland-Washington/Essential-Hair-Salon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#C5A028] text-[#0A1628] font-semibold rounded-lg hover:from-[#F5E6A3] hover:to-[#D4AF37] transition-all duration-300 shadow-lg shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/40 hover:-translate-y-0.5"
                  >
                    View Award
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 md:mt-10 pt-8 md:pt-10 border-t border-[#D4AF37]/15">
                {metrics.map((metric) => (
                  <div key={metric.label} className="text-center group/metric">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 mb-3 group-hover/metric:border-[#D4AF37]/40 transition-colors">
                      <metric.icon className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#F5E6A3] bg-clip-text text-transparent mb-1">
                      {metric.value}
                    </div>
                    <p className="text-white/60 text-xs md:text-sm">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
