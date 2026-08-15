import { footer } from "../lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-darkgreen py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <p className="font-display text-lg font-bold text-flashwhite">
              ARKAF <span className="text-caribbean">Edge</span>
            </p>
            <p className="mt-3 text-sm text-pistachio">{footer.tagline}</p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-mint">
                Navigate
              </p>
              <ul className="space-y-2">
                {footer.nav.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-pistachio transition-colors hover:text-caribbean"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-mint">
                Contact
              </p>
              <ul className="space-y-2">
                {footer.contact.map((item) => (
                  <li key={item} className="text-sm text-pistachio">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-stone sm:flex-row">
          <p>{footer.copyright}</p>
          <div className="flex gap-6">
            {footer.legal.map((item) => (
              <a key={item} href="#" className="hover:text-caribbean">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}