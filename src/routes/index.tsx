import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import {
  About,
  FieldScroll,
  Expertise,
  FieldWork,
  Documentation,
  Process,
  WhoWeWorkWith,
  FinalCta,
  Footer,
} from "@/components/site/Sections";

const title = "Addison Riley, LLC — Forensics, Appraisal & Construction";
const description =
  "Addison Riley, LLC provides forensics, appraisal and construction expertise — inspection, loss documentation, roofing, engineering, mitigation and umpire services.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <SmoothScroll />
      <Nav />
      <Hero />
      <About />
      <FieldScroll />
      <Expertise />
      <FieldWork />
      <Documentation />
      <Process />
      <WhoWeWorkWith />
      <FinalCta />
      <Footer />
    </main>
  );
}
