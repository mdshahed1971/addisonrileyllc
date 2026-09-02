import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";
import heroImage from "@/assets/hero.jpg";
import { WordReveal, EASE } from "@/components/motion/primitives";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const overlay = useTransform(scrollYProgress, [0, 1], [0.45, 0.72]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <motion.div className="absolute inset-0" style={{ y: reduce ? 0 : y }}>
        <img
          src={heroImage}
          alt="Forensic inspection engineer documenting a commercial roof at dusk"
          width={1920}
          height={1280}
          className="h-[118%] w-full object-cover"
        />
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-graphite"
        style={{ opacity: reduce ? 0.55 : overlay }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      <div className="relative mx-auto w-full max-w-[100rem] px-6 pb-20 pt-40 md:px-12 md:pb-28">
        <motion.p
          className="eyebrow text-stone-soft/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Forensics • Appraisal • Construction
        </motion.p>

        <WordReveal
          as="h1"
          text={"Restoring hope.\nProving what matters."}
          className="display-xl mt-8 max-w-5xl text-[13vw] text-stone-soft sm:text-[9vw] lg:text-[6.6vw]"
        />

        <motion.div
          className="mt-10 flex flex-col gap-8 border-t border-stone-soft/20 pt-8 md:flex-row md:items-end md:justify-between"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: EASE }}
        >
          <p className="max-w-md text-base leading-relaxed text-stone-soft/80 md:text-lg">
            Your most trusted experts in restoring hope.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="bg-stone-soft px-8 py-4 text-[10px] uppercase tracking-[0.24em] text-graphite transition-colors duration-300 hover:bg-slate-blue hover:text-stone-soft"
            >
              Request a Consultation
            </a>
            <a
              href="#expertise"
              className="border border-stone-soft/40 px-8 py-4 text-[10px] uppercase tracking-[0.24em] text-stone-soft transition-colors duration-300 hover:border-stone-soft hover:bg-stone-soft/10"
            >
              Explore Our Expertise
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
