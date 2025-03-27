
import Section from "./Section";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);
  
  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    toast({
      title: "Copied to clipboard",
      description: `${text} has been copied to your clipboard.`,
    });
    setTimeout(() => setCopied(null), 2000);
  };
  
  const contactInfo = [
    {
      type: "email",
      value: "sijanmgr034@gmail.com",
      icon: Mail,
      label: "Email Me",
      action: () => copyToClipboard("sijanmgr034@gmail.com", "email")
    },
    {
      type: "github",
      value: "github.com/sijanthapaa34",
      icon: Github,
      label: "GitHub Profile",
      href: "https://github.com/sijanthapaa34"
    },
    {
      type: "linkedin",
      value: "linkedin.com/in/sijan-thapa-a00182302",
      icon: Linkedin,
      label: "LinkedIn Profile",
      href: "https://linkedin.com/in/sijan-thapa-a00182302"
    },
    {
      type: "phone",
      value: "+977 9846030022",
      icon: Phone,
      label: "Call Me",
      action: () => copyToClipboard("+977 9846030022", "phone")
    },
    {
      type: "location",
      value: "Pokhara, Nepal",
      icon: MapPin,
      label: "Location",
      href: "https://maps.google.com/?q=Pokhara,Nepal"
    }
  ];
  
  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-lg mb-12 animate-fade-in">
          Feel free to reach out for opportunities, collaborations, or just to say hello!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.slice(0, 3).map((contact, index) => (
            <div 
              key={contact.type}
              className="relative group animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
              
              {contact.href ? (
                <a 
                  href={contact.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glass p-6 rounded-2xl flex flex-col items-center text-center h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="p-3 bg-primary/10 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <contact.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-medium mb-2">{contact.label}</h3>
                  <p className="text-sm text-muted-foreground">{contact.value}</p>
                </a>
              ) : (
                <button 
                  onClick={contact.action}
                  className="glass p-6 rounded-2xl flex flex-col items-center text-center h-full w-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="p-3 bg-primary/10 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <contact.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-medium mb-2">{contact.label}</h3>
                  <p className="text-sm text-muted-foreground">{contact.value}</p>
                  <span 
                    className={cn(
                      "mt-2 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full transition-opacity",
                      copied === contact.type ? "opacity-100" : "opacity-0"
                    )}
                  >
                    Copied!
                  </span>
                </button>
              )}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {contactInfo.slice(3, 5).map((contact, index) => (
            <div 
              key={contact.type}
              className="relative group animate-fade-in"
              style={{ animationDelay: `${(index + 3) * 200}ms` }}
            >
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
              
              {contact.href ? (
                <a 
                  href={contact.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glass p-6 rounded-2xl flex flex-col items-center text-center h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="p-3 bg-primary/10 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <contact.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-medium mb-2">{contact.label}</h3>
                  <p className="text-sm text-muted-foreground">{contact.value}</p>
                </a>
              ) : (
                <button 
                  onClick={contact.action}
                  className="glass p-6 rounded-2xl flex flex-col items-center text-center h-full w-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="p-3 bg-primary/10 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <contact.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-medium mb-2">{contact.label}</h3>
                  <p className="text-sm text-muted-foreground">{contact.value}</p>
                  <span 
                    className={cn(
                      "mt-2 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full transition-opacity",
                      copied === contact.type ? "opacity-100" : "opacity-0"
                    )}
                  >
                    Copied!
                  </span>
                </button>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">Let's create something amazing together.</p>
        </div>
      </div>
    </Section>
  );
}
