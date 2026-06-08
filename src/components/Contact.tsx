import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Linkedin } from 'lucide-react';
import { toast } from 'sonner';

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! I will get back to you soon.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-4">Contact</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-8">Let's Create <br />Something Together</h3>
            <p className="text-foreground/60 mb-12 max-w-md">
              Whether you need a new website, professional photography, or IT consulting, I'm here to help. Reach out and let's discuss your project.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center border border-border group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground/40 uppercase tracking-widest">Email Me</div>
                  <div className="font-medium">wangongo.josephat@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center border border-border group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground/40 uppercase tracking-widest">Call Me</div>
                  <div className="font-medium">+254 7XX XXX XXX</div>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center border border-border group-hover:bg-primary/10 transition-colors">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground/40 uppercase tracking-widest">Location</div>
                  <div className="font-medium">Juja, Kiambu, Kenya (JKUAT)</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 bg-card rounded-[2.5rem] border border-border shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-foreground/50 ml-1">Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-6 py-4 rounded-2xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-foreground/50 ml-1">Email</label>
                  <input
                    required
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-6 py-4 rounded-2xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-foreground/50 ml-1">Subject</label>
                <select className="w-full px-6 py-4 rounded-2xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none cursor-pointer">
                  <option>Website Project</option>
                  <option>Photography Session</option>
                  <option>IT Consultation</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-foreground/50 ml-1">Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="How can I help you?"
                  className="w-full px-6 py-4 rounded-2xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-5 bg-primary text-primary-foreground rounded-2xl font-bold hover:opacity-95 transition-opacity group"
              >
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
