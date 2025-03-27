
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
      </div>
      
      <div 
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center transition-opacity duration-700 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-48 h-48 md:w-56 md:h-56 mb-8 relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-blue-400 animate-pulse opacity-75 blur-xl"></div>
          <img
            src="/lovable-uploads/041741cb-41e4-46d5-a18b-78f0a460a25a.png"
            alt="Sijan Thapa"
            className="w-full h-full object-cover rounded-full border-4 border-background relative z-10"
            style={{ objectPosition: "center top" }}
          />
        </div>
        
        <div className="animate-fade-in [animation-delay:300ms]">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="block">Sijan Thapa</span>
            <span className="text-primary text-2xl md:text-3xl font-medium block mt-2">
              Java Developer
            </span>
          </h1>
        </div>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mt-6 animate-fade-in [animation-delay:600ms]">
          A dedicated BIT student with a passion for Java development and problem-solving.
        </p>
        
        <div className="mt-12 animate-fade-in [animation-delay:900ms]">
          <a
            href="#about"
            className="flex items-center justify-center gap-2 py-3 px-6 rounded-full glass hover:ring-2 ring-primary/50 transition-all"
          >
            Learn more about me
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
