import { Collection } from "tinacms";

const siteCollection: Collection<false> = {
  label: "Site",
  name: "site",
  path: "content/site",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  fields: [
    { label: "Site name", name: "name", type: "string" },
    { label: "Favicon", name: "favicon", type: "image" },
  ],
};

export default siteCollection;
