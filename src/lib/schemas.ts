import { z } from 'zod'

export const eyecatchSchema = z.object({
	url: z.string().url(),
	width: z.number().int().positive(),
	height: z.number().int().positive(),
	blurDataURL: z.string().optional(),
})

export const categorySchema = z.object({
	name: z.string(),
	id: z.string(),
	slug: z.string(),
})

export const postSchema = z.object({
	title: z.string(),
	slug: z.string(),
	eyecatch: eyecatchSchema.optional(),
	content: z.string(),
	publishDate: z.string(),
	categories: z.array(categorySchema),
})

export const postListItemSchema = z.object({
	title: z.string(),
	slug: z.string(),
	eyecatch: eyecatchSchema.optional(),
})

export const slugEntrySchema = z.object({
	title: z.string(),
	slug: z.string(),
})

export const microCmsListSchema = <T extends z.ZodTypeAny>(item: T) =>
	z.object({
		contents: z.array(item),
		totalCount: z.number().optional(),
		offset: z.number().optional(),
		limit: z.number().optional(),
	})
