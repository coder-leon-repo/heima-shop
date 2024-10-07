<template>
  <view class="content">
    <uni-forms
      ref="addressFormRef"
      :model="addressForm"
      :rules="addressFormRules"
    >
      <!-- 表单内容 -->
      <uni-forms-item class="form-item" name="receiver">
        <text class="label">收货人</text>
        <input
          class="input"
          placeholder="请填写收货人姓名"
          v-model="addressForm.receiver"
        />
      </uni-forms-item>
      <uni-forms-item class="form-item" name="contact">
        <text class="label">手机号码</text>
        <input
          class="input"
          placeholder="请填写收货人手机号码"
          v-model="addressForm.contact"
        />
      </uni-forms-item>
      <uni-forms-item class="form-item" name="fullLocation">
        <text class="label">所在地区</text>
        <picker
          class="picker"
          mode="region"
          :value="addressForm.fullLocation.split(' ')"
          @change="onChangeCity"
        >
          <view v-if="addressForm.fullLocation">{{
            addressForm.fullLocation
          }}</view>
          <view v-else class="placeholder"
            >请选择省/市/区(县)</view
          >
        </picker>
      </uni-forms-item>
      <uni-forms-item class="form-item" name="address">
        <text class="label">详细地址</text>
        <input
          class="input"
          placeholder="街道、楼牌号等信息"
          v-model="addressForm.address"
        />
      </uni-forms-item>
      <view class="form-item">
        <label class="label">设为默认地址</label>
        <switch
          class="switch"
          color="#27ba9b"
          :checked="!!addressForm.isDefault"
          @change="onChangeSwitch"
        />
      </view>
    </uni-forms>
  </view>
  <!-- 提交按钮 -->
  <button class="button" @tap="onSubmit()">保存并使用</button>
</template>

<script setup lang="ts">
import {
  getAddressDetailsById,
  postMemberAddress,
  putMemberAddress
} from '@/service'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

// 查询参数
const query = defineProps<{
  id?: string
}>()

// 动态设置标题
uni.setNavigationBarTitle({
  title: query.id ? '修改地址' : '新建地址'
})

// 表单数据
const addressForm = ref({
  receiver: '', // 收货人
  contact: '', // 联系方式
  fullLocation: '', // 省市区(前端展示)
  provinceCode: '', // 省份编码(后端参数)
  cityCode: '', // 城市编码(后端参数)
  countyCode: '', // 区/县编码(后端参数)
  address: '', // 详细地址
  isDefault: 1 // 默认地址，1为是，0为否
})

const addressFormRef = ref()

// 自定义表单校验规则
const addressFormRules = {
  receiver: {
    rules: [{ required: true, errorMessage: '请填写收货人姓名' }]
  },
  fullLocation: {
    rules: [
      {
        required: true,
        errorMessage: '请选择所在地区'
      }
    ]
  },
  contact: {
    rules: [
      { required: true, errorMessage: '请填写联系方式' },
      {
        pattern: /^1[3-9]\d{9}$/,
        errorMessage: '手机号格式不正确'
      }
    ]
  },
  address: {
    rules: [
      {
        required: true,
        errorMessage: '请填写详细地址'
      }
    ]
  }
}

// 监听省市区选项
const onChangeCity: UniHelper.RegionPickerOnChange = (e) => {
  // 更新前端页面
  addressForm.value.fullLocation = e.detail.value.join(' ')
  // 更新后端省/市/区(县)的编码
  addressForm.value.provinceCode = e.detail.code![0]
  addressForm.value.cityCode = e.detail.code![1]
  addressForm.value.countyCode = e.detail.code![2]
}

// 设置为默认地址
const onChangeSwitch: UniHelper.SwitchOnChange = (e) => {
  addressForm.value.isDefault = Number(e.detail.value)
}

// 修改地址页面 => 根据id获取收获地址详情
const fetchMemberAddressDetails = async () => {
  if (query.id) {
    const res = await getAddressDetailsById(query.id)
    addressForm.value = res.result
  }
}

// 提交表单
const onSubmit = async () => {
  try {
    // 表单校验证
    await addressFormRef?.value?.validate()

    // 根据有无id参数，判断调用接口。
    if (query.id) {
      // 修改收获地址
      await putMemberAddress(query.id, addressForm.value)
    } else {
      // 新建收获地址
      await postMemberAddress(addressForm.value)
    }

    // 成功提示
    uni.showToast({
      title: query.id ? '修改成功' : '添加成功',
      icon: 'success'
    })

    // 返回上一页
    setTimeout(() => {
      uni.navigateBack()
    }, 400)
  } catch (error) {
    uni.showToast({
      icon: 'error',
      title: '请填写完整信息'
    })
  }
}

onLoad(() => {
  fetchMemberAddressDetails()
})
</script>

<style lang="scss">
page {
  background-color: #f4f4f4;
}

.content {
  margin: 20rpx 20rpx 0;
  padding: 0 20rpx;
  border-radius: 10rpx;
  background-color: #fff;

  .form-item,
  .uni-forms-item {
    display: flex;
    align-items: center;
    min-height: 96rpx;
    padding: 25rpx 10rpx 40rpx;
    background-color: #fff;
    font-size: 28rpx;
    border-bottom: 1rpx solid #ddd;
    position: relative;
    margin-bottom: 0;

    // 调整 uni-forms 样式
    .uni-forms-item__content {
      display: flex;
    }

    .uni-forms-item__error {
      margin-left: 200rpx;
    }

    &:last-child {
      border: none;
    }

    .label {
      width: 200rpx;
      color: #333;
    }

    .input {
      flex: 1;
      display: block;
      height: 46rpx;
    }

    .switch {
      position: absolute;
      right: -20rpx;
      transform: scale(0.8);
    }

    .picker {
      flex: 1;
    }

    .placeholder {
      color: #808080;
    }
  }
}

.button {
  height: 80rpx;
  margin: 30rpx 20rpx;
  color: #fff;
  border-radius: 80rpx;
  font-size: 30rpx;
  background-color: #27ba9b;
}
</style>
