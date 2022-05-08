import { cloneDeep } from 'lodash'

class Helper {
  public envs = {} as ImportMetaEnv
  constructor() {
    this.envs = this.getEnvs()
  }
  getEnvs() {
    const envs = cloneDeep(import.meta.env)
    Object.entries(import.meta.env as Record<string, any>).forEach(
      ([key, value]) => {
        if (value == 'true' || value == 'false')
          envs[key] = value == 'true' ? true : false
        else if (/^\d+$/.test(value as string)) envs[key] = Number(value)
        else if (value == 'null') envs[key] = null
        else if (value == 'undefined') envs[key] = undefined
      }
    )
    return envs
  }
}
const helper = new Helper()
const envs = helper.envs

export default Helper
export { envs }
