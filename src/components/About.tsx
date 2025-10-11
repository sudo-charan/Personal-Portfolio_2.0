import { Code2, Database, Palette, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background grid-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none"></div>
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">
              <span className="text-primary">&gt;</span> ABOUT
            </h2>
            <div className="w-24 h-1 bg-primary"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6 animate-fade-in">
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with expertise in modern web technologies. I 
                specialize in creating innovative digital solutions that combine elegant design with 
                powerful functionality.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a strong foundation in both frontend and backend development, I bring ideas to life 
                through clean code and creative problem-solving. My goal is to build applications that 
                not only work flawlessly but also provide exceptional user experiences.
              </p>
              
              <div className="pt-4">
                <p className="text-sm text-primary font-bold">
                  <span className="text-primary">&gt;</span> STATUS: AVAILABLE FOR PROJECTS
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Code2, title: "Clean Code", desc: "Writing maintainable and scalable solutions" },
                { icon: Database, title: "Backend Expert", desc: "Building robust server-side architectures" },
                { icon: Palette, title: "UI/UX Focus", desc: "Creating beautiful user experiences" },
                { icon: Zap, title: "Performance", desc: "Optimizing for speed and efficiency" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="terminal-border p-6 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 animate-fade-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <item.icon className="w-10 h-10 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
