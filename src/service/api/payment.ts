import { http } from '../request'

/**
 * @desc:模拟支付操作
 * @param {object} data
 * @return {*}
 */
export const getPayMentMock = (data: { orderId: string }) => {
  return http<{ msg: string }>({
    method: 'GET',
    url: '/pay/mock',
    data
  })
}
