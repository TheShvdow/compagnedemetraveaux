"use client";

import { motion } from "framer-motion";
import { Package, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MaterialsPage() {
  const features = [
    {
      title: "Matériaux Électriques",
      description: "Équipements et composants de qualité",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af44?ixlib=rb-4.0.3"
    },
    {
      title: "Matériel Agricole",
      description: "Solutions pour l'agriculture moderne",
      image: "https://images.unsplash.com/photo-1595974482597-4b8c4f3f12fb?ixlib=rb-4.0.3"
    },
    {
      title: "Équipements d'Élevage",
      description: "Matériel professionnel pour l'élevage",
      image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?ixlib=rb-4.0.3"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
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
              <Package className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">Fourniture de Matériaux</h1>
              <p className="text-xl text-muted-foreground">
                Matériaux de qualité pour vos projets
              </p>
            </div>
          </div>

          {/* Hero Section */}
          <div className="relative h-[400px] rounded-xl overflow-hidden mb-16">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1595974482597-4b8c4f3f12fb?ixlib=rb-4.0.3')"
              }}
            >
              <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="relative h-full flex items-center justify-center text-center p-8">
              <div className="max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Fourniture de Matériaux Professionnels
                </h2>
                <p className="text-xl text-gray-200">
                  Des matériaux de qualité pour l'électricité, l'agriculture et l'élevage
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

          {/* Products List */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">Nos Produits</h3>
              <ul className="space-y-4">
                {[
                  "Câbles et conducteurs électriques",
                  "Systèmes d'irrigation",
                  "Équipements de protection",
                  "Matériel d'élevage",
                  "Outillage spécialisé",
                  "Pièces de rechange"
                ].map((product) => (
                  <li key={product} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>{product}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Notre Engagement</h3>
              <div className="prose dark:prose-invert">
                <p>
                  Nous sélectionnons rigoureusement nos fournisseurs pour vous garantir 
                  des matériaux de haute qualité. Notre expertise nous permet de vous 
                  conseiller sur les meilleures solutions pour vos projets.
                </p>
                <p>
                  Nous assurons également un service après-vente complet et un 
                  accompagnement personnalisé pour répondre à vos besoins spécifiques.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-primary/5 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Besoin de Matériaux ?</h3>
            <p className="text-lg mb-6">
              Contactez-nous pour obtenir un devis ou des conseils sur nos produits
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