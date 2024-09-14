<template name="skeleton">
  <view is="components/XtxSwiper">
    <view
      class="swiper XtxSwiper--swiper data-v-17cc3903 XtxSwiper--data-v-17cc3903"
      style="height: 154px"
    >
      <swiper
        :circular="true"
        class="data-v-17cc3903 XtxSwiper--data-v-17cc3903"
        :interval="3000"
        :current="0"
        :autoplay="false"
      >
        <swiper-item
          class="data-v-17cc3903 XtxSwiper--data-v-17cc3903"
          style="
            position: absolute;
            width: 100%;
            height: 100%;
            transform: translate(0%, 0px) translateZ(0px);
          "
        >
          <navigator
            class="swiper-item XtxSwiper--swiper-item data-v-17cc3903 XtxSwiper--data-v-17cc3903"
            hover-class="none"
          >
            <image
              class="image XtxSwiper--image data-v-17cc3903 XtxSwiper--data-v-17cc3903 sk-image"
              mode="aspectFill"
            ></image>
          </navigator>
        </swiper-item>
      </swiper>
      <view
        class="indicator XtxSwiper--indicator data-v-17cc3903 XtxSwiper--data-v-17cc3903"
      >
        <text
          class="dot XtxSwiper--dot data-v-17cc3903 XtxSwiper--data-v-17cc3903 active XtxSwiper--active"
        ></text>
        <text
          class="dot XtxSwiper--dot data-v-17cc3903 XtxSwiper--data-v-17cc3903"
        ></text>
        <text
          class="dot XtxSwiper--dot data-v-17cc3903 XtxSwiper--data-v-17cc3903"
        ></text>
        <text
          class="dot XtxSwiper--dot data-v-17cc3903 XtxSwiper--data-v-17cc3903"
        ></text>
        <text
          class="dot XtxSwiper--dot data-v-17cc3903 XtxSwiper--data-v-17cc3903"
        ></text>
      </view>
    </view>
  </view>
  <view is="pages/index/components/CategoryPanel">
    <view
      class="category-container CategoryPanel--category-container data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
    >
      <navigator
        class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
        hover-class="none"
      >
        <image
          class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
        ></image>
        <text
          class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-169 sk-text"
          >居家</text
        >
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
        hover-class="none"
      >
        <image
          class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
        ></image>
        <text
          class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-483 sk-text"
          >锦鲤</text
        >
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
        hover-class="none"
      >
        <image
          class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
        ></image>
        <text
          class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-120 sk-text"
          >服饰</text
        >
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
        hover-class="none"
      >
        <image
          class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
        ></image>
        <text
          class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-854 sk-text"
          >母婴</text
        >
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
        hover-class="none"
      >
        <image
          class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
        ></image>
        <text
          class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-43 sk-text"
          >个护</text
        >
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
        hover-class="none"
      >
        <image
          class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
        ></image>
        <text
          class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-56 sk-text"
          >严选</text
        >
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
        hover-class="none"
      >
        <image
          class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
        ></image>
        <text
          class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-881 sk-text"
          >数码</text
        >
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
        hover-class="none"
      >
        <image
          class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
        ></image>
        <text
          class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-597 sk-text"
          >运动</text
        >
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
        hover-class="none"
      >
        <image
          class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
        ></image>
        <text
          class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-352 sk-text"
          >杂项</text
        >
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
        hover-class="none"
      >
        <image
          class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
        ></image>
        <text
          class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-160 sk-text"
          >品牌</text
        >
      </navigator>
    </view>
  </view>
  <view is="pages/index/components/HotPanel">
    <view
      class="hot HotPanel--hot data-v-df6c854a HotPanel--data-v-df6c854a"
    >
      <view
        class="hot-item HotPanel--hot-item data-v-df6c854a HotPanel--data-v-df6c854a"
      >
        <view
          class="title HotPanel--title data-v-df6c854a HotPanel--data-v-df6c854a"
        >
          <text
            class="title-text HotPanel--title-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-86 sk-text"
            >特惠推荐</text
          >
          <text
            class="title-desc HotPanel--title-desc data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-745 sk-text"
            >精选全攻略</text
          >
        </view>
        <navigator
          class="goods HotPanel--goods data-v-df6c854a HotPanel--data-v-df6c854a"
          hover-class="none"
        >
          <image
            class="goods-image HotPanel--goods-image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
          ></image>
          <image
            class="goods-image HotPanel--goods-image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
          ></image>
        </navigator>
      </view>
      <view
        class="hot-item HotPanel--hot-item data-v-df6c854a HotPanel--data-v-df6c854a"
      >
        <view
          class="title HotPanel--title data-v-df6c854a HotPanel--data-v-df6c854a"
        >
          <text
            class="title-text HotPanel--title-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-17 sk-text"
            >爆款推荐</text
          >
          <text
            class="title-desc HotPanel--title-desc data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-182 sk-text"
            >最受欢迎</text
          >
        </view>
        <navigator
          class="goods HotPanel--goods data-v-df6c854a HotPanel--data-v-df6c854a"
          hover-class="none"
        >
          <image
            class="goods-image HotPanel--goods-image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
          ></image>
          <image
            class="goods-image HotPanel--goods-image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
          ></image>
        </navigator>
      </view>
      <view
        class="hot-item HotPanel--hot-item data-v-df6c854a HotPanel--data-v-df6c854a"
      >
        <view
          class="title HotPanel--title data-v-df6c854a HotPanel--data-v-df6c854a"
        >
          <text
            class="title-text HotPanel--title-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-481 sk-text"
            >一站买全</text
          >
          <text
            class="title-desc HotPanel--title-desc data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-296 sk-text"
            >精心优选</text
          >
        </view>
        <navigator
          class="goods HotPanel--goods data-v-df6c854a HotPanel--data-v-df6c854a"
          hover-class="none"
        >
          <image
            class="goods-image HotPanel--goods-image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
          ></image>
          <image
            class="goods-image HotPanel--goods-image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
          ></image>
        </navigator>
      </view>
      <view
        class="hot-item HotPanel--hot-item data-v-df6c854a HotPanel--data-v-df6c854a"
      >
        <view
          class="title HotPanel--title data-v-df6c854a HotPanel--data-v-df6c854a"
        >
          <text
            class="title-text HotPanel--title-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-41 sk-text"
            >新鲜好物</text
          >
          <text
            class="title-desc HotPanel--title-desc data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-427 sk-text"
            >生活加分项</text
          >
        </view>
        <navigator
          class="goods HotPanel--goods data-v-df6c854a HotPanel--data-v-df6c854a"
          hover-class="none"
        >
          <image
            class="goods-image HotPanel--goods-image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
          ></image>
          <image
            class="goods-image HotPanel--goods-image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
          ></image>
        </navigator>
      </view>
    </view>
  </view>
  <view is="components/XtxGuess" class="r r">
    <view
      class="guess-wrapper XtxGuess--guess-wrapper data-v-e94a02da XtxGuess--data-v-e94a02da"
    >
      <view
        class="title-container XtxGuess--title-container data-v-e94a02da XtxGuess--data-v-e94a02da"
      >
        <text
          class="text XtxGuess--text data-v-e94a02da XtxGuess--data-v-e94a02da sk-transparent sk-text-14-2857-519 sk-text"
          >猜你喜欢</text
        >
      </view>
      <view
        class="guess-content XtxGuess--guess-content data-v-e94a02da XtxGuess--data-v-e94a02da"
      >
        <navigator
          class="guess-item XtxGuess--guess-item data-v-e94a02da XtxGuess--data-v-e94a02da"
        ></navigator>
        <navigator
          class="guess-item XtxGuess--guess-item data-v-e94a02da XtxGuess--data-v-e94a02da"
        ></navigator>
      </view>
    </view>
  </view>
</template>

<style scoped>
.sk-transparent {
  color: transparent !important;
}
.sk-text-3-3333-913 {
  background-image: linear-gradient(
    transparent 3.3333%,
    #eeeeee 0%,
    #eeeeee 96.6667%,
    transparent 0%
  ) !important;
  background-size: 100% 27.1739rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-734 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 38.0435rpx;
  position: relative !important;
}
.sk-text-14-2857-169 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}
.sk-text-14-2857-483 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}
.sk-text-14-2857-120 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}
.sk-text-14-2857-854 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}
.sk-text-14-2857-43 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}
.sk-text-14-2857-56 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}
.sk-text-14-2857-881 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}
.sk-text-14-2857-597 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}
.sk-text-14-2857-352 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}
.sk-text-14-2857-160 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}
.sk-text-14-2857-86 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.1159rpx;
  position: relative !important;
}
.sk-text-14-2857-745 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}
.sk-text-14-2857-17 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.1159rpx;
  position: relative !important;
}
.sk-text-14-2857-182 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}
.sk-text-14-2857-481 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.1159rpx;
  position: relative !important;
}
.sk-text-14-2857-296 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}
.sk-text-14-2857-41 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.1159rpx;
  position: relative !important;
}
.sk-text-14-2857-427 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}
.sk-text-14-2857-519 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.1159rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
