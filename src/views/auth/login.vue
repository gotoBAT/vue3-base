<template>
  <Form @submit="onSubmit" :validation-schema="schema" #default="{ errors }">
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
            <Field
              name="account"
              class="hd-input"
              label="账号"
              placeholder="请输入邮箱或手机号"
              ƒ
            ></Field>
            <div v-if="errors.account" class="hd-error">请输入邮箱或手机号</div>
            <Field
              name="password"
              class="hd-input"
              label="密码"
              type="password"
              placeholder="请输入密码"
            ></Field>
            <ErrorMessage
              name="password"
              as="div"
              class="hd-error"
            ></ErrorMessage>
          </div>
          <hdButton />
          <div class="flex justify-center mt-3">
            <i class="fa fa-wechat bg-green-500 text-white rounded-md p-1 cursor-pointer"></i>
          </div>
          <div class="flex gap-2 justify-center mt-5">
            <hdLink class="hd-link" title="会员注册" />
            <hdLink class="hd-link" title="找回密码" />
            <hdLink class="hd-link" title="回到主页" />
          </div>
        </div>
      </div>
    </div>
  </Form>
</template>

<script setup lang="ts">
import v from '@/plugins/validate'
const { Form, Field, ErrorMessage } = v
const onSubmit = (value: any) => {
  console.log(value)
  alert('验证通过')
}
const schema = {
  account: {
    required: true,
    regex: /[\d\w\._-]+@[\d\w]+\.[\w]+|^1[358]\d{9}$/
  },
  password: { required: true, min: 3 }
}
/* const schema = v.yup.object({
  account: v.yup.string().required().email().label('密码'),
  password: v.yup.string().required().min(3).label('密码')
}) */
</script>

<style lang="scss" scoped>
form {
  @apply bg-slate-300 h-screen flex justify-center items-center p-5;
}
</style>
