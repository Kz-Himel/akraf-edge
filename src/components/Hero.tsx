"use client";

import { motion } from "motion/react";
import { hero } from "../lib/data";
import Scene3D from "./Scene3D";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-richblack"
    >
      <div className="grid-noise absolute inset-0 opacity-40" />
      <div className="absolute inset-0 bg-edge-radial" />
      <div className="absolute inset-0 opacity-90">
        <Scene3D />
      </div>

      <div className="pointer-events-none absolute -right-40 top-1/4 h-[32rem] w-[32rem] animate-drift rounded-full bg-caribbean/10 blur-[120px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[26rem] w-[26rem] animate-drift rounded-full bg-forest/20 blur-[110px]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-5xl px-6 text-center md:px-10 pointer-events-none"
      >
        <motion.p variants={item} className="eyebrow mb-6">
          {hero.eyebrow}
        </motion.p>

        <motion.h1
          variants={item}
          className="section-title text-4xl sm:text-6xl md:text-7xl"
        >
          {hero.title}
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-2xl text-base text-pistachio md:text-lg"
        >
          {hero.body}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row pointer-events-auto"
        >
          <a
            href="#featured-work"
            className="rounded-full bg-caribbean px-7 py-3 text-sm font-semibold text-richblack transition-transform hover:scale-105"
          >
            {hero.ctaPrimary}
          </a>
          <a
            href="#final-cta"
            className="rounded-full border border-mint/40 px-7 py-3 text-sm font-semibold text-flashwhite transition-colors hover:border-caribbean hover:text-caribbean"
          >
            {hero.ctaSecondary}
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-stone">
          Scroll to discover
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="h-8 w-px bg-gradient-to-b from-caribbean to-transparent"
        />
      </motion.div>
    </section>
  );
}