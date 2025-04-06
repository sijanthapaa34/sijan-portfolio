
import { useState } from "react";
import Section from "./Section";
import { Github, Linkedin, Mail, Phone, MapPin, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });
  
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
  
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Here we would typically connect to a backend service
      // Since we don't have a backend yet, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      form.reset();
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-lg mb-12 animate-fade-in">
          Feel free to reach out for opportunities, collaborations, or just to say hello!
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {contactInfo.map((contact, index) => (
                <motion.div 
                  key={contact.type}
                  className="relative group animate-fade-in"
                  variants={item}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
                  
                  {contact.href ? (
                    <a 
                      href={contact.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="glass p-6 rounded-2xl flex flex-col items-start text-left h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
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
                      className="glass p-6 rounded-2xl flex flex-col items-start text-left h-full w-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
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
                </motion.div>
              ))}
            </motion.div>
            
            <div className="mt-4 text-center">
              <p className="text-muted-foreground">Let's create something amazing together.</p>
            </div>
          </div>
          
          <motion.div 
            className="glass p-8 rounded-2xl relative overflow-hidden transition-all duration-300 hover:shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-0"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-medium mb-6">Send Me a Message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Message subject" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message" 
                            className="min-h-[120px] resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "w-full mt-2 py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-300",
                      "bg-primary text-white hover:bg-primary/90",
                      isSubmitting && "opacity-70 cursor-not-allowed"
                    )}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
