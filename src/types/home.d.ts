/** 首页-广告区域*/
export type BannerItem = {
  /** 跳转链接 */
  hrefUrl: string
  /** id */
  id: string
  /** 图片链接 */
  imgUrl: string
  /** 跳转类型 */
  type: number
}

/** 首页-前台分类*/
export type CategoryItem = {
  /** 图标路径 */
  icon: string
  /** id */
  id: string
  /** 分类名称 */
  name: string
}

// 首页-热门推荐
export type HotItem = {
  // id
  id: string
  //推荐说明
  alt: string
  // 图片集合
  pictures: string[]
  // 跳转地址
  target: string
  // 推荐标题
  title: string
  // 推荐类型
  type: number
}
