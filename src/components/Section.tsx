'use client';

import { motion } from 'framer-motion';
import { SectionProps } from '@/types';
import { cn } from '@/lib/utils';

const Section: React.FC<SectionProps> = ({ children, className, id }) => {
  return (
    <motion.section
      id={id}
      className={cn(
        'py-section-y-mobile md:py-section-y',
        className
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }}
    >
      <div className="container mx-auto px-4 max-w-container">
        {children}
      </div>
    </motion.section>
  );
};

export default Section;