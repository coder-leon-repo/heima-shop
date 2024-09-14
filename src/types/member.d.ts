// 用户登录返回类型
export type LoginResult = {
  /* 用户Id */
  id: number
  /* 头像 */
  avatar: string
  /* 账号名称 */
  account: string
  /* 昵称 */
  nickname?: string
  /* 手机号码 */
  mobile: string
  /* 登录凭证 */
  token: string
}

// 个人信息类型
export type ProfileDetails = LoginResult & {
  /* 生日 */
  birthday?: string
  /* 省市区的名称：如山东省济南市里历下区 */
  fullLocation?: string
  /* 性别，男、女、*/
  gender?: Gender
  /* 职业 */
  profession?: string
}

/* 性别 */
export type Gender = '男' | '女'

// 修改个人信息参数
export type ProfileParams = Pick<
  ProfileDetails,
  'nickname' | 'gender' | 'birthday' | 'profession'
> & {
  /* 省份编码 */
  provinceCode?: string
  /* 城市编码 */
  cityCode?: string
  /* 区/县编码 */
  countyCode?: string
}
