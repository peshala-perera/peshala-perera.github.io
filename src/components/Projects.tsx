import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion"; // Using Radix UI Accordion

const projects = [
  {
    title: "FinPay",
    description:
      "Fintech web application for secure digital transactions with multi-role authentication and automated deployment pipelines.",
    tech: ["Laravel", "React", "AWS", "Docker", "PostgreSQL"],
    highlights: [
      "Multi-role authentication",
      "CI/CD pipelines",
      "Payment gateway integration",
    ],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "EduLink",
    description:
      "Comprehensive e-learning platform for course management, student enrollment, and progress tracking.",
    tech: ["Node.js", "Vue.js", "PostgreSQL", "Redis"],
    highlights: [
      "Scalable RESTful APIs",
      "Real-time dashboards",
      "Video streaming",
    ],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Dyslexia NLP Assistant",
    description:
      "Research-driven NLP application providing speech recognition and language assistance for Sinhala-speaking adults with dyslexia.",
    tech: ["Python", "PyTorch", "Node.js", "React"],
    highlights: [
      "Low-resource speech recognition",
      "NLP pipeline",
      "Accessibility features",
    ],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "CloudSync",
    description:
      "Enterprise file synchronization and collaboration platform with real-time updates and version control.",
    tech: ["Node.js", "React", "AWS S3", "WebSockets"],
    highlights: ["Real-time sync", "Version control", "Team collaboration"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "HealthTrack",
    description:
      "Mobile health monitoring application with wearable device integration and personalized health insights.",
    tech: ["Flutter", "Firebase", "Node.js", "MongoDB"],
    highlights: [
      "Wearable integration",
      "Health analytics",
      "Push notifications",
    ],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "ShopEase",
    description:
      "E-commerce platform with inventory management, payment processing, and order fulfillment automation.",
    tech: ["Laravel", "Vue.js", "MySQL", "Stripe"],
    highlights: [
      "Inventory management",
      "Payment processing",
      "Order automation",
    ],
    github: "https://github.com",
    demo: "https://example.com",
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
                      <p className="text-xs font-semibold text-primary mb-2">
                        Technologies:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-primary mb-2">
                        Highlights:
                      </p>
                      <ul className="space-y-1">
                        {project.highlights.map((highlight, hIndex) => (
                          <li
                            key={hIndex}
                            className="text-xs text-muted-foreground flex items-start gap-1"
                          >
                            <span className="text-primary">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 pt-4 border-t border-border/50">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 transition-smooth hover:border-primary"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 transition-smooth hover:border-primary"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <div className="container py-20 px-4">
        <div className="max-w-6xl mx-auto"></div>

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Explore More Projects
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

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value={`details-${index}`}>
                    <AccordionTrigger className="text-xs font-semibold text-primary mb-2">
                      Project Details
                    </AccordionTrigger>
                    <AccordionContent className="space-y-3">
                      {/* Description Section */}
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies Section */}
                      <div>
                        <p className="text-xs font-semibold text-primary mb-2">
                          Technologies:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="outline"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Highlights Section */}
                      <div>
                        <p className="text-xs font-semibold text-primary mb-2">
                          Highlights:
                        </p>
                        <ul className="space-y-1">
                          {project.highlights.map((highlight, hIndex) => (
                            <li
                              key={hIndex}
                              className="text-xs text-muted-foreground flex items-start gap-1"
                            >
                              <span className="text-primary">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="flex gap-2 pt-4 border-t border-border/50">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 transition-smooth hover:border-primary"
                  onClick={() => window.open(project.github, "_blank")}
                >
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 transition-smooth hover:border-primary"
                  onClick={() => window.open(project.demo, "_blank")}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Demo
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
