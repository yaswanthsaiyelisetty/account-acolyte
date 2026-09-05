import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Work } from "@/components/portfolio/Work";
import { Skills } from "@/components/portfolio/Skills";
import { Education } from "@/components/portfolio/Education";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import { NeonWaveBackground } from "@/components/portfolio/NeonWaveBackground";

const title = "Yaswanth Sai — AI & Data Engineer";
const description =
  "Portfolio of Yelisetty Yaswanth Sai, AI & Data Engineer building ETL pipelines, BI dashboards, RAG systems and production AI agents.";

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
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-transparent">
      <NeonWaveBackground />
      <div className="relative z-10">
        <Nav />
        <main>
          <Hero />
          <About />
          <Work />
          <Skills />
          <Education />
          <Experience />
          <Contact />
        </main>
      </div>
    </div>
  );
}
