import { Mail, Phone, Linkedin, Github, MapPin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SectionWrapper } from './SectionWrapper';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'dhruvrupala013@gmail.com',
    href: 'mailto:dhruvrupala013@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 8401722679',
    href: 'tel:+918401722679',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Gujarat, India',
    href: null,
  },
];

const socialProfiles = [
  {
    icon: Linkedin,
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dhruv-rupala-96191a253/',
  },
  {
    icon: Github,
    name: 'GitHub',
    href: 'https://github.com/DhruvRupala',
  },
];

export const Contact = () => {
  const { ref: leftRef, isInView: leftInView } = useScrollReveal();
  const { ref: rightRef, isInView: rightInView } = useScrollReveal();

  return (
    <SectionWrapper
      id="contact"
      title="Get In"
      titleAccent="Touch"
      subtitle="Let's connect and build something amazing together"
      showBackground
    >
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 max-w-6xl mx-auto">
        {/* Left: Contact Info */}
        <motion.div
          ref={leftRef}
          className="space-y-5"
          initial={{ opacity: 0, x: -40 }}
          animate={leftInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {contactInfo.map((info) => (
            <div
              key={info.label}
              className="glass-card-hover p-5 rounded-2xl"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 flex-shrink-0">
                  <info.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">
                    {info.label}
                  </p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-sm sm:text-base text-foreground/90 hover:text-primary transition-colors font-medium break-all"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm sm:text-base text-foreground/90 font-medium">
                      {info.value}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Social profiles */}
          <div className="flex gap-4 pt-2">
            {socialProfiles.map((profile) => (
              <a
                key={profile.name}
                href={profile.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 glass-card-hover p-4 rounded-2xl flex items-center justify-center space-x-3 group"
              >
                <profile.icon className="h-5 w-5 text-primary" />
                <span className="text-sm sm:text-base font-medium group-hover:text-primary transition-colors">
                  {profile.name}
                </span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right: Download Resume */}
        <motion.div
          ref={rightRef}
          initial={{ opacity: 0, x: 40 }}
          animate={rightInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center h-full"
        >
          <div className="glass-card p-8 sm:p-12 rounded-2xl w-full border border-border/40 flex flex-col items-center text-center space-y-6 h-full justify-center">
            <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
              <Download className="h-10 w-10 text-primary" />
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold">Resume</h3>
              <p className="text-muted-foreground text-sm sm:text-base max-w-sm">
                Want to know more about my experience and skills? Download my resume below.
              </p>
            </div>
            <Button
              asChild
              className="w-full sm:w-auto px-8 gradient-primary text-primary-foreground h-12 rounded-xl text-base font-semibold shadow-glow hover:shadow-glow-strong transition-all duration-300 mt-4"
            >
              <a href="https://drive.google.com/file/d/1BcZugu3CJX5IGbryqSQMH8iyuGQGrm39/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <span className="flex items-center gap-2">
                  Download Resume <Download className="h-4 w-4" />
                </span>
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
