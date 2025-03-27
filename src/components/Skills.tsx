
import Section from "./Section";
import { useEffect, useState } from "react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Code, Server, Database, Globe, Tool, Lightbulb } from "lucide-react";

interface Skill {
  name: string;
  level: string;
  category: string;
  description?: string;
  icon?: any;
}

export default function Skills() {
  const [visibleSkills, setVisibleSkills] = useState<string[]>([]);
  
  const categoryIcons = {
    "Programming": <Code className="text-primary" size={22} />,
    "Framework": <Server className="text-primary" size={22} />,
    "Database": <Database className="text-primary" size={22} />,
    "Web": <Globe className="text-primary" size={22} />,
    "Tool": <Tool className="text-primary" size={22} />
  };
  
  const skills: Skill[] = [
    { 
      name: "Java", 
      level: "Advanced", 
      category: "Programming",
      description: "Strong proficiency in core Java concepts, OOP principles, and Java features"
    },
    { 
      name: "Spring Boot", 
      level: "Intermediate", 
      category: "Framework",
      description: "Experience building web applications with Spring Boot"
    },
    { 
      name: "React", 
      level: "Basic", 
      category: "Web",
      description: "Familiar with React components, props, and state management"
    },
    { 
      name: "SQL (MySQL, Oracle)", 
      level: "Intermediate", 
      category: "Database",
      description: "Knowledge of complex queries, database design, and optimization"
    },
    { 
      name: "ORM (Hibernate, JPA)", 
      level: "Intermediate", 
      category: "Framework",
      description: "Experience mapping Java objects to database tables"
    },
    { 
      name: "REST API", 
      level: "Intermediate", 
      category: "Web",
      description: "Building and consuming RESTful services"
    },
    { 
      name: "HTML, CSS", 
      level: "Basic", 
      category: "Web",
      description: "Understanding of web markup and styling"
    },
    { 
      name: "Git", 
      level: "Intermediate", 
      category: "Tool",
      description: "Version control and collaborative development"
    },
    { 
      name: "MS Office", 
      level: "Basic", 
      category: "Tool",
      description: "Proficient in Word, Excel, and PowerPoint"
    },
  ];
  
  const categories = [...new Set(skills.map(skill => skill.category))];
  
  const softSkills = [
    {
      name: "Leadership",
      description: "Ability to guide and motivate teams towards achieving common goals",
      icon: <Lightbulb className="text-primary" size={22} />
    },
    {
      name: "Problem Solving",
      description: "Analytical approach to identifying and resolving complex issues",
      icon: <Lightbulb className="text-primary" size={22} />
    },
    {
      name: "Communication",
      description: "Clear and effective verbal and written communication skills",
      icon: <Lightbulb className="text-primary" size={22} />
    },
    {
      name: "Critical Thinking",
      description: "Evaluating situations objectively and making informed decisions",
      icon: <Lightbulb className="text-primary" size={22} />
    }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillName = entry.target.getAttribute("data-skill");
            if (skillName && !visibleSkills.includes(skillName)) {
              setVisibleSkills(prev => [...prev, skillName]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const skillElements = document.querySelectorAll(".skill-item");
    skillElements.forEach(el => observer.observe(el));
    
    return () => {
      skillElements.forEach(el => observer.unobserve(el));
    };
  }, [visibleSkills]);
  
  const getLevelColor = (level: string) => {
    switch(level) {
      case "Advanced": return "bg-green-500 text-white";
      case "Intermediate": return "bg-blue-500 text-white";
      case "Basic": return "bg-purple-500 text-white";
      default: return "bg-gray-500 text-white";
    }
  };
  
  return (
    <Section id="skills" title="Technical Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8 animate-fade-in-left [animation-delay:300ms]">
          <div className="glass p-8 rounded-2xl relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-0"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-medium mb-6 border-b pb-2">Technical Proficiency</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {skills.map((skill) => (
                  <HoverCard key={skill.name}>
                    <HoverCardTrigger asChild>
                      <div 
                        className="skill-item glass p-4 rounded-xl cursor-pointer hover:shadow-md transition-all duration-300 flex flex-col gap-2 hover:-translate-y-1"
                        data-skill={skill.name}
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            {categoryIcons[skill.category as keyof typeof categoryIcons]}
                            <span className="font-medium">{skill.name}</span>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded-full ${getLevelColor(skill.level)}`}>
                            {skill.level}
                          </span>
                        </div>
                        <div className="w-full h-1 bg-gray-200 rounded-full mt-2 overflow-hidden">
                          <div 
                            className={`h-full ${
                              skill.level === "Advanced" ? "w-[90%] bg-green-500" :
                              skill.level === "Intermediate" ? "w-[60%] bg-blue-500" : "w-[30%] bg-purple-500"
                            } rounded-full`}
                          ></div>
                        </div>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 p-4 glass border-none">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-lg font-medium">{skill.name}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{skill.description}</p>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full ${getLevelColor(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="animate-fade-in-right [animation-delay:600ms]">
          <div className="glass rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tl from-primary/5 to-transparent z-0"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-medium mb-6 border-b pb-2">Skill Categories</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {categories.map((category) => (
                  <div 
                    key={category} 
                    className="p-6 rounded-xl bg-background/50 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      {categoryIcons[category as keyof typeof categoryIcons]}
                      <h4 className="text-lg font-medium">{category}</h4>
                    </div>
                    <ul className="space-y-2">
                      {skills
                        .filter(skill => skill.category === category)
                        .map(skill => (
                          <li key={skill.name} className="flex items-center group">
                            <div className="w-2 h-2 rounded-full bg-primary mr-2 group-hover:scale-125 transition-transform duration-300"></div>
                            <span className="group-hover:text-primary transition-colors duration-300">{skill.name}</span>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t">
                <h4 className="text-lg font-medium mb-4 flex items-center gap-2">
                  <span className="text-primary">⟡</span> Soft Skills
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {softSkills.map((skill) => (
                    <HoverCard key={skill.name}>
                      <HoverCardTrigger asChild>
                        <div className="flex items-center gap-2 p-2 rounded-md hover:bg-primary/5 transition-colors duration-200 cursor-pointer">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          <span>{skill.name}</span>
                        </div>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-72 p-4 glass border-none">
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2">
                            {skill.icon}
                            <h4 className="text-lg font-medium">{skill.name}</h4>
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">{skill.description}</p>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
