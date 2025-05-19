"use client";

import { motion } from "framer-motion";
import { Wrench, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProfessionalServicesPage() {
  const features = [
    {
      title: "Conseil Technique",
      description: "Expertise et accompagnement personnalisé",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3"
    },
    {
      title: "Maintenance",
      description: "Services de maintenance préventive et corrective",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af44?ixlib=rb-4.0.3"
    },
    {
      title: "Formation",
      description: "Programmes de formation professionnelle",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Link href="/services">
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
              <Wrench className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">Prestation de Services</h1>
              <p className="text-xl text-muted-foreground">
                Services professionnels sur mesure
              </p>
            </div>
          </div>

          {/* Hero Section */}
          <div className="relative h-[400px] rounded-xl overflow-hidden mb-16">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3')"
              }}
            >
              <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="relative h-full flex items-center justify-center text-center p-8">
              <div className="max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Services Professionnels d'Excellence
                </h2>
                <p className="text-xl text-gray-200">
                  Expertise technique et solutions personnalisées pour votre réussite
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
                  "Supervision technique",
                  "Maintenance industrielle",
                  "Formation professionnelle",
                  "Audit et conseil",
                  "Assistance technique"
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
                  Notre équipe de professionnels qualifiés s'engage à fournir des 
                  services de haute qualité, adaptés aux besoins spécifiques de 
                  chaque client.
                </p>
                <p>
                  Nous privilégions une approche collaborative et transparente, 
                  garantissant une communication claire et des résultats mesurables 
                  pour chaque intervention.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-primary/5 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Besoin de Nos Services ?</h3>
            <p className="text-lg mb-6">
              Contactez-nous pour discuter de vos besoins spécifiques
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