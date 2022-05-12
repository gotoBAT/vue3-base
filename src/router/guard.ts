import { RouteLocationNormalized, Router } from 'vue-router'
import { store } from '@/utils'
class Guard {
  constructor(private router: Router) {}
  public run() {
    this.router.beforeEach((to, from) => {
      const token = store.get('token')?.token
      if (this.isLogin(to, token) === false) return { name: 'login' }
      if (this.isGuest(to, token) === false) return from
    })
  }
  private isGuest(route: RouteLocationNormalized, token: any): boolean {
    return Boolean(!route.meta.guest || (route.meta.guest && !token))
  }
  private isLogin(route: RouteLocationNormalized, token: any): boolean {
    return Boolean(
      !route.meta.requiresAuth || (route.meta.requiresAuth && token)
    )
  }
}

export default (router: Router) => {
  new Guard(router).run()
}
