'use client';

import { motion } from 'framer-motion';
import { CTAButtonProps } from '@/types';
import { cn } from '@/lib/utils';

const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  disabled = false,
  loading = false,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-sans font-bold rounded-button transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-gold text-black hover:bg-gold/90 focus:ring-gold shadow-button hover:shadow-button-hover',
    secondary: 'bg-transparent text-gold border-2 border-gold hover:bg-gold hover:text-black focus:ring-gold'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-button-text',
    lg: 'px-8 py-4 text-lg font-bold'
  };
  
  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );
  
  const MotionComponent = motion.button;
  
  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { type: 'spring' as const, stiffness: 400, damping: 17 },
  };
  
  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        {...motionProps}
        {...props}
      >
        {loading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Carregando...
          </>
        ) : (
          children
        )}
      </motion.a>
    );
  }
  
  return (
    <MotionComponent
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      {...motionProps}
      {...props}
    >
      {loading ? (
        <>
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Carregando...
        </>
      ) : (
        children
      )}
    </MotionComponent>
  );
};

export default CTAButton;