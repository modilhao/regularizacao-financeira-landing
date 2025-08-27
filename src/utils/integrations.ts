import { BrevoContact, EbookFormData, BREVO_LISTS } from '@/types';

// Brevo API Integration
export const submitToBrevo = async (formData: EbookFormData, origem: BrevoContact['attributes']['ORIGEM']) => {
  try {
    const contact: BrevoContact = {
      email: formData.email,
      attributes: {
        NOME: formData.nome,
        EMPRESA: formData.empresa || '',
        TELEFONE: formData.telefone || '',
        ORIGEM: origem,
        INTERESSE: origem === 'ebook' ? 'ebook' : 'recuperacao-judicial',
        DATA_CADASTRO: new Date().toISOString().split('T')[0]
      },
      listIds: getListIds(origem),
      updateEnabled: true
    };

    const response = await fetch('/api/brevo/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contact)
    });

    if (!response.ok) {
      throw new Error(`Erro na API Brevo: ${response.status}`);
    }

    const result = await response.json();
    return { success: true, data: result };
  } catch (error) {
    console.error('Erro ao enviar para Brevo:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Erro desconhecido' };
  }
};

// Get appropriate list IDs based on origin
const getListIds = (origem: BrevoContact['attributes']['ORIGEM']): number[] => {
  const baseList = [BREVO_LISTS.LEADS_REGULARIZACAO];
  
  switch (origem) {
    case 'ebook':
      return [...baseList, BREVO_LISTS.EBOOK_DOWNLOADS];
    case 'diagnostico':
      return [...baseList, BREVO_LISTS.DIAGNOSTICO_USERS];
    case 'hero-cta':
    case 'cta-final':
      return [...baseList, BREVO_LISTS.HOT_LEADS];
    default:
      return baseList;
  }
};

// WhatsApp Integration
export const generateWhatsAppURL = (message?: string) => {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_PHONE_NUMBER || '5511949695000';
  const defaultMessage = 'Olá, vim do site de regularização financeira e gostaria de agendar uma conversa com Edmilson.';
  const encodedMessage = encodeURIComponent(message || defaultMessage);
  
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

export const openWhatsApp = (message?: string) => {
  const url = generateWhatsAppURL(message);
  window.open(url, '_blank', 'noopener,noreferrer');
};

// External URLs
export const getExternalURLs = () => {
  return {
    diagnostico: process.env.NEXT_PUBLIC_DIAGNOSTICO_URL || 'https://www.limaadvogados.adv.br/recuperacao-judicial',
    ebook: process.env.NEXT_PUBLIC_EBOOK_URL || 'https://www.limaadvogados.adv.br/ebook-regularizacao-financeira',
    blog: process.env.NEXT_PUBLIC_BLOG_BASE_URL || 'https://blog.limaadvogados.adv.br'
  };
};

// Form validation
export const validateEbookForm = (data: EbookFormData): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (!data.nome.trim()) {
    errors.push('Nome é obrigatório');
  }
  
  if (!data.email.trim()) {
    errors.push('Email é obrigatório');
  } else if (!isValidEmail(data.email)) {
    errors.push('Email inválido');
  }
  
  if (data.telefone && !isValidPhone(data.telefone)) {
    errors.push('Telefone inválido');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Email validation
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Phone validation (Brazilian format)
const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^\(?\d{2}\)?[\s-]?\d{4,5}[\s-]?\d{4}$/;
  return phoneRegex.test(phone.replace(/\D/g, ''));
};

// Format phone number
export const formatPhone = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  
  if (cleaned.length === 11) {
    return cleaned.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  } else if (cleaned.length === 10) {
    return cleaned.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  }
  
  return phone;
};

// Scroll to section
export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

// Debounce function for performance
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle function for scroll events
export const throttle = <T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};