import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900/40 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={100}
                height={100}
              />
            </h3>
            <p className="text-gray-800 dark:text-white">
              Solutions innovantes en génie civil et électrique pour un avenir durable.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <address className="text-gray-800 not-italic dark:text-white">
              <p>Rue de thiong , Dakar, Sénégal</p>
              <p>Cdtsenegal@gmail.com</p>
              <p>+221 77 352 63 08</p>
            </address>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#genie-civil" className="hover:text-white transition-colors">
                  Génie Civil
                </a>
              </li>
              <li>
                <a href="#genie-electrique" className="hover:text-white transition-colors">
                  Génie Électrique
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Prestation de Services
                </a>
              </li>
              <li>
                <a href="#materiaux" className="hover:text-white transition-colors">
                  Fourniture de Matériaux
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} CDT. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}