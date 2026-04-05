import { ArrowRight, Download, Github, Linkedin, Mail, Instagram, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import profileImage from '@/assets/profile.jpg';

const roles = [
  'Software Engineer',
  'Full-Stack Developer',
  'Security-Focused Developer',
  'Security Analyst Trainee',
];

const socialLinks = [
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/dhruv-rupala-96191a253/',
    label: 'LinkedIn',
  },
  {
    icon: Github,
    href: 'https://github.com/DhruvRupala',
    label: 'GitHub',
  },
  {
    icon: Instagram,
    href: 'https://www.instagram.com/dhruv._rupala/',
    label: 'Instagram',
  },
  {
    icon: Mail,
    href: 'mailto:dhruvrupala1213@gmail.com',
    label: 'Email',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const role = roles[currentRole];
    const typeSpeed = isDeleting ? 30 : 60;
    const pauseTime = isDeleting ? 200 : 2000;

    if (!isDeleting && displayText === role) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? role.substring(0, displayText.length - 1)
          : role.substring(0, displayText.length + 1)
      );
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-6 order-2 lg:order-1 text-center lg:text-left"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fadeUp} className="space-y-3">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                👋 Welcome to my portfolio
              </span>
              <h1 className="text-[2.5rem] leading-tight sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight break-words hyphens-auto">
                Hi, I'm{' '}
                <span className="text-gradient inline-block w-full sm:w-auto">Dhruv Rupala</span>
              </h1>
            </motion.div>

            <motion.div variants={fadeUp} className="h-10 sm:h-12">
              <span className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium">
                {displayText}
                <span className="inline-block w-0.5 h-6 sm:h-7 bg-primary ml-1 animate-pulse align-middle" />
              </span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed mx-auto lg:mx-0"
            >
              B.Tech Computer Science student at PDEU with a passion for building
              modern web applications, exploring cybersecurity, and solving
              real-world problems with technology.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 justify-center lg:justify-start"
            >
              <Button
                asChild
                className="gradient-primary text-primary-foreground shadow-glow hover:shadow-glow-strong transition-all duration-300 h-12 px-8 text-base font-semibold rounded-xl"
              >
                <a href="#contact">
                  Let's Connect <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="h-12 px-8 text-base rounded-xl border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                <a
                  href="https://drive.google.com/file/d/1BPiKa_YuSSdNTCvCGOnSWCQahb2Plgn6/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeUp}
              className="flex gap-3 pt-4 justify-center lg:justify-start"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group relative p-3 rounded-xl bg-secondary/50 border border-border/30 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
                >
                  <social.icon className="h-5 w-5 text-foreground/70 group-hover:text-primary transition-colors duration-300" />
                  <span className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/5 blur-sm -z-10" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex justify-center order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="relative">
              {/* Animated gradient glow behind image */}
              <div className="absolute inset-0 gradient-accent rounded-full blur-3xl opacity-20 animate-glow-pulse scale-110" />

              {/* Rotating gradient ring */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-[22rem] xl:h-[22rem]">
                <div className="absolute inset-0 rounded-full animate-gradient-rotate">
                  <div className="w-full h-full rounded-full gradient-primary p-[3px]">
                    <div className="w-full h-full rounded-full bg-background" />
                  </div>
                </div>

                {/* Actual image */}
                <img
                  src={profileImage}
                  alt="Dhruv Rupala — Full-Stack Developer"
                  className="absolute inset-[6px] w-[calc(100%-12px)] h-[calc(100%-12px)] object-cover rounded-full"
                />
              </div>

              </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex flex-col items-center gap-2 text-muted-foreground/50 hover:text-primary transition-colors"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};
