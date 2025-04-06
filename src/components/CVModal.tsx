
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVModal({ isOpen, onClose }: CVModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] w-[95vw] h-[95vh] p-0 border-none bg-transparent">
        <div className="relative w-full h-full overflow-hidden rounded-xl animate-fade-in">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-xl z-0 animate-fade-in"></div>
          
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <img 
              src="/lovable-uploads/d28341fa-898e-4beb-bd4c-f06540849704.png" 
              alt="CV" 
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl animate-scale-in"
            />
          </div>
          
          <DialogClose className="absolute bottom-10 right-1/2 transform translate-x-1/2 z-20">
            <button 
              onClick={onClose}
              className="glass flex items-center gap-2 px-6 py-3 rounded-full text-white hover:bg-white/20 transition-all duration-300"
            >
              <X size={20} />
              <span>Close</span>
            </button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
