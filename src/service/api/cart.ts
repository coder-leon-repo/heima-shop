import type { CartItem } from '@/types/cart'
import { http } from '../request'

/**
 * @desc: 获取购物车列表
 * @return {*}
 */
export const getCartList = () => {
  return http<CartItem[]>({
    method: 'GET',
    url: '/member/cart'
  })
}

/**
 * @desc: 删除购物车单品
 * @param data ids SKUID集合
 * @return {*}
 */
export const deleteCartList = (data: { ids: string[] }) => {
  return http({
    method: 'DELETE',
    url: '/member/cart',
    data
  })
}

/**
 * @desc: 修改购物车单品
 * @param skuId
 * @param data sleected 选中状态 count 数量
 * @return {*}
 */
export const putMemberCartBySkuId = (
  skuId: string,
  data: {
    selected?: boolean
    count?: number
  }
) => {
  return http({
    method: 'PUT',
    url: `/member/cart/${skuId}`,
    data
  })
}

/**
 * @desc: 购物车全选/取消全选
 * @param data selected 全选状态
 * @return {*}
 */
export const putMemberCartSlecetdAll = (data: {
  selected: boolean
}) => {
  return http({
    method: 'PUT',
    url: '/member/cart/selected',
    data
  })
}
