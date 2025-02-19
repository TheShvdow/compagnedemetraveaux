"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "/" },
    {
      name: "Services",
      href: "/#services",
      submenu: [
        { name: "Génie civil", href: "/services/genie_civil" },
        { name: "Génie électrique", href: "/services/genie_electrique" },
        { name: "Projet Agricole", href: "/services/agricole" },
        { name: "Fourniture de matériaux", href: "/services/materiaux" },
      ],
    },
    { name: "À propos", href: "#about" },
    { name: "Galerie", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "pt-2 bg-white/90 backdrop-blur-md shadow-lg dark:bg-gray-900/90"
          : "pt-2 bg-white/70 dark:bg-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-primary dark:text-white">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={100}
                height={100}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) =>
              link.submenu ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="flex items-center space-x-1 "
                    >
                      {link.name} <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {link.submenu.map((item) => (
                      <DropdownMenuItem 
                        key={item.name} 
                        className="hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer dark:bg-white/70 dark:text-gray-800 dark:hover:text-white bg-black/60 text-white hover:text-gray-800"
                      >
                        <Link href={item.href} className="block px-4 py-2">
                          {item.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors "
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}