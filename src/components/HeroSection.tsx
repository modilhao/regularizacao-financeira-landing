'use client';

import { motion } from 'framer-motion';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import Section from './Section';
import { trackHeroCTAClick } from '@/utils/tracking';
import { openWhatsApp } from '@/utils/integrations';
import { RippleButton, SectionReveal } from './MicroInteractions';

const HeroSection = () => {
  const handleCTAClick = () => {
    trackHeroCTAClick();
    openWhatsApp('Olá! Vim do site de regularização financeira e gostaria de agendar uma conversa com Edmilson sobre a situação da minha empresa.');
  };

  return (
    <Section className="bg-white text-center min-h-screen flex items-center py-20 md:py-32" id="hero">
      <div className="w-full">
        <SectionReveal className="space-y-12 md:space-y-16">
          {/* Main Title */}
          <motion.h1
            className="font-serif font-black text-4xl md:text-6xl lg:text-7xl text-black leading-[1.1] max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Sua empresa está com{' '}
            <span className="text-gold block md:inline">dificuldades financeiras</span>?
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="font-sans text-xl md:text-2xl text-gray max-w-4xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Descubra os primeiros passos para recuperar o controle financeiro da sua empresa.
            <br className="hidden md:block" />
            <strong className="text-black">Diagnóstico gratuito</strong> e{' '}
        <strong className="text-black">eBook exclusivo</strong> com estratégias comprovadas.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-6"
          >
            <RippleButton
              onClick={handleCTAClick}
              className="inline-flex items-center gap-4 text-xl px-12 py-6 md:px-16 md:py-8 bg-gold text-black hover:bg-black hover:text-gold border-2 border-gold shadow-button hover:shadow-button-hover transition-all duration-300 rounded-full font-sans font-bold"
            >
              <CalendarDaysIcon className="w-7 h-7" />
              Agendar Conversa com Edmilson
            </RippleButton>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-12 space-y-6"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-base md:text-lg text-gray">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-gold rounded-full"></div>
                <span>✓ Mais de 20 anos de experiência</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-gold rounded-full"></div>
                <span>✓ Especialistas em recuperação empresarial</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-gold rounded-full"></div>
                <span>✓ Atendimento personalizado</span>
              </div>
            </div>
          </motion.div>
        </SectionReveal>
      </div>
    </Section>
  );
};

export default HeroSection;