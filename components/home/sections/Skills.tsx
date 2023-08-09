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
      <h2 className="text-center">{heading}</h2>

      <div className="flex-column">
        {categories.map(({ name: categoryName, skills }) => (
          <div key={categoryName} className="flex-column items-center">
            <h3 className="text-center">{categoryName}</h3>

            <div className="flex gap-2">
              {skills.map(({ icon, name: skillName }) => (
                <div key={skillName} className="relative w-12 h-12">
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
    </section>
  );
};

export default SkillsSection;
