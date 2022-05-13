import userApi, { User } from '@/apis/userApi'
import { defineStore } from 'pinia'

export default defineStore('user', {
  state: () => {
    return {
      userInfo: {} as null | User
    }
  },
  actions: {
    async getUser() {
      const res = await userApi.getUser()
      this.userInfo = res.result
    }
  }
})
