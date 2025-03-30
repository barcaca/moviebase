import { z } from 'zod'

const envSchema = z.object({
  TMDBAPI_TOKEN: z.string(),
  TMDBAPI_KEY: z.string(),
})

export const env = envSchema.parse(process.env)
