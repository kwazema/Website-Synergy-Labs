'use client';

import { useEffect, useRef } from 'react';
import { animations } from '@/lib/gsap';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLParagraphElement>(null);
  const guaranteeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Hero entrance animations with stagger
      const elements = [
        headlineRef.current,
        subtitleRef.current,
        trustRef.current,
        ctaRef.current,
        guaranteeRef.current,
      ].filter(Boolean);

      if (elements.length > 0) {
        animations.staggerFadeInUp(elements as Element[], 0.5);
      }
    }
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-dark-gray to-black overflow-hidden"
    >
      {/* Background animated elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-blue rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent-purple rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary-blue rounded-full blur-lg animate-pulse-glow"></div>
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h1 
              ref={headlineRef}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-montserrat font-bold leading-tight opacity-0"
            >
              Transformamos tu{' '}
              <span className="text-gradient">Negocio</span>{' '}
              con{' '}
              <span className="text-gradient">IA + Automatizaciones</span>
            </h1>

            <p 
              ref={subtitleRef}
              className="text-xl md:text-2xl text-gray-300 leading-relaxed opacity-0"
            >
              Ahorra <span className="text-primary-blue font-semibold">22% de costes</span> y 
              libera <span className="text-primary-blue font-semibold">240h/año</span> por empleado
            </p>

            <p 
              ref={trustRef}
              className="text-lg text-gray-400 opacity-0"
            >
              ✨ Confiado por <span className="text-accent-purple font-medium">+50 PYMEs españolas</span> en crecimiento
            </p>

            <div 
              ref={ctaRef}
              className="flex flex-col sm:flex-row gap-4 opacity-0"
            >
              <button className="btn-primary text-lg px-8 py-4 rounded-xl shadow-2xl hover:shadow-primary-blue/25">
                Consulta Estratégica GRATUITA
              </button>
              <button className="btn-secondary text-lg px-8 py-4 rounded-xl">
                Ver Casos de Éxito
              </button>
            </div>

            <div 
              ref={guaranteeRef}
              className="glass-effect p-4 rounded-lg border-l-4 border-primary-blue opacity-0"
            >
              <p className="text-sm text-gray-300">
                <span className="text-primary-blue font-semibold">🛡️ Garantía:</span> 
                Resultados medibles en 30 días o te devolvemos tu dinero
              </p>
            </div>
          </div>

          {/* Hero Visual - Dashboard Preview */}
          <div className="relative">
            <div className="glass-effect p-6 rounded-2xl animate-float">
              <div className="bg-dark-gray rounded-xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-montserrat font-semibold text-white">Dashboard de Automatización</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black p-4 rounded-lg">
                    <div className="text-2xl font-bold text-primary-blue">22%</div>
                    <div className="text-sm text-gray-400">Ahorro Costes</div>
                  </div>
                  <div className="bg-black p-4 rounded-lg">
                    <div className="text-2xl font-bold text-accent-purple">240h</div>
                    <div className="text-sm text-gray-400">Tiempo Liberado</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-black p-3 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm">Chatbot Atención al Cliente</span>
                    </div>
                    <span className="text-xs text-green-500">ACTIVO</span>
                  </div>
                  
                  <div className="flex items-center justify-between bg-black p-3 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm">Automatización Email Marketing</span>
                    </div>
                    <span className="text-xs text-green-500">ACTIVO</span>
                  </div>
                  
                  <div className="flex items-center justify-between bg-black p-3 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary-blue rounded-full animate-pulse"></div>
                      <span className="text-sm">Integración CRM + Shopify</span>
                    </div>
                    <span className="text-xs text-primary-blue">PROCESANDO</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating metrics */}
            <div className="absolute -top-4 -right-4 glass-effect p-3 rounded-lg animate-bounce-slow">
              <div className="text-green-500 font-bold">+347%</div>
              <div className="text-xs text-gray-400">ROI Medio</div>
            </div>

            <div className="absolute -bottom-4 -left-4 glass-effect p-3 rounded-lg animate-bounce-slow" style={{ animationDelay: '1s' }}>
              <div className="text-accent-purple font-bold">98%</div>
              <div className="text-xs text-gray-400">Satisfacción</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <span className="text-sm text-gray-400">Descubre más</span>
          <svg className="w-6 h-6 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}