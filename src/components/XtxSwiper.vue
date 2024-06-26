<template>
  <view class="swiper" style="height: 280rpx">
    <swiper
      :interval="3000"
      :autoplay="false"
      :circular="true"
      @change="onSlideChange"
    >
      <swiper-item
        v-for="item in carouselData"
        :key="item.id"
      >
        <navigator
          url="/pages/index/index"
          hover-class="none"
          class="swiper-item"
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
    <view class="indicator">
      <text
        class="dot"
        v-for="(item, index) in carouselData.length"
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
  carouselData: BannerItem[]
}>()

// 当前轮播图索引
const active = ref(0)

// 监听轮播图切换
const onSlideChange: UniHelper.SwiperOnChange = (e) => {
  active.value = e.detail.current
}
</script>

<style lang="scss" scoped>
.swiper {
  position: relative;
  overflow: hidden;

  .swiper-item,
  .image {
    width: 100%;
    height: 100%;
  }

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
</style>
