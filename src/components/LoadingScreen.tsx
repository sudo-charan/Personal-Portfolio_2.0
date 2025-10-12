import { useState, useEffect } from "react";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          setIsLoading(false);
          clearInterval(timer);
          return 100;
        }
        return prevProgress + 2;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-background grid-background flex items-center justify-center">
      <div className="text-center animate-fade-in">
        {/* Animated Logo */}
        <div className="mb-8 flex items-center justify-center gap-3">
          <span className="text-2xl font-bold text-primary animate-pulse">
            &gt;_
          </span>
          <span className="text-2xl font-bold text-primary animate-pulse" style={{ animationDelay: '0.2s' }}>
            Charanraj M
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-border rounded-full mx-auto mb-4 overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Loading Text */}
        <p className="text-muted-foreground text-sm font-mono">
          // Initializing portfolio...
        </p>

        {/* Animated Dots */}
        <div className="flex justify-center gap-1 mt-2">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="w-2 h-2 bg-primary rounded-full animate-pulse"
              style={{ animationDelay: `${index * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
