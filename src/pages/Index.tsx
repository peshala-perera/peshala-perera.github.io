import { DarkModeToggle } from "@/components/DarkModeToggle";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";
import { SoftSkills } from "@/components/SoftSkills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <DarkModeToggle />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <SoftSkills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
