import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { Facebook } from "lucide-react";
import { ContainerScroll } from "@/components/ContainerScroll";
import { Reveal, WordReveal, MaskImage, EASE } from "@/components/motion/primitives";
import scrollImage from "@/assets/scroll.jpg";
import documentImage from "@/assets/document.jpg";
import workTpo from "@/assets/work-tpo.jpg";
import workFire from "@/assets/work-fire.jpg";
import workHotel from "@/assets/work-hotel.jpg";
import workMold from "@/assets/work-mold.jpg";
import workWaterfront from "@/assets/work-waterfront.jpg";

/* ---------------------------------- About --------------------------------- */

export function About() {
  return (
    <section id="about" className="mx-auto max-w-[100rem] px-6 py-28 md:px-12 md:py-40">
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="eyebrow">About the firm</p>
          </Reveal>
          <WordReveal
            text={"Where experience\nmeets evidence."}
            className="display-xl mt-6 text-[10vw] leading-[0.92] sm:text-[7vw] lg:text-[4.4vw]"
          />
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-foreground/80">
              Addison Riley, LLC brings forensics, appraisal and construction under a
              single discipline: understand the building, establish the facts, and
              support them with documentation that holds up under scrutiny.
            </p>
          </Reveal>
          <div className="mt-12 space-y-8">
            {[
              {
                t: "Forensics",
                d: "Field investigation of building conditions and loss causation, recorded methodically so conclusions can be traced back to observed evidence.",
              },
              {
                t: "Appraisal",
                d: "Valuation and scope of loss work grounded in measured conditions, material assemblies and repair realities rather than assumptions.",
              },
              {
                t: "Construction",
                d: "Repair, replacement and renovation work — from roofing systems to full-building projects — executed with the same rigor as our inspections.",
              },
            ].map((item, i) => (
              <Reveal key={item.t} delay={0.05 * i}>
                <div className="rule-line pt-6">
                  <h3 className="display-xl text-lg">{item.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Container scroll ---------------------------- */

export function FieldScroll() {
  return (
    <section className="surface-steel border-y border-border">
      <ContainerScroll
        titleComponent={
          <div className="px-4">
            <WordReveal
              text={"The work behind\nthe evidence."}
              className="display-xl text-[10vw] leading-[0.92] sm:text-[7vw] lg:text-[4.6vw]"
            />
            <Reveal delay={0.15}>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
                From roof inspections and loss documentation to large-scale construction
                projects, our work happens where the facts are found — in the field.
              </p>
            </Reveal>
          </div>
        }
      >
        <img
          src={scrollImage}
          alt="Aerial view of an inspection underway on a large commercial roof"
          width={1600}
          height={1008}
          loading="lazy"
          className="h-full w-full object-cover object-center"
        />
      </ContainerScroll>
    </section>
  );
}

/* -------------------------------- Expertise -------------------------------- */

const expertise = [
  {
    n: "01",
    t: "Forensics",
    d: "Cause-and-origin investigation of building failures, documented condition by condition.",
  },
  {
    n: "02",
    t: "Appraisal",
    d: "Independent valuation and scope development built on measured field data.",
  },
  {
    n: "03",
    t: "Construction",
    d: "Repair and rebuild work managed from scope through completion.",
  },
  {
    n: "04",
    t: "Roofing",
    d: "Commercial and residential roof systems — inspection, evaluation and replacement.",
  },
  {
    n: "05",
    t: "Engineering",
    d: "Technical evaluation of structures, assemblies and building performance.",
  },
  {
    n: "06",
    t: "Mitigation",
    d: "Stabilizing damaged property and documenting conditions before they change.",
  },
  {
    n: "07",
    t: "Umpire",
    d: "Neutral appraisal umpire service when parties reach an impasse on value.",
  },
];

export function Expertise() {
  return (
    <section id="expertise" className="surface-graphite">
      <div className="mx-auto max-w-[100rem] px-6 py-28 md:px-12 md:py-40">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-stone-soft/50">Expertise</p>
            </Reveal>
            <WordReveal
              text={"Seven disciplines.\nOne standard."}
              className="display-xl mt-6 text-[9vw] leading-[0.94] text-stone-soft sm:text-[6vw] lg:text-[3.6vw]"
            />
          </div>
        </div>

        <div className="mt-20">
          {expertise.map((e, i) => (
            <Reveal key={e.t} delay={i * 0.03}>
              <div className="group grid grid-cols-12 items-baseline gap-4 border-t border-stone-soft/15 py-8 transition-colors duration-500 hover:bg-stone-soft/5 md:py-10">
                <span className="col-span-2 text-[10px] tracking-[0.28em] text-stone-soft/45 md:col-span-1">
                  {e.n}
                </span>
                <h3 className="display-xl col-span-10 text-[8vw] text-stone-soft transition-transform duration-700 ease-out group-hover:translate-x-2 sm:text-[5vw] md:col-span-5 lg:text-[3vw]">
                  {e.t}
                </h3>
                <p className="col-span-12 max-w-md text-sm leading-relaxed text-stone-soft/60 md:col-span-6 md:col-start-7">
                  {e.d}
                </p>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-stone-soft/15" />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Field work -------------------------------- */

const fieldWork = [
  {
    title: "75,000 sq. ft. TPO Roof Replacement",
    place: "Texas City, TX",
    img: workTpo,
    alt: "Large commercial TPO membrane roof replacement in progress",
  },
  {
    title: "Fire Loss",
    place: "Birmingham, AL",
    img: workFire,
    alt: "Fire-damaged building interior with charred structural framing",
  },
  {
    title: "Hotel Inspection",
    place: "Fort Myers Beach, FL",
    img: workHotel,
    alt: "Coastal hotel exterior under inspection",
  },
  {
    title: "Mold Case",
    place: "Ohio",
    img: workMold,
    alt: "Moisture and mold staining exposed behind removed drywall",
  },
  {
    title: "Waterfront Renovation",
    place: "Destin, FL",
    img: workWaterfront,
    alt: "Waterfront residence under renovation with scaffolding at dusk",
  },
];

export function FieldWork() {
  return (
    <section id="field-work" className="mx-auto max-w-[100rem] px-6 py-28 md:px-12 md:py-40">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <Reveal>
            <p className="eyebrow">Selected field work</p>
          </Reveal>
          <WordReveal
            text={"Examples from\nthe field."}
            className="display-xl mt-6 text-[10vw] leading-[0.92] sm:text-[7vw] lg:text-[4.2vw]"
          />
        </div>
        <Reveal delay={0.1}>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Representative examples of the kind of work we perform. Not an indication of
            current or ongoing projects.
          </p>
        </Reveal>
      </div>

      <div className="mt-20 space-y-20 md:space-y-32">
        {fieldWork.map((w, i) => (
          <article
            key={w.title}
            className={`grid items-center gap-8 lg:grid-cols-12 ${
              i % 2 === 1 ? "lg:[&>figure]:order-2" : ""
            }`}
          >
            <figure
              className={`lg:col-span-7 ${i % 2 === 1 ? "lg:col-start-6" : ""}`}
            >
              <MaskImage
                src={w.img}
                alt={w.alt}
                width={1280}
                height={960}
                className="aspect-[4/3] w-full"
                imgClassName="transition-transform duration-[1200ms] ease-out hover:scale-[1.03]"
              />
            </figure>
            <div className={`lg:col-span-4 ${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-9"}`}>
              <Reveal delay={0.1}>
                <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display-xl mt-4 text-2xl leading-tight md:text-[2vw]">
                  {w.title}
                </h3>
                <p className="mt-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  {w.place}
                </p>
              </Reveal>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------- Documentation ------------------------------- */

export function Documentation() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="surface-graphite overflow-hidden">
      <div className="mx-auto grid max-w-[100rem] gap-16 px-6 py-28 md:px-12 md:py-40 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow text-stone-soft/50">Case studies & documentation</p>
          </Reveal>
          <WordReveal
            text={"Don't just describe\nwhat happened.\nDocument it."}
            className="display-xl mt-8 text-[10vw] leading-[0.92] text-stone-soft sm:text-[7vw] lg:text-[4.4vw]"
          />
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-lg text-base leading-relaxed text-stone-soft/65">
              Photographs, measurements, moisture readings, material observations and
              written findings are captured while conditions are still intact — so the
              record speaks for itself long after the site has changed.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-4 lg:col-start-9">
          <motion.div style={{ y: reduce ? 0 : y }}>
            <MaskImage
              src={documentImage}
              alt="Inspector recording property damage measurements and photographs on site"
              width={1408}
              height={1760}
              className="aspect-[4/5] w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Process --------------------------------- */

const steps = [
  { n: "01", t: "Inspect", d: "On-site examination of the property and its conditions." },
  { n: "02", t: "Document", d: "Photographs, measurements and readings captured in place." },
  { n: "03", t: "Evaluate", d: "Findings analyzed against building systems and materials." },
  { n: "04", t: "Report", d: "A clear written record of what was found and what it means." },
];

export function Process() {
  return (
    <section id="process" className="surface-steel border-y border-border">
      <div className="mx-auto max-w-[100rem] px-6 py-28 md:px-12 md:py-40">
        <Reveal>
          <p className="eyebrow">Process</p>
        </Reveal>
        <WordReveal
          text={"How the record\nis built."}
          className="display-xl mt-6 max-w-3xl text-[10vw] leading-[0.92] sm:text-[7vw] lg:text-[4.2vw]"
        />
        <div className="mt-20 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06}>
              <div className="group h-full bg-card p-8 transition-colors duration-500 hover:bg-secondary md:p-10">
                <span className="text-[10px] tracking-[0.3em] text-slate-blue">{s.n}</span>
                <h3 className="display-xl mt-8 text-2xl">{s.t}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Who we work with ---------------------------- */

const clients = [
  "Property Owners",
  "Attorneys",
  "Public Adjusters",
  "Construction Professionals",
  "Commercial Clients",
];

export function WhoWeWorkWith() {
  return (
    <section className="mx-auto max-w-[100rem] px-6 py-28 md:px-12 md:py-40">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="eyebrow">Who we work with</p>
          </Reveal>
        </div>
        <div className="lg:col-span-8">
          {clients.map((c, i) => (
            <Reveal key={c} delay={i * 0.04}>
              <div className="rule-line py-6">
                <span className="display-xl text-[7vw] leading-none sm:text-[4vw] lg:text-[2.6vw]">
                  {c}
                </span>
              </div>
            </Reveal>
          ))}
          <div className="rule-line" />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Final CTA -------------------------------- */

export function FinalCta() {
  return (
    <section id="contact" className="surface-graphite">
      <div className="mx-auto max-w-[100rem] px-6 py-28 text-center md:px-12 md:py-44">
        <WordReveal
          text={"When the details matter,\nexpertise matters."}
          className="display-xl mx-auto max-w-5xl text-[9vw] leading-[0.94] text-stone-soft sm:text-[6vw] lg:text-[4vw]"
        />
        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-col items-center gap-6">
            <a
              href="tel:+18507765009"
              className="bg-stone-soft px-10 py-5 text-[10px] uppercase tracking-[0.24em] text-graphite transition-colors duration-300 hover:bg-slate-blue hover:text-stone-soft"
            >
              Request a Consultation
            </a>
            <div className="flex flex-col items-center gap-2 text-sm text-stone-soft/70 sm:flex-row sm:gap-8">
              <a href="tel:+18507765009" className="transition-colors hover:text-stone-soft">
                +1 850-776-5009
              </a>
              <a
                href="mailto:contact@addisonriley.com"
                className="transition-colors hover:text-stone-soft"
              >
                contact@addisonriley.com
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------- Footer --------------------------------- */

export function Footer() {
  return (
    <footer className="mx-auto max-w-[100rem] px-6 py-16 md:px-12 md:py-20">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="display-xl text-xl">Addison Riley, LLC</p>
          <p className="eyebrow mt-3">Forensics • Appraisal • Construction</p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Your most trusted experts in restoring hope.
          </p>
        </div>

        <nav className="md:col-span-3" aria-label="Footer">
          <p className="eyebrow">Navigate</p>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {[
              ["About", "#about"],
              ["Expertise", "#expertise"],
              ["Field Work", "#field-work"],
              ["Process", "#process"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <a href={href} className="transition-colors hover:text-foreground">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <p className="eyebrow">Contact</p>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>
              <a href="tel:+18507765009" className="transition-colors hover:text-foreground">
                +1 850-776-5009
              </a>
            </li>
            <li>
              <a
                href="mailto:contact@addisonriley.com"
                className="transition-colors hover:text-foreground"
              >
                contact@addisonriley.com
              </a>
            </li>
          </ul>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Addison Riley, LLC on Facebook"
            className="mt-6 inline-flex h-10 w-10 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
          >
            <Facebook className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      <motion.div
        className="rule-line mt-14 pt-6 text-xs text-muted-foreground"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        © {new Date().getFullYear()} Addison Riley, LLC. All rights reserved.
      </motion.div>
    </footer>
  );
}
