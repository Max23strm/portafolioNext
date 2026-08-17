import {
  SectionStructure,
  Nav,
  About,
  Portfolio,
  Experience,
  Contact,
  AnimatedSection,
} from "@/components";
import rawData from "@/app/data/data.json"
import { Data } from "./types";

export default function Home() {

const data = rawData as Data;

  return (
    <>
      <Nav />

      <AnimatedSection />

      <SectionStructure classStr="sec1" active="#about">
        <About data={data.about} />
      </SectionStructure>

<SectionStructure classStr="sec2" active="#work">
          <Portfolio projects={data.projects} />
        </SectionStructure>

      <SectionStructure classStr="sec1" active="#skills">
        <Experience experience={data.experience} />
      </SectionStructure>

      <SectionStructure classStr="sec2" active="#contact">
        <Contact />
      </SectionStructure>
    </>
  );
}
