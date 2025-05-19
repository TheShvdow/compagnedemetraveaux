import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}