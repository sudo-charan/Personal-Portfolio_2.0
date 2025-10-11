const skillCategories = [
  {
    title: "FRONTEND",
    skills: ["React.js", "TypeScript", "Next.js", "Tailwind CSS", "HTML5/CSS3"],
  },
  {
    title: "BACKEND",
    skills: ["Node.js", "Express", "RESTful APIs", "PostgreSQL", "MongoDB", "MySql"],
  },
  {
    title: "PROGRAMMING",
    skills: ["JavaScript", "Python", "C++", "Java", "SQL", "Php"],
  },
  {
    title: "TOOLS",
    skills: ["VS Code", "Git & GitHub", "Postman", "Vite", "Figma"],
  },
  {
    title: "DEVOPS",
    skills: ["Docker", "AWS", "Linux"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background grid-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none"></div>
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">
              <span className="text-primary">&gt;</span> SKILLS
            </h2>
            <div className="w-24 h-1 bg-primary mb-4"></div>
            <p className="text-muted-foreground text-sm font-mono">
              // Technologies and tools I work with
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="terminal-border p-6 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-bold text-primary mb-4">
                  &gt; {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="text-sm text-muted-foreground flex items-start gap-2 hover:text-primary hover:bg-primary/5 px-2 py-1 rounded transition-all duration-200 cursor-pointer"
                    >
                      <span className="text-primary mt-1">▸</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="terminal-border p-6 bg-card/30 backdrop-blur-sm border-primary animate-fade-in">
            <div className="flex justify-between items-center flex-wrap gap-4">
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">CONTINUOUS LEARNING</h3>
                <p className="text-sm text-muted-foreground">
                  Always exploring new technologies and staying updated with industry trends
                </p>
              </div>
              <div className="text-primary font-mono text-sm">
                <span className="animate-blink">&gt;</span> LEVEL_UP();
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
