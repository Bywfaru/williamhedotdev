import Image from "next/image";
import ReactMarkdown, { Components } from "react-markdown";

type AboutSectionProps = { body?: string };

const reactMarkdownComponents: Components = {
  h1: ({ children }) => <h2 className="text-center">{children}</h2>,
  h2: ({ children }) => <h3 className="text-center">{children}</h3>,
  img: ({ src, alt = "" }) =>
    src ? (
      <div className="relative w-40 h-40 rounded-full overflow-hidden">
        <Image src={src} alt={alt} fill style={{ objectFit: "contain" }} />
      </div>
    ) : null,
  p: ({ children }) => <p className="flex justify-center">{children}</p>,
};

const AboutSection: React.FC<AboutSectionProps> = ({ body }) => {
  if (!body?.trim().length) return null;

  return (
    <section id="about">
      <ReactMarkdown components={reactMarkdownComponents}>{body}</ReactMarkdown>
    </section>
  );
};

export default AboutSection;
