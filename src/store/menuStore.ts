import { defineStore } from 'pinia'
import router from '@/router'
import { IMenu } from '#/menu'
export default defineStore('menu', {
  state: () => {
    return {
      menus: [] as IMenu[]
    }
  },
  actions: {
    init() {
      this.getMenusByRoutes()
    },
    getMenusByRoutes() {
      this.menus = router
        .getRoutes()
        .filter((route) => route.children.length && route.meta.menu)
        .map((route) => {
          let menus: IMenu = { ...route.meta.menu }
          menus.children = route.children
            .filter((child) => child.meta?.menu)
            .map((route) => {
              return { ...route.meta?.menu, route: route.name }
            }) as IMenu[]
          return menus
        })
        .filter((route) => route.children?.length) as IMenu[]
    }
  }
})
