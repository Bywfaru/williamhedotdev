type SectionContainerProps = {
  children?: React.ReactNode;
  id?: string;
  sectionProps?: JSX.IntrinsicElements["section"];
  divProps?: JSX.IntrinsicElements["div"];
};

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  id,
  divProps = {},
  sectionProps = {},
}) => {
  if (!children) return null;

  return (
    <section id={id} {...sectionProps}>
      <div className="sectionInnerContainer" {...divProps}>
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
