import type {
  OrderDetailResult,
  OrderListParams,
  OrderListResult,
  OrderLogisticResult,
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

/**
 * @desc:获取订单详情
 * @param {string} id 订单ID
 * @return {*}
 */
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

/**
 * @desc: 模拟发货，订单状态为待发货时，可模拟发货。
 * @param {string} id 订单id
 * @return {*}
 */
export const getMemberOrderConsignmentById = (id: string) => {
  return http<{ msg: string }>({
    method: 'GET',
    url: `/member/order/consignment/${id}`
  })
}

/**
 * @desc:获取订单物流信息
 * @param {string} id
 * @return {*}
 */
export const getMemberOrderLogisticsById = (id: string) => {
  return http({
    method: 'GET',
    url: `/member/order/${id}/logistics`
  })
}

/**
 * @desc:确认收货
 * @param {string} id 订单id
 * @return {OrderDetailResult}
 */
export const putMemberReceiptByid = (id: string) => {
  return http<OrderDetailResult>({
    method: 'PUT',
    url: `/member/order/${id}/receipt`
  })
}

/**
 * @desc:获取订单物流信息
 * @param {string} id 订单id
 * @return {OrderLogisticResult}
 */
export const getMemberOrderLogistics = (id: string) => {
  return http<OrderLogisticResult>({
    method: 'GET',
    url: ` member/order/${id}/logistics`
  })
}

/**
 * @desc:取消订单
 * @param {id} string 订单id
 * @param {data} {cancelReason: string} 取消原因
 * @return {*}
 */
export const putMemberCancelOrder = (
  id: string,
  data: {
    cancelReason?: string
  }
) => {
  return http<OrderDetailResult>({
    method: 'PUT',
    url: `/member/order/${id}/cancel`,
    data
  })
}

/**
 * @desc:删除订单
 * @param data ids 订单集合
 * @return {msg:string}
 */
export const deleteMemberOrderById = (data: {
  ids: string[]
}) => {
  return http<{ msg: string }>({
    method: 'DELETE',
    url: '/member/order',
    data
  })
}

// 获取订单列表
export const getMemberOrderList = (data: OrderListParams) => {
  return http<OrderListResult>({
    method: 'GET',
    url: '/member/order',
    data
  })
}
