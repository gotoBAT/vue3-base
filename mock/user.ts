// test.ts
import { Random } from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/user/info',
    method: 'get',
    response: () => {
      return {
        code: 200,
        type: 'success',
        message: '请求成功',
        result: {
          name: '吴天生',
          age: 18,
          avatar: '/images/cartoon-avatar.jpeg'
        }
      }
    }
  },
  {
    url: '/api/login',
    method: 'post',
    timeout: 2000,
    response: {
      code: 200,
      type: 'success',
      message: '登录成功',
      result: {
        token: Random.string(10)
      }
    }
  },
  {
    url: '/api/text',
    method: 'post',
    rawResponse: async (req, res) => {
      let reqbody = ''
      await new Promise((resolve) => {
        req.on('data', (chunk) => {
          reqbody += chunk
        })
        req.on('end', () => resolve(undefined))
      })
      res.setHeader('Content-Type', 'text/plain')
      res.statusCode = 200
      res.end(`hello, ${reqbody}`)
    }
  }
] as MockMethod[]
