<template>
  <view class="guess-wrapper">
    <view class="title-container">
      <text class="text">猜你喜欢</text>
    </view>
    <view class="guess-content">
      <navigator
        class="guess-item"
        url="/pages/index/index"
        v-for="item in guessListData"
        :key="item.id"
      >
        <image
          class="image"
          :src="item.picture"
          mode="aspectFill"
        />
        <view class="name">
          {{ item.name }}
        </view>
        <view class="price">
          <text class="symbol">¥</text>
          <text class="num">{{ item.price }}</text>
        </view>
      </navigator>
    </view>
  </view>
  <view class="loading-text">
    {{
      isLoadingFinished ? '没有更多数据～' : '加载更多...'
    }}
  </view>
</template>

<script setup lang="ts">
import { getGuessLikeData } from '@/service'
import type { PageArgs } from '@/types/global'
import type { GuessItem } from '@/types/home'
import { onMounted, reactive, ref } from 'vue'

const guessListData = ref<GuessItem[]>([])

// 标记下拉数据是否请求完成
const isLoadingFinished = ref(false)

const pagination = reactive<Required<PageArgs>>({
  page: 1,
  pageSize: 10
})

// 请求分页数据
const fetchGuessLikeData = async () => {
  if (isLoadingFinished.value === true) return

  const res = await getGuessLikeData(pagination)
  const pages = res.result.pages
  guessListData.value.push(...res.result.items)

  // 分页条件
  if (pagination.page < pages) {
    pagination.page++
  } else {
    isLoadingFinished.value = true
  }
}

// 重置数据
const resetGuessListData = () => {
  guessListData.value = []
  pagination.page = 1
  isLoadingFinished.value = false
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
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
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
