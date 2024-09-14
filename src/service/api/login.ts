import type { LoginResult } from '@/types/member'
import { http } from '../request'

export const postLoginByPhoneNumber = (phoneNumber: string) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin/simple',
    data: {
      phoneNumber
    }
  })
}
