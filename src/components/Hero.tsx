import { Mail, Phone, Linkedin, Github, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/profile.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Tech background"
          className="w-full h-full object-cover opacity-20 dark:opacity-10"
        />
        <div className="absolute inset-0 gradient-hero opacity-90" />
      </div>

      {/* Animated grid overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(hsl(199 89% 48% / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(199 89% 48% / 0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Profile Image */}
          <div className="flex justify-center">
            <img
              src={profileImage}
              alt="Peshala Perera"
              className="w-64 h-64 rounded-full object-cover border-4 border-primary"
            />
          </div>

          {/* Name and title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-glow">
                Peshala Perera
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground/90">
              Full-Stack Software Engineer
            </h2>
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Building scalable, secure, and elegant software that bridges
            innovation with impact.
          </p>

          {/* Contact links */}
          <div className="flex flex-wrap gap-4 justify-center items-center pt-4">
            <Button
              variant="outline"
              size="lg"
              asChild
              className="transition-smooth hover:scale-105 hover:border-primary"
            >
              <a
                href="mailto:peshala.s.perera@gmail.com"
                className="flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">
                  peshala.s.perera@gmail.com
                </span>
                <span className="sm:hidden">Email</span>
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="transition-smooth hover:scale-105 hover:border-primary"
            >
              <a href="tel:+94740201607" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +94 74 020 1607
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="transition-smooth hover:scale-105 hover:border-primary"
            >
              <a
                href="https://linkedin.com/in/peshala-perera-994b411b9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="transition-smooth hover:scale-105 hover:border-primary"
            >
              <a
                href="https://github.com/peshala-perera"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="gradient-primary text-white hover:opacity-90 transition-smooth hover:scale-105 glow-primary"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="transition-smooth hover:scale-105"
            >
              <a href="#projects">View Projects</a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-primary" />
        </div>
      </div>
    </section>
  );
};
