import { method } from 'lodash-es'
import { http } from '../request'

const getCateoryTopData = () => {
  return http({
    url: '/category/top',
    method: 'GET'
  })
}
