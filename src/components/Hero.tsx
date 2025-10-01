import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroImage from "@/assets/hero-transport.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Transportation Services" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70"></div>
      </div>

      {/* Decorative Diagonal Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-background/5 transform skew-x-12 translate-x-1/4"></div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Your Trusted Partner in{" "}
            <span className="text-accent">Safe & Reliable</span> Transport
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
            Journey with Confidence, Arrive with Satisfaction
          </p>
          <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl">
            Established in 2022, Maredi Mapheto Tours & Projects provides safe, reliable, and affordable 
            transportation solutions across Gauteng and Limpopo Provinces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={scrollToContact} size="lg" variant="secondary" className="text-lg px-8 py-6">
              Get a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href="tel:0732049757">
                <Phone className="mr-2 h-5 w-5" />
                073 204 9757
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
