<template>
  <view class="viewport">
    <!-- tabs -->
    <view class="tabs">
      <text
        class="item"
        v-for="(item, index) in orderTabs"
        :key="item.id"
        @tap="active = index"
      >
        {{ item.text }}
      </text>
      <!--下标 -->
      <view
        class="cursor"
        :style="{ left: active * 20 + '%' }"
      ></view>
    </view>
    <!-- 滑动容器 -->
    <swiper
      class="swiper"
      :current="active"
      @change="event => (active = event.detail.current)"
    >
      <!-- 滑动项 -->
      <swiper-item v-for="item in orderTabs" :key="item.id">
        <OrderList />
      </swiper-item>
    </swiper>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import OrderList from './components/order-list.vue'

// 页面参数:type订单类型
const query = defineProps<{
  type: string
}>()

// tabs 数据
const orderTabs = ref([
  { id: 0, orderState: 0, text: '全部' },
  { id: 1, orderState: 1, text: '待付款' },
  { id: 2, orderState: 2, text: '待发货' },
  { id: 3, orderState: 3, text: '待收货' },
  { id: 4, orderState: 4, text: '待评价' }
])

// 按传递的参数匹配下标
const matchIndex = orderTabs.value.findIndex(
  v => v.orderState === Number(query.type)
)

// tabs下标
const active = ref(matchIndex)
</script>

<style lang="scss">
page {
  height: 100%;
  overflow: hidden;
}

.viewport {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
}

// tabs
.tabs {
  display: flex;
  justify-content: space-around;
  line-height: 60rpx;
  margin: 0 10rpx;
  background-color: #fff;
  box-shadow: 0 4rpx 6rpx rgba(240, 240, 240, 0.6);
  position: relative;
  z-index: 9;

  .item {
    flex: 1;
    text-align: center;
    padding: 20rpx;
    font-size: 28rpx;
    color: #262626;
  }

  .cursor {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 20%;
    height: 6rpx;
    padding: 0 50rpx;
    background-color: #27ba9b;
    /* 过渡效果 */
    transition: all 0.4s;
  }
}

// swiper
.swiper {
  background-color: #f7f7f8;
}
</style>
