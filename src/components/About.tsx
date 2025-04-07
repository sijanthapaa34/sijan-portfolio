
import { useState } from "react";
import Section from "./Section";
import { Button } from "./ui/button";
import { FileText, ExternalLink } from "lucide-react";
import CVModal from "./CVModal";

export default function About() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  
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
          
          <div className="flex mt-6 gap-4">
            <Button 
              className="glass flex items-center gap-3 group hover:scale-105 transition-all duration-300" 
              onClick={() => setIsCVModalOpen(true)}
            >
              <FileText size={24} className="group-hover:animate-pulse" />
              <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 group-hover:after:origin-bottom-left group-hover:after:scale-x-100">
                View CV
              </span>
            </Button>
            
            <a 
              href="/lovable-uploads/da5d6085-7168-43e6-87a8-7489cb7888b8.png" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass flex items-center gap-3 group hover:scale-105 transition-all duration-300 py-2 px-4 rounded-md"
            >
              <ExternalLink size={24} className="text-primary group-hover:animate-pulse" />
              <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 group-hover:after:origin-bottom-left group-hover:after:scale-x-100">
                Open CV in New Tab
              </span>
            </a>
          </div>
          
          <div className="pt-6 space-y-4">
            <h3 className="text-xl font-medium">Education</h3>
            <div className="space-y-4">
              <div className="glass p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <h4 className="font-medium text-lg">Informatics College Pokhara, Nepal</h4>
                <p className="text-muted-foreground">Bachelor of Information Technology (BIT)</p>
                <p className="text-muted-foreground">2023 - Present | 2nd Year</p>
              </div>
              
              <div className="glass p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <h4 className="font-medium text-lg">Prativa Secondary School</h4>
                <p className="text-muted-foreground">Computer Science</p>
                <p className="text-muted-foreground">2021 - 2023 | GPA: 3.33</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative animate-fade-in-right [animation-delay:600ms]">
          <div className="absolute inset-0 bg-primary/10 rounded-2xl -rotate-6 transform"></div>
          <div className="glass p-8 rounded-2xl relative hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-medium mb-6">Languages</h3>
            <ul className="space-y-3">
              <li className="flex justify-between items-center hover:bg-primary/5 p-2 rounded-md transition-colors duration-200">
                <span>English</span>
                <span className="text-primary font-medium">Fluent</span>
              </li>
              <li className="flex justify-between items-center hover:bg-primary/5 p-2 rounded-md transition-colors duration-200">
                <span>Nepali</span>
                <span className="text-primary font-medium">Fluent</span>
              </li>
              <li className="flex justify-between items-center hover:bg-primary/5 p-2 rounded-md transition-colors duration-200">
                <span>Hindi</span>
                <span className="text-primary font-medium">Intermediate</span>
              </li>
            </ul>
            
            <h3 className="text-xl font-medium mt-8 mb-6">Soft Skills</h3>
            <ul className="space-y-3">
              <li className="flex items-center hover:bg-primary/5 p-2 rounded-md transition-colors duration-200">
                <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                <span>Leadership</span>
              </li>
              <li className="flex items-center hover:bg-primary/5 p-2 rounded-md transition-colors duration-200">
                <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                <span>Problem Solving & Adaptability</span>
              </li>
              <li className="flex items-center hover:bg-primary/5 p-2 rounded-md transition-colors duration-200">
                <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                <span>Effective Communication</span>
              </li>
              <li className="flex items-center hover:bg-primary/5 p-2 rounded-md transition-colors duration-200">
                <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                <span>Critical Thinking</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
    </Section>
  );
}
