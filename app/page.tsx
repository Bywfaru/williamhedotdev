"use client";

import {
  About,
  Contact,
  Education,
  Hero,
  Projects,
  Skills,
} from "@/components/home/sections";
import { attributes as homepageAttributes } from "@/content/homepage/index.md";
import { HomepageAttributes } from "@/content/homepage/types";

const { sections } = homepageAttributes as HomepageAttributes;

const HomePage: React.FC<null> = () => {
  return (
    <main className="flex flex-col">
      <Hero />
      <About
        body={sections.about.body}
        avatar={sections.about.avatar}
        heading={sections.about.heading}
      />
      <Skills
        categories={sections.skills.categories}
        heading={sections.skills.heading}
      />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
};

export default HomePage;
