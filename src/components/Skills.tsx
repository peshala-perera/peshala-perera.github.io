import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "Vue.js", "Next.js", "Flutter", "Redux", "Tailwind CSS", "Material UI", "Bootstrap", "Responsive Design", "Micro-Frontend Architecture"],
    color: "text-blue-500",
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Laravel", "RESTful APIs", "GraphQL", "WebSockets", "Serverless", "API Gateway"],
    color: "text-green-500",
  },
  {
    title: "Security",
    skills: ["OAuth2", "JWT", "RBAC", "Secure Coding Standards"],
    color: "text-red-500",
  },
  {
    title: "Databases",
    skills: ["MSSQL", "PostgreSQL", "MySQL", "Oracle", "MongoDB", "Redis", "Firebase", "Data Modeling", "SQL Optimization"],
    color: "text-purple-500",
  },
  {
    title: "DevOps & Cloud",
    skills: ["Docker", "CI/CD (GitHub Actions, GitLab CI)", "AWS (Lambda, S3, EC2)", "Nginx", "Linux/Unix", "SonarQube"],
    color: "text-orange-500",
  },
  {
    title: "Testing & Quality",
    skills: ["Jest", "Mocha", "TDD", "Swagger/OpenAPI"],
    color: "text-cyan-500",
  },
  {
    title: "Core Practices",
    skills: ["SOLID", "Clean Code", "Design Patterns", "System Design", "Scalability Optimization"],
    color: "text-pink-500",
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 border-border/50 backdrop-blur-sm transition-smooth hover:scale-105 hover:border-primary/50"
              >
                <h3 className={`text-xl font-semibold mb-4 ${category.color}`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-sm transition-smooth hover:bg-primary hover:text-primary-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
