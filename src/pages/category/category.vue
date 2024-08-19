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
      <scroll-view class="secondary" scroll-y>
        <view class="carousel">
          <XtxSwiper :swiper-data="bannerList"></XtxSwiper>
        </view>
        <view
          class="section"
          v-for="(item, index) in 3"
          :key="index"
        >
          <view class="title-container">
            <view class="title-text">宠物用品</view>
            <view class="more">更多</view>
          </view>
          <view class="product-container">
            <navigator
              class="product-item"
              v-for="item in 4"
              :key="item"
              :url="`/pages/goods/goods?id=`"
            >
              <image
                class="image"
                src="https://yanxuan-item.nosdn.127.net/674ec7a88de58a026304983dd049ea69.jpg"
                alt=""
              />
              <h3 class="name ellipsis">
                木天蓼逗猫棍 木天蓼逗猫棍 木天蓼逗猫棍
              </h3>
              <view class="price">
                <text class="symbol">¥</text>
                <text class="num">99.90</text>
              </view>
            </navigator>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>
<script setup lang="ts">
import XtxSwiper from '@/components/XtxSwiper.vue'
import { getHomeBannerData } from '@/service'
import type { BannerItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'

import { ref } from 'vue'

// 一级分类索引
const active = ref(0)

// 轮播图数据
const bannerList = ref<BannerItem[]>([])

// 获取轮播图数据
const fetchHomeBannerData = async () => {
  const res = await getHomeBannerData(2)
  bannerList.value = res.result
}

onLoad(() => {
  fetchHomeBannerData()
})
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
  padding: 20rpx 30rpx 20rpx;
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

// 二级分类
.secondary {
  .carousel {
    padding: 10rpx 20rpx;
  }
  .section {
    margin: 0 20rpx;
    background-color: #fff;
  }
}

// 标题区域
.title-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60rpx;
  border-bottom: 1px solid #f7f7f8;
  .title-text {
    color: #333;
    font-size: 28rpx;
  }
  .more {
    color: #999;
    font-size: 24rpx;
    &::after {
      font-family: 'erabbit' !important;
      content: '\e6c2';
    }
  }
}

// 产品区域
.product-container {
  display: flex;
  flex-wrap: wrap;
  .product-item {
    margin: 20rpx 30rpx 20rpx 0;
    width: 150rpx;
    &:nth-child(3) {
      margin-right: 0;
    }
    .image {
      width: 150rpx;
      height: 150rpx;
    }
    .name {
      padding: 5rpx 0;
      font-size: 26rpx;
      color: #262626;
    }
    .price {
      padding-top: 5rpx;
      color: #cf4444;
      font-size: 26rpx;
      .symbol {
        font-size: 80%;
      }
      .num {
        padding-left: 3rpx;
      }
    }
  }
}
</style>
