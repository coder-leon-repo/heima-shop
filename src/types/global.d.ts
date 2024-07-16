// 通用分页类型
export type PageResult<T> = {
  counts: number
  items: T[]
  page: number
  pageSize: number
  pages: number
}

// 通用商品类型
export type GoodsItem = {
  desc: string
  discount: number
  id: string
  name: string
  orderNum: number
  picture: string
  price: number
}

// 通用分页参数类型
export type PageArgs = {
  page?: number
  pageSize?: number
}
