import Hero from '@/components/sections/Hero';
import ProblemsBenefits from '@/components/sections/ProblemsBenefits';
import AnimatedWorkflow from '@/components/sections/AnimatedWorkflow';
import ImpactMetrics from '@/components/sections/ImpactMetrics';
import ServicesGrid from '@/components/sections/ServicesGrid';
import InteractiveFAQ from '@/components/sections/InteractiveFAQ';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <ProblemsBenefits />
      <AnimatedWorkflow />
      <ImpactMetrics />
      <ServicesGrid />
      <InteractiveFAQ />
      <Contact />
      <Footer />
    </main>
  );
}