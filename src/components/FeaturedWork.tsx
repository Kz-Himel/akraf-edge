import { featuredWork } from "../lib/data";
import Reveal from "./Reveal";

export default function FeaturedWork() {
  return (
    <section id="featured-work" className="relative bg-richblack py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Reveal>
              <p className="eyebrow mb-6">{featuredWork.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="section-title text-3xl sm:text-5xl">
                {featuredWork.title}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <a
              href="#"
              className="whitespace-nowrap text-sm font-semibold text-caribbean underline-offset-4 hover:underline"
            >
              {featuredWork.cta}
            </a>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredWork.cases.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.1}>
              <a
                href="#"
                className="group relative block h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-basil to-richblack p-8 transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">
                  {c.tag}
                </span>
                <h3 className="section-title mt-5 text-xl md:text-2xl">
                  {c.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-pistachio">
                  {c.description}
                </p>
                <span className="mt-6 inline-block text-sm font-semibold text-caribbean opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  View case study →
                </span>
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-caribbean/10 blur-3xl transition-opacity duration-300 group-hover:opacity-80" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}