import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
const getRoutes = () => {
  const router = useRouter()
  const routes = router
    .getRoutes()
    .filter((route) => route.children.length && route.meta.show)
    .map((route) => {
      route.children = route.children.filter((child) => child.meta?.show)
      return route
    })
    .filter((route) => route.children.length)
  return routes
}
export const router = defineStore('router', {
  state: () => {
    return {
      routes: getRoutes()
    }
  }
})
