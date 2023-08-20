import { SectionContainer } from "@/components/shared";
import Image from "next/image";

type CourseCompleted = {
  name: string;
  link?: string;
};

type SchoolProps = {
  name: string;
  logo: string;
  discipline: string;
  graduation?: { date: string; level: string };
  attendancePeriod: { begin: string; end: string };
  coursesCompleted?: CourseCompleted[];
};

type EducationSectionProps = {
  heading: string;
  schools: SchoolProps[];
};

type SchoolCourseProps = { name: string; link?: string };

const SchoolCourse: React.FC<SchoolCourseProps> = ({ link, name }) => {
  return link?.trim().length ? (
    <a key={name} href={link}>
      {name}
    </a>
  ) : (
    <span>{name}</span>
  );
};

const School: React.FC<SchoolProps> = ({
  attendancePeriod,
  coursesCompleted,
  discipline,
  graduation,
  logo,
  name,
}) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-full h-24 relative">
        <Image
          src={logo}
          alt={`${name} logo`}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <h3>{name}</h3>

      <h4 className="italic">{discipline}</h4>

      {!!graduation && (
        <p>
          Graduated {graduation.date} - {graduation.level}
        </p>
      )}

      {!!coursesCompleted?.length && (
        <div className="flex flex-col items-center">
          <h5>Completed courses:</h5>

          <p className="text-center italic">
            {coursesCompleted.map(
              ({ name: courseName, link: courseLink }, index) => (
                <>
                  <SchoolCourse
                    key={name}
                    name={courseName}
                    link={courseLink}
                  />
                  {index !== coursesCompleted.length - 1 && ", "}
                </>
              ),
            )}{" "}
          </p>
        </div>
      )}

      <p>
        {attendancePeriod.begin} - {attendancePeriod.end}
      </p>
    </div>
  );
};

const EducationSection: React.FC<EducationSectionProps> = ({
  heading,
  schools,
}) => {
  return (
    <SectionContainer id="education">
      <h2>{heading}</h2>

      {schools.map((school, index) => (
        <School key={index} {...school} />
      ))}
    </SectionContainer>
  );
};

export default EducationSection;
