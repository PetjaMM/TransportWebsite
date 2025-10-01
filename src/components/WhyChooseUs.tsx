import { Shield, Clock, DollarSign, Award, Handshake, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhyChooseUs = () => {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "We prioritize the safety of our passengers above all else, with well-maintained vehicles and experienced drivers."
    },
    {
      icon: Clock,
      title: "Punctuality Guaranteed",
      description: "With Maredi Mapheto Tours & Projects, you can trust that your journey will start and end on time, every time."
    },
    {
      icon: DollarSign,
      title: "Affordable Rates",
      description: "Enjoy competitive pricing without compromising on quality or service."
    },
    {
      icon: Award,
      title: "Quality Service",
      description: "We maintain rigorous standards of quality in all aspects of our operations, from vehicle maintenance to customer service."
    },
    {
      icon: Handshake,
      title: "Mutual Respect",
      description: "We value every client and prioritize open communication, respect, and understanding in all our interactions."
    },
    {
      icon: Star,
      title: "Professional Image",
      description: "We uphold a professional and reputable corporate image, reflecting our commitment to excellence and reliability."
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-accent">Us?</span>
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto">
            Our core values and value proposition set us apart in the transportation industry
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur hover:bg-primary-foreground/15 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-4 bg-accent rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-primary-foreground/80 leading-relaxed">{value.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
