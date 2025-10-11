import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background grid-background relative">
      <div className="text-center animate-fade-in">
        <h1 className="mb-4 text-4xl md:text-5xl font-bold">
          <span className="text-primary">&gt;</span> 404 ERROR
        </h1>
        <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
        <p className="mb-6 text-muted-foreground text-sm font-mono">
          // Page not found - The requested route doesn't exist
        </p>
        <Link
          to="/"
          className="inline-block text-primary hover:text-primary/80 transition-colors font-bold border border-primary/20 hover:border-primary/40 px-6 py-2 rounded-md hover:bg-primary/5"
        >
          RETURN HOME
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
