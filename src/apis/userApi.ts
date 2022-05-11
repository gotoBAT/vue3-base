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
interface loginInterface {
  token: string
}
const login = (data: any) => {
  return http.request<loginInterface>({
    method: 'POST',
    url: 'login',
    data
  })
}
export default { getUser, login }
