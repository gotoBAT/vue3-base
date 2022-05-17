<script setup lang="ts">
import { IMenu } from '#/menu'
import menuStore from '@/store/menuStore'
import { useRouter } from 'vue-router'
const router = useRouter()
const menu = menuStore()
const reset = () => {
  menu.menus.forEach((menu) => {
    menu.isClick = false
    menu.children?.forEach((menu) => {
      menu.isClick = false
    })
  })
}
const handle = (menuItem: IMenu, cMenuItem?: IMenu) => {
  if (!menuItem.isClick) {
    reset()
  } else {
    menuItem.children?.forEach((menu) => {
      if (menu !== cMenuItem) {
        menu.isClick = false
      }
    })
  }
  menuItem.isClick = true
  if (cMenuItem) {
    cMenuItem.isClick = true
    router.push({ name: cMenuItem.route })
  }
}
</script>
<template>
  <div class="menu w-[200px] bg-gray-800 p-4">
    <div class="logo text-gray-300 flex items-center justify-center">
      <i class="fas fa-robot text-fuchsia-300 mr-2 text-[25px]"></i>
      <span class="text-md">MichaelWu</span>
    </div>
    <div class="left-container">
      <dl v-for="(menuItem, index) of menu.menus" :key="index">
        <dt @click="handle(menuItem)">
          <section>
            <i :class="menuItem.icon"></i>
            <span class="text-md">{{ menuItem.title }}</span>
          </section>
          <section>
            <i
              class="fas fa-angle-down duration-300"
              :class="{ 'rotate-180': menuItem.isClick }"
            ></i>
          </section>
        </dt>
        <dd
          v-show="menuItem.isClick"
          v-for="(cMenuItem, index) of menuItem.children"
          :key="index"
          :class="{ active: cMenuItem?.isClick }"
          @click="handle(menuItem, cMenuItem)"
        >
          {{ cMenuItem?.title }}
        </dd>
      </dl>
    </div>
  </div>
</template>

<style lang="scss">
.admin {
  .left-container {
    dl {
      @apply text-gray-300 text-sm;
      dt {
        @apply text-sm mt-6 cursor-pointer flex justify-between items-center;
        section {
          @apply flex items-center;
          i {
            @apply mr-2 text-sm;
          }
        }
      }
      dd {
        @apply py-3 pl-4 my-2 text-white rounded-md cursor-pointer duration-300 hover:bg-violet-500
				bg-gray-700;
        &.active {
          @apply bg-violet-700;
        }
      }
    }
  }
}
</style>
