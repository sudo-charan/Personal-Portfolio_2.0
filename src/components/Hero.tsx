import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [text, setText] = useState("");
  const [line, setLine] = useState(0);
  const lines = [
    "> INIT SEQUENCE v2.4_",
    "> LOADING MODULES...",
    "> ACCESS GRANTED"
  ];

  useEffect(() => {
    let currentLine = 0;
    let index = 0;
    let displayedLines: string[] = [];
    
    const timer = setInterval(() => {
      if (currentLine < lines.length) {
        if (index <= lines[currentLine].length) {
          displayedLines[currentLine] = lines[currentLine].slice(0, index);
          setText(displayedLines.join("\n"));
          index++;
        } else {
          currentLine++;
          index = 0;
          setLine(currentLine);
        }
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative grid-background">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      {/* Corner Brackets */}
      <div className="absolute top-4 left-4 text-primary text-2xl font-mono z-10">[</div>
      <div className="absolute top-4 right-4 text-primary text-2xl font-mono z-10">]</div>
      <div className="absolute bottom-4 left-4 text-primary text-2xl font-mono z-10">[</div>
      <div className="absolute bottom-4 right-4 text-primary text-2xl font-mono z-10">]</div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-6">
            <div className="text-left mb-8">
              {text.split('\n').map((line, i) => (
                <p key={i} className="text-muted-foreground text-sm font-mono">
                  {line}
                  {i === text.split('\n').length - 1 && <span className="animate-glow-pulse">_</span>}
                </p>
              ))}
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="text-foreground">FULL </span>
              <span className="text-primary">STACK</span>
              <br />
              <span className="text-foreground">DEVELOPER</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-2">
              Crafting innovative digital solutions with modern technologies.
            </p>
            
            <p className="text-sm md:text-base text-primary font-mono mb-8">
              // Expertise Redefined, Experience Reimagined.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary text-background hover:bg-primary/90 font-bold"
                onClick={() => scrollToSection("projects")}
              >
                VIEW PROJECTS
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-background font-bold"
                onClick={() => scrollToSection("contact")}
              >
                GET IN TOUCH
              </Button>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </button>
    </section>
  );
};

export default Hero;
