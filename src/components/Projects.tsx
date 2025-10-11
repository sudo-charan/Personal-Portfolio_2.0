import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Food Recipe Finder Website",
    description: "Recipe Finder Website is a PHP-based platform for discovering diverse recipes tailored to user preferences and dietary needs.",
    tech: ["Php", "JavaScript", "Api", "Html", "Css"],
    github: "https://github.com/sudo-charan/Food_recipe_finder-PHP",
    demo: "#",
  },
  {
    title: "Image Search Engine",
    description: "Simple image search engine using the Unsplash API, built with HTML, CSS, and JavaScript. Features responsive design, keyword-based image search, and 'Show more' functionality. Explore and discover high-quality images effortlessly.",
    tech: ["Html", "Css", "JavaScript", "Api"],
    github: "https://github.com/sudo-charan/image_search_engine",
    demo: "https://image-search-engine-tawny-zeta.vercel.app/",
  },
  {
    title: "Analytics Dashboard",
    description: "Data visualization platform with interactive charts and insights",
    tech: ["React", "D3.js", "Python", "FastAPI"],
    github: "#",
    demo: "#",
  },
  {
    title: "Social Media App",
    description: "Modern social platform with messaging and content sharing",
    tech: ["React Native", "Firebase", "Redux", "Node.js"],
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 grid-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">
              <span className="text-primary">&gt;</span> PROJECTS
            </h2>
            <div className="w-24 h-1 bg-primary mb-4"></div>
            <p className="text-muted-foreground text-sm font-mono">
              // Showcasing my latest work and innovations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`p-6 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 animate-fade-in group border border-border hover:border-primary`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View code"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-background border border-border text-muted-foreground text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold"
            >
              VIEW ALL PROJECTS
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
