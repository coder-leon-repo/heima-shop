<template>
  <scroll-view class="goods-container">
    <!-- 轮播图 -->
    <view class="goods-carousel">
      <swiper
        class="swiper-container"
        autoplay
        circular
        @change="onChange"
      >
        <swiper-item
          v-for="item in goodsData?.mainPictures"
          :key="item"
        >
          <image
            class="image"
            mode="scaleToFill"
            :src="item"
            @tap="onTapSwiper(item)"
          />
        </swiper-item>
      </swiper>
      <view class="indicator-container">
        <text class="current">{{ active + 1 }}</text>
        <text class="split">/</text>
        <text class="total">{{
          goodsData?.mainPictures.length || 1
        }}</text>
      </view>
    </view>
    <!-- 商品属性 -->
    <view class="goods-meta">
      <view class="goods-price">
        <text class="symbol">¥</text>
        <text class="num">{{ goodsData?.price }}</text>
      </view>
      <view class="name">
        <view class="text">{{ goodsData?.name }}</view>
        <view class="desc">{{ goodsData?.desc }}</view>
      </view>
      <view class="panel-container">
        <view
          class="panel-item"
          @tap="onOpenSkuPopup(SkuMode.Both)"
        >
          <text class="left-text">选择</text>
          <text class="center-text">{{ goodsSelected }} </text>
        </view>
        <view class="panel-item" @tap="onOpenPopup('address')">
          <text class="left-text">送至</text>
          <text class="center-text">请选择收货地址</text>
        </view>
        <view class="panel-item" @tap="onOpenPopup('service')">
          <text class="left-text">服务</text>
          <text class="center-text"
            >无忧退 快速退款 免费包邮</text
          >
        </view>
      </view>
    </view>
    <!-- 商品详情 -->
    <view class="detail panel">
      <view class="title">
        <text>详情</text>
      </view>
      <view class="content">
        <view class="properties">
          <!-- 属性详情 -->
          <view
            class="item"
            v-for="item in goodsData?.details?.properties"
            :key="item.name"
          >
            <text class="label">{{ item.name }}</text>
            <text class="value">{{ item.value }}</text>
          </view>
        </view>
        <!-- 图片详情 -->
        <image
          v-for="item in goodsData?.details?.pictures"
          :key="item"
          :src="item"
          mode="widthFix"
        />
      </view>
    </view>

    <!-- 同类推荐 -->
    <view class="similar panel">
      <view class="title">
        <text>同类推荐</text>
      </view>
      <view class="content">
        <navigator
          class="goods"
          hover-class="none"
          v-for="item in goodsData?.similarProducts"
          :key="item.id"
          :url="`/pages/goods/goods?id=${item.id}`"
        >
          <image
            class="image"
            mode="aspectFill"
            :src="item.picture"
          ></image>
          <view class="name ellipsis">{{ item.name }}</view>
          <view class="price">
            <text class="symbol">¥</text>
            <text class="number">{{ item.price }}</text>
          </view>
        </navigator>
      </view>
    </view>
    <!--底部导航栏 -->
    <view
      class="toolbar"
      :style="{ paddingBottom: safeAreaInsets?.bottom + 'px' }"
    >
      <view class="favor">
        <i class="icon-heart"></i>
        <text class="text">收藏</text>
      </view>
      <view class="service">
        <i class="icon-handset"></i>
        <text class="text">客服 </text>
      </view>
      <view class="shop-car">
        <i class="icon-cart"></i>
        <text class="text">购物车</text>
      </view>
      <navigator
        class="addcar btn"
        url="/pages/"
        open-type="navigate"
        hover-class="navigator-hover"
        @tap="onOpenSkuPopup(SkuMode.Car)"
      >
        <text> 加入购物车 </text>
      </navigator>
      <navigator
        class="buynow btn"
        url="/pages/"
        open-type="navigate"
        hover-class="navigator-hover"
        @tap="onOpenSkuPopup(SkuMode.Buy)"
      >
        <text> 立即购买 </text>
      </navigator>
    </view>
  </scroll-view>
  <uni-popup
    ref="popup"
    type="bottom"
    safe-area
    background-color="#fff"
  >
    <AddressPanel
      v-if="popupName === 'address'"
      @close="onClosePopup()"
    />
    <ServicePanel
      v-if="popupName === 'service'"
      @close="onClosePopup()"
    />
  </uni-popup>
  // sku组件
  <vk-data-goods-sku-popup
    ref="skuPopupRef"
    v-model="isShowSkuPopup"
    border-radius="20"
    add-cart-background-color="#FFA868"
    buy-now-background-color="#27BA9B"
    :z-index="990"
    :localdata="localdata"
    :mode="mode"
    @add-cart="onAddCar"
    :actived-style="{
      color: '#27BA9B',
      borderColor: '#27BA9B',
      backgroundColor: '#E9F8F5'
    }"
  />
</template>

<script lang="ts" setup>
import { getGoodsById, postMemberCar } from '@/service'
import type { GoodsResult } from '@/types/goods'
import { onLoad } from '@dcloudio/uni-app'
import { computed, ref } from 'vue'
import AddressPanel from './components/AddressPanel.vue'
import ServicePanel from './components/ServicePanel.vue'
import VkDataGoodsSkuPopup from '@/components/vk-data-goods-sku-popup/vk-data-goods-sku-popup.vue'
import type {
  SkuPopupEvent,
  SkuPopupInstance,
  SkuPopupLocaldata
} from '@/components/vk-data-goods-sku-popup/vl-data-goods-sku-popup'

const { safeAreaInsets } = uni.getSystemInfoSync()

// 商品id
const query = defineProps<{ id: string }>()

// 商品数据
const goodsData = ref<GoodsResult>()

// 获取商品数据
const fetchGoodsById = async () => {
  const res = await getGoodsById(query.id)
  goodsData.value = res.result
  // sku组件数据
  localdata.value = {
    _id: res.result.id,
    name: res.result.name,
    goods_thumb: res.result.mainPictures[0],
    spec_list: res.result.specs.map((v) => ({
      name: v.name,
      list: v.values
    })),
    sku_list: res.result.skus.map((v) => ({
      _id: v.id,
      goods_id: res.result.id,
      goods_name: res.result.name,
      image: v.picture,
      price: Number(v.price) * 100,
      stock: v.inventory,
      sku_name_arr: v.specs.map((vv) => vv.valueName)
    }))
  }
}

// 当前轮播图索引
const active = ref(0)

// 监听轮播图变化
const onChange: UniHelper.SwiperOnChange = (e) => {
  active.value = e.detail?.current
}

// 预览图片
const onTapSwiper = (url: string) => {
  uni.previewImage({
    current: url,
    urls: goodsData.value!.mainPictures
  })
}

// uni-app popup弹窗
const popup = ref<{
  open: () => void
  close: () => void
}>()

const popupName = ref<'address' | 'service'>()

// 侦听打开弹窗
const onOpenPopup = (name: typeof popupName.value) => {
  popupName.value = name
  popup.value?.open()
}

// 侦听关闭弹窗口
const onClosePopup = () => {
  popup.value?.close()
}

// sku实例
const skuPopupRef = ref<SkuPopupInstance>()

// 是否显示sku弹窗
const isShowSkuPopup = ref(false)

// sku数据
const localdata = ref({} as SkuPopupLocaldata)

// 按钮模式
enum SkuMode {
  Both = 1,
  Car = 2,
  Buy = 3
}

const mode = ref(SkuMode.Buy)

// 侦听打开sku弹窗
const onOpenSkuPopup = (val: SkuMode) => {
  isShowSkuPopup.value = true
  mode.value = val
}

// 选中的商品
const goodsSelected = computed(() => {
  return (
    skuPopupRef.value?.selectArr?.join(' ').trim() ||
    '请选择商品规格'
  )
})

// 侦听加入购物车
const onAddCar = async (e: SkuPopupEvent) => {
  await postMemberCar({
    skuId: e._id,
    count: e.buy_num
  })
  uni.showToast({ title: '添加成功', icon: 'success' })
  isShowSkuPopup.value = false
}

onLoad(() => {
  fetchGoodsById()
})
</script>

<style lang="scss" scoped>
.goods-container {
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

.goods-meta {
  &::after {
    content: '';
    display: block;
    height: 20rpx;
    background-color: #f4f4f4;
  }

  .goods-price {
    display: flex;
    align-items: center;
    height: 130rpx;
    padding: 0 20rpx;
    color: #fff;
    background-color: #35c8a9;

    .symbol {
      font-size: 34rpx;
      padding-right: 1px;
    }

    .num {
      font-size: 56rpx;
    }
  }

  .name {
    display: flex;
    flex-direction: column;
    min-height: 88rpx;
    border-bottom: 1rpx solid #eaeaea;

    .text {
      color: #333;
      font-size: 32rpx;
      padding: 10rpx 0rpx 10rpx 20rpx;
    }

    .desc {
      font-size: 24rpx;
      color: #cf4444;
      padding: 5rpx 0rpx 10rpx 20rpx;
    }
  }

  .panel-container {
    padding-left: 20rpx;
    border-bottom: 1rpx solid #eaeaea;
    .panel-item {
      position: relative;
      display: flex;
      align-items: center;
      height: 80rpx;
      font-size: 26rpx;
      border-bottom: 1rpx solid #eaeaea;

      &::after {
        position: absolute;
        top: 50%;
        right: 20rpx;
        transform: translateY(-50%);
        content: '\e6c2';
        color: #ccc;
        font-family: 'erabbit' !important;
        font-size: 32rpx;
      }

      &:last-child {
        border-bottom: 0 none;
      }

      .left-text {
        width: 60rpx;
        color: #898b94;
        margin: 0 16rpx 0 10rpx;
      }

      .center-text {
        color: #333;
      }
    }
  }
}

.panel {
  margin-top: 20rpx;
  background-color: #fff;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90rpx;
    line-height: 1;
    padding: 30rpx 60rpx 30rpx 6rpx;
    position: relative;
    text {
      padding-left: 10rpx;
      font-size: 28rpx;
      color: #333;
      font-weight: 600;
      border-left: 4rpx solid #27ba9b;
    }
    navigator {
      font-size: 24rpx;
      color: #666;
    }
  }
}

.detail {
  padding-left: 20rpx;
  .content {
    margin-left: -20rpx;
    .image {
      width: 100%;
    }
  }
  .properties {
    padding: 0 20rpx;
    margin-bottom: 30rpx;
    .item {
      display: flex;
      line-height: 2;
      padding: 10rpx;
      font-size: 26rpx;
      color: #333;
      border-bottom: 1rpx dashed #ccc;
    }
    .label {
      width: 200rpx;
    }
    .value {
      flex: 1;
    }
  }
}

/* 同类推荐 */
.similar {
  .content {
    padding: 0 20rpx 200rpx;
    background-color: #f4f4f4;
    display: flex;
    flex-wrap: wrap;
    .goods {
      width: 340rpx;
      padding: 24rpx 20rpx 20rpx;
      margin: 20rpx 7rpx;
      border-radius: 10rpx;
      background-color: #fff;
    }
    .image {
      width: 300rpx;
      height: 260rpx;
    }
    .name {
      height: 80rpx;
      margin: 10rpx 0;
      font-size: 26rpx;
      color: #262626;
    }
    .price {
      line-height: 1;
      font-size: 20rpx;
      color: #cf4444;
    }
    .number {
      font-size: 26rpx;
      margin-left: 2rpx;
    }
  }
  navigator {
    &:nth-child(even) {
      margin-right: 0;
    }
  }
}

// 底部工具栏
.toolbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100rpx;
  padding: 0 20rpx;
  background-color: #fff;
  border-top: 1rpx solid #eaeaea;
  box-sizing: content-box;

  & > view {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .text {
      font-size: 26rpx;
    }
  }

  .btn {
    color: #fff;
    border-radius: 72rpx;
    padding: 15rpx 45rpx;
  }

  .addcar {
    background-color: #ffa866;
  }

  .buynow {
    background-color: #27ba9b;
  }
}
</style>
