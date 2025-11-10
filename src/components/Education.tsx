import { Card } from "@/components/ui/card";
import { GraduationCap, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const education = [
  {
    degree: "BSc in Computer Science",
    institution: "University of Westminster",
    period: "2020 – 2025",
  },
  {
    degree: "BCS International Higher Education Qualification (HEQ)",
    institution: "BCS",
    period: "2020 – 2023",
  },
];

const publications = [
  {
    title: "Recent Trends and Challenges in Assistive Applications for Sinhala-Speaking Adults with Dyslexia",
    venue: "IEEE, 2025",
    link: "#",
  },
  {
    title: "A Low-Resource Speech-Driven NLP Pipeline for Sinhala Dyslexia Assistance",
    venue: "ACL, 2025",
    link: "#",
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Education */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Education
            </h2>

            <div className="grid gap-6">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 border-border/50 backdrop-blur-sm transition-smooth hover:scale-105 hover:border-primary/50">
                  <div className="flex items-start gap-4">
                    <GraduationCap className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground mt-1">{edu.period}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Research Publications */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-3">
              <FileText className="h-8 w-8 text-primary" />
              Research Publications
            </h3>

            <div className="space-y-4">
              {publications.map((pub, index) => (
                <Card key={index} className="p-6 border-border/50 backdrop-blur-sm transition-smooth hover:border-primary/50">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2 leading-relaxed">{pub.title}</h4>
                      <p className="text-sm text-muted-foreground">{pub.venue}</p>
                    </div>
                    <Button variant="outline" size="sm" asChild className="transition-smooth hover:border-primary">
                      <a href={pub.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 whitespace-nowrap">
                        View Paper
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}

              <Card className="p-6 border-border/50 backdrop-blur-sm transition-smooth hover:border-primary/50">
                <div className="flex items-center justify-between">
                  <p className="font-semibold">More publications on arXiv</p>
                  <Button variant="outline" size="sm" asChild className="transition-smooth hover:border-primary">
                    <a href="https://arxiv.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      Visit arXiv
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
