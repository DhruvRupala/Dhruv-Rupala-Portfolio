import { ExternalLink, Github, Folder } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SectionWrapper } from './SectionWrapper';

const projects = [
  {
    title: 'Web Application Security Testing Platform',
    description:
      'A MERN & Python-based security testing platform featuring a custom vulnerability scanning engine, real-time admin dashboard, and secure role-based access.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'JWT'],
    category: 'Cybersecurity',
    github: 'https://github.com/DhruvRupala/W.A.S.T---Web-Application-Security-Testing',
    demo: 'https://wastp.vercel.app/',
    featured: true,
  },
  {
    title: 'Excel Analytics App',
    description:
      'A MERN-stack web application that transforms uploaded Excel spreadsheets into instant, interactive charts and meaningful data insights.',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Chart.js'],
    category: 'Full-Stack',
    github: 'https://github.com/DhruvRupala/Excel-Analytics-App',
    demo: 'https://rdexcel.vercel.app/',
  },
  {
    title: 'Blogging App',
    description:
      'A seamless MERN-stack platform featuring secure authentication, dynamic routing, and a responsive interface designed for creating and sharing stories.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'TailwindCSS'],
    category: 'Full-Stack',
    github: 'https://github.com/DhruvRupala/Simple-Blogg-App',
    demo: 'https://github.com/DhruvRupala/Simple-Blogg-App',
  },
  {
    title: 'ESports Tournament Registration Platform',
    description:
      'A complete management system for ESports tournaments, handling player registration, match tracking, and prize distribution via a robust backend.',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'JWT', 'TailwindCSS'],
    category: 'Full-Stack',
    github: 'https://github.com/DhruvRupala',
    demo: 'https://github.com/DhruvRupala',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export const Portfolio = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <SectionWrapper
      id="portfolio"
      title="My"
      titleAccent="Projects"
      subtitle="Explore my recent projects and development work"
      showBackground
    >
      <motion.div
        ref={ref}
        className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={cardVariants}
            className="group relative"
          >
            <div
              className={`glass-card p-6 sm:p-8 rounded-2xl h-full flex flex-col transition-all duration-500 border border-border/40 hover:border-primary/30 ${project.featured ? 'glow-border' : ''
                }`}
              style={{
                transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = (e.clientX - rect.left - rect.width / 2) / 25;
                const y = -(e.clientY - rect.top - rect.height / 2) / 25;
                e.currentTarget.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${y}deg)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
              }}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
                    <Folder className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary/80">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="ml-2 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider gradient-primary text-primary-foreground">
                        Featured
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-gradient transition-all duration-300">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-5 flex-grow">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/8 border border-primary/15 text-primary rounded-lg text-xs sm:text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 mt-auto">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 h-10 rounded-xl border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </Button>
                {project.demo && (
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1 h-10 rounded-xl shadow-glow hover:shadow-glow-strong transition-all duration-300"
                    onClick={() => {
                      if (project.demo !== '#') window.open(project.demo, '_blank');
                    }}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};
