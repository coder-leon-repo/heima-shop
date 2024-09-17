import type { XtxGuessInstance } from '@/types/component'
import { ref } from 'vue'

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
