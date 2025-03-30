import { BASE_URL, LANGUAGES, TIME_WINDOW } from '@/constants/base'
import { ENDPOINTS } from '@/constants/endpoints'
import { env } from '@/env'
import type { MediaItem, PaginatedResponse } from '@/types/tmdb'
import { cache } from 'react'

async function fetchTrending(): Promise<MediaItem[]> {
  const url = `${BASE_URL.REST}${ENDPOINTS.TRENDING.ALL}/${TIME_WINDOW.WEEK}${LANGUAGES.BR}`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${env.TMDBAPI_TOKEN}`,
    },
  }
  const res = await fetch(url, options)
  const data: PaginatedResponse<MediaItem> = await res.json()

  return data.results
}

export const getTrending = cache(fetchTrending)
