'use client';

import { useState, useEffect, useRef } from 'react';
import { scrollAnimations } from '@/lib/gsap';

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    employees: '',
    challenge: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you would integrate with n8n webhook
      const response = await fetch('/api/webhook-n8n', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          employees: '',
          challenge: '',
          budget: '',
          timeline: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (titleRef.current) {
        scrollAnimations.revealOnScroll(titleRef.current);
      }
      scrollAnimations.revealOnScroll('.contact-card', { 
        stagger: 0.2,
        start: 'top 85%' 
      });
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
            Comienza tu <span className="text-gradient">Transformación Digital</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Agenda tu consulta estratégica gratuita y descubre el potencial de automatización de tu negocio
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="contact-card glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-montserrat font-semibold text-white mb-6">
                ¿Por qué elegirnos?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="text-primary-blue text-xl">✓</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Consulta Estratégica Gratuita</h4>
                    <p className="text-gray-400">30 minutos donde analizamos tu negocio y identificamos oportunidades</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-primary-blue text-xl">✓</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Garantía de Resultados</h4>
                    <p className="text-gray-400">Si no ves mejoras en 30 días, devolvemos tu inversión</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-primary-blue text-xl">✓</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Especialistas en PYMEs</h4>
                    <p className="text-gray-400">Entendemos los desafíos únicos de las empresas españolas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact Options */}
            <div className="contact-card space-y-4">
              <h3 className="text-xl font-montserrat font-semibold text-white mb-4">
                Contacto Directo
              </h3>
              
              <a 
                href="https://wa.me/34600000000" 
                className="flex items-center space-x-4 p-4 glass-effect rounded-xl hover:border-green-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center group-hover:bg-green-500/30 transition-colors duration-300">
                  <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold">WhatsApp Business</div>
                  <div className="text-gray-400 text-sm">Respuesta inmediata</div>
                </div>
              </a>

              <a 
                href="mailto:hello@synergylabs.es" 
                className="flex items-center space-x-4 p-4 glass-effect rounded-xl hover:border-primary-blue/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary-blue/20 rounded-full flex items-center justify-center group-hover:bg-primary-blue/30 transition-colors duration-300">
                  <svg className="w-6 h-6 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold">hello@synergylabs.es</div>
                  <div className="text-gray-400 text-sm">Respuesta en 24h</div>
                </div>
              </a>
            </div>

            {/* Team Section - Expanded */}
            <div className="contact-card space-y-6">
              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="text-2xl font-montserrat font-bold text-white mb-6 text-center">
                  Conoce al <span className="text-gradient">Equipo Fundador</span>
                </h3>
                
                <div className="space-y-8">
                  {/* Andreu */}
                  <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 p-6 bg-black/30 rounded-xl border border-primary-blue/20 hover:border-primary-blue/40 transition-all duration-300">
                    <div className="relative">
                      <img 
                        src="/assets/team/Andreu_kwazema.png" 
                        alt="Andreu Kwazema"
                        className="w-24 h-24 rounded-full border-4 border-primary-blue object-cover shadow-lg"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary-blue rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">👨‍💻</span>
                      </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h4 className="text-xl font-montserrat font-bold text-white mb-2">
                        Andreu Kwazema
                      </h4>
                      <p className="text-primary-blue font-semibold mb-3">
                        Co-Founder & CTO
                      </p>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Desarrollador full-stack especializado en IA y automatización. 
                        Más de 8 años creando soluciones tecnológicas que transforman negocios.
                        Experto en integrations APIs y arquitecturas escalables.
                      </p>
                      <div className="flex items-center justify-center md:justify-start space-x-3 mt-4">
                        <span className="text-xs bg-primary-blue/20 text-primary-blue px-2 py-1 rounded">Python</span>
                        <span className="text-xs bg-primary-blue/20 text-primary-blue px-2 py-1 rounded">AI/ML</span>
                        <span className="text-xs bg-primary-blue/20 text-primary-blue px-2 py-1 rounded">APIs</span>
                      </div>
                    </div>
                  </div>

                  {/* Diana */}
                  <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 p-6 bg-black/30 rounded-xl border border-accent-purple/20 hover:border-accent-purple/40 transition-all duration-300">
                    <div className="relative">
                      <img 
                        src="/assets/team/Diana_Martin.png" 
                        alt="Diana Martin"
                        className="w-24 h-24 rounded-full border-4 border-accent-purple object-cover shadow-lg"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent-purple rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">🎨</span>
                      </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h4 className="text-xl font-montserrat font-bold text-white mb-2">
                        Diana Martin
                      </h4>
                      <p className="text-accent-purple font-semibold mb-3">
                        Co-Founder & Chief Marketing Officer
                      </p>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Artista digital y estratega de marketing con visión creativa única. 
                        Especializada en transformar conceptos técnicos complejos en 
                        comunicación clara que conecta con PYMEs españolas.
                      </p>
                      <div className="flex items-center justify-center md:justify-start space-x-3 mt-4">
                        <span className="text-xs bg-accent-purple/20 text-accent-purple px-2 py-1 rounded">Design</span>
                        <span className="text-xs bg-accent-purple/20 text-accent-purple px-2 py-1 rounded">Marketing</span>
                        <span className="text-xs bg-accent-purple/20 text-accent-purple px-2 py-1 rounded">UX</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Team Stats */}
                <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-black/30 rounded-lg">
                    <div className="text-2xl font-bold text-primary-blue mb-1">8+</div>
                    <div className="text-xs text-gray-400">Años experiencia</div>
                  </div>
                  <div className="p-4 bg-black/30 rounded-lg">
                    <div className="text-2xl font-bold text-accent-purple mb-1">50+</div>
                    <div className="text-xs text-gray-400">PYMEs transformadas</div>
                  </div>
                  <div className="p-4 bg-black/30 rounded-lg">
                    <div className="text-2xl font-bold text-green-400 mb-1">98%</div>
                    <div className="text-xs text-gray-400">Satisfacción cliente</div>
                  </div>
                </div>

                {/* Contact Founders */}
                <div className="mt-6 text-center">
                  <p className="text-gray-400 text-sm mb-4">
                    ¿Quieres hablar directamente con los fundadores?
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button className="text-sm bg-primary-blue/20 hover:bg-primary-blue/30 text-primary-blue px-4 py-2 rounded-lg transition-colors duration-300">
                      📧 Contactar a Andreu
                    </button>
                    <button className="text-sm bg-accent-purple/20 hover:bg-accent-purple/30 text-accent-purple px-4 py-2 rounded-lg transition-colors duration-300">
                      📧 Contactar a Diana
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-card glass-effect p-8 rounded-2xl">
            <h3 className="text-2xl font-montserrat font-semibold text-white mb-6">
              Solicita tu Consulta Gratuita
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:border-primary-blue focus:outline-none transition-colors duration-300"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:border-primary-blue focus:outline-none transition-colors duration-300"
                    placeholder="tu@empresa.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Empresa *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:border-primary-blue focus:outline-none transition-colors duration-300"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:border-primary-blue focus:outline-none transition-colors duration-300"
                    placeholder="+34 600 000 000"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Número de empleados
                  </label>
                  <select
                    name="employees"
                    value={formData.employees}
                    onChange={handleChange}
                    className="w-full p-3 bg-black/30 border border-gray-600 rounded-lg text-white focus:border-primary-blue focus:outline-none transition-colors duration-300"
                  >
                    <option value="">Selecciona...</option>
                    <option value="1-5">1-5 empleados</option>
                    <option value="6-15">6-15 empleados</option>
                    <option value="16-50">16-50 empleados</option>
                    <option value="50+">Más de 50</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Presupuesto estimado
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full p-3 bg-black/30 border border-gray-600 rounded-lg text-white focus:border-primary-blue focus:outline-none transition-colors duration-300"
                  >
                    <option value="">Selecciona...</option>
                    <option value="<5k">Menos de €5,000</option>
                    <option value="5k-15k">€5,000 - €15,000</option>
                    <option value="15k-30k">€15,000 - €30,000</option>
                    <option value="30k+">Más de €30,000</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Principal desafío *
                </label>
                <select
                  name="challenge"
                  value={formData.challenge}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-black/30 border border-gray-600 rounded-lg text-white focus:border-primary-blue focus:outline-none transition-colors duration-300"
                >
                  <option value="">¿Cuál es tu mayor dolor?</option>
                  <option value="tiempo">Perdemos mucho tiempo en tareas manuales</option>
                  <option value="costes">Los costes operativos son muy altos</option>
                  <option value="escalabilidad">No podemos escalar sin contratar más personal</option>
                  <option value="integracion">Nuestras herramientas no se comunican</option>
                  <option value="leads">Necesitamos más leads cualificados</option>
                  <option value="otro">Otro desafío</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Cuéntanos más sobre tu proyecto
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:border-primary-blue focus:outline-none transition-colors duration-300"
                  placeholder="Describe tu situación actual y qué te gustaría automatizar..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary text-lg py-4 rounded-xl shadow-2xl hover:shadow-primary-blue/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : 'Solicitar Consulta Gratuita'}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center">
                  ¡Gracias! Te contactaremos en las próximas 24 horas.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center">
                  Error al enviar. Por favor, inténtalo de nuevo o contáctanos por WhatsApp.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}