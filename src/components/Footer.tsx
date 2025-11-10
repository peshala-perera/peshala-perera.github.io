import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Peshala Perera. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <a
              href="https://github.com/peshala-perera"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/peshala-perera-994b411b9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:peshala.s.perera@gmail.com"
              className="text-muted-foreground hover:text-primary transition-smooth"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
