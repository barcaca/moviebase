import { BASE_URL, COMMON_HEADERS } from '@/constants/base'
import { ENDPOINTS } from '@/constants/endpoints'
import { RequestBuilder } from '@/types/http'
import type { Movie } from '@/types/movie'
import type { MediaItem, PaginatedResponse } from '@/types/tmdb'
import type { TvSeries } from '@/types/tvseries'
import { cache } from 'react'

async function fetchPopularMonth(): Promise<MediaItem[]> {
  const today = new Date()
  const firstDay = new Date(today.getFullYear(), today.getMonth(), 1)
    .toISOString()
    .split('T')[0]
  const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0)
    .toISOString()
    .split('T')[0]

  const commonParams = {
    include_adult: 'false',
    language: 'pt-BR',
    page: '1',
    sort_by: 'popularity.desc',
  }

  // 1. Filmes
  const paramsMovies = {
    ...commonParams,
    include_video: 'false',
    'primary_release_date.gte': firstDay,
    'primary_release_date.lte': lastDay,
  }
  const movieRequest = new RequestBuilder()
    .setURL(
      `${BASE_URL.REST}${ENDPOINTS.DISCOVER.MOVIE}?${new URLSearchParams(paramsMovies).toString()}`
    )
    .setMethod('GET')
    .addHeaders('accept', COMMON_HEADERS.accept)
    .addHeaders('Authorization', COMMON_HEADERS.Authorization)
    .build()

  // 2. Séries
  const paramsTv = {
    ...commonParams,
    include_null_first_air_dates: 'false',
    'air_date.gte': firstDay,
    'air_date.lte': lastDay,
  }
  const tvRequest = new RequestBuilder()
    .setURL(
      `${BASE_URL.REST}${ENDPOINTS.DISCOVER.TV}?${new URLSearchParams(paramsTv).toString()}`
    )
    .setMethod('GET')
    .addHeaders('accept', COMMON_HEADERS.accept)
    .addHeaders('Authorization', COMMON_HEADERS.Authorization)
    .build()

  const [moviesRes, tvRes] = await Promise.all([
    fetch(movieRequest.url, {
      method: movieRequest.method,
      headers: movieRequest.headers,
    }),
    fetch(tvRequest.url, {
      method: tvRequest.method,
      headers: tvRequest.headers,
    }),
  ])

  // Tratamento
  if (!moviesRes.ok || !tvRes.ok) {
    throw new Error(
      `Falha na requisição: ${moviesRes.status} | ${tvRes.status}`
    )
  }

  const [movies, tv] = await Promise.all([
    moviesRes.json() as Promise<PaginatedResponse<Movie>>,
    tvRes.json() as Promise<PaginatedResponse<TvSeries>>,
  ])

  // Processamento
  const popularMovies: Movie[] = movies.results
    .map(item => ({
      ...item,
      media_type: 'movie' as const,
    }))
    .slice(0, 8)
  const popularTv: TvSeries[] = tv.results
    .map(item => ({ ...item, media_type: 'tv' as const }))
    .slice(0, 8)

  return [...popularMovies, ...popularTv]
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 15)
}

export const getPopularMonth = cache(fetchPopularMonth)
