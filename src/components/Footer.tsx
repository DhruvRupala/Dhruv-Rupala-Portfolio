import { Github, Linkedin, Instagram, Mail, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#portfolio' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/DhruvRupala', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/dhruv-rupala-96191a253/', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/dhruv._rupala/', label: 'Instagram' },
  { icon: Mail, href: 'mailto:dhruvrupala1213@gmail.com', label: 'Email' },
];

export const Footer = () => {
  const { ref, isInView } = useScrollReveal();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-20 pb-10 px-4 sm:px-6 overflow-hidden" ref={ref}>
      {/* Top gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        className="container mx-auto max-w-7xl relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* Top row: Quick Links + Social */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 mb-14">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#home" className="text-2xl font-extrabold text-gradient">
              RDR
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Full-Stack Developer & CS student passionate about building modern,
              scalable web applications and exploring cybersecurity.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground/80">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2.5">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 w-fit"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground/80">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2.5 rounded-xl bg-secondary/50 border border-border/30 hover:border-primary/40 hover:bg-primary/10 hover:scale-110 transition-all duration-300 group"
                >
                  <social.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              dhruvrupala1213@gmail.com
            </p>
          </div>
        </div>


        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border/20">
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} Dhruv Rupala. All rights reserved.
          </p>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs text-muted-foreground/60 hover:text-primary transition-colors"
          >
            Back to top
            <span className="p-1.5 rounded-lg bg-secondary/30 border border-border/20 group-hover:border-primary/40 group-hover:-translate-y-1 transition-all duration-300">
              <ArrowUp className="h-3 w-3" />
            </span>
          </button>
        </div>
      </motion.div>
    </footer>
  );
};
