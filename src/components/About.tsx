import { Code2, Layers, Cloud, Shield, Users, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const highlights = [
  { icon: Code2, label: "Full-Stack Development" },
  { icon: Layers, label: "Microservices Architecture" },
  { icon: Cloud, label: "CI/CD Automation" },
  { icon: Shield, label: "Secure Coding (OAuth2, JWT)" },
  { icon: Users, label: "Agile & DevOps Collaboration" },
  { icon: Award, label: "Mentoring & Leadership" },
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Me
          </h2>

          <Card className="p-8 md:p-12 border-border/50 backdrop-blur-sm">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Results-oriented Full-Stack Software Engineer with over four years of progressive experience 
              delivering high-impact solutions in fintech and enterprise systems. Proven track record in 
              frontend and backend development, leading backend architecture, and deploying scalable 
              microservices in cloud-native environments. Adept at building responsive web and mobile 
              applications using modern frameworks and tools. Passionate about code quality, system 
              reliability, and continuous learning.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-3 p-4 rounded-lg bg-muted/50 transition-smooth hover:scale-105 hover:bg-primary/10"
                  >
                    <Icon className="h-8 w-8 text-primary" />
                    <span className="text-sm font-medium text-center">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
