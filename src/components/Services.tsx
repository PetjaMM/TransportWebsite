import { GraduationCap, Church, Briefcase, Heart, Calendar, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "School Trips",
      description: "Safe and reliable transportation for school outings, field trips, and extracurricular activities."
    },
    {
      icon: Church,
      title: "Church Trips",
      description: "Transportation services for church retreats, conferences, and other religious events."
    },
    {
      icon: Briefcase,
      title: "Corporate Trips",
      description: "Convenient transport solutions for team-building exercises, business meetings, and corporate events."
    },
    {
      icon: Heart,
      title: "Weddings",
      description: "Let us take care of your wedding transportation needs, ensuring a seamless experience for you and your guests."
    },
    {
      icon: Calendar,
      title: "Events",
      description: "Transportation services for concerts, sports tournaments, and all types of events."
    },
    {
      icon: Users,
      title: "Private Trips",
      description: "Tailored services for family or friend outings, providing comfort, convenience, and peace of mind."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We cater to a diverse range of clients with a varied fleet of vehicles, ensuring your transportation 
            needs are met with excellence and care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-2 hover:border-accent hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                      <Icon className="h-8 w-8 text-accent group-hover:text-accent-foreground" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
