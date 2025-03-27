
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/30"></div>
          
          {/* Internship experience */}
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-8">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-background animate-pulse"></div>
              </div>
            </div>
            
            <div className="glass rounded-2xl p-8 mb-12 max-w-xl mx-auto animate-fade-in">
              <h3 className="text-xl font-medium mb-2">Full-Stack Development Experience</h3>
              <p className="text-muted-foreground mb-6">Java Internship Projects</p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">Bank Management System</h4>
                  <p className="text-sm text-muted-foreground mb-3">Personal Project</p>
                  <p>
                    Designed and developed a comprehensive banking system with both console and web-based 
                    interfaces, implementing core banking functionalities using Java technologies.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">RESTful API Development</h4>
                  <p className="text-sm text-muted-foreground mb-3">Academic Project</p>
                  <p>
                    Implemented RESTful APIs using Spring Boot for various applications, focusing on
                    proper architecture and secure data handling.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Database Design & ORM Implementation</h4>
                  <p className="text-sm text-muted-foreground mb-3">Course Project</p>
                  <p>
                    Created efficient database schemas and implemented ORM solutions using Hibernate and JPA
                    for seamless data operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Current status */}
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-8">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-background animate-pulse"></div>
              </div>
            </div>
            
            <div className="glass rounded-2xl p-8 max-w-xl mx-auto animate-fade-in">
              <h3 className="text-xl font-medium mb-2">Currently Seeking Opportunities</h3>
              <p className="text-muted-foreground mb-6">Ready for New Challenges</p>
              
              <p>
                I am currently looking for internship opportunities in Java development to apply
                my technical knowledge and gain practical industry experience. I am passionate about
                software development and eager to contribute to meaningful projects.
              </p>
              
              <div className="mt-6 pt-6 border-t border-border">
                <h4 className="font-medium mb-3">What I Bring to the Table</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></div>
                    <p>Strong foundation in Java and related technologies</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></div>
                    <p>Problem-solving mindset and analytical thinking</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></div>
                    <p>Eagerness to learn and adapt to new technologies</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></div>
                    <p>Effective communication and teamwork skills</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
