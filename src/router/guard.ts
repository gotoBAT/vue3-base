import { RouteLocationNormalized, Router } from 'vue-router'
import { store } from '@/utils'
import userStore from '@/store/user'
class Guard {
  constructor(private router: Router) {}
  public run() {
    this.router.beforeEach(async (to, from) => {
      if (this.isLogin(to) === false) return { name: 'login' }
      if (this.isGuest(to) === false) return from
      await this.getUserInfo()
    })
  }
  private getUserInfo() {
    if (this.getToken()) return userStore().getUser()
  }
  private getToken(): string | undefined {
    return store.get('token')?.token
  }
  private isGuest(route: RouteLocationNormalized): boolean {
    return Boolean(!route.meta.guest || (route.meta.guest && !this.getToken()))
  }
  private isLogin(route: RouteLocationNormalized): boolean {
    return Boolean(
      !route.meta.requiresAuth || (route.meta.requiresAuth && this.getToken())
    )
  }
}

export default (router: Router) => {
  new Guard(router).run()
}
