import type { ProfileDetails } from '@/types/member'
import { http } from '../request'

export const getProfilesInfo = () => {
  return http<ProfileDetails>({
    method: 'GET',
    url: '/member/profile'
  })
}
