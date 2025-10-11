import { Calendar, MapPin, Building, GraduationCap, Home, Globe } from "lucide-react";

const Resume = () => {
  const experiences = [
    {
      title: "Java Developer Intern",
      company: "Elevate Labs",
      location: "Banglore, India",
      period: "Jun 2025 - Jul 2025",
      type: "Remote",  // Added: "Onsite" or "Remote"
      description: "Completed a remote Java Developer Internship at Elevate Labs, where I developed and optimized JavaFX-based applications, integrated MySQL databases, and collaborated in an agile development environment.",
    },
    {
      title: "FullStack Development Intern",
      company: "Zephyr Technology and Solutions Pvt. Ltd.",
      location: "Manglore, India",
      period: "Jan 2024 - Apr 2024",
      type: "Onsite",  // Added: "Onsite" or "Remote"
      description: " Contributed to the development of dynamic web applications, enhancing performance",
    },
    // Add more experiences as needed
  ];

  const education = [
    {
      degree: "B.Tech in Information Science Engineering",
      institution: "NMAM Institution of Technology",
      location: "Nitte, India",
      period: "2024 - Present",
      description: "Relevant coursework, projects, or achievements during your studies.",
    },

    {
      degree: "Diploma in Computer Science",
      institution: "Vivekananda Polytechnic College ",
      location: "Puttur, India",
      period: "2020 - 2024",
      description: "Gained foundational skills in programming, databases, and software development with hands-on project experience.",
    },

    {
      degree: "Pre-University College (Commerce)",
      institution: "Govt PU College",
      location: "Kombettu, India",
      period: "2019 - 2021",
      description: "Completed pre-university studies in Commerce, developing foundational knowledge in accounting, economics, and business principles.",
    },

    {
      degree: "Secondary School",
      institution: "Shri Ramakrishna High School",
      location: "Puttur, India",
      period: "2019 - 2021",
      description: "Completed secondary education, building a strong foundation in core subjects and extracurricular activities.",
    },
    // Add more education entries as needed
  ];

  return (
    <section id="resume" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">
              <span className="text-primary">&gt;</span> RESUME
            </h2>
            <div className="w-24 h-1 bg-primary"></div>
          </div>

          {/* Experience Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Building className="w-6 h-6 text-primary mr-3" />
              Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="terminal-border p-6 bg-card/30 backdrop-blur-sm animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-foreground">{exp.title}</h4>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="mt-2 md:mt-0 md:text-right">
                      <p className="text-muted-foreground flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </p>
                      <p className="text-muted-foreground flex items-center mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </p>
                      <p className={`flex items-center mt-1 ${exp.type === 'Remote' ? 'text-green-500' : 'text-blue-500'}`}>
                        {exp.type === 'Remote' ? <Globe className="w-4 h-4 mr-1" /> : <Home className="w-4 h-4 mr-1" />}
                        {exp.type}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <GraduationCap className="w-6 h-6 text-primary mr-3" />
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="terminal-border p-6 bg-card/30 backdrop-blur-sm animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-foreground">{edu.degree}</h4>
                      <p className="text-primary font-medium">{edu.institution}</p>
                    </div>
                    <div className="mt-2 md:mt-0 md:text-right">
                      <p className="text-muted-foreground flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.period}
                      </p>
                      <p className="text-muted-foreground flex items-center mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        {edu.location}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
