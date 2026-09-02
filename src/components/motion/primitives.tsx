import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const EASE = [0.22, 0.9, 0.24, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 1, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

const wordVariants: Variants = {
  hidden: { opacity: 0, y: "0.5em" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.045, ease: EASE },
  }),
};

/** Word-by-word reveal. Use "\n" in text to force a line break. */
export function WordReveal({
  text,
  className,
  delay = 0,
  as: Tag = "h2",
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p";
}) {
  const reduce = useReducedMotion();
  const lines = text.split("\n");
  let index = 0;

  return (
    <Tag className={className}>
      {lines.map((line, li) => (
        <span key={li} className="block overflow-hidden">
          {line.split(" ").map((word) => {
            const i = index++;
            return (
              <motion.span
                key={`${li}-${i}`}
                className="inline-block will-change-transform"
                custom={i + delay * 20}
                variants={wordVariants}
                initial={reduce ? "visible" : "hidden"}
                whileInView="visible"
                viewport={{ once: true, margin: "-10% 0px" }}
              >
                {word}
                <span>&nbsp;</span>
              </motion.span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}

export function MaskImage({
  src,
  alt,
  className,
  imgClassName,
  width,
  height,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  width?: number;
  height?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={`relative overflow-hidden ${className ?? ""}`}
      initial={reduce ? false : { clipPath: "inset(14% 14% 14% 14%)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 1.4, ease: EASE }}
    >
      <motion.img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        className={`h-full w-full object-cover ${imgClassName ?? ""}`}
        initial={reduce ? false : { scale: 1.12 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 1.6, ease: EASE }}
      />
    </motion.div>
  );
}

export { EASE };
