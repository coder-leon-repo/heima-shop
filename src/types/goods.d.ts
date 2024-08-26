import type { GoodsItem } from './global'

// 商品详情类型
export type GoodsResult = {
  specs: SpecsItem[]
  skus: SkusItem[]
  categories: CategoriesItem[]
  details: Details
  similarProducts: GoodsItem[]
  hotByDay: HotByDayItem[]
  evaluationInfo: EvaluationInfoItem
  userAddresses: AddressItem[]
  mainPictures: string[]
  id: string
  name: string
  spuCode: string
  desc: any
  price: string
  oldPrice: string
  discount: number
  inventory: number
  brand: any
  salesCount: number
  commentCount: number
  collectCount: number
  mainVideos: any[]
  videoScale: number

  isPreSale: boolean
  isCollect: any
  recommends: any
}

export type SpecsItem = {
  name: string
  id: string
  values: SpacesValueItem[]
}

export type SpacesValueItem = {
  name: string
  picture?: string
  desc: string
}

export type SkusItem = {
  id: string
  skuCode: string
  price: string
  oldPrice: string
  inventory: number
  picture: string
  specs: SkusSpecsItem[]
}

export type SkusSpecsItem = {
  name: string
  valueName: string
}

export type CategoriesItem = {
  id: string
  name: string
  layer: number
  parent?: {
    id: string
    name: string
    layer: number
    parent: any
  }
}

export type Details = {
  pictures: any[]
  properties: DetailsPropertiesItem[]
}

export type DetailsPropertiesItem = {
  name: string
  value: string
}

export type HotByDayItem = {
  id: string
  name: string
  desc: string
  price: string
  picture: string
  orderNum: number
}

export type EvaluationInfoItem = {
  id: string
  orderInfo: {
    specs: any[]
    quantity: number
    createTime: any
  }
  member: any
  score: number
  tags: any
  content: string
  pictures: any
  officialReply: any
  praiseCount: number
  createTime: string
  praisePercent: number
}

export type AddressItem = {
  receiver: string
  contact: string
  provinceCode: string
  cityCode: string
  countyCode: string
  address: string
  isDefault: number
  id: string
  fullLocation: string
}
