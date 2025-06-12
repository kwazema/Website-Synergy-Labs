# TASKS.md - Synergy Labs Landing Page

**Documento de memoria del proyecto y próximas tareas para futuras sesiones de Claude Code**

## 📋 ESTADO ACTUAL DEL PROYECTO

### ✅ TAREAS COMPLETADAS (Última sesión)

#### 🔧 **Configuración y Assets**
- [x] Proyecto Next.js 14.2.30 inicializado con TypeScript
- [x] Tailwind CSS configurado con design system personalizado
- [x] GSAP 3.12.5 y Lenis 1.1.0 implementados
- [x] Assets integrados: logos, fotos del equipo, favicon
- [x] Estructura de carpetas optimizada

#### 🎨 **Secciones Implementadas**
- [x] **Hero Section** - Propuesta de valor con dashboard animado
- [x] **BusinessAnalysis** - Nueva sección "Analizamos tu Negocio" (después del hero)
- [x] **ProblemsBenefits** - Contraste problema vs solución con animaciones inteligentes
- [x] **AnimatedWorkflow** - Timeline interactivo del proceso
- [x] **ImpactMetrics** - Contadores animados y casos de éxito
- [x] **ServicesGrid** - Grid 2x2 de servicios con hover effects
- [x] **Contact** - Formulario + sección equipo expandida
- [x] **Footer** - Completo con enlaces y newsletter

#### 🌐 **Páginas y Navegación**
- [x] **Página /faqs independiente** - Formato de puntos, más legible
- [x] **Header flotante** - Glass effect, sticky, múltiples opciones de menú
- [x] **Enlaces actualizados** - Footer apunta a /faqs

#### ⚡ **Animaciones y UX**
- [x] **Animaciones eléctricas** - Efectos con colores cian y azul eléctrico
- [x] **Barras de progreso dinámicas** - Simulan "procesamiento de soluciones"
- [x] **Optimización móvil** - Información visible sin hover, interactividad táctil
- [x] **Título principal acelerado** - Delay reducido de 0.5s a 0.2s
- [x] **Sección equipo expandida** - Fotos grandes (96px), perfiles detallados

#### 🔍 **Características Avanzadas**
- [x] **Sistema de estados interactivos** - Problema → Procesando → Completado
- [x] **Métricas calculadas dinámicamente** - Costes perdidos por problema
- [x] **Información expandible** - Detalles de ROI y tiempo ahorrado
- [x] **Indicadores de criticidad** - Badges y alertas visuales
- [x] **Performance optimizada** - Build: 149 kB primera carga

---

## 🚀 PRÓXIMAS TAREAS PRIORIZADAS

### 🔴 **ALTA PRIORIDAD**

#### 1. **Convertir Emojis a SVGs Custom**
```
📁 Ubicación: src/components/sections/AnimatedWorkflow.tsx
🎯 Objetivo: Reemplazar emojis (🔍, 🎯, 🤖, etc.) por iconos SVG personalizados
📝 Detalles:
  - Crear iconos SVG en /public/assets/icons/
  - Mantener estilo consistente con design system
  - Añadir animaciones específicas (rotación, escala, etc.)
  - Colores: #1E90FF, #A259FF, #00BFFF, #00FFFF
```

#### 2. **Optimizar Imágenes con Next.js Image**
```
📁 Ubicación: Multiple components
🎯 Objetivo: Reemplazar <img> tags por <Image> de Next.js
📝 Detalles:
  - src/components/sections/Contact.tsx (líneas 174, 206)
  - src/components/sections/Footer.tsx (línea 72)
  - src/components/ui/FloatingHeader.tsx (línea 57)
  - Configurar sizes y priority para optimización
```

#### 3. **Añadir Funcionalidad Real al Formulario**
```
📁 Ubicación: src/app/api/webhook-n8n/route.ts
🎯 Objetivo: Integrar webhook real de n8n
📝 Detalles:
  - Configurar variable de entorno N8N_WEBHOOK_URL
  - Añadir validación robusta server-side
  - Implementar rate limiting
  - Añadir notificaciones de éxito/error mejoradas
```

### 🟡 **MEDIA PRIORIDAD**

#### 4. **Crear Páginas Legales**
```
📁 Ubicación: src/app/
🎯 Objetivo: Crear páginas requeridas por GDPR
📝 Detalles:
  - /privacy - Política de Privacidad
  - /terms - Términos de Servicio  
  - /cookies - Política de Cookies
  - /legal - Aviso Legal
  - Contenido específico para España y GDPR
```

#### 5. **Implementar Analytics y Tracking**
```
📁 Ubicación: src/app/layout.tsx
🎯 Objetivo: Añadir Google Analytics 4 y eventos
📝 Detalles:
  - Google Analytics 4 setup
  - Event tracking en CTAs principales
  - Conversion tracking (formulario enviado)
  - Meta Pixel (opcional)
```

#### 6. **Mejorar Accesibilidad (WCAG 2.1 AA)**
```
📁 Ubicación: Global
🎯 Objetivo: Cumplir estándares de accesibilidad
📝 Detalles:
  - Añadir aria-labels a elementos interactivos
  - Mejorar contraste de colores donde sea necesario
  - Navegación por teclado completa
  - Alt texts descriptivos para imágenes
```

### 🟢 **BAJA PRIORIDAD - MEJORAS FUTURAS**

#### 7. **Dashboard de Métricas en Tiempo Real**
```
🎯 Crear sección interactiva que muestre métricas de automatización
📝 Incluir: conexiones API activas, procesos automatizados, ahorros
```

#### 8. **Chatbot IA Integrado**
```
🎯 Implementar chatbot para qualification de leads
📝 Integrar con OpenAI API para conversaciones inteligentes
```

#### 9. **Calculadora ROI Interactiva**
```
🎯 Herramienta que calcule ahorros potenciales
📝 Inputs: empleados, tareas manuales, costes actuales
```

#### 10. **Blog/Content Marketing**
```
🎯 Sección de blog con artículos sobre automatización
📝 CMS integration (Strapi/Contentful) + SEO optimization
```

#### 11. **Portal de Clientes**
```
🎯 Área privada para clientes con métricas de sus automatizaciones
📝 Auth, dashboard personalizado, reportes mensuales
```

---

## 🛠️ ESPECIFICACIONES TÉCNICAS

### **Stack Actual**
```json
{
  "framework": "Next.js 14.2.30",
  "language": "TypeScript",
  "styling": "Tailwind CSS 3.4.4", 
  "animations": "GSAP 3.12.5",
  "scrolling": "Lenis 1.1.0",
  "deployment": "Coolify"
}
```

### **Design System**
```css
:root {
  --primary-blue: #1E90FF;     /* DodgerBlue */
  --black: #0B0B0E;
  --dark-gray: #1A1A1E;
  --accent-purple: #A259FF;
  --white: #FFFFFF;
  /* Efectos eléctricos */
  --electric-blue: #00BFFF;
  --electric-cyan: #00FFFF;
}
```

### **Performance Actual**
- **Build size**: 149 kB primera carga
- **Páginas generadas**: 6 (home, faqs, 404, api)
- **Core Web Vitals**: Optimizado
- **SEO**: Meta tags completos, favicon configurado

---

## 🔧 COMANDOS DE DESARROLLO

```bash
# Desarrollo
npm run dev          # Puerto 3000/3001

# Producción  
npm run build        # Build optimizado
npm start           # Servidor producción

# Calidad
npm run lint        # ESLint
npm run type-check  # TypeScript validation
```

---

## 📊 MÉTRICAS DE CONVERSIÓN

### **CTAs Principales**
1. "Consulta Estratégica GRATUITA" (Hero, multiple locations)
2. "Solicitar Análisis Gratuito" (BusinessAnalysis)
3. "Programa tu Consulta Estratégica" (AnimatedWorkflow)
4. "Calcula tu Potencial de Ahorro" (ImpactMetrics)

### **Trust Signals Implementados**
- ✅ Fotos reales del equipo fundador
- ✅ Métricas específicas (22% ahorro, 240h liberadas)
- ✅ Casos de éxito con nombres y resultados
- ✅ Garantía de 30 días
- ✅ +50 PYMEs transformadas

---

## 🐛 BUGS CONOCIDOS Y WARNINGS

### **Warnings Actuales (No críticos)**
```
- Using <img> instead of <Image /> (4 ubicaciones)
- Solution: Cambiar a next/image para mejor performance
```

### **Mejoras de Performance Pendientes**
```
- Lazy loading para animaciones complejas
- Optimización de imágenes con next/image
- Preload de assets críticos
```

---

## 💡 IDEAS PARA FUTURAS ITERACIONES

### **UX/UI Enhancements**
- [ ] Modo oscuro/claro toggle
- [ ] Tema personalizable por industria
- [ ] Micro-animaciones más sofisticadas
- [ ] Parallax scrolling en hero

### **Business Features**
- [ ] Calculadora de ahorros en tiempo real
- [ ] Testimonios en video
- [ ] Case studies interactivos
- [ ] Webinars/demos en vivo integration

### **Technical Improvements**
- [ ] PWA capabilities
- [ ] Offline support
- [ ] i18n para múltiples idiomas
- [ ] CMS integration para contenido dinámico

---

## 📞 INFORMACIÓN DE CONTACTO

### **Founders**
- **Andreu Kwazema** - CTO (Programador)
- **Diana Martin** - CMO (Artista + Marketing)

### **Contact Details**
- Email: hello@synergylabs.es
- WhatsApp: +34 600 000 000
- Website: https://synergylabs.es

---

**Última actualización**: Diciembre 2024
**Próxima revisión**: Al implementar las tareas de alta prioridad

**Notas para el próximo LLM**: Este proyecto está en producción y funcionando correctamente. Priorizar las tareas marcadas como ALTA PRIORIDAD antes de añadir nuevas características. El código está bien estructurado y optimizado para performance.