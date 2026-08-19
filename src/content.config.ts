import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const writing = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/writing" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    publication: z.string().optional(),
      tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

const comics = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/comics" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      image: image(),
      alt: z.string(),
      caption: z.string().optional(),
      draft: z.boolean().optional().default(false),
    }),
});

export const collections = { writing, comics };
