import type { OrderPreResult } from '@/types/order'
import { http } from '../request'

/**
 * @desc: 获取用户预支付订单
 * @return {*}
 */
export const getMerberOrederPre = () => {
  return http<OrderPreResult>({
    method: 'GET',
    url: '/member/order/pre'
  })
}
