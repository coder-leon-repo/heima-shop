<template>
  <view class="wrapper">
    <!-- 搜索框 -->
    <view class="search">
      <view class="input">
        <text class="icon-search">女靴</text>
      </view>
    </view>
    <!-- 分类 -->
    <view class="categories">
      <!-- 一级分类 -->
      <scroll-view class="primary" scroll-y>
        <view
          class="item"
          v-for="(item, index) in 10"
          :key="item"
          :class="{ active: index === active }"
          @tap="active = index"
        >
          <text class="name">居家</text>
        </view>
      </scroll-view>
      <!-- 二级分类 -->
      <scroll-view class="secondary" scroll-y> </scroll-view>
    </view>
  </view>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const active = ref(0)
</script>

<style lang="scss">
page {
  height: 100%;
  overflow: hidden;
}

.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.search {
  padding: 0 30rpx 20rpx;
  background-color: #fff;

  .input {
    display: flex;
    align-items: center;
    height: 64rpx;
    border-radius: 26rpx;
    font-size: 32rpx;
    color: #8b8b8b;
    background-color: #f3f4f4;
    padding-left: 26rpx;
  }
}

.icon-search {
  &::before {
    margin-right: 10rpx;
  }
}

.categories {
  flex: 1;
  display: flex;
  min-height: 400rpx;
}

.primary {
  width: 180rpx;
  background-color: #f6f6f6;
  flex: none;

  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 96rpx;
    font-size: 26rpx;
    color: #595c63;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      left: 42rpx;
      bottom: 0;
      width: 96rpx;
      border-top: 1rpx solid #e3e4e7;
    }
  }

  .active {
    background-color: #fff;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 8rpx;
      height: 100%;
      background-color: #27ba9b;
    }
  }
}

.primary .item:last-child::after {
  display: none;
}
</style>
