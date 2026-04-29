import { z } from 'zod'

const envSchema = z.object({
	SERVICE_DOMAIN: z.string().min(1, 'SERVICE_DOMAIN is not configured'),
	API_KEY: z.string().min(1, 'API_KEY is not configured'),
})

export type Env = z.infer<typeof envSchema>

export function loadEnv(): Env {
	const result = envSchema.safeParse({
		SERVICE_DOMAIN: process.env.SERVICE_DOMAIN,
		API_KEY: process.env.API_KEY,
	})

	if (!result.success) {
		const issues = result.error.issues
			.map((issue) => `${issue.path.join('.')}: ${issue.message}`)
			.join(', ')
		throw new Error(`Invalid environment variables — ${issues}`)
	}

	return result.data
}
