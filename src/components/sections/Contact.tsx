"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from 'react';
import { toast } from 'sonner';

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = {
        name: (e.currentTarget.elements.namedItem('name') as HTMLInputElement).value,
        email: (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value,
        message: (e.currentTarget.elements.namedItem('message') as HTMLInputElement).value,
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erreur réseau');
      }

      toast.success('Message envoyé avec succès !');
      e.currentTarget.reset();
    } catch (error) {
      toast.error('Erreur lors de l\'envoi du message.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Discutons de votre projet
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Email
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                cdtsenegal@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Téléphone
                </h3>
                <p className="text-gray-600 dark:text-gray-300">+221 77 352 63 08</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Adresse
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                Rue de thiong , Dakar, Sénégal
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Nom
                </label>
                <Input id="name" placeholder="Votre nom" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="votre@email.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Sujet
              </label>
              <Input id="subject" placeholder="Sujet de votre message" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Votre message"
                className="min-h-[150px]"
              />
            </div>
            <Button type="submit" disabled={isLoading} size="lg" className="w-full bg-black hover:bg-black/80 dark:bg-white dark:hover:bg-white/80 dark:text-black text-white">
              {isLoading ? 'Envoi en cours...' : 'Envoyer le message'}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}