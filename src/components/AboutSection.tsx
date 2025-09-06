import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 lg:py-32 bg-luxury-black text-luxury-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className={`text-4xl lg:text-6xl font-bold mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Our Story
          </h2>
          
          <div 
            className={`prose prose-lg prose-invert mx-auto transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-xl leading-relaxed mb-6 text-luxury-white/90">
              Born from a passion for artisanal craftsmanship and timeless elegance, 
              <span className="text-luxury-gold font-medium"> Luxé</span> represents the pinnacle of 
              luxury fragrance creation.
            </p>
            
            <p className="text-lg leading-relaxed mb-6 text-luxury-white/80">
              Our master perfumers travel the world seeking the finest ingredients, 
              from rare Bulgarian roses to precious oud from the forests of Assam. 
              Each bottle contains not just a fragrance, but a carefully curated 
              experience that speaks to the soul.
            </p>
            
            <p className="text-lg leading-relaxed text-luxury-white/80">
              We believe that true luxury lies not in excess, but in the perfect 
              balance of exceptional quality, timeless design, and the artistry 
              that transforms the everyday into the extraordinary.
            </p>
          </div>

          <div 
            className={`mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-luxury-gold mb-2">25+</div>
              <div className="text-luxury-white/70">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-luxury-gold mb-2">100+</div>
              <div className="text-luxury-white/70">Rare Ingredients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-luxury-gold mb-2">50k+</div>
              <div className="text-luxury-white/70">Satisfied Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;