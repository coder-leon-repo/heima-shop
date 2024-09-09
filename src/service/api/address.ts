import type {
  AddressItem,
  MemberAddressParams,
  PutMemberAddressResult
} from '@/types/address'
import { http } from '../request'

// 获取收货地址列表
export const getMemberAddressListAPI = () => {
  return http<AddressItem[]>({
    method: 'GET',
    url: '/member/address'
  })
}

// 添加收获地址
export const postMemberAddressAPI = (data: MemberAddressParams) => {
  return http<PutMemberAddressResult>({
    method: 'POST',
    url: '/member/address',
    data
  })
}
