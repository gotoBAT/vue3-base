interface ResponseResult<T> {
  code: number
  type: 'success' | 'error'
  message: string
  result: T
}
