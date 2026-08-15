"use client";

import { motion } from "motion/react";
import { finalCta } from "../lib/data";
import AnimatedBackground from "./AnimatedBackground";
import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="relative overflow-hidden bg-richblack py-32 md:py-40"
    >
      <div className="absolute inset-0 bg-edge-radial" />
      <AnimatedBackground density={40} className="opacity-40" />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-caribbean/10 blur-[140px]"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center md:px-10">
        <Reveal>
          <h2 className="section-title text-4xl sm:text-6xl">{finalCta.title}</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-pistachio md:text-lg">
            {finalCta.body}
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="rounded-full bg-caribbean px-8 py-3.5 text-sm font-semibold text-richblack transition-transform hover:scale-105"
            >
              {finalCta.ctaPrimary}
            </a>
            <a
              href="#featured-work"
              className="rounded-full border border-mint/40 px-8 py-3.5 text-sm font-semibold text-flashwhite transition-colors hover:border-caribbean hover:text-caribbean"
            >
              {finalCta.ctaSecondary}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}