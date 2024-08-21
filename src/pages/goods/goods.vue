<template>
  <scroll-view class="goods-wrapper">
    <view class="goods-container">
      <view class="goods-carousel">
        <swiper
          class="swiper-container"
          autoplay
          circular
          @change="onChange"
        >
          <swiper-item v-for="item in picture" :key="item.id">
            <image
              class="image"
              :src="item.url"
              mode="scaleToFill"
            />
          </swiper-item>
        </swiper>
        <view class="indicator-container">
          <text class="current">{{ active + 1 }}</text>
          <text class="split">/</text>
          <text class="total">{{ picture?.length }}</text>
        </view>
      </view>
      <view class="goods-meta">商品简介</view>
    </view>
  </scroll-view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const picture = [
  {
    id: 0,
    url: 'https://yanxuan-item.nosdn.127.net/99c83709ca5f9fd5c5bb35d207ad7822.png'
  },
  {
    id: 1,
    url: 'https://yanxuan-item.nosdn.127.net/f9107d47c08f0b99c097e30055c39e1a.png'
  },
  {
    id: 2,
    url: 'https://yanxuan-item.nosdn.127.net/754c56785cc8c39f7414752f62d79872.png'
  },
  {
    id: 3,
    url: 'https://yanxuan-item.nosdn.127.net/ef16f8127610ef56a2a10466d6dae157.jpg'
  },
  {
    id: 4,
    url: 'https://yanxuan-item.nosdn.127.net/1f0c3f5d32b0e804deb9b3d56ea6c3b2.png'
  }
]

// 当前轮播图索引
const active = ref(0)

// 监听轮播图变化
const onChange: UniHelper.SwiperOnChange = (e) => {
  active.value = e.detail?.current
}
</script>

<style lang="scss" scoped>
.goods-wrapper {
  height: 100%;
  overflow: hidden;
}

.goods-carousel {
  position: relative;
  .swiper-container {
    height: 750rpx;
    .image {
      width: 750rpx;
      height: 750rpx;
    }
  }
  .indicator-container {
    position: absolute;
    height: 40rpx;
    padding: 0 24rpx;
    line-height: 40rpx;
    border-radius: 30rpx;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.3);
    font-family: Arial, Helvetica, sans-serif;
    right: 30rpx;
    bottom: 30rpx;
    .current {
      font-size: 26rpx;
    }
    .split {
      font-size: 24rpx;
      margin: 0 1rpx;
    }
    .total {
      font-size: 24rpx;
    }
  }
}
</style>
