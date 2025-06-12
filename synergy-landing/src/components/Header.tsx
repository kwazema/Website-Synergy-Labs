"use client";
import Image from "next/image";
import { useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-deepBlack/60 border-b border-white/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="#" className="flex items-center gap-2">
          <Image
            src="/images/logo.svg"
            alt="Synergy Labs logo"
            width={150}
            height={32}
            priority
          />
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          <Menu size={28} />
        </button>
        <ul className="hidden md:flex gap-6 items-center text-white text-sm font-medium">
          <li>
            <Link href="#servicios" className="hover:text-electricBlue transition-colors">
              Servicios
            </Link>
          </li>
          <li>
            <Link href="#proceso" className="hover:text-electricBlue transition-colors">
              Proceso
            </Link>
          </li>
          <li>
            <Link href="#contacto" className="hover:text-electricBlue transition-colors">
              Contacto
            </Link>
          </li>
          <li>
            <Link
              href="#cta-demo"
              className="bg-electricBlue hover:bg-electricGreen transition-colors text-white px-4 py-2 rounded-md"
            >
              Solicitar Demo Gratuita
            </Link>
          </li>
        </ul>
        {/* Mobile menu */}
        {open && (
          <ul className="absolute top-full left-0 w-full flex flex-col gap-4 bg-deepBlack p-4 text-white text-base md:hidden">
            <li>
              <Link href="#servicios" onClick={() => setOpen(false)}>
                Servicios
              </Link>
            </li>
            <li>
              <Link href="#proceso" onClick={() => setOpen(false)}>
                Proceso
              </Link>
            </li>
            <li>
              <Link href="#contacto" onClick={() => setOpen(false)}>
                Contacto
              </Link>
            </li>
            <li>
              <Link
                href="#cta-demo"
                onClick={() => setOpen(false)}
                className="bg-electricBlue hover:bg-electricGreen transition-colors text-white px-4 py-2 rounded-md block text-center"
              >
                Solicitar Demo Gratuita
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
