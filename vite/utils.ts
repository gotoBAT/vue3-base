import { cloneDeep } from 'lodash'

export const parseEnv = (env: Record<string, string>) => {
  const envs: any = cloneDeep(env)
  Object.entries(envs).forEach(([key, value]) => {
    if (value == 'true' || value == 'false')
      envs[key] = value == 'true' ? true : false
    else if (/^\d+$/.test(value as string)) envs[key] = Number(value)
    else if (value == 'null') envs[key] = null
    else if (value == 'undefined') envs[key] = undefined
  })
  return envs
}
