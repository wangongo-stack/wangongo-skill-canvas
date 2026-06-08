import { motion } from 'framer-motion';
import { Camera, Layout, Terminal, Heart } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      title: 'IT Consulting',
      desc: 'Expert advice on IT infrastructure, system optimization, and digital transformation strategies.',
      icon: Terminal,
      color: 'bg-blue-500/10 text-blue-500',
    },
    {
      title: 'Web Development',
      desc: 'Building modern, responsive, and high-performance websites using the latest technologies.',
      icon: Layout,
      color: 'bg-emerald-500/10 text-emerald-500',
    },
    {
      title: 'Photography',
      desc: 'Professional photography services including landscapes, portraits, and urban documentation.',
      icon: Camera,
      color: 'bg-amber-500/10 text-amber-500',
    },
    {
      title: 'Visual Branding',
      desc: 'Combining tech and design to create cohesive visual identities for brands and individuals.',
      icon: Heart,
      color: 'bg-rose-500/10 text-rose-500',
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-4">My Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-black mb-6">Services Offered</h3>
          <p className="text-foreground/60">
            I offer a unique blend of technical proficiency and creative vision to help you achieve your goals in the digital and visual realm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-8 rounded-3xl border border-border bg-card hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.color}`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold mb-4">{service.title}</h4>
              <p className="text-sm text-foreground/60 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
