<template>
  <view class="wrapper" v-if="isShow">
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
          v-for="(item, index) in categoryListData"
          :key="item.id"
          :class="{ active: index === active }"
          @tap="active = index"
        >
          <text class="name">{{ item.name }}</text>
        </view>
      </scroll-view>
      <!-- 二级分类 -->
      <scroll-view class="secondary" scroll-y>
        <view class="carousel">
          <XtxSwiper :swiper-data="bannerList"></XtxSwiper>
        </view>
        <view
          class="section"
          v-for="item in categorySubListData"
          :key="item.id"
        >
          <view class="title-container">
            <view class="title-text">{{ item.name }}</view>
            <view class="more">更多</view>
          </view>
          <view class="product-container">
            <navigator
              class="product-item"
              v-for="goods in item.goods"
              :key="goods.id"
              :url="`/pages/goods/goods?id=${goods.id}`"
            >
              <image
                class="image"
                :src="goods.picture"
                :alt="goods.desc"
              />
              <h3 class="name ellipsis">
                {{ goods.name }}
              </h3>
              <view class="price">
                <text class="symbol">¥</text>
                <text class="num">{{ goods.price }}</text>
              </view>
            </navigator>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
  <PageSkeleton v-else></PageSkeleton>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { getCateoryTopData, getHomeBannerData } from '@/service'
import type { BannerItem } from '@/types/home'
import type {
  CategoryChildItem,
  CategoryTopItem
} from '@/types/category'
import PageSkeleton from './components/PageSkeleton.vue'

// 一级分类索引
const active = ref(0)

// 轮播图数据
const bannerList = ref<BannerItem[]>([])

// 获取轮播图数据
const fetchHomeBannerData = async () => {
  const res = await getHomeBannerData(2)
  bannerList.value = res.result
}

const categoryListData = ref<CategoryTopItem[]>([])

const categorySubListData = computed<CategoryChildItem[]>(() => {
  return categoryListData.value[active.value]?.children || []
})

const fetchCategoryTopData = async () => {
  const res = await getCateoryTopData()
  categoryListData.value = res.result
}

const isShow = ref(false)

onLoad(async () => {
  console.log(isShow.value)
  await Promise.all([
    fetchHomeBannerData(),
    fetchCategoryTopData()
  ])
  isShow.value = true
  console.log(isShow.value)
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
    &:nth-child(3n) {
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
