"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { edgeSection } from "../lib/data";
import Reveal from "./Reveal";

export default function EdgeSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["4%", "-8%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.15, 1, 1, 0.15]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-richblack py-28"
    >
      <div className="grid-noise absolute inset-0 opacity-30" />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex select-none flex-col items-center justify-center gap-0 overflow-hidden">
        <motion.span
          style={{ x: x1, opacity }}
          className="font-display text-[22vw] font-extrabold leading-none tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(0,223,129,0.25)] md:text-[16vw]"
        >
          EDGE
        </motion.span>
        <motion.span
          style={{ x: x2, opacity }}
          className="font-display -mt-8 text-[22vw] font-extrabold leading-none tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(23,135,109,0.35)] md:text-[16vw]"
        >
          EDGE
        </motion.span>
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center md:px-10">
        <Reveal>
          <p className="eyebrow mb-6">{edgeSection.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="section-title text-3xl sm:text-5xl">{edgeSection.title}</h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-pistachio md:text-lg">
            {edgeSection.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}