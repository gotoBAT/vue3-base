import 'vue-router'
import { IMenu } from '#/menu'

declare module 'vue-router' {
  interface RouteMeta {
    // 是否需要登录验证
    requiresAuth?: boolean
    // 是否是游客
    guest?: boolean
    // 菜单相关
    menu?: IMenu
  }
}
