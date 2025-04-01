import { BASE_URL, COMMON_HEADERS } from '@/constants/base'
import { ENDPOINTS } from '@/constants/endpoints'
import { RequestBuilder } from '@/types/http'
import type { PaginatedResponse } from '@/types/tmdb'
import type { TvSeries } from '@/types/tvseries'
import { cache } from 'react'

const paramsTvSeries = {
  language: 'pt-BR',
  page: '1',
  timezone: 'BR',
}

async function fetchAiringToday(): Promise<TvSeries[]> {
  const tvRequest = new RequestBuilder()
    .setURL(
      `${BASE_URL.REST}${ENDPOINTS.TV.AIRING_TODAY}?${new URLSearchParams(paramsTvSeries).toString()}`
    )
    .setMethod('GET')
    .addHeaders('accept', COMMON_HEADERS.accept)
    .addHeaders('Authorization', COMMON_HEADERS.Authorization)
    .build()

  const tvRes = await fetch(tvRequest.url, {
    method: tvRequest.method,
    headers: tvRequest.headers,
  })

  if (!tvRes.ok) {
    throw new Error(`Falha na requisição: ${tvRes.status}`)
  }
  const tvData: PaginatedResponse<TvSeries> = await tvRes.json()

  const airingToday = tvData.results
    .map(tv => ({
      ...tv,
      media_type: 'tv' as const,
    }))
    .sort((a, b) => a.popularity - b.popularity)

  return airingToday
}

export const getAiringToday = cache(fetchAiringToday)

async function fetchPopularTvSeries(): Promise<TvSeries[]> {
  const tvRequest = new RequestBuilder()
    .setURL(
      `${BASE_URL.REST}${ENDPOINTS.TV.POPULAR}?${new URLSearchParams(paramsTvSeries).toString()}`
    )
    .setMethod('GET')
    .addHeaders('accept', COMMON_HEADERS.accept)
    .addHeaders('Authorization', COMMON_HEADERS.Authorization)
    .build()

  const tvRes = await fetch(tvRequest.url, {
    method: tvRequest.method,
    headers: tvRequest.headers,
  })

  if (!tvRes.ok) {
    throw new Error(`Falha na requisição: ${tvRes.status}`)
  }
  const tvData: PaginatedResponse<TvSeries> = await tvRes.json()

  return tvData.results.map(tv => ({
    ...tv,
    media_type: 'tv' as const,
  }))
}

export const getPopularTvSeries = cache(fetchPopularTvSeries)

async function fetchTopTvSeries(): Promise<TvSeries[]> {
  const tvRequest = new RequestBuilder()
    .setURL(
      `${BASE_URL.REST}${ENDPOINTS.TV.TOP_RATED}?${new URLSearchParams(paramsTvSeries).toString()}`
    )
    .setMethod('GET')
    .addHeaders('accept', COMMON_HEADERS.accept)
    .addHeaders('Authorization', COMMON_HEADERS.Authorization)
    .build()

  const tvRes = await fetch(tvRequest.url, {
    method: tvRequest.method,
    headers: tvRequest.headers,
  })

  if (!tvRes.ok) {
    throw new Error(`Falha na requisição: ${tvRes.status}`)
  }
  const tvData: PaginatedResponse<TvSeries> = await tvRes.json()

  return tvData.results.map(tv => ({
    ...tv,
    media_type: 'tv' as const,
  }))
}

export const getTopTvSeries = cache(fetchTopTvSeries)

async function fetchUpcomingTvSeries(): Promise<TvSeries[]> {
  const tvRequest = new RequestBuilder()
    .setURL(
      `${BASE_URL.REST}${ENDPOINTS.TV.ON_THE_AIR}?${new URLSearchParams(paramsTvSeries).toString()}`
    )
    .setMethod('GET')
    .addHeaders('accept', COMMON_HEADERS.accept)
    .addHeaders('Authorization', COMMON_HEADERS.Authorization)
    .build()

  const tvRes = await fetch(tvRequest.url, {
    method: tvRequest.method,
    headers: tvRequest.headers,
  })

  if (!tvRes.ok) {
    throw new Error(`Falha na requisição: ${tvRes.status}`)
  }
  const tvData: PaginatedResponse<TvSeries> = await tvRes.json()

  return tvData.results.map(tv => ({
    ...tv,
    media_type: 'tv' as const,
  }))
}

export const getUpcomingTvSeries = cache(fetchUpcomingTvSeries)
