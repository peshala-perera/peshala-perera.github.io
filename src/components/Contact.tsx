import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, MapPin, Download, Quote } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const testimonials = [
  {
    name: "Dion Jansz",
    title: "Cabin Manager, SriLankan Airlines",
    quote: "Exceptional professional with outstanding technical skills and work ethic.",
  },
  {
    name: "Pasan Heiyantuduwa",
    title: "Data Analyst, MAS Holdings",
    quote: "Brilliant engineer who consistently delivers high-quality solutions.",
  },
];

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleDownloadCV = () => {
    toast({
      title: "CV Download",
      description: "CV download will be available soon.",
    });
  };

  return (
    <section id="contact" className="py-20 bg-card/50">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-6 border-border/50 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <a href="mailto:peshala.s.perera@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-smooth">
                    <Mail className="h-5 w-5" />
                    <span>peshala.s.perera@gmail.com</span>
                  </a>
                  
                  <a href="tel:+94740201607" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-smooth">
                    <Phone className="h-5 w-5" />
                    <span>+94 74 020 1607</span>
                  </a>
                  
                  <a href="https://linkedin.com/in/peshala-perera-994b411b9" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-smooth">
                    <Linkedin className="h-5 w-5" />
                    <span>linkedin.com/in/peshala-perera-994b411b9</span>
                  </a>
                  
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="h-5 w-5" />
                    <span>Sri Lanka</span>
                  </div>
                </div>

                <Button
                  onClick={handleDownloadCV}
                  className="w-full mt-6 gradient-primary text-white hover:opacity-90 transition-smooth"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download CV
                </Button>
              </Card>

              {/* Testimonials */}
              <Card className="p-6 border-border/50 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Quote className="h-5 w-5 text-primary" />
                  Testimonials
                </h3>
                <div className="space-y-4">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="border-l-2 border-primary pl-4">
                      <p className="text-sm text-muted-foreground italic mb-2">"{testimonial.quote}"</p>
                      <p className="text-sm font-semibold">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-6 border-border/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full gradient-primary text-white hover:opacity-90 transition-smooth"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
