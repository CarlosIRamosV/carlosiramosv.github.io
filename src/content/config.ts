import { defineCollection, z } from "astro:content";

// Colección existente del blog
const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    github: z.string().optional(),
    liveDemo: z.string().optional(),
    technologies: z.array(z.string()),
    featured: z.boolean().default(false),
    completionDate: z.date(),
    status: z
      .enum(["completed", "in-progress", "planned"])
      .default("completed"),
  }),
});

export const collections = {
  blog: blogCollection,
  projects: projectCollection,
};
