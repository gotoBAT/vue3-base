import { RouteLocationNormalized, Router } from 'vue-router'
import { store } from '@/utils'
import userStore from '@/store/userStore'
import { CacheEnum } from '@/enum/cacheEnum'
class Guard {
  constructor(private router: Router) {}
  public run() {
    this.router.beforeEach(async (to, from) => {
      if (this.isLogin(to) === false)
        return { name: 'login', query: { redirect: to.fullPath } }
      if (this.isGuest(to) === false) return from
      await this.getUserInfo()
    })
  }
  private getUserInfo() {
    if (this.getToken()) return userStore().getUser()
  }
  private getToken(): string | undefined {
    return store.get(CacheEnum.TOKEN_NAME)
  }
  private isGuest(route: RouteLocationNormalized): boolean {
    return Boolean(!route.meta.guest || (route.meta.guest && !this.getToken()))
  }
  private isLogin(route: RouteLocationNormalized): boolean {
    const state = Boolean(
      !route.meta.requiresAuth || (route.meta.requiresAuth && this.getToken())
    )
    // if (state === false) store.set(CacheEnum.REDIRECT_ROUTE_NAME, route.name)
    return state
  }
}

export default (router: Router) => {
  new Guard(router).run()
}
