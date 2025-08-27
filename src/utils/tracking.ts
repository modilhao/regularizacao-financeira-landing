// Google Analytics and conversion tracking utilities
import {
  trackPageView as gtagTrackPageView,
  trackEvent as gtagTrackEvent,
  trackWhatsAppConversion,
  trackEbookConversion,
  trackDiagnosticConversion,
  trackCTAConversion,
  trackFormSubmission,
  trackScrollDepth as gtagTrackScrollDepth,
  trackTimeOnPage as gtagTrackTimeOnPage,
  trackBlogLinkClick as gtagTrackBlogLinkClick,
} from '@/lib/gtag';

// Re-export main tracking functions
export const trackPageView = gtagTrackPageView;
export const trackEvent = gtagTrackEvent;

// Type definitions for consistency (used by gtag utilities)

// Specific tracking functions using gtag utilities
export const trackHeroCTAClick = () => {
  trackCTAConversion('hero_agendamento', 'hero');
};

export const trackDiagnosticoClick = () => {
  trackDiagnosticConversion();
};

export const trackEbookDownload = (email: string) => {
  trackEbookConversion({ email });
};

export const trackBlogLinkClick = (articleTitle: string, linkUrl: string) => {
  gtagTrackBlogLinkClick(articleTitle, linkUrl);
};

export const trackWhatsAppClick = (source?: string) => {
  trackWhatsAppConversion(source);
};

export const trackCTAClick = (ctaType: string, location?: string) => {
  trackCTAConversion(ctaType, location);
};

export const trackScrollDepth = (percentage: number) => {
  gtagTrackScrollDepth(percentage);
};

export const trackTimeOnPage = (seconds: number) => {
  gtagTrackTimeOnPage(seconds);
};

// Legacy compatibility exports
export { trackFormSubmission };

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: Record<string, string | number | boolean>
    ) => void;
  }
}