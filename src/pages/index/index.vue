<template>
  <!-- 自定义导航条 -->
  <CustomNavbar></CustomNavbar>
  <!-- 通用轮播图 -->
  <scroll-view
    scroll-y
    @scrolltolower="onScrollToLower"
    refresher-enabled
    @refresherrefresh="onRefresh"
    :refresher-triggered="isTriggered"
  >
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
  getHomeBannerData,
  getHomeCategoryData,
  getHomeHotItemData
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

const fetchHomeBannerData = async () => {
  const { result } = await getHomeBannerData()
  homeBannerData.value = result
}

// 获取分类数据
const homeCategoryData = ref<CategoryItem[]>([])

const fetchHomeCategoryData = async () => {
  const { result } = await getHomeCategoryData()
  homeCategoryData.value = result
}

// 获取热门推荐数据
const homeHotData = ref<HotItem[]>([])

const fetchHomeHotData = async () => {
  const { result } = await getHomeHotItemData()
  homeHotData.value = result
}

const guessLikeRef = ref<XtxGuessInstance>()

// 监听滚动条到达底部 >下拉加载更多
const onScrollToLower = () => {
  guessLikeRef.value?.fetchGuessLikeData()
}

// 自定义下拉刷新 > 重新加载数据
const isTriggered = ref(false)

const onRefresh = async () => {
  isTriggered.value = true

  guessLikeRef.value?.resetGuessListData()
  
  await Promise.all([
    fetchHomeBannerData(),
    fetchHomeCategoryData(),
    fetchHomeHotData(),
  ])

  isTriggered.value = false
}

onLoad(() => {
  fetchHomeBannerData()
  fetchHomeCategoryData()
  fetchHomeHotData()
})
</script>

<style lang="scss">
page {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
