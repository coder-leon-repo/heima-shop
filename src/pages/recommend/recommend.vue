<template>
  <view class="recommend">
    <!-- 推荐封面 -->
    <view class="cover">
      <image class="image" :src="bannerPictureUrl" />
    </view>
    <!-- 选项卡 -->
    <view class="tabs">
      <view
        class="text"
        :class="{ active: index === active }"
        v-for="(item, index) in subTypesData"
        :key="item.id"
        @tap="active = index"
        >{{ item.title }}</view
      >
    </view>
    <!-- 商品列表 -->
    <scroll-view
      class="scroll-view"
      scroll-y
      v-for="(item, index) in subTypesData"
      :key="item.id"
      v-show="index === active"
      @scrolltolower="onScrollToLower"
    >
      <view class="goods">
        <navigator
          class="goods-item"
          v-for="goods in item.goodsItems.items"
          :key="goods.id"
          :url="`/pages/goods/goods?id=${goods.id}`"
        >
          <image class="image" :src="goods.picture" />
          <view class="name ellipsis">{{ goods.name }}</view>
          <view class="price">
            <text class="symbol">¥</text>
            <text class="num">{{ goods.price }}</text>
          </view>
        </navigator>
      </view>
      <view class="loading-text">
        {{ item.finish ? '没有更多数据~' : '加载更多...' }}
      </view>
    </scroll-view>
  </view>
</template>

<script lang="ts" setup>
import { cloneDeep } from 'lodash-es'
import { onLoad } from '@dcloudio/uni-app'
import { reactive, ref } from 'vue'
import type { subTypeItem } from '@/types/recommend'
import { getHotRecommendData } from '@/service'
import { HOT_RECOMMEND } from '@/constants/global'

/* 接受首页传递的数据 */
const query = defineProps<{
  type: string
}>()

const hotRecommendMap = cloneDeep(HOT_RECOMMEND)

const currentHotMap = hotRecommendMap.find(
  item => item.type === query.type
)

// 动态设置标题
uni.setNavigationBarTitle({
  title: currentHotMap!.title
})

// 当前选项卡的url
const currentHotUrl = currentHotMap!.url

// 选项卡选中索引
const active = ref(0)

// 轮播图主图地址
const bannerPictureUrl = ref('')

// 不同选项卡的数据
const subTypesData = ref<(subTypeItem & { finish?: Boolean })[]>(
  []
)

const pageParams = reactive({
  page: import.meta.env.DEV ? 33 : 1,
  pageSize: 10
})

// 获取热门推荐数据
const fetchHotRecommendData = async () => {
  const res = await getHotRecommendData(
    currentHotUrl,
    pageParams
  )

  bannerPictureUrl.value = res.result.bannerPicture
  subTypesData.value = res.result.subTypes
}

// 页面初始化
onLoad(() => {
  fetchHotRecommendData()
})

// 滚动触底->加载更多数据
const onScrollToLower = async () => {
  // 当前选项卡数据
  const currentSubTypes = subTypesData.value[active.value]
  const page = currentSubTypes.goodsItems.page
  const pages = currentSubTypes.goodsItems.pages

  // 分页条件
  if (page < pages) {
    currentSubTypes.goodsItems.page++
  } else {
    currentSubTypes.finish = true
    return void 0
  }

  const res = await getHotRecommendData(currentHotUrl, {
    subType: currentSubTypes.id,
    page: currentSubTypes.goodsItems.page,
    pageSize: currentSubTypes.goodsItems.pageSize
  })

  // 新的列表数据
  const newSubTypes = res.result.subTypes[active.value]

  // 追加新的数据
  currentSubTypes.goodsItems.items.push(
    ...newSubTypes.goodsItems.items
  )
}
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
      position: absolute;
      transform: translate(-50%);
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
