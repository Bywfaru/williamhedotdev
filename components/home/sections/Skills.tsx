import Image from "next/image";

type SkillsSectionSkill = {
  name: string;
  icon: string;
};

type SkillsSectionProps = {
  heading: string;
  categories: {
    name: string;
    skills: SkillsSectionSkill[];
  }[];
};

const SkillsSection: React.FC<SkillsSectionProps> = ({
  categories,
  heading,
}) => {
  return (
    <section id="skills">
      <div className="sectionInnerContainer">
        <h2>{heading}</h2>

        <div className="flex flex-col gap-7">
          {categories.map(({ name: categoryName, skills }) => (
            <div
              key={categoryName}
              className="flex flex-col items-center gap-4"
            >
              <h3>{categoryName}</h3>

              <div className="flex gap-2 flex-wrap justify-center">
                {skills.map(({ icon, name: skillName }) => (
                  <div
                    key={skillName}
                    className="relative w-12 h-12 lg:w-20 lg:h-20"
                  >
                    <Image
                      src={icon}
                      alt={skillName}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
