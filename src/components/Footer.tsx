import { Camera } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 text-xl font-bold tracking-tighter">
            <Camera className="w-6 h-6 text-primary" />
            <span>WANGONGO</span>
          </div>
          
          <p className="text-sm text-foreground/50 text-center">
            © {new Date().getFullYear()} Wangongo Josephat Sinda. All rights reserved. 
            Built with Passion at JKUAT.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#home" className="text-xs font-bold uppercase tracking-widest text-foreground/60 hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-xs font-bold uppercase tracking-widest text-foreground/60 hover:text-primary transition-colors">About</a>
            <a href="#portfolio" className="text-xs font-bold uppercase tracking-widest text-foreground/60 hover:text-primary transition-colors">Portfolio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
