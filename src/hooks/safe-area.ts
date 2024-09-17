/**
 * @desc: 获取安全区域
 * @return {*}
 * 示例:
 *  <view :style="paddingTop"></view>
 *  const { paddingTop } = useSafeArea()
 */
export function useSafeArea(): any {
  const { safeAreaInsets } = uni.getSystemInfoSync()

  const paddingTop = { paddingTop: safeAreaInsets?.top + 'px' }

  const paddingBottom = {
    paddingBottom: safeAreaInsets?.bottom + 'px'
  }

  return {
    paddingTop,
    paddingBottom
  }
}
