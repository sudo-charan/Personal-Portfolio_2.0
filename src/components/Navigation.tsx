import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();  // To detect current page

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsMobileMenuOpen(false);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "HOME", id: "home" },
    { label: "ABOUT", id: "about" },
    { label: "RESUME", id: "resume" },
    { label: "SKILLS", id: "skills" },
    { label: "PROJECTS", id: "projects" },
    { label: "CONTACT", id: "contact" },
  ];

  const isProfilePage = location.pathname === "/profile";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-black/90 backdrop-blur-md border-b border-border md:border-b-0" 
          : "bg-black md:bg-transparent md:backdrop-blur-none backdrop-blur-sm md:border-b-0 border-b border-border"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="text-sm font-bold flex items-center gap-2"
          >
            <span className="text-primary">&gt;_</span>
            <span className="text-primary">Charanraj M</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => isProfilePage ? window.location.href = `/#${link.id}` : scrollToSection(link.id)}
                className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="text-primary">&gt;</span> {link.label}
              </button>
            ))}
            <Link
              to="/profile"
              className="ml-4 px-6 py-2 bg-primary text-background font-bold text-sm hover:bg-primary/90 transition-colors"
            >
              PROFILE
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => isProfilePage ? window.location.href = `/#${link.id}` : scrollToSection(link.id)}
                className="block w-full text-left py-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="text-primary">&gt;</span> {link.label}
              </button>
            ))}
            <Link
              to="/profile"
              className="block w-full text-left py-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-primary">&gt;</span> PROFILE
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
