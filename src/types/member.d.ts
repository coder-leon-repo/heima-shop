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
  /* token */
  token: string
}

// 个人信息类型
export type ProfileDetails = LoginResult & {
  /* 生日 */
  birthday?: string
  /* 省市区的名称：如山东省济南市里历下区 */
  fullLocation: string
  /* 性别，男、女、*/
  gender: Gender
  /* 职业 */
  profession?: string
}

/* 性别 */
export type Gender = '男' | '女'
