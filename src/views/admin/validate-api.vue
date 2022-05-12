<template>
  <form @submit="onSubmit">
    <section>
      <input type="text" v-model="usernameValue" />
      <p v-if="errors.username" class="error">{{ errors.username }}</p>
    </section>
    <section>
      <input type="password" v-model="passwordValue" />
      <p v-if="errors.password" class="error">{{ errors.password }}</p>
    </section>
    <button>提交</button>
  </form>
</template>

<script setup lang="ts">
import v from '@/plugins/validate'
const { handleSubmit, errors } = v.useForm({
  initialValues: {
    username: 'michaelwu',
    password: ''
  },
  validationSchema: {
    username: v.yup.string().required().email().label('用户名'),
    password: { required: true }
  }
})
const { value: usernameValue } = v.useField('username', {}, { label: '用户名' })
const { value: passwordValue } = v.useField('password', {}, { label: '密码' })
const onSubmit = handleSubmit((value) => {
  console.log(value)
  alert('验证通过')
})
</script>

<style scoped lang="scss">
section {
  .error {
    @apply text-red-800 text-lg;
  }
  input {
    @apply outline-none border border-violet-700 p-2 mt-4;
  }
}
</style>
<script lang="ts">
export default {
  route: {
    meta: {
      requiresAuth: true
    }
  }
}
</script>
