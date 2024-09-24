import type { AddressItem } from '@/types/address'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAddressesStore = defineStore(
  'addressStore',
  () => {
    // 收获地址
    const deliveryLocation = ref({} as AddressItem)

    // 修改收获地址
    const setDeliveryLocation = (val: any) => {
      deliveryLocation.value = val
    }

    return {
      deliveryLocation,
      setDeliveryLocation
    }
  },
  // Pinia持久化
  {
    persist: {
      storage: {
        setItem(key, value) {
          uni.setStorageSync(key, value)
        },
        getItem(key) {
          return uni.getStorageSync(key)
        }
      }
    }
  }
)
