// Google Analytics and Google Ads tracking utilities

// Google Analytics Measurement ID
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GTAG_ID || '';

// Google Ads Conversion ID
export const GOOGLE_ADS_CONVERSION_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID || '';

// Google Ads Conversion Labels
export const CONVERSION_LABELS = {
  WHATSAPP_CLICK: 'whatsapp_click',
  EBOOK_DOWNLOAD: 'ebook_download',
  DIAGNOSTIC_CLICK: 'diagnostic_click',
  CTA_CLICK: 'cta_click',
  FORM_SUBMIT: 'form_submit',
  PAGE_VIEW: 'page_view'
} as const;

// Type definitions
type ConversionLabel = typeof CONVERSION_LABELS[keyof typeof CONVERSION_LABELS];

interface GtagEvent {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, string | number | boolean>;
}

interface ConversionEvent {
  send_to: string;
  value?: number;
  currency?: string;
  transaction_id?: string;
  custom_parameters?: Record<string, string | number | boolean>;
}

// Check if gtag is available
const isGtagAvailable = (): boolean => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

// Initialize Google Analytics
export const initGA = (): void => {
  if (!GA_MEASUREMENT_ID || !isGtagAvailable()) return;

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_title: document.title,
    page_location: window.location.href,
  });
};

// Track page views
export const trackPageView = (url?: string): void => {
  if (!GA_MEASUREMENT_ID || !isGtagAvailable()) return;

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url || window.location.pathname,
    page_title: document.title,
    page_location: window.location.href,
  });
};

// Track custom events
export const trackEvent = (event: GtagEvent): void => {
  if (!GA_MEASUREMENT_ID || !isGtagAvailable()) return;

  window.gtag('event', event.action, {
    event_category: event.category || '',
    event_label: event.label || '',
    value: event.value || 0,
    ...event.custom_parameters,
  });
};

// Track Google Ads conversions
export const trackConversion = (
  conversionLabel: ConversionLabel,
  conversionData?: Partial<ConversionEvent>
): void => {
  if (!GOOGLE_ADS_CONVERSION_ID || !isGtagAvailable()) return;

  const conversionEvent: ConversionEvent = {
    send_to: `${GOOGLE_ADS_CONVERSION_ID}/${conversionLabel}`,
    value: conversionData?.value || 1,
    currency: conversionData?.currency || 'BRL',
    transaction_id: conversionData?.transaction_id || `conv_${Date.now()}`,
    ...(conversionData?.custom_parameters || {}),
  };

  window.gtag('event', 'conversion', {
    send_to: conversionEvent.send_to,
    value: conversionEvent.value || 0,
    currency: conversionEvent.currency || 'BRL',
    ...conversionEvent.custom_parameters || {}
  });
};

// Specific conversion tracking functions
export const trackWhatsAppConversion = (source?: string): void => {
  trackConversion(CONVERSION_LABELS.WHATSAPP_CLICK, {
    custom_parameters: {
      source: source || 'unknown',
      event_category: 'engagement',
      event_label: 'whatsapp_click',
    },
  });

  // Also track as a regular event
  trackEvent({
    action: 'whatsapp_click',
    category: 'engagement',
    label: source || 'unknown',
  });
};

export const trackEbookConversion = (formData?: Record<string, string | number | boolean>): void => {
  trackConversion(CONVERSION_LABELS.EBOOK_DOWNLOAD, {
    custom_parameters: {
      event_category: 'lead_generation',
      event_label: 'ebook_download',
      lead_type: 'ebook',
      ...formData,
    },
  });

  // Also track as a regular event
  trackEvent({
    action: 'ebook_download',
    category: 'lead_generation',
    label: 'ebook_download',
  });
};

export const trackDiagnosticConversion = (): void => {
  trackConversion(CONVERSION_LABELS.DIAGNOSTIC_CLICK, {
    custom_parameters: {
      event_category: 'engagement',
      event_label: 'diagnostic_click',
      tool_type: 'diagnostic',
    },
  });

  // Also track as a regular event
  trackEvent({
    action: 'diagnostic_click',
    category: 'engagement',
    label: 'diagnostic_tool',
  });
};

export const trackCTAConversion = (ctaType: string, location?: string): void => {
  trackConversion(CONVERSION_LABELS.CTA_CLICK, {
    custom_parameters: {
      event_category: 'engagement',
      event_label: ctaType,
      cta_location: location || 'unknown',
    },
  });

  // Also track as a regular event
  trackEvent({
    action: 'cta_click',
    category: 'engagement',
    label: `${ctaType}_${location || 'unknown'}`,
  });
};

export const trackFormSubmission = (formType: string, formData?: Record<string, string | number | boolean>): void => {
  trackConversion(CONVERSION_LABELS.FORM_SUBMIT, {
    custom_parameters: {
      event_category: 'lead_generation',
      event_label: formType,
      form_type: formType,
      ...formData,
    },
  });

  // Also track as a regular event
  trackEvent({
    action: 'form_submit',
    category: 'lead_generation',
    label: formType,
  });
};

// Enhanced tracking for user engagement
export const trackScrollDepth = (percentage: number): void => {
  if (!isGtagAvailable()) return;

  trackEvent({
    action: 'scroll_depth',
    category: 'engagement',
    label: `${percentage}%`,
    value: percentage,
  });
};

export const trackTimeOnPage = (seconds: number): void => {
  if (!isGtagAvailable()) return;

  trackEvent({
    action: 'time_on_page',
    category: 'engagement',
    value: seconds,
  });
};

export const trackBlogLinkClick = (articleTitle: string, linkUrl: string): void => {
  if (!isGtagAvailable()) return;

  trackEvent({
    action: 'blog_link_click',
    category: 'content',
    label: articleTitle,
    custom_parameters: {
      link_url: linkUrl,
      content_type: 'blog_article',
    },
  });
};

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: Record<string, string | number | boolean>
    ) => void;
  }
}

const gtagUtils = {
  initGA,
  trackPageView,
  trackEvent,
  trackConversion,
  trackWhatsAppConversion,
  trackEbookConversion,
  trackDiagnosticConversion,
  trackCTAConversion,
  trackFormSubmission,
  trackScrollDepth,
  trackTimeOnPage,
  trackBlogLinkClick,
};

export default gtagUtils;