interface ViteEnv {
  VITE_ROUTE_AUTOLOAD: boolean
  VITE_API_URL: string
  VITE_URL?: string
}
interface ImportMetaEnv extends ViteEnv {}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
