import { Collection } from "tinacms";

const homepageCollection: Collection<false> = {
  label: "Homepage",
  name: "homepage",
  path: "content/homepage",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  fields: [
    {
      label: "Sections",
      name: "sections",
      type: "object",
      fields: [
        {
          label: "About",
          name: "about",
          type: "object",
          fields: [{ label: "Body", name: "body", type: "rich-text" }],
        },
        {
          label: "Skills",
          name: "skills",
          type: "object",
          fields: [
            { label: "Heading", name: "heading", type: "string" },
            {
              label: "Categories",
              name: "categories",
              type: "object",
              list: true,
              ui: {
                itemProps: (item = {}) => {
                  return { label: item?.name };
                },
              },
              fields: [
                { label: "Name", name: "name", type: "string" },
                {
                  label: "Skills",
                  name: "skills",
                  type: "object",
                  list: true,
                  ui: {
                    itemProps: (item = {}) => {
                      return { label: item?.name };
                    },
                  },
                  fields: [
                    { label: "Name", name: "name", type: "string" },
                    { label: "Icon", name: "icon", type: "image" },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "Projects",
          name: "projects",
          type: "object",
          fields: [
            { label: "Heading", name: "heading", type: "string" },
            {
              label: "Projects",
              name: "projects",
              type: "object",
              list: true,
              ui: {
                itemProps: (item = {}) => {
                  return { label: item?.name };
                },
              },
              fields: [
                { label: "Name", name: "name", type: "string" },
                { label: "Project image", name: "image", type: "image" },
                {
                  label: "Project location",
                  name: "location",
                  type: "string",
                },
              ],
            },
          ],
        },
        {
          label: "Education",
          name: "education",
          type: "object",
          fields: [
            { label: "Heading", name: "heading", type: "string" },
            {
              label: "Schools",
              name: "schools",
              type: "object",
              list: true,
              ui: {
                itemProps: (item = {}) => {
                  return { label: item?.name };
                },
              },
              fields: [
                { label: "School name", name: "name", type: "string" },
                { label: "Logo", name: "logo", type: "image" },
                {
                  label: "Discipline",
                  name: "discipline",
                  type: "string",
                },
                {
                  label: "Graduation",
                  name: "graduation",
                  type: "object",
                  fields: [
                    {
                      // TODO: change to date-time component
                      label: "Graduation date",
                      name: "date",
                      type: "string",
                    },
                    {
                      label: "Level",
                      name: "level",
                      type: "string",
                    },
                  ],
                },
                {
                  label: "Courses completed",
                  name: "coursesCompleted",
                  type: "object",
                  list: true,
                  ui: {
                    itemProps: (item = {}) => {
                      return { label: item?.name };
                    },
                  },
                  fields: [
                    { label: "Course name", name: "name", type: "string" },
                    {
                      label: "Link to the course",
                      name: "link",
                      type: "string",
                    },
                  ],
                },
                {
                  label: "Attendance period",
                  name: "attendancePeriod",
                  type: "object",
                  // TODO
                  // ui: {
                  // itemProps: (item = {}) => {
                  //   const { begin, end }

                  //   return {  label: `Atten`}
                  // },
                  fields: [
                    {
                      label: "Begin",
                      name: "begin",
                      type: "string",
                    },
                    {
                      label: "End",
                      name: "end",
                      type: "string",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  format: "md",
};

export default homepageCollection;
