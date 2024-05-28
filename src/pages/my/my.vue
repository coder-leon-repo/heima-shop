<template>
  <view class="my">
    <view>会员信息：{{ memberStore.profile }}</view>
    <button
      @tap="
        memberStore.setProfile({
          nickname: '黑马先锋',
          token: '12345'
        })
      "
      size="mini"
      plain
      type="primary"
    >
      保存用户信息
    </button>
    <button @tap="memberStore.clearProfile()" size="mini" plain type="warn">
      清理用户信息
    </button>
    <button @tap="fetchData" size="mini" plain type="primary">测试请求</button>
  </view>
</template>

<script setup lang="ts">
import { http } from '@/service/request'
import { useMemberStore } from '@/store'

const memberStore = useMemberStore()

const fetchData = async () => {
  const res = await http<object[]>({
    url: '/member/profile',
    method: 'GET'
  })
  console.log(res.result)
}
</script>

<style lang="scss" scoped>
//
</style>
