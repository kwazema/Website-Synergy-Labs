'use client';

import { useEffect, useRef } from 'react';
import { scrollAnimations } from '@/lib/gsap';

export default function ServicesGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: '🤖',
      title: 'Automatización de Procesos',
      description: 'Chatbots inteligentes, flujos automatizados e integraciones nativas que eliminan el trabajo manual.',
      features: ['Chatbots con IA avanzada', 'Flujos de trabajo inteligentes', 'Integraciones API nativas'],
      benefit: 'Ahorra hasta 240h/año por empleado',
      color: 'from-primary-blue to-blue-600',
      hoverColor: 'hover:border-primary-blue/50'
    },
    {
      icon: '📈',
      title: 'Marketing Digital',
      description: 'Estrategias de captación y nutrición de leads automatizadas que escalan tus ventas sin esfuerzo.',
      features: ['Captación automatizada de leads', 'Email marketing inteligente', 'Nutrición personalizada'],
      benefit: 'Incrementa conversiones +300%',
      color: 'from-accent-purple to-purple-600',
      hoverColor: 'hover:border-accent-purple/50'
    },
    {
      icon: '🛒',
      title: 'Shopify Optimization',
      description: 'Optimización completa de e-commerce con automatizaciones que maximizan tus ventas online.',
      features: ['Automatización de inventario', 'Checkout optimizado', 'Upselling inteligente'],
      benefit: 'Reduce abandonos 45%',
      color: 'from-green-500 to-emerald-600',
      hoverColor: 'hover:border-green-500/50'
    },
    {
      icon: '⚙️',
      title: 'SaaS Development',
      description: 'Soluciones software a medida que se adaptan perfectamente a las necesidades específicas de tu negocio.',
      features: ['Desarrollo personalizado', 'Escalabilidad garantizada', 'Mantenimiento incluido'],
      benefit: 'ROI +400% en 12 meses',
      color: 'from-orange-500 to-red-600',
      hoverColor: 'hover:border-orange-500/50'
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-black via-dark-gray to-black">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-4xl md:text-5xl font-montserrat font-bold mb-6"
          >
            Nuestros <span className="text-gradient">Servicios Especializados</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Soluciones integrales de IA y automatización diseñadas específicamente para PYMEs españolas
          </p>
        </div>

        <div ref={gridRef} className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group relative glass-effect p-8 rounded-2xl border border-gray-700 ${service.hoverColor} transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-montserrat font-semibold text-white group-hover:text-primary-blue transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-6 h-6 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary-blue rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Benefit */}
                <div className="flex items-center justify-between p-4 bg-black/30 rounded-lg">
                  <span className="text-green-400 font-semibold text-sm">
                    💡 {service.benefit}
                  </span>
                  <button className="text-primary-blue text-sm font-medium hover:underline transition-all duration-300">
                    Ver casos de uso →
                  </button>
                </div>
              </div>

              {/* Animated Elements */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="w-20 h-20 bg-primary-blue/10 rounded-full blur-xl animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Integration */}
        <div className="mt-16 text-center">
          <div className="glass-effect p-8 rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-montserrat font-semibold text-white mb-4">
              ¿Por qué elegir <span className="text-gradient">Synergy Labs</span>?
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Implementación Rápida</h4>
                <p className="text-gray-400 text-sm">De 2-4 semanas desde el análisis hasta la producción</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">100% Personalizado</h4>
                <p className="text-gray-400 text-sm">Soluciones diseñadas específicamente para tu negocio</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Soporte 24/7</h4>
                <p className="text-gray-400 text-sm">Monitorización continua y soporte técnico garantizado</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-300 mb-6">
            ¿Qué servicio necesita tu negocio?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-4 rounded-xl shadow-2xl hover:shadow-primary-blue/25">
              Consulta Estratégica Gratuita
            </button>
            <button className="btn-secondary text-lg px-8 py-4 rounded-xl">
              Ver Portfolio Completo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}