// 订单状态列表
export const ORDER_STATE_LIST = [
  { id: 0, text: '' },
  { id: 1, text: '待付款' },
  { id: 2, text: '待发货' },
  { id: 3, text: '待收货' },
  { id: 4, text: '待评价' },
  { id: 5, text: '已完成' },
  { id: 6, text: '已取消' }
]

// 枚举订单状态
export enum IOrderStatus {
  pendingPayment = 1,
  pendingShipment = 2,
  pendingReceipt = 3,
  pendingReviews = 4,
  completedOrder = 5,
  canceledOrder = 6
}
