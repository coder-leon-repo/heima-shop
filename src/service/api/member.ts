import type {
  ProfileDetails,
  ProfileParams
} from '@/types/member'
import { http } from '../request'

// 获取个人信息
export const getProfiles = () => {
  return http<ProfileDetails>({
    method: 'GET',
    url: '/member/profile'
  })
}

// 修改个人信息
export const putProfiles = (data: ProfileParams) => {
  return http<ProfileDetails>({
    method: 'PUT',
    url: '/member/profile',
    data
  })
}
