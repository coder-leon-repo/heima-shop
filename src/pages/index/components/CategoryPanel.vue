<template>
  <view class="category-container">
    <navigator
      class="category-item"
      url="/pages/index/index"
      hover-class="none"
      v-for="item in categoryData"
      :key="item.id"
    >
      <image class="icon" :src="item.icon" />
      <text class="text">{{ item.name }}</text>
    </navigator>
  </view>
</template>

<script setup lang="ts">
import type { CategoryItem } from '@/types/home'

defineProps<{
  categoryData: CategoryItem[]
}>()
</script>

<style lang="scss" scoped>
.category-container {
  display: flex;
  flex-wrap: wrap;
  padding: 20rpx 0;
  height: 328rpx;

  .category-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 150rpx;

    .icon {
      width: 100rpx;
      height: 100rpx;
    }

    .text {
      font-size: 26rpx;
      color: #666;
    }
  }
}
</style>
