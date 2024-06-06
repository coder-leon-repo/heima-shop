<template>
  <view class="index">
    <!-- 自定义导航条 -->
    <CustomNavbar></CustomNavbar>
    <!-- 通用轮播图 -->
    <XtxSwiper :carousel-data="homeBannerData"></XtxSwiper>
    <CategoryPanel
      :category-data="homeCategoryData"
    ></CategoryPanel>
    <HotPanel :hot-data="homeHotData"></HotPanel>
  </view>
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

onLoad(() => {
  fetchHomeBanner()
  fetchHomeCategory()
  fetchHomeHot()
})
</script>

<style lang="scss" scoped></style>
