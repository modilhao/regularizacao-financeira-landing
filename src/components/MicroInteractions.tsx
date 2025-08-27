'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/outline';

// Floating Action Button para voltar ao topo
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsVisible(latest > 300);
    });
    return unsubscribe;
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-gold text-primary-black rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0,
        rotate: isVisible ? 0 : 180
      }}
      whileHover={{ 
        scale: 1.1,
        boxShadow: "0 10px 25px rgba(212, 175, 55, 0.3)"
      }}
      whileTap={{ scale: 0.95 }}
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
    >
      <ChevronUpIcon className="w-6 h-6 group-hover:animate-bounce" />
    </motion.button>
  );
};

// Progress Bar de leitura
const ReadingProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gold origin-left z-50"
      style={{ scaleX }}
    />
  );
};

// Cursor personalizado para elementos interativos
const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Adicionar listeners para elementos interativos
    const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
    
    window.addEventListener('mousemove', updateMousePosition);
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-50 mix-blend-difference"
      animate={{
        x: mousePosition.x - 10,
        y: mousePosition.y - 10,
        scale: isHovering ? 1.5 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}
    >
      <div className="w-5 h-5 bg-gold rounded-full" />
    </motion.div>
  );
};

// Animação de entrada para seções
export const SectionReveal = ({ children, className = "", delay = 0 }: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  );
};

// Botão com efeito ripple
export const RippleButton = ({ 
  children, 
  onClick, 
  className = "",
  ...props 
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  [key: string]: unknown;
}) => {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { x, y, id: Date.now() };
    
    setRipples(prev => [...prev, newRipple]);
    
    // Remove ripple após animação
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);
    
    onClick?.();
  };

  return (
    <motion.button
      className={`relative overflow-hidden ${className}`}
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
      {ripples.map(ripple => (
        <motion.span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full pointer-events-none"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      ))}
    </motion.button>
  );
};

// Contador animado
export const AnimatedCounter = ({ 
  end, 
  duration = 2, 
  suffix = "",
  className = ""
}: {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
}) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

    const startTime = Date.now();
    const endTime = startTime + duration * 1000;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (endTime - startTime), 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [end, duration, hasStarted]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setHasStarted(true)}
    >
      {count}{suffix}
    </motion.span>
  );
};

// Componente principal que agrupa todas as microinterações
const MicroInteractions = () => {
  return (
    <>
      <ReadingProgress />
      <ScrollToTop />
      <CustomCursor />
    </>
  );
};

export default MicroInteractions;