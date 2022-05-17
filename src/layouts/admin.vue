<script setup lang="ts">
import MenuComponet from './admin/menu.vue'
import NavBar from './admin/navbar.vue'
import HistoryLink from './admin/historyLink.vue'
import menuStore from '@/store/menuStore'
const menu = menuStore()
menu.init()
</script>
<template>
  <div class="admin w-screen min-h-screen flex">
    <MenuComponet class="hidden md:block" />
    <div class="content bg-gray-100 flex-1">
      <NavBar />
      <HistoryLink />
      <div class="m-5">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
<script lang="ts">
export default {
  route: {
    meta: {
      requiresAuth: true
    }
  }
}
</script>
