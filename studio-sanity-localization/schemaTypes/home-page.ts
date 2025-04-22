import { defineType } from "sanity";

export default defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    { name: 'en', type: 'string', title: 'English' },
    { name: 'it', type: 'string', title: 'Italian' },
  ],

});
