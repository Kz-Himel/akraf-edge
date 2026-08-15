import { intro } from "../lib/data";
import Reveal from "./Reveal";

export default function Intro() {
  return (
    <section id="who-we-are" className="relative bg-richblack py-28 md:py-36">
      <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
        <Reveal>
          <p className="eyebrow mb-6">{intro.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="section-title text-3xl sm:text-5xl">{intro.title}</h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-pistachio md:text-lg">
            {intro.body}
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <a
            href="#what-we-do"
            className="mt-8 inline-block text-sm font-semibold text-caribbean underline-offset-4 hover:underline"
          >
            {intro.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}