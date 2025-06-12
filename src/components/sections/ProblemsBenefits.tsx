'use client';

import { useEffect, useRef } from 'react';
import { scrollAnimations } from '@/lib/gsap';

export default function ProblemsBenefits() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const problemsRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (titleRef.current) {
        scrollAnimations.revealOnScroll(titleRef.current);
      }
      if (problemsRef.current) {
        scrollAnimations.revealOnScroll(problemsRef.current, { delay: 0.2 });
      }
      if (benefitsRef.current) {
        scrollAnimations.revealOnScroll(benefitsRef.current, { delay: 0.4 });
      }
    }
  }, []);

  const problems = [
    {
      icon: '⏰',
      title: 'Tiempo perdido en tareas repetitivas',
      description: 'Tus empleados dedican horas a procesos manuales que podrían automatizarse'
    },
    {
      icon: '💸',
      title: 'Costes operativos elevados',
      description: 'Sin automatización, los gastos en personal y recursos se disparan'
    },
    {
      icon: '📊',
      title: 'Falta de escalabilidad',
      description: 'Crecer significa contratar más personal para las mismas tareas básicas'
    },
    {
      icon: '🔄',
      title: 'Procesos desconectados',
      description: 'Herramientas que no se comunican generan errores y duplicación de trabajo'
    }
  ];

  const benefits = [
    {
      icon: '🚀',
      title: 'Automatización inteligente',
      description: 'IA que entiende tu negocio y automatiza procesos complejos',
      metric: '240h/año'
    },
    {
      icon: '💰',
      title: 'Reducción de costes',
      description: 'Ahorro directo en operaciones y optimización de recursos',
      metric: '22% menos'
    },
    {
      icon: '📈',
      title: 'Escalabilidad sin límites',
      description: 'Crece sin aumentar proporcionalmente tu equipo técnico',
      metric: '+300% ROI'
    },
    {
      icon: '🔗',
      title: 'Integración total',
      description: 'Conectamos todas tus herramientas en un flujo seamless',
      metric: '98% uptime'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-black to-dark-gray">
      <div className="container-max section-padding">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl font-montserrat font-bold text-center mb-16"
        >
          De <span className="text-red-500">Problemas Costosos</span> a{' '}
          <span className="text-gradient">Soluciones Rentables</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Problems Side */}
          <div ref={problemsRef} className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-montserrat font-semibold text-red-400 mb-4">
                ❌ ¿Te suena familiar?
              </h3>
              <p className="text-gray-400 text-lg">
                Estos son los puntos de dolor que sufren las PYMEs sin automatización
              </p>
            </div>

            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div 
                  key={index}
                  className="bg-red-900/20 border border-red-500/30 p-6 rounded-xl hover:border-red-400/50 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{problem.icon}</div>
                    <div>
                      <h4 className="text-lg font-montserrat font-semibold text-red-300 mb-2">
                        {problem.title}
                      </h4>
                      <p className="text-gray-400">{problem.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Side */}
          <div ref={benefitsRef} className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-montserrat font-semibold text-green-400 mb-4">
                ✅ Nuestra solución
              </h3>
              <p className="text-gray-400 text-lg">
                Transformamos cada problema en una ventaja competitiva
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="glass-effect p-6 rounded-xl border border-primary-blue/30 hover:border-primary-blue/50 transition-all duration-300 group hover:scale-105"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="text-3xl">{benefit.icon}</div>
                      <div>
                        <h4 className="text-lg font-montserrat font-semibold text-primary-blue mb-2">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-300">{benefit.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-accent-purple">
                        {benefit.metric}
                      </div>
                      <div className="text-xs text-gray-400">beneficio</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Transformation Arrow */}
        <div className="flex justify-center my-12">
          <div className="flex items-center space-x-4 glass-effect px-6 py-3 rounded-full">
            <span className="text-red-400 font-semibold">Problema</span>
            <svg className="w-8 h-8 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <span className="text-green-400 font-semibold">Solución</span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-300 mb-6">
            ¿Listo para transformar tu negocio?
          </p>
          <button className="btn-primary text-lg px-8 py-4 rounded-xl shadow-2xl hover:shadow-primary-blue/25">
            Descubre tu Potencial de Automatización
          </button>
        </div>
      </div>
    </section>
  );
}