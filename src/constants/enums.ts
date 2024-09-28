// 支付渠道：支付渠道，1支付宝、2微信--支付方式为在线支付时，传值，为货到付款时，不传值
export enum IPayChannel {
  Alipay = 1,
  WeChatPay = 2
}

//支付方式：1为在线支付，2为货到付款
export enum IPayType {
  onlinePayment = 1,
  cashOnDelivery = 2
}

// 订单状态枚举
export enum IOrderStatus {
  pendingPayment = 1,
  pendingShipment = 2,
  pendingReceipt = 3,
  pendingReviews = 4,
  completedTasks = 5,
  canceledTasks = 6
}
