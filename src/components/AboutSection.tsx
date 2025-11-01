import { Card } from './ui/card';

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-24 bg-gradient-to-br from-[#0F2847] via-[#1a4d7a] to-[#0F2847] relative overflow-hidden">
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-[#0F6EEA] rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-[#4AA3FF] rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '1.2s' }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image - Shows first on mobile, second on desktop */}
          <div className="relative order-1 lg:order-2">
            {/* Glowing border effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0F6EEA] via-[#4AA3FF] to-[#5BB4FF] rounded-2xl blur-2xl opacity-20"></div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#0F6EEA]/30 border-2 border-[#4AA3FF]/30 hover:border-[#4AA3FF]/50 transition-all group">
              <img
                src="https://images.unsplash.com/photo-1748256622734-92241ae7b43f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjEyNTA4NjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Team Collaboration"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F6EEA]/40 via-transparent to-transparent"></div>
              
              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-20 md:w-24 h-20 md:h-24 border-t-2 border-r-2 border-[#4AA3FF] rounded-tr-2xl"></div>
              <div className="absolute bottom-0 left-0 w-20 md:w-24 h-20 md:h-24 border-b-2 border-l-2 border-[#4AA3FF] rounded-bl-2xl"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -left-10 w-40 md:w-48 h-40 md:h-48 bg-gradient-to-br from-[#0F6EEA] to-[#4AA3FF] rounded-full opacity-25 blur-3xl animate-pulse"></div>
            <div className="absolute -top-10 -right-10 w-40 md:w-48 h-40 md:h-48 bg-gradient-to-br from-[#4AA3FF] to-[#5BB4FF] rounded-full opacity-25 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          {/* Text Content - Shows second on mobile, first on desktop */}
          <div className="order-2 lg:order-1">
            <div className="inline-block mb-4">
              <span className="text-[#4AA3FF] text uppercase tracking-wider">About Us</span>
            </div>
            <h2 className="text-white mb-4 md:mb-6 text-3xl md:text-4xl lg:text-5xl">Who We Are</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#0F6EEA] to-[#4AA3FF] mb-6 md:mb-8 shadow-lg shadow-[#0F6EEA]/50"></div>
            <div className="space-y-4">
              <p className="text-white/90 text-base md:text-lg leading-relaxed">
                KickOff Media is a forward-thinking digital marketing agency dedicated to helping businesses thrive in the digital age. 
                Founded with a passion for innovation and results, we combine data-driven strategies with creative excellence to deliver 
                measurable growth for our clients.
              </p>
              <p className="text-white/90 text-base md:text-lg leading-relaxed">
                Our mission is to empower brands to reach their full potential through cutting-edge marketing solutions and personalized service. 
                We believe in building lasting partnerships with our clients, understanding their unique challenges, and crafting strategies that 
                drive real, sustainable results.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-10">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0F6EEA] to-[#4AA3FF] rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-[#0F6EEA]/15 to-[#4AA3FF]/10 backdrop-blur-sm border border-[#4AA3FF]/30 rounded-xl p-4 md:p-6 hover:border-[#4AA3FF]/50 transition-all hover:-translate-y-1">
                  <div className="text-3xl md:text-4xl bg-gradient-to-r from-[#4AA3FF] to-[#5BB4FF] bg-clip-text text-transparent mb-2">500+</div>
                  <p className="text-white/80 text-sm md:text-base">Projects Completed</p>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0F6EEA] to-[#4AA3FF] rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-[#0F6EEA]/15 to-[#4AA3FF]/10 backdrop-blur-sm border border-[#4AA3FF]/30 rounded-xl p-4 md:p-6 hover:border-[#4AA3FF]/50 transition-all hover:-translate-y-1">
                  <div className="text-3xl md:text-4xl bg-gradient-to-r from-[#4AA3FF] to-[#5BB4FF] bg-clip-text text-transparent mb-2">200+</div>
                  <p className="text-white/80 text-sm md:text-base">Happy Clients</p>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0F6EEA] to-[#4AA3FF] rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-[#0F6EEA]/15 to-[#4AA3FF]/10 backdrop-blur-sm border border-[#4AA3FF]/30 rounded-xl p-4 md:p-6 hover:border-[#4AA3FF]/50 transition-all hover:-translate-y-1">
                  <div className="text-3xl md:text-4xl bg-gradient-to-r from-[#4AA3FF] to-[#5BB4FF] bg-clip-text text-transparent mb-2">15+</div>
                  <p className="text-white/80 text-sm md:text-base">Years Experience</p>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0F6EEA] to-[#4AA3FF] rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-[#0F6EEA]/15 to-[#4AA3FF]/10 backdrop-blur-sm border border-[#4AA3FF]/30 rounded-xl p-4 md:p-6 hover:border-[#4AA3FF]/50 transition-all hover:-translate-y-1">
                  <div className="text-3xl md:text-4xl bg-gradient-to-r from-[#4AA3FF] to-[#5BB4FF] bg-clip-text text-transparent mb-2">98%</div>
                  <p className="text-white/80 text-sm md:text-base">Client Retention</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}