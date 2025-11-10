import { Card } from "@/components/ui/card";
import { Brain, Users, MessageSquare, Target, BookOpen, Eye, Lightbulb, Award } from "lucide-react";

const softSkills = [
  { icon: Brain, label: "Analytical Thinking & Problem Solving", level: 95 },
  { icon: Users, label: "Leadership & Mentoring", level: 90 },
  { icon: MessageSquare, label: "Collaboration & Communication", level: 92 },
  { icon: Target, label: "Project Management", level: 88 },
  { icon: BookOpen, label: "Continuous Learning", level: 95 },
  { icon: Eye, label: "Attention to Detail", level: 93 },
  { icon: Lightbulb, label: "Innovation & Initiative", level: 90 },
  { icon: Award, label: "Ownership & Accountability", level: 94 },
];

export const SoftSkills = () => {
  return (
    <section id="soft-skills" className="py-20">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Professional Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card
                  key={index}
                  className="p-6 border-border/50 backdrop-blur-sm transition-smooth hover:scale-105 hover:border-primary/50"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <Icon className="h-8 w-8 text-primary flex-shrink-0" />
                    <h3 className="font-semibold">{skill.label}</h3>
                  </div>
                  
                  <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full gradient-primary transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  
                  <p className="text-xs text-muted-foreground text-right mt-2">{skill.level}%</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
