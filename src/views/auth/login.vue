<template>
  <div class="bg-slate-300 h-screen flex justify-center items-center p-5">
    <div
      class="bg-white w-[768px] md:grid grid-cols-2 rounded-md overflow-hidden shadow-md"
    >
      <div class="hidden md:block">
        <img src="/images/login-bg.jpeg" class="h-full w-full object-cover" />
      </div>
      <div class="p-6 flex flex-col justify-center">
        <div>
          <h2 class="text-center text-gray-700 text-2xl mt-3">会员登录</h2>
          <div>
            <hdInput
              placeholder="请输入邮箱或者手机号"
              type="text"
              v-model="form.account"
            />
            <hdInput
              placeholder="请输入登录密码"
              type="password"
              v-model="form.password"
            />
          </div>
          <hdButton />
          <div class="flex gap-2 justify-center mt-5">
            <hdLink class="hd-link" />
            <a href="#" class="text-md text-gray-700">找回密码</a>
            <a href="#" class="text-md text-gray-700">回到主页</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive<{ account: string | number; password: string }>({
  account: '',
  password: ''
})
</script>

<style lang="scss"></style>
