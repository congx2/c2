import { ENV } from '@constants/env'
import devConfig from './config.dev'
import sitConfig from './config.sit'
import proConfig from './config.pro'

const configLoader = () => {
  if (process.env.NODE_ENV === ENV.DEV) {
    return devConfig
  }
  if (process.env.NODE_ENV === ENV.SIT) {
    return sitConfig
  }
  return proConfig
}

export default configLoader
