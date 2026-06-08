import { motion } from 'framer-motion';
import { GraduationCap, Code, Cpu, ExternalLink } from 'lucide-react';

export const About = () => {
  const skills = [
    { name: 'Information Technology', icon: Cpu, desc: 'Full-stack development and system architecture.' },
    { name: 'Photography', icon: ExternalLink, desc: 'Visual storytelling through professional lens work.' },
    { name: 'Website Building', icon: Code, desc: 'Creating responsive, modern web applications.' },
  ];

  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                /* TODO: Replace this URL with the path to your actual photo (e.g., "/my-photo.jpg" or a hosted URL) */
                src="/your-photo.jpg"
                alt="Wangongo Josephat Sinda"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-2xl shadow-xl text-primary-foreground hidden md:block">
              <div className="text-4xl font-bold mb-1">JKUAT</div>
              <div className="text-sm font-medium opacity-80 uppercase tracking-wider text-center">Undergraduate</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-4">Who I Am</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Bridging Tech and <br />
              <span className="text-primary">Visual Artistry.</span>
            </h3>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              I am Wangongo Josephat Sinda, a multi-talented professional from Jomo Kenyatta University of Agriculture and Technology (JKUAT). 
              With a strong foundation in Information Technology, I specialize in building websites that are not only functional but also visually stunning.
            </p>
            
            <div className="flex items-start gap-4 mb-10 p-4 bg-secondary/50 rounded-2xl border border-border">
              <div className="p-3 bg-primary/10 rounded-xl">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">Education</h4>
                <p className="text-sm text-foreground/60">Jomo Kenyatta University of Agriculture and Technology (JKUAT)</p>
                <p className="text-xs text-primary font-medium mt-1">Information Technology Major</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div key={skill.name} className="p-5 rounded-2xl border border-border bg-background hover:border-primary/50 transition-colors group">
                  <skill.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold mb-1">{skill.name}</h4>
                  <p className="text-xs text-foreground/60">{skill.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
