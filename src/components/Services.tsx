import { Code, Shield, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SectionWrapper } from './SectionWrapper';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description:
      'Building modern, responsive web applications using cutting-edge technologies like React, Node.js, Express.js, and MongoDB. From concept to deployment, I create scalable and performant solutions.',
    gradient: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    icon: Shield,
    title: 'Exploring Cybersecurity',
    description:
      'Passionate about learning and implementing cybersecurity best practices. Exploring network security, vulnerability assessment, and ethical hacking techniques to build safer digital products.',
    gradient: 'from-purple-500/20 to-pink-500/20',
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
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const Services = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <SectionWrapper
      id="services"
      title="My"
      titleAccent="Services"
      subtitle="What I offer to transform your vision into reality"
    >
      <motion.div
        ref={ref}
        className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={cardVariants}
            className="group"
          >
            <div className="glass-card p-7 sm:p-9 rounded-2xl h-full flex flex-col transition-all duration-500 border border-border/40 hover:border-primary/30 hover:shadow-glow relative overflow-hidden">
              {/* Background gradient blob */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700`} />

              <div className="relative z-10 space-y-5">
                <div className="flex items-start justify-between">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.gradient} border border-border/30 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold group-hover:text-gradient transition-all duration-300">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};
