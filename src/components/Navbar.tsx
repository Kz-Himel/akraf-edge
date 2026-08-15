"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react"
import { nav } from "@/src/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-richblack/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#hero" className="font-display text-lg font-bold tracking-tight text-flashwhite">
          ARKAF <span className="text-caribbean">Edge</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-pistachio transition-colors hover:text-caribbean"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#final-cta"
          className="hidden rounded-full border border-mint/40 px-5 py-2 text-sm font-semibold text-flashwhite transition-colors hover:border-caribbean hover:text-caribbean md:inline-block"
        >
          Let&apos;s Talk ↗
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span className="h-0.5 w-6 bg-flashwhite" />
          <span className="h-0.5 w-6 bg-flashwhite" />
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-1 border-t border-white/10 bg-richblack px-6 py-4 md:hidden">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-3 text-sm font-medium text-pistachio hover:text-caribbean"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </motion.header>
  );
}