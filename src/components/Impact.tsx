"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { impact } from "../lib/data";
import Reveal from "./Reveal";

function Counter({ value }: { value: string }) {
  const numeric = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");
  const isNumeric = !Number.isNaN(numeric);

  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: 1.2, bounce: 0 });

  useEffect(() => {
    if (inView && isNumeric) motionVal.set(numeric);
  }, [inView, isNumeric, motionVal, numeric]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`;
    });
  }, [spring, suffix]);

  if (!isNumeric) {
    return <span ref={ref}>{value}</span>;
  }

  return <span ref={ref}>0{suffix}</span>;
}

export default function Impact() {
  return (
    <section className="relative bg-bangladesh py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {impact.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <motion.p className="font-display text-4xl font-extrabold text-flashwhite sm:text-5xl">
                <Counter value={s.value} />
              </motion.p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-mint sm:text-sm">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}