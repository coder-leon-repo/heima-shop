<template>
  <view class="swiper-container" style="height: 280rpx">
    <swiper
      :interval="3000"
      :autoplay="false"
      :circular="true"
      @change="onSlideChange"
    >
      <swiper-item v-for="item in swiperData" :key="item.id">
        <navigator
          class="swiper-item"
          hover-class="none"
          :url="`/pages/goods/goods?id=${item.id}`"
        >
          <image
            mode="aspectFill"
            class="swiper-image"
            :src="item.imgUrl"
          ></image>
        </navigator>
      </swiper-item>
    </swiper>
    <!-- 自定义指示点 -->
    <view class="indicator">
      <text
        class="dot"
        v-for="(item, index) in swiperData?.length"
        :key="item"
        :class="{ active: active === index }"
      >
      </text>
    </view>
  </view>
</template>

<script setup lang="ts">
import type { BannerItem } from '@/types/home'
import { ref } from 'vue'

defineProps<{
  swiperData: BannerItem[]
}>()

// 当前轮播图下标
const active = ref(0)

// 监听轮播图切换
const onSlideChange: UniHelper.SwiperOnChange = e => {
  active.value = e.detail.current
}
</script>

<style lang="scss" scoped>
.swiper-container {
  position: relative;
  overflow: hidden;

  .indicator {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 16rpx;
    display: flex;
    justify-content: center;

    .dot {
      width: 30rpx;
      height: 8rpx;
      margin: 0 8rpx;
      border-radius: 6rpx;
      background-color: rgba(255, 255, 2555, 0.5);
    }

    .active {
      background-color: #fff;
    }
  }
}

.swiper-item {
  width: 100%;
  height: 100%;
}

.swiper-image {
  width: 100%;
  height: 100%;
}
</style>
