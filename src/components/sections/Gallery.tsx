"use client";

import { useState , useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Construction Infrastructure",
    image: "/images/1.jpeg",
    category: "Génie Civil",
  },
  {
    id: 2,
    title: "Installation Électrique",
    image: "/images/2.jpeg",
    category: "Génie Électrique",
  },
  {
    id: 3,
    title: "Projet Agricole",
    image: "/images/3.jpeg",
    category: "Matériaux",
  },
  {
    id: 4,
    title: "Maintenance Industrielle",
    image: "/images/4.jpeg",
    category: "Services",
  },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5000ms = 5s

    return () => clearInterval(interval); // Nettoyage de l'intervalle
  }, []);

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nos Réalisations
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Découvrez nos projets récents
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden rounded-xl aspect-video">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-video"
              >
                
                <Image
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    fill
                    priority
                    className="object-cover"
                  />
                 
                
                   <div className="absolute inset-0 bg-black/50" />
                
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-white p-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {projects[currentIndex].title}
                  </h3>
                  <p className="text-lg text-gray-200">
                    {projects[currentIndex].category}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
            onClick={prev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
            onClick={next}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === currentIndex
                  ? "bg-primary"
                  : "bg-gray-300 dark:bg-gray-700"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}