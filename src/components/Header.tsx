import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img src={logo} alt="Maredi Mapheto Tours & Projects" className="h-20 w-auto" />
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("home")} className="text-primary-foreground hover:text-accent transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-primary-foreground hover:text-accent transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("services")} className="text-primary-foreground hover:text-accent transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("why-us")} className="text-primary-foreground hover:text-accent transition-colors">
              Why Us
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-primary-foreground hover:text-accent transition-colors">
              Contact
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <a href="tel:0732049757" className="hidden lg:flex items-center gap-2 text-primary-foreground hover:text-accent transition-colors">
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">073 204 9757</span>
            </a>
            <Button onClick={() => scrollToSection("contact")} variant="secondary" size="sm">
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
