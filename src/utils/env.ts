import { cloneDeep } from 'lodash'

const envs = cloneDeep(import.meta.env)
Object.entries(envs).forEach(([key, value]) => {
  if (value == 'true' || value == 'false')
    envs[key] = value == 'true' ? true : false
  else if (/^\d+$/.test(value as string)) envs[key] = Number(value)
  else if (value == 'null') envs[key] = null
  else if (value == 'undefined') envs[key] = undefined
})

export default envs
