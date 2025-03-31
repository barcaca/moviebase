/* Base Url of the TMDB API */

import { env } from '@/env'

export const BASE_URL = {
  REST: 'https://api.themoviedb.org/3',
} as const

export const TIME_WINDOW = {
  DAY: 'day',
  WEEK: 'week',
} as const

export const LANGUAGES = {
  BR: '?language=pt-BR',
  EN: '?language=en-US',
} as const

export const DEFAULT_DISCOVER_PARAMS = {
  includeAdult: false,
  includeVideo: false,
  language: 'pt-BR',
  page: 1,
  sortBy: 'popularity.desc',
} as const

export const COMMON_HEADERS = {
  accept: 'application/json',
  Authorization: `Bearer ${env.TMDBAPI_TOKEN}`,
}
