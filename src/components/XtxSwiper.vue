<template>
  <view class="carousel-container">
    <swiper
      :interval="3000"
      :autoplay="false"
      :circular="true"
      @change="onSlideChange"
    >
      <swiper-item
        v-for="item in swiperData"
        :key="item.id"
      >
        <navigator
          url="/pages/index/index"
          hover-class="none"
          class="navigator"
        >
          <image
            mode="aspectFill"
            class="image"
            :src="item.imgUrl"
          ></image>
        </navigator>
      </swiper-item>
    </swiper>
    <!-- 自定义指示点 -->
    <view class="indicator-container">
      <text
        class="dot"
        v-for="(item, index) in swiperData.length"
        :key="index"
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

const active = ref<number>(0)

const onSlideChange: UniHelper.SwiperOnChange = (e) => {
  active.value = e.detail.current
}
</script>

<style lang="scss" scoped>
.carousel-container {
  position: relative;
  height: 280rpx;
  overflow: hidden;
  .navigator,
  .image {
    width: 100%;
    height: 100%;
  }
  .indicator-container {
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
</style>
