import { defineField } from "sanity";

export default defineField({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'created_at',
      title: 'Created At',
      type: 'datetime',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string'
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: "views",
      title: "Views",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
              options: { isHiglighted: true },
            },
            {
              name: 'alt',
              title: 'Alternative text',
              type: 'string'
            }
          ]
        }
      ]
    })
  ]
})