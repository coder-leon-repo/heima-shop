import { http } from '../request'
import type {
  BannerItem,
  CategoryItem,
  HotItem
} from '@/types/home'

// 首页轮播图
export const getHomeBanner = (distributionSite = 1) => {
  return http<BannerItem[]>({
    url: '/home/banner',
    method: 'GET',
    data: {
      distributionSite
    }
  })
}

// 首页分类
export const getHomeCategory = () => {
  return http<CategoryItem[]>({
    url: '/home/category/mutli',
    method: 'GET'
  })
}

// 首页热门推荐
export const getHomeHotItem = () => {
  return http<HotItem[]>({
    url: '/home/hot/mutli',
    method: 'GET'
  })
}
