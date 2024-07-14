<template>
  <view class="recommend">
    <!-- 推荐封面 -->
    <view class="cover">
      <image
        class="image"
        src="http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-20/84abb5b1-8344-49ae-afc1-9cb932f3d593.jpg"
      />
    </view>
    <!-- 选项卡 -->
    <view class="tabs">
      <view class="text">抢先尝鲜</view>
      <view class="text active">新品预告</view>
    </view>
    <scroll-view class="scroll-view" scroll-y>
      <view class="goods">
        <navigator
          class="goods-item"
          v-for="item in 10"
          :key="item"
        >
          <image
            class="image"
            src="https://yanxuan-item.nosdn.127.net/5e7864647286c7447eeee7f0025f8c11.png"
          />
          <view class="name ellipsis"
            >不含酒精，使用安心爽肤清洁湿巾
            不含酒精，使用安心爽肤清洁湿巾不含酒精，使用安心爽肤清洁湿巾不含酒精，使用安心爽肤清洁湿巾不含酒精，使用安心爽肤清洁湿巾</view
          >
          <view class="price">
            <text class="symbol">¥</text>
            <text class="num">29.90</text>
          </view>
        </navigator>
      </view>
      <view class="loading-text"> 加载更多... </view>
    </scroll-view>
  </view>
</template>

<script lang="ts" setup>
import { HOT_Recommend_MAP } from '@/constants'
import { cloneDeep } from 'lodash-es'

/* 接受首页传递的数据 */
const query = defineProps<{
  type: number
}>()

const hotRecommendMap = cloneDeep(HOT_Recommend_MAP)

const type = String(query.type)

const currentHotMap = hotRecommendMap.find(
  (item) => item.type === type
)

// 动态设置标题
uni.setNavigationBarTitle({
  title: currentHotMap!.title
})

const currentHotUrl = currentHotMap!.url

console.log(currentHotUrl)
</script>

<style lang="scss" scoped>
.recommend {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f4f4f4;

  .scroll-view {
    flex: 1;
  }
}

.cover {
  .image {
    width: 750rpx;
    height: 225rpx;
    border-radius: 0 0 40rpx 40rpx;
  }
}

.tabs {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100rpx;
  font-size: 32rpx;
  color: #333;
  background-color: #fff;
  border-radius: 10rpx;
  margin: 0 20rpx;
  position: relative;
  top: -20rpx;

  .text {
    padding: 10rpx 0;
    position: relative;
  }

  .active {
    &::after {
      content: '';
      width: 40rpx;
      height: 4rpx;
      background-color: #27ba9b;
      transform: translate(-50%);
      position: absolute;
      left: 50%;
      bottom: 0;
    }
  }
}

.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 20rpx;
  background-color: #fff;

  .goods-item {
    flex-basis: calc(50% - 10rpx);
    width: 345rpx;
    margin-bottom: 20rpx;
    padding: 24rpx 20rpx 20rpx;

    .image {
      width: 305rpx;
      height: 305rpx;
    }

    .name {
      padding: 5rpx 0;
      height: 75rpx;
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

.loading-text {
  padding: 20rpx 0;
  font-size: 28rpx;
  color: #666;
  text-align: center;
}
</style>
