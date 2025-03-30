/* Base Url of the TMDB API */

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
