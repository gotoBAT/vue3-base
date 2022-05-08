<script setup lang="ts">
import { envs } from '@/types/helper'
import userApi from '@/apis/userApi'
console.log(envs.VITE_ROUTE_AUTOLOAD)
const response = await userApi.getUser()
console.log(response.result.avatar)
</script>

<template>
  <suspense>
    <template #default>
      <ul class="bg-red-600">
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <router-view />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </suspense>
</template>

<style></style>
