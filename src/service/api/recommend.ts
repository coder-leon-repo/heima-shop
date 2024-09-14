import type { HotArgs, HotResult } from '@/types/recommend'
import { http } from '../request'

export const getHotRecommendData = (
  url: string,
  data?: HotArgs
) => {
  return http<HotResult>({
    method: 'GET',
    url,
    data
  })
}
