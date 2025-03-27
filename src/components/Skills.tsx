
import Section from "./Section";
import { useEffect, useState } from "react";

interface Skill {
  name: string;
  level: string;
  category: string;
}

export default function Skills() {
  const [visibleSkills, setVisibleSkills] = useState<string[]>([]);
  
  const skills: Skill[] = [
    { name: "Java", level: "Advanced", category: "Programming" },
    { name: "Spring Boot", level: "Intermediate", category: "Framework" },
    { name: "SQL (MySQL, Oracle)", level: "Intermediate", category: "Database" },
    { name: "ORM (Hibernate, JPA)", level: "Intermediate", category: "Framework" },
    { name: "REST API", level: "Intermediate", category: "Web" },
    { name: "HTML, CSS", level: "Basic", category: "Web" },
    { name: "Git", level: "Intermediate", category: "Tool" },
    { name: "MS Office", level: "Basic", category: "Tool" },
  ];
  
  const categories = [...new Set(skills.map(skill => skill.category))];
  
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
  
  return (
    <Section id="skills" title="Technical Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6 animate-fade-in-left [animation-delay:300ms]">
          <p className="text-lg">
            I specialize in Java development with a strong foundation in backend technologies.
            My technical skill set includes:
          </p>
          
          <div className="space-y-6 mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div 
                  key={skill.name}
                  className="skill-item glass p-4 rounded-xl"
                  data-skill={skill.name}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {skill.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="animate-fade-in-right [animation-delay:600ms]">
          <div className="glass rounded-2xl p-8 h-full">
            <h3 className="text-xl font-medium mb-8">Skill Categories</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {categories.map((category) => (
                <div key={category} className="p-6 rounded-xl bg-background/50">
                  <h4 className="text-lg font-medium mb-4">{category}</h4>
                  <ul className="space-y-2">
                    {skills
                      .filter(skill => skill.category === category)
                      .map(skill => (
                        <li key={skill.name} className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                          {skill.name}
                        </li>
                      ))
                    }
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t">
              <h4 className="text-lg font-medium mb-4">Always Learning</h4>
              <p className="text-muted-foreground">
                I'm eager to learn more technologies and continuously expand my skill set.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
