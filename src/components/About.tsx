import { GraduationCap, Code, Database, Shield, Cpu, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SectionWrapper } from './SectionWrapper';

const skills = [
  {
    category: 'Programming Languages',
    icon: Code,
    items: ['C/C++', 'Python', 'Java', 'JavaScript', 'SQL'],
    color: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    category: 'Frameworks & Libraries',
    icon: Cpu,
    items: ['React.js', 'Node.js', 'Express.js', 'Pandas', 'NumPy', 'Matplotlib', 'Django'],
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    category: 'Developer Tools',
    icon: Shield,
    items: ['Git & GitHub', 'Wireshark', 'Nmap', 'Autopsy', 'TCPdump', 'Burp Suite', 'Xampp', 'Postman', 'Figma', 'AI Concepts & Frameworks'],
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    category: 'Databases',
    icon: Database,
    items: ['MongoDB', 'MySQL', 'PostgreSQL'],
    color: 'from-orange-500/20 to-amber-500/20',
  },
];

const coursework = [
  'OOPs (Java)', 'DSA/DAA', 'OS', 'DBMS', 'Advanced Python',
  'Computer Network', 'Cryptography & Network Security', 'Cyber Security',
  'Digital Forensics', 'AI/ML', 'NPTEL (Incubation & Entrepreneurship)',
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const About = () => {
  const { ref: leftRef, isInView: leftInView } = useScrollReveal();
  const { ref: rightRef, isInView: rightInView } = useScrollReveal();

  return (
    <SectionWrapper
      id="about"
      title="About"
      titleAccent="Me"
      subtitle="Engineer by education. Developer by passion."
    >
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-14">
        {/* Left column: Bio + Education + Coursework */}
        <motion.div
          ref={leftRef}
          className="space-y-6"
          initial={{ opacity: 0, x: -40 }}
          animate={leftInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Bio Card */}
          <div className="glass-card-hover p-6 sm:p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <div className="space-y-3 text-sm sm:text-base text-foreground/80 leading-relaxed">
              <p>
                Hey! I'm <span className="text-foreground font-semibold">Dhruv Rupala</span>, Computer Science student at{' '}
                <span className="text-primary font-semibold">PDEU</span>. I love building
                web apps using the{' '}
                <span className="text-primary font-semibold">MERN stack</span> and turning
                ideas into real, working products.
              </p>
              <p>
                I'm also into{' '}
                <span className="text-foreground font-medium">cybersecurity</span> — so I
                make sure the things I build are not just good-looking, but also safe and
                reliable.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-border/30 flex items-center gap-2.5">
              <Zap className="h-3.5 w-3.5 text-primary flex-shrink-0" />
              <p className="text-xs text-muted-foreground italic">
                "Great software lives at the intersection of clean code, thoughtful design, and
                relentless curiosity."
              </p>
            </div>
          </div>

          {/* Education Card */}
          <div className="glass-card-hover p-6 sm:p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 gradient-primary rounded-full" />

            <div className="flex items-start space-x-4 pl-4">
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 flex-shrink-0">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary/80">
                  Education
                </span>
                <h3 className="text-xl sm:text-2xl font-bold mt-1.5 mb-2">
                  B.Tech in Computer Science & Engineering
                </h3>
                <p className="text-base text-foreground/80 font-semibold">
                  Pandit Deendayal Energy University (PDEU)
                </p>
                <p className="text-sm text-muted-foreground mt-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full gradient-primary" />
                  2022 — 2026
                </p>
              </div>
            </div>
          </div>

          {/* Coursework Card */}
          <div className="glass-card-hover p-6 sm:p-8 rounded-2xl">
            <h3 className="text-lg sm:text-xl font-bold mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full gradient-primary" />
              Relevant Coursework
            </h3>
            <div className="flex flex-wrap gap-2">
              {coursework.map((course, i) => (
                <motion.span
                  key={course}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium bg-primary/8 border border-primary/15 text-foreground/85 hover:bg-primary/15 hover:border-primary/30 transition-all duration-300 cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={leftInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: i * 0.03 + 0.3, duration: 0.3 }}
                >
                  {course}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right column: Skills */}
        <motion.div
          ref={rightRef}
          className="space-y-5"
          variants={containerVariants}
          initial="hidden"
          animate={rightInView ? 'show' : 'hidden'}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.category}
              variants={itemVariants}
              className="glass-card-hover p-5 sm:p-6 rounded-2xl group shimmer"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${skill.color} border border-border/30`}>
                  <skill.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-bold">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 bg-secondary/60 rounded-lg text-xs sm:text-sm text-foreground/80 font-medium hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default border border-transparent hover:border-primary/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
