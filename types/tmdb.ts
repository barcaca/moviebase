import type { Movie } from './movie'
import type { TvSeries } from './tvseries'

export type MediaItem = Movie | TvSeries

export interface PaginatedResponse<T> {
  page: number
  results: T[]
  total_pages: number
  total_results: number
}

export interface CommonMedia {
  id: number
  backdrop_path: string
  overview: string
  poster_path: string
  adult: boolean
  original_language: string
  genre_ids: number[]
  popularity: number
  vote_average: number
  vote_count: number
}

export interface DiscoverParams {
  includeAdult: boolean
  includeVideo: boolean
  includeFirstAir?: boolean
  language: string
  page: number
  releaseDateGte: string
  releaseDateLte: string
  sortBy: string
}
