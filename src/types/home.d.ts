import type { GoodsItem } from "./global"

// 首页-广告区域
export type BannerItem = {
  hrefUrl: string
  id: string
  imgUrl: string
  type: number
}

// 首页-前台分类
export type CategoryItem = {
  icon: string
  id: string
  name: string
}

// 首页-热门推荐
export type HotItem = {
  id: string
  alt: string
  pictures: string[]
  target: string
  title: string
  type: number
}

export type GuessItem = GoodsItem
