<template>
  <view class="guess-wrapper">
    <view class="title-container">
      <text class="text">猜你喜欢</text>
    </view>
    <view class="guess-content">
      <navigator
        class="guess-item"
        v-for="item in guessListData"
        :key="item.id"
        :url="`/pages/goods/goods?id=${item.id}`"
      >
        <image
          class="image"
          :src="item.picture"
          mode="aspectFill"
        />
        <view class="name ellipsis">
          {{ item.name }}
          {{ item.id }}
        </view>
        <view class="price">
          <text class="symbol">¥</text>
          <text class="num">{{ item.price }}</text>
        </view>
      </navigator>
    </view>
  </view>
  <view class="loading-text">
    {{ isFinish ? '没有更多数据～' : '加载更多...' }}
  </view>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { getGuessLikeData } from '@/service'
import type { PageArgs } from '@/types/global'
import type { GuessItem } from '@/types/home'

const guessListData = ref<GuessItem[]>([])

// 标记分页数据是否全部加载完成
const isFinish = ref(false)

const pagination = reactive<Required<PageArgs>>({
  page: 1,
  pageSize: 10
})

// 请求分页数据
const fetchGuessLikeData = async () => {
  if (isFinish.value === true) return

  const res = await getGuessLikeData(pagination)
  const pages = res.result.pages
  guessListData.value.push(...res.result.items)

  // 分页条件
  if (pagination.page < pages) {
    pagination.page++
  } else {
    isFinish.value = true
  }
}

// 重置数据
const resetGuessListData = () => {
  guessListData.value = []
  pagination.page = 1
  isFinish.value = false
}

onMounted(() => {
  fetchGuessLikeData()
})

defineExpose({
  fetchGuessLikeData,
  resetGuessListData
})
</script>

<style lang="scss" scoped>
.guess-wrapper {
  .title-container {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #262626;
    font-size: 32rpx;
    padding: 36rpx 0 40rpx;
    background-color: #f5f5f5;
  }

  .guess-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 20rpx;

    .guess-item {
      flex-basis: calc(50% - 10rpx);
      width: 345rpx;
      padding: 24rpx 20rpx 20rpx;
      margin-bottom: 20rpx;
      overflow: hidden;

      .image {
        width: 304rpx;
        height: 304rpx;
      }

      .name {
        height: 75rpx;
        padding: 5rpx 0;
        color: #262626;
        font-size: 26rpx;
      }

      .price {
        margin-top: 5rpx;
        color: #cf4444;
        font-size: 26rpx;

        .symbol {
          font-size: 80%;
        }

        .num {
          margin-left: 2rpx;
        }
      }
    }
  }
}

.loading-text {
  padding: 20rpx 0;
  font-size: 28rpx;
  color: #666;
  text-align: center;
}
</style>
