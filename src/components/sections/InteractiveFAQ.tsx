'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { scrollAnimations } from '@/lib/gsap';

export default function InteractiveFAQ() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: 'Automatización',
      question: '¿Cuánto tiempo lleva implementar una automatización?',
      answer: 'Dependiendo de la complejidad, entre 2-4 semanas. Proyectos simples como chatbots pueden estar listos en 1 semana, mientras que integraciones complejas pueden tomar hasta 3-4 semanas. Siempre trabajamos en sprints para que veas resultados desde la primera semana.',
      icon: '⚙️'
    },
    {
      category: 'Costes',
      question: '¿Cuál es la inversión inicial y cómo se justifica?',
      answer: 'La inversión típica para una PYME está entre €3,000-€15,000 dependiendo del alcance. Con un ahorro promedio del 22% en costes operativos, la mayoría de nuestros clientes recuperan la inversión en 3-6 meses y obtienen ROI +300% en el primer año.',
      icon: '💰'
    },
    {
      category: 'Integración',
      question: '¿Se puede integrar con nuestras herramientas actuales?',
      answer: 'Sí, trabajamos con +500 integraciones nativas. CRM (HubSpot, Pipedrive), Shopify, WooCommerce, Gmail, WhatsApp Business, Zapier, y muchas más. Si usas una herramienta específica, lo más probable es que podamos conectarla.',
      icon: '🔗'
    },
    {
      category: 'Soporte',
      question: '¿Qué tipo de soporte ofrecen después de la implementación?',
      answer: 'Ofrecemos monitorización 24/7, soporte técnico por WhatsApp/email, actualizaciones mensuales, y optimizaciones continuas. Todos nuestros planes incluyen al menos 3 meses de soporte premium incluido.',
      icon: '🛡️'
    },
    {
      category: 'Seguridad',
      question: '¿Cómo garantizan la seguridad de nuestros datos?',
      answer: 'Cumplimos con GDPR, usamos encriptación end-to-end, servidores en EU, y auditorías de seguridad regulares. Tus datos nunca se comparten con terceros y tienes control total sobre la información.',
      icon: '🔐'
    },
    {
      category: 'Escalabilidad',
      question: '¿Las soluciones crecen con nuestro negocio?',
      answer: 'Absolutamente. Diseñamos todas las automatizaciones pensando en el crecimiento. Nuestras soluciones se adaptan automáticamente al volumen, y podemos añadir nuevas funcionalidades sin interrumpir las existentes.',
      icon: '📈'
    },
    {
      category: 'Resultados',
      question: '¿Cómo miden y garantizan los resultados?',
      answer: 'Establecemos KPIs claros desde el inicio: tiempo ahorrado, costes reducidos, conversiones mejoradas. Proporcionamos dashboards en tiempo real y reportes mensuales. Si no ves resultados en 30 días, devolvemos tu inversión.',
      icon: '📊'
    },
    {
      category: 'Diferenciación',
      question: '¿Qué os diferencia de otras agencias de automatización?',
      answer: 'Somos especialistas en PYMEs españolas, combinamos IA avanzada con marketing, ofrecemos garantías reales, y actuamos como extensión de tu equipo. No somos una agencia más, somos partners estratégicos de tu crecimiento.',
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-dark-gray to-black">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-4xl md:text-5xl font-montserrat font-bold mb-6"
          >
            Preguntas <span className="text-gradient">Frecuentes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Resolvemos las dudas más comunes sobre automatización e IA para PYMEs
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
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
                <div className={`faq-content-${index} p-6 pt-0 text-gray-300 leading-relaxed`}>
                  {faq.answer}
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
              <div key={index} className="text-center p-6 glass-effect rounded-xl">
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

        {/* Still have questions? */}
        <div className="mt-16 text-center glass-effect p-8 rounded-2xl">
          <h3 className="text-2xl font-montserrat font-semibold text-white mb-4">
            ¿Tienes más preguntas?
          </h3>
          <p className="text-gray-300 mb-6">
            Programa una consulta gratuita de 30 minutos donde resolveremos todas tus dudas específicas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-4 rounded-xl shadow-2xl hover:shadow-primary-blue/25">
              Consulta Gratuita
            </button>
            <button className="btn-secondary text-lg px-8 py-4 rounded-xl">
              WhatsApp Directo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}