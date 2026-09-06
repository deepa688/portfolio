import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { DotCanvas } from "@/components/DotCanvas";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Expertise } from "@/components/Expertise";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { QuoteBand } from "@/components/QuoteBand";
import { SideRail } from "@/components/SideRail";
import { Stats } from "@/components/Stats";

export default function Page() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <DotCanvas />
      <Header />
      <SideRail />
      <main id="main">
        <Hero />
        <Stats />
        <About />
        <Expertise />
        <Experience />
        <QuoteBand />
        <Education />
        <Gallery />
        <Contact />
      </main>
    </>
  );
}
