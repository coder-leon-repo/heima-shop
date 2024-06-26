import type { PageArgs, PageResult } from '@/types/global'
import { http } from '../request'
import type {
  BannerItem,
  CategoryItem,
  GuessItem,
  HotItem
} from '@/types/home'

// 首页-轮播图
export const getHomeBannerData = (distributionSite = 1) => {
  return http<BannerItem[]>({
    url: '/home/banner',
    method: 'GET',
    data: {
      distributionSite
    }
  })
}

// 首页-分类信息
export const getHomeCategoryData = () => {
  return http<CategoryItem[]>({
    url: '/home/category/mutli',
    method: 'GET'
  })
}

// 首页-热门推荐
export const getHomeHotItemData = () => {
  return http<HotItem[]>({
    url: '/home/hot/mutli',
    method: 'GET'
  })
}

// 猜你喜欢
export const getGuessLikeData = (data?: PageArgs) => {
  return http<PageResult<GuessItem>>({
    url: '/home/goods/guessLike',
    method: 'GET',
    data
  })
}
