const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            <span className="text-primary">&gt;</span> Built with React, TypeScript & Tailwind CSS
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © {new Date().getFullYear()} All Rights Reserved. Made by <span className="text-primary font-medium">Charanraj M</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
