import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Ansely Pvt Ltd",
    period: "Aug 2025 – Present",
    highlights: [
      "Designed and developed scalable backend systems with high reliability",
      "Built and maintained RESTful APIs and microservices",
      "Mentored engineers through code reviews and design sessions",
      "Drove sprint planning, technical strategy, and collaboration",
    ],
    current: true,
  },
  {
    title: "Software Engineer",
    company: "XGen Group",
    period: "Apr 2023 – Aug 2025",
    highlights: [
      "Architected and maintained CI/CD pipelines using Docker",
      "Integrated AWS S3 and document workflows into fintech platforms",
      "Conducted code reviews, pair-programming, and technical demos",
      "Developed full-stack fintech solutions with Laravel, React, Vue, Node.js, and Flutter",
    ],
  },
  {
    title: "Associate Software Engineer",
    company: "XGen Group",
    period: "Sep 2021 – Apr 2023",
    highlights: [
      "Delivered full-stack fintech systems and optimized SQL transactions",
      "Automated testing and enforced SOLID principles",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "XGen Group",
    period: "Apr 2021 – Sep 2021",
    highlights: [
      "Supported backend and frontend development in production",
      "Learned Git branching, CI workflows, and agile processes",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-card/50">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Experience
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-primary/20" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-12 md:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-2 md:left-6 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                  <Card className="p-6 border-border/50 backdrop-blur-sm transition-smooth hover:scale-105 hover:border-primary/50">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-bold flex items-center gap-2">
                          <Briefcase className="h-5 w-5 text-primary" />
                          {exp.title}
                        </h3>
                        <p className="text-lg text-muted-foreground">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={exp.current ? "default" : "secondary"} className="whitespace-nowrap">
                          {exp.period}
                        </Badge>
                        {exp.current && (
                          <Badge className="bg-green-500 text-white">Current</Badge>
                        )}
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
