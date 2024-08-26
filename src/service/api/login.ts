import type { MemberInfo } from '@/types/member'
import { http } from '../request'

export const postLoginByPhoneNumber = (phoneNumber: string) => {
  return http<MemberInfo>({
    method: 'POST',
    url: '/login/wxMin/simple',
    data: {
      phoneNumber
    }
  })
}
