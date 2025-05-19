"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Notre Mission
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Offrir des solutions innovantes et durables en génie civil, génie électrique
              et fourniture de matériaux, en garantissant qualité, efficacité et respect
              des normes, afin de répondre aux besoins des entreprises et des particuliers
              dans les secteurs du bâtiment, de l&apos;agriculture et de l&apos;élevage.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Notre Vision
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Devenir un acteur de référence en Afrique dans les domaines du génie
              civil, du génie électrique et de la fourniture de matériaux, en alliant
              expertise, innovation et engagement pour un développement durable.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}