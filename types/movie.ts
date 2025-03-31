import type { CommonMedia } from './tmdb'

// Tipo específico para filmes
export interface Movie extends CommonMedia {
  title: string
  original_title: string
  media_type: 'movie' | 'tv'
  release_date: string
  video: boolean
}
