import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in <span className="text-accent">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to book your transportation? Contact us today and let us take care of your travel needs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2 shadow-xl">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent rounded-lg">
                      <MapPin className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Address</h3>
                      <p className="text-muted-foreground">11 Kuwait Crescent<br />Cosmo City, Randburg</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent rounded-lg">
                      <Phone className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone</h3>
                      <a href="tel:0732049757" className="text-muted-foreground hover:text-accent transition-colors">
                        073 204 9757
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent rounded-lg">
                      <Mail className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <a href="mailto:info@mareditravels.co.za" className="text-muted-foreground hover:text-accent transition-colors">
                        info@mareditravels.co.za
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent rounded-lg">
                      <Globe className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Website</h3>
                      <a href="https://www.mareditravels.co.za" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                        www.mareditravels.co.za
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 p-6 rounded-lg flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">Ready to Book?</h3>
                  <p className="text-muted-foreground mb-6">
                    Contact us today for a personalized quote and experience the difference of reliable, 
                    professional transportation service.
                  </p>
                  <div className="space-y-3">
                    <Button asChild className="w-full" size="lg" variant="default">
                      <a href="tel:0732049757">
                        <Phone className="mr-2 h-5 w-5" />
                        Call Us Now
                      </a>
                    </Button>
                    <Button asChild className="w-full" size="lg" variant="secondary">
                      <a href="mailto:info@mareditravels.co.za">
                        <Mail className="mr-2 h-5 w-5" />
                        Send Email
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
