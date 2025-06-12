'use client';

import { useEffect, useRef } from 'react';
import { scrollAnimations } from '@/lib/gsap';

export default function BusinessAnalysis() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const analysisSteps = [
    {
      icon: '🔍',
      title: 'Auditoría Profunda',
      description: 'Analizamos cada proceso de tu negocio para identificar oportunidades ocultas',
      benefits: [
        'Mapeo completo de workflows',
        'Identificación de cuellos de botella',
        'Análisis de tiempo y recursos invertidos'
      ],
      duration: '2-3 días'
    },
    {
      icon: '📊',
      title: 'Análisis de Datos',
      description: 'Estudiamos tus métricas actuales y proyectamos el impacto de la automatización',
      benefits: [
        'ROI proyectado personalizado',
        'Análisis de ahorro potencial',
        'Priorización por impacto'
      ],
      duration: '1-2 días'
    },
    {
      icon: '🎯',
      title: 'Estrategia Personalizada',
      description: 'Diseñamos un plan específico adaptado a tu industria y necesidades',
      benefits: [
        'Roadmap de implementación',
        'Fases priorizadas por ROI',
        'Timeline realista'
      ],
      duration: '2-3 días'
    },
    {
      icon: '💡',
      title: 'Oportunidades Identificadas',
      description: 'Te presentamos todas las oportunidades detectadas con su impacto cuantificado',
      benefits: [
        'Informe detallado de oportunidades',
        'Casos de uso específicos',
        'Estimación de beneficios'
      ],
      duration: '1 día'
    }
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (titleRef.current) {
        scrollAnimations.revealOnScroll(titleRef.current);
      }
      if (gridRef.current) {
        scrollAnimations.revealOnScroll(gridRef.current, { delay: 0.3 });
      }
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-black to-dark-gray relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary-blue/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-accent-purple/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-4xl md:text-5xl font-montserrat font-bold mb-6"
          >
            <span className="text-gradient">Analizamos tu Negocio</span> e Identificamos{' '}
            <span className="text-gradient">tus Oportunidades</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Antes de automatizar, estudiamos a fondo tu empresa para encontrar las oportunidades 
            de mayor impacto y diseñar la estrategia perfecta
          </p>
          <div className="inline-flex items-center space-x-2 glass-effect px-4 py-2 rounded-full">
            <span className="text-green-400 text-sm">✓</span>
            <span className="text-gray-300 text-sm">Análisis 100% gratuito y sin compromiso</span>
          </div>
        </div>

        <div ref={gridRef} className="grid lg:grid-cols-2 gap-8 mb-16">
          {analysisSteps.map((step, index) => (
            <div 
              key={index}
              className="glass-effect p-8 rounded-2xl border border-gray-700 hover:border-primary-blue/50 transition-all duration-500 group hover:scale-105"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-montserrat font-semibold text-white group-hover:text-primary-blue transition-colors duration-300">
                      {step.title}
                    </h3>
                    <div className="text-primary-blue text-sm font-medium">
                      {step.duration}
                    </div>
                  </div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-primary-blue/20 rounded-full flex items-center justify-center">
                    <span className="text-primary-blue font-bold text-lg">
                      {index + 1}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {step.description}
              </p>

              {/* Benefits */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-white mb-3">
                  ✨ Qué incluye:
                </h4>
                {step.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent-purple rounded-full flex-shrink-0"></div>
                    <span className="text-gray-400 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Results Preview */}
        <div className="glass-effect p-8 rounded-2xl border border-gray-700 mb-12">
          <h3 className="text-2xl font-montserrat font-semibold text-white text-center mb-8">
            📋 Resultado del Análisis: <span className="text-gradient">Tu Informe Personalizado</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-black/30 rounded-xl">
              <div className="text-3xl font-bold text-green-400 mb-2">15-25</div>
              <div className="text-gray-300 text-sm">Oportunidades identificadas</div>
            </div>
            <div className="text-center p-6 bg-black/30 rounded-xl">
              <div className="text-3xl font-bold text-primary-blue mb-2">€12K</div>
              <div className="text-gray-300 text-sm">Ahorro anual promedio</div>
            </div>
            <div className="text-center p-6 bg-black/30 rounded-xl">
              <div className="text-3xl font-bold text-accent-purple mb-2">180h</div>
              <div className="text-gray-300 text-sm">Tiempo liberado/mes</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-xl font-montserrat font-semibold text-white mb-4">
            ¿Listo para descubrir el potencial oculto de tu negocio?
          </h3>
          <p className="text-gray-400 mb-6">
            Nuestro análisis es completamente gratuito y te dará una visión clara 
            de cómo la automatización puede transformar tu empresa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-4 rounded-xl shadow-2xl hover:shadow-primary-blue/25">
              Solicitar Análisis Gratuito
            </button>
            <button className="btn-secondary text-lg px-8 py-4 rounded-xl">
              Ver Ejemplo de Informe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}