import {
  BASE_URL,
  COMMON_HEADERS,
  LANGUAGES,
  TIME_WINDOW,
} from '@/constants/base'
import { ENDPOINTS } from '@/constants/endpoints'
import { RequestBuilder } from '@/types/http'
import type { MediaItem, PaginatedResponse } from '@/types/tmdb'
import { cache } from 'react'

async function fetchTrending(): Promise<MediaItem[]> {
  const request = new RequestBuilder()
    .setURL(
      `${BASE_URL.REST}${ENDPOINTS.TRENDING.ALL}/${TIME_WINDOW.WEEK}${LANGUAGES.BR}`
    )
    .setMethod('GET')
    .addHeaders('accept', COMMON_HEADERS.accept)
    .addHeaders('Authorization', COMMON_HEADERS.Authorization)
    .build()

  const res = await fetch(request.url, {
    method: request.method,
    headers: request.headers,
  })

  if (!res.ok) {
    throw new Error(`Falha ao buscar trending: ${res.status}`)
  }
  const data: PaginatedResponse<MediaItem> = await res.json()

  return data.results
}

export const getTrending = cache(fetchTrending)
