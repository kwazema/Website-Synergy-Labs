'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { animations } from '@/lib/gsap';

export default function ImpactMetrics() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const metrics = useMemo(() => [
    {
      number: 22,
      suffix: '%',
      title: 'Reducción de Costes',
      description: 'Ahorro promedio en gastos operativos',
      icon: '💰',
      color: 'text-green-400'
    },
    {
      number: 240,
      suffix: 'h',
      title: 'Tiempo Liberado',
      description: 'Horas ahorradas por empleado/año',
      icon: '⏰',
      color: 'text-primary-blue'
    },
    {
      number: 347,
      suffix: '%',
      title: 'ROI Promedio',
      description: 'Retorno de inversión en 12 meses',
      icon: '📈',
      color: 'text-accent-purple'
    },
    {
      number: 98,
      suffix: '%',
      title: 'Satisfacción Cliente',
      description: 'Clientes satisfechos con resultados',
      icon: '⭐',
      color: 'text-yellow-400'
    },
    {
      number: 50,
      suffix: '+',
      title: 'PYMEs Transformadas',
      description: 'Empresas que confían en nosotros',
      icon: '🏢',
      color: 'text-blue-400'
    },
    {
      number: 99,
      suffix: '%',
      title: 'Uptime Garantizado',
      description: 'Disponibilidad de nuestras soluciones',
      icon: '🛡️',
      color: 'text-emerald-400'
    }
  ], []);

  const caseStudies = [
    {
      company: 'TechStore Pro',
      industry: 'E-commerce',
      challenge: 'Gestión manual de pedidos y atención al cliente',
      solution: 'Chatbot IA + Automatización Shopify',
      results: [
        { metric: '45%', label: 'Reducción tiempo respuesta' },
        { metric: '€15K', label: 'Ahorro mensual en personal' },
        { metric: '300%', label: 'Aumento conversiones' }
      ]
    },
    {
      company: 'Clínica Dental Madrid',
      industry: 'Salud',
      challenge: 'Citas manuales y seguimiento de pacientes',
      solution: 'CRM automatizado + WhatsApp Business',
      results: [
        { metric: '60%', label: 'Menos no-shows' },
        { metric: '80h', label: 'Tiempo ahorrado/mes' },
        { metric: '95%', label: 'Satisfacción pacientes' }
      ]
    }
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top 60%',
          onEnter: () => {
            if (!hasAnimated) {
              setHasAnimated(true);
              
              // Animate counters
              metrics.forEach((metric, index) => {
                const element = document.querySelector(`[data-counter="${index}"]`);
                if (element) {
                  animations.countUp(element, metric.number, 2 + index * 0.2);
                }
              });

              // Animate metric cards
              gsap.fromTo('.metric-card', {
                y: 50,
                opacity: 0,
                scale: 0.9,
              }, {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "back.out(1.7)",
              });
            }
          }
        });

      }, sectionRef);

      return () => ctx.revert();
    }
  }, [hasAnimated, metrics]);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-black via-dark-gray to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-40 h-40 bg-primary-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-accent-purple/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-max section-padding relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            <span className="text-gradient">Resultados que Hablan</span> por Sí Solos
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Métricas reales de nuestros clientes que demuestran el poder de la automatización inteligente
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="metric-card glass-effect p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-primary-blue/50"
            >
              <div className="text-4xl mb-4">{metric.icon}</div>
              <div className="flex items-baseline justify-center space-x-1 mb-2">
                <span 
                  data-counter={index}
                  className={`text-4xl md:text-5xl font-bold ${metric.color}`}
                >
                  0
                </span>
                <span className={`text-2xl font-bold ${metric.color}`}>
                  {metric.suffix}
                </span>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-white mb-2">
                {metric.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="mb-16">
          <h3 className="text-3xl font-montserrat font-bold text-center mb-12">
            Casos de <span className="text-gradient">Éxito Real</span>
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div 
                key={index}
                className="glass-effect p-8 rounded-2xl border border-gray-700 hover:border-primary-blue/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h4 className="text-xl font-montserrat font-semibold text-white">
                      {study.company}
                    </h4>
                    <p className="text-primary-blue text-sm">{study.industry}</p>
                  </div>
                  <div className="w-12 h-12 bg-primary-blue/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-red-400 text-sm font-medium mb-1">Desafío:</p>
                    <p className="text-gray-300 text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="text-green-400 text-sm font-medium mb-1">Solución:</p>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {study.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="text-center">
                      <div className="text-lg font-bold text-accent-purple">
                        {result.metric}
                      </div>
                      <div className="text-xs text-gray-400">
                        {result.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Proof */}
        <div className="text-center glass-effect p-8 rounded-2xl">
          <div className="flex items-center justify-center space-x-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-lg text-gray-300 mb-2">
            &ldquo;Synergy Labs transformó completamente nuestro negocio. Los resultados superaron todas nuestras expectativas.&rdquo;
          </p>
          <p className="text-primary-blue font-medium">
            María García, CEO de TechStore Pro
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-300 mb-6">
            ¿Quieres ser el próximo caso de éxito?
          </p>
          <button className="btn-primary text-lg px-8 py-4 rounded-xl shadow-2xl hover:shadow-primary-blue/25">
            Calcula tu Potencial de Ahorro
          </button>
        </div>
      </div>
    </section>
  );
}