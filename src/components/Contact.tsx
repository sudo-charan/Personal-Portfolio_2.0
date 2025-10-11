import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/sudo-charan", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/charanrajm?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/_charannaik_?igsh=eDZscG1zendzbGRk", label: "Instagram" },
    { icon: Mail, href: "mailto:charanrajkbk@gmail.com", label: "Email" },
  ];

  return (
    <section id="contact" className="py-20 bg-background md:grid-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none"></div>
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 animate-fade-in text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">
              <span className="text-primary">&gt;</span> GET IN TOUCH
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground text-sm font-mono">
              // Let's collaborate on your next project
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Connect Section */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">CONNECT</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
                </p>
                
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:charanrajkbk@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    charanrajkbk@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-primary text-sm font-bold mb-4">&gt; SOCIAL</p>
                  <div className="flex gap-4">
                    {socialLinks.slice(0, 3).map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={social.label}
                      >
                        <social.icon className="w-6 h-6" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="animate-fade-in">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="text-sm text-primary font-bold mb-2 block">
                    &gt; NAME
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background border-border focus:border-primary"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-sm text-primary font-bold mb-2 block">
                    &gt; EMAIL
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background border-border focus:border-primary"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm text-primary font-bold mb-2 block">
                    &gt; MESSAGE
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-background border-border focus:border-primary min-h-[150px]"
                    placeholder="Your message..."
                  />
                </div>

                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-primary/30 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse group-hover:animate-none"></div>
                  <Button
                    type="submit"
                    size="lg"
                    className="relative w-full bg-primary text-background hover:bg-primary/90 font-bold border-2 border-primary/20 hover:border-primary/40 transition-all duration-300"
                  >
                    SEND MESSAGE
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
