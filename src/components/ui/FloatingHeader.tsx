'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { gsap } from '@/lib/gsap';

export default function FloatingHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'Casos de Éxito', href: '#casos' },
    { name: 'Sobre Nosotros', href: '#sobre' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faqs' },
    { name: 'Contacto', href: '#contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Animate header entrance
      gsap.fromTo('.floating-header', {
        y: -100,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 1.5,
        ease: 'power2.out',
      });
    }
  }, []);

  return (
    <header className={`floating-header fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
      isScrolled ? 'scale-95' : 'scale-100'
    }`}>
      <nav className={`glass-effect rounded-2xl border border-white/20 px-6 py-3 backdrop-blur-xl transition-all duration-300 ${
        isScrolled ? 'bg-black/40 shadow-2xl' : 'bg-black/20'
      }`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img 
              src="/assets/logos/SYNERGYLabs.png" 
              alt="Synergy Labs" 
              className="h-6 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-300 hover:scale-105 transform"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              href="#contacto"
              className="bg-gradient-to-r from-primary-blue to-accent-purple text-white px-4 py-2 rounded-lg text-sm font-medium hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-primary-blue/25"
            >
              Consulta Gratuita
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
          >
            <svg 
              className={`w-6 h-6 transform transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
        }`}>
          <div className="border-t border-white/20 pt-4 space-y-3">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white/80 hover:text-white text-sm font-medium py-2 hover:bg-white/10 px-3 rounded-lg transition-all duration-300"
              >
                {item.name}
              </Link>
            ))}
            <Link 
              href="#contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block bg-gradient-to-r from-primary-blue to-accent-purple text-white px-4 py-2 rounded-lg text-sm font-medium text-center mt-4"
            >
              Consulta Gratuita
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}