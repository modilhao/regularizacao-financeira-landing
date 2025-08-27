// Types para integração Brevo
export interface BrevoContact {
  email: string;
  attributes: {
    NOME: string;
    EMPRESA?: string;
    TELEFONE?: string;
    ORIGEM: 'hero-cta' | 'diagnostico' | 'ebook' | 'cta-final';
    INTERESSE: 'recuperacao-judicial' | 'consultoria' | 'ebook';
    DATA_CADASTRO: string;
  };
  listIds: number[];
  updateEnabled: boolean;
}

// Tags de segmentação Brevo
export const BREVO_TAGS = {
  LEAD_REGULARIZACAO: 'lead-regularizacao',
  EBOOK_5ERROS: 'ebook-5erros',
  DIAGNOSTICO_RECUPERACAO: 'diagnostico-recuperacao',
  CTA_HERO: 'cta-hero-agendamento',
  CTA_FINAL: 'cta-final-whatsapp'
} as const;

// Listas de segmentação
export const BREVO_LISTS = {
  LEADS_REGULARIZACAO: 1,
  EBOOK_DOWNLOADS: 2,
  DIAGNOSTICO_USERS: 3,
  HOT_LEADS: 4
} as const;

// Google Ads Conversion Schema
export interface GoogleAdsConversion {
  google_conversion_id: string;
  google_conversion_label: string;
  google_conversion_value?: number;
  google_conversion_currency?: 'BRL';
  google_custom_params?: {
    origem: string;
    tipo_lead: string;
    pagina: string;
  };
}

// Configurações de conversão
export const GOOGLE_ADS_CONFIG = {
  CONVERSION_ID: 'AW-XXXXXXXXX',
  LABELS: {
    LEAD_HERO: 'hero-agendamento',
    LEAD_DIAGNOSTICO: 'diagnostico-click',
    LEAD_EBOOK: 'ebook-download',
    LEAD_FINAL: 'cta-final-whatsapp'
  },
  VALUES: {
    AGENDAMENTO: 50,
    DIAGNOSTICO: 25,
    EBOOK: 15,
    WHATSAPP: 30
  }
} as const;

// Analytics Events Schema
export interface AnalyticsEvent {
  event_name: string;
  event_category: 'engagement' | 'conversion' | 'navigation';
  event_label?: string;
  value?: number;
  custom_parameters?: {
    section: string;
    cta_type: string;
    user_journey_step: number;
  };
}

// Eventos trackados
export const ANALYTICS_EVENTS = {
  PAGE_VIEW: 'page_view',
  HERO_CTA_CLICK: 'hero_cta_click',
  DIAGNOSTICO_CLICK: 'diagnostico_click',
  EBOOK_DOWNLOAD: 'ebook_download',
  BLOG_LINK_CLICK: 'blog_link_click',
  WHATSAPP_CLICK: 'whatsapp_click',
  SCROLL_DEPTH: 'scroll_depth',
  TIME_ON_PAGE: 'time_on_page'
} as const;

// Form Data Types
export interface EbookFormData {
  nome: string;
  email: string;
  empresa?: string;
  telefone?: string;
}

// Component Props Types
export interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  loading?: boolean;
}

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

// Blog Article Type
export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  url: string;
  category: string;
  readTime: string;
}

// Environment Variables Type
export interface EnvConfig {
  BREVO_API_KEY: string;
  BREVO_SENDER_EMAIL: string;
  BREVO_SENDER_NAME: string;
  GOOGLE_ADS_CONVERSION_ID: string;
  GOOGLE_ADS_GTAG_ID: string;
  WHATSAPP_PHONE_NUMBER: string;
  VERCEL_ANALYTICS_ID: string;
  DIAGNOSTICO_URL: string;
  EBOOK_URL: string;
  BLOG_BASE_URL: string;
  SITE_URL: string;
  SITE_NAME: string;
}