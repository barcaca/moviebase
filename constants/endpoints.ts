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
  MOVIE: {
    NOW_PLAYING: '/movie/now_playing',
    POPULAR: '/movie/popular',
    TOP_RATED: '/movie/top_rated',
    UPCOMING: '/movie/upcoming',
  },
  TV: {
    AIRING_TODAY: '/tv/airing_today',
    ON_THE_AIR: '/tv/on_the_air',
    POPULAR: '/tv/popular',
    TOP_RATED: '/tv/top_rated',
  },
} as const
