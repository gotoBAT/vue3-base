import yup from './yup'

import rules from '@vee-validate/rules'
import * as veeValidate from 'vee-validate'
import { loadLocaleFromURL, localize } from '@vee-validate/i18n'
// import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json'
loadLocaleFromURL(
  'https://unpkg.com/@vee-validate/i18n@4.1.0/dist/locale/zh_CN.json'
)

// 配置
veeValidate.configure({
  // 中文支持
  generateMessage: localize('zh_CN'),
  // input事件时验证
  validateOnInput: true
})

// 批量定义规则
Object.keys(rules).forEach((key) => {
  veeValidate.defineRule(key, rules[key])
})

export default { yup, ...veeValidate }
