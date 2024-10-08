<template>
  <view class="viewport">
    <!-- 导航栏 -->
    <view
      class="navbar"
      :style="{ paddingTop: safeAreaInsets?.top + 'px' }"
    >
      <navigator
        open-type="navigateBack"
        class="back icon-left"
        hover-class="none"
      ></navigator>
      <view class="title">个人信息</view>
    </view>
    <!-- 头像 -->
    <view class="avatar">
      <view class="avatar-content" @tap="onChangeAvatar()">
        <image
          class="image"
          :src="profilesData?.avatar"
          mode="aspectFill"
        />
        <text class="text">点击修改头像</text>
      </view>
    </view>
    <!-- 表单 -->
    <view class="form">
      <!-- 表单内容 -->
      <view class="form-content">
        <view class="form-item">
          <text class="label">账号</text>
          <text class="account">{{
            profilesData?.account
          }}</text>
        </view>
        <view class="form-item">
          <text class="label">昵称</text>
          <input
            class="input"
            type="text"
            placeholder="请填写昵称"
            v-model="profilesData!.nickname"
          />
        </view>
        <view class="form-item">
          <text class="label">性别</text>
          <radio-group @change="onChangeGender($event)">
            <label class="radio">
              <radio
                value="男"
                color="#27ba9b"
                :checked="profilesData?.gender === '男'"
              />
              男
            </label>
            <label class="radio">
              <radio
                value="女"
                color="#27ba9b"
                :checked="profilesData?.gender === '女'"
              />
              女
            </label>
          </radio-group>
        </view>
        <view class="form-item">
          <text class="label">生日</text>
          <picker
            class="picker"
            mode="date"
            start="1900-01-01"
            :end="new Date()"
            :value="profilesData?.birthday"
            @change="onChangeBirthday($event)"
          >
            <view v-if="profilesData?.birthday">{{
              profilesData?.birthday
            }}</view>
            <view class="placeholder" v-else>请选择日期</view>
          </picker>
        </view>
        <view class="form-item">
          <text class="label">城市</text>
          <picker
            class="picker"
            mode="region"
            :value="profilesData?.fullLocation?.split(' ')"
            @change="onChangeCity($event)"
          >
            <view v-if="profilesData?.fullLocation">{{
              profilesData.fullLocation
            }}</view>
            <view class="placeholder" v-else>请选择城市</view>
          </picker>
        </view>
        <view class="form-item">
          <text class="label">职业</text>
          <input
            class="input"
            type="text"
            placeholder="请填写职业"
            v-model="profilesData!.profession"
          />
        </view>
      </view>
      <!-- 提交按钮 -->
      <button class="form-button" @tap="onSubmit()">
        保 存
      </button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { getProfiles, putProfiles } from '@/service'
import { useMemberStore } from '@/store'
import type { FullLocationCode } from '@/types/global'
import type { Gender, ProfileDetails } from '@/types/member'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

const { safeAreaInsets } = uni.getSystemInfoSync()

const memberStore = useMemberStore()

// 个人信息
const profilesData = ref({} as ProfileDetails)

// 获取个人信息
const fetchProfilesData = async () => {
  const res = await getProfiles()
  profilesData.value = res.result
}

// 修改头像
const onChangeAvatar = () => {
  uni.chooseImage({
    count: 1,
    sizeType: ['original'], //可以指定是原图还是压缩图，默认二者都有
    sourceType: ['album'], //从相册选择
    success: res => {
      // 图片路径
      const tempFilePath = res.tempFilePaths[0]
      // 上传文件
      uni.uploadFile({
        url: '/member/profile/avatar',
        name: 'file',
        filePath: tempFilePath,
        success: res => {
          if (res.statusCode === 200) {
            const { avatar } = JSON.parse(res.data).result
            // 更新头像
            profilesData.value!.avatar = avatar
            // 更新store
            memberStore.profile!.avatar = avatar

            uni.showToast({
              icon: 'success',
              title: '头像上传成功'
            })
          } else {
            uni.showToast({
              icon: 'error',
              title: '头像上传失败'
            })
          }
        }
      })
    }
  })
}

// 修改性别
const onChangeGender: UniHelper.RadioGroupOnChange = e => {
  profilesData.value.gender = e.detail.value as Gender
}

// 修改日期
const onChangeBirthday: UniHelper.DatePickerOnChange = e => {
  profilesData.value.birthday = e.detail.value
}

// 位置编码
let fullLocationCode: FullLocationCode = ['', '', '']

// 修改城市
const onChangeCity: UniHelper.RegionPickerOnChange = e => {
  profilesData.value.fullLocation = e.detail.value.join(' ')
  fullLocationCode = e.detail.code!
}

// 提交表单
const onSubmit = async () => {
  const { nickname, gender, birthday, profession } =
    profilesData.value

  const res = await putProfiles({
    nickname,
    gender,
    birthday,
    profession,
    provinceCode: fullLocationCode[0] || undefined,
    cityCode: fullLocationCode[1] || undefined,
    countyCode: fullLocationCode[2] || undefined
  })

  // 更新store的nickname
  memberStore.profile!.nickname = res.result.nickname

  // 成功提示
  uni.showToast({
    icon: 'success',
    title: '保存成功'
  })

  // 返回上一页
  setTimeout(() => {
    uni.navigateBack()
  }, 400)
}

onLoad(() => {
  fetchProfilesData()
})
</script>

<style lang="scss">
page {
  background-color: #f4f4f4;
}

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-image: url(https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/order_bg.png);
  background-size: auto 420rpx;
  background-repeat: no-repeat;
}

// 导航栏
.navbar {
  position: relative;

  .title {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
  }

  .back {
    position: absolute;
    height: 40px;
    width: 40px;
    left: 0;
    font-size: 20px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

// 头像
.avatar {
  text-align: center;
  width: 100%;
  height: 260rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .image {
    width: 160rpx;
    height: 160rpx;
    border-radius: 50%;
    background-color: #eee;
  }

  .text {
    display: block;
    padding-top: 20rpx;
    line-height: 1;
    font-size: 26rpx;
    color: #fff;
  }
}

// 表单
.form {
  background-color: #f4f4f4;

  &-content {
    margin: 20rpx 20rpx 0;
    padding: 0 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }

  &-item {
    display: flex;
    height: 96rpx;
    line-height: 46rpx;
    padding: 25rpx 10rpx;
    background-color: #fff;
    font-size: 28rpx;
    border-bottom: 1rpx solid #ddd;

    &:last-child {
      border: none;
    }

    .label {
      width: 180rpx;
      color: #333;
    }

    .account {
      color: #666;
    }

    .input {
      flex: 1;
      display: block;
      height: 46rpx;
    }

    .radio {
      margin-right: 20rpx;
    }

    .picker {
      flex: 1;
    }
    .placeholder {
      color: #808080;
    }
  }

  &-button {
    height: 80rpx;
    text-align: center;
    line-height: 80rpx;
    margin: 30rpx 20rpx;
    color: #fff;
    border-radius: 80rpx;
    font-size: 30rpx;
    background-color: #27ba9b;
  }
}
</style>
