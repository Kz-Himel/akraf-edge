import { approach } from "../lib/data";
import Reveal from "./Reveal";

export default function Approach() {
  return (
    <section className="relative bg-darkgreen py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-16 max-w-2xl">
          <Reveal>
            <p className="eyebrow mb-6">{approach.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="section-title text-3xl sm:text-5xl">{approach.title}</h2>
          </Reveal>
        </div>

        <div className="relative grid gap-10 md:grid-cols-3">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-mint/40 to-transparent md:block" />
          {approach.steps.map((s, i) => (
            <Reveal key={s.number} delay={i * 0.12}>
              <div className="relative pt-2">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-mint/40 bg-richblack font-display text-sm font-bold text-caribbean">
                  {s.number}
                </div>
                <h3 className="section-title text-xl md:text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-pistachio md:text-base">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}