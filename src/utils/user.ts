import userApi, { ILoginData } from '@/apis/userApi'
import { CacheEnum } from '@/enum/cacheEnum'
import { store } from '@/utils'
import router from '@/router'
import userStore from '@/store/userStore'

export async function login(values: ILoginData) {
  const {
    result: { token }
  } = await userApi.login(values)
  store.set(CacheEnum.TOKEN_NAME, { token })
  /* const routeName = store.get(CacheEnum.REDIRECT_ROUTE_NAME) || 'home'
  router.push({ name: routeName }) */
  router.push((router.currentRoute.value.query?.redirect as string) ?? 'home')
}

export function logout() {
  store.remove(CacheEnum.TOKEN_NAME)
  router.push('/')
  userStore().userInfo = null
}

export default { login, logout }
