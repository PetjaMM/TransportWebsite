import { Target, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-accent">Maredi Mapheto</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Welcome to Maredi Mapheto Tours & Projects, your trusted partner in safe, reliable, and convenient 
            transportation services. Established in 2022, we pride ourselves on delivering top-tier transport 
            solutions primarily in the Gauteng and Limpopo Provinces, with a strong vision to expand nationally.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            Committed to the principles of Broad-Based Black Economic Empowerment (BBBEE), we aim to uplift 
            previously marginalized groups while providing exceptional service to all our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-accent rounded-lg">
                  <Eye className="h-8 w-8 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Our Vision</h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To become the leading provider of transportation services nationwide, setting the standard 
                for excellence in safety, reliability, and customer care.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-accent rounded-lg">
                  <Target className="h-8 w-8 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Our Mission</h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To provide our clients with safe, timely, and affordable transportation solutions that exceed 
                expectations through innovation, integrity, and a relentless focus on quality.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
