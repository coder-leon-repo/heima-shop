import type { GoodsResult } from '@/types/goods'
import { http } from '../request'

export const getGoodsById = (id: string) => {
  return http<GoodsResult>({
    method: 'GET',
    url: '/goods',
    data: {
      id
    }
  })
}
