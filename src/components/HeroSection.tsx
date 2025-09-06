import { Button } from "@/components/ui/button";
import heroImage from "@/assets/perfume-hero.jpg";
import floatingBottle from "@/assets/floating-bottle-1.png";

const HeroSection = () => {
  const scrollToProducts = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden gradient-hero">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={floatingBottle}
          alt="Floating bottle"
          className="absolute top-20 right-10 w-32 h-32 opacity-20 animate-float"
        />
        <img
          src={floatingBottle}
          alt="Floating bottle"
          className="absolute bottom-20 left-10 w-24 h-24 opacity-15 animate-float-delay"
        />
        <div className="absolute top-40 left-1/4 w-2 h-2 bg-luxury-gold rounded-full opacity-60 animate-float"></div>
        <div className="absolute bottom-40 right-1/4 w-1 h-1 bg-luxury-gold rounded-full opacity-80 animate-float-delay"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-luxury-white mb-6 animate-fade-in">
              Elegance
              <span className="block text-luxury-gold">Redefined</span>
            </h1>
            <p className="text-xl text-luxury-white/90 mb-8 max-w-lg mx-auto lg:mx-0 animate-slide-up">
              Discover our exclusive collection of luxury fragrances crafted for the sophisticated soul.
            </p>
            <Button 
              variant="luxury" 
              size="lg" 
              onClick={scrollToProducts}
              className="animate-slide-up"
            >
              Explore Collection
            </Button>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="relative">
              <img
                src={heroImage}
                alt="Luxury perfume collection"
                className="w-full max-w-md mx-auto rounded-2xl shadow-luxury"
              />
              <div className="absolute -inset-4 gradient-gold opacity-20 blur-xl rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;