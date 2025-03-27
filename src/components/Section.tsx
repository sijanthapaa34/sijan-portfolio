
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, title, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("py-20", className)}>
      <div className="section-container">
        <h2 className="section-title">{title}</h2>
        {children}
      </div>
    </section>
  );
}
