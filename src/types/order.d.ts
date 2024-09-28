// 订单预支付返回结果
export type OrderPreResult = {
  /* 商品集合 */
  goods: OrderPreGoodsItem[]
  /* 结算信息 */
  summary: {
    /* 邮费 */
    postFee: number
    /* 商品总价 */
    totalPrice: number
    /* 应付金额 */
    totalPayPrice: number
  }
  /* 用户地址列表 */
  userAddresses: UserAddressItem[]
}

/**
 商品信息
 */
export type OrderPreGoodsItem = {
  /* 属性文字，例如“颜色:瓷白色 尺寸：8寸” */
  attrsText: string
  /* 数量 */
  count: number
  /* id */
  id: string
  /* 商品名称 */
  name: string
  /* 实付单价 */
  payPrice: number
  /* 图片 */
  picture: string
  /* 原单价 */
  price: number
  /* SKUID */
  skuId: string
  /* 实付价格小计 */
  totalPayPrice: number
  /* 小计总价 */
  totalPrice: number
}

/* 地址信息 */
export type UserAddressItem = {
  /* 详细地址
   */
  address: string
  /* 城市编码 */
  cityCode: string
  /* 联系方式 */
  contact: string
  /* 所在区/县编码 */
  countyCode: string
  /* 完整行政区 */
  fullLocation: string
  /* id */
  id: string
  /* 是否为默认，1为是，0为否 */
  isDefault: number
  /* 邮编 */
  postalCode: string
  /* 省份编码 */
  provinceCode: string
  /* 收货人 */
  receiver: string
}

// 提交订单参数
export type SubmitOrderParams = {
  /**
   * 所选地址Id
   */
  addressId: string
  /**
   * 买家留言
   */
  buyerMessage: string
  /**
   * 配送时间类型：1为不限，2为工作日，3为双休或假日
   */
  deliveryTimeType: number
  /**
   * 商品集合
   */
  goods: {
    /**
     * 数量
     */
    count: number
    /**
     * skuId
     */
    skuId: string
  }[]
  /**
   * 支付渠道
   */
  payChannel: number
  /**
   * 支付方式
   */
  payType: number
}

/** 订单详情 返回信息 */
export type OrderDetailResult = {
  /** 订单编号 */
  id: string
  /** 订单状态，1为待付款、2为待发货、3为待收货、4为待评价、5为已完成、6为已取消 */
  orderState: number
  /** 倒计时--剩余的秒数 -1 表示已经超时，正数表示倒计时未结束 */
  countdown: number
  /** 商品集合 [ 商品信息 ] */
  skus: OrderSkuItem[]
  /** 收货人 */
  receiverContact: string
  /** 收货人手机 */
  receiverMobile: string
  /** 收货人完整地址 */
  receiverAddress: string
  /** 下单时间 */
  createTime: string
  /** 商品总价 */
  totalMoney: number
  /** 运费 */
  postFee: number
  /** 应付金额 */
  payMoney: number
}

/** 商品信息 */
export type OrderSkuItem = {
  /** sku id */
  id: string
  /** 商品 id */
  spuId: string
  /** 商品名称 */
  name: string
  /** 商品属性文字 */
  attrsText: string
  /** 数量 */
  quantity: number
  /** 购买时单价 */
  curPrice: number
  /** 图片地址 */
  image: string
}
