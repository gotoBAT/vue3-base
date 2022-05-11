<template>
  <a href="#">{{ title }}</a>
</template>

<script setup lang="ts">
const prop = defineProps({
  title: String
})
</script>

<style lang="scss" scoped>
.hd-link {
  @apply text-base text-gray-700 hover:text-violet-400;
}
</style>
