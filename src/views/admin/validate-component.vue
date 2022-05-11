<template>
  <Form @submit="onSubmit">
    <Field
      name="account"
      label="账号"
      :rules="{ required: true, email: true }"
      :validate-on-input="true"
      #default="{ field, errorMessage }"
    >
      <input type="text" v-bind="field" />
      <hr />
      <p>{{ errorMessage }}</p>
      <hr />
      <button>提交</button>
    </Field>
  </Form>
</template>

<script setup lang="ts">
import v from '@/plugins/validate'
const { Field, Form } = v
const onSubmit = (value: any) => {
  console.log(value)
  alert('验证通过')
}
</script>

<style scoped></style>
