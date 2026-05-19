import { defineCollection, type SchemaContext } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const entrySchema = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
    cover: image().optional(),
    coverAlt: z.string().optional(),
    hideCover: z.boolean().optional(),
  });

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: entrySchema,
});

const leetcode = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/leetcode" }),
  schema: entrySchema,
});

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: entrySchema,
});

export const collections = { blog, leetcode, pages };
