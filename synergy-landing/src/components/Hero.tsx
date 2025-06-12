"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";

export default function Hero() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".particle",
        { opacity: 0, y: 50 },
        { opacity: 0.3, y: 0, duration: 1.4, stagger: 0.1, repeat: -1, yoyo: true }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative flex flex-col items-center text-center gap-6 px-4 sm:px-8 md:px-12 max-w-5xl mx-auto">
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {[
          { top: "10%", left: "20%" },
          { top: "30%", left: "70%" },
          { top: "50%", left: "40%" },
          { top: "65%", left: "80%" },
          { top: "80%", left: "25%" },
          { top: "15%", left: "55%" },
          { top: "45%", left: "15%" },
          { top: "75%", left: "60%" },
          { top: "20%", left: "85%" },
          { top: "60%", left: "35%" },
          { top: "85%", left: "50%" },
          { top: "40%", left: "90%" },
        ].map((pos, i) => (
          <span
            key={i}
            className="particle block w-1.5 h-1.5 rounded-full bg-electricBlue/70 absolute"
            style={{ top: pos.top, left: pos.left }}
          />
        ))}
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold font-display leading-tight text-white"
      >
        Automatiza tu Negocio, <br /> Multiplica tus Resultados
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="text-lg md:text-2xl text-grayLight max-w-2xl"
      >
        Implementamos IA y automatizaciones que equivalen a contratar un empleado perfecto: trabaja 24/7, no se equivoca y cuesta menos.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 mt-4"
      >
        <Link
          href="#video-demo"
          className="bg-electricBlue hover:bg-electricGreen transition-colors text-white px-6 py-3 rounded-md font-semibold"
        >
          Ver Demo en Vivo
        </Link>
        <Link
          href="#calcular-ahorro"
          className="border border-electricBlue text-electricBlue hover:bg-electricBlue hover:text-white transition-colors px-6 py-3 rounded-md font-semibold"
        >
          Calcular mi Ahorro
        </Link>
      </motion.div>
    </section>
  );
}
