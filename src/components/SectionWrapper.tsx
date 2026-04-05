import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface SectionWrapperProps {
  children: ReactNode;
  id: string;
  className?: string;
  title?: string;
  titleAccent?: string;
  subtitle?: string;
  showBackground?: boolean;
}

export const SectionWrapper = ({
  children,
  id,
  className = '',
  title,
  titleAccent,
  subtitle,
  showBackground = false,
}: SectionWrapperProps) => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section
      id={id}
      className={`relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 ${
        showBackground ? 'bg-card/20' : ''
      } ${className}`}
    >
      <div className="container mx-auto max-w-7xl" ref={ref}>
        {title && (
          <motion.div
            className="text-center mb-12 sm:mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {title}{' '}
              {titleAccent && (
                <span className="text-gradient">{titleAccent}</span>
              )}
            </h2>
            <div className="w-20 h-1 gradient-primary mx-auto rounded-full mb-5" />
            {subtitle && (
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-center">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};
