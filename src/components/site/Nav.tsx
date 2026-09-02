import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Field Work", href: "#field-work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setSolid(v > 80));

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.2, ease: [0.22, 0.9, 0.24, 1] }}
    >
      <motion.div
        animate={{
          backgroundColor: solid
            ? "oklch(0.955 0.004 250 / 0.88)"
            : "oklch(0.955 0.004 250 / 0)",
          borderBottomColor: solid
            ? "oklch(0.865 0.008 252 / 1)"
            : "oklch(0.865 0.008 252 / 0)",
          paddingTop: solid ? 14 : 26,
          paddingBottom: solid ? 14 : 26,
        }}
        transition={{ duration: 0.5, ease: [0.22, 0.9, 0.24, 1] }}
        className={`border-b backdrop-blur-md transition-colors duration-500 ${
          solid ? "text-foreground" : "text-stone-soft"
        }`}
      >
        <div className="mx-auto flex max-w-[100rem] items-center justify-between px-6 md:px-12">
          <a href="#top" className="group">
            <span className="display-xl block text-sm md:text-base">
              Addison Riley, LLC
            </span>
            <span className={`eyebrow mt-1 block text-[9px] md:text-[10px] ${solid ? "" : "text-stone-soft/60"}`}>
              Forensics • Appraisal • Construction
            </span>
          </a>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`relative text-xs uppercase tracking-[0.2em] transition-colors ${solid ? "text-muted-foreground hover:text-foreground" : "text-stone-soft/70 hover:text-stone-soft"}`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className={`border px-5 py-2.5 text-[10px] uppercase tracking-[0.22em] transition-colors duration-300 ${solid ? "border-foreground hover:bg-foreground hover:text-background" : "border-stone-soft/40 hover:bg-stone-soft hover:text-graphite"}`}
            >
              Request a Consultation
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span className="h-px w-6 bg-current" />
            <span className="h-px w-6 bg-current" />
          </button>
        </div>

        {open && (
          <nav
            className="flex flex-col gap-4 border-t border-border bg-background px-6 py-6 lg:hidden"
            aria-label="Mobile"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-xs uppercase tracking-[0.2em] text-muted-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
        )}
      </motion.div>
    </motion.header>
  );
}
