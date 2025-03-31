import { BASE_URL, COMMON_HEADERS } from '@/constants/base'
import { ENDPOINTS } from '@/constants/endpoints'
import { RequestBuilder } from '@/types/http'
import type { Movie } from '@/types/movie'
import type { PaginatedResponse } from '@/types/tmdb'
import { cache } from 'react'

async function fetchTheatres(): Promise<Movie[]> {
  const paramsMovies = {
    language: 'pt-BR',
    page: '1',
  }

  const movieRequest = new RequestBuilder()
    .setURL(
      `${BASE_URL.REST}${ENDPOINTS.MOVIE}/now_playing?${new URLSearchParams(paramsMovies).toString()}`
    )
    .setMethod('GET')
    .addHeaders('accept', COMMON_HEADERS.accept)
    .addHeaders('Authorization', COMMON_HEADERS.Authorization)
    .build()

  const moviesRes = await fetch(movieRequest.url, {
    method: movieRequest.method,
    headers: movieRequest.headers,
  })

  if (!moviesRes.ok) {
    throw new Error(`Falha na requisição: ${moviesRes.status}`)
  }
  const moviesData: PaginatedResponse<Movie> = await moviesRes.json()

  const theatres = moviesData.results
    .map(movie => ({
      ...movie,
      media_type: 'movie' as const,
    }))
    .sort((a, b) => b.release_date.localeCompare(a.release_date))

  return theatres
}

export const getTheatres = cache(fetchTheatres)
