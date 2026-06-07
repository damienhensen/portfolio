import { defineCollection, defineContentConfig } from "@nuxt/content";
import { z } from "zod";

function sectionWithPointsSchema() {
  return z.object({
    title: z.string(),
    text: z.string(),
    points: z.array(z.string()).default([]),
  });
}

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: "page",
      source: "blog/**/*.md",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        updated: z.string(),
        tags: z.array(z.string()),
      }),
    }),

    projects: defineCollection({
      type: "page",
      source: "projects/**/*.md",
      schema: z.object({
        featured: z.boolean().default(false),
        title: z.string(),
        description: z.string(),
        type: z.string(),

        date: z.string(),
        updated: z.string(),

        tags: z.array(z.string()).default([]),

        demo: z
          .object({
            source: z.string().optional(),
            live: z.string().optional(),
          })
          .optional(),

        cover: z.object({
          src: z.string(),
          alt: z.string(),
        }),

        problem: sectionWithPointsSchema(),
        solution: sectionWithPointsSchema(),

        architecture: z.object({
          title: z.string(),
          description: z.string(),
          tags: z.array(z.string()).default([]),
        }),

        code: z
          .object({
            filename: z.string(),
            language: z.string(),
            content: z.string(),
          })
          .optional(),

        screenshots: z
          .array(
            z.object({
              src: z.string(),
              alt: z.string(),
            }),
          )
          .default([]),

        technicalAnalysis: z.object({
          title: z.string(),
          decisions: z
            .array(
              z.object({
                title: z.string(),
                description: z.string(),
              }),
            )
            .default([]),
        }),

        challenge: z.object({
          title: z.string(),
          description: z.string(),
        }),

        lessons: z.object({
          title: z.string(),
          items: z
            .array(
              z.object({
                title: z.string(),
                description: z.string(),
              }),
            )
            .default([]),
        }),
      }),
    }),
  },
});
