<script setup lang="ts"></script>

<template>
  <div
    class="h-screen w-screen bg-gray-700 flex flex-col justify-center items-center"
  >
    <img
      src="/images/cartoon-avatar.jpeg"
      class="w-40 h-40 object-cover rounded-full border-8 border-white mb-5"
    />
    <div>
      <router-link :to="{ name: 'admin.home' }" class="hd-button"
        >后台管理</router-link
      >
      <router-link :to="{ name: 'login' }" class="hd-button hd-danger ml-3"
        >用户登录</router-link
      >
    </div>
    <div class="text-gray-300 text-xs font-mono drop-shadow-md mt-6">
      简单生活，享受生活
    </div>
  </div>
</template>

<style lang="scss"></style>

<script lang="ts">
export default {
  route: { name: 'home' }
}
</script>
