import type {
  OrderDetailResult,
  OrderPreResult,
  SubmitOrderParams
} from '@/types/order'
import { http } from '../request'

// 获取用户预支付订单
export const getMerberOrederPre = () => {
  return http<OrderPreResult>({
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
  return http<OrderPreResult>({
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

// 获取订单详情
export const getMemberOrderById = (id: string) => {
  return http<OrderDetailResult>({
    method: 'GET',
    url: `/member/order/${id}`
  })
}

/**
 * @desc:再次购买商品
 * @param {string} id 订单ID
 * @return {OrderPreResult}
 */
export const getMemberOrderRepurchaseById = (id: string) => {
  return http<OrderPreResult>({
    method: 'GET',
    url: `/member/order/repurchase${id}`
  })
}
