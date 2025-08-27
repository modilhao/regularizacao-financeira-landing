'use client';

import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import DiagnosticoSection from '@/components/DiagnosticoSection';
import EbookSection from '@/components/EbookSection';

import SobreEscritorioSection from '@/components/SobreEscritorioSection';
import CTAFinalSection from '@/components/CTAFinalSection';
import { trackPageView } from '@/utils/tracking';

export default function Home() {
  useEffect(() => {
    // Track page view on component mount
    trackPageView();
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Diagnóstico Interativo */}
      <DiagnosticoSection />
      
      {/* Download eBook */}
      <EbookSection />
      

      
      {/* Sobre o Escritório */}
      <SobreEscritorioSection />
      
      {/* CTA Final */}
      <CTAFinalSection />
    </main>
  );
}
