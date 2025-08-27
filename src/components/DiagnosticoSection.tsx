'use client';

import { motion } from 'framer-motion';
import { MagnifyingGlassIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Section from './Section';
import { trackDiagnosticoClick } from '@/utils/tracking';
import { getExternalURLs } from '@/utils/integrations';
import { RippleButton, SectionReveal } from './MicroInteractions';

const DiagnosticoSection = () => {
  const handleDiagnosticoClick = () => {
    trackDiagnosticoClick();
    const urls = getExternalURLs();
    window.open(urls.diagnostico, '_blank', 'noopener,noreferrer');
  };

  return (
    <Section className="bg-beige py-20 md:py-32" id="diagnostico">
      <div className="text-center">
        <SectionReveal className="max-w-6xl mx-auto">
          {/* Section Title */}
          <motion.h2
            className="font-serif font-bold text-3xl md:text-5xl lg:text-6xl text-black mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Diagnóstico Gratuito de{' '}
            <span className="text-gold">Recuperação Judicial</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="font-sans text-xl md:text-2xl text-gray mb-16 max-w-4xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Avalie gratuitamente se sua empresa tem perfil para Recuperação Judicial.
            <br className="hidden md:block" />
            Ferramenta desenvolvida por especialistas com mais de 20 anos de experiência.
          </motion.p>

          {/* Diagnostic Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 p-10 md:p-16 max-w-4xl mx-auto"
          >
            <div className="flex flex-col items-center text-center space-y-8">
              {/* Icon */}
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gold rounded-full flex items-center justify-center">
                <MagnifyingGlassIcon className="w-10 h-10 md:w-12 md:h-12 text-black" />
              </div>

              {/* Card Title */}
              <h3 className="font-serif font-bold text-2xl md:text-3xl lg:text-4xl text-black leading-tight">
                Análise Personalizada da Sua Empresa
              </h3>

              {/* Card Description */}
              <p className="font-sans text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl">
                Responda algumas perguntas sobre a situação financeira da sua empresa e receba uma avaliação detalhada sobre as possibilidades de recuperação judicial.
              </p>

              {/* Features List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-left max-w-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base md:text-lg text-gray">Análise de viabilidade</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base md:text-lg text-gray">Relatório personalizado</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base md:text-lg text-gray">100% gratuito</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base md:text-lg text-gray">Sem compromisso</span>
                </div>
              </div>

              {/* CTA Button */}
              <RippleButton
                onClick={handleDiagnosticoClick}
                className="w-full md:w-auto inline-flex items-center gap-4 text-xl px-12 py-6 md:px-16 md:py-8 bg-gold text-black hover:bg-black hover:text-gold border-2 border-gold shadow-button hover:shadow-button-hover transition-all duration-300 rounded-full font-sans font-bold"
              >
                Fazer Diagnóstico Gratuito
                <ArrowRightIcon className="w-6 h-6" />
              </RippleButton>

              {/* Trust Badge */}
              <p className="text-base text-gray bg-beige px-6 py-3 rounded-full">
                ⏱️ Leva apenas 3 minutos para completar
              </p>
            </div>
          </motion.div>
        </SectionReveal>
      </div>
    </Section>
  );
};

export default DiagnosticoSection;