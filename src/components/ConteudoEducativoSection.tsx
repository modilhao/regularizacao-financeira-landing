'use client';

import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, ClockIcon } from '@heroicons/react/24/outline';
import Section from './Section';
import { BlogArticle } from '@/types';
import { trackBlogLinkClick } from '@/utils/tracking';
import { getExternalURLs } from '@/utils/integrations';

const ConteudoEducativoSection = () => {
  const urls = getExternalURLs();
  
  // Mock articles - in a real app, these would come from a CMS or API
  const articles: BlogArticle[] = [
    {
      id: '1',
      title: 'Recuperação Judicial vs Falência: Qual a Diferença?',
      excerpt: 'Entenda as principais diferenças entre recuperação judicial e falência, e quando cada uma é mais adequada para sua empresa.',
      url: `${urls.blog}/recuperacao-judicial-vs-falencia`,
      category: 'Recuperação Judicial',
      readTime: '5 min'
    },
    {
      id: '2',
      title: 'Como Negociar com Credores em Tempos de Crise',
      excerpt: 'Estratégias práticas para negociar dívidas e manter relacionamentos comerciais durante dificuldades financeiras.',
      url: `${urls.blog}/como-negociar-credores`,
      category: 'Negociação',
      readTime: '7 min'
    },
    {
      id: '3',
      title: 'Documentos Essenciais para Recuperação Judicial',
      excerpt: 'Lista completa dos documentos necessários para dar entrada no processo de recuperação judicial da sua empresa.',
      url: `${urls.blog}/documentos-recuperacao-judicial`,
      category: 'Documentação',
      readTime: '4 min'
    },
    {
      id: '4',
      title: 'Sinais de que Sua Empresa Precisa de Ajuda Jurídica',
      excerpt: 'Identifique os principais indicadores de que é hora de buscar assessoria jurídica especializada em recuperação empresarial.',
      url: `${urls.blog}/sinais-empresa-precisa-ajuda`,
      category: 'Prevenção',
      readTime: '6 min'
    },
    {
      id: '5',
      title: 'Alternativas à Recuperação Judicial',
      excerpt: 'Conheça outras opções para empresas em dificuldades financeiras antes de partir para a recuperação judicial.',
      url: `${urls.blog}/alternativas-recuperacao-judicial`,
      category: 'Estratégias',
      readTime: '8 min'
    },
    {
      id: '6',
      title: 'Como Manter a Empresa Funcionando Durante a Crise',
      excerpt: 'Dicas práticas para manter as operações da empresa funcionando enquanto resolve questões financeiras.',
      url: `${urls.blog}/manter-empresa-funcionando-crise`,
      category: 'Gestão',
      readTime: '5 min'
    }
  ];

  const handleArticleClick = (article: BlogArticle) => {
    trackBlogLinkClick(article.title, article.url);
    window.open(article.url, '_blank', 'noopener,noreferrer');
  };

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  return (
    <Section className="bg-white py-20 md:py-32" id="conteudo">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto mb-16"
        >
          {/* Section Title */}
          <motion.h2
            className="font-serif font-bold text-3xl md:text-5xl lg:text-6xl text-black mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Conteúdo{' '}
            <span className="text-gold">Educativo</span>{' '}
            Especializado
          </motion.h2>

          {/* Description */}
          <motion.p
            className="font-sans text-xl md:text-2xl text-gray max-w-4xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Artigos e guias práticos para empresários que enfrentam dificuldades financeiras.
            <br className="hidden md:block" />
            Conteúdo baseado em mais de 20 anos de experiência em recuperação empresarial.
          </motion.p>
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12"
        >
          {articles.map((article) => (
            <motion.article
              key={article.id}
              variants={itemVariants}
              className="bg-primary-white border border-gray-200 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer group transform hover:scale-105"
              onClick={() => handleArticleClick(article)}
              whileHover={{ y: -4 }}
            >
              <div className="p-8 h-full flex flex-col">
                {/* Category & Read Time */}
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-block px-4 py-2 bg-beige text-primary-gold text-base font-bold rounded-full">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-2 text-gray text-base">
                    <ClockIcon className="w-5 h-5" />
                    {article.readTime}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif font-bold text-2xl md:text-3xl text-primary-black mb-4 group-hover:text-primary-gold transition-colors duration-200 flex-grow leading-tight">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="font-sans text-lg text-text-muted mb-6 line-clamp-3 flex-grow leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Read More Link */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="font-sans text-lg font-bold text-primary-gold group-hover:text-black transition-colors duration-200">
                    Ler artigo completo
                  </span>
                  <ArrowTopRightOnSquareIcon className="w-5 h-5 text-primary-gold group-hover:text-black transition-colors duration-200" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA to Blog */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="font-sans text-xl text-text-secondary mb-6">
            Quer mais conteúdo especializado?
          </p>
          <motion.a
            href={urls.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 font-sans font-bold text-xl px-12 py-6 border-2 border-gold text-primary-gold hover:bg-gold hover:text-primary-black shadow-button hover:shadow-button-hover transform hover:scale-105 transition-all duration-300 rounded-full"
            whileHover={{ scale: 1.05 }}
            onClick={() => trackBlogLinkClick('Ver todos os artigos', getExternalURLs().blog)}
          >
            Ver todos os artigos do blog
            <ArrowTopRightOnSquareIcon className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </div>
    </Section>
  );
};

export default ConteudoEducativoSection;