import { http } from '../request'
import type { BannerItem } from '@/types/home'
export function getHomeBanner(distributionSite = 1) {
  return http<BannerItem[]>({
    url: '/home/banner',
    method: 'GET',
    data: {
      distributionSite
    }
  })
}
