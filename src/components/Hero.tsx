import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background z-10" />
      
      {/* Background Image Placeholder or Design Element */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/bd0da0a5-c16c-4e15-8f86-2723a18a7401/gallery-1-1faf1558-1780929492995.webp"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-60 grayscale-[50%]"
        />
      </div>

      <div className="container mx-auto px-4 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
            Professional Photographer & IT Specialist
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-6 text-foreground">
            WANGONGO <br />
            <span className="text-primary">JOSEPHAT SINDA</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/70 mb-10 leading-relaxed">
            Merging the precision of Information Technology with the artistry of Photography. 
            Graduate of JKUAT, building digital experiences and capturing moments.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#portfolio"
              className="group flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-all"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-semibold border border-border hover:bg-secondary/80 transition-all"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-foreground/50 hover:text-primary transition-colors">
          <span className="text-xs uppercase tracking-widest font-medium">Scroll Down</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};
