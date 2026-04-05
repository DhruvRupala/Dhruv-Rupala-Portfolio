import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Portfolio } from '@/components/Portfolio';
import { Certificates } from '@/components/Certificates';
import { Services } from '@/components/Services';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ParticleBackground } from '@/components/ParticleBackground';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <motion.div
      className="min-h-screen bg-background relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Portfolio />
        <Certificates />
        <Services />
        <Contact />
        <Footer />
      </div>
    </motion.div>
  );
};

export default Index;
