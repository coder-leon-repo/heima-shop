/**
 * 获取设备的安全区域信息，并返回一个对象，包含顶部和底部安全区域的内边距
 * @returns {Object} 包含 paddingTop 和 paddingBottom 属性的对象
 */
export function useSafeArea() {
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
