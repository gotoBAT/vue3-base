import vue from '@vitejs/plugin-vue'
import { Plugin } from 'vite'
import setupMockPlugin from './mock'
export default function setupPlugins(isBulid: boolean, env: ViteEnv) {
  const basePlugins: Plugin[] = [vue()]
  //mockjs
  const mockjs = setupMockPlugin(isBulid)
  basePlugins.push(mockjs)

  return basePlugins
}
