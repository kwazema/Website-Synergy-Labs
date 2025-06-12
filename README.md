# Synergy Labs - Landing Page

Una landing page de alta conversión para **Synergy Labs**, empresa especializada en IA + automatizaciones + marketing para PYMEs españolas.

## 🚀 Características Principales

### 🎨 Diseño Premium
- **Diseño moderno y profesional** con gradientes y efectos glass
- **Responsive design** optimizado para todos los dispositivos
- **Animaciones fluidas** con GSAP y scroll suave con Lenis
- **Paleta de colores corporativa** (Azul DodgerBlue, Púrpura Accent, Negro/Gris)

### 📱 Secciones Implementadas
1. **Hero Section** - Propuesta de valor potente con métricas y CTA
2. **Problemas/Beneficios** - Contraste visual problema vs solución
3. **Flujo Animado** - Timeline interactivo del proceso de automatización
4. **Métricas de Impacto** - Contadores animados y casos de éxito reales
5. **Grid de Servicios** - 4 servicios principales con hover effects
6. **FAQ Interactiva** - Acordeón animado con categorías
7. **Sección de Contacto** - Formulario integrado con n8n + contacto directo
8. **Footer Completo** - Enlaces legales, newsletter, redes sociales

### ⚡ Performance y SEO
- **Core Web Vitals optimizados**
- **SEO completo** con meta tags, Open Graph, Twitter Cards
- **Build optimizado** - Primera carga: 149 kB
- **Tipado completo** con TypeScript
- **Accesibilidad** básica implementada

## 🛠️ Stack Tecnológico

```json
{
  "framework": "Next.js 14.2.3",
  "language": "TypeScript",
  "styling": "Tailwind CSS 3.4.4",
  "animations": "GSAP 3.12.5",
  "scrolling": "Lenis 1.1.0",
  "fonts": "Inter + Montserrat (Google Fonts)"
}
```

## 📦 Instalación

1. **Clona el repositorio**
   ```bash
   git clone <repository-url>
   cd Website-Synergy-Labs
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Configura variables de entorno** (opcional)
   ```bash
   cp .env.example .env.local
   # Edita .env.local con tu webhook de n8n
   N8N_WEBHOOK_URL=https://tu-instancia-n8n.com/webhook/contact-form
   ```

4. **Ejecuta en desarrollo**
   ```bash
   npm run dev
   ```

5. **Construye para producción**
   ```bash
   npm run build
   npm start
   ```

## 🚀 Comandos Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo en http://localhost:3000

# Producción
npm run build        # Construir para producción
npm start           # Servidor de producción

# Calidad de código
npm run lint        # ESLint
npm run type-check  # Verificación de tipos TypeScript
```

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── api/webhook-n8n/     # API route para formulario
│   ├── layout.tsx           # Layout principal con fonts y SEO
│   └── page.tsx            # Página principal
├── components/
│   ├── animations/
│   │   └── SmoothScroll.tsx # Configuración Lenis
│   ├── sections/           # Todas las secciones de la landing
│   │   ├── Hero.tsx
│   │   ├── ProblemsBenefits.tsx
│   │   ├── AnimatedWorkflow.tsx
│   │   ├── ImpactMetrics.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── InteractiveFAQ.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── ui/                 # Componentes reutilizables (futuro)
├── lib/
│   ├── gsap.ts            # Configuración y presets GSAP
│   └── utils.ts           # Utilidades generales
└── styles/
    └── globals.css        # Estilos globales + Tailwind
```

## 🎨 Sistema de Diseño

### Colores
```css
--primary-blue: #1E90FF     /* DodgerBlue */
--black: #0B0B0E
--dark-gray: #1A1A1E
--accent-purple: #A259FF
--white: #FFFFFF
```

### Tipografía
- **Headers**: Montserrat (400, 500, 600, 700)
- **Body**: Inter (400, 500, 600)

### Componentes CSS
```css
.btn-primary        # Botón principal azul
.btn-secondary      # Botón secundario transparente
.glass-effect       # Efecto cristal con backdrop-filter
.text-gradient      # Gradiente azul-púrpura
.container-max      # Contenedor máximo centrado
.section-padding    # Padding responsivo de secciones
```

## 🔧 Integraciones

### Formulario de Contacto
- **Endpoint**: `/api/webhook-n8n`
- **Validación**: Campos requeridos + tipos
- **Datos enviados**: Información del formulario + metadatos
- **Estados**: Loading, success, error

### Animaciones GSAP
- **Entrada del hero** con stagger
- **Scroll-triggered animations** para todas las secciones
- **Contadores animados** en métricas
- **Timeline interactivo** en workflow
- **Hover effects** en servicios

## 🌐 Deploy

### Coolify (Recomendado)
1. Conecta tu repositorio Git
2. Configura las variables de entorno
3. Deploy automático en cada push

### Otras plataformas
- **Vercel**: `vercel --prod`
- **Netlify**: Conectar repositorio
- **Docker**: Dockerfile incluido

## 📊 Métricas de Negocio

### Conversión Optimizada
- **Multiple CTAs** estratégicamente posicionados
- **Formulario de bajo compromiso** (consulta gratuita)
- **Trust signals** (clientes, garantías, testimonios)
- **Flujo lógico** problema → solución → resultados → acción

### Métricas Clave Destacadas
- **22% reducción de costes**
- **240h/año tiempo liberado** 
- **+347% ROI promedio**
- **98% satisfacción cliente**
- **+50 PYMEs** transformadas

## 🔒 Seguridad y Legal

### Formulario
- **Validación client-side** y server-side
- **Sanitización** de datos
- **Rate limiting** (implementar en producción)

### GDPR y Legal
- **Política de privacidad** enlazada
- **Términos de servicio** enlazados
- **Cookies policy** enlazada
- **Consentimiento** en formulario

## 🚀 Próximas Mejoras

1. **Dashboard de métricas** en tiempo real
2. **Chatbot IA integrado** para lead qualification
3. **A/B testing** de headlines y CTAs
4. **Blog** para content marketing
5. **Calculadora ROI** interactiva
6. **Portal de clientes** con login
7. **Integraciones CRM** (HubSpot, Pipedrive)

## 🧑‍💻 Desarrollo

### Founders
- **Andreu Kwazema** - Programador
- **Diana Martin** - Artista + Marketing

### Desarrollado con ❤️
- **Metodología**: Mobile-first, Component-driven
- **Testing**: Manual QA + Build validation
- **Performance**: Optimización de Core Web Vitals
- **Accesibilidad**: WCAG 2.1 AA guidelines

---

**¿Preguntas o necesitas soporte?**
- 📧 Email: hello@synergylabs.es
- 💬 WhatsApp: +34 600 000 000
- 🌐 Website: https://synergylabs.es