'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

export default function AnimatedWorkflow() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: 'Análisis Profundo',
      description: 'Estudiamos tu negocio y identificamos oportunidades de automatización',
      icon: '🔍',
      duration: '1-2 días',
      details: ['Auditoría de procesos actuales', 'Identificación de puntos de fricción', 'Mapeo de flujos de trabajo']
    },
    {
      id: 2,
      title: 'Diseño de Solución',
      description: 'Creamos un plan personalizado de automatización para tu empresa',
      icon: '🎯',
      duration: '3-5 días',
      details: ['Arquitectura técnica', 'Wireframes de interfaces', 'Plan de implementación']
    },
    {
      id: 3,
      title: 'Desarrollo IA',
      description: 'Construimos las automatizaciones usando IA avanzada y tecnología de vanguardia',
      icon: '🤖',
      duration: '1-3 semanas',
      details: ['Chatbots inteligentes', 'Flujos automatizados', 'Integraciones API']
    },
    {
      id: 4,
      title: 'Integración Seamless',
      description: 'Conectamos todo con tus herramientas existentes sin interrumpir tu negocio',
      icon: '🔗',
      duration: '3-5 días',
      details: ['Conexión con CRM', 'Integración Shopify', 'Sincronización de datos']
    },
    {
      id: 5,
      title: 'Optimización Continua',
      description: 'Monitoreamos y mejoramos constantemente el rendimiento de tus automatizaciones',
      icon: '📊',
      duration: 'Ongoing',
      details: ['Análisis de métricas', 'Ajustes de rendimiento', 'Nuevas funcionalidades']
    }
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const ctx = gsap.context(() => {
        // Animate timeline on scroll
        ScrollTrigger.create({
          trigger: timelineRef.current,
          start: 'top 60%',
          end: 'bottom 40%',
          onUpdate: (self) => {
            const progress = self.progress;
            const stepIndex = Math.floor(progress * steps.length);
            setActiveStep(Math.min(stepIndex, steps.length - 1));
          }
        });

        // Animate steps individually
        gsap.fromTo('.workflow-step', {
          x: -50,
          opacity: 0,
        }, {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 70%',
          }
        });

      }, sectionRef);

      return () => ctx.revert();
    }
  }, [steps.length]);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-dark-gray to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxRTkwRkYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI0Ii8+PC9nPjwvZz48L3N2Zz4=')] repeat"></div>
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            Nuestro <span className="text-gradient">Proceso de Transformación</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            De la idea a la implementación: así convertimos tu negocio en una máquina de eficiencia
          </p>
        </div>

        <div ref={timelineRef} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 w-1 h-full bg-gradient-to-b from-primary-blue via-accent-purple to-primary-blue rounded-full"></div>

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div 
                key={step.id}
                className={`workflow-step flex items-start space-x-8 relative transition-all duration-500 ${
                  activeStep >= index ? 'opacity-100' : 'opacity-50'
                }`}
              >
                {/* Step Icon */}
                <div className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl transition-all duration-500 ${
                  activeStep >= index 
                    ? 'bg-primary-blue shadow-lg shadow-primary-blue/50 animate-pulse-glow' 
                    : 'bg-dark-gray border border-gray-600'
                }`}>
                  {step.icon}
                </div>

                {/* Step Content */}
                <div className={`flex-1 glass-effect p-6 rounded-xl transition-all duration-500 ${
                  activeStep >= index ? 'border-primary-blue/50 bg-opacity-20' : 'border-gray-600 bg-opacity-10'
                }`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-montserrat font-semibold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 text-lg">{step.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-primary-blue font-semibold">{step.duration}</div>
                      <div className="text-xs text-gray-400">duración</div>
                    </div>
                  </div>

                  {/* Step Details */}
                  <div className="grid md:grid-cols-3 gap-3">
                    {step.details.map((detail, detailIndex) => (
                      <div 
                        key={detailIndex}
                        className="bg-black/30 p-3 rounded-lg text-sm text-gray-300"
                      >
                        ✓ {detail}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step Number */}
                <div className={`absolute -left-2 top-6 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ${
                  activeStep >= index 
                    ? 'bg-accent-purple text-white' 
                    : 'bg-gray-600 text-gray-400'
                }`}>
                  {step.id}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 glass-effect rounded-xl">
            <div className="text-3xl font-bold text-primary-blue mb-2">2-4 semanas</div>
            <div className="text-gray-300">Tiempo promedio de implementación</div>
          </div>
          <div className="text-center p-6 glass-effect rounded-xl">
            <div className="text-3xl font-bold text-accent-purple mb-2">100%</div>
            <div className="text-gray-300">Personalización para tu negocio</div>
          </div>
          <div className="text-center p-6 glass-effect rounded-xl">
            <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
            <div className="text-gray-300">Soporte y monitorización</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-300 mb-6">
            ¿Quieres ver este proceso en acción para tu negocio?
          </p>
          <button className="btn-primary text-lg px-8 py-4 rounded-xl shadow-2xl hover:shadow-primary-blue/25">
            Programa tu Consulta Estratégica
          </button>
        </div>
      </div>
    </section>
  );
}