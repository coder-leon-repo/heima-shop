import type {
  GoodsItem,
  PageArgs,
  PageResult
} from './global'

// 热门推荐请求参数类型
export type HotArgs = { subType?: string } & PageArgs

// 热门推荐Map类型
export type HotRecommedMap = {
  type: string
  title: string
  url: string
}

// 热门推荐返回结果
export type HotResult = {
  id: string
  bannerPicture: string
  subTypes: subTypeItem[]
  title: string
}

export type subTypeItem = {
  id: string
  title: string
  goodsItems: PageResult<GoodsItem>
}
