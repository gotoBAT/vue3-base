import { http } from '@/plugins/axios'
export interface User {
  name: string
  age: number
  avatar: string
}
const getUser = () => {
  return http.request<User>({
    method: 'GET',
    url: 'user/info'
  })
}
const login = () => {}
export default { getUser, login }
