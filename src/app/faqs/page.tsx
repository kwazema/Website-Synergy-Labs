'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { scrollAnimations } from '@/lib/gsap';
import Link from 'next/link';

export default function FAQsPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: 'Automatización',
      question: '¿Cuánto tiempo lleva implementar una automatización?',
      answer: [
        'Proyectos simples como chatbots: 1 semana',
        'Automatizaciones de procesos estándar: 2-3 semanas',
        'Integraciones complejas con múltiples sistemas: 3-4 semanas',
        'Trabajamos en sprints para que veas resultados desde la primera semana',
        'Te mantenemos informado del progreso cada 2-3 días'
      ],
      icon: '⚙️'
    },
    {
      category: 'Costes',
      question: '¿Cuál es la inversión inicial y cómo se justifica?',
      answer: [
        'Inversión típica para PYMEs: €3,000 - €15,000 según el alcance',
        'Ahorro promedio del 22% en costes operativos mensuales',
        'ROI promedio: +300% en el primer año',
        'Recuperación de inversión: 3-6 meses en la mayoría de casos',
        'Financiación disponible en cómodas cuotas mensuales'
      ],
      icon: '💰'
    },
    {
      category: 'Integración',
      question: '¿Se puede integrar con nuestras herramientas actuales?',
      answer: [
        'Más de 500 integraciones nativas disponibles',
        'CRM: HubSpot, Pipedrive, Salesforce, Zoho',
        'E-commerce: Shopify, WooCommerce, PrestaShop',
        'Comunicación: Gmail, Outlook, WhatsApp Business, Slack',
        'Si usas una herramienta específica, lo más probable es que podamos conectarla'
      ],
      icon: '🔗'
    },
    {
      category: 'Soporte',
      question: '¿Qué tipo de soporte ofrecen después de la implementación?',
      answer: [
        'Monitorización 24/7 de todas las automatizaciones',
        'Soporte técnico por WhatsApp/email con respuesta en <4h',
        'Actualizaciones y optimizaciones mensuales incluidas',
        'Mínimo 3 meses de soporte premium incluido en todos los planes',
        'Formación del equipo y documentación completa'
      ],
      icon: '🛡️'
    },
    {
      category: 'Seguridad',
      question: '¿Cómo garantizan la seguridad de nuestros datos?',
      answer: [
        'Cumplimiento completo con GDPR y normativas españolas',
        'Encriptación end-to-end en todas las comunicaciones',
        'Servidores ubicados en la Unión Europea',
        'Auditorías de seguridad trimestrales por terceros',
        'Control total: tus datos nunca se comparten con terceros'
      ],
      icon: '🔐'
    },
    {
      category: 'Escalabilidad',
      question: '¿Las soluciones crecen con nuestro negocio?',
      answer: [
        'Arquitectura cloud que escala automáticamente',
        'Puedes añadir nuevas funcionalidades sin interrumpir las existentes',
        'Precio por uso: pagas según creces',
        'Capacidad para manejar de 10 a 10,000+ interacciones diarias',
        'Migración automática a planes superiores cuando sea necesario'
      ],
      icon: '📈'
    },
    {
      category: 'Resultados',
      question: '¿Cómo miden y garantizan los resultados?',
      answer: [
        'KPIs claros establecidos desde el día 1',
        'Dashboard en tiempo real con métricas de rendimiento',
        'Reportes mensuales con análisis de ROI',
        'Garantía: si no ves mejoras en 30 días, devolvemos tu inversión',
        'Casos de éxito medibles: 22% ahorro costes, 240h/año tiempo liberado'
      ],
      icon: '📊'
    },
    {
      category: 'Diferenciación',
      question: '¿Qué os diferencia de otras agencias de automatización?',
      answer: [
        'Especialistas exclusivamente en PYMEs españolas (2-15 empleados)',
        'Combinamos IA avanzada + marketing + automatización',
        'Garantías reales de resultados con devolución del dinero',
        'Actuamos como extensión de tu equipo, no como proveedores externos',
        'Track record: +50 PYMEs transformadas con 98% satisfacción'
      ],
      icon: '⭐'
    }
  ];

  const toggleFAQ = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
      
      // Animate the opening
      gsap.fromTo(`.faq-content-${index}`, {
        height: 0,
        opacity: 0,
      }, {
        height: 'auto',
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
      });
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (titleRef.current) {
        scrollAnimations.revealOnScroll(titleRef.current);
      }
      scrollAnimations.revealOnScroll('.faq-item', { 
        stagger: 0.1,
        start: 'top 85%' 
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-dark-gray to-black">
      {/* Header with back navigation */}
      <header className="section-padding py-8">
        <div className="container-max">
          <Link 
            href="/"
            className="inline-flex items-center space-x-2 text-primary-blue hover:text-blue-300 transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Volver al inicio</span>
          </Link>
        </div>
      </header>

      <section ref={sectionRef} className="py-20">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h1 
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold mb-6"
            >
              Preguntas <span className="text-gradient">Frecuentes</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Resolvemos las dudas más comunes sobre automatización e IA para PYMEs españolas
            </p>
            <div className="text-sm text-gray-400">
              ¿No encuentras lo que buscas? <Link href="/#contacto" className="text-primary-blue hover:underline">Contáctanos directamente</Link>
            </div>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="faq-item glass-effect rounded-2xl border border-gray-700 hover:border-primary-blue/50 transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-primary-blue/5 transition-colors duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">{faq.icon}</div>
                    <div>
                      <div className="text-primary-blue text-sm font-medium mb-1">
                        {faq.category}
                      </div>
                      <div className="text-white text-lg font-montserrat font-semibold">
                        {faq.question}
                      </div>
                    </div>
                  </div>
                  <div className={`transform transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-6 h-6 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                <div className={`overflow-hidden transition-all duration-500 ${
                  activeIndex === index ? 'max-h-96' : 'max-h-0'
                }`}>
                  <div className={`faq-content-${index} p-6 pt-0`}>
                    <ul className="space-y-3">
                      {faq.answer.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary-blue rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Categories Summary */}
          <div className="mt-16 grid md:grid-cols-4 gap-6">
            {['Automatización', 'Costes', 'Integración', 'Soporte'].map((category, index) => {
              const categoryFaqs = faqs.filter(faq => faq.category === category);
              return (
                <div key={index} className="text-center p-6 glass-effect rounded-xl border border-gray-700">
                  <div className="text-2xl mb-2">
                    {category === 'Automatización' && '⚙️'}
                    {category === 'Costes' && '💰'}
                    {category === 'Integración' && '🔗'}
                    {category === 'Soporte' && '🛡️'}
                  </div>
                  <h3 className="text-lg font-montserrat font-semibold text-white mb-2">
                    {category}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {categoryFaqs.length} pregunta{categoryFaqs.length !== 1 ? 's' : ''}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center glass-effect p-8 rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-montserrat font-semibold text-white mb-4">
              ¿Tienes más preguntas específicas?
            </h3>
            <p className="text-gray-300 mb-6">
              Programa una consulta gratuita de 30 minutos donde resolveremos todas tus dudas personalizadas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contacto" className="btn-primary text-lg px-8 py-4 rounded-xl shadow-2xl hover:shadow-primary-blue/25">
                Consulta Gratuita
              </Link>
              <a 
                href="https://wa.me/34600000000" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-lg px-8 py-4 rounded-xl"
              >
                WhatsApp Directo
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}