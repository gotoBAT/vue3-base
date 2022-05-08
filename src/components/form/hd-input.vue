<template>
  <input
    placeholder="请输入登录账号"
    class="hd-input"
    :value="prop.modelValue"
    @input="$emit('update:modelValue',($event.target as HTMLInputElement).value)"
  />
</template>

<script setup lang="ts">
const prop = defineProps({
  modelValue: String
})
</script>

<style lang="scss">
.hd-input {
  @apply w-full px-3 py-2 mt-8 outline-none border border-gray-300 rounded-md focus:ring-4 ring-offset-2 ring-violet-500 focus:border-white duration-300;
}
</style>
