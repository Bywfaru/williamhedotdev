import {
  About,
  Contact,
  Education,
  Hero,
  Projects,
  Skills,
} from "@/components/home/sections";

const HomePage: React.FC<null> = () => {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
};

export default HomePage;
