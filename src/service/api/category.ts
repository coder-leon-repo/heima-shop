import { http } from '../request'
import type { CategoryTopItem } from '@/types/category'

export const getCateoryTopData = () => {
  return http<CategoryTopItem[]>({
    url: '/category/top',
    method: 'GET'
  })
}
