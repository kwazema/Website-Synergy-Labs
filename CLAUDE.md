# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a high-conversion landing page for **Synergy Labs**, a Spanish company specializing in AI + automation + marketing for SMEs. The project aims to generate qualified leads and educate about business automation.

### Business Context
- **Target**: Spanish SMEs (2-15 employees) without large technical teams
- **Value Proposition**: "AI + Automations + Marketing for SMEs"
- **Key Metrics**: 22% cost savings, 240h/year freed per employee
- **Services**: Process automation, digital marketing, Shopify optimization, SaaS development

## Tech Stack

```json
{
  "framework": "Next.js 14.2.3",
  "language": "TypeScript", 
  "styling": "Tailwind CSS 3.4.4",
  "animations": "GSAP 3.12.5",
  "scrolling": "Lenis 1.0.11",
  "runtime": "Node 20.11",
  "deployment": "Coolify"
}
```

## Development Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Linting
npm run lint

# Type checking
npm run type-check
```

## Design System

### Colors
```css
:root {
  --primary-blue: #1E90FF;     /* DodgerBlue */
  --black: #0B0B0E;
  --dark-gray: #1A1A1E;
  --accent-purple: #A259FF;
  --white: #FFFFFF;
}
```

### Typography
- **Headers**: Montserrat (400, 500, 600, 700)
- **Body**: Inter (400, 500, 600)

## Architecture & Structure

### Required File Structure
```
synergy-labs-landing/
├── public/
│   ├── assets/
│   │   ├── logos/          # Company logos (vertical/horizontal)
│   │   ├── team/           # Photos of Andreu & Diana
│   │   └── icons/          # Service iconography
├── src/
│   ├── components/
│   │   ├── ui/             # Base components
│   │   ├── sections/       # Landing page sections
│   │   └── animations/     # GSAP animation components
│   ├── lib/
│   │   ├── gsap.ts         # GSAP configuration
│   │   └── utils.ts        # Utilities
│   └── styles/
│       └── globals.css     # Tailwind + custom CSS variables
```

### Key Landing Page Sections (Priority Order)
1. **Enhanced Hero Section** - Headline, metrics, trust signals, CTA
2. **Problem/Benefits Section** - Pain points vs quantified benefits
3. **Animated Workflow** - GSAP timeline showing automation process
4. **Impact Metrics** - Animated counters for cost savings and time freed
5. **Detailed Services** - 2x2 grid with hover effects
6. **Interactive FAQ** - Accordion with GSAP animations
7. **Final CTA + Contact** - Multiple contact options + integrated form
8. **Legal Footer** - Privacy policy, terms of service, contact info

## Animation Implementation (GSAP + Lenis)

### Required Animations
1. **Smooth scrolling**: Lenis throughout the page
2. **Hero entrance**: Staggered text and element animations
3. **Animated workflow**: Interactive automation process timeline
4. **Metrics counters**: Number animation on scroll
5. **Service cards hover**: Premium hover effects
6. **FAQ accordion**: Smooth expand/collapse

### GSAP Configuration
```typescript
// lib/gsap.ts - Register required plugins
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
```

## Content Guidelines

### Tone of Voice
- **Professional but approachable**
- **Technical without being intimidating**
- **Results-oriented with concrete outcomes**
- **Spanish SME-focused language**
- Focus on solving client pain points

### Key Messaging
- Headline pattern: "Transformamos tu [PROBLEM] con IA + Automatizaciones"
- Quantified benefits: Cost savings and time liberation
- Trust signals: Client testimonials and guarantees
- Low-commitment CTAs: "Consulta Estratégica GRATUITA"

## Integrations

### Contact Form Integration
```typescript
// Form submission to n8n webhook
const submitForm = async (data: FormData) => {
  await fetch('/api/webhook-n8n', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
};
```

### Analytics Ready
- Google Analytics 4 integration
- Meta Pixel (optional)
- CTA event tracking

## Performance Requirements

- **Core Web Vitals** optimized
- **Mobile-first** responsive design
- **Load time** < 3 seconds
- **60fps animations** with GSAP
- **Accessibility** WCAG compliance

## Business Context for Development

### Founders
- **Andreu Kwazema**: Programmer
- **Diana Martin**: Artist + Marketing

### Reference Designs Analyzed
- **Primary**: landingpage-six-sage.vercel.app (powerful hero, metrics)
- **Basedash**: Dashboard UI inspiration for automation visualization
- **Visionarius**: Service cards with premium hover effects
- **Lambda Automations**: Quantified benefits and simplified process

## Deployment Notes

- **Platform**: Coolify
- **Environment**: Node 20.11
- Ensure all animations work in production build
- Test form integration with n8n webhook
- Verify mobile performance and animations