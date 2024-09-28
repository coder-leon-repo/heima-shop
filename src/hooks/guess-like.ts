import type { XtxGuessInstance } from '@/types/component'
import { ref } from 'vue'

/**
 * @desc: 猜你喜欢-下载加载更多
 * @return {guessLikeRef,onScrollToLower}
 */
export function useGuessLike() {
  // 猜你喜欢组件实例
  const guessLikeRef = ref<XtxGuessInstance>()

  // 监听滚动条到达底部 >下拉加载更多
  const onScrollToLower = () => {
    guessLikeRef.value?.fetchGuessLikeData()
  }

  return {
    guessLikeRef,
    onScrollToLower
  }
}
