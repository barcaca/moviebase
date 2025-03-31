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
  MOVIE: '/movie',
  TV: '/tv',
} as const
