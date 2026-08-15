import { expertise } from "../lib/data";
import Reveal from "./Reveal";

export default function Expertise() {
  return (
    <section id="what-we-do" className="relative bg-darkgreen py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-16 max-w-2xl">
          <Reveal>
            <p className="eyebrow mb-6">{expertise.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="section-title text-3xl sm:text-5xl">{expertise.title}</h2>
          </Reveal>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
          {expertise.items.map((it, i) => (
            <Reveal key={it.number} delay={i * 0.08} y={20}>
              <div className="group h-full bg-darkgreen p-8 transition-colors duration-300 hover:bg-basil md:p-10">
                <span className="font-display text-sm font-semibold text-mint">
                  {it.number}
                </span>
                <h3 className="section-title mt-4 text-xl md:text-2xl">
                  {it.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-pistachio md:text-base">
                  {it.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12">
          <a
            href="#featured-work"
            className="text-sm font-semibold text-caribbean underline-offset-4 hover:underline"
          >
            {expertise.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}