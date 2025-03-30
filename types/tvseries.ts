import type { CommonMedia } from './tmdb'

// Tipo específico para séries
export interface TvSeries extends CommonMedia {
  name: string
  original_name: string
  media_type: 'tv'
  first_air_date: string
  origin_country: string[]
}
