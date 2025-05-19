"use client";

import { motion } from "framer-motion";
import { Building2, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CivilEngineeringPage() {
  const features = [
    {
      title: "Construction de Bâtiments",
      description: "Résidentiel, commercial et industriel",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3"
    },
    {
      title: "Infrastructures",
      description: "Routes, ponts et ouvrages d'art",
      image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-4.0.3"
    },
    {
      title: "Rénovation",
      description: "Réhabilitation et modernisation",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3"
    }
  ];

  return (
    <div className=" min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Link href="/#services">
          <Button variant="ghost" className="mb-8 mt-20">
            <ArrowLeft className="mr-2 h-4 w-4" /> Retour aux services
          </Button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
              <Building2 className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">Génie Civil</h1>
              <p className="text-xl text-muted-foreground">
                Excellence et innovation dans la construction
              </p>
            </div>
          </div>

          {/* Hero Section */}
          <div className="relative h-[400px] rounded-xl overflow-hidden mb-16">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3')"
              }}
            >
              <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="relative h-full flex items-center justify-center text-center p-8">
              <div className="max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Solutions Complètes en Génie Civil
                </h2>
                <p className="text-xl text-gray-200">
                  De la conception à la réalisation, nous vous accompagnons dans tous vos projets de construction
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl overflow-hidden shadow-lg"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${feature.image})` }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Services List */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">Nos Services</h3>
              <ul className="space-y-4">
                {[
                  "Études et conception de projets",
                  "Construction de bâtiments",
                  "Rénovation et réhabilitation",
                  "Infrastructures routières",
                  "Ouvrages d'art",
                  "Supervision de chantier"
                ].map((service) => (
                  <li key={service} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Notre Approche</h3>
              <div className="prose dark:prose-invert">
                <p>
                  Notre équipe d'experts en génie civil s'engage à fournir des solutions 
                  innovantes et durables pour vos projets de construction. Nous mettons 
                  l'accent sur la qualité, la sécurité et le respect des délais.
                </p>
                <p>
                  Chaque projet est unique et mérite une attention particulière. C'est 
                  pourquoi nous travaillons en étroite collaboration avec nos clients 
                  pour comprendre leurs besoins et leur vision.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-primary/5 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Prêt à Démarrer Votre Projet ?</h3>
            <p className="text-lg mb-6">
              Contactez-nous pour discuter de vos besoins en génie civil
            </p>
            <Button size="lg" asChild>
              <Link href="/#contact">Nous Contacter</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}