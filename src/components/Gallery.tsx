import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X } from 'lucide-react';

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photos = [
    {
      url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/bd0da0a5-c16c-4e15-8f86-2723a18a7401/gallery-1-1faf1558-1780929492995.webp',
      title: 'Kenyan Rift Valley',
      category: 'Landscape',
    },
    {
      url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/bd0da0a5-c16c-4e15-8f86-2723a18a7401/gallery-2-c6abd356-1780929493242.webp',
      title: 'JKUAT Architecture',
      category: 'Architecture',
    },
    {
      url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/bd0da0a5-c16c-4e15-8f86-2723a18a7401/gallery-3-0c5af76e-1780929493856.webp',
      title: 'Digital Veins',
      category: 'Macro',
    },
    {
      url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/bd0da0a5-c16c-4e15-8f86-2723a18a7401/gallery-4-479ee7ac-1780929493253.webp',
      title: 'Savanna Giant',
      category: 'Wildlife',
    },
    {
      url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/bd0da0a5-c16c-4e15-8f86-2723a18a7401/gallery-5-42eec44f-1780929494023.webp',
      title: 'Nairobi Pulse',
      category: 'Urban',
    },
    {
      url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/bd0da0a5-c16c-4e15-8f86-2723a18a7401/gallery-6-109db98b-1780929493994.webp',
      title: 'Creative Space',
      category: 'Minimalist',
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-black">Visual Narratives</h3>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-2.5 rounded-full border border-border bg-background text-sm font-medium hover:bg-secondary hover:border-primary transition-colors">
              All Works
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.url}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative aspect-square group cursor-pointer overflow-hidden rounded-2xl"
              onClick={() => setSelectedImage(photo.url)}
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2">
                  {photo.category}
                </span>
                <div className="flex justify-between items-center">
                  <h4 className="text-white text-xl font-bold">{photo.title}</h4>
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
