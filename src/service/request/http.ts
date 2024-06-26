import {
  BASE_URL,
  DEFAULT_REQUEST_ERROR_MSG,
  NETWORK_ERROR_MSG,
  REQUEST_TIMEOUT
} from '@/config/service'
import { useMemberStore } from '@/store'

// 拦截器配置
const httpInterceptor = {
  invoke(options: UniApp.RequestOptions) {
    // 拼接baseURL地址
    if (!options.url.includes('http')) {
      options.url = BASE_URL + options.url
    }

    // 设置超时时间
    options.timeout = REQUEST_TIMEOUT
    // 添加小程序请求头标识
    options.header = {
      ...options,
      'source-client': 'miniapp'
    }

    // 添加 token 标识
    const memberStore = useMemberStore()
    const token = memberStore.profile?.token
    if (token) {
      options.header.Authorization = token
    }
  }
}

// 拦截 request 请求
uni.addInterceptor('request', httpInterceptor)
// 拦截 uploadFile 请求
uni.addInterceptor('uploadFile', httpInterceptor)

interface Data<T> {
  code: string
  msg: string
  result: T
}

export const http = <T>(options: UniApp.RequestOptions) => {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      // 响应成功
      success(res) {
        // 响应成功状态码
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data as Data<T>)
        } else if (res.statusCode === 401) {
          // 401错误 -> 清空会员信息 -> 跳转到登录页面
          const memberStore = useMemberStore()
          memberStore.clearProfile()
          uni.navigateTo({
            url: '/pages/login/login'
          })
          reject(res)
        } else {
          // 其他错误 -> 后端返回的错误
          uni.showToast({
            icon: 'none',
            title: (res.data as Data<T>).msg || DEFAULT_REQUEST_ERROR_MSG
          })
          reject(res)
        }
      },
      //响应失败
      fail(err) {
        // 网络故障
        uni.showToast({
          icon: 'none',
          title: NETWORK_ERROR_MSG
        })
        reject(err)
      }
    })
  })
}
