import { RouteRecordRaw } from 'vue-router'
import { envs } from '@/utils'
const layout = import.meta.globEager('@/layouts/*.vue')
const views = import.meta.globEager('@/views/**/*.vue')
// 自动注册路由
function getLayoutRoutes() {
  const layoutRoutes = [] as RouteRecordRaw[]
  Object.entries(layout).forEach(([filename, module]) => {
    const route = getRootRoutes(filename, module)
    route.children = getChildrenRoutes(route)
    layoutRoutes.push(route)
  })
  return layoutRoutes
}
// 获取子路由
function getChildrenRoutes(layoutRoute: RouteRecordRaw) {
  const routes = [] as RouteRecordRaw[]
  Object.entries(views).forEach(([file, module]) => {
    if (file.includes(`../views/${layoutRoute.name as string}`)) {
      const route = getRootRoutes(file, module)
      routes.push(route)
    }
  })
  return routes
}
// 获取根路由
function getRootRoutes(filename: string, module: { [key: string]: any }) {
  const name = filename.replace(/.+layouts\/|.+views\/|\.vue/gi, '')
  const route = {
    name: name.replace('/', '.'),
    path: `/${name}`,
    component: module.default
  }
  return Object.assign(route, module.default?.route)
}
const routes = envs.VITE_ROUTER_AUTOLOAD
  ? getLayoutRoutes()
  : ([] as RouteRecordRaw[])
export default routes
