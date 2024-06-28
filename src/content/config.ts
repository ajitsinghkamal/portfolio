import { defineCollection, z } from "astro:content";

const site = defineCollection({
	type: "data",
	schema: z.object({
		title: z.string(),
		greeting: z.string(),
		creationYear: z.number(),
		creator: z.object({
			name: z.string(),
			fullName: z.string(),
			socials: z.object({
				linkedIn: z.string().url().optional(),
				mail: z.string().email(),
				codepen: z.string().url().optional(),
				github: z.string().url().optional(),
				stackoverflow: z.string().url().optional(),
			}),
		}),
	}),
});

const about = defineCollection({
	type: "content",
	schema: z.object({
		body: z.string().optional(),
	}),
});

const work = defineCollection({
	type: "content",
	schema: z.object({
		employer: z.string(),
		started: z.string().date(),
		ended: z.string().date().optional(),
		isCurrent: z.boolean().optional(),
		title: z.string(),
		location: z.string(),
	}),
});

export const collections = { site, about, work };
