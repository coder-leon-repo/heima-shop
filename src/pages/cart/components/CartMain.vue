<template>
  <scroll-view
    scroll-y
    class="scroll-view"
    @scrolltolower="onScrollToLower"
  >
    <!-- 已登录: 显示购物车 -->
    <template v-if="memberStore.profile">
      <!-- 购物车列表 -->
      <view class="cart-list" v-if="cartList?.length">
        <!-- 优惠提示 -->
        <view class="tips">
          <text class="label">满减</text>
          <text class="desc">满1件, 即可享受9折优惠</text>
        </view>
        <!-- 滑动操作分区 -->
        <uni-swipe-action>
          <!-- 滑动操作项 -->
          <uni-swipe-action-item
            v-for="item in cartList"
            :key="item.skuId"
            class="cart-swipe"
          >
            <!-- 商品信息 -->
            <view class="goods">
              <!-- 选中状态 -->
              <text
                class="checkbox"
                :class="{ checked: item.selected }"
                @tap="onSelected(item)"
              ></text>
              <navigator
                :url="`/pages/goods/goods?id=${item.id}`"
                hover-class="none"
                class="navigator"
              >
                <image
                  mode="aspectFill"
                  class="picture"
                  :src="item.picture"
                ></image>
                <view class="meta">
                  <view class="name ellipsis">{{
                    item.name
                  }}</view>
                  <view class="attrsText ellipsis">{{
                    item.attrsText
                  }}</view>
                  <view class="price">{{ item.nowPrice }}</view>
                </view>
              </navigator>
              <!-- 商品数量 -->
              <view class="count">
                <vk-data-input-number-box
                  v-model="item.count"
                  :min="1"
                  :max="item.stock"
                  :index="item.skuId"
                  @change="onChangeGoodsCount"
                />
              </view>
            </view>
            <!-- 右侧删除按钮 -->
            <template #right>
              <view
                class="cart-swipe-right"
                @tap="onDeleteCart(item)"
              >
                <button class="button delete-button">
                  删除
                </button>
              </view>
            </template>
          </uni-swipe-action-item>
        </uni-swipe-action>
      </view>
      <!-- 购物车空状态 -->
      <view class="cart-blank" v-else>
        <image
          src="/static/images/blank_cart.png"
          class="image"
        />
        <text class="text">购物车还是空的，快来挑选好货吧</text>
        <navigator
          open-type="switchTab"
          url="/pages/index/index"
          hover-class="none"
        >
          <button class="button">去首页看看</button>
        </navigator>
      </view>
      <!-- 吸底工具栏 -->
      <view
        class="toolbar"
        :style="paddingBottom"
        v-if="cartList?.length"
      >
        <text
          class="all"
          :class="{ checked: selectAll }"
          @tap="onSelectedAllChange"
          >全选</text
        >
        <text class="text">合计:</text>
        <text class="amount">{{ totalPrice }}</text>
        <view class="button-grounp">
          <view
            class="button payment-button"
            :class="{ disabled: totalCount === 0 }"
            @tap="goToPayment"
          >
            去结算({{ totalCount }})
          </view>
        </view>
      </view>
    </template>
    <!-- 未登录: 提示登录 -->
    <view class="login-blank" v-else>
      <text class="text">登录后可查看购物车中的商品</text>
      <navigator url="/pages/login/login" hover-class="none">
        <button class="button">去登录</button>
      </navigator>
    </view>
    <!-- 猜你喜欢 -->
    <XtxGuess ref="guessLikeRef" />
    <!-- 底部占位空盒子 -->
    <view class="toolbar-height"></view>
  </scroll-view>
</template>

<script setup lang="ts">
import type { InputNumberBoxEvent } from '@/components/vk-data-input-number-box/vk-data-input-number-box'
import { useSafeArea } from '@/hooks'
import { useGuessLike } from '@/hooks/guess-like'
import {
  deleteCartList,
  getCartList,
  putMemberCartBySkuId,
  putMemberCartSlecetdAll
} from '@/service'
import { useMemberStore } from '@/store'
import type { CartItem } from '@/types/cart'
import { onShow } from '@dcloudio/uni-app'
import { computed, ref } from 'vue'

// guessLikeHooks
const { guessLikeRef, onScrollToLower } = useGuessLike()

// SafeAreaHooks
const { paddingBottom } = useSafeArea()

// 会员信息
const memberStore = useMemberStore()

// 购物车列表
const cartList = ref<CartItem[]>()

/**
 * @desc: 获取购物车列表数据
 * @return {*}
 */
const fetchCartListData = async () => {
  const res = await getCartList()
  cartList.value = res.result
}

/**
 * @desc: 侦听删除商品
 * @param {*} item
 * @return {*}
 */
const onDeleteCart = async (item: CartItem) => {
  await deleteCartList({ ids: [item.skuId] }).then(res => {
    fetchCartListData()
  })
}

/**
 * @desc: 侦听单品选中状态变化
 * @param item 购物车项
 * @return {*}
 */
const onSelected = async (item: CartItem) => {
  item.selected = !item.selected
  // 更新后端数据
  await putMemberCartBySkuId(item.skuId, {
    selected: item.selected
  })
}

// 全选计算属性
const selectAll = computed(() => {
  return cartList.value?.every(item => item.selected)
})

/**
 * @desc:全选选项取反操作
 * @return {*}
 */
const onSelectedAllChange = async () => {
  const isSelectedAll = !selectAll.value
  cartList.value?.forEach(
    item => (item.selected = isSelectedAll)
  )
  // 更新后端数据
  await putMemberCartSlecetdAll({
    selected: isSelectedAll
  })
}

/**
/**
 * @desc:修改单品数量
 * @param {InputNumberBoxEvent} e 输入事件对象，携带了商品skuid和新的数量值
 * @return {*}
 */
const onChangeGoodsCount = async (e: InputNumberBoxEvent) => {
  await putMemberCartBySkuId(e.index, { count: e.value })
}

/**
 * @desc:计算购物车商品总价数
 * @return {number}
 */
const totalCount = computed(() => {
  return cartList.value
    ?.filter(item => item.selected)
    .reduce((acc, cur) => acc + cur.count, 0)
})

/**
 * @desc: 计算购物车商品总价格
 * @return {number}
 */
const totalPrice = computed(() => {
  return cartList.value
    ?.filter(item => item.selected)
    .reduce((acc, cur) => acc + cur.nowPrice * cur.count, 0)
    .toFixed(2)
})

/**
 * @desc:跳转到预结算页面
 * @return {*}
 */
const goToPayment = () => {
  if (totalCount.value === 0) {
    uni.showToast({ icon: 'none', title: '选择商品' })
  } else {
    uni.navigateTo({ url: '/pagesOrder/create/create' })
  }
}

onShow(() => {
  if (memberStore.profile) {
    fetchCartListData()
  }
})
</script>

<style lang="scss">
// 根元素
:host {
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #f7f7f8;
}

// 滚动容器
.scroll-view {
  flex: 1;
}

// 购物车列表
.cart-list {
  padding: 0 20rpx;

  // 优惠提示
  .tips {
    display: flex;
    align-items: center;
    line-height: 1;
    margin: 30rpx 10rpx;
    font-size: 26rpx;
    color: #666;

    .label {
      color: #fff;
      padding: 7rpx 15rpx 5rpx;
      border-radius: 4rpx;
      font-size: 24rpx;
      background-color: #27ba9b;
      margin-right: 10rpx;
    }
  }

  // 购物车商品
  .goods {
    display: flex;
    padding: 20rpx 20rpx 20rpx 80rpx;
    border-radius: 10rpx;
    background-color: #fff;
    position: relative;

    .navigator {
      display: flex;
    }

    .checkbox {
      position: absolute;
      top: 0;
      left: 0;

      display: flex;
      align-items: center;
      justify-content: center;
      width: 80rpx;
      height: 100%;

      &::before {
        content: '\e6cd';
        font-family: 'erabbit' !important;
        font-size: 40rpx;
        color: #444;
      }

      &.checked::before {
        content: '\e6cc';
        color: #27ba9b;
      }
    }

    .picture {
      width: 170rpx;
      height: 170rpx;
    }

    .meta {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 20rpx;
    }

    .name {
      height: 72rpx;
      font-size: 26rpx;
      color: #444;
    }

    .attrsText {
      line-height: 1.8;
      padding: 0 15rpx;
      font-size: 24rpx;
      align-self: flex-start;
      border-radius: 4rpx;
      color: #888;
      background-color: #f7f7f8;
    }

    .price {
      line-height: 1;
      font-size: 26rpx;
      color: #444;
      margin-bottom: 2rpx;
      color: #cf4444;

      &::before {
        content: '￥';
        font-size: 80%;
      }
    }

    // 商品数量
    .count {
      position: absolute;
      bottom: 20rpx;
      right: 5rpx;

      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 220rpx;
      height: 48rpx;

      .text {
        height: 100%;
        padding: 0 20rpx;
        font-size: 32rpx;
        color: #444;
      }

      .input {
        height: 100%;
        text-align: center;
        border-radius: 4rpx;
        font-size: 24rpx;
        color: #444;
        background-color: #f6f6f6;
      }
    }
  }

  .cart-swipe {
    display: block;
    margin: 20rpx 0;
  }

  .cart-swipe-right {
    display: flex;
    height: 100%;

    .button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      padding: 6px;
      line-height: 1.5;
      color: #fff;
      font-size: 26rpx;
      border-radius: 0;
    }

    .delete-button {
      background-color: #cf4444;
    }
  }
}

// 空状态
.cart-blank,
.login-blank {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 60vh;
  .image {
    width: 400rpx;
    height: 281rpx;
  }
  .text {
    color: #444;
    font-size: 26rpx;
    margin: 20rpx 0;
  }
  .button {
    width: 240rpx !important;
    height: 60rpx;
    line-height: 60rpx;
    margin-top: 20rpx;
    font-size: 26rpx;
    border-radius: 60rpx;
    color: #fff;
    background-color: #27ba9b;
  }
}

// 吸底工具栏
.toolbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: var(--window-bottom);
  z-index: 1;

  height: 100rpx;
  padding: 0 20rpx;
  display: flex;
  align-items: center;
  border-top: 1rpx solid #ededed;
  border-bottom: 1rpx solid #ededed;
  background-color: #fff;
  box-sizing: content-box;

  .all {
    margin-left: 25rpx;
    font-size: 14px;
    color: #444;
    display: flex;
    align-items: center;
  }

  .all::before {
    font-family: 'erabbit' !important;
    content: '\e6cd';
    font-size: 40rpx;
    margin-right: 8rpx;
  }

  .checked::before {
    content: '\e6cc';
    color: #27ba9b;
  }

  .text {
    margin-right: 8rpx;
    margin-left: 32rpx;
    color: #444;
    font-size: 14px;
  }

  .amount {
    font-size: 20px;
    color: #cf4444;

    .decimal {
      font-size: 12px;
    }

    &::before {
      content: '￥';
      font-size: 12px;
    }
  }

  .button-grounp {
    margin-left: auto;
    display: flex;
    justify-content: space-between;
    text-align: center;
    line-height: 72rpx;
    font-size: 13px;
    color: #fff;

    .button {
      width: 240rpx;
      margin: 0 10rpx;
      border-radius: 72rpx;
    }

    .payment-button {
      background-color: #27ba9b;

      &.disabled {
        opacity: 0.6;
      }
    }
  }
}
// 底部占位空盒子
.toolbar-height {
  height: 100rpx;
}
</style>
