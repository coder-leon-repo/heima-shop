import type { GoodsItem } from './global'

export type CategoryTopItem = {
  id: string
  name: string
  picture: string
  imageBanners: any[]
  children: CategoryChildItem[]
}

export type CategoryChildItem = {
  id: string
  name: string
  picture: string
  parentId: any
  parentName: any
  categories: any
  brands: any
  saleProperties: any
  goods: GoodsItem[]
}
