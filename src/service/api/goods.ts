import type { AddCarParams, GoodsResult } from '@/types/goods'
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

export const postMemberCar = (data: AddCarParams) => {
  return http({
    method: 'POST',
    url: '/member/cart',
    data
  })
}
