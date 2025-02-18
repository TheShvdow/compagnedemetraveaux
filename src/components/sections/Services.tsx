"use client";

import { motion } from "framer-motion";
import { Building2, Zap, Wrench, Package } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    title: "Génie Civil",
    description: "Construction, rénovation et expertise en infrastructures civiles",
    icon: Building2,
  },
  {
    title: "Génie Électrique",
    description: "Solutions électriques innovantes pour tous vos projets",
    icon: Zap,
  },
  {
    title: "Prestation de Services",
    description: "Services professionnels adaptés à vos besoins spécifiques",
    icon: Wrench,
  },
  {
    title: "Fourniture de Matériaux",
    description: "Matériaux de qualité pour l'électricité, l'agriculture et l'élevage",
    icon: Package,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Nos Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300"
          >
            Des solutions complètes pour vos projets
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}