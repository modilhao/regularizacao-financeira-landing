'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpenIcon, 
  ArrowDownTrayIcon 
} from '@heroicons/react/24/outline';
import Section from './Section';
import CTAButton from './CTAButton';
import { EbookFormData } from '@/types';
import { submitToBrevo, validateEbookForm, formatPhone } from '@/utils/integrations';
import { trackEbookDownload } from '@/utils/tracking';
import { RippleButton, SectionReveal } from './MicroInteractions';

const EbookSection = () => {
  const [formData, setFormData] = useState<EbookFormData>({
    nome: '',
    email: '',
    empresa: '',
    telefone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'telefone' ? formatPhone(value) : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = validateEbookForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }
    
    setIsSubmitting(true);
    setErrors([]);
    
    try {
      const result = await submitToBrevo(formData, 'ebook');
      
      if (result.success) {
        setIsSuccess(true);
        trackEbookDownload(formData.email);
        
        // Simular download do eBook
        const link = document.createElement('a');
        link.href = '/ebook-5-erros-fatais.pdf';
        link.download = 'ebook-5-erros-fatais-recuperacao-empresarial.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Reset form
        setFormData({
          nome: '',
          email: '',
          empresa: '',
          telefone: ''
        });
      } else {
        setErrors(['Erro ao enviar formulário. Tente novamente.']);
      }
    } catch (error) {
      console.error('Erro no envio:', error);
      setErrors(['Erro interno. Tente novamente em alguns minutos.']);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <Section className="bg-accent-50 py-20 md:py-32" id="ebook">
        <div className="text-center">
          <SectionReveal className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-primary-white rounded-2xl shadow-card p-10 md:p-16"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <ArrowDownTrayIcon className="w-10 h-10 text-green-600" />
              </div>
              
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-black mb-6">
                Download Iniciado!
              </h2>
              
              <p className="text-xl text-text-secondary mb-8">
                Seu eBook está sendo baixado. Verifique sua pasta de downloads.
              </p>
              
              <p className="text-base text-text-muted mb-8">
                Também enviamos uma cópia para seu e-mail com materiais complementares.
              </p>
              
              <CTAButton 
                onClick={() => setIsSuccess(false)}
                className="mx-auto"
              >
                Baixar Novamente
              </CTAButton>
            </motion.div>
          </SectionReveal>
        </div>
      </Section>
    );
  }

  return (
    <Section className="bg-accent-50 py-20 md:py-32" id="ebook">
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
            Evite os{' '}
            <span className="text-gold">5 Erros Fatais</span>{' '}
            que Travam a Recuperação da Sua Empresa
          </motion.h2>

          {/* Description */}
          <motion.p
            className="font-sans text-xl md:text-2xl text-text-secondary mb-16 max-w-4xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            eBook gratuito com estratégias comprovadas para empresários que enfrentam dificuldades financeiras.
            <br className="hidden md:block" />
            Baseado em mais de 20 anos de experiência em recuperação empresarial.
          </motion.p>

          {/* eBook Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-primary-white rounded-2xl shadow-card p-10 md:p-16 max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* eBook Info */}
              <div className="text-left space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gold rounded-full flex items-center justify-center">
                    <BookOpenIcon className="w-8 h-8 md:w-10 md:h-10 text-black" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-2xl md:text-3xl text-black">
                      eBook Exclusivo
                    </h3>
                    <p className="text-base md:text-lg text-text-muted">PDF • 25 páginas • Gratuito</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="font-sans font-bold text-xl md:text-2xl text-black">O que você vai aprender:</h4>
                  <ul className="space-y-4">
                    {[
                      'Os 5 erros mais comuns que impedem a recuperação',
                      'Como identificar o momento certo para agir',
                      'Estratégias para negociar com credores',
                      'Documentação essencial para o processo',
                      'Alternativas à recuperação judicial'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <div className="w-3 h-3 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-base md:text-lg text-text-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Form */}
              <div className="space-y-8">
                <h4 className="font-serif font-bold text-2xl md:text-3xl text-black text-center lg:text-left">
                  Baixe Gratuitamente
                </h4>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="nome"
                      placeholder="Seu nome completo"
                      value={formData.nome}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-300"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Seu melhor e-mail"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-300"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="empresa"
                      placeholder="Nome da sua empresa"
                      value={formData.empresa}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-300"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="telefone"
                      placeholder="Seu WhatsApp"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-300"
                    />
                  </div>

                  {errors.length > 0 && (
                    <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
                      {errors.map((error, index) => (
                        <p key={index} className="text-base text-red-600">{error}</p>
                      ))}
                    </div>
                  )}

                  <RippleButton
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-4 text-xl px-12 py-6 bg-gold text-black hover:bg-black hover:text-gold border-2 border-gold shadow-button hover:shadow-button-hover transition-all duration-300 rounded-full font-sans font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ArrowDownTrayIcon className="w-6 h-6" />
                    {isSubmitting ? 'Enviando...' : 'Baixar eBook Gratuito'}
                  </RippleButton>
                  
                  <p className="text-base text-text-muted text-center bg-beige px-6 py-3 rounded-full">
                    ✓ Seus dados estão seguros • ✓ Sem spam • ✓ Download imediato
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </SectionReveal>
      </div>
    </Section>
  );
};

export default EbookSection;