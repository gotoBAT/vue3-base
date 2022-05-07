import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import alias from './vite/alias'
import { parseEnv } from './vite/utils'
export default ({ command, mode }: ConfigEnv) => {
  const isBuild = command === 'build'
  const root = process.cwd()
  const env = parseEnv(loadEnv(mode, root))
  console.log(env)
  return {
    plugins: [vue()],
    resolve: {
      alias
    }
  }
}
