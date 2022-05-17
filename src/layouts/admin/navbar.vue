<script setup lang="ts">
import userStore from '@/store/userStore'
import { user } from '@/utils'
const userInfo = userStore().userInfo
</script>

<template>
  <div class="bg-white p-3 px-5 flex justify-between items-center">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">编辑器</el-breadcrumb-item>
      <el-breadcrumb-item>富文本编辑器</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="flex justify-center items-center relative group cursor-pointer">
      <img :src="userInfo?.avatar" class="w-8 h-8 rounded-full object-cover" />
      <span class="ml-1 text-sm text-gray-600">{{ userInfo?.name }}</span>
      <section
        class="group-hover:block absolute right-0 z-50 top-full bg-white shadow-sm whitespace-nowrap border rounded-md hidden overflow-hidden"
      >
        <div class="info-menu">
          <a class="fas fa-paste"></a>
          <span>文档资料</span>
        </div>
        <div class="info-menu">
          <a class="fas fa-house-user"></a>
          <span>网站首页</span>
        </div>
        <div class="info-menu border-none" @click="user.logout()">
          <a class="fas fa-sign-out-alt"></a>
          <span>退出登录</span>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss">
.info-menu {
  @apply flex items-center cursor-pointer border-b py-3 px-3 hover:bg-indigo-600 duration-300 hover:text-white ;
  &:hover span {
    @apply text-white;
  }
  span {
    @apply text-xs text-gray-600 ml-2;
  }
}
</style>
