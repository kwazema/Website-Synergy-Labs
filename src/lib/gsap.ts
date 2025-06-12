import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

// Global GSAP configuration
gsap.config({
  force3D: true,
  nullTargetWarn: false,
});

// Animation presets
export const animations = {
  // Fade in from bottom
  fadeInUp: (element: string | Element, delay = 0) => {
    return gsap.fromTo(element, {
      y: 60,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      delay,
      ease: "power2.out",
    });
  },

  // Stagger animation for multiple elements
  staggerFadeInUp: (elements: string | Element[], delay = 0) => {
    return gsap.fromTo(elements, {
      y: 60,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      delay,
      stagger: 0.2,
      ease: "power2.out",
    });
  },

  // Scale in animation
  scaleIn: (element: string | Element, delay = 0) => {
    return gsap.fromTo(element, {
      scale: 0.8,
      opacity: 0,
    }, {
      scale: 1,
      opacity: 1,
      duration: 0.6,
      delay,
      ease: "back.out(1.7)",
    });
  },

  // Counter animation
  countUp: (element: string | Element, endValue: number, duration = 2) => {
    const obj = { count: 0 };
    return gsap.to(obj, {
      count: endValue,
      duration,
      ease: "power2.out",
      onUpdate: () => {
        if (typeof element === 'string') {
          const el = document.querySelector(element);
          if (el) el.textContent = Math.round(obj.count).toString();
        } else {
          element.textContent = Math.round(obj.count).toString();
        }
      }
    });
  },

  // Typing animation
  typeWriter: (element: string | Element, text: string, duration = 2) => {
    return gsap.to(element, {
      duration,
      text: text,
      ease: "none",
    });
  },
};

// Scroll-triggered animations
export const scrollAnimations = {
  // Reveal on scroll
  revealOnScroll: (element: string | Element, options = {}) => {
    return gsap.fromTo(element, {
      y: 100,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        ...options,
      },
    });
  },

  // Parallax effect
  parallax: (element: string | Element, speed = -0.5) => {
    return gsap.to(element, {
      yPercent: speed * 100,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  },
};

export { gsap, ScrollTrigger };