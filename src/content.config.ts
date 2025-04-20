import { defineCollection, z } from "astro:content";

const articleCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    category: z.enum(["web", "design", "life", "hackathon"]),
  }),
});

export const collections = {
  articles: articleCollection,
};
