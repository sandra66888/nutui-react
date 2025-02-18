import {
  ConfigProvider,
  useConfig,
  setDefaultConfig,
  getDefaultConfig,
  useRtl,
} from './configprovider'

export type { ConfigProviderProps, Direction } from './configprovider'
export type { NutCSSVariables } from './types'
export { useConfig, setDefaultConfig, getDefaultConfig, useRtl }
export default ConfigProvider
