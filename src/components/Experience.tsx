
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/30"></div>
          
          {/* Spring Boot & RESTful API Development */}
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-8">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-background animate-pulse"></div>
              </div>
            </div>
            
            <div className="glass rounded-2xl p-8 mb-12 max-w-xl mx-auto animate-fade-in">
              <h3 className="text-xl font-medium mb-2">Spring Boot & RESTful API Development</h3>
              <p className="text-muted-foreground mb-6">Backend Development Expertise</p>
              
              <p>
                Hands-on experience building scalable backend services using Spring Boot and designing RESTful APIs 
                with proper layering, validations, and secure endpoints. Proficient in API versioning, 
                request/response optimization, and exception handling.
              </p>
            </div>
          </div>
          
          {/* Hibernate & Database Management */}
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-8">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-background animate-pulse"></div>
              </div>
            </div>
            
            <div className="glass rounded-2xl p-8 mb-12 max-w-xl mx-auto animate-fade-in">
              <h3 className="text-xl font-medium mb-2">Hibernate & Database Management</h3>
              <p className="text-muted-foreground mb-6">ORM & Data Layer Expertise</p>
              
              <p>
                Skilled in designing normalized relational databases (MySQL, MongoDB) and implementing ORM 
                solutions using Hibernate and JPA. Experience includes entity mapping, one-to-many/many-to-many 
                relationships, lazy vs eager fetching, and performance optimization.
              </p>
            </div>
          </div>
          
          {/* Frontend Integration with React */}
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-8">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-background animate-pulse"></div>
              </div>
            </div>
            
            <div className="glass rounded-2xl p-8 mb-12 max-w-xl mx-auto animate-fade-in">
              <h3 className="text-xl font-medium mb-2">Frontend Integration with React</h3>
              <p className="text-muted-foreground mb-6">Full-Stack Web Development</p>
              
              <p>
                Capable of integrating React-based frontends with Java Spring Boot backends through secure REST APIs. 
                Familiar with state management, dynamic UI rendering, and building responsive, user-friendly interfaces 
                that communicate efficiently with backend services.
              </p>
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
