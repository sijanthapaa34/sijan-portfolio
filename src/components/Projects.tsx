
import Section from "./Section";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Code, Server, Database, Shield, Lock } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  demoLink?: string;
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);
  
  const projects: Project[] = [
    {
      title: "Bank Management System (Web)",
      description: "Currently working on a web-based version of the banking system with expanded features and enhanced security.",
      technologies: ["Spring Boot", "React", "REST APIs", "MySQL", "Hibernate", "MVC"],
      highlights: [
        "Developing a web-based interface for better user experience",
        "Implementing Spring Boot framework for backend",
        "Building RESTful APIs for client-server communication",
        "Following the MVC architecture pattern",
        "Using React for the frontend interface",
        "Multiple authentication systems (email/password, OAuth)",
        "Password hashing and encryption for secure data storage",
        "Role-based access control (customer, staff, manager)",
        "Sensitive information protection with HTTPS",
        "Proper authorization checks for different system roles"
      ]
    },
    {
      title: "Job Listing Web App",
      description: "A comprehensive job listing platform connecting job seekers with employers.",
      technologies: ["Spring Boot", "React", "REST APIs", "MongoDB", "Hibernate", "MVC"],
      highlights: [
        "Job search functionality with filters",
        "User profiles for job seekers and employers",
        "Application tracking system",
        "Resume upload and management",
        "Notification system for application updates",
        "Admin dashboard for managing listings"
      ]
    },
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
      title: "Employee Management System",
      description: "A web-based system to manage employee information and HR processes.",
      technologies: ["Spring Boot", "React", "REST APIs", "MySQL", "Hibernate", "MVC"],
      highlights: [
        "Employee profile management",
        "Attendance tracking",
        "Leave management",
        "Performance evaluation",
        "Payroll processing" 
      ]
    },
    {
      title: "Weather App",
      description: "A simple weather application that fetches and displays current weather data.",
      technologies: ["Java", "Spring Boot", "REST API", "React"],
      highlights: [
        "Integration with external weather API",
        "Location-based weather information",
        "5-day forecast display",
        "Temperature, humidity, and wind speed data"
      ]
    },
    {
      title: "E-commerce API",
      description: "Backend API for a simple e-commerce platform.",
      technologies: ["Java", "Spring Boot", "MySQL", "REST API"],
      highlights: [
        "Product catalog and inventory management",
        "User authentication and authorization",
        "Shopping cart functionality",
        "Order processing system"
      ]
    },
    {
      title: "Student Information System",
      description: "A system to manage student records and academic information.",
      technologies: ["Java", "Hibernate", "MySQL"],
      highlights: [
        "Student profile management",
        "Course registration and grade tracking",
        "Attendance recording",
        "Academic progress reporting"
      ]
    }
  ];
  
  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };
  
  const prevProject = () => {
    setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };
  
  const getIconForTech = (tech: string) => {
    if (tech.toLowerCase().includes("java") || tech.toLowerCase().includes("spring")) {
      return <Code className="text-primary" size={16} />;
    } else if (tech.toLowerCase().includes("rest") || tech.toLowerCase().includes("api") || tech.toLowerCase().includes("mvc")) {
      return <Server className="text-primary" size={16} />;
    } else if (tech.toLowerCase().includes("sql") || tech.toLowerCase().includes("hibernate")) {
      return <Database className="text-primary" size={16} />;
    } else if (tech.toLowerCase().includes("auth") || tech.toLowerCase().includes("security")) {
      return <Shield className="text-primary" size={16} />;
    } else if (tech.toLowerCase().includes("encrypt") || tech.toLowerCase().includes("hash")) {
      return <Lock className="text-primary" size={16} />;
    } else {
      return <Code className="text-primary" size={16} />;
    }
  };
  
  return (
    <Section id="projects" title="Personal Projects">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <div className="lg:w-1/3 animate-fade-in-left [animation-delay:300ms]">
          <div className="glass rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-medium mb-6 pb-2 border-b">My Projects</h3>
            
            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
              {projects.map((project, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={cn(
                    "w-full text-left p-4 rounded-xl transition-all duration-300 hover:shadow-md",
                    activeProject === index
                      ? "bg-primary text-primary-foreground transform scale-105"
                      : "bg-background/50 hover:bg-background"
                  )}
                >
                  <div className="flex items-center">
                    <div className={cn(
                      "mr-3 w-3 h-3 rounded-full",
                      activeProject === index ? "bg-white" : "bg-primary"
                    )}></div>
                    <span>{project.title}</span>
                  </div>
                </button>
              ))}
              <div className="text-center text-sm text-muted-foreground mt-4">
                <div className="flex items-center justify-center gap-2">
                  <span className="font-medium">Total Projects:</span> 
                  <span className="bg-primary/20 text-primary px-2 py-1 rounded-full">{projects.length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:w-2/3 animate-fade-in-right [animation-delay:600ms]">
          <motion.div 
            key={activeProject}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="glass rounded-2xl p-8 h-full hover:shadow-lg transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-0"></div>
            <div className="relative z-10">
              <div className="mb-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-medium">{projects[activeProject].title}</h3>
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
                      onClick={prevProject}
                    >
                      <ChevronLeft className="h-4 w-4" />
                      <span className="sr-only">Previous project</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
                      onClick={nextProject}
                    >
                      <ChevronRight className="h-4 w-4" />
                      <span className="sr-only">Next project</span>
                    </Button>
                  </div>
                </div>
                <p className="text-muted-foreground mt-2">
                  {projects[activeProject].description}
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium mb-3 text-primary">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[activeProject].technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm flex items-center gap-1 hover:bg-primary hover:text-white transition-colors duration-300"
                    >
                      {getIconForTech(tech)}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3 text-primary">Key Features</h4>
                <ul className="space-y-3 grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                  {projects[activeProject].highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                      <p className="group-hover:text-primary transition-colors duration-300">{highlight}</p>
                    </li>
                  ))}
                </ul>
              </div>
              
              {projects[activeProject].demoLink && (
                <div className="mt-6 pt-4 border-t flex justify-end">
                  <Button 
                    className="gap-1 hover:gap-2 transition-all duration-300"
                    variant="outline"
                  >
                    <span>View Demo</span>
                    <ExternalLink size={16} />
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
