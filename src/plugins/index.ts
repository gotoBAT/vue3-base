import { App } from 'vue'
import { setupTailwindCSS } from './tailwindcss'
import setupElementPlus from './elementui'
import { camelCase } from 'lodash'
function autoRegisterComponents(app: App) {
  const commonComponents = import.meta.globEager('../components/form/*.vue')
  Object.entries(commonComponents).forEach(([filename, module]) => {
    const name = filename.split('/').pop()?.split('.').shift()
    app.component(camelCase(name), module.default)
  })
}
export function setupPlugins(app: App) {
  autoRegisterComponents(app)
  setupTailwindCSS()
  setupElementPlus(app)
}
