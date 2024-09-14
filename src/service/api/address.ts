import type {
  AddressItem,
  AddressOperationResult,
  MemberAddressParams
} from '@/types/address'
import { http } from '../request'

// 获取收货地址列表
export const getMemberAddressList = () => {
  return http<AddressItem[]>({
    method: 'GET',
    url: '/member/address'
  })
}

// 新建收货地址
export const postMemberAddress = (data: MemberAddressParams) => {
  return http<AddressOperationResult>({
    method: 'POST',
    url: '/member/address',
    data
  })
}

// 修改收货地址
export const putMemberAddress = (
  id: string,
  data: MemberAddressParams
) => {
  return http<AddressOperationResult>({
    method: 'PUT',
    url: `/member/address/${id}`,
    data
  })
}

// 获取收获地址详细信息
export const getAddressDetailsById = (id: string) => {
  return http<AddressItem>({
    method: 'GET',
    url: `/member/address/${id}`
  })
}

// 删除收获地址
export const deleteMemberAddress = (id: string) => {
  return http({
    method: 'DELETE',
    url: `/member/address/${id}`
  })
}
