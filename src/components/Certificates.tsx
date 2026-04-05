import { Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SectionWrapper } from './SectionWrapper';

const certificates = [
  {
    title: 'Internship — Web Development',
    issuer: 'Zidio Development',
    date: 'May–July 2025',
    description:
      'Comprehensive web development internship covering full-stack development with HTML, CSS, JavaScript, React, Node.js, Express.js, and databases.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'MySQL'],
    link: 'https://drive.google.com/file/d/1JrIKAPegcnZeKutdH-6NXmn8A8SknjWQ/view?usp=sharing',
  },
  {
    title: 'Understanding Incubation & Entrepreneurship',
    issuer: 'NPTEL — IIT Bombay',
    date: 'Jan–Apr 2025',
    description:
      'Achieved Elite certificate in a 12-week NPTEL course with a consolidated score of 94%, demonstrating strong understanding of startup ecosystems.',
    skills: ['Startup Incubation', 'Business Accelerators', 'Networking & Mentorship', 'Funding Fundamentals'],
    link: 'https://drive.google.com/file/d/1Gou6NAEpAAKjazZZVLam0E1BX56aDjJ4/view?usp=sharing',
    highlight: '94% Score',
  },
  {
    title: 'Cybersecurity Fundamentals',
    issuer: 'IBM SkillsBuild',
    date: '2025',
    description:
      'Introduction to cybersecurity concepts including network security, cryptography, and risk management best practices.',
    skills: ['Network Security', 'Cryptography', 'Risk Management'],
    link: 'https://drive.google.com/file/d/18fyvgSSJkQJ_Uys7nEJ6xVcFHF8wmjiv/view?usp=sharing',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const Certificates = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <SectionWrapper
      id="certificates"
      title="Certificates &"
      titleAccent="Achievements"
      subtitle="Professional certifications validating my skills and expertise"
    >
      <motion.div
        ref={ref}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
      >
        {certificates.map((cert) => (
          <motion.div
            key={cert.title}
            variants={cardVariants}
            className="group relative"
          >
            <div className="glass-card h-full p-6 rounded-2xl flex flex-col transition-all duration-500 border border-border/40 hover:border-primary/30 hover:shadow-glow shimmer">
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 flex-shrink-0">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div className="flex items-center gap-2">
                  {cert.highlight && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider gradient-primary text-primary-foreground">
                      {cert.highlight}
                    </span>
                  )}
                  <span className="px-2.5 py-1 rounded-lg text-xs font-medium bg-secondary/60 text-muted-foreground border border-border/30">
                    {cert.date}
                  </span>
                </div>
              </div>

              {/* Title & Issuer */}
              <h3 className="text-lg sm:text-xl font-bold mb-1 group-hover:text-primary transition-colors duration-300">
                {cert.title}
              </h3>
              <p className="text-sm font-semibold text-primary/70 mb-3">
                {cert.issuer}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                {cert.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 rounded-md text-xs font-medium bg-secondary/50 text-foreground/70 border border-border/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Button
                variant="outline"
                size="sm"
                className="w-full h-10 rounded-xl border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all group/btn"
                asChild
              >
                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  View Certificate
                  <ExternalLink className="w-3.5 h-3.5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};
