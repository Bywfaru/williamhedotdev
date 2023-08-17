export enum HomepageContactSectionInputType {
  TEXT = "text",
  NUMBER = "number",
  TEL = "tel",
  TEXTAREA = "textarea",
  EMAIL = "email",
}

export type HomepageContactSectionInput = {
  inputType: HomepageContactSectionInputType;
  label: string;
  name: string;
  required?: boolean;
};

export type HomepageContactSection = {
  heading: string;
  inputs: HomepageContactSectionInput[];
};

export type HomepageEducationSectionSchool = {
  name: string;
  logo: string;
  discipline: string;
  graduation: { date: string; level: string };
  attendancePeriod: { begin: string; end: string };
};

export type HomepageEducationSection = {
  heading: string;
  schools: HomepageEducationSectionSchool[];
};

export type HomepageProjectsSectionProject = {
  name: string;
  image: string;
};

export type HomepageProjectsSection = {
  heading: string;
  projects: HomepageProjectsSectionProject[];
};

export type HomepageAboutSection = {
  body: string;
  heading: string;
  avatar: string;
};

export type HomepageSkillsSectionSkill = {
  name: string;
  icon: string;
};

export type HomepageSkillsSectionCategory = {
  name: string;
  skills: HomepageSkillsSectionSkill[];
};

export type HomepageSkillsSection = {
  heading: string;
  categories: HomepageSkillsSectionCategory[];
};

export type HomepageAttributes = {
  sections: {
    about: HomepageAboutSection;
    skills: HomepageSkillsSection;
    education: HomepageEducationSection;
    projects: HomepageProjectsSection;
    contact: HomepageContactSection;
  };
};
