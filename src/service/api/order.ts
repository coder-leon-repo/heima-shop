import type {
  OrderResult,
  SubmitOrderParams
} from '@/types/order'
import { http } from '../request'

// 获取用户预支付订单
export const getMerberOrederPre = () => {
  return http<OrderResult>({
    method: 'GET',
    url: '/member/order/pre'
  })
}

// 获取立即购买订单
export const getMerberOrederNow = (data: {
  skuId: string
  count: string
  addressId?: string
}) => {
  return http<OrderResult>({
    method: 'GET',
    url: '/member/order/pre/now',
    data
  })
}

/**
 * @desc:提交订单
 * @param {SubmitOrderParams} data
 * @return {id:string}
 */
export const postMemberOrder = (data: SubmitOrderParams) => {
  return http<{ id: string }>({
    method: 'POST',
    url: '/member/order',
    data
  })
}
