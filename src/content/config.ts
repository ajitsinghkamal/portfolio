import {z, defineCollection} from "astro:content";

const about = defineCollection({
	type: "data",
	schema: z.object({
		title: z.string(),
		footnote: z.string().optional(),
	}),
})

export const collections = {about}