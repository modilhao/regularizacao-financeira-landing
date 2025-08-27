'use client';

import { motion } from 'framer-motion';
import { 
  ChatBubbleLeftRightIcon,
  PhoneIcon,
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import Section from './Section';
import { trackCTAClick, trackWhatsAppClick } from '@/utils/tracking';
import { openWhatsApp } from '@/utils/integrations';
import { RippleButton, SectionReveal } from './MicroInteractions';

const CTAFinalSection = () => {
  const handleWhatsAppClick = () => {
    trackCTAClick('cta-final-whatsapp');
    trackWhatsAppClick('cta-final');
    openWhatsApp(
      'Olá! Vi a landing page sobre regularização financeira empresarial e gostaria de agendar uma consulta para avaliar a situação da minha empresa. Podem me ajudar?'
    );
  };

  const benefits = [
    {
      icon: <ChatBubbleLeftRightIcon className="w-6 h-6" />,
      text: 'Consulta inicial gratuita'
    },
    {
      icon: <ClockIcon className="w-6 h-6" />,
      text: 'Resposta em até 24 horas'
    },
    {
      icon: <CheckCircleIcon className="w-6 h-6" />,
      text: 'Análise personalizada do seu caso'
    },
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      text: 'Atendimento especializado'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  return (
    <Section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-24 md:py-40" id="contato">
      <div className="text-center">
        <SectionReveal className="max-w-6xl mx-auto">
          {/* Main Headline */}
          <motion.h2
            className="font-serif font-bold text-4xl md:text-6xl lg:text-7xl text-primary-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Não Deixe Sua Empresa{' '}
            <span className="text-gold">Falir</span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            className="font-sans text-2xl md:text-4xl text-primary-white mb-8 font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Agende uma consulta <strong className="text-primary-gold">gratuita</strong> agora mesmo
          </motion.p>

          {/* Description */}
          <motion.p
            className="font-sans text-xl md:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Fale diretamente com nossos especialistas pelo WhatsApp e descubra como podemos 
            ajudar sua empresa a superar a crise financeira e voltar a crescer.
          </motion.p>

          {/* Benefits Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-primary-gold flex-shrink-0 w-8 h-8">
                  {benefit.icon}
                </div>
                <span className="font-sans text-lg font-bold text-primary-white">
                  {benefit.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-16"
          >
            <RippleButton
              onClick={handleWhatsAppClick}
              className="inline-flex items-center font-bold text-2xl px-16 py-8 bg-gold text-primary-black hover:bg-primary-black hover:text-gold border-2 border-gold shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-2xl font-sans"
            >
              <ChatBubbleLeftRightIcon className="w-8 h-8 mr-4" />
              Falar no WhatsApp Agora
            </RippleButton>
          </motion.div>

        {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="border-t border-white/20 pt-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="font-serif font-bold text-2xl text-primary-gold mb-2">
                  20+ Anos
                </div>
                <div className="font-sans text-sm text-gray-300">
                  de experiência em recuperação empresarial
                </div>
              </div>
              
              <div>
                <div className="font-serif font-bold text-2xl text-primary-gold mb-2">
                  500+ Empresas
                </div>
                <div className="font-sans text-sm text-gray-300">
                  recuperadas com sucesso
                </div>
              </div>
              
              <div>
                <div className="font-serif font-bold text-2xl text-primary-gold mb-2">
                  95% Taxa
                </div>
                <div className="font-sans text-sm text-gray-300">
                  de aprovação em processos
                </div>
              </div>
            </div>
          </motion.div>

          {/* Urgency Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 bg-red-600/20 border border-red-500/30 rounded-lg p-6 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-2 mb-3">
              <ClockIcon className="w-5 h-5 text-red-400" />
              <span className="font-sans font-semibold text-red-400 uppercase tracking-wide text-sm">
                Atenção: Tempo é Crucial
              </span>
            </div>
            
            <p className="font-sans text-sm text-gray-300 leading-relaxed">
              Quanto mais cedo você agir, maiores são as chances de recuperação da sua empresa. 
              Não espere a situação piorar - entre em contato conosco hoje mesmo.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 text-center"
          >
            <p className="font-sans text-sm text-gray-400">
              Lima Advogados • Especialistas em Recuperação Empresarial
            </p>
          </motion.div>
        </SectionReveal>
      </div>
    </Section>
  );
};

export default CTAFinalSection;