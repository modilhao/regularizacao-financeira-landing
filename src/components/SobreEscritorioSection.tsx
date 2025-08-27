'use client';

import { motion } from 'framer-motion';
import { 
  ScaleIcon, 
  BuildingOfficeIcon, 
  UserGroupIcon, 
  TrophyIcon 
} from '@heroicons/react/24/outline';
import Section from './Section';
import { SectionReveal, AnimatedCounter } from './MicroInteractions';

const SobreEscritorioSection = () => {
  const stats = [
    {
      icon: <ScaleIcon className="w-8 h-8" />,
      number: '20+',
      label: 'Anos de Experiência',
      description: 'Mais de duas décadas especializados em direito empresarial'
    },
    {
      icon: <BuildingOfficeIcon className="w-8 h-8" />,
      number: '500+',
      label: 'Empresas Atendidas',
      description: 'Centenas de empresas recuperadas com sucesso'
    },
    {
      icon: <UserGroupIcon className="w-8 h-8" />,
      number: '15',
      label: 'Especialistas',
      description: 'Equipe multidisciplinar de advogados e consultores'
    },
    {
      icon: <TrophyIcon className="w-8 h-8" />,
      number: '95%',
      label: 'Taxa de Sucesso',
      description: 'Índice de aprovação em processos de recuperação judicial'
    }
  ];



  return (
    <Section className="bg-blue py-20 md:py-32" id="sobre">
      <div className="text-center">
        <SectionReveal className="max-w-7xl mx-auto">
          {/* Section Title */}
          <motion.h2
            className="font-serif font-bold text-3xl md:text-5xl lg:text-6xl text-black mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Sobre o{' '}
            <span className="text-gold">Lima Advogados</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="font-sans text-xl md:text-2xl text-gray mb-16 max-w-4xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Mais de duas décadas de experiência em recuperação empresarial, 
            ajudando empresas a superar crises e retomar o crescimento sustentável.
          </motion.p>
        </SectionReveal>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-12 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="text-center bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-primary-black">
                  {stat.icon}
                </div>
              </div>
              <div className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-black mb-4">
                <AnimatedCounter 
                  end={parseInt(stat.number.replace(/[^0-9]/g, '')) || 0} 
                  suffix={stat.number.replace(/[0-9]/g, '')} 
                />
              </div>
              <div className="text-lg md:text-xl text-text-secondary font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Expertise Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-left"
        >
          <h3 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-primary-black mb-12 text-center">
            Áreas de Atuação
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                title: 'Recuperação Judicial',
                description: 'Processos completos de recuperação judicial para empresas em dificuldades financeiras'
              },
              {
                title: 'Recuperação Extrajudicial',
                description: 'Negociação direta com credores para reestruturação de dívidas fora do âmbito judicial'
              },
              {
                title: 'Consultoria Preventiva',
                description: 'Assessoria estratégica para evitar crises financeiras e manter a saúde empresarial'
              },
              {
                title: 'Direito Falimentar',
                description: 'Acompanhamento em processos falimentares e liquidação de empresas'
              },
              {
                title: 'Reestruturação Societária',
                description: 'Reorganização da estrutura societária para otimização fiscal e operacional'
              },
              {
                title: 'Compliance Empresarial',
                description: 'Implementação de programas de conformidade e governança corporativa'
              }
            ].map((expertise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-primary-white rounded-2xl shadow-card p-8 hover:shadow-card-hover transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-primary-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <ScaleIcon className="w-8 h-8 md:w-10 md:h-10 text-primary-black" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-xl md:text-2xl text-primary-black mb-4 leading-tight">
                      {expertise.title}
                    </h4>
                    <p className="text-lg text-gray leading-relaxed">
                      {expertise.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <blockquote className="font-serif text-xl md:text-2xl text-primary-black italic text-center leading-relaxed">
            &ldquo;Nossa missão é transformar crises em oportunidades, oferecendo soluções jurídicas 
            inovadoras que preservem empregos e mantenham empresas funcionando.&rdquo;
          </blockquote>
          
          <div className="mt-6 text-center">
            <p className="font-sans font-semibold text-primary-gold">
              Edmilson Lima
            </p>
            <p className="font-sans text-sm text-text-muted">
              Sócio Fundador
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default SobreEscritorioSection;