
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background py-12 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="text-xl font-bold">
              Sijan<span className="text-primary">.dev</span>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              Java Developer & BIT Student
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center md:space-x-12">
            <div className="mb-6 md:mb-0">
              <h3 className="text-sm font-medium mb-4 text-center md:text-left">Quick Links</h3>
              <div className="flex space-x-4">
                <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </a>
                <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Skills
                </a>
                <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </a>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-4 text-center md:text-left">Connect</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/sijanthapaa34" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a 
                  href="https://linkedin.com/in/sijan-thapa-a00182302" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="mailto:sijanmgr034@gmail.com" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">&copy; {currentYear} Sijan Thapa. All rights reserved.</p>
          <p className="text-xs text-muted-foreground mt-2 md:mt-0">Designed with precision and care</p>
        </div>
      </div>
    </footer>
  );
}
