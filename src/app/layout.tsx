import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import '@/styles/globals.css'
import SmoothScroll from '@/components/animations/SmoothScroll'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Synergy Labs - IA + Automatizaciones + Marketing para PYMEs',
  description: 'Transformamos tu negocio con IA y automatizaciones. Ahorra 22% de costes y libera 240h/año por empleado. Consulta estratégica gratuita.',
  keywords: ['automatización', 'IA', 'marketing digital', 'PYMEs', 'chatbots', 'Shopify', 'SaaS'],
  authors: [{ name: 'Synergy Labs' }],
  creator: 'Synergy Labs',
  publisher: 'Synergy Labs',
  openGraph: {
    title: 'Synergy Labs - IA + Automatizaciones + Marketing para PYMEs',
    description: 'Transformamos tu negocio con IA y automatizaciones. Ahorra 22% de costes y libera 240h/año por empleado.',
    url: 'https://synergylabs.es',
    siteName: 'Synergy Labs',
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Synergy Labs - IA + Automatizaciones + Marketing para PYMEs',
    description: 'Transformamos tu negocio con IA y automatizaciones. Ahorra 22% de costes y libera 240h/año por empleado.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-inter">
        <SmoothScroll />
        {children}
      </body>
    </html>
  )
}