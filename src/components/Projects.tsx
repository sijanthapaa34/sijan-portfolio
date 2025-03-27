
import Section from "./Section";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);
  
  const projects: Project[] = [
    {
      title: "Bank Management System (Console)",
      description: "A console-based banking system built using core Java technologies.",
      technologies: ["Java", "MySQL", "Hibernate (ORM)"],
      highlights: [
        "Implemented account management functionalities",
        "Built transaction processing system",
        "Designed database schema with Hibernate ORM",
        "Created user authentication and authorization"
      ]
    },
    {
      title: "Bank Management System (Web)",
      description: "Currently working on a web-based version of the banking system with expanded features.",
      technologies: ["Spring Boot", "REST APIs", "MySQL", "Hibernate", "MVC"],
      highlights: [
        "Developing a web-based interface for better user experience",
        "Implementing Spring Boot framework for backend",
        "Building RESTful APIs for client-server communication",
        "Following the MVC architecture pattern"
      ]
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [projects.length]);
  
  return (
    <Section id="projects" title="Personal Projects">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <div className="lg:w-1/3 animate-fade-in-left [animation-delay:300ms]">
          <div className="glass rounded-2xl p-6">
            <h3 className="text-xl font-medium mb-6">My Projects</h3>
            
            <div className="space-y-4">
              {projects.map((project, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={cn(
                    "w-full text-left p-4 rounded-xl transition-all duration-300",
                    activeProject === index
                      ? "bg-primary text-primary-foreground"
                      : "bg-background/50 hover:bg-background"
                  )}
                >
                  {project.title}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="lg:w-2/3 animate-fade-in-right [animation-delay:600ms]">
          <div className="glass rounded-2xl p-8 h-full">
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-medium">{projects[activeProject].title}</h3>
                <div className="flex space-x-2">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveProject(index)}
                      className={cn(
                        "w-3 h-3 rounded-full transition-all duration-300",
                        activeProject === index
                          ? "bg-primary scale-110"
                          : "bg-muted"
                      )}
                      aria-label={`View project ${index + 1}`}
                    ></button>
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mt-2">
                {projects[activeProject].description}
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-medium mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {projects[activeProject].technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-3">Key Features</h4>
              <ul className="space-y-2">
                {projects[activeProject].highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                    <p>{highlight}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
