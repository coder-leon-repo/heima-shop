import type { HotRecommedMap } from '@/types/recommend'

// 开发环境
export const IDEV = import.meta.env.DEV

// 热门推荐数据
export const HOT_RECOMMEND: HotRecommedMap[] = [
  { type: '1', title: '特惠推荐', url: '/hot/preference' },
  { type: '2', title: '爆款推荐', url: '/hot/inVogue' },
  { type: '3', title: '一站买全', url: '/hot/oneStop' },
  { type: '4', title: '新鲜好物', url: '/hot/new' }
]

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
