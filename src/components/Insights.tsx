import { insights } from "../lib/data";
import Reveal from "./Reveal";

export default function Insights() {
  return (
    <section id="insights" className="relative bg-richblack py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-16 max-w-2xl">
          <Reveal>
            <p className="eyebrow mb-6">{insights.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="section-title text-3xl sm:text-5xl">{insights.title}</h2>
          </Reveal>
        </div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {insights.topics.map((topic, i) => (
            <Reveal key={topic} delay={i * 0.08}>
              <a
                href="#"
                className="group flex items-center justify-between gap-6 py-7 transition-colors hover:text-caribbean"
              >
                <span className="font-display text-lg font-semibold text-flashwhite transition-colors group-hover:text-caribbean sm:text-xl">
                  {topic}
                </span>
                <span className="shrink-0 text-mint transition-transform duration-300 group-hover:translate-x-1 group-hover:text-caribbean">
                  →
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10">
         <a 
            href="#"
            className="text-sm font-semibold text-caribbean underline-offset-4 hover:underline"
          >
            {insights.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}