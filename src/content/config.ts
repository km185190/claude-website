import { z, defineCollection } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    updatedDate: z.date().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    image: z.string().optional(),
    tags: z.array(z.string()),
    stack: z.array(z.string()),
    sourceUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    status: z
      .enum(["completed", "in-progress", "planned"])
      .default("completed"),
  }),
});

export const collections = {
  projects,
};
