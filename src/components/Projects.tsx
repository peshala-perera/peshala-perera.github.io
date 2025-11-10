import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "FinPay",
    description: "Fintech web application for secure digital transactions with multi-role authentication and automated deployment pipelines.",
    tech: ["Laravel", "React", "AWS", "Docker", "PostgreSQL"],
    highlights: ["Multi-role authentication", "CI/CD pipelines", "Payment gateway integration"],
  },
  {
    title: "EduLink",
    description: "Comprehensive e-learning platform for course management, student enrollment, and progress tracking.",
    tech: ["Node.js", "Vue.js", "PostgreSQL", "Redis"],
    highlights: ["Scalable RESTful APIs", "Real-time dashboards", "Video streaming"],
  },
  {
    title: "Dyslexia NLP Assistant",
    description: "Research-driven NLP application providing speech recognition and language assistance for Sinhala-speaking adults with dyslexia.",
    tech: ["Python", "PyTorch", "Node.js", "React"],
    highlights: ["Low-resource speech recognition", "NLP pipeline", "Accessibility features"],
  },
  {
    title: "CloudSync",
    description: "Enterprise file synchronization and collaboration platform with real-time updates and version control.",
    tech: ["Node.js", "React", "AWS S3", "WebSockets"],
    highlights: ["Real-time sync", "Version control", "Team collaboration"],
  },
  {
    title: "HealthTrack",
    description: "Mobile health monitoring application with wearable device integration and personalized health insights.",
    tech: ["Flutter", "Firebase", "Node.js", "MongoDB"],
    highlights: ["Wearable integration", "Health analytics", "Push notifications"],
  },
  {
    title: "ShopEase",
    description: "E-commerce platform with inventory management, payment processing, and order fulfillment automation.",
    tech: ["Laravel", "Vue.js", "MySQL", "Stripe"],
    highlights: ["Inventory management", "Payment processing", "Order automation"],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-card/50">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 border-border/50 backdrop-blur-sm transition-smooth hover:scale-105 hover:border-primary/50 flex flex-col"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-xs font-semibold text-primary mb-2">Technologies:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-primary mb-2">Highlights:</p>
                      <ul className="space-y-1">
                        {project.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="text-xs text-muted-foreground flex items-start gap-1">
                            <span className="text-primary">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 pt-4 border-t border-border/50">
                  <Button variant="outline" size="sm" className="flex-1 transition-smooth hover:border-primary">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 transition-smooth hover:border-primary">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
