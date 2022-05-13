import { envs } from '@/utils'
import { RouteRecordRaw } from 'vue-router'
import autoloadModuleRoutes from './module'
import autoloadRoutes from './view'
let routes = [] as RouteRecordRaw[]
if (envs.VITE_ROUTER_AUTOLOAD) {
  routes = autoloadRoutes()
} else {
  routes = autoloadModuleRoutes()
}
export default routes
