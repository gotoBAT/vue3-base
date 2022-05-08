import { ConfigEnv, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import alias from './vite/alias'
import setupPlugins from './vite/plugins'
import { parseEnv } from './vite/utils'
export default ({ command, mode }: ConfigEnv) => {
  const isBuild = command === 'build'
  const root = process.cwd()
  const env = parseEnv(loadEnv(mode, root))
  console.log(env.VITE_ROUTE_AUTOLOAD)
  return {
    // plugins: [vue()],
    plugins: setupPlugins(isBuild, env),
    resolve: {
      alias
    }
  }
}
