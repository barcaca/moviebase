import { BASE_URL, COMMON_HEADERS } from '@/constants/base'
import { ENDPOINTS } from '@/constants/endpoints'
import { RequestBuilder } from '@/types/http'
import type { Movie } from '@/types/movie'
import type { PaginatedResponse } from '@/types/tmdb'
import { cache } from 'react'

const paramsMovies = {
  language: 'pt-BR',
  page: '1',
  region: 'BR',
}

async function fetchTheatres(): Promise<Movie[]> {
  const movieRequest = new RequestBuilder()
    .setURL(
      `${BASE_URL.REST}${ENDPOINTS.MOVIE.NOW_PLAYING}?${new URLSearchParams(paramsMovies).toString()}`
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

async function fetchPopularMovies(): Promise<Movie[]> {
  const movieRequest = new RequestBuilder()
    .setURL(
      `${BASE_URL.REST}${ENDPOINTS.MOVIE.POPULAR}?${new URLSearchParams(paramsMovies).toString()}`
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

  return moviesData.results.map(movie => ({
    ...movie,
    media_type: 'movie' as const,
  }))
}

export const getPopularMovies = cache(fetchPopularMovies)

async function fetchTopMovies(): Promise<Movie[]> {
  const movieRequest = new RequestBuilder()
    .setURL(
      `${BASE_URL.REST}${ENDPOINTS.MOVIE.TOP_RATED}?${new URLSearchParams(paramsMovies).toString()}`
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

  return moviesData.results.map(movie => ({
    ...movie,
    media_type: 'movie' as const,
  }))
}

export const getTopMovies = cache(fetchTopMovies)

async function fetchUpcomingMovies(): Promise<Movie[]> {
  const movieRequest = new RequestBuilder()
    .setURL(
      `${BASE_URL.REST}${ENDPOINTS.MOVIE.UPCOMING}?${new URLSearchParams(paramsMovies).toString()}`
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

  return moviesData.results.map(movie => ({
    ...movie,
    media_type: 'movie' as const,
  }))
}

export const getUpcomingMovies = cache(fetchUpcomingMovies)
