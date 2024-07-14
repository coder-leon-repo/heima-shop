<template>
  <view class="hot">
    <view
      class="hot-item"
      v-for="item in hotData"
      :key="item.id"
    >
      <view class="title">
        <text class="title-text">{{ item.title }}</text>
        <text class="title-desc">{{ item.alt }}</text>
      </view>
      <navigator
        class="goods"
        :url="`/pages/recommend/recommend?type=${item.type}`"
        hover-class="none"
      >
        <image
          class="goods-image"
          v-for="imgUrl in item.pictures"
          :key="imgUrl"
          :src="imgUrl"
        />
      </navigator>
    </view>
  </view>
</template>

<script setup lang="ts">
import type { HotItem } from '@/types/home'

defineProps<{
  hotData: HotItem[]
}>()
</script>

<style lang="scss" scoped>
.hot {
  display: flex;
  flex-wrap: wrap;
  border-radius: 10rpx;
  margin: 5rpx 10rpx;
  background-color: #fff;
  // 商品项
  .hot-item {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 252rpx;
    border-top: 1px solid #eee;
    border-right: 1px solid #eee;

    // 第1～2个子元素
    &:nth-child(-n + 2) {
      border-top: 0 none;
    }

    // 所有偶数序号的子元素
    &:nth-child(2n) {
      border-right: 0 none;
    }

    // 标题
    .title {
      display: flex;
      padding: 20rpx 20rpx 0;
      justify-content: start;
      align-items: center;

      .title-text {
        font-size: 32rpx;
        color: #262626;
      }

      .title-desc {
        font-size: 26rpx;
        color: #7f7f7f;
        margin-left: 28rpx;
      }
    }
    // 图片
    .goods {
      flex-grow: 1;
      display: flex;
      justify-content: space-around;
      align-items: center;

      .goods-image {
        width: 150rpx;
        height: 150rpx;
      }
    }
  }
}
</style>
