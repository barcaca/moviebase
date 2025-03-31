/* Endpoints of the TMDB API */
export const ENDPOINTS = {
  TRENDING: {
    ALL: '/trending/all',
    MOVIE: '/trending/movie',
    TV: '/trending/tv',
  },
  DISCOVER: {
    MOVIE: '/discover/movie',
    TV: '/discover/tv',
  },
} as const
