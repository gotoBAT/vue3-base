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
export interface ILoginData {
  account: string
  password: string
}
const login = (data: ILoginData) => {
  return http.request<loginInterface>({
    method: 'POST',
    url: 'login',
    data
  })
}
export default { getUser, login }
