import { Card } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Star } from "lucide-react";
import Image from "next/image";
import logo1 from "@/assets/ESSENTIAL HAIR SALOON LOGO-01.png";
import pitchfilogo from "@/assets/PitchFiLogo.png";

const testimonials = [
  {
    company: "Essential Hair Salon",
    Location: "Kirkland, WDC, US",
    image: logo1,
    quote:
      "KickOff Media transformed our digital presence completely. Within 3 months, we saw a 300% increase in qualified leads. Their strategic approach and attention to detail is unmatched.",
    rating: 5,
  },
  {
    company: "PitchFi",
    Location: "Blockchain",
    image: pitchfilogo,
    quote:
      "Great experience working with KickOff Media on our blockchain app. They delivered perfect UX and built scalable tech that set us up for long-term growth.",
    rating: 5,
  },
  {
    company: "Abdul Rafay",
    Location: "Fiverr",
    quote:
      "Kickoff is an expert react developer, experienced in building beautiful UI, fast delivery and clean code, I am extremely satisfied with the work and I highly recommend them. Will definitely work with him again.",
    rating: 5,
  },
  {
    company: "Style2u",
    Location: "CR",
    quote: "I am highly recommend on Kickoff as a professional to work with I know I will use their service again",
    rating: 5,
  },
  {
    company: "Perecodina",
    Location: "US",
    quote: "Great experience. Really recommend working with them.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#0A1628] via-[#0F2847] to-[#0A1628] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-20 w-96 h-96 bg-[#0F6EEA] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-1/3 right-20 w-96 h-96 bg-[#4AA3FF] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#4AA3FF] text uppercase tracking-wider">Testimonials</span>
          </div>
          <h2 className="text-white mb-4 text-3xl md:text-4xl lg:text-5xl">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#0F6EEA] to-[#4AA3FF] mx-auto mb-6 md:mb-8"></div>
          <p className="text-white/80 max-w-2xl mx-auto text-base md:text-lg px-4">
            Don&apos;t just take our word for it - hear from the businesses we&apos;ve helped grow
          </p>
        </div>

        <Carousel
          className="max-w-5xl mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => {
              const firstLetter = testimonial.company.charAt(0).toUpperCase();
              const hasImage = testimonial.image !== null && testimonial.image !== undefined;

              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <Card className="bg-gradient-to-br from-[#0F6EEA]/10 to-[#4AA3FF]/5 backdrop-blur-sm border-[#4AA3FF]/30 p-6 md:p-8 h-full hover:border-[#4AA3FF]/50 transition-all">
                    <div className="flex items-center mb-4 md:mb-6">
                      {hasImage ? (
                        <Image
                          src={testimonial.image}
                          alt={testimonial.company}
                          width={64}
                          height={64}
                          className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover mr-3 md:mr-4 ring-2 ring-[#4AA3FF]/30"
                        />
                      ) : (
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#0F6EEA] to-[#4AA3FF] flex items-center justify-center mr-3 md:mr-4 ring-2 ring-[#4AA3FF]/30">
                          <span className="text-white font-bold text-lg md:text-xl">{firstLetter}</span>
                        </div>
                      )}
                      <div>
                        <h4 className="text-white text-base md:text-lg">{testimonial.company}</h4>
                        <p className="text-[#4AA3FF] text-xs md:text-sm">{testimonial.Location}</p>
                      </div>
                    </div>
                    <div className="flex mb-3 md:mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-[#4AA3FF] fill-[#4AA3FF]" size={18} />
                      ))}
                    </div>
                    <p className="text-white/80 italic leading-relaxed text-sm md:text-base">
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="bg-gradient-to-br from-[#0F6EEA]/20 to-[#4AA3FF]/20 border-[#4AA3FF]/30 text-white hover:bg-[#0F6EEA]/30 hover:border-[#4AA3FF]/50 -left-4 md:-left-12" />
          <CarouselNext className="bg-gradient-to-br from-[#0F6EEA]/20 to-[#4AA3FF]/20 border-[#4AA3FF]/30 text-white hover:bg-[#0F6EEA]/30 hover:border-[#4AA3FF]/50 -right-4 md:-right-12" />
        </Carousel>
      </div>
    </section>
  );
}
