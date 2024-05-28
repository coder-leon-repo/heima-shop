<template>
  <view class="index">
    <!-- 自定义导航条 -->
    <CustomNavbar></CustomNavbar>
    <!-- 通用轮播图 -->
    <XtxSwiper :swiper-data="homeBannerData"></XtxSwiper>
  </view>
</template>

<script setup lang="ts">
import CustomNavbar from '@/components/CustomNavbar.vue'
import { getHomeBanner } from '@/service'
import type { BannerItem } from '@/types/home'
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'

const homeBannerData = ref<BannerItem[]>([])

async function fetchHomeBanner() {
  const res = await getHomeBanner()
  homeBannerData.value = res.result
  console.log(res.result)
}

onLoad(() => {
  fetchHomeBanner()
})
</script>

<style lang="scss" scoped>
//
</style>
