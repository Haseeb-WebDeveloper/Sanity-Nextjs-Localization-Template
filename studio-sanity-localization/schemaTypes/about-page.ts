import { defineType } from "sanity";

export default defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    {
      name: 'title',
      type: 'object',
      title: 'Title',
      fields: [
        { name: 'en', type: 'string', title: 'English' },
        { name: 'it', type: 'string', title: 'Italian' },
      ]
    },
    {
      name: 'description',
      type: 'object',
      title: 'Description',
      fields: [
        { name: 'en', type: 'text', title: 'English' },
        { name: 'it', type: 'text', title: 'Italian' },
      ]
    },
    {
      name: 'mission',
      type: 'object',
      title: 'Our Mission',
      fields: [
        { name: 'en', type: 'text', title: 'English' },
        { name: 'it', type: 'text', title: 'Italian' },
      ]
    },
    {
      name: 'image',
      type: 'image',
      title: 'About Image',
      options: {
        hotspot: true,
      },
    }
  ],
}); 