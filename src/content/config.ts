import { z, defineCollection } from "astro:content";
const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
    tags: z
        .array(z.string())
        .refine((items) => new Set(items).size === items.length, {
            message: "tags must be unique",
        })
        .optional(),
});

const notesSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
    tags: z
        .array(z.string())
        .refine((items) => new Set(items).size === items.length, {
            message: "tags must be unique",
        })
        .optional(),
});

export type BlogSchema = z.infer<typeof blogSchema>;
export type NotesSchema = z.infer<typeof blogSchema>;
// export type StoreSchema = z.infer<typeof storeSchema>;

const blogCollection = defineCollection({ schema: blogSchema });
const notesCollection = defineCollection({ schema: notesSchema });

export const collections = {
    blog: blogCollection,
    notes: notesCollection,
};
