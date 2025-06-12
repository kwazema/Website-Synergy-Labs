'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import { scrollAnimations } from '@/lib/gsap';

export default function ProblemsBenefits() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const problemsRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const [loadingProgress, setLoadingProgress] = useState<{[key: number]: number}>({});
  const [showDetails, setShowDetails] = useState<{[key: number]: boolean}>({});

  const benefits = useMemo(() => [
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
  ], []);

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

    // Simular "procesamiento" de soluciones con barras de carga
    const timer = setTimeout(() => {
      benefits.forEach((_, index) => {
        setTimeout(() => {
          let progress = 0;
          const interval = setInterval(() => {
            progress += Math.random() * 15 + 5; // Velocidad variable más realista
            if (progress >= 100) {
              progress = 100;
              clearInterval(interval);
              setTimeout(() => {
                setShowDetails(prev => ({ ...prev, [index]: true }));
              }, 300);
            }
            setLoadingProgress(prev => ({ ...prev, [index]: Math.min(progress, 100) }));
          }, 100);
        }, index * 800); // Escalonar las barras de carga
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [benefits]);

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
                  className="bg-red-900/20 border border-red-500/30 p-6 rounded-xl hover:border-red-400/50 transition-all duration-300 group hover:scale-105 hover:bg-red-900/30 cursor-pointer"
                  onClick={() => {/* Maybe add problem details modal */}}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl group-hover:animate-bounce">{problem.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-lg font-montserrat font-semibold text-red-300 mb-2 group-hover:text-red-200 transition-colors duration-300">
                        {problem.title}
                      </h4>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{problem.description}</p>
                    </div>
                    <div className="text-red-400">
                      <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Problem indicator - always visible on mobile */}
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-red-400 text-sm">
                      <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                      <span className="font-medium">Problema detectado</span>
                    </div>
                    <div className="text-xs text-red-300 bg-red-900/30 px-2 py-1 rounded">
                      CRÍTICO
                    </div>
                  </div>

                  {/* Cost indicator */}
                  <div className="mt-3 w-full bg-gray-700 rounded-full h-1">
                    <div className="bg-gradient-to-r from-red-500 to-red-400 h-1 rounded-full" style={{ width: `${(index + 1) * 20 + 40}%` }}></div>
                  </div>
                  <div className="mt-1 text-xs text-gray-500 text-right">
                    Impacto: €{((index + 1) * 500 + 1000).toLocaleString()}/año perdidos
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
              {benefits.map((benefit, index) => {
                const progress = loadingProgress[index] || 0;
                const isComplete = showDetails[index];
                const isLoading = progress > 0 && progress < 100;
                
                return (
                  <div 
                    key={index}
                    className={`glass-effect p-6 rounded-xl border transition-all duration-500 cursor-pointer ${
                      isComplete 
                        ? 'border-green-500/50 bg-green-500/5' 
                        : isLoading 
                          ? 'border-primary-blue/50 bg-primary-blue/5' 
                          : 'border-gray-600 hover:border-primary-blue/50'
                    } hover:scale-105 hover:shadow-lg`}
                    onClick={() => setShowDetails(prev => ({ ...prev, [index]: !prev[index] }))}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className={`text-3xl transition-all duration-300 ${
                          isComplete ? 'animate-bounce' : isLoading ? 'animate-pulse' : ''
                        }`}>
                          {isComplete ? '✅' : isLoading ? '⚙️' : benefit.icon}
                        </div>
                        <div>
                          <h4 className={`text-lg font-montserrat font-semibold mb-2 transition-colors duration-300 ${
                            isComplete ? 'text-green-400' : 'text-primary-blue'
                          }`}>
                            {benefit.title}
                          </h4>
                          <p className="text-gray-300">{benefit.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-xl font-bold transition-all duration-300 ${
                          isComplete ? 'text-green-400 scale-110' : 'text-accent-purple'
                        }`}>
                          {benefit.metric}
                        </div>
                        <div className="text-xs text-gray-400">beneficio</div>
                      </div>
                    </div>

                    {/* Barra de progreso de "procesamiento" */}
                    {(isLoading || isComplete) && (
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-gray-400">
                            {isLoading ? 'Procesando solución...' : 'Solución implementada'}
                          </span>
                          <span className="text-xs font-semibold text-primary-blue">
                            {Math.round(progress)}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                          <div 
                            className={`h-2 transition-all duration-300 rounded-full ${
                              isComplete 
                                ? 'bg-gradient-to-r from-green-400 to-green-500' 
                                : 'bg-gradient-to-r from-primary-blue to-accent-purple'
                            }`}
                            style={{ width: `${progress}%` }}
                          >
                            {isLoading && (
                              <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Detalles expandibles */}
                    <div className={`overflow-hidden transition-all duration-500 ${
                      isComplete ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="pt-4 border-t border-green-500/20">
                        <div className="flex items-center space-x-2 text-green-400 text-sm mb-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="font-semibold">Solución automatizada activa</span>
                        </div>
                        <div className="grid grid-cols-2 gap-3 text-xs">
                          <div className="bg-black/30 p-2 rounded">
                            <div className="text-green-400 font-semibold">Tiempo ahorrado</div>
                            <div className="text-gray-300">2-4h diarias</div>
                          </div>
                          <div className="bg-black/30 p-2 rounded">
                            <div className="text-green-400 font-semibold">ROI proyectado</div>
                            <div className="text-gray-300">300-500%</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Indicador móvil */}
                    <div className="mt-3 flex items-center justify-center md:hidden">
                      <div className="text-xs text-gray-500 flex items-center space-x-1">
                        <span>Toca para {isComplete ? 'ocultar' : 'ver'} detalles</span>
                        <svg className={`w-3 h-3 transform transition-transform duration-300 ${isComplete ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Transformation Arrow */}
        <div className="flex justify-center my-12">
          <div className="flex items-center space-x-6 glass-effect px-8 py-4 rounded-full border border-primary-blue/30 hover:border-primary-blue/60 hover:shadow-lg hover:shadow-primary-blue/25 transition-all duration-300 group">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">😤</span>
              <span className="text-red-400 font-semibold">Problema</span>
            </div>
            <div className="relative">
              <svg className="w-8 h-8 text-primary-blue group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <div className="absolute inset-0 bg-primary-blue/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🚀</span>
              <span className="text-green-400 font-semibold">Solución</span>
            </div>
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