
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900/90 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="text-2xl font-bold text-white">
            <h3 className="text-2xl font-bold text-white mb-4">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={100}
                height={100}
              />
            </h3>
            </Link>
            <p className="text-gray-100 dark:text-white">
              Solutions innovantes en génie civil et électrique pour un avenir durable.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <address className="text-gray-100 not-italic dark:text-white flex flex-col gap-4">
              <p>Rue de thiong , Dakar, Sénégal</p>
              <p><a href="mailto:cdtsenegal@gmail.com">cdtsenegal@gmail.com</a></p>
              <p> <a href="tel:+221773526308">+221 77 352 63 08</a></p>
            </address>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="/services/genie_civil" className="hover:text-white transition-colors">
                  Génie Civil
                </a>
              </li>
              <li>
                <a href="/services/genie_electrique" className="hover:text-white transition-colors">
                  Génie Électrique
                </a>
              </li>
              <li>
                <a href="/services/agricole" className="hover:text-white transition-colors">
                  Projet Agricole
                </a>
              </li>
              <li>
                <a href="/services/materiaux" className="hover:text-white transition-colors">
                  Fourniture de Matériaux
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-100 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} CDT. Tous droits réservés. - Powered by <a href="https://pwww.gtech-senegal.com/" title="Gtech-Sénégal" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-transparent bg-clip-text hover:text-white transition-colors" target="_blank">Gtech-Sénégal</a> </p>
        </div>
      </div>
    </footer>
  );
}