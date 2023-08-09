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
    <main>
      <Hero />
      <About body={sections.about.body} />
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
