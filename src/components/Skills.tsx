import Section from "./Section";
import { useState } from "react";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { Code, Server, Database, Globe, Wrench, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: string;
  category: string;
  description?: string;
  icon?: any;
}

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
  const categoryIcons = {
    "Programming": <Code className="text-primary" size={24} />,
    "Framework": <Server className="text-primary" size={24} />,
    "Database": <Database className="text-primary" size={24} />,
    "Web": <Globe className="text-primary" size={24} />,
    "Tool": <Wrench className="text-primary" size={24} />
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
      name: "HTML, CSS", 
      level: "Intermediate", 
      category: "Web",
      description: "Understanding of web markup and styling"
    },
    { 
      name: "SQL (MySQL, Oracle)", 
      level: "Intermediate", 
      category: "Database",
      description: "Knowledge of complex queries, database design, and optimization"
    },
    { 
      name: "NoSQL (MongoDB)", 
      level: "Basic", 
      category: "Database",
      description: "Experience with document-oriented databases and NoSQL concepts"
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
      name: "Git", 
      level: "Intermediate", 
      category: "Tool",
      description: "Version control and collaborative development"
    }
  ];
  
  const categories = [...new Set(skills.map(skill => skill.category))];
  
  const softSkills = [
    {
      name: "Leadership",
      description: "I am a strong leader who effectively guides teams toward goals, fostering collaboration and innovation while maintaining a clear vision and inspiring others to achieve their best.",
      icon: <Lightbulb className="text-primary" size={24} />
    },
    {
      name: "Problem Solving",
      description: "I excel in problem-solving by approaching challenges systematically, breaking down complex issues into manageable components, and applying creative thinking to develop effective solutions.",
      icon: <Lightbulb className="text-primary" size={24} />
    },
    {
      name: "Communication",
      description: "I communicate effectively across different levels of technical understanding, clearly articulating complex concepts and actively listening to ensure mutual understanding and productive collaboration.",
      icon: <Lightbulb className="text-primary" size={24} />
    },
    {
      name: "Critical Thinking",
      description: "I apply critical thinking by evaluating information objectively, considering multiple perspectives, and making well-reasoned decisions based on thorough analysis rather than assumptions.",
      icon: <Lightbulb className="text-primary" size={24} />
    }
  ];
  
  const getLevelColor = (level: string) => {
    switch(level) {
      case "Advanced": return "bg-green-500 text-white";
      case "Intermediate": return "bg-blue-500 text-white";
      case "Basic": return "bg-purple-500 text-white";
      default: return "bg-gray-500 text-white";
    }
  };
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  return (
    <Section id="skills" title="Technical Skills">
      <div className="animate-fade-in">
        <div className="glass p-8 rounded-2xl relative overflow-hidden transition-all duration-300 hover:shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-0"></div>
          <div className="relative z-10">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {categories.map((category, idx) => (
                <motion.div 
                  key={category} 
                  className="glass rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
                  variants={item}
                >
                  <div className="bg-background/30 p-5 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-full group-hover:scale-110 transition-transform duration-300">
                        {categoryIcons[category as keyof typeof categoryIcons]}
                      </div>
                      <h3 className="text-xl font-medium">{category}</h3>
                    </div>
                  </div>
                  <div className="p-5 space-y-3">
                    {skills
                      .filter(skill => skill.category === category)
                      .map(skill => (
                        <TooltipProvider key={skill.name} delayDuration={200}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div 
                                className="flex justify-between items-center p-3 rounded-lg hover:bg-primary/5 transition-colors duration-200 cursor-pointer"
                                onMouseEnter={() => setHoveredSkill(skill.name)}
                                onMouseLeave={() => setHoveredSkill(null)}
                              >
                                <div className="flex items-center gap-2">
                                  <div className={`w-2 h-2 rounded-full ${
                                    skill.level === "Advanced" ? "bg-green-500" :
                                    skill.level === "Intermediate" ? "bg-blue-500" : "bg-purple-500"
                                  }`}></div>
                                  <span className="font-medium">{skill.name}</span>
                                </div>
                                <span className={`text-xs px-2 py-1 rounded-full ${getLevelColor(skill.level)}`}>
                                  {skill.level}
                                </span>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent 
                              side="right"
                              className="z-50 glass border-none backdrop-blur-lg p-4 max-w-[300px] text-foreground"
                            >
                              <div>
                                <h4 className="text-lg font-medium flex items-center gap-2">
                                  {categoryIcons[skill.category as keyof typeof categoryIcons]}
                                  <span>{skill.name}</span>
                                </h4>
                                <div className="mt-2 opacity-90">{skill.description}</div>
                              </div>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <div className="mt-10 pt-5 border-t border-white/10">
              <h3 className="text-2xl font-medium mb-5 flex items-center gap-2">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Lightbulb className="text-primary" size={24} />
                </div>
                <span>Soft Skills</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="glass p-4 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <div className="p-3 bg-primary/10 rounded-full mb-3 mx-auto">
                      {skill.icon}
                    </div>
                    <h4 className="font-medium text-center mb-2">{skill.name}</h4>
                    <p className="text-sm text-muted-foreground text-center mt-auto">
                      {skill.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
