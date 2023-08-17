import Image, { ImageProps } from "next/image";
import React from "react";
import ReactMarkdown, { Components } from "react-markdown";

type AboutSectionProps = { body?: string; avatar: string; heading: string };

const reactMarkdownComponents: Components = {
  h1: ({ children }) => <h2 className="text-center text-3xl">{children}</h2>,
  h2: ({ children }) => <h3 className="text-center text-2xl">{children}</h3>,
  img: ({ src, alt = "" }) =>
    src ? (
      <div className="relative w-40 h-40 rounded-full overflow-hidden">
        <Image src={src} alt={alt} fill style={{ objectFit: "contain" }} />
      </div>
    ) : null,
  p: ({ children }) => <p className="whitespace-pre-wrap">{children}</p>,
  a: ({ children, href }) => (
    <a href={href} target="_blank" className="underline">
      {children}
    </a>
  ),
};

type AvatarProps = {
  src: ImageProps["src"];
};

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <div className="relative w-40 h-40 rounded-full overflow-hidden">
      <Image src={src} alt="avatar" fill style={{ objectFit: "contain" }} />
    </div>
  );
};

const AboutSection: React.FC<AboutSectionProps> = ({
  body,
  avatar,
  heading,
}) => {
  if (!body?.trim().length) return null;

  return (
    <section id="about">
      <div className="container flex gap-6 flex-col mx-auto items-center max-w-xl">
        <h2 className="text-center text-3xl">{heading}</h2>

        <Avatar src={avatar} />

        <ReactMarkdown
          className="flex flex-col gap-6"
          components={reactMarkdownComponents}
        >
          {body}
        </ReactMarkdown>
      </div>
    </section>
  );
};

export default AboutSection;
