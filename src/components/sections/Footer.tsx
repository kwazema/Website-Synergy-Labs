'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    servicios: [
      { name: 'Automatización de Procesos', href: '#servicios' },
      { name: 'Marketing Digital', href: '#servicios' },
      { name: 'Shopify Optimization', href: '#servicios' },
      { name: 'SaaS Development', href: '#servicios' },
    ],
    empresa: [
      { name: 'Sobre Nosotros', href: '#sobre' },
      { name: 'Casos de Éxito', href: '#casos' },
      { name: 'Proceso de Trabajo', href: '#proceso' },
      { name: 'Contacto', href: '#contacto' },
    ],
    recursos: [
      { name: 'Blog', href: '/blog' },
      { name: 'Guías Gratuitas', href: '/recursos' },
      { name: 'Calculadora ROI', href: '/calculadora' },
      { name: 'FAQ', href: '#faq' },
    ],
    legal: [
      { name: 'Política de Privacidad', href: '/privacy' },
      { name: 'Términos de Servicio', href: '/terms' },
      { name: 'Cookies', href: '/cookies' },
      { name: 'Aviso Legal', href: '/legal' },
    ]
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/synergy-labs',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/synergylabs_es',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/@synergylabs',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-dark-gray to-black border-t border-gray-800">
      <div className="container-max section-padding">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-8 py-16">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-montserrat font-bold text-white mb-2">
                Synergy Labs
              </h3>
              <p className="text-primary-blue font-medium mb-4">
                IA + Automatizaciones + Marketing para PYMEs
              </p>
              <p className="text-gray-400 leading-relaxed">
                Transformamos negocios españoles con automatización inteligente. 
                Más de 50 PYMEs confían en nosotros para optimizar sus procesos 
                y acelerar su crecimiento.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300">hello@synergylabs.es</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-300">+34 600 000 000</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">Madrid, España</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-primary-blue rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-montserrat font-semibold text-white mb-6">
              Servicios
            </h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-blue transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-montserrat font-semibold text-white mb-6">
              Empresa
            </h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-blue transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-montserrat font-semibold text-white mb-6">
              Recursos
            </h4>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-blue transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 pt-8 pb-8">
          <div className="glass-effect p-6 rounded-xl">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div>
                <h3 className="text-xl font-montserrat font-semibold text-white mb-2">
                  📧 Newsletter de Automatización
                </h3>
                <p className="text-gray-400">
                  Recibe casos de éxito, guías prácticas y tendencias de IA para PYMEs
                </p>
              </div>
              <div className="flex space-x-3">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="px-4 py-2 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:border-primary-blue focus:outline-none"
                />
                <button className="btn-primary px-6 py-2 text-sm">
                  Suscribirse
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 pb-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Synergy Labs. Todos los derechos reservados.
            </div>
            
            <div className="flex space-x-6 text-sm">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-primary-blue transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          <div className="text-center text-gray-500 text-xs mt-4">
            <p>
              Desarrollado con ❤️ usando Next.js, TypeScript, Tailwind CSS y GSAP |{' '}
              <span className="text-primary-blue">Automatización que inspira</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}