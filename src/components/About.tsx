
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in-left [animation-delay:300ms]">
          <p className="text-lg">
            I am a dedicated BIT student aspiring to become a proficient Java Developer. I have strong problem-solving
            skills and a continuous eagerness to learn new technologies and concepts.
          </p>
          <p className="text-lg">
            I enjoy tackling challenges and refining my skills to stay updated in the ever-evolving field of software development. 
            Currently, I am seeking an internship to apply my technical knowledge and gain practical experience.
          </p>
          
          <div className="pt-6 space-y-4">
            <h3 className="text-xl font-medium">Education</h3>
            <div className="space-y-4">
              <div className="glass p-6 rounded-xl">
                <h4 className="font-medium text-lg">Informatics College Pokhara, Nepal</h4>
                <p className="text-muted-foreground">Bachelor of Information Technology (BIT)</p>
                <p className="text-muted-foreground">2023 - Present | 2nd Year</p>
              </div>
              
              <div className="glass p-6 rounded-xl">
                <h4 className="font-medium text-lg">Prativa Secondary School</h4>
                <p className="text-muted-foreground">Computer Science</p>
                <p className="text-muted-foreground">2021 - 2023 | GPA: 3.33</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative animate-fade-in-right [animation-delay:600ms]">
          <div className="absolute inset-0 bg-primary/10 rounded-2xl -rotate-6 transform"></div>
          <div className="glass p-8 rounded-2xl relative">
            <h3 className="text-xl font-medium mb-6">Languages</h3>
            <ul className="space-y-3">
              <li className="flex justify-between items-center">
                <span>English</span>
                <span className="text-primary">Fluent</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Nepali</span>
                <span className="text-primary">Fluent</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Hindi</span>
                <span className="text-primary">Intermediate</span>
              </li>
            </ul>
            
            <h3 className="text-xl font-medium mt-8 mb-6">Soft Skills</h3>
            <ul className="space-y-3">
              <li>Leadership</li>
              <li>Problem Solving & Adaptability</li>
              <li>Effective Communication</li>
              <li>Critical Thinking</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
