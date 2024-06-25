<template>
  <!-- 自定义导航条 -->
  <CustomNavbar></CustomNavbar>
  <!-- 通用轮播图 -->
  <scroll-view scroll-y @scrolltolower="onScrollToLower">
    <XtxSwiper :carousel-data="homeBannerData"></XtxSwiper>
    <!-- 分类面板 -->
    <CategoryPanel
      :category-data="homeCategoryData"
    ></CategoryPanel>
    <!-- 热门推荐 -->
    <HotPanel :hot-data="homeHotData"></HotPanel>
    <!-- 猜你喜欢 -->
    <XtxGuess ref="guessLikeRef"></XtxGuess>
  </scroll-view>
</template>

<script setup lang="ts">
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import {
  getHomeBanner,
  getHomeCategory,
  getHomeHotItem
} from '@/service'
import type {
  BannerItem,
  CategoryItem,
  HotItem
} from '@/types/home'
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import type { XtxGuessInstance } from '@/types/component'

// 获取轮播图数据
const homeBannerData = ref<BannerItem[]>([])

const fetchHomeBanner = async () => {
  const { result } = await getHomeBanner()
  homeBannerData.value = result
}

// 获取分类数据
const homeCategoryData = ref<CategoryItem[]>([])

const fetchHomeCategory = async () => {
  const { result } = await getHomeCategory()
  homeCategoryData.value = result
}

// 获取热门推荐数据
const homeHotData = ref<HotItem[]>([])

const fetchHomeHot = async () => {
  const { result } = await getHomeHotItem()
  homeHotData.value = result
}

const guessLikeRef = ref<XtxGuessInstance>()

// 监听滚动条到达底部
const onScrollToLower = () => {
  guessLikeRef.value?.fetchGuessLikeData()
}

onLoad(() => {
  fetchHomeBanner()
  fetchHomeCategory()
  fetchHomeHot()
})
</script>

<style lang="scss">
page {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
